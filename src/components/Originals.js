import React from 'react';
import CarouselItemTv from './CarouselItemTv';
import { connect } from "react-redux";
import { fetchOriginals } from "../actions";

class Originals extends React.Component {
  componentDidMount() {
    this.props.fetchOriginals();
  }

  render() {
    const title = "Originals";
    return (
      <CarouselItemTv movieData={this.props.data.originals} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchOriginals })(Originals);
