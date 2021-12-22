import axios from "axios";

const url = "http://localhost:5000/user/dashboard";

export const getdashboard = (id) => axios.get(`${url}/${id}`);
