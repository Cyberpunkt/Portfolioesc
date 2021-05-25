import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Hero />
      <Games />
    </main>
  );
}

// hero content
const Hero = () => (
  <section className="hero">
    {/* content for the hero */}
    <div className="hero__img-wrapper">
      <div className="hero__img"></div>
    </div>
    <div className="hero__content-wrapper">
      <div className="hero__content">
        <h1 className="hero__title-1">Hi, my name is</h1>
        <h1 className="hero__title-2">Dylan McLean.</h1>
        <p className="hero__paragraph">
          I am a software engineer, I enjoy creating interesting and useful
          pieces of code as well as art. I strive to ensure that my work will
          have a positive impact on whomever it may come in contact with.
        </p>
      </div>
    </div>
  </section>
);

const Games = () => (
  <section className="games">
    <div className="divider-section"></div>
    <div className="games__content-wrapper">
      <div className="games__content">
        <h1 className="games_title-1">Game Stats go here</h1>
      </div>
    </div>
  </section>
);
