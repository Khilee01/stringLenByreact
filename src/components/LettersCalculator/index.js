// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
    noOfLetters: 0,
  }

  enteredString = event => {
    this.setState({
      inputText: event.target.value,
      noOfLetters: event.target.value.length,
    })
  }

  initializeZero = () => {
    this.setState({
      inputText: '',
      noOfLetters: 0,
    })
  }

  render() {
    const {inputText, noOfLetters} = this.state
    return (
      <div className="mainContainer">
        <div className="textContainer">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phraseInput">Enter the phrase</label>
          <input
            type="text"
            id="phraseInput"
            name="phraseInput"
            placeholder="Enter the phrase"
            value={inputText}
            onChange={this.enteredString}
          />
          <p className="button" onClick={this.initializeZero}>
            No.of letters: {noOfLetters}
          </p>
        </div>
        <div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
