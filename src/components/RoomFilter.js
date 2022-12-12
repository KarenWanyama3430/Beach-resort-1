import React, { Component } from "react";
import { onChangeAction, roomTypeChange } from "../actions";
import { connect } from "react-redux";
import Title from "./Title";

export class RoomFilter extends Component {
  handleChange = (event) => {
    this.props.onChangeAction(event.target);
    this.props.roomTypeChange();
  };

  getUniqueType = (rooms, value) => {
    return [...new Set(rooms.map((room) => room[value]))];
  };
  renderRoomTypes = (types) => {
    return types.map((type, index) => {
      return (
        <option key={index} value={type}>
          {type}
        </option>
      );
    });
  };
  renderGuestCapacity = (guests) => {
    return guests.map((guest, index) => {
      return (
        <option key={index} value={guest}>
          {guest}
        </option>
      );
    });
  };
  render() {
    const {
      type,
      rooms,
      capacity,
      price,
      minPrice,
      maxPrice,
      breakfast,
      pets,
      minSize,
      maxSize,
    } = this.props.roomsReducer;

    let types = this.getUniqueType(rooms, "type");
    types = ["all", ...types];
    let guests = this.getUniqueType(rooms, "capacity");
    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/* FILTERING BY ROOM TYPES */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={this.handleChange}
            >
              {this.renderRoomTypes(types)}
            </select>
          </div>
          {/* FILTERING BY GUESTS CAPACITY */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={this.handleChange}
            >
              {this.renderGuestCapacity(guests)}
            </select>
          </div>
          {/* FILTERING BY PRICE */}
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              id="price"
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          {/* FILTER BY ROOM SIZE */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="minSize"
                value={minSize}
                onChange={this.handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="maxSize"
                value={maxSize}
                onChange={this.handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* FILTERING BY CHECKBOXES */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={this.handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>

            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={this.handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    roomsReducer: state.roomsReducer,
  };
};
export default connect(mapStateToProps, { onChangeAction, roomTypeChange })(
  RoomFilter
);
