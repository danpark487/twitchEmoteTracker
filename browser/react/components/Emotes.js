import React from 'react';

export default class Emotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emote-container">
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('fourHead');}} className="emote-img-container">
            <img src="4Head.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.fourHead}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.fourHead * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('jebaited');}} className="emote-img-container">
            <img src="Jebaited.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.jebaited}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.jebaited * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('kappa');}} className="emote-img-container">
            <img src="Kappa.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.kappa}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.kappa * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('wutFace');}} className="emote-img-container">
            <img src="WutFace.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.wutFace}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.wutFace * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('eleGiggle');}} className="emote-img-container">
            <img src="EleGiggle.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.eleGiggle}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.eleGiggle * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('failFish');}} className="emote-img-container">
            <img src="FailFish.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.failFish}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.failFish * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('kreyGasm');}} className="emote-img-container">
            <img src="Kreygasm.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.kreyGasm}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.kreyGasm * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('lul');}} className="emote-img-container">
            <img src="LUL.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.lul}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.lul * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('mingLee');}} className="emote-img-container">
            <img src="MingLee.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.mingLee}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.mingLee * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('triHard');}} className="emote-img-container">
            <img src="TriHard.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.triHard}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.triHard * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('pogChamp');}} className="emote-img-container">
            <img src="PogChamp.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.pogChamp}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.pogChamp * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('residentSleeper');}} className="emote-img-container">
            <img src="ResidentSleeper.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.residentSleeper}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.residentSleeper * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('seemsGood');}} className="emote-img-container">
            <img src="SeemsGood.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.seemsGood}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.seemsGood * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('voHiYo');}} className="emote-img-container">
            <img src="VoHiYo.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.voHiYo}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.voHiYo * 10) + 'px' }} />
        </div>
        <div className="emote-column">
          <div onClick={() => {this.props.onImageClick('bibleThump');}} className="emote-img-container">
            <img src="BibleThump.png"  className="img-emote" />
          </div>
          <div className="emote-count-box">
            <text className="emote-count-text">{this.props.state.bibleThump}</text>
          </div>
          <div className="emote-stand" style={{ paddingBottom: (this.props.state.bibleThump * 10) + 'px' }} />
        </div>
      </div>
    );
  }
}
