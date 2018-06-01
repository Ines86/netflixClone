import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchThrillers } from "../../actions/movies_actions";

class Thrillers extends React.Component {

  componentDidMount() {
    this.props.fetchThrillers();
  }

  // Render Thrillers
  render() {
    const title = "Thrillers";
    return (
      <CarouselItem movieData={this.props.data.thriller} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchThrillers })(Thrillers);
