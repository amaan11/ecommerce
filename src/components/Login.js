import React, { Component } from 'react';
import { Button, Row, Col, Input } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/actions/authAction';
import { NotificationManager } from 'react-notifications';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isSubmitted: true,
      isEmailValid: false,
      password: ''
    };
  }
  googleLoginHandler = () => {
    this.props.actions.googleLoginRequest().then(() => {
      if (this.props.auth && this.props.auth.error) {
        NotificationManager.error(this.props.auth.error);
      } else {
        NotificationManager.success('Login Successful!');
        this.props.closeModal();
      }
    });
  };
  facebookLoginHandler = () => {
    this.props.actions.facebookLoginRequest().then(() => {
      if (this.props.auth && this.props.auth.error) {
        NotificationManager.error(this.props.auth.error);
      } else {
        NotificationManager.success('Login Successful!');
        this.props.closeModal();
      }
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
      isSubmitted: false
    });
  };
  submitHandler = () => {
    const { email, password } = this.state;
    if (!password) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regex.test(email)) {
        this.setState({ isEmailValid: true, isSubmitted: true });
      } else {
        this.setState({ isEmailValid: false, isSubmitted: true });
      }
    } else {
      let data = {
        email,
        password
      };
      this.props.actions.loginWithEmailRequest(data).then(() => {
        if (this.props.auth && this.props.auth.error) {
          this.setState(
            {
              password: ''
            },
            () => {
              NotificationManager.error(this.props.auth.error);
            }
          );
        } else {
          this.setState(
            {
              email: '',
              isEmailValid: false,
              password: ''
            },
            () => {
              NotificationManager.success('Login Successful!');
              this.props.closeModal();
            }
          );
        }
      });
    }
  };
  render() {
    const { email, isSubmitted, isEmailValid, password } = this.state;
    console.log('state>', this.state);
    return (
      <div className='xs-ml-10 xs-mr-10'>
        <p className='text-center default'>
          You're just one step away from signing in
        </p>
        <Row>
          <Col span={11} className='xs-mr-15'>
            <Button
              className='full-width'
              icon={<GoogleOutlined />}
              onClick={this.googleLoginHandler}
            >
              GOOGLE
            </Button>
          </Col>
          <Col span={11}>
            <Button
              className='full-width'
              icon={<FacebookOutlined />}
              onClick={this.facebookLoginHandler}
            >
              FACEBOOK
            </Button>
          </Col>
        </Row>
        <div className='xs-mt-15 text-center bold'>OR</div>
        <div class='form-group xs-mb-20'>
          <input
            for='email'
            class='form-field'
            id='email'
            placeholder='Email/Mobile Number'
            onChange={this.handleEmailChange}
            value={email}
          />
          {!isEmailValid && isSubmitted && email && (
            <span className='error'>Please enter a valid email</span>
          )}
          <label for='email' class='form-label'>
            Email/Mobile Number
          </label>
        </div>
        {isEmailValid && isSubmitted && (
          <div class='form-group xs-mb-20 xs-mt-20'>
            <input
              type='password'
              class='form-field'
              id='password'
              placeholder='Password'
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />

            <label for='email' class='form-label'>
              Password
            </label>
          </div>
        )}
        <button
          className='full-width continue-btn'
          onClick={this.submitHandler}
        >
          CONTINUE
        </button>
        <div className='d-flex justify-center xs-mt-10'>
          <p className='default xs-mt-5'>New to e-commerce?</p>
          <Button
            type='link'
            onClick={() => this.props.handleModalContent('signup')}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Login);
