class Builder {}

const config = {
  source: {
    //.. stream, audio
  },
  telemetria: {
    //.. health check
  },
  tracking: {
    // product events
  },
  useSettings: {
    // language, preferredAudio
  },
};

const PlayerConfigBuilder = {
  source,
  telemetria,

  addSource(streams, audioTracks) {
    this.source = {
      streams,
      audioTracks,
    };
  },

  addTelemtria() {},

  getConfig() {
    return {
      source: {
        //.. stream, audio
      },
      telemetria: {
        //.. health check
      },
      tracking: {
        // product events
      },
      useSettings: {
        // language, preferredAudio
      },
    };
  },
};
