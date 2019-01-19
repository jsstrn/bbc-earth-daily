const axios = require('axios');
const urlencode = require('urlencode');
const sample = require('lodash.sample');

const videos = [
    'https://youtu.be/cXUALrW3VLE', 
    'https://youtu.be/J7f6s2g8C0I', 
    'https://youtu.be/_p_MPxxvTrs',
    'https://youtu.be/4E8DUzpYlGk',
    'https://youtu.be/rXsNRhEL6Jk',
];
const video = sample(videos);
const channel = process.env.CHANNEL;
const token = `${process.env.TOKEN}`;
const content = urlencode(`Enjoy your daily dose of BBC Earth ${video}`);
const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${channel}&text=${content}`;

exports.handler = async (event) => {
    try {
        const response = await axios.get(url);
        console.log('text', response.data.result.text);
    } catch (error) {
        console.error(error);
    }  
};
