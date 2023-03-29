import {Book} from "../model/Book";
import BookItem from "./BookItem";
import "./BookGallery.css"

type BookGalleryProps = {
    books: Book[]
    deleteBook: (id: string) => void
}

export default function BookGallery(props: BookGalleryProps){
    const normalBooks: Book[] = props.books.filter((book)=>book.cover === "HARDCOVER")
    const audioBooks: Book[] = props.books.filter((book)=>book.cover === "AUDIOBOOK")
    const eBooks: Book[] = props.books.filter((book)=>book.cover === "EBOOK")

    return(
        <div className="book-gallery">
            <div>{normalBooks.map ((normalBook)=> <BookItem key={normalBook.isbn}
                                                            book={normalBook}
                                                            deleteBook={props.deleteBook}/>)}

            </div>

            <div>{eBooks.map ((eBook)=> <BookItem key={eBook.isbn}
                                                  book={eBook}
                                                  deleteBook={props.deleteBook}/>)}</div>

            <div>{audioBooks.map ((audioBook)=> <BookItem key={audioBook.isbn}
                                                          book={audioBook}
                                                          deleteBook={props.deleteBook}/>)}</div>
        </div>

    )
}
