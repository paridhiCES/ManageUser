import React,{ Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

// Components
import Button from './Button'
import TextInput from './TextInput'

// Styles
import {formStyle, submitStyle, backBtnStyle} from '../css/Style'

class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      isValidEmail: false,
      isValidContact: false,
    }
    this.emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.contactFormat = /^(\+\d{1,3}[- ]?)?\d{10}$/
  }

  validateEmail = (email) => {
    this.setState({
      isValidEmail: this.emailFormat.test(email)
    })
  }

  validateContact = (contact) => {
    this.setState({
      isValidContact: this.contactFormat.test(contact)
    })
  }

  componentDidMount(){
    this.props.actions.getUserById(this.props.params.id)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.user !== nextProps){
      this.setState({
        user: nextProps.user,
        isValidEmail: this.emailFormat.test(nextProps.user.email),
        isValidContact: this.contactFormat.test(nextProps.user.contact)
      })
    }
  }

  onChange = (event) => {
    const name = event.target.name
    if(name === 'email'){
      this.validateEmail(event.target.value)
    }else if(name === 'contact'){
      this.validateContact(event.target.value)
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
    isvalid = isEmpty || !this.state.isValidEmail || !this.state.isValidContact
    return isvalid;
  }

  handleSubmit = () => {
    if (this.formValidations(this.state.user)){
      alert('Please Fill the Details or check Email TextBox')
    } else if(this.props.params.id){
      this.props.actions.updateUser(this.state.user);
    } else {
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
        <form>
          <div style={formStyle}>
            <TextInput type='text' label='Name' name='name'
              placeholder='Enter Full Name'
              value={this.state.user.name}
              onChange={this.onChange} />
            <TextInput type='text' label='Address' name='address'
              placeholder='Enter Address'
              value={this.state.user.address}
              onChange={this.onChange} />
            <TextInput type="tel" maxlength="10" label='Contact' name='contact'
              placeholder='Enter Contact (eg- XXXXXXXXXX)'
              value={this.state.user.contact}
              isValid={this.state.isValidContact}
              onChange={this.onChange} />
            <TextInput type="email" label='Email' name='email'
              placeholder='Enter Email (eg- xxx@mail.com)'
              isValid={this.state.isValidEmail}
              value={this.state.user.email}
              onChange={this.onChange}
              />
            <div>
              <Button value="Clear" style={submitStyle(false)} onClick={this.resetFields} />
              <Button value="Submit" style={submitStyle(true)} onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  params: PropTypes.object,
}

export default UserForm
