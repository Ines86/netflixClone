import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchDrama } from "../../actions/movies_actions";

class Drama extends React.Component {

  componentDidMount() {
    this.props.fetchDrama();
  }

  // Render Drama
  render() {
    const title = "Dramas";
    return (
      <CarouselItem movieData={this.props.data.drama} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchDrama })(Drama);
