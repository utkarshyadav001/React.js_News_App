import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  pageSize = 9;
  apiKey = process.env.REACTAPP_NEWSAPI_KEY

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState = {
      progress: progress,
    }
  }

  render() {
    return (
      <>
        <Router>
          {/* top loading bar */}
          <LoadingBar color='#f11946' progress={this.state.progress} height='3' />

          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Home" country="in" pageSize={this.pageSize} category="general" />} />
            <Route exact path="/home" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Home" country="in" pageSize={this.pageSize} category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" pageSize={this.pageSize} category="business" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" pageSize={this.pageSize} category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" pageSize={this.pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" pageSize={this.pageSize} category="science" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" pageSize={this.pageSize} category="technology" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" />} />
            <Route exact path="/sport" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sport" country="in" pageSize={this.pageSize} category="sport" />} />
          </Routes>
        </Router>
      </>
    )
  }
}
