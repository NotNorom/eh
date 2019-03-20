import React, { Component } from "react";
import YouTube from 'react-youtube';
import {
    getVideoDataFromId,
} from "../apiHelper.js";
import style from "./VideoPlayer.module.css";


class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        }
    }

    componentDidMount() {
        if (this.props.videoId === undefined || this.props.videoId === "") {
            return;
        }
        getVideoDataFromId(this.props.videoId, (data) => {
            var ytVideoData = data["items"][0];
            var title = ytVideoData["snippet"]["title"];
            this.setState({title: title});
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.videoId !== prevProps.videoId) {
            getVideoDataFromId(this.props.videoId, (data) => {
                var ytVideoData = data["items"][0];
                var title = ytVideoData["snippet"]["title"];
                this.setState({title: title});
            });
        }
    }

    render() {
        const opts = {
            height: '225',
            width: '400',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            }
        };
        return (
            <div className={style.videoPlayerContainer}>
                <YouTube 
                    videoId={this.props.videoId}
                    id={style.videoPlayer}
                    className={style.iframe}
                    containerClassName={style.iframeContainer}
                    opts={opts}
                    onReady={(a) => console.log("onReady ", a)}
                    onPlay={(a) => console.log("onPlay ", a)}
                    onPause={(a) => console.log("onPause ", a)}
                    onEnd={(a) => console.log("onEnd ", a)}
                    onError={(a) => console.log("onError ", a)}
                    onStateChange={(a) => console.log("onStateChange ", a)}
                    onPlaybackRateChange={(a) => console.log("onPlaybackRateChange ", a)}
                    onPlaybackQualityChange={(a) => console.log("onPlaybackQualityChange ", a)}
                />
                <div className={style.controlsAndMetaData}>
                    <span className={style.nowPlaying}>NOW PLAYING</span><br />
                    <span className={style.videoTitle}>{this.state.title}</span>
                    <div className={style.controls}>
                        <button onClick={this.props.onSkip}>Skip</button>
                        <label htmlFor="autoPlayToggle">Autoplay:
                            <input
                                name="autoPlayToggle"
                                type="checkbox"
                                value={this.props.autoplay}
                                onChange={this.props.onAutoPlayChange}
                            />
                        </label>
                        <label htmlFor="timerSeconds">Timer (seconds):
                            <input
                                name="timerSeconds"
                                type="number"
                                min="0"
                                disabled={!this.props.autoPlay}
                                value={this.props.timerSeconds}
                                onChange={this.props.onTimerSecondsChange}
                            />
                        </label>
                    </div>
                    <a
                        href={this.props.videoId ? "https://youtu.be/" + this.props.videoId : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.linkToVideo}
                    >{this.props.videoId ? "https://youtu.be/" + this.props.videoId : ""}</a>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;