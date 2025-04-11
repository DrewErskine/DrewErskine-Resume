-- Create the database (run this separately if using psql)
-- CREATE DATABASE drewerskine_resume;

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT FALSE
);

-- Create an index on the read status for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_read ON contact_submissions(read);

-- Create an index on the created_at timestamp for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Create an admin user (example only - use proper authentication in production)
-- CREATE USER admin WITH PASSWORD 'adminpassword';
-- GRANT ALL PRIVILEGES ON DATABASE drewerskine_resume TO admin;
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin; 