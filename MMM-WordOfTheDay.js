Module.register("MMM-WordOfTheDay", {
  defaults: {
    headerText: "Word of the day",
    updateInterval: 10 * 60 * 1000
  },

  requiresVersion: "2.1.0",

  start () {
    this.update(this);
    this.scheduleUpdate(-1);
  },

  getStyles () {
    return [this.file("style.css")];
  },

  update (self) {
    self.sendSocketNotification("MMM-WordOfTheDay-DATA_CHANGE", null);
    self.updateDom();
  },

  scheduleUpdate (delay) {
    let nextLoad = this.config.updateInterval;
    if (delay !== undefined && delay >= 0) {
      nextLoad = delay;
    }
    const self = this;
    setInterval(() => {
      self.update(self);
    }, nextLoad);
  },

  socketNotificationReceived (notification, payload) {
    const self = this;
    if (notification === "MMM-WordOfTheDay-DATA_CHANGE") {
      this.dataNotification = payload;
      self.updateDom(self.config.animationSpeed);
    }
  },

  getDom () {
    const wrapper = document.createElement("div");

    // Header
    const headerLabel = document.createElement("header");
    headerLabel.setAttribute("class", "wotd-header module-header");
    headerLabel.innerHTML = `<span>${this.config.headerText}</span>`;
    wrapper.append(headerLabel);

    if (this.dataNotification !== undefined) {
      const summary = this.dataNotification.itunes.summary.replace("\n", "<br>");

      // Word
      const word = this.dataNotification.title;
      const wordDiv = document.createElement("div");
      wordDiv.setAttribute("class", "wotd-title");
      wordDiv.innerHTML = word;
      wrapper.append(wordDiv);

      // Type
      let typeString = summary.split(": ")[1];
      typeString = typeString.split("<br>")[0];
      const typeSpan = document.createElement("span");
      typeSpan.setAttribute("class", "wotd-type");
      typeSpan.innerHTML = typeString;
      wrapper.append(typeSpan);

      // Definition
      const definition = this.dataNotification.itunes.summary.split("\n")[1];
      const definitionSpan = document.createElement("span");
      definitionSpan.innerHTML = definition;
      definitionSpan.setAttribute("class", "wotd-summary");
      wrapper.append(definitionSpan);

      // Example
      let exampleString = summary.split("Examples:")[1];
      exampleString = exampleString.split("Did you know")[0].replace("<br>", "");
      const exampleSpan = document.createElement("span");
      if (exampleSpan !== "") {
        exampleString = `Example: ${exampleString}`;
        exampleSpan.innerHTML = exampleString;
      }
      exampleSpan.setAttribute("class", "wotd-examples");
      wrapper.append(exampleSpan);

      Log.debug("### this.dataNotification:");
      Log.debug(this.dataNotification);
      Log.debug(`### summary: ${summary}`);
      Log.debug(`### word: ${word}`);
      Log.debug(`### definition: ${definition}`);
      Log.debug(`### typeString: ${typeString}`);
    }

    return wrapper;
  }
});
