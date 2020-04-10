const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILIRE',
        payload: error
    }
}
const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}
const bookDeletedFromCart = (bookId) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: bookId
    }
}
const bookDecreaseFromCart = (bookId) => {
    return {
        type: 'BOOK_DECREASE_FROM_CART',
        payload: bookId
    }
}
const fetchBooksOld = (booksstoreService, dispatch) => () => {
    dispatch(booksRequested())
    booksstoreService.getBooks()
        .then((data)=> dispatch(booksLoaded(data)))
        .catch((err)=> dispatch(booksError(err)))
}

const fetchBooks = (booksstoreService) => () => (dispatch) => {
    dispatch(booksRequested())
    booksstoreService.getBooks()
        .then((data)=> dispatch(booksLoaded(data)))
        .catch((err)=> dispatch(booksError(err)))   
}

export {
    fetchBooks,
    bookAddedToCart,
    bookDeletedFromCart,
    bookDecreaseFromCart
}