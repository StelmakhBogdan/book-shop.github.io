import React from 'react';
import BookListItem from '../book-list-item';

import './book-list.css';

const BookList = ({ books, onAddedToCard }) => {

    return (
        <ul className="book-list">
            {
                books && books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCard(book.id)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default BookList;