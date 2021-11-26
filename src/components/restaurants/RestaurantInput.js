import React, { Component } from 'react';


class RestaurantInput extends Component {
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
    
    this.props.add(this.state);
    this.setState({
      text: '',
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter restaurant name" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
