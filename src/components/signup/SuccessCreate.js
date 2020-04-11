import React, { PureComponent } from 'react';
import { ReactComponent as Logo } from '../../assets/images/grl.svg';
import fantastic from '../../assets/images/party-icon.png';
import { Link } from 'react-router-dom';

class SuccessCreate extends PureComponent {
  render() {
    const { color } = this.props;
    return (
      <>
        <div className="text-align">
          <Logo
            className={`border-st-none border-color-${color} cursor-pointer m-r-50`}
          />
        </div>
        <div className="mb-2 d-in-f">
          <p className="label m-0 ">Fantastico</p>
          <img src={fantastic} alt="fantastic" className="m-l-15 img-fantastic" />
        </div>
        <div className="mb-2">
          <p className="fs-16 m-0">
            You have successfully setup the Hoory widget on your website!
          </p>
          <p className="fs-16 mt-1">
            Proceed to Admin Dashboard to start training %name%
          </p>
        </div>
        <div>
          <Link to="/sign-in" className="btn btn-start w-50 l-h-40">
            Go to Admin Dashboard
          </Link>
        </div>
      </>
    );
  }
}

export default SuccessCreate;
