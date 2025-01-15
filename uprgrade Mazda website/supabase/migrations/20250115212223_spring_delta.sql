/*
  # Create chat tables

  1. New Tables
    - `chat_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `created_at` (timestamp)
    - `chat_messages`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create chat_users table
CREATE TABLE IF NOT EXISTS chat_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES chat_users(id) ON DELETE CASCADE,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chat_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policies for chat_users
CREATE POLICY "Anyone can create a user"
  ON chat_users
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read all users"
  ON chat_users
  FOR SELECT
  TO public
  USING (true);

-- Policies for chat_messages
CREATE POLICY "Anyone can create messages"
  ON chat_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can read messages"
  ON chat_messages
  FOR SELECT
  TO public
  USING (true);