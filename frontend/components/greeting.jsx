import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    // debugger
    let greetingComponents;
    if (this.props.currentUser) {
      greetingComponents = (
        <div>
          <h3>Hello {this.props.currentUser.username}</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      greetingComponents = (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }

    return greetingComponents;
  }
}

export default Greeting;
