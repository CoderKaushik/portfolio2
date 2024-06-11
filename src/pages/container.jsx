import React, { useRef, useEffect } from "react";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Experience from "./experience.jsx";
import "./Container.css";
import Footer from "../components/Footer.jsx"

const Container = ({ setActiveSection }) => {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const sections = [
      aboutRef,
      homeRef,
      projectsRef,
      experienceRef,
      contactRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [setActiveSection, observerOptions]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="h-screen w-[calc(100vw_-_15rem)] overflow-hidden absolute left-[15rem] top-[0rem] max-xl:w-full max-xl:left-0 max-xl:top-0 max-xl:overflow-scroll custom-scroll"
      id="container"
    >
      <Hero id="hero" ref={homeRef} />
      <About id="about" ref={aboutRef} />
      <Experience id="experience" ref={experienceRef} />
      <Projects id="projects" ref={projectsRef} />
      <Contact id="contact" ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Container;