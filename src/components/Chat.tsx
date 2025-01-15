import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Message {
  id: string;
  message: string;
  created_at: string;
  user: {
    username: string;
  };
}

interface ChatUser {
  id: string;
  username: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [isJoined, setIsJoined] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (userId) {
      // Subscribe to new messages
      const subscription = supabase
        .channel('messages')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages'
          },
          async (payload) => {
            const { data: message } = await supabase
              .from('chat_messages')
              .select('*, user:chat_users(username)')
              .eq('id', payload.new.id)
              .single();

            if (message) {
              setMessages(prev => [...prev, message]);
            }
          }
        )
        .subscribe();

      // Fetch existing messages
      fetchMessages();

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [userId]);

  const fetchMessages = async () => {
    const { data } = await supabase
      .from('chat_messages')
      .select('*, user:chat_users(username)')
      .order('created_at', { ascending: true });

    if (data) {
      setMessages(data);
    }
  };

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    const { data: user, error } = await supabase
      .from('chat_users')
      .insert([{ username }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique violation
        alert('Username already taken. Please choose another one.');
      } else {
        console.error('Error joining chat:', error);
      }
      return;
    }

    if (user) {
      setUserId(user.id);
      setIsJoined(true);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !userId) return;

    const { error } = await supabase
      .from('chat_messages')
      .insert([
        {
          user_id: userId,
          message: newMessage.trim()
        }
      ]);

    if (error) {
      console.error('Error sending message:', error);
      return;
    }

    setNewMessage('');
  };

  if (!isJoined) {
    return (
      <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Join Chat</h3>
        </div>
        <form onSubmit={handleJoin} className="p-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Join
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Chat ({username})</h3>
      </div>
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.user.username === username ? 'text-right' : ''}`}
          >
            <div
              className={`inline-block max-w-[80%] rounded-lg p-3 ${
                message.user.username === username
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm font-semibold">{message.user.username}</p>
              <p>{message.message}</p>
              <p className="text-xs mt-1 opacity-75">
                {format(new Date(message.created_at), 'HH:mm')}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;