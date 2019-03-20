import React, { Component } from "react";
import {
    getVideoDataFromId,
} from "../apiHelper.js";
import style from "./QueueEntry.module.css";

class QueueEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoData: {
                "kind": "youtube#video",
                "etag": "",
                "id": "",
                "snippet":
                {
                    "publishedAt": "",
                    "channelId": "",
                    "title": "",
                    "description": "",
                    "thumbnails":
                    {
                        "default":
                        {
                            "url": "",
                            "width": 120,
                            "height": 90
                        },
                        "medium":
                        {
                            "url": "",
                            "width": 320,
                            "height": 180
                        },
                        "high":
                        {
                            "url": "",
                            "width": 480,
                            "height": 360
                        },
                        "standard":
                        {
                            "url": "",
                            "width": 640,
                            "height": 480
                        },
                        "maxres":
                        {
                            "url": "",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "",
                    "tags": ["", ""],
                    "categoryId": "",
                    "liveBroadcastContent": "",
                    "localized":
                    {
                        "title": "",
                        "description": ""
                    }
                }
            },
        }
    }

    componentDidMount() {
        getVideoDataFromId(this.props.entry, (data) => {
            var ytVideoData = data["items"][0];
            this.setState({
                videoData: ytVideoData,
            }, () => {console.log(JSON.stringify(ytVideoData))});
        });
    }

    render() {
        return (
            <li className={style.queueEntry}>
                #{this.props.index+1}
                <span className={style.songTitle}>
                    <a
                        href={this.props.entry ? "https://youtu.be/" + this.props.entry : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.songTitleLink}
                    >{this.state.videoData.snippet.title}
                    </a>
                </span>
                <div className={style.controls}>
                    <button onClick={this.props.onPlay}>Play</button>
                    <button onClick={this.props.onMoveUp}>Up</button>
                    <button onClick={this.props.onMoveDown}>Down</button>
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </li>
        );
    }
}

export default QueueEntry;