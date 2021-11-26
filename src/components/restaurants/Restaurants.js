import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => this.props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} delete={this.props.delete} /> )
  
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;