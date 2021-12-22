import * as api from "../api/dashboard.js";

export const getdashboard = (cross) => async (dispatch) => {
  try {
    const { data } = await api.getdashboard(cross);
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
