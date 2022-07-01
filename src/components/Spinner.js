import React, { Component } from 'react'
import loadingSpinner from './loadingSpinner.gif'

export default class spinner extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", margin: "28px 0px"}}>
        <img style={{borderRadius: "10px", width: "3%"}} src={loadingSpinner} alt="Loading Spinner" />
      </div>
    )
  }
}
