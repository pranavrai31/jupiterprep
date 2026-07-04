/*
  # Add image_path column to referrals table

  1. Changes
    - Add `image_path` column to store student profile image paths
    - Column is optional to support existing referrals without images
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'referrals' AND column_name = 'image_path'
  ) THEN
    ALTER TABLE referrals ADD COLUMN image_path text;
  END IF;
END $$;
