const youtube = require('../lib/youtube');

jest.mock('axios');
const axios = require('axios');

describe('YouTube', () => {
    beforeEach(() => {
        const response = {
            data: {
                items: [{ id: { videoId: 'ABC123' } }]
            }
        };

        axios.get.mockResolvedValue(response);
    });

    it('returns a valid YouTube video URL', async () => {
        const video = await youtube.video();
        expect(video).toBe('http://www.youtube.com/watch?v=ABC123');
    });
});
