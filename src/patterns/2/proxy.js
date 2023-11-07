const UserService = {
  getUser() {},

  getWatchSettings() {},
};

const CachedUserService = {
  service: UserService,
  currentUser,
  watchSettings,

  getUser() {
    if (!this.currentUser) {
      this.currentUser = this.service.getUser();
    }

    return this.currentUser;
  },

  getWatchSettings() {
    if (!this.watchSettings) {
      this.watchSettings = this.service.getWatchSettings();
    }

    return this.watchSettings;
  },
};
