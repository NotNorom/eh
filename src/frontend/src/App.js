import React, { Component } from 'react';
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Queue from "./Queue/Queue";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyPlaying: "b06pKMxF6h8",
            queue: [
                "lBsq4DC6Jv4",
                "WZFVeSZrM_I",
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <VideoPlayer videoId={this.state.currentlyPlaying}/>
                </header>
                <main>
                    <Queue queue={this.state.queue}/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;