import React, { Component } from "react";
import style from "./VideoPlayer.module.css";
import YouTube from 'react-youtube';

class VideoPlayer extends Component {
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
                    <span className={style.videoTitle}>"videoTitle"</span>
                    <div className={style.controls}>
                        <button>Pause</button>
                        <button>Play</button>
                        <button>Skip</button>
                    </div>
                    <a
                        href={"https://youtu.be/"+this.props.videoId}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.linkToVideo}
                    >https://youtu.be/{this.props.videoId}</a>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;