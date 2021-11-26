import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const {restaurantId} = this.props;
    const filterIds = this.props.reviews.filter(r => r.restaurantId === restaurantId)
    const renderIds = filterIds.map(r => <Review key={r.id} review={r} delete={this.props.delete} /> )
    
    return (
      <ul>
        {renderIds}
      </ul>
    );
  }
};

export default Reviews;