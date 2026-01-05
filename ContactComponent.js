import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";


import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
  src={require(`../../assets/images/contact.svg`)}
  alt="Contact"
  onError={(e) => {
    e.target.style.display = "none";
  }}
/>

              </div>

              <div className="contact-heading-text-div">
                <h1 style={{ color: theme.text }}>
                  {ContactData.title}
                </h1>

                <p style={{ color: theme.secondaryText }}>
                  {ContactData.description}
                </p>

                <SocialMedia theme={theme} />

                <Button
                  text="See My Resume"
                  newTab
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <AddressImg theme={theme} />

              <div className="address-heading-text-div">
                <h1 style={{ color: theme.text }}>
                  {addressSection.title}
                </h1>

                <p style={{ color: theme.secondaryText }}>
                  {addressSection.subtitle}
                </p>

                <h1 style={{ color: theme.text }}>
                  {phoneSection.title}
                </h1>

                <p style={{ color: theme.secondaryText }}>
                  {phoneSection.subtitle}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Contact;
