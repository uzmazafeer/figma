import React from "react";
import Button from "./Button";
import "./hero.css";
import image from "../../public/image/i.png"
const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          A powerful online engagement tool
          that’s intuitive and simple to use.
        </h1>

        <p>
          With stellar one-click reports and unmatched support,
          see how Circle will make a difference in your business.
        </p>

        <Button text="Get started free" />
      </div>

      <div className="hero-image">
        <img src={image} alt="team" />
      </div>

    </section>
  );
};

export default Hero;
