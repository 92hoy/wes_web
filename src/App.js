import React, { Component, setState, useEffect } from "react";
// UI
// import { makeStyles } from "@material-ui/core/styles";
// import { NavLink, Route, Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

import Header from "../src/components/Headers";
import Footer from "../src/components/Footer";
// import main_img from "../src/static/image/wes_main.png";
import Routes from "./routes";

import axios from "axios";

const main_img_style = {
  display: "block",
  textAlign: "center",
  margin: "0px auto",
  marginTop: "3rem",
  marginBottom: "3rem",
};

// export default function Base() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }
  // life-cycle참조
  componentDidMount() {
    this._getMenu();
    // this._test();
  }

  _getMenu = async () => {
    const res = await axios.get("/api/getMenu");

    this.setState({ menu: res.data.menu });
  };
  // _test = async () => {
  //   const res2 = await axios.get("/api/qwe");
  //   console.log("resadasdasdas", res2);
  //   // this.setState({ menu: res.data.menu });
  // };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="lg">
          <div className="App">
            <Router>
              <Header title="Woo Eun Sun" sections={this.state.menu} />
              <Routes />
            </Router>
            {/* <main style={main_img_style}>
            <img src={main_img} />
          </main> */}
          </div>
        </Container>

        <Footer
          title="Woo Eun-sun Studio"
          description=" Photographer, Retoucher"
        />
      </React.Fragment>
    );
  }
}
export default App;
