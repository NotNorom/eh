import React, { Component } from 'react';
// import config from "./config.js";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Queue from "./Queue/Queue";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <VideoPlayer />
                </header>
                <main>
                    <Queue queue={this.state.queue}/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;