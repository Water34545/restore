import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import BookItem from '../book-item'
import {fetchBooks, bookAddedToCart} from '../../actions'
import {withBooksstoreService} from '../hoc'
import {compose} from '../../utils'
import Spinner from '../spinner'
import ErorrIndicator from '../error-indicator'
import './books-list.css'

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='books-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BooksListContainer extends Component {

    componentDidMount() {
        const {fetchBooks} = this.props
        fetchBooks()
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props

        if(loading) return <Spinner/>

        if(error) return <ErorrIndicator/>

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {books, loading, error}
}
const mapDispatchToProps = (dispatch, {booksstoreService}) => {
    return bindActionCreators ({
        fetchBooks: fetchBooks(booksstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
}

export default compose(
    withBooksstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(BooksListContainer)