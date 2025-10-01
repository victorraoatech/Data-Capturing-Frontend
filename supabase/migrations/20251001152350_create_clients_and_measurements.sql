/*
  # Create Clients and Measurements Schema

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `name` (text)
      - `client_id` (text) - Display ID
      - `joined` (date)
      - `avatar_url` (text, nullable)
      - `created_at` (timestamptz)
    
    - `measurements`
      - `id` (uuid, primary key)
      - `client_id` (uuid, foreign key)
      - `height` (text)
      - `weight` (text)
      - `chest` (text)
      - `waist` (text)
      - `hips` (text)
      - `sleeve_length` (text)
      - `inseam` (text)
      - `neck` (text)
      - `shoulder_width` (text)
      - `arm_length` (text)
      - `measured_date` (date)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (for demo purposes)
*/

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  client_id text NOT NULL,
  joined date DEFAULT CURRENT_DATE,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS measurements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  height text,
  weight text,
  chest text,
  waist text,
  hips text,
  sleeve_length text,
  inseam text,
  neck text,
  shoulder_width text,
  arm_length text,
  measured_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE measurements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to clients"
  ON clients
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to measurements"
  ON measurements
  FOR SELECT
  TO anon, authenticated
  USING (true);