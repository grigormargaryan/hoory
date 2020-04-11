import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import { ReactComponent as Logo } from '../../assets/images/grl.svg';

class Dashboard extends PureComponent {
  render() {
    const { userInfo } = this.props;
    return (
      <>
        <Header />
        <div className="dashboard-container text-align">
          <div className="step-content">
            <div className="assistant-container">
              <div className="text-align mb-5">
                <Logo
                  className={`box-shadow border-st-none border-color-${userInfo.color} cursor-pointer`}
                />
                <h1>hoory </h1>
              </div>
              <div className="txt-center mb-2">
                <h4 className="m-0 fs-20">
                  {userInfo.user.firstName} {userInfo.user.lastName}
                </h4>
                <p className="label m-0 color">{userInfo.user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.auth.userInfo,
});

export default connect(mapStateToProps, null)(Dashboard);
