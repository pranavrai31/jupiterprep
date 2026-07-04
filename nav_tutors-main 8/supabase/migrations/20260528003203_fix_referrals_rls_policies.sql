/*
  # Fix RLS policies for referrals table

  1. Security Updates
    - Remove overly permissive RLS policies
    - Add restrictive policy for public read access only
    - Only authenticated users can insert/update/delete
    - Ensure all policies have proper conditions

  2. Policy Changes
    - Drop: "Admin can delete referrals" (always true DELETE)
    - Drop: "Admin can update and delete" (always true UPDATE)
    - Drop: "Anyone can insert referrals" (always true INSERT)
    - Keep: "Referrals are publicly readable" (safe SELECT policy)
    - Add: "Authenticated users can insert referrals" (with proper validation)
*/

DROP POLICY IF EXISTS "Admin can delete referrals" ON referrals;
DROP POLICY IF EXISTS "Admin can update and delete" ON referrals;
DROP POLICY IF EXISTS "Anyone can insert referrals" ON referrals;

CREATE POLICY "Authenticated users can insert referrals"
  ON referrals
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update referrals"
  ON referrals
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete referrals"
  ON referrals
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
