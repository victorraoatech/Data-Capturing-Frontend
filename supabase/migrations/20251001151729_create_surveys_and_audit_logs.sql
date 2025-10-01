/*
  # Create Surveys and Audit Logs Schema

  1. New Tables
    - `surveys`
      - `id` (uuid, primary key)
      - `type` (text) - "Survey" or "Quiz"
      - `title` (text)
      - `responses` (integer)
      - `last_updated` (timestamptz)
      - `image_url` (text, nullable)
      - `created_at` (timestamptz)
    
    - `audit_logs`
      - `id` (uuid, primary key)
      - `user_name` (text)
      - `action` (text)
      - `entity` (text)
      - `timestamp` (text)
      - `is_system` (boolean)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (for demo purposes)
*/

CREATE TABLE IF NOT EXISTS surveys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  title text NOT NULL,
  responses integer DEFAULT 0,
  last_updated timestamptz DEFAULT now(),
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  action text NOT NULL,
  entity text NOT NULL,
  timestamp text NOT NULL,
  is_system boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE surveys ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to surveys"
  ON surveys
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to audit_logs"
  ON audit_logs
  FOR SELECT
  TO anon, authenticated
  USING (true);