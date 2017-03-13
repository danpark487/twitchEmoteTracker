import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div>
          <a href="/"><img src="twitch-logo.png" className="img-logo" /></a>
        </div>
        <div className="channel-chat-box">
          <div className="channel-container">
              <text className="emote-count-text" style={{ fontSize: '25px' }}>Channel:</text>
              <div style={{ paddingBottom: '5px' }}>
                <text style={{ fontSize: '20px', color: 'white', fontFamily: 'PRIMETIME' }}>{this.props.channel}</text>
              </div>
              <div />
          </div>
          <div className="chat-container">
            {this.props.lock ? <img src="lock_icon.png" onClick={this.props.handleLockClick} className="chat-locks" /> :
              <img src="unlock_icon.png" onClick={this.props.handleLockClick} className="chat-locks" />}
            <div className="chat-box">
              {this.props.lock ? null : <text className="chat-text">{this.props.chat}</text>}
            </div>
          </div>
        </div>
        <div className="buttons">
          {this.props.started ? this.renderStop() : this.renderStart()}
          <div className="btn-box">
              <text onClick={this.props.resetClick} className="emote-count-text" style={{ fontSize: '25px' }}>RESET HEADS!</text>
          </div>
        </div>
      </div>
    );
  }

  renderStart() {
    return (
      <div className="btn-box">
        <text onClick={this.props.onHandleStart} className="emote-count-text" style={{ fontSize: '25px' }}>COUNT 'EM!</text>
      </div>
    );
  }

  renderStop() {
    return (
      <div className="btn-box">
        <text onClick={this.props.onHandleStop} className="emote-count-text" style={{ fontSize: '25px' }}>STOP!</text>
      </div>
    );
  }
}
