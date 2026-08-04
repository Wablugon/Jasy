const state = {
  currentView: "home",

  currentUser: null,

  currentTrack: null,

  queue: [],
};

export function getState() {
  return state;
}

export function setState(values) {
  Object.assign(state, values);
}
