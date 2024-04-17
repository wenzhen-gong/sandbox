const { createClient } = require('@supabase/supabase-js');

const URL = 'https://abyhqygnagfabbeaxciq.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFieWhxeWduYWdmYWJiZWF4Y2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMzgxODQsImV4cCI6MjAyODkxNDE4NH0.WnD6QIfxz4w5U_os09GjdHrgjrF_HCyEUDhxi0hSeZw';

const supabase = createClient(URL, KEY);

module.exports = supabase;