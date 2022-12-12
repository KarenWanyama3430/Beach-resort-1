import React, { Component } from "react";
import Room from "./Room";
import Title from "./Title";
import { connect } from "react-redux";

export class FeaturedRooms extends Component {
  renderFeaturedRooms = () => {
    return this.props.featuredRooms.map((featuredRoom) => {
      return (
        <React.Fragment key={featuredRoom.id}>
          <Room {...featuredRoom} />
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {this.renderFeaturedRooms()}
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    featuredRooms: state.roomsReducer.featuredRooms,
  };
};
export default connect(mapStateToProps)(FeaturedRooms);
