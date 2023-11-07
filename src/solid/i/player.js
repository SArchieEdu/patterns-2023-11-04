class Player {
  play() {}

  pause() {}

  init() {}
}

class ShakaPlayer extends Player {
  changeAudio() {}
}

class TouchShakaPlayer extends ShakaPlayer {
  recognize() {}
}

const player = new Player();

interface Film {
  __typename: "Film";
  //..
}

interface Episode {
  __typename: "Episode";
  //..
}
