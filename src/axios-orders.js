import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-9b44f.firebaseio.com/'
});

export default instance;