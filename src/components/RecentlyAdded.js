import React from 'react';
import CarouselItem from './CarouselItem';
import { connect } from "react-redux";
import { fetchRecentlyAdded } from "../actions";

class RecentlyAdded extends React.Component {
  componentDidMount() {
    this.props.fetchRecentlyAdded();
  }

  render() {
    const title = "Recently Added";
    return (
      <CarouselItem movieData={this.props.data.recent} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchRecentlyAdded })(RecentlyAdded);
