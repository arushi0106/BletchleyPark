import * as api from "../api/contest";

export const getContest = (crossword) => async (dispatch) => {
  try {
    const { data } = await api.getContest(crossword);
    // console.log(data);
    dispatch({ type: "FETCH_CONTEST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllContest = () => async (dispatch) => {
  try {
    const { data } = await api.getAllContest();
    // console.log(data);
    dispatch({ type: "FETCH_NEWSFEED", payload: data });
  } catch (error) {
    console.log(error);
  }
};
