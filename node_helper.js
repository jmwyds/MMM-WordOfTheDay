/*
 * MagicMirror²
 * Node Helper: MMM-WordOfTheDay
 *
 * By jmwyds
 * MIT Licensed.
 */

const Log = require("logger");
const NodeHelper = require("node_helper");
const Parser = require("rss-parser");

module.exports = NodeHelper.create({

  // Override socketNotificationReceived method.

  /*
   * socketNotificationReceived(notification, payload)
   * This method is called when a socket notification arrives.
   *
   * argument notification string - The identifier of the noitication.
   * argument payload mixed - The payload of the notification.
   */
  async socketNotificationReceived (notification) {
    const self = this;
    if (notification === "MMM-WordOfTheDay-DATA_CHANGE") {
      const urlApi = "https://www.merriam-webster.com/wotd/feed/rss2";

      try {
        const parser = new Parser();
        const feed = await parser.parseURL(urlApi);
        const firstItem = feed.items[0];
        Log.debug(`### item: ${firstItem.title}:${firstItem.link}`);
        self.sendNotificationUpdate(firstItem);
      } catch (error) {
        Log.error(error);
      }
    }
  },

  sendNotificationUpdate (payload) {
    this.sendSocketNotification("MMM-WordOfTheDay-DATA_CHANGE", payload);
  }
});
