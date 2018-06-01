import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import { fetchSearchResults } from "../actions";

class Search_bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    handleClick() {
        this.props.fetchSearchResults(this.state.term);
        this.setState({ term: "" })
    }

    render() {
        return (
            <div>
                <input
                    type="search"
                    placeholder="Enter Movie Title"
                    id="searchbar"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <Link to="/search" onClick={this.handleClick}>
                    <img src="images/search.gif" alt="search" />
                </Link>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSearchResults }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search_bar);