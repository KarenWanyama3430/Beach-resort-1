export const formatData = () => {
  return {
    type: "FORMAT_DATA",
  };
};

export const onChangeAction = (eventTarget) => {
  return {
    type: "ON_CHANGE_ACTION",
    payload: eventTarget,
  };
};

export const roomTypeChange = () => {
  return {
    type: "ROOM_TYPE_CHANGE",
  };
};

export const minAndMaxAction = (minAndMaxObj) => {
  return {
    type: "MIN_AND_MAX_ACTION",
    payload: minAndMaxAction,
  };
};
