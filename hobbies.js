import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./hobbies.css";

// Images
import reading from "../../assets/images/reading.svg";
import designing from "../../assets/images/designer.svg";
import coding from "../../assets/images/homee.svg";
import debating from "../../assets/images/certificate.svg";
import social from "../../assets/images/social.svg";
import music from "../../assets/images/home.svg";

export default function Hobbies(props) {
  const theme = props.theme;

  const hobbies = [
    {
      img: reading,
      title: "Reading",
      desc: "I enjoy reading books that expand my knowledge and perspective."
    },
    {
      img: designing,
      title: "Designing",
      desc: "Creating visually appealing designs and UI concepts."
    },
    {
      img: coding,
      title: "Coding",
      desc: "Building applications and solving real-world problems."
    },
    {
      img: debating,
      title: "Debating",
      desc: "Expressing ideas confidently and improving communication skills."
    },
    {
      img: social,
      title: "Social Service",
      desc: "Helping others and contributing positively to society."
    },
    {
      img: music,
      title: "Listening to Music",
      desc: "Music helps me relax, focus, and stay creative."
    }
  ];

  return (
    <div className="hobbies-page">
      <Header theme={theme} />

      <section className="hobbies-grid">
        {hobbies.map((item, index) => (
          <div className="hobby-card" key={index}>
            
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          
        ))}
      </section>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}


