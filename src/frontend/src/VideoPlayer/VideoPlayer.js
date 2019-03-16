import React, { Component } from "react";
import style from "./VideoPlayer.module.css";
import YouTube from 'react-youtube';

class VideoPlayer extends Component {
    render() {
        const opts = {
            height: '225',
            width: '400',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div className={style.videoPlayerContainer}>
                <YouTube 
                    videoId={this.props.videoId}
                    id={style.videoPlayer}
                    className={""}
                    containerClassName={""}
                    opts={opts}
                    onReady={console.log("onReady")}
                    onPlay={console.log("onPlay")}
                    onPause={console.log("onPause")}
                    onEnd={console.log("onEnd")}
                    onError={console.log("onError")}
                    onStateChange={console.log("onStateChange")}
                    onPlaybackRateChange={console.log("onPlaybackRateChange")}
                    onPlaybackQualityChange={console.log("onPlaybackQualityChange")}
                />
                <div className={""}>
                    <span className={style.nowPlaying}>NOW PLAYING</span>
                    <span className={style.videoTitle}>"videoTitle"</span>
                    <div className={style.controls}>
                        <button>Pause</button>
                        <button>Play</button>
                        <button>Skip</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;