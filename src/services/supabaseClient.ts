import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vfabdzcrfjbljmmkwzny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYWJkemNyZmpibGptbWt3em55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MDMwMTcsImV4cCI6MjAxMDI3OTAxN30.WcXyrQWI31A0H1q-XclgvHl3g4tlpDcytfdJU8rX_Ao";

const client = createClient(supabaseUrl, supabaseKey);

export { client };
