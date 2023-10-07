// Write your JS code here
import {Component} from 'react'
import './index.css'

const errorMsg = '*Required'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorFirstName: '',
    errorLastName: '',
    formFilledSuccess: false,
  }

  onChangeFirstName = event => {
    const name = event.target.value
    const error = name === '' ? errorMsg : null
    this.setState({firstName: name, errorFirstName: error})
  }

  onChangeLastName = event => {
    const name = event.target.value
    const error = name === '' ? errorMsg : null
    this.setState({lastName: name, errorLastName: error})
  }

  onBlurFirstName = event => {
    const name = event.target.value
    const error = name === '' ? errorMsg : null
    this.setState({errorFirstName: error})
  }

  onBlurLastName = event => {
    const name = event.target.value
    const error = name === '' ? errorMsg : null
    this.setState({errorLastName: error})
  }

  onSubmitHandler = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName !== '') {
      this.setState({errorFirstName: errorMsg})
    } else if (firstName !== '' && lastName === '') {
      this.setState({errorLastName: errorMsg})
    } else if (firstName === '' && lastName === '') {
      this.setState({errorFirstName: errorMsg, errorLastName: errorMsg})
    } else {
      this.setState({formFilledSuccess: true})
    }
  }

  onAnotherResponse = event => {
    event.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      errorFirstName: '',
      errorLastName: '',
      formFilledSuccess: false,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      errorFirstName,
      errorLastName,
      formFilledSuccess,
    } = this.state
    const errorMessageFirst = errorFirstName ? (
      <p className="error-msg"> {errorFirstName} </p>
    ) : null
    const errorMessageLast = errorLastName ? (
      <p className="error-msg"> {errorLastName} </p>
    ) : null
    const firstNameFieldClassName = errorFirstName ? 'error-input' : 'input'
    const lastNameFieldClassName = errorLastName ? 'error-input' : 'input'

    return (
      <div className="page">
        <h1 className="heading">Registration</h1>
        {!formFilledSuccess && (
          <form className="registration-form" onSubmit={this.onSubmitHandler}>
            <label htmlFor="first_name" className="label">
              FIRST NAME
            </label>
            <br />
            <input
              type="text"
              id="first_name"
              className={firstNameFieldClassName}
              placeholder="First name"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
              value={firstName}
            />
            {errorMessageFirst}
            <br />
            <label htmlFor="last_name" className="label">
              LAST NAME
            </label>
            <br />
            <input
              type="text"
              id="last_name"
              className={lastNameFieldClassName}
              placeholder="Last name"
              onChange={this.onChangeLastName}
              value={lastName}
              onBlur={this.onBlurLastName}
            />
            {errorMessageLast}
            <br />
            <div className="btn-container">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        )}
        {formFilledSuccess && (
          <div className="submit-success">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="correct-img"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              className="btn"
              onClick={this.onAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
