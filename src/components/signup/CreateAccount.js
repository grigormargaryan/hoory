import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import eye from '../../assets/images/eye.png';

import { customInput } from '../fields/Fields';
import { required, email, minLength } from '../../utils/validation';

class CreateAccount extends PureComponent {
  state = {
    passwordType: true,
  };

  passwordTypeChange = () => {
    this.setState((prevState) => ({
      ...prevState,
      passwordType: !prevState.passwordType,
    }));
  };

  render() {
    const { handleSubmit } = this.props;
    const { passwordType } = this.state;

    return (
      <>
        <div className="txt-center mb-3">
          <h4 className="label">Create your account</h4>
        </div>
        <div className="mb-2 txt-center">
          <div className="google-btn w-60 h-50 txt-center">
            <img
              className="google-icon"
              alt="google"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
            <span className="btn-text">Sign Up with Google</span>
          </div>
        </div>
        <div className="mb-1   txt-center dis-jus df">
          <div className="w-60 fs-16">
            <p>
              <span>or</span>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="txt-center mb-1 df dis-jus ">
            <div className="df">
              <div className="w-48">
                <Field
                  name="firstName"
                  component={customInput}
                  type="text"
                  placeholder="First Name"
                  className="pl-10 w-100 default-input h-50 fs-16 input-with-right"
                  validate={[required]}
                />
              </div>
              <span />
              <div className="w-48">
                <Field
                  name="lastName"
                  component={customInput}
                  type="text"
                  placeholder="Last Name"
                  className="pl-10 w-100 default-input h-50 fs-16 input-with-left"
                  validate={[required]}
                />
              </div>
            </div>
          </div>
          <div className="txt-center mb-1">
            <Field
              name="email"
              component={customInput}
              type="text"
              placeholder="Email"
              className="pl-10 w-60 default-input h-50 fs-16"
              validate={[required, email]}
            />
          </div>
          <div className="txt-center mb-1 relative">
            <Field
              name="password"
              component={customInput}
              type={passwordType ? 'password' : 'text'}
              placeholder="Password"
              className="pl-10 w-60 default-input h-50 fs-16"
              validate={[required, minLength]}
            />
            <img
              src={eye}
              alt="eye"
              className="eye"
              onClick={() => this.passwordTypeChange()}
            />
          </div>
          <div className="mb-1 txt-center">
            <div className="prov w-60 h-50 txt-center">
              <span className="w-100 fs-12 color">
                By registering an account with us you agree to the PP and T&c
              </span>
            </div>
          </div>
          <div className="txt-center mb-1">
            <button type="submit" className="btn w-60 btn-start ">
              Create Account
            </button>
          </div>
        </form>
        <div className="txt-center mb-3">
          <span className="fs-12 color">
            Have an account?{' '}
            <Link to="/sign-in" className="color font-weight-500">
              Sign In
            </Link>
          </span>
        </div>
      </>
    );
  }
}

CreateAccount = reduxForm({
  form: 'create',
})(CreateAccount);

export default CreateAccount;
