import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/meta-6871457_1280.jpg";
class Home extends React.Component {
  render() {
    return (
      <>
        <div>Hello world form sinhvienIT</div>;
        <img src={logo} style={{ width: "200px", height: "200px" }} />
      </>
    );
  }
}
export default Color(Home);
