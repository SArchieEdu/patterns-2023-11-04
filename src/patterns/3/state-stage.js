// stage

const PlayingStage = {
  play() {
    return this;
  },

  pause() {
    // pause
    return PauseStage;
  },

  skip() {
    // skip
    return BufferingStage;
  },
};

const PauseStage = {
  play() {
    // play
    return PlayingStage;
  },

  pause() {},

  skip() {
    // skip
    return BufferingStage;
  },
};

const BufferingStage = {
  play() {},

  pause() {},

  skip() {},
};

const Player = {
  currentStage: PauseStage,

  play() {
    this.currentStage = this.currentStage.play();
  },

  pause() {
    this.currentStage = this.currentStage.pause();
  },

  skip() {
    this.currentStage = this.currentStage.skip();
  },
};
