import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.delete(this.props.review.id)
  }

  render() {
   

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
