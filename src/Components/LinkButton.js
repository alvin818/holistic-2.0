import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Logistics from './Logistics';

const LinkButton = () =>(
  <Router>
    <div>
      <button type="button"><Link to="/Logistics">Next: Goal Logistics/Details</Link></button>
    <hr/>
    <Route path="/Logistics" component={Logistics}/>
    </div>
  </Router>

)

export default LinkButton;
