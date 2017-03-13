import React from 'react';
import io from 'socket.io-client';

import NavBar from './NavBar';
import Emotes from './Emotes';
import AuthModal from './AuthModal';

const socket = io('http://localhost:4100');

socket.on('connect', function () {
  console.log('connected!');
});

const initialState = {
  channel: '',
  chat: '',
  fourHead: 0,
  jebaited: 0,
  bibleThump: 0,
  kappa: 0,
  eleGiggle: 0,
  failFish: 0,
  kreyGasm: 0,
  lul: 0,
  mingLee: 0,
  pogChamp: 0,
  residentSleeper: 0,
  seemsGood: 0,
  triHard: 0,
  voHiYo: 0,
  wutFace: 0,
  lock: true,
  started: false,
  showModal: false
};

export default class App extends React.Component {

  constructor() {
    super();

    this.state = initialState;

    this._messageRecieve = this._messageRecieve.bind(this);
    this._errorReceive = this._errorReceive.bind(this);
    this.onHandleStart = this.onHandleStart.bind(this);
    this.onHandleStop = this.onHandleStop.bind(this);
    this.emoteOccurrences = this.emoteOccurrences.bind(this);
    this.handleLockClick = this.handleLockClick.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }

  componentDidMount() {
    socket.on('chat', this._messageRecieve);
    socket.on('connecterror', this._errorReceive);
  }

  _errorReceive() {
    console.log('error connecting!');
  }

  emoteOccurrences(string) {
    const emotes = [
      '4Head',
      'Jebaited',
      'BibleThump',
      'EleGiggle',
      'Kappa',
      'FailFish',
      'Kreygasm',
      'LUL',
      'MingLee',
      'PogChamp',
      'ResidentSleeper',
      'SeemsGood',
      'TriHard',
      'VoHiYo',
      'WutFace',
    ];

    const allEmotes = {
      '4Head': 'fourHead',
      'Jebaited': 'jebaited',
      'BibleThump': 'bibleThump',
      'Kappa': 'kappa',
      'EleGiggle': 'eleGiggle',
      'FailFish': 'failFish',
      'Kreygasm': 'kreyGasm',
      'LUL': 'lul',
      'MingLee': 'mingLee',
      'PogChamp': 'pogChamp',
      'ResidentSleeper': 'residentSleeper',
      'SeemsGood': 'seemsGood',
      'TriHard': 'triHard',
      'VoHiYo': 'voHiYo',
      'WutFace': 'wutFace'
    };

    const counts = this.state;
    for (let i = 0; i < emotes.length; i++) {
      let count = 0,
        pos = 0,
        step = emotes[i].length;

      for (let j = pos; j < string.length;) {
        pos = string.indexOf(emotes[i], pos);
        if (pos >= 0) {
          count++;
          pos += step;
          j += pos;
        } else {
          j = string.length;
        }
      }
      if (count > 0) {
        counts[allEmotes[emotes[i]]] += count;
      }

    }
    this.setState(counts);
  }

  _messageRecieve(message) {
    this.setState({ chat: message });
    this.emoteOccurrences(message);
  }

  onHandleStart() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  onModalSubmit(evt) {
    evt.preventDefault();
    const settings = {
      channel: evt.target.channel.value,
      oauth: evt.target.oauth.value,
      username: evt.target.username.value
    };
    socket.emit('start', settings);
    this.setState({ started: true, showModal: false, channel: evt.target.channel.value });
  }

  onHandleStop() {
    socket.emit('stop');
    this.setState({ started: false, chat: '', channel: '' });
  }

  handleLockClick(evt) {
    if (this.state.lock) this.setState({ lock: false });
    else this.setState({ lock: true });
  }

  onImageClick(emote) {
    let emoteObj = {};
    emoteObj[emote] = 0;
    this.setState(emoteObj);
  }

  resetClick() {
    let resetState = {
      fourHead: 0,
      jebaited: 0,
      bibleThump: 0,
      kappa: 0,
      eleGiggle: 0,
      failFish: 0,
      kreyGasm: 0,
      lul: 0,
      mingLee: 0,
      pogChamp: 0,
      residentSleeper: 0,
      seemsGood: 0,
      triHard: 0,
      voHiYo: 0,
      wutFace: 0
    };
    this.setState(resetState);
  }

  render() {
    return (
      <div className="flex-container">
        <NavBar
          onHandleStart={this.onHandleStart}
          onHandleStop={this.onHandleStop}
          handleLockClick={this.handleLockClick}
          resetClick={this.resetClick}
          lock={this.state.lock}
          chat={this.state.chat}
          started={this.state.started}
          channel={this.state.channel}
        />
        <Emotes
          state={this.state}
          onImageClick={this.onImageClick}
        />
        <AuthModal
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          onModalSubmit={this.onModalSubmit}
        />
      </div>
    );
  }
}
