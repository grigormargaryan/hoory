import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.png';

import './index.css';

class LeftBar extends PureComponent {
  render() {
    const { step } = this.props;
    return (
      <>
        <div className="sidenav">
          <div className="text-align log-div">
            <img src={logo} alt="hoory" className="logo-img mb-2" />
          </div>
          <div className="checkbox-list mt-3">
            <div className="flex-item">
              <label className={step > 1 ? 'container bold' : 'container'}>
                Name your assistant
                <input type="checkbox" checked={step > 1} disabled />
                <span className="checkmark" />
              </label>
            </div>
            <div className="flex-item">
              <label className={step > 2 ? 'container bold' : 'container'}>
                Select styles
                <input type="checkbox" disabled checked={step > 2} />
                <span className="checkmark" />
              </label>
            </div>
            <div className="flex-item">
              <label className={step > 3 ? 'container bold' : 'container'}>
                Create your account
                <input type="checkbox" disabled checked={step > 3} />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>

        <div className="main"></div>
      </>
    );
  }
}

export default LeftBar;
