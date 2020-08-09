import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllLocations, getSearchedData } from "../action/allActions";

class Input extends Component {
  state = {
    searchedQuery: "",
    filteredList: [],
  };

  componentDidMount() {
    this.props.getAllLocations();
  }

  handleChange = (e) => {
    const { value } = e.target;
    const Answer = value;

    this.setState({
      searchedQuery: value,
    });
    const lowercasedValue = this.state.searchedQuery.toLowerCase();

    const filteredList = this.props.allLocation.filter((el) =>
      el.toLowerCase().includes(lowercasedValue)
    );

    if (value) {
      this.setState({
        filteredList: filteredList,
      });
    } else {
      this.setState({
        filteredList: null,
      });
    }
  };

  selectLocation = (location) => {
    this.props.getSearchedData(location);

    this.setState({
      filteredList: null,
      searchedQuery: "",
    });
  };

  render() {
    // console.log(this.props.allLocation);
    return (
      <Fragment>
        <div className="row m-0 p-0">
          <input
            className="input is-primary"
            type="text"
            value={this.state.searchedQuery}
            placeholder="Primary input"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="row m-0 p-0">
          <table className="table">
            {!this.state.filteredList ? (
              <h4> </h4>
            ) : (
              this.state.filteredList &&
              this.state.filteredList.map((el, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{el}</td>
                      <td>
                        <button
                          className="button is-primary"
                          onClick={() => this.selectLocation(el)}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            )}
          </table>
        </div>
      </Fragment>
    );
  }
}

const stateToProps = (state) => {
  //   console.log(state.app.allLocations);
  return {
    allLocation: state.app.allLocations[0],
    finalData: state.app.searchedData[0],
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllLocations, getSearchedData }, dispatch);
};
export default connect(stateToProps, dispatchToProps)(Input);
