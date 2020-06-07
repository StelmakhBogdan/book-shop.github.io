import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import {fetchBooks, bookAddedToCart} from '../redux/actions';
import {compose} from '../utils';
import {withBookstoreService} from '../components/hoc';
import BookList from '../components/book-list';


class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    };

    render() {
        const {books, loading, error, onAddedToCard } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList books={books} onAddedToCard={onAddedToCard}/>
    };
}

    const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
};

    const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCard: bookAddedToCart
    }, dispatch)
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);