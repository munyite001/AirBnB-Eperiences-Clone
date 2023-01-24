import React from 'react';
import Card from './Card.js';

class Experiences extends React.Component
{
    render()
  {
    return(
      <section className="experiences-section">
        <Card
          tag="Sold out"
          image={require("../images/card1.png")}
          rate="5.0"
          rateCount = "6"
          country="USA"
          description="Life lessons with Katie Zaferes"
          price="136"
        />

        <Card
          tag="online"
          image={require("../images/card2.png")}
          rate="5.0"
          rateCount = "30"
          country="USA"
          description="Learn wedding photography"
          price="125"
        />
        
        <Card
          tag="test"
          image={require("../images/card3.png")}
          rate="4.8"
          rateCount = "2"
          country="USA"
          description="Group Mountain Biking"
          price="50"
        />
      </section>
    );
  }
}

export default Experiences