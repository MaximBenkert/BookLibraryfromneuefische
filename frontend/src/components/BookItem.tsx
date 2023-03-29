import {Book} from "../model/Book";

export type BookItemProps = {
    book: Book
    deleteBook: (id: string)=> void
}

export default function BookItem(props: BookItemProps){
    function onDeleteClick(){
        props.deleteBook(props.book.isbn)

    }

    return(
        <div>
            {props.book.title}
            {props.book.author}
            {props.book.cover}
            <button onClick={onDeleteClick}>Delete</button>


        </div>

    )
}