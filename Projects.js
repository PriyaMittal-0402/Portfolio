import React from "react";
import "./Project.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";

class Projects extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />

        <div className="basic-projects">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="projects-heading" style={{ color: theme.text }}>
              Projects
            </h1>

            <div className="projects-container">
              {projects.data.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  style={{
                    backgroundColor: theme.body,
                    boxShadow: `0 10px 30px ${theme.secondaryText}20`,
                  }}
                >
                  <h3 style={{ color: theme.text }}>{project.name}</h3>

                  <p style={{ color: theme.secondaryText }}>
                    {project.description}
                  </p>

                  <Button
                    text="View Project"
                    href={project.url}
                    newTab={true}
                    theme={theme}
                  />
                </div>
              ))}
            </div>
          </Fade>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
