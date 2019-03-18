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
                <span className={style.songTitle}>{this.state.videoData.snippet.title}</span>
                <div className={style.controls}>
                    <button onClick={this.props.play}>Play</button>
                    <button onClick={this.props.moveUp}>Up</button>
                    <button onClick={this.props.moveDown}>Down</button>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </li>
        );
    }
}

export default QueueEntry;