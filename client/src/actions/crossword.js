import * as api from "../api/crossword.js";

export const createCrossword = (crossword) => async (dispatch) => {
  try {
    const { data } = await api.createCrossword(crossword);
    // console.log(data);
    // dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
