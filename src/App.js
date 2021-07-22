import React, { Component } from "react";
// UI
import { makeStyles } from "@material-ui/core/styles";
// import { NavLink, Route, Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "../src/components/Headers";
import Footer from "../src/components/Footer";
import main_img from "../src/static/image/wes_main.png";
import Routes from "./routes";

const sections = [
  { title: "Cover", url: "/cover" },
  { title: "Editorial", url: "/Editorial" },
  { title: "Celebrity", url: "/Celebrity" },
  { title: "Advertising", url: "/Advertising" },
  { title: "Personal", url: "/Personal" },
  { title: "Contact", url: "/Contact" },
];
const main_img_style = {
  display: "block",
  textAlign: "center",
  margin: "0px auto",
  marginTop: "3rem",
  marginBottom: "3rem",
};

export default function Base() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg">
        <div className="App">
          <Router>
            <Header title="Woo Eun Sun" sections={sections} />
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
