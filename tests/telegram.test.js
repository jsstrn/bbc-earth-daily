const telegram = require('../lib/telegram');

const youtube = require('../lib/youtube');
jest.mock('../lib/youtube');

const constants = require('../lib/constants');
jest.mock('../lib/constants', () => ({
    telegramBotToken: 'some-bot-token',
    telegramChannel: 'some-channel-id'
}));

describe('Telegram', () => {
    beforeEach(() => {
        youtube.video.mockImplementation(() => 'some-youtube-video');
    });

    it('returns a valid Telegram URL', async () => {
        const url = await telegram.url();
        expect(url).toBe("https://api.telegram.org/botsome-bot-token/sendMessage?chat-id=some-channel-id&text=Enjoy%20your%20daily%20dose%20of%20BBC%20Earth%20some-youtube-video");
    });
});
