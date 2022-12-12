import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Room from "../components/Room";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RoomFilter from "../components/RoomFilter";

const Rooms = (props) => {
  const { sortedRooms } = props;
  const className = sortedRooms.length > 0 ? "roomslist" : "";
  const className2 = sortedRooms.length > 0 ? "roomslist-center" : "";
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            RETURN HOME
          </Link>
        </Banner>
      </Hero>
      <RoomFilter />
      <section className={className}>
        <div className={className2}>
          {sortedRooms.length > 0 ? (
            props.sortedRooms.map((room) => {
              return (
                <React.Fragment key={room.id}>
                  <Room {...room} />
                </React.Fragment>
              );
            })
          ) : (
            <h3 style={{ textTransform: "capitalize" }}>
              unfortunately no rooms matched your search parameters
            </h3>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    sortedRooms: state.roomsReducer.sortedRooms,
    capacity: state.roomsReducer.capacity,
  };
};
export default connect(mapStateToProps)(Rooms);
