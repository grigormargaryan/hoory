import React, { PureComponent } from 'react';
import assistant from '../../assets/images/assistant.png';

class AssistantName extends PureComponent {
  state = {
    assistantName: '',
  };

  render() {
    const { addAssistantName } = this.props;
    const { assistantName } = this.state;
    return (
      <>
        <div className="txt-center mb-5">
          <img src={assistant} alt="hoory" className="hoory-img" />
        </div>
        <div className="txt-center mb-3">
          <h4 className="label">Name your assistant</h4>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="assistantName"
            value={assistantName}
            onChange={(e) => {
              this.setState({ assistantName: e.target.value });
            }}
            placeholder="Hoory"
            className="text-align w-90 default-input h-60 fs-20 pl-10"
          />
        </div>
        <div className="txt-center">
          <button
            type="submit"
            className="btn btn-start"
            onClick={() => addAssistantName(assistantName)}
          >
            Start
          </button>
        </div>
      </>
    );
  }
}

export default AssistantName;
