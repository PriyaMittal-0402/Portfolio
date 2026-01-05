import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import homeImg from "../../assets/images/home.svg";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div
        className="screen"
        style={{ backgroundColor: props.theme.splashBg }}
      >
        <img src={homeImg} alt="Splash" id="logo" />
      </div>
    </div>
  );
}

class Splash extends Component {
  state = { redirect: false };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ redirect: true });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
