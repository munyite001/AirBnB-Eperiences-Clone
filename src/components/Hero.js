import React from 'react';

class Hero extends React.Component
{
  render()
  {
    return(
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={require('../images/experiences.png')} alt = "Experiences Images"/>
        </div>
        <div className="text-wrapper">
          <h2>Online Experiences</h2>
          <p>
            Join unique interactive activities led 
            by one-of-a-kind hosts—all without leaving home.
          </p>
        </div>
      </section>
    )
  }
}

export default Hero