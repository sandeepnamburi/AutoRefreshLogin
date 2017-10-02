import React, { Component } from 'react';
import './Intro.css';



class Intro extends Component {


  constructor(props) {
    super(props)
    this.state = {
      newUser: false,
      verifiedUser: false,
      userPress: false,
      serverCall: true,
      email: '',
      name: '',
      phone: ''
    }
  }

  typingEmail = (e) => {
    this.setState({email: e.target.value})
    if (e.target.value.includes('.edu')) {
      // Pretend you've checked and they don't have an account
      fetch('https://idontwanna.fail/user/by/email/' + e.target.value)
        .then((response) => response.json())
        .then((responseJson) => {
          if (!responseJson.accountExists || !responseJson.verified) {
            this.setState({newUser: true})
          }
          else if (responseJson.verified) {
            this.setState({verifiedUser: true})
          }
          console.log("Successfully connected to server.")
          this.setState({serverCall: true})
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  getComponent(event) {
        console.log('Sign up button has been pressed.');
        this.setState({userPress: true})
    }

    getComponent2(event) {
          console.log('Button has been pressed.');
          this.setState({userPress: true})
      }

  render() {
    const thankMessage = (
      <div className={this.state.userPress ? '' : 'hidden'}>
      <h1>Thanks for signing up.<br />Check your email for a confirmation link.</h1>
      </div>
    )

    const serverMessage = (

      <div className={this.state.serverCall ? '' : 'hidden'}>
      <p></p>
      <h2>Server message goes here.</h2>
      </div>
    )

    const picture = (
      <div>
      <img src="http://i66.tinypic.com/23uwwhy.png" alt="logo" align="top"/>
    </div>
    )

    const passwordTextBox = (
      <div>
      <h3>You're a user. Enter password:</h3>
      <input className='myBox' type="password"/>
      <button className={this.state.newUser ? '' : 'hidden'}
      onClick={this.getComponent.bind(this)}
      >Login
      </button>
      </div>
    )

    const mainElements = (

      <div className={this.state.userPress ? 'hidden' : ''}>
        <input name="email" type="text" className='myBox' onChange={this.typingEmail} value={this.state.email} placeholder="Enter your .edu email"/>
        <h3 className={this.state.newUser ? '' : 'hidden'}>
          <br />It looks like you don't have an account.
          <br />Please sign up.
        </h3>
        <p className={this.state.newUser ? '' : 'hidden'}>Name: </p>
        <p></p>
        <input name="name" className='myBox' placeholder="First and Last" className={this.state.newUser ? '' : 'hidden'} />
        <p className={this.state.newUser ? '' : 'hidden'}>Phone number: </p>
        <input name="phone" placeholder="(214) 666-6969" className='myBox' className={this.state.newUser ? '' : 'hidden'} />
        <p></p>
        <button className={this.state.newUser ? '' : 'hidden'}
        onClick={this.getComponent.bind(this)}
        >Sign Up
        </button>
      </div>
    )
    return (
      <div className='Intro'>
        {mainElements}
        {thankMessage}
        {picture}
        {this.state.verifiedUser && passwordTextBox}
      </div>

    );
  }
}


export default Intro;
