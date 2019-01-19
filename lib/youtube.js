const axios = require('axios');
const _ = require('lodash');
const {youtubeChannelId: channel, youtubeApiKey: apiKey} = require('./constants');

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel}&maxResults=50&key=${apiKey}`

exports.video = async (event) => {
    try {
        const response = await axios.get(url);
        const video = _.sample(response.data.items);
        return `http://www.youtube.com/watch?v=${video.id.videoId}`;
    } catch (error) {
        console.error(error);
    }  
};
