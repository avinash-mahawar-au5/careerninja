const defaultState = {
  allLocations: [],
  searchedData: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_LOCATIONS":
      return {
        ...state,
        allLocations: [...state.allLocations, action.payload],
      };
    case "SEARCHED_DATA":
      return {
        ...state,
        searchedData: [...state.searchedData, action.payload],
      };

    default:
      return defaultState;
  }
};
