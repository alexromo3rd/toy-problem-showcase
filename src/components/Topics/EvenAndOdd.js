import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSplit() {
    const evens = [];
    const odds = [];
    const splitInput = this.state.userInput.split(',');
    splitInput.forEach(stringNum => {
      const num = parseInt(stringNum);
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num)
      }
      this.setState({
        evenArray: [...this.state.evenArray, evens],
        oddArray: [...this.state.oddArray, odds],
        userInput: ''
      })
    })
  }

  render() {
    const evenNumSplit = this.state.evenArray.map(element => {
      return (
        <p>{element}</p>
      )
    })

    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e)}/>
        <button className="confirmationButton" onClick={() => this.handleSplit()}>Split</button>
        <span className="resultsBox">Evens: {evenNumSplit}</span>
        <span className="resultsBox">Odds: {this.state.oddArray}</span>
      </div>
    )
  }
}