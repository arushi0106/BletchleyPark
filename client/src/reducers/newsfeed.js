export default (newsfeed = [], action) => {
  switch (action.type) {
    case "FETCH_NEWSFEED":
      // console.log(action.payload);
      return action.payload;
    default:
      return newsfeed;
  }
};
