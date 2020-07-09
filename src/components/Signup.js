import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationManager } from 'react-notifications';
import * as authActions from '../redux/actions/authAction';

const TextInput = ({ id, label, placeholder, type, onChange }) => (
  <div class='form-group xs-mt-10'>
    <input
      class='form-field'
      id={id}
      placeholder={placeholder}
      type={type ? type : 'text'}
      onChange={onChange}
    />
    <label for={id} class='form-label'>
      {label}
    </label>
  </div>
);
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      mobile: '',
      password: '',
      email: '',
      isEmailValid: true,
      isSubmitted: false
    };
  }
  handleChange = (key, value) => {
    this.setState({ [key]: value }, () => {
      if (key === 'email') {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(value)) {
          this.setState({ isEmailValid: false });
        } else {
          this.setState({ isEmailValid: true });
        }
      }
    });
  };
  handleSubmit = () => {
    const {
      firstName,
      lastName,
      mobile,
      password,
      email,
      isEmailValid
    } = this.state;

    this.setState({ isSubmitted: true });

    if (
      firstName &&
      lastName &&
      email &&
      isEmailValid &&
      mobile.toString().length === 10 &&
      password.length >= 8
    ) {
      let data = {
        firstName,
        lastName,
        phoneNumber: mobile,
        email,
        password
      };
      this.props.actions.signupUserRequest(data).then(() => {
        console.log('propssss', this.props.auth);
        if (this.props.auth && this.props.auth.error) {
          NotificationManager.error(this.props.auth.error);
        } else {
          NotificationManager.success('Signup Successful!');
          this.props.closeModal();
        }
      });
    }
  };
  render() {
    const {
      isSubmitted,
      firstName,
      lastName,
      email,
      password,
      mobile,
      isEmailValid
    } = this.state;
    console.log('state>>', this.state);
    return (
      <React.Fragment className='xs-ml-10 xs-mr-10'>
        <Row>
          <Col span={11} className='xs-mr-10'>
            <TextInput
              id='firstName'
              placeholder='First Name'
              label='First Name'
              onChange={e => this.handleChange('firstName', e.target.value)}
            />
            {isSubmitted && !firstName && (
              <span className='error'>Please enter first name</span>
            )}
          </Col>
          <Col span={12}>
            <TextInput
              id='lastName'
              placeholder='Last Name'
              label='Last Name'
              onChange={e => this.handleChange('lastName', e.target.value)}
            />
            {isSubmitted && !lastName && (
              <span className='error'>Please enter Last name</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TextInput
              id='mobileNumber'
              placeholder='Mobile Number'
              label='Mobile Number'
              type='number'
              onChange={e => this.handleChange('mobile', e.target.value)}
            />
            {isSubmitted && mobile.length !== 10 && (
              <span className='error'>Please enter 10 digit mobile number</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TextInput
              id='email'
              placeholder='Email'
              label='Email'
              onChange={e => this.handleChange('email', e.target.value)}
            />
            {isSubmitted && (!isEmailValid || !email) && (
              <span className='error'>Please enter valid email adress</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TextInput
              id='password'
              placeholder='Password'
              label='Password'
              type='password'
              onChange={e => this.handleChange('password', e.target.value)}
            />
            {isSubmitted && password.length < 8 && (
              <span className='error'>
                Please enter password of atleast 8 characters
              </span>
            )}
          </Col>
        </Row>
        <button
          className='full-width continue-btn xs-mt-30'
          onClick={this.handleSubmit}
        >
          SIGN UP
        </button>
        <div className='d-flex justify-center xs-mt-10'>
          <p className='default xs-mt-5'>Already An Account?</p>
          <Button
            type='link'
            onClick={() => this.props.handleModalContent('login')}
          >
            LOGIN
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Signup);
