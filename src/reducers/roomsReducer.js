import data from "../data";
const INITIAL_STATE = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FORMAT_DATA":
      const newData = data.map((item) => {
        const id = item.sys.id;
        const images = item.fields.images.map((image) => {
          return image.fields.file.url;
        });
        return { ...item.fields, id, images };
      });
      const featuredRooms = newData.filter((room) => room.featured === true);
      const prices = newData.map((room) => room.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      return {
        ...state,
        rooms: newData,
        sortedRooms: newData,
        featuredRooms,
        minPrice: min,
        maxPrice: max,
        price: min,
        minSize: 0,
        maxSize: 1000,
      };
    case "ON_CHANGE_ACTION":
      let { type, name, value } = action.payload;
      value = type === "checkbox" ? action.payload.checked : value;
      return { ...state, [name]: value };
    case "MIN_AND_MAX_ACTION":
      console.log(action.payload);
      return { ...state };
    case "ROOM_TYPE_CHANGE":
      let { rooms, capacity, price, minSize, maxSize, breakfast, pets } = state;
      let filteredRooms = [...rooms];
      //   FILTER BY TYPE
      if (state.type !== "all") {
        filteredRooms = filteredRooms.filter(
          (room) => room.type === state.type
        );
      }
      //FILTER BY CAPACITY
      if (capacity !== 1) {
        filteredRooms = filteredRooms.filter(
          (room) => room.capacity >= capacity
        );
      }
      //FILTER BY PRICE
      if (price) {
        filteredRooms = filteredRooms.filter((room) => {
          return room.price >= parseInt(price);
        });
      }
      //FILTER BY BREAKFAST
      if (breakfast) {
        filteredRooms = filteredRooms.filter(
          (room) => room.breakfast === breakfast
        );
      }
      //   FILTER BY PETS
      if (pets) {
        filteredRooms = filteredRooms.filter((room) => room.pets === pets);
      }
      //FILTER BY SIZE
      if (minSize) {
        filteredRooms = filteredRooms.filter((room) => room.size >= minSize);
      }
      if (maxSize) {
        filteredRooms = filteredRooms.filter((room) => room.size <= maxSize);
      }
      return { ...state, sortedRooms: filteredRooms };

    default:
      return state;
  }
};
