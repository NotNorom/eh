import React, { Component } from "react";
import style from "./Queue.module.css";
import QueueEntry from "./QueueEntry";

class Queue extends Component {
    render() {
        const queueEntries = this.props.queue.map((entry, index, array) => {
            // start searching from the next position
            var indexOfDuplicate = array.indexOf(entry, index+1);
            return <QueueEntry
                // if no duplicate is found, just use the video id.
                // if a duplicate is found, append the index of the duplicate.
                // the duplicate check is made to not spam youtubes data api.
                key={`${entry}${indexOfDuplicate <= 0 ? "" : indexOfDuplicate}`}
                entry={entry}
                index={index}
                onPlay={this.props.onPlay.bind(null, entry, index)}
                onMoveUp={this.props.onMoveUp.bind(null, entry, index)}
                onMoveDown={this.props.onMoveDown.bind(null, entry, index)}
                onDelete={this.props.onDelete.bind(null, entry, index)}
            />
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