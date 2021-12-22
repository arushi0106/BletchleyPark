import axios from "axios";

const url = "http://localhost:5000/crossword/play";

export const playCrossword = (data) => axios.post(url, data);
