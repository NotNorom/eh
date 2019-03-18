import React, { Component } from 'react';
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Queue from "./Queue/Queue";
import "./fonts/sinkin-sans/sinkin-sans.css";
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
        this.setCurrentlyPlaying = this.setCurrentlyPlaying.bind(this);
    }

    setCurrentlyPlaying(videoId) {
        console.info("Setting currentlyPlaying: " + JSON.stringify(videoId));
        this.setState({currentlyPlaying: videoId});
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <VideoPlayer videoId={this.state.currentlyPlaying}/>
                </header>
                <main>
                    <Queue
                        queue={this.state.queue}
                        onPlay={this.setCurrentlyPlaying}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;