import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
  state = {
    socialData: [
    //   {
    //     id: 1,
    //     link: "/Turknode_litepaper.pdf",
    //     icon: "fa fa-file-pdf fs-2",
    //   },
      {
        id: 2,
        link: "twitter",
        icon: "fab fa-twitter fs-2",
      },
      {
        id: 3,
        link: "google-plus",
        icon: "fab fa-telegram fs-2",
      },
      {
        id: 4,
        link: "vine",
        icon: "fab fa-instagram fs-2",
      },
    ],
  };

  render() {
    return (
      <footer className="footer-area">
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Copyright Area */}
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  <div
                    style={{ margin: "auto" }}
                    className="footer customFooter"
                  >
                    <div className="mb-2">
                      <a href="/Turknode_litepaper.pdf" target={"_blank"}>
                        <p>Litepaper</p>
                      </a>
                    </div>

                    <img src="img/logo_red.png"></img>
                    <h5 style={{ fontFamily: "revert" }}>
                      JOIN THE COMMUNITY :
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {this.state.socialData.map((item, idx) => {
                        return (
                          <a
                            key={`sd_${idx}`}
                            className={item.link}
                            href={item.link}
                            style={{ marginRight: "20px" }}
                            target="blank"
                          >
                            <h3 style={{ margin: "0", padding: "0" }}>
                              <i className={item.icon} />
                            </h3>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
