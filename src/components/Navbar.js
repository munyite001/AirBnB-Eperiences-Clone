import React from 'react';

class Navbar extends React.Component
{
  render()
  {
    return(
      <nav className='nav'>
        <div className='img-container'>
          <img src={require('../images/airbnb.png')} alt='AirBnb Logo'/>
        </div>
      </nav>
    )
  }
}

export default Navbar