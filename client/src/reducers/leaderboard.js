export default (leaderboard = [], action) => {
    switch (action.type) {
      case "FETCH_LEADERBOARD":
        console.log(action.payload);
        return action.payload;
      default:
        return leaderboard;
    }
  };
  