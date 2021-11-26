import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const review = {
      ...this.state,
      restaurantId: this.props.restaurantId,
    }

    this.props.addReview(review)
    this.setState({
      text: '',
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter review" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};


export default ReviewInput;
