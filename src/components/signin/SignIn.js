import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../../redux/action/auth';
import signin from '../../assets/images/signin.png';
import eye from '../../assets/images/eye.png';

class SignIn extends PureComponent {
  state = {
    email: '',
    password: '',
    passwordType: true,
  };

  changeInput = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  signIn = () => {
    const { email, password } = this.state;
    let userInfo = JSON.parse(JSON.parse(localStorage.getItem(['persist:hoory'])).auth);
    if (
      Object.keys(userInfo.userInfo).length > 0 &&
      userInfo.userInfo.user.email === email &&
      userInfo.userInfo.user.password === password
    ) {
      this.props.signIn();
    } else {
      return false;
    }
  };

  passwordTypeChange = () => {
    this.setState((prevState) => ({
      ...prevState,
      passwordType: !prevState.passwordType,
    }));
  };

  render() {
    const { email, password, passwordType } = this.state;
    return (
      <div className="text-align">
        <div className="steps-container">
          <div className="step-content">
            <div className="pages-container">
              <div className="txt-center mb-9">
                <img src={signin} alt="hoory" className="hoory-img-signin" />
              </div>
              <div className=" mb-3 mt-3">
                <h3 className="label">Sign in to your account</h3>
              </div>
              <div className="mb-3">
                <div className="google-btn w-60 h-50 txt-center">
                  <img
                    className="google-icon"
                    alt="google"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  />
                  <span className="btn-text">Sign In with Google</span>
                </div>
              </div>
              <div className="mb-3 dis-jus df">
                <div className="w-60">
                  <p>
                    <span>or</span>
                  </p>
                </div>
              </div>
              <div className="mb-1">
                <input
                  type="text"
                  onChange={(e) => {
                    this.changeInput(e);
                  }}
                  name="email"
                  placeholder="Email"
                  className="pl-10 w-60 default-input h-50 fs-16"
                />
              </div>
              <div className="mb-3 relative">
                <input
                  type={passwordType ? 'password' : 'text'}
                  onChange={(e) => {
                    this.changeInput(e);
                  }}
                  name="password"
                  placeholder="Password"
                  className="pl-10 w-60 default-input h-50 fs-16"
                />
                <img
                  src={eye}
                  alt="eye"
                  className="eye"
                  onClick={() => this.passwordTypeChange()}
                />
              </div>
              <div className="mb-1">
                <button
                  type="submit"
                  onClick={() => this.signIn()}
                  className="btn w-60 btn-start"
                  disabled={!password || !email}
                >
                  Sign In
                </button>
              </div>
              <div className="mb-3">
                <span className="fs-12 color">
                  {' '}
                  Don`t have an account?{' '}
                  <Link to="/" className="color font-weight-500">
                    Sign Up
                  </Link>
                </span>
                <br />
                <Link to="#" className="fs-12 color font-weight-500">
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signIn })(SignIn);
