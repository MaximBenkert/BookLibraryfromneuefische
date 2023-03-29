import {Book, NewBook} from "../model/Book";
import {ChangeEvent, FormEvent, ReactNode, useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";

type AddBarProps = {
    addBook: (newBook: NewBook) => void
}

export default function AddBar(props: AddBarProps){


    const initialState: NewBook = {
        title: "",
        author: "",
        cover: ""
    }

    const [book, setBook] = useState<NewBook>(initialState)

    const onBookChange = (event: ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name
        const value = event.target.value
        setBook(
            {
                ...book,
                [targetName]: value
            }
        )
    }

    const handleChange = (event: SelectChangeEvent) => {
        const targetName = event.target.name
        const value = event.target.value
        setBook(
            {
                ...book,
                [targetName]: value
            }
        )
    };

    function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.addBook(book)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" onChange={onBookChange} value={book.title}/>
                <input type="text" name="author" onChange={onBookChange} value={book.author}/>
                <input type="text" name="cover" onChange={onBookChange} value={book.cover}/>

                    <InputLabel>Cover</InputLabel>
                    <Select
                        name="cover"


                        value={book.cover}
                        label="Cover"
                        onChange={handleChange}
                    >
                        <MenuItem value="HARDCOVER">Hardcover</MenuItem>
                        <MenuItem value="AUDIOBOOK">Audiobook</MenuItem>
                        <MenuItem value="EBOOK">eBook</MenuItem>
                    </Select>

                <button type="submit">Add Book</button>
                <div>

                </div>


            </form>
        </div>

    )


}