import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import Faq from "../components/Faq/Faq";
import Banner from "../components/Farming/Banner";
import Bar from "../components/Farming/Bar";
import About from "../components/Farming/About";
import Networks from "../components/Farming/Networks";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountAddress: "",
      accountBalance: "",
      metamaskConnected: false,
      contractDetected: false,
      totalSupply: 0,
      MAX_SUPPLY: 0,
      MINT_COST: 0,
      ACITVE_SALE: false,
      ACITVE_PRESALE: false,
      ACITVE_PUBLICSALE: false,
      loading: true,
      sidebarShow: false,
      modalShow: false,
    };
  }

  componentWillMount = async () => {
    if (window.location.hash == "#contact") this.setState({ modalShow: true });
  };

  showMenu = async () => {
    console.log(this.state.sidebarShow);
    this.setState({ sidebarShow: true });
  };

  render() {
    return (
      <>
        <div className="main">
          <Header
            metamaskConnected={this.state.metamaskConnected}
            accountAddress={this.state.accountAddress}
            connectToMetamask={this.connectToMetamask}
            showMenu={this.showMenu}
            showContactModal={() => this.setState({ modalShow: true })}
          />
          <Banner />
          <Bar />
          <About />
          <Networks />
          <Faq />
          <Footer />
          <ModalSearch />
          <ModalMenu />
          <Scrollup />
          <ContactModal
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
        </div>
      </>
    );
  }
}

function ContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ height: "75px" }}>
        <Modal.Title>
          <h4 className="text-white">Contact</h4>
        </Modal.Title>
        <span onClick={() => props.onHide()} className="close_btn">
          x
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="main_flex mb-2">
          <Form className="row" method="POST" action="assets/php/mail.php">
            <Form.Group className="col-sm-12 col-md-12 mb-3">
              <h6 className="text-black my-2">Name</h6>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group className="col-sm-12 col-md-12 mb-3">
              <h6 className="text-black my-2">Email</h6>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group className="col-sm-12 col-md-12 mb-3">
              <h6 className="text-black my-2">Subject</h6>
              <Form.Control type="text" name="subject" required />
            </Form.Group>
            <Form.Group className="col-sm-12 col-md-12 mb-3">
              <h6 className="text-black my-2">Message</h6>
              <Form.Control as="textarea" rows={4} name="message" required />
            </Form.Group>
            <Form.Group className="col-sm-12 col-md-12 mb-3 text-center">
              <button className="btn red" type="submit">
                Submit
              </button>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Home;
