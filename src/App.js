import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transition from './Transition'
import TransitionGroup from './TransitionGroup'
import { CSSTransition } from 'react-transition-group'

let idx = 1
class App extends Component {
  state = {
    list: ['TransitionGroupItem-0'],
    show: true
  }

  addClick = () => {
    let list = this.state.list.slice()
    this.setState({
      show: true,
      list: list.concat(['TransitionGroupItem-' + idx++])
    })
  }

  deleteClick = () => {
    let list = this.state.list.slice()
    if (list.length === 0) return
    list.splice(0, 1)
    console.log('list=>', list)
    this.setState({
      show: false,
      list: list
    })
  }

  handleEnter = (el) => {
    // console.log('111', el.scrollHeight)
  }

  handleLeave = (el) => {
    // console.log('222', el.scrollHeight)
  }

  render() {
    const nodes = this.state.list.map((item, key) => (
      <Transition 
        key={key} 
        className="slideUp" 
        onEnter={this.handleEnter} 
        onLeave={this.handleLeave}>
        <li>{item}</li>
      </Transition>
    ))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.addClick}>add one data</button>
          <button onClick={this.deleteClick}>delete one data</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Transition show={this.state.show} className="zoom" onEnter={this.handleEnter} onLeave={this.handleLeave}>
          <div><h1>see you next time 1</h1></div>
        </Transition>
        
        <CSSTransition in={this.state.show} timeout={400} classNames="fade">
          <div><h1>see you next time 2</h1></div>
        </CSSTransition> */}

        <TransitionGroup component="ul">
          {nodes}
        </TransitionGroup>

      </div>
    );
  }
}

export default App;
