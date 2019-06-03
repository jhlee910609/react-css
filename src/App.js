import React, { Component } from 'react';
import Header from './Header';
import Content from "./Content";


export default class App extends Component {

  state = {
    text: ''
  }
  
  goHome = () => {
    console.log('home')
    this.setState({
      text: 'home'
    })
  }

  goAboutUs = () => {
    console.log('about us')
    this.setState({
      text: 'about us'
    })
  }

  render() {
    return (
      <div>
        <Header goAboutUs={this.goAboutUs} goHome={this.goHome} />
        <Content text={this.state.text}/>
      </div >
    )
  }
};

