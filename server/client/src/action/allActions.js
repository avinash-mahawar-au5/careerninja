import Axios from "axios";

const Url = "/battles";

export function getAllLocations() {
  let allLocations = Axios.get(`${Url}/list`);
  return (dispatch) => {
    allLocations
      .then((locations) => {
        dispatch({
          type: "GET_ALL_LOCATIONS",
          payload: locations.data.response,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function getSearchedData(location) {
  let searchedData = Axios.post(`${Url}/search?location=${location}`);

  return (dispatch) => {
    searchedData
      .then((data) => {
        // console.log(data.data.response);
        dispatch({
          type: "SEARCHED_DATA",
          payload: data.data.response,
        });
      })
      .catch((error) => console.log(error));
  };
}
