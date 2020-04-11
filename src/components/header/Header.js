import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { logOut } from '../../redux/action/auth';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <span
          className="active"
          onClick={() => {
            this.props.logOut();
          }}
        >
          Logout
        </span>
      </div>
    );
  }
}

export default connect(null, { logOut })(Header);
