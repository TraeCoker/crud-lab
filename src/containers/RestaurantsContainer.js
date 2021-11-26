import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} delete={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (formData) => dispatch({type: "ADD_RESTAURANT", payload: formData}),
    deleteRestaurant: (restaurantId) => dispatch({type: "DELETE_RESTAURANT", restaurantId})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
