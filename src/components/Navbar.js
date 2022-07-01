import React, { Component } from 'react'
import  '../style/navbar.css'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <nav>
        <div id="appLogo">
            <Link to="/"><h4>Today News</h4></Link>
        </div>
        <div id="navBtnBox">
          <ul>
            <li><Link to="/home" id="navBtn">Home</Link></li>
            <li><Link to="/business" id="navBtn">Business</Link></li>
            <li><Link to="/general" id="navBtn">General</Link></li>
            <li><Link to="/health" id="navBtn">Health</Link></li>
            <li><Link to="/science" id="navBtn">Science</Link></li>
            <li><Link to="/technology" id="navBtn">Technology</Link></li>
            <li><Link to="/entertainment" id="navBtn">Entertainment</Link></li>
            <li><Link to="/sport" id="navBtn">Sport</Link></li>
          </ul>
        </div>
    </nav>
    )
  }
}
