export const ShakaPlayer: Player = {
  playingState: "play",
  play() {},
  pause() {},
};

const YandexPlayer = {
  playingState: "playing",
  togglePlay() {},
};

interface Player {
  playingState: "play" | "pause";
  play();
  pause();
}

function initPlayer(player: Player) {
  player.play();
}

class YandexPlayerAdapter implements Player {
  instance: typeof YandexPlayer;
  constructor(instance) {
    this.instance = instance;
  }

  get playingState() {
    return this.instance.playingState === "playing" ? "play" : "pause";
  }

  play() {
    if (this.instance.playingState === "pause") {
      this.instance.togglePlay();
    }
  }
  pause() {
    if (this.instance.playingState === "playing") {
      this.instance.togglePlay();
    }
  }
}

const YandexPLayerAdapter: Player & { instance: typeof YandexPlayer } = {
  instance: YandexPlayer,

  get playingState() {
    return this.instance.playingState === "playing" ? "play" : "pause";
  },

  play() {
    if (this.instance.playingState === "pause") {
      this.instance.togglePlay();
    }
  },
  pause() {
    if (this.instance.playingState === "playing") {
      this.instance.togglePlay();
    }
  },
};

initPlayer(ShakaPlayer);
initPlayer(YandexPLayerAdapter);
