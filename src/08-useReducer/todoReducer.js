export const todoReducer = (initialState = [], action) => {
  switch (action.key) {
    case "ABC":
      throw new Error("Action.type = ABC is not working yet");

    default:
      return initialState;
  }
};
