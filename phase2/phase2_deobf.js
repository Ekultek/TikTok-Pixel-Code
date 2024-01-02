window[window["TiktokAnalyticsObject"]]._env = {
  "env" : "external",
  "key" : ""
};
/** @type {string} */
window[window["TiktokAnalyticsObject"]]._variation_id = "test_3";
/** @type {string} */
window[window["TiktokAnalyticsObject"]]._cc = "US";
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) {
  /** @type {string} */
  window[window["TiktokAnalyticsObject"]]._server_unique_id = "53a5a2d1-a8c0-11ee-bdf7-b8cef6a2a368";
}
window[window["TiktokAnalyticsObject"]]._plugins = {
  "AdvancedMatching" : true,
  "AutoAdvancedMatching" : true,
  "AutoConfig" : true,
  "Callback" : true,
  "DiagnosticsConsole" : true,
  "Identify" : true,
  "Monitor" : false,
  "PangleCookieMatching" : true,
  "PerformanceInteraction" : false,
  "Shopify" : true,
  "WebFL" : false
};
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph" : ["audience"],
  "microdata" : ["audience"],
  "json_ld" : ["audience"],
  "meta" : null
};
!function() {
  /**
   * @return {?}
   */
  function fun() {
    return window && window.TiktokAnalyticsObject || "ttq";
  }
  /**
   * @return {?}
   */
  function traverseNode() {
    return window && window[fun()];
  }
  var sel;
  var matches;
  var contents;
  var s;
  var node;
  /** @type {Array} */
  var item = [{
    id : "MWNkZmM2YTcxMA",
    map : {
      AutoAdvancedMatching : false,
      Shopify : false,
      Monitor : false,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxMQ",
    map : {
      AutoAdvancedMatching : true,
      Shopify : false,
      Monitor : false,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxMg",
    map : {
      AutoAdvancedMatching : false,
      Shopify : true,
      Monitor : false,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxMw",
    map : {
      AutoAdvancedMatching : true,
      Shopify : true,
      Monitor : false,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxNA",
    map : {
      AutoAdvancedMatching : false,
      Shopify : false,
      Monitor : true,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxNQ",
    map : {
      AutoAdvancedMatching : true,
      Shopify : false,
      Monitor : true,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxNg",
    map : {
      AutoAdvancedMatching : false,
      Shopify : true,
      Monitor : true,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxNw",
    map : {
      AutoAdvancedMatching : true,
      Shopify : true,
      Monitor : true,
      CompetitorInsight : false
    }
  }, {
    id : "MWNkZmM2YTcxOA",
    map : {
      AutoAdvancedMatching : false,
      Shopify : false,
      Monitor : false,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxOQ",
    map : {
      AutoAdvancedMatching : true,
      Shopify : false,
      Monitor : false,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxMTA",
    map : {
      AutoAdvancedMatching : false,
      Shopify : true,
      Monitor : false,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxMTE",
    map : {
      AutoAdvancedMatching : true,
      Shopify : true,
      Monitor : false,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxMTI",
    map : {
      AutoAdvancedMatching : false,
      Shopify : false,
      Monitor : true,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxMTM",
    map : {
      AutoAdvancedMatching : true,
      Shopify : false,
      Monitor : true,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxMTQ",
    map : {
      AutoAdvancedMatching : false,
      Shopify : true,
      Monitor : true,
      CompetitorInsight : true
    }
  }, {
    id : "MWNkZmM2YTcxMTU",
    map : {
      AutoAdvancedMatching : true,
      Shopify : true,
      Monitor : true,
      CompetitorInsight : true
    }
  }];
  var data = {
    "info" : {
      "pixelCode" : "",
      "name" : "",
      "status" : 1,
      "setupMode" : 0,
      "partner" : "",
      "advertiserID" : "0",
      "is_onsite" : false,
      "firstPartyCookieEnabled" : false
    },
    "plugins" : {
      "Shopify" : false,
      "AdvancedMatching" : {
        "email" : false,
        "phone_number" : false
      },
      "AutoAdvancedMatching" : null,
      "Callback" : true,
      "Identify" : true,
      "Monitor" : true,
      "PerformanceInteraction" : true,
      "WebFL" : true,
      "AutoConfig" : {
        "form_rules" : null,
        "vc_rules" : null
      },
      "DiagnosticsConsole" : true,
      "PangleCookieMatching" : false,
      "CompetitorInsight" : true
    },
    "rules" : null
  };
  /** @type {string} */
  var expectationResult = "https://analytics.tiktok.com/i18n/pixel/static/";
  var $ = traverseNode();
  if (!$) {
    /** @type {Array} */
    $ = [];
    if (window) {
      /** @type {Array} */
      window[fun()] = $;
    }
  }
  Object.assign(data, {
    options : (sel = data.info.pixelCode, (matches = traverseNode()._o) && matches[sel] || {})
  });
  (function(data) {
    if (!$._i) {
      $._i = {};
    }
    /** @type {string} */
    var property = data.info.pixelCode;
    if (property) {
      if (!$._i[property]) {
        /** @type {Array} */
        $._i[property] = [];
      }
      Object.assign($._i[property], data);
      /** @type {number} */
      $._i[property]._load = +new Date;
    }
  })(data);
  contents = function(dataAndEvents, token, result) {
    var old = 0 < arguments.length && void 0 !== dataAndEvents ? dataAndEvents : {};
    /** @type {(undefined|{AdvancedMatching: {email: boolean, phone_number: boolean}, AutoAdvancedMatching: null, AutoConfig: {form_rules: null, vc_rules: null}, Callback: boolean, CompetitorInsight: boolean, DiagnosticsConsole: boolean, Identify: boolean, Monitor: boolean, PangleCookieMatching: boolean, PerformanceInteraction: boolean, Shopify: boolean, WebFL: boolean})} */
    var guaranteedUnique = 1 < arguments.length ? token : void 0;
    /** @type {(string|undefined)} */
    token = 2 < arguments.length ? result : void 0;
    result = function(arr2, f) {
      /** @type {number} */
      var i = 0;
      for (;i < arr2.length;i++) {
        if (f.call(null, arr2[i], i)) {
          return arr2[i];
        }
      }
    }(item, function(mod) {
      var map = mod.map;
      return function(arr2, f) {
        /** @type {number} */
        var i = 0;
        for (;i < arr2.length;i++) {
          if (!f.call(null, arr2[i], i)) {
            return false;
          }
        }
        return true;
      }(Object.keys(map), function(name) {
        return!(!old[name] || !guaranteedUnique[name]) === map[name];
      });
    });
    return result ? token + "main.".concat(result.id, ".js") : token + "main.".concat(item[0].id, ".js");
  }($._plugins, data.plugins, expectationResult);
  /** @type {string} */
  s = data.info.pixelCode;
  if (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) {
    if (self.importScripts) {
      self.importScripts(contents);
    }
  } else {
    /** @type {string} */
    (node = document.createElement("script")).type = "text/javascript";
    /** @type {boolean} */
    node.async = true;
    node.src = contents;
    node.setAttribute("data-id", s);
    if (s = document.getElementsByTagName("script")[0]) {
      if (s.parentNode) {
        s.parentNode.insertBefore(node, s);
      }
    }
  }
}();
