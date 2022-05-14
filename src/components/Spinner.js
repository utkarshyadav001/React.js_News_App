import React, { Component } from 'react'
import loadingSpinner from './loadingSpinner.gif'

export default class spinner extends Component {
  render() {
    return (
      <div style={{margin: "auto", width: "18%"}}>
        <img style={{borderRadius: "10px"}} src={loadingSpinner} alt="Loading Spinner" />
      </div>
    )
  }
}
