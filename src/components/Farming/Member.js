import React, { Component } from "react";
import {
  readableDuration,
  getNodeName,
  convertToDate,
  getValue,
} from "../../utils/utils";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="author-area  pancil">
        <div
          className="container"
          style={{ minHeight: "450px", padding: "50px 5% 0px" }}
        >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray box1">
                    <span style={{ fontSize: "19px" }}>Your Nodes</span>
                    <span className="float-right">
                      {this.props.userStatus.nodes}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span style={{ fontSize: "19px" }}>Deposits</span>
                    <span className="float-right">
                      {this.props.userStatus.deposited
                        ? getValue(this.props.userStatus.deposited)
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="claim-box bg-gray">
                    <span style={{ fontSize: "19px" }}>Claimed</span>
                    <span className="float-right">
                      {this.props.userStatus.withdrawed
                        ? getValue(this.props.userStatus.withdrawed, 3)
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="row justify-content-center mt-5 myoverflow">
            <div className="col-12 ">
              <div className="row ">
                <div className="col-12 ">
                  <table
                    style={{ borderCollapse: "collapse" }}
                    className="responsive referrer-table mt-2 "
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            border: "1px solid beige",
                            borderRadius: "20px 0px 0px 4px",
                          }}
                          className="col-md-4"
                        >
                          Node Type
                        </th>
                        <th className="col-md-4 ">Deposits</th>
                        <th className="col-md-4 ">Claimed</th>
                        <th className="col-md-4 ">Created At</th>
                        <th className="col-md-4 ">Last Claimed At</th>
                        <th className="col-md-4 ">Locked Period</th>
                        <th className="col-md-4 ">Taxed Period</th>
                        <th className="col-md-4 ">Expiration</th>
                        <th className="col-md-4 ">Renewed</th>
                        <th
                          style={{
                            border: "1px solid beige",
                            borderRadius: "0px 20px 0px 4px",
                          }}
                          className="col-md-4"
                        >
                          Rewards
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.userNodes.map((item, index) => {
                        return (
                          <tr style={{ background: "#ffffff" }} key={index}>
                            <td>{getNodeName(item.node_type)}</td>
                            <td>{getValue(item.deposits)}</td>
                            <td>
                              {Number(item.payouts)
                                ? getValue(item.payouts)
                                : ""}
                            </td>
                            <td>{convertToDate(item.created_time * 1000)}</td>
                            <td>
                              {item.created_time == item.last_claim_time
                                ? "Never"
                                : convertToDate(item.last_claim_time * 1000)}
                            </td>
                            <td>
                              {Number(item.remaining_for_noclaim)
                                ? readableDuration(item.remaining_for_noclaim) +
                                  " left"
                                : "Passed"}
                            </td>
                            <td>
                              {Number(item.remaining_time)
                                ? readableDuration(item.remaining_time * 1000) +
                                  " left"
                                : "Passed"}
                            </td>
                            <td>
                              {Number(item.remaining_for_expiration)
                                ? readableDuration(
                                    item.remaining_for_expiration
                                  ) + " left"
                                : "Expired"}
                            </td>
                            <td>
                              {Number(item.renewed) ? item.renewed : "Never"}
                            </td>
                            <td className="relative_div">
                              {item.remaining_for_noclaim || item.is_expired
                                ? ""
                                : getValue(item.yiled_calculated)}
                              <div className="text-center absole">
                                {item.is_expired ? (
                                  <button
                                    className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                    onClick={() =>
                                      this.props.renewNode(item.created_time)
                                    }
                                  >
                                    Renew
                                  </button>
                                ) : item.remaining_for_noclaim ? (
                                  <button
                                    className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                    disabled
                                  >
                                    Claim
                                  </button>
                                ) : (
                                  <button
                                    className="btn red claim-button-sm myshadow mx-2 mb-2 mainclass"
                                    onClick={() =>
                                      this.props.claimOne(
                                        item.created_time,
                                        item.yiled_calculated
                                      )
                                    }
                                  >
                                    Claim
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Member;
