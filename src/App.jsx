import { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css"

const About = lazy(() => import("./sections/About"));
const Resume = lazy(() => import("./sections/Resume"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <Suspense fallback={null}>
          <section id="about"><About /></section>
          <section id="resume"><Resume /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
