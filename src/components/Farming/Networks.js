import React, { Component } from "react";

const initData = {
  pre_heading: "Dashboard",
  heading: "abcdef",
};

class Networks extends Component {
  state = {
    initData: {},
    mintAmount: 0,
  };

  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  render() {
    return (
      <div className="bg-red">
        <div className="row justify-content-center networks-container customNetwork">
          <div className="col-3" style={{ padding: "0px" }}>
            <div className="text-center">
              <img className="networks" src="/img/network1.png" />
            </div>
          </div>
          <div className="col-3" style={{ padding: "0px" }}>
            <div className="text-center">
              <img className="networks" src="/img/network2.png" />
            </div>
          </div>
          <div className="col-3" style={{ padding: "0px" }}>
            <div className="text-center">
              <img className="networks" src="/img/network3.png" />
            </div>
          </div>
          <div className="col-3" style={{ padding: "0px" }}>
            <div className="text-center">
              <img className="networks" src="/img/network4.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Networks;
