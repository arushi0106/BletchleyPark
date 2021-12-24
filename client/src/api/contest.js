import axios from "axios";

const url = "http://localhost:5000/contest";

export const getContest = () => axios.get(url);
