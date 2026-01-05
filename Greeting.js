import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">

          {/* LEFT TEXT */}
          <div className="greeting-text-div">
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>

            {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
            )}

            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>

            <SocialMedia theme={theme} />

            <div className="portfolio-repo-btn-div">
              <Button
                text="⭐ Star Me On Github"
                newTab
                href={greeting.portfolio_repository}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="greeting-image-div">
            <img
              src={require("../../assets/images/home.svg")}
              alt="girl"
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
            />
          </div>

        </div>
      </div>
    </Fade>
  );
}
