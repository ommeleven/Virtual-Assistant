import { createClient } from '@supabase/supabase-js';
const URL = 'https://qfiommlbjeiugjdfcteb.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmaW9tbWxiamVpdWdqZGZjdGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyOTg3OTUsImV4cCI6MjAwMjg3NDc5NX0.LcZXVGwk2UywO9IbgvDrTFq6LkIsF7lmNUyd3nAd3wo';
export const supabase = createClient(URL, API_KEY);

