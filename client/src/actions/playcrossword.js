import * as api from "../api/playcrossword.js";

export const playCrossword = (cross) => async (dispatch) => {
  try {
    console.log(cross);
    const { data } = await api.playCrossword(cross);
    console.log(data);
    dispatch({ type: "FETCH_CROSSWORD", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const submitCrossword = (timer) => async (dispatch) => {
  try {
    const { data } = await api.submitCrossword(timer);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
