const Mediator = {
  dispatch(action) {
    if (action) {
      this.notifyAll(action);
    }
  },

  notifyAll() {},

  subscribers: new Set(),

  subscribe(callback) {
    this.subscribers.add(callback);
  },

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  },
};
