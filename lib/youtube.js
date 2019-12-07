const axios = require("axios");
const _ = require("lodash");
const queryString = require("query-string");
const {youtubeChannelId, youtubeApiKey} = require("./constants");

exports.video = async () => {
  try {
    const params = queryString.stringify({
      channelId: youtubeChannelId,
      key: youtubeApiKey,
      part: "snippet",
      maxResults: 50
    });

    const url = `https://www.googleapis.com/youtube/v3/search?${params}`;

    const {data} = await axios.get(url);

    const videos = data.items.filter(video => {
      return video.id.kind === "youtube#video";
    });
    const video = _.sample(videos);

    return `http://www.youtube.com/watch?v=${video.id.videoId}`;
  } catch (error) {
    console.error(error);
  }
};
