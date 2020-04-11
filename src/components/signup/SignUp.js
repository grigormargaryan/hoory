import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import LeftBar from '../sidebar/LeftBar';
import SuccessCreate from './SuccessCreate';
import { createUser } from '../../redux/action/auth';

const AssistantName = React.lazy(() => import('./AssistantName'));
const SelectStyles = React.lazy(() => import('./SelectStyles'));
const CreateAccount = React.lazy(() => import('./CreateAccount'));

class SignUp extends Component {
  state = {
    step: 1,
    assistantName: '',
    iconName: '',
    color: '',
    user: {},
  };

  addAssistantName = (addAssistantName) => {
    this.setState((prevState) => ({
      assistantName: addAssistantName,
      step: prevState.step + 1,
    }));
  };

  addStyleInfo = ({ color, iconName }) => {
    this.setState((prevState) => ({
      color,
      iconName,
      step: prevState.step + 1,
    }));
  };

  submit = (values) => {
    this.setState(
      (prevState) => ({
        user: values,
        step: prevState.step + 1,
      }),
      () => {
        const { step, ...userInfo } = this.state;
        this.props.createUser(userInfo);
      },
    );
  };

  renderSteps = () => {
    const { step, assistantName, color } = this.state;

    return (
      <>
        {
          <Suspense fallback={<div>Loading...</div>}>
            {step === 1 ? (
              <AssistantName addAssistantName={this.addAssistantName} />
            ) : step === 2 ? (
              <SelectStyles
                addStyleInfo={this.addStyleInfo}
                assistantName={assistantName}
              />
            ) : step === 3 ? (
              <CreateAccount onSubmit={this.submit} />
            ) : step === 4 ? (
              <SuccessCreate color={color} />
            ) : null}
          </Suspense>
        }
      </>
    );
  };

  render() {
    return (
      <>
        <LeftBar step={this.state.step} />
        <div className="main">
          <div className="steps-container">
            <div className="step-content">
              <div className="pages-container text-align">{this.renderSteps()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { createUser })(SignUp);
