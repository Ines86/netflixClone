import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchHistory } from "../../actions/movies_actions";

class History extends React.Component {

  componentDidMount() {
    this.props.fetchHistory();
  }

  // Render History
  render() {
    const title = "Historical Movies";
    return (
      <CarouselItem movieData={this.props.data.history} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchHistory })(History);
