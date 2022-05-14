import React, { Component } from 'react'
import '../style/newsItem.css'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props
    return (
      <div id="newsItem">
          <img src={imageUrl} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <strong></strong>
        <button className="btn"><a href={newsUrl} rel="noreferrer" target="_blank">Read More</a></button>
      </div>
    )
  }
}
