import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-84e90.firebaseio.com/'
});

export default instance;