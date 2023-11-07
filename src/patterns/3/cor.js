export const Part = {
  next,
  setNext(nextPart) {
    this.next = nextPart;
  },

  handle() {
    if (isAuthorized) {
      this.next?.handle();
    }

    console.error("Not authorized");
  },
};
export const Part2 = {
  next,
  setNext(nextPart) {
    this.next = nextPart;

    return this.next;
  },

  handle() {
    console.log("");
    this.next?.handle();
  },
};
export const Part3 = {
  next,
  setNext(nextPart) {
    this.next = nextPart;
  },

  handle() {
    if (hasSubscription) {
      this.next?.handle();
    }
  },
};

Part.setNext(Part2).setNext(Part3);

Part.handle();
