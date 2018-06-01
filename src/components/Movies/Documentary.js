import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchDocumentary } from "../../actions/movies_actions";

class Documentary extends React.Component {

  componentDidMount() {
    this.props.fetchDocumentary();
  }

  // Render Documentary
  render() {
    const title = "Documentaries";
    return (
      <CarouselItem movieData={this.props.data.documentary} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchDocumentary })(Documentary);
