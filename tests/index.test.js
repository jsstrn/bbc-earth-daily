const index = require('../index');

jest.mock('axios');
const axios = require('axios');

jest.mock('../lib/telegram');
const telegram = require('../lib/telegram');

describe('Index', () => {
    beforeEach(() => {
        jest.resetModules();
        telegram.url.mockImplementation(() => 'some-telegram-url');
    });

    it('calls the correct Telegram API', async () => {
        await index.handler();
        expect(axios.get).toHaveBeenCalledWith('some-telegram-url');
    });
});
