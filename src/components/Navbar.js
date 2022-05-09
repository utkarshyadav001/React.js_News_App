import React, { Component } from 'react'
import  '../style/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
        <nav>
        <div id="appLogo">
            <a href="/"><h4>Today News</h4></a>
        </div>
        <div id="navBtnBox">
          <ul>
            <li><a href="/" id="navBtn">Home</a></li>
            <li><a href="/" id="navBtn">Business</a></li>
            <li><a href="/" id="navBtn">Entertainment</a></li>
            <li><a href="/" id="navBtn">General</a></li>
            <li><a href="/" id="navBtn">Science</a></li>
            <li><a href="/" id="navBtn">Sport</a></li>
            <li><a href="/" id="navBtn">Technology</a></li>
            <li><a href="/" id="navBtn">Health</a></li>
          </ul>
        </div>
    </nav>
    )
  }
}
