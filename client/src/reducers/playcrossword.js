export default (crossword = [], action) => {
    switch (action.type) {
      case "FETCH_CROSSWORD":
        console.log(action.payload);
        return action.payload;
      default:
        return crossword;
    }
  };
  