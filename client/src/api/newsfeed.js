import axios from "axios";

const url = "http://localhost:5000/user/newsfeed";

export const getnewsfeed = () => axios.get(url);
