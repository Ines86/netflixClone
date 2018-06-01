import React from 'react';
import CarouselItemTv from './CarouselItemTv';
import { connect } from "react-redux";
import { fetchTvShows } from "../actions";

class TvShows extends React.Component {
  componentDidMount() {
    this.props.fetchTvShows();
  }

  render() {
    const title = "Tv Shows";
    return (
      <CarouselItemTv movieData={this.props.data.tvshows} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchTvShows })(TvShows);
