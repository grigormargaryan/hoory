import React, { PureComponent } from 'react';
import { ReactComponent as Logo } from '../../assets/images/grl.svg';

class SelectStyles extends PureComponent {
  state = {
    colors: [
      { name: 'indigo' },
      { name: 'green' },
      { name: 'orange' },
      { name: 'red' },
      { name: 'purple' },
      { name: 'magenta' },
      { name: 'blue' },
    ],
    color: 'indigo',
    iconName: 'girl',
  };

  handleSubmit = () => {
    const { colors, ...styleInfo } = this.state;
    this.props.addStyleInfo(styleInfo);
  };

  render() {
    const { color, iconName, colors } = this.state;
    return (
      <>
        <div className="txt-center mb-1">
          <h4 className="label">Select {this.props.assistantName}'s icon</h4>
        </div>
        <div className="txt-center mb-5">
          <label>
            <input
              type="radio"
              className="dis-none img-checkbox"
              name="iconName"
              defaultChecked={iconName === 'girl'}
              value="girl"
              onClick={(e) => this.setState({ iconName: e.target.value })}
            />
            <Logo
              className={`box-shadow border-st-none border-color-${color} cursor-pointer m-r-50`}
            />
          </label>
          <label>
            <input
              type="radio"
              className="dis-none img-checkbox"
              name="iconName"
              value="boy"
              onClick={(e) => this.setState({ iconName: e.target.value })}
            />
            <Logo
              className={`box-shadow border-st-none border-color-${color} cursor-pointer`}
            />
          </label>
        </div>
        <div className="txt-center mb-3">
          <h4 className="label">Select color schema</h4>
        </div>
        <div className="txt-center mb-3">
          <ul className="flex-w">
            {colors.map((col, idx) => (
              <li className="m-r-10" key={idx}>
                <input
                  className="checkbox-color-filter"
                  id={col.name}
                  defaultChecked={col.name === color}
                  type="radio"
                  value={col.name}
                  name="color"
                  onClick={(e) => this.setState({ color: e.target.value })}
                />
                <div className={col.name === color ? `rad border-color-${color}` : 'rad'}>
                  <label
                    className={`b-shadow color-filter color-filter-${col.name}`}
                    htmlFor={col.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="txt-center">
          <button
            type="button"
            className="btn btn-start"
            onClick={() => this.handleSubmit()}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default SelectStyles;
