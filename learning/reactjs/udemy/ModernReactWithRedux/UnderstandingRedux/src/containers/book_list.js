import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";

import { bindActionCreators } from "redux";

// const BookList=()=>{

//     return(
//         <div></div>
//     );
// }

class BookList extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.books.map(book => {
            return ( < li key = { book.title }
                className = "list-group-item"
                onClick = {
                    () => this.props.selectBook(book) } > { book.title } < /li>
            )
        })
    }

    render() {
        return ( < ul className = "list-group col-sm-4" > { this.renderList() } < /ul>)
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of book list
    return {
        books: state.books
    }
}


// Anything returned from this function will end up as props
// on the BookList Container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is callled, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote Book List  from component to container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);