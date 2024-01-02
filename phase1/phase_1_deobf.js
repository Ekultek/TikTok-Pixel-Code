!function($, d, data) {
  /** @type {string} */
  $.TiktokAnalyticsObject = data;
  var self = $[data] = $[data] || [];
  /** @type {Array} */
  self.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
  /**
   * @param {Array} object
   * @param {number} flag
   * @return {undefined}
   */
  self.setAndDefer = function(object, flag) {
    /**
     * @return {undefined}
     */
    object[flag] = function() {
      object.push([flag].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  /** @type {number} */
  var i = 0;
  for (;i < self.methods.length;i++) {
    self.setAndDefer(self, self.methods[i]);
  }
  /**
   * @param {?} timeoutKey
   * @return {?}
   */
  self.instance = function(timeoutKey) {
    var which = self._i[timeoutKey] || [];
    /** @type {number} */
    var i = 0;
    for (;i < self.methods.length;i++) {
      self.setAndDefer(which, self.methods[i]);
    }
    return which;
  };
  /**
   * @param {string} name
   * @param {Object} callback
   * @return {undefined}
   */
  self.load = function(name, callback) {
    /** @type {string} */
    var ns = "https://analytics.tiktok.com/i18n/pixel/events.js";
    self._i = self._i || {};
    /** @type {Array} */
    self._i[name] = [];
    /** @type {string} */
    self._i[name]._u = ns;
    self._t = self._t || {};
    /** @type {number} */
    self._t[name] = +new Date;
    self._o = self._o || {};
    self._o[name] = callback || {};
    /** @type {Element} */
    var node = document.createElement("script");
    /** @type {string} */
    node.type = "text/javascript";
    /** @type {boolean} */
    node.async = true;
    /** @type {string} */
    node.src = ns + "?sdkid=" + name + "&lib=" + data;
    var insertAt = document.getElementsByTagName("script")[0];
    insertAt.parentNode.insertBefore(node, insertAt);
  };
  self.load("CM9E6DRC77UCL6FREGR0");
  self.page();
}(window, document, "ttq");
