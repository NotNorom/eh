import React, { Component } from "react";
import style from "./Queue.module.css";
import QueueEntry from "./QueueEntry";

class Queue extends Component {
    render() {
        const queueEntries = this.props.queue.map(entry => {
            return <QueueEntry key={entry} entry={entry} onPlay={this.props.onPlay.bind(null, entry)}/>
        });
        return (
            <div className={style.queueContainer}>
                <ul>
                    {queueEntries}
                </ul>
            </div>
        );
    }
}

export default Queue;