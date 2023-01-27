import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://psxooosgcxukswrfyehz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeG9vb3NnY3h1a3N3cmZ5ZWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3MTkxMDAsImV4cCI6MTk4OTI5NTEwMH0.biFntgiEgvqRjBkbs_oQQTlm8pYt9xtoYoObvdJP1xQ');