import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {is1: false, is2: false, last: '', first: '', navigat: true}

  onSubmitChange = event => {
    event.preventDefault()
    this.firstNAME()
    this.lastNAME()
    const {first, last} = this.state
    if (first !== '' && last !== '') {
      this.setState({navigat: false})
    }
  }

  firstNAME = () => {
    const {first} = this.state
    if (first === '') {
      this.setState({is1: true})
    } else {
      this.setState({is1: false})
    }
  }

  btnSubmit = () => {
    this.setState({navigat: true})
  }

  lastNAME = () => {
    const {last} = this.state
    if (last === '') {
      this.setState({is2: true})
    } else {
      this.setState({is2: false})
    }
  }

  firstName = event => {
    this.setState({first: event.target.value})
  }

  lastName = event => {
    this.setState({last: event.target.value})
  }

  render() {
    const {is1, is2, first, last, navigat} = this.state
    return (
      <form onSubmit={this.onSubmitChange}>
        <div className="main">
          <h1 className="head">Registration</h1>
          {navigat ? (
            <div className="container">
              <label className="para" htmlFor="firstname">
                FIRST NAME
              </label>
              <input
                value={first}
                onBlur={this.firstNAME}
                onChange={this.firstName}
                placeholder="First Name"
                id="firstname"
                type="text"
              />
              {is1 ? <p className="error">Required</p> : null}
              <label className="para" htmlFor="lastname">
                LAST NAME
              </label>
              <input
                value={last}
                onBlur={this.lastNAME}
                onChange={this.lastName}
                placeholder="Last Name"
                id="lastname"
                type="text"
              />
              {is2 ? <p className="error">Required</p> : null}
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          ) : (
            <div className="container">
              <p>Submitted Successfully</p>
              <img
                alt="success"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              />
              <button
                className="btnresponse"
                onClick={this.btnSubmit}
                type="button"
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </form>
    )
  }
}

export default RegistrationForm
