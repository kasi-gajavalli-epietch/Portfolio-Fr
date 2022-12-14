import React from 'react';
import './home.css';
import Me from "../../assests/profile-1.jpg";
import HeaderSocials from "./HeaderSocials";
import CV from "../../assests/Kasi_GAJAVALLI_CV.pdf";

const Home = () => {
  return (
    
    <section className="home" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Kasi GAJAVALLI</h1>
        <span className="home__education">Développeur Web</span>

        <HeaderSocials />

        
        <div className="header-link">
          <a href="#contact" className="btn">Parlons-en</a>
          <a href={CV} download className="btn">Télécharger CV</a>
        </div>

       
        
      </div>
    </section>
  )
}

export default Home