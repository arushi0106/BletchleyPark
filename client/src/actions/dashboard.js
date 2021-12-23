import * as api from "../api/dashboard.js";

export const getdashboard = (id) => async (dispatch) => {
  try {
    const { data } = await api.getdashboard(id);
    // console.log(data);
    dispatch({ type: "FETCH_DASHBOARD", payload: data });
  } catch (error) {
    console.log(error);
  }
};
