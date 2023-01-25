import React from 'react';
import Card from './Card.js';
import cardData from '../cardData';

export default function Experiences()
{
  const data = cardData.map((card) => {
    return <Card
    tag = {card.tag}
    image = {require(`../images/${card.image}`)}
    rate = {card.rate}
    rateCount = {card.rateCount}
    country = {card.country}
    description = {card.description}
    price = {card.price}
    />
  });

  return (
    <section className="experiences-section">
      {data}
    </section>
  )
}