import React from 'react';

class Card extends React.Component
{
  render()
  {
    return(
      <article className="card">
        <span className="tag">{this.props.tag}</span>
        <div className="image-container">
          <img src={this.props.image} alt="Experience Preview"/>
        </div>
        <div className="card-info">
          <div className="rating">
            <img src={require('../images/Star.png')} alt="Rating start"/>
            <span className="rate-level">{this.props.rate}</span>
            <span className="rate-count">({this.props.rateCount})</span>
            <span className="country"><span className="elipse"></span>{this.props.country}</span>
          </div>
          <p className="description">
            {this.props.description}
          </p>
          <p className="cost-person"><span className="price-cont">From $<span className="price">{this.props.price}</span></span> / person</p>
        </div>
      </article>
    );
  }
}

export default Card;