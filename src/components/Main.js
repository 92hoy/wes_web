import React from "react";
import main_img from "../static/image/wes_main.png";

const main_img_style = {
  display: "block",
  textAlign: "center",
  margin: "0px auto",
  marginTop: "3rem",
  marginBottom: "3rem",
};

export default function Main() {
  return (
    <main style={main_img_style}>
      <img src={main_img} />
    </main>
  );
}
