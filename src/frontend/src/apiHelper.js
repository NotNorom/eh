import Twitch from "twitch-js";
import config from "./config.js";

const {
    api,
    chat,
    chatConstants
} = new Twitch({
    token: config.twitchOAuth,
    username: config.twitchUserName
});


function getVideoDataFromId(videoId, callback) {
    fetch(config.youtubeApiEndpoint + `?id=${videoId}&part=snippet&key=${config.youtubeApiKey}`, {
        method: "GET",
    }).then((response) => {
        if (response.status !== 200) {
            console.log("ERROR: " + JSON.stringify(response));
        }
        response.json().then((data) => {
            callback(data);
        })
    });
}

export {
    getVideoDataFromId,
    chat,
}