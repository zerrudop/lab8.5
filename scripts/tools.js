import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://lrstrovgjcxrqwyokpmm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyc3Ryb3ZnamN4cnF3eW9rcG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MjY2MTUsImV4cCI6MjAyNjMwMjYxNX0.hQ6wSm1o6mo-9dCAgBnVc-cgzPW6x-ScfyDP3Em5nPE'

const supabase = createClient(supabaseUrl, supabaseKey)
console.log('Supabase Instance: ', supabase)
async function getBooks(){
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    for (let book of books){
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td></tr><tr><td>${book.ISBN}</td></tr>`;
        
    }
}

getBooks();

