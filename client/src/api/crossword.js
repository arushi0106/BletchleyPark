import axios from "axios";

const url = "http://localhost:5000/crossword";

export const createCrossword = (data) => axios.post(url, data);
