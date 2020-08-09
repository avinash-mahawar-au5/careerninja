import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class Templat extends Component {
  state = {
    Location: null,
  };

  render() {
    return (
      <Fragment>
        <div className="main">
          {this.props.finalData &&
            this.props.finalData.map((el, i) => {
              const battle = el;
              return (
                <div className=" " key={i}>
                  <div className="  ">
                    <div className="row m-0 p-0 text-center">
                      <span className="text-center">
                        {battle.attacker_outcome === "win" ? (
                          <h5
                            className="text-center text-success ml-4"
                            style={{ fontSize: "30px" }}
                          >
                            {battle.name}
                          </h5>
                        ) : (
                          <h5
                            className="text-center text-danger ml-4"
                            style={{ fontSize: "30px" }}
                          >
                            {battle.name}
                          </h5>
                        )}
                      </span>
                    </div>
                    <div className="row newTile card d-flex   m-0 p-0">
                      <div className="col-6 card-body d-flex flex-column ">
                        <div className=" ">
                          <div className="row m-0 p-0">
                            <span className=" image">
                              {battle.attacker_outcome === "win" ? (
                                <img
                                  src="https://res.cloudinary.com/dps7y8nd7/image/upload/v1596977335/rfsdf_ehlodl.jpg"
                                  alt="image"
                                  style={{ border: "4px solid green" }}
                                />
                              ) : (
                                <img
                                  src="https://res.cloudinary.com/dps7y8nd7/image/upload/v1596977335/rfsdf_ehlodl.jpg"
                                  alt="image"
                                  style={{ border: "3.5px solid red" }}
                                />
                              )}
                            </span>
                          </div>
                        </div>
                        <div className=" ">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold ">
                              Attacker King
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.attacker_king}</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Commander
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.attacker_commander}</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Attacker
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.attacker_1}</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Attacker size
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.attacker_size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 card-body d-flex flex-column">
                        <span className=" image">
                          {!battle.attacker_outcome === "win" ? (
                            <img
                              //   src="https://res.cloudinary.com/dps7y8nd7/image/upload/v1596977852/depositphotos_5518174-stock-photo-portrait-of-a-legionary-soldier_rr7onx.jpg"
                              src="https://res.cloudinary.com/dps7y8nd7/image/upload/v1596977335/rfsdf_ehlodl.jpg "
                              alt="image"
                              style={{
                                border: "4px solid green",
                                height: "224px",
                                width: "224px",
                              }}
                            />
                          ) : (
                            <img
                              src="https://res.cloudinary.com/dps7y8nd7/image/upload/v1596977335/rfsdf_ehlodl.jpg"
                              // src="https://res.cloudinary.com/dps7y8nd7/image/upload/v1596977852/depositphotos_5518174-stock-photo-portrait-of-a-legionary-soldier_rr7onx.jpg"
                              alt="image"
                              style={{
                                border: "3.5px solid red",
                                height: "224px",
                                width: "224px",
                              }}
                            />
                          )}
                        </span>
                        <tile className=" ">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Defender King
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.defender_king}</span>
                          </div>
                        </tile>
                        <tile className=" ">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Commander
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.defender_commander}</span>
                          </div>
                        </tile>
                        <tile className=" ">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Defender
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.defender_1}</span>
                          </div>
                        </tile>
                        <tile className="">
                          <div className="row m-0 p-0">
                            <span className="has-text-weight-bold">
                              Defender size
                            </span>
                          </div>
                          <div className="row m-0 p-0">
                            <span>{battle.defender_size}</span>
                          </div>
                        </tile>
                      </div>
                    </div>
                    <div className="row mt-2 p-0 level-item has text-centered">
                      {battle.attacker_outcome === "win" ? (
                        <span className="text-center ">
                          Attacker Outcome :{" "}
                          <span className="text-success title has-text-weight-bold">
                            {battle.attacker_outcome}
                          </span>
                        </span>
                      ) : (
                        <span className="text-center  text-danger">
                          Attacker Outcome :{" "}
                          <span className="text-danger title has-text-weight-bold text-capitalize">
                            {battle.attacker_outcome}
                          </span>
                        </span>
                      )}
                    </div>
                    <div className=" templatText my-3 p-0">
                      <nav className="level d-flex">
                        <div className="row level m-0 p-0 ">
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading is-size-7 has-text-weight-medium">
                              Major death
                            </p>
                            <p className="title ">{battle.major_death}</p>
                          </div>
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading is-size-7 has-text-weight-medium">
                              Major capture
                            </p>
                            <p className="title ">{battle.major_capture}</p>
                          </div>
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading is-size-7 has-text-weight-medium">
                              Major death
                            </p>
                            <p className="title ">{battle.major_death}</p>
                          </div>
                        </div>
                        <div className="row m-0 p-0 d-flex">
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading is-size-7 has-text-weight-medium">
                              Summer
                            </p>
                            <p className="title ">{battle.summer}</p>
                          </div>
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading is-size-7 has-text-weight-medium">
                              Regin
                            </p>
                            <p className="title ">{battle.region}</p>
                          </div>
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading is-size-7 has-text-weight-medium">
                              Location
                            </p>
                            <p className="title ">{battle.location}</p>
                          </div>
                        </div>
                        {/* <div className="row m-0 p-0">
                          <div className="level-item has text-centered d-flex flex-column">
                            <p className="heading">Note</p>
                            <p className="title">{battle.note}</p>
                          </div>
                        </div> */}
                      </nav>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Fragment>
    );
  }
}

const stateToProps = (state) => {
  console.log(state.app.searchedData);
  return {
    finalData: state.app.searchedData[0],
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};
export default connect(stateToProps, dispatchToProps)(Templat);
