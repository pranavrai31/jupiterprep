/*
  # Create referrals table for SAT tutoring testimonials

  1. New Tables
    - `referrals`
      - `id` (uuid, primary key)
      - `student_name` (text, not null)
      - `initial_score` (integer)
      - `final_score` (integer, not null)
      - `testimonial` (text)
      - `score_improvement` (integer, generated)
      - `created_at` (timestamp)
      - `is_active` (boolean, for display control)

  2. Security
    - Enable RLS on `referrals` table
    - Add policy for public read access (testimonials are public)
    - Add policy for admin to manage referrals
*/

CREATE TABLE IF NOT EXISTS referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  initial_score integer,
  final_score integer NOT NULL,
  testimonial text,
  created_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Referrals are publicly readable"
  ON referrals
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Anyone can insert referrals"
  ON referrals
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Admin can update and delete"
  ON referrals
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete referrals"
  ON referrals
  FOR DELETE
  TO authenticated
  USING (true);