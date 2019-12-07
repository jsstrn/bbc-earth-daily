const {when, resetAllWhenMocks} = require("jest-when");
const youtube = require("../lib/youtube");

require("../lib/constants");
jest.mock("../lib/constants", () => ({
  youtubeChannelId: "some-channel-id",
  youtubeApiKey: "SOME-API-KEY"
}));

jest.mock("axios");
const axios = require("axios");

const response = {
  data: {
    items: [{id: {videoId: "ABC123"}}]
  }
};

const url =
  "https://www.googleapis.com/youtube/v3/search?channelId=some-channel-id&key=SOME-API-KEY&maxResults=50&part=snippet";

describe("YouTube", () => {
  afterEach(() => {
    resetAllWhenMocks();
  });

  it("returns a valid YouTube video URL", async () => {
    when(axios.get)
      .expectCalledWith(url)
      .mockResolvedValue(response);

    const channelId = "some-channel-id";
    const apiKey = "SOME-API-KEY";
    const video = await youtube.video(channelId, apiKey);

    expect(video).toBe("http://www.youtube.com/watch?v=ABC123");
  });
});
