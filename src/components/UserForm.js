import React,{ Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

// Components
import Button from './Button'
import TextInput from './TextInput'

// Styles
import {formStyle, submitStyle, backBtnStyle} from '../css/Style'

class UserForm extends Component {
  constructor(){
    super();
    this.state = {
      user:{
        name:'',
        address:'',
        contact:'',
        email:''
      },
      isValidEmail: false
    }
    this.emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  onChange = (event) => {
    const name = event.target.name
    if(name === 'email'){
      this.setState({
        validEmail: this.emailFormat.test(event.target.value)
      })
    }
      this.setState({
          user:{
            ...this.state.user,
            [name]: event.target.value,
          }
      })

  }

  resetFields = () => {
    this.setState({
      user:{
        name:'',
        address:'',
        contact:'',
        email:''
      }
    })
  }

  formValidations = (userDetails) => {
    var isvalid = false
    var isEmpty = false
    isEmpty = userDetails.name === '' || userDetails.address === '' || userDetails.contact === '' || userDetails.email === ''
    isvalid = isEmpty || !this.state.validEmail
    return isvalid;
  }

  handleSubmit = () => {
    if(this.formValidations(this.state.user)){
      alert('Please Fill the Details or check Email TextBox')
    }else{
      this.props.actions.saveUser(this.state.user);
    }
  }

  goBack = () => {
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        <Button value="Back" style={backBtnStyle} onClick={this.goBack} />
        <div style={formStyle}>
          <TextInput label='Name' name='name'
            placeholder='Enter Full Name'
            value={this.state.user.name}
            onChange={this.onChange} />
          <TextInput label='Address' name='address'
            placeholder='Enter Address'
            value={this.state.user.address}
            onChange={this.onChange} />
          <TextInput label='Contact' name='contact'
            placeholder='Enter Contact'
            value={this.state.user.contact}
            onChange={this.onChange} />
          <TextInput label='Email' name='email'
            placeholder='Enter Email'
            validEmail={this.state.validEmail}
            value={this.state.user.email}
            onChange={this.onChange} />
          <div>
            <Button value="Clear" style={submitStyle(false)} onClick={this.resetFields} />
            <Button value="Submit" style={submitStyle(true)} onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm
