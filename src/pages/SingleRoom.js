import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

export class SingleRoom extends Component {
  render() {
    if (this.props.singleRoom) {
      console.log(this.props.singleRoom);
      const {
        name,
        description,
        price,
        size,
        images,
        capacity,
        pets,
        breakfast,
        extras,
      } = this.props.singleRoom;
      const [mainImg, ...otherImages] = images;
      return (
        <React.Fragment>
          <StyledHero image={mainImg}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back To Rooms
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-room">
            <div className="single-room-images">
              {otherImages.map((image, index) => {
                return <img key={index} src={image} alt={name} />;
              })}
            </div>
          </section>
          <section className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>

              <h6>Price : ${price}</h6>
              <h6>Size : {size} SQFT</h6>
              <h6>
                Max Capacity : {capacity} {capacity > 1 ? "People" : "Person"}
              </h6>
              <h6>{pets ? "Pets are allowed" : "No pets allowed"}</h6>
              <h6>{breakfast ? "Free breakfast included" : null}</h6>
            </article>
          </section>
          <section className="room-extras">
            <h6>EXTRAS</h6>
            <ul className="extras">
              {extras.map((extra, index) => {
                return <li key={index}>- {extra}</li>;
              })}
            </ul>
          </section>
        </React.Fragment>
      );
    } else {
      return (
        <div className="error">
          <h3>No such rooms could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.slug);
  const singleRoom = state.roomsReducer.rooms.find(
    (room) => room.slug === ownProps.match.params.slug
  );

  return {
    singleRoom,
  };
};
export default connect(mapStateToProps)(SingleRoom);
