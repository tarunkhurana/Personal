import { combineReducers } from 'redux';
import  BooksReducer  from "./reducer_books";
import ActiveBook from "./reducer_activeBook";
const rootReducer = combineReducers({
    //state: (state = {}) => state
    books: BooksReducer,
    activeBook:ActiveBook
});

export default rootReducer;