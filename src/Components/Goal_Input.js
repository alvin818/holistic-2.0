import React, { Component } from 'react';
import LinkButton from './LinkButton';


class Goal_Input extends Component {

  constructor(){
    super();
    this.state = {
      newGoal:{}
    }
  }
  /*Handles User goal submission*/
  handleSubmit(e){
    /* Handles case where input is blank */
    if(this.refs.title.value === ''){
      alert('haha goals cannot be blank!')
    }
    /* else clause will be used to get what the user inputs */
    else {
      this.setState({newGoal:{
        goal: this.refs.title.value
      }}, function(){
        console.log(this.state);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="Goal_Input">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
          Please enter goal
          </label>
          <br></br>
          {/* User inputs goal here */}
          <input type="text"ref="title" />
          {/* Submit button */}
          <input type="submit" value="submit" />
        </form>
        <br />

      </div>
    );
  }
}

export default Goal_Input;
