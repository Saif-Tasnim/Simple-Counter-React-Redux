export const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("Current State : ", currentState);
  next(action)
};
