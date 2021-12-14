import axios from 'axios';

const url = 'http://localhost:5000/signup';

export const getsignup = () => axios.get(url);