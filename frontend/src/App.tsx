import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Book, NewBook} from "./model/Book";
import BookGallery from "./components/BookGallery";
import AddBar from "./components/AddBar";

function App() {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(()=> {
        getAllBooks()
        },[]
    )
    function getAllBooks():void{
        axios.get<Book[]>("/api/books")
            .then(getAllBooksResponse =>{
                setBooks(getAllBooksResponse.data)
        })
            .catch((error) => {
                console.error(error)
            })
    }
    function addBook(newBook: NewBook){
        axios.post("/api/books", newBook)
            .then((addBookResponse)=>{
                setBooks([...books, addBookResponse.data])
            })
            .catch((error)=>{
                console.error(error)
            })
    }
    function deleteBook (isbn: string){
        axios.delete("/api/books/" + isbn)
            .then(()=>{
                setBooks(books.filter((book)=> book.isbn !== isbn))
            })
            .catch((error)=>{
            console.error(error)
        })
    }


  return (
    <div className="App">
      <h1>My Books</h1>
        <div>
            <BookGallery books={books} deleteBook={deleteBook}/>
            <AddBar addBook={addBook}/>
        </div>

    </div>
  );
}

export default App;
