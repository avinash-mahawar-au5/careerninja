import React, { Component, Fragment } from "react";
import Input from "../components/Input";
import Templat from "../components/Templat";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="project ">
          <div className="battleField  ">
            <div className="row m-0 p-0 ">
              <p className="battleCaption has-text-centered">
                THE BATTLE OF BASTURDS
              </p>
            </div>
            <div className=" columns m-0 p-0">
              <div className="column is-4 mt-2 p-0 ">
                {" "}
                <Input />{" "}
              </div>
              <div className="column is-8 ml-3 p-0 ">
                {" "}
                <Templat />{" "}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
