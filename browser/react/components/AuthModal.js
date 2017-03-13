import React from 'react';

import Modal from './Modal';

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.showModal) {
      return (
        <Modal onClose={this.props.hideModal}>
          <div className="modal-container">
            <form onSubmit={this.props.onModalSubmit}>
              <div className="modal-channel">
                <text style={{ fontFamily: 'Dimitri Swank', color: 'white', fontSize: '23px' }}>Username :</text>
                <input className="input-box" name="username" />
              </div>
              <div className="modal-channel">
                <text style={{ fontFamily: 'Dimitri Swank', color: 'white', fontSize: '23px' }}>Channel :</text>
                <input className="input-box" name="channel" />
              </div>
              <div className="modal-oauth">
                <text style={{ fontFamily: 'Dimitri Swank', color: 'white', fontSize: '23px' }}>Oauth PW :</text>
                <input className="input-box" name="oauth" />
              </div>
              <button className="modal-button" type="submit">Let the heads rise!</button>
            </form>
          </div>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
