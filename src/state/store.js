class Store {
  constructor() {
    this.state = {
      user: null,
      searchQuery: "",
      currentTrack: null,
      currentView: "home",
    };

    this.listeners = [];
  }
  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}
export const store = new Store();
