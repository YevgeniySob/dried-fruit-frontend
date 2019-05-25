import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {

  render() {
    return (
      <div className="ui internally celled grid navigation">
        <div className="row">
          <div className="two wide column">Dried Fruit</div>
          <div className="two wide column"><Link to="/">Home</Link></div>
          <div className="two wide column"><Link to="/login">Login</Link></div>
        </div>
      </div>
    )
  }
}

export default Navbar;
