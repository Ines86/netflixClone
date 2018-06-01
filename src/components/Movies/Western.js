import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchWesterns } from "../../actions/movies_actions";

class Western extends React.Component {

  componentDidMount() {
    this.props.fetchWesterns();
  }

  // Render Westerns
  render() {
    const title = "Westerns";
    return (
      <CarouselItem movieData={this.props.data.western} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchWesterns })(Western);
