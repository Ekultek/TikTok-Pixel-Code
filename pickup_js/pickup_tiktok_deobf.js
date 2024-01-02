/**
 * @license React v16.12.0
 react.production.min.js

 Copyright (c) Facebook, Inc. and its affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 React v16.12.0
 react-dom.production.min.js

 Copyright (c) Facebook, Inc. and its affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 React v0.18.0
 scheduler.production.min.js

 Copyright (c) Facebook, Inc. and its affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 React v16.13.1
 react-is.production.min.js

 Copyright (c) Facebook, Inc. and its affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 */
!function(v) {
  /**
   * @param {number} i
   * @return {?}
   */
  function m(i) {
    if (c[i]) {
      return c[i].exports;
    }
    var s = c[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return v[i].call(s.exports, s, s.exports, m), s.l = true, s.exports;
  }
  var c = {};
  /** @type {Array} */
  m.m = v;
  m.c = c;
  /**
   * @param {Function} ctx
   * @param {string} d
   * @param {Function} f
   * @return {undefined}
   */
  m.d = function(ctx, d, f) {
    if (!m.o(ctx, d)) {
      Object.defineProperty(ctx, d, {
        enumerable : true,
        /** @type {Function} */
        get : f
      });
    }
  };
  /**
   * @param {?} context
   * @return {undefined}
   */
  m.r = function(context) {
    if ("undefined" != typeof Symbol) {
      if (Symbol.toStringTag) {
        Object.defineProperty(context, Symbol.toStringTag, {
          value : "Module"
        });
      }
    }
    Object.defineProperty(context, "__esModule", {
      value : true
    });
  };
  /**
   * @param {Object} v
   * @param {number} b
   * @return {?}
   */
  m.t = function(v, b) {
    if (1 & b && (v = m(v)), 8 & b) {
      return v;
    }
    if (4 & b && ("object" == typeof v && (v && v.__esModule))) {
      return v;
    }
    /** @type {Object} */
    var ctx = Object.create(null);
    if (m.r(ctx), Object.defineProperty(ctx, "default", {
      enumerable : true,
      value : v
    }), 2 & b && "string" != typeof v) {
      var d;
      for (d in v) {
        m.d(ctx, d, function(k2) {
          return v[k2];
        }.bind(null, d));
      }
    }
    return ctx;
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  m.n = function(obj) {
    /** @type {function (): ?} */
    var y = obj && obj.__esModule ? function() {
      return obj.default;
    } : function() {
      return obj;
    };
    return m.d(y, "a", y), y;
  };
  /**
   * @param {Function} action
   * @param {string} a
   * @return {?}
   */
  m.o = function(action, a) {
    return Object.prototype.hasOwnProperty.call(action, a);
  };
  /** @type {string} */
  m.p = "/";
  m(m.s = 34);
}([function(module, dataAndEvents, factory) {
  module.exports = factory(20);
}, function(dataAndEvents, env, v) {
  /**
   * @param {Object} obj
   * @param {?} key
   * @param {string} value
   * @return {?}
   */
  function add(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  v.d(env, "a", function() {
    return add;
  });
}, function(dataAndEvents, env, v) {
  /**
   * @param {Array} args
   * @param {Object} count
   * @return {?}
   */
  function fn(args, count) {
    if (null == count || count > args.length) {
      count = args.length;
    }
    /** @type {number} */
    var i = 0;
    /** @type {Array} */
    var a = new Array(count);
    for (;i < count;i++) {
      a[i] = args[i];
    }
    return a;
  }
  /**
   * @param {Object} expr
   * @param {number} inplace
   * @return {?}
   */
  function filter(expr, inplace) {
    return function(item) {
      if (Array.isArray(item)) {
        return item;
      }
    }(expr) || (function(object, inplace) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(object)) {
        /** @type {Array} */
        var matched = [];
        /** @type {boolean} */
        var callback2 = true;
        /** @type {boolean} */
        var i = false;
        var bulk = void 0;
        try {
          var rule;
          var self = object[Symbol.iterator]();
          for (;!(callback2 = (rule = self.next()).done) && (matched.push(rule.value), !inplace || matched.length !== inplace);callback2 = true) {
          }
        } catch (fn) {
          /** @type {boolean} */
          i = true;
          bulk = fn;
        } finally {
          try {
            if (!callback2) {
              if (!(null == self.return)) {
                self.return();
              }
            }
          } finally {
            if (i) {
              throw bulk;
            }
          }
        }
        return matched;
      }
    }(expr, inplace) || (function(arg, data) {
      if (arg) {
        if ("string" == typeof arg) {
          return fn(arg, data);
        }
        /** @type {string} */
        var id = Object.prototype.toString.call(arg).slice(8, -1);
        return "Object" === id && (arg.constructor && (id = arg.constructor.name)), "Map" === id || "Set" === id ? Array.from(id) : "Arguments" === id || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(id) ? fn(arg, data) : void 0;
      }
    }(expr, inplace) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }()));
  }
  v.d(env, "a", function() {
    return filter;
  });
}, function(dataAndEvents, env, v) {
  v.d(env, "a", function() {
    return r;
  });
  var r = function(D) {
    return D.BASE = "BASE", D.BigCommerce = "BigCommerce", D.Cafe24 = "Cafe24", D.ECWID = "ECWID", D.GTM = "GTM", D.Kyte = "Kyte", D.OpenCart = "OpenCart", D.PrestaShop = "PrestaShop", D.SHOPLINE = "SHOPLINE", D.Segment = "Segment", D.Shopify = "Shopify", D.Square = "Square", D.Tealium = "Tealium", D.Tray = "Tray", D.UNDEFINE = "UNDEFINE", D.VTEX = "VTEX", D.WooCommerce = "WooCommerce", D.lojaintegrada = "lojaintegrada", D;
  }({});
}, function(dataAndEvents, element, deepDataAndEvents) {
  /**
   * @param {boolean} now
   * @return {?}
   */
  function fn(now) {
    return(fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(actual) {
      return typeof actual;
    } : function(a) {
      return a && ("function" == typeof Symbol && (a.constructor === Symbol && a !== Symbol.prototype)) ? "symbol" : typeof a;
    })(now);
  }
  /**
   * @param {boolean} now
   * @return {?}
   */
  function create(now) {
    return(create = "function" == typeof Symbol && "symbol" === fn(Symbol.iterator) ? function(config) {
      return fn(config);
    } : function(value) {
      return value && ("function" == typeof Symbol && (value.constructor === Symbol && value !== Symbol.prototype)) ? "symbol" : fn(value);
    })(now);
  }
  /**
   * @param {Object} object
   * @param {?} name
   * @param {string} val
   * @return {?}
   */
  function define(object, name, val) {
    return name in object ? Object.defineProperty(object, name, {
      value : val,
      enumerable : true,
      configurable : true,
      writable : true
    }) : object[name] = val, object;
  }
  /**
   * @param {?} replacementHash
   * @return {?}
   */
  function extend(replacementHash) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var o = null != arguments[i] ? arguments[i] : {};
      /** @type {Array.<string>} */
      var l = Object.keys(Object(o));
      if ("function" == typeof Object.getOwnPropertySymbols) {
        /** @type {Array} */
        l = l.concat(Object.getOwnPropertySymbols(o).filter(function(uuid) {
          return Object.getOwnPropertyDescriptor(o, uuid).enumerable;
        }));
      }
      l.forEach(function(methodName) {
        define(replacementHash, methodName, o[methodName]);
      });
    }
    return replacementHash;
  }
  /**
   * @param {?} dataAndEvents
   * @param {Function} process
   * @return {undefined}
   */
  function each(dataAndEvents, process) {
    if (!(dataAndEvents instanceof process)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {Function} object
   * @param {Array} codeSegments
   * @return {undefined}
   */
  function defineProperty(object, codeSegments) {
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var desc = codeSegments[i];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(object, desc.key, desc);
    }
  }
  /**
   * @param {Function} process
   * @param {Array} opt_attributes
   * @param {(Array|string)} element
   * @return {?}
   */
  function check(process, opt_attributes, element) {
    return opt_attributes && defineProperty(process.prototype, opt_attributes), element && defineProperty(process, element), process;
  }
  /**
   * @param {number} elem
   * @return {?}
   */
  function get(elem) {
    if (void 0 === elem) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return elem;
  }
  /**
   * @param {number} obj
   * @param {boolean} b
   * @return {?}
   */
  function success(obj, b) {
    return!b || "object" !== create(b) && "function" != typeof b ? get(obj) : b;
  }
  /**
   * @param {Function} callback
   * @return {?}
   */
  function require(callback) {
    return(require = Object.setPrototypeOf ? Object.getPrototypeOf : function(obj) {
      return obj.__proto__ || Object.getPrototypeOf(obj);
    })(callback);
  }
  /**
   * @param {Function} func
   * @param {Function} methodName
   * @return {?}
   */
  function call(func, methodName) {
    return(call = Object.setPrototypeOf || function(object, callback) {
      return object.__proto__ = callback, object;
    })(func, methodName);
  }
  /**
   * @param {Function} method
   * @param {Object} object
   * @return {undefined}
   */
  function stub(method, object) {
    if ("function" != typeof object && null !== object) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {Object} */
    method.prototype = Object.create(object && object.prototype, {
      constructor : {
        /** @type {Function} */
        value : method,
        writable : true,
        configurable : true
      }
    });
    if (object) {
      call(method, object);
    }
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function merge(key) {
    return function(keys) {
      if (Array.isArray(keys)) {
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var result = new Array(keys.length);
        for (;i < keys.length;i++) {
          result[i] = keys[i];
        }
        return result;
      }
    }(key) || (function(array) {
      if (Symbol.iterator in Object(array) || "[object Arguments]" === Object.prototype.toString.call(array)) {
        return Array.from(array);
      }
    }(key) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }());
  }
  /**
   * @param {Object} uris
   * @param {number} opt_attributes
   * @return {?}
   */
  function all(uris, opt_attributes) {
    return function(uris) {
      if (Array.isArray(uris)) {
        return uris;
      }
    }(uris) || (function(arr, opt_attributes) {
      if (Symbol.iterator in Object(arr) || "[object Arguments]" === Object.prototype.toString.call(arr)) {
        /** @type {Array} */
        var matched = [];
        /** @type {boolean} */
        var callback2 = true;
        /** @type {boolean} */
        var i = false;
        var bulk = void 0;
        try {
          var rule;
          var self = arr[Symbol.iterator]();
          for (;!(callback2 = (rule = self.next()).done) && (matched.push(rule.value), !opt_attributes || matched.length !== opt_attributes);callback2 = true) {
          }
        } catch (fn) {
          /** @type {boolean} */
          i = true;
          bulk = fn;
        } finally {
          try {
            if (!callback2) {
              if (!(null == self.return)) {
                self.return();
              }
            }
          } finally {
            if (i) {
              throw bulk;
            }
          }
        }
        return matched;
      }
    }(uris, opt_attributes) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }());
  }
  /**
   * @return {?}
   */
  function Deferred() {
    var resolve;
    var reject;
    var promise = new Promise(function(res, rej) {
      resolve = res;
      reject = rej;
    });
    return promise.resolve = resolve, promise.reject = reject, promise;
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function trim(s) {
    return null == s ? "" : "" + s;
  }
  /**
   * @param {string} obj
   * @param {string} data
   * @param {Function} args
   * @return {?}
   */
  function trigger(obj, data, args) {
    /**
     * @param {string} selector
     * @return {?}
     */
    function next(selector) {
      return selector && selector.indexOf("###") > -1 ? selector.replace(/###/g, ".") : selector;
    }
    /**
     * @return {?}
     */
    function valid() {
      return!obj || "string" == typeof obj;
    }
    /** @type {Array} */
    var pathConfig = "string" != typeof data ? [].concat(data) : data.split(".");
    for (;pathConfig.length > 1;) {
      if (valid()) {
        return{};
      }
      var newNs = next(pathConfig.shift());
      if (!obj[newNs]) {
        if (args) {
          obj[newNs] = new args;
        }
      }
      obj = obj[newNs];
    }
    return valid() ? {} : {
      obj : obj,
      k : next(pathConfig.shift())
    };
  }
  /**
   * @param {string} el
   * @param {(Array|string)} data
   * @param {(Object|string)} b
   * @return {undefined}
   */
  function func(el, data, b) {
    var item = trigger(el, data, Object);
    /** @type {(Object|string)} */
    item.obj[item.k] = b;
  }
  /**
   * @param {string} self
   * @param {?} data
   * @return {?}
   */
  function callback(self, data) {
    var result = trigger(self, data);
    var members = result.obj;
    var k = result.k;
    if (members) {
      return members[k];
    }
  }
  /**
   * @param {string} e
   * @param {string} object
   * @param {?} data
   * @return {?}
   */
  function done(e, object, data) {
    var value = callback(e, data);
    return void 0 !== value ? value : callback(object, data);
  }
  /**
   * @param {Object} target
   * @param {Object} source
   * @param {?} force
   * @return {?}
   */
  function mixin(target, source, force) {
    var prop;
    for (prop in source) {
      if (prop in target) {
        if ("string" == typeof target[prop] || (target[prop] instanceof String || ("string" == typeof source[prop] || source[prop] instanceof String))) {
          if (force) {
            target[prop] = source[prop];
          }
        } else {
          mixin(target[prop], source[prop], force);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  /**
   * @param {string} sel
   * @return {?}
   */
  function $(sel) {
    return sel.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function escape(value) {
    return "string" == typeof value ? value.replace(/[&<>"'\/]/g, function(off) {
      return buf[off];
    }) : value;
  }
  /**
   * @param {string} seed
   * @return {?}
   */
  function find(seed) {
    return seed.charAt(0).toUpperCase() + seed.slice(1);
  }
  /**
   * @return {?}
   */
  function init() {
    return{
      debug : false,
      initImmediate : true,
      ns : ["translation"],
      defaultNS : ["translation"],
      fallbackLng : ["dev"],
      fallbackNS : false,
      whitelist : false,
      nonExplicitWhitelist : false,
      load : "all",
      preload : false,
      simplifyPluralSuffix : true,
      keySeparator : ".",
      nsSeparator : ":",
      pluralSeparator : "_",
      contextSeparator : "_",
      partialBundledLanguages : false,
      saveMissing : false,
      updateMissing : false,
      saveMissingTo : "fallback",
      saveMissingPlurals : true,
      missingKeyHandler : false,
      missingInterpolationHandler : false,
      postProcess : false,
      postProcessPassResolved : false,
      returnNull : true,
      returnEmptyString : true,
      returnObjects : false,
      joinArrays : false,
      returnedObjectHandler : false,
      parseMissingKeyHandler : false,
      appendNamespaceToMissingKey : false,
      appendNamespaceToCIMode : false,
      /**
       * @param {Array} arr
       * @return {?}
       */
      overloadTranslationOptionHandler : function(arr) {
        var internalValues = {};
        if ("object" === create(arr[1]) && (internalValues = arr[1]), "string" == typeof arr[1] && (internalValues.defaultValue = arr[1]), "string" == typeof arr[2] && (internalValues.tDescription = arr[2]), "object" === create(arr[2]) || "object" === create(arr[3])) {
          var defaults = arr[3] || arr[2];
          Object.keys(defaults).forEach(function(key) {
            internalValues[key] = defaults[key];
          });
        }
        return internalValues;
      },
      interpolation : {
        escapeValue : true,
        /**
         * @param {?} node
         * @param {?} var_args
         * @param {?} opt_attributes
         * @return {?}
         */
        format : function(node, var_args, opt_attributes) {
          return node;
        },
        prefix : "{{",
        suffix : "}}",
        formatSeparator : ",",
        unescapePrefix : "-",
        nestingPrefix : "$t(",
        nestingSuffix : ")",
        maxReplaces : 1E3
      }
    };
  }
  /**
   * @param {Object} o
   * @return {?}
   */
  function match(o) {
    return "string" == typeof o.ns && (o.ns = [o.ns]), "string" == typeof o.fallbackLng && (o.fallbackLng = [o.fallbackLng]), "string" == typeof o.fallbackNS && (o.fallbackNS = [o.fallbackNS]), o.whitelist && (o.whitelist.indexOf("cimode") < 0 && (o.whitelist = o.whitelist.concat(["cimode"]))), o;
  }
  /**
   * @return {undefined}
   */
  function doc() {
  }
  var log = {
    type : "logger",
    /**
     * @param {string} type
     * @return {undefined}
     */
    log : function(type) {
      this.output("log", type);
    },
    /**
     * @param {string} type
     * @return {undefined}
     */
    warn : function(type) {
      this.output("warn", type);
    },
    /**
     * @param {string} type
     * @return {undefined}
     */
    error : function(type) {
      this.output("error", type);
    },
    /**
     * @param {string} type
     * @param {string} data
     * @return {undefined}
     */
    output : function(type, data) {
      var _base;
      if (console) {
        if (console[type]) {
          (_base = console)[type].apply(_base, merge(data));
        }
      }
    }
  };
  var b = new (function() {
    /**
     * @param {?} config
     * @return {undefined}
     */
    function process(config) {
      var identity = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      each(this, process);
      this.init(config, identity);
    }
    return check(process, [{
      key : "init",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.prefix = options.prefix || "i18next:";
        this.logger = expectedHashCode || log;
        this.options = options;
        this.debug = options.debug;
      }
    }, {
      key : "setDebug",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        /** @type {string} */
        this.debug = expectedHashCode;
      }
    }, {
      key : "log",
      /**
       * @return {?}
       */
      value : function() {
        /** @type {number} */
        var length = arguments.length;
        /** @type {Array} */
        var rv = new Array(length);
        /** @type {number} */
        var i = 0;
        for (;i < length;i++) {
          rv[i] = arguments[i];
        }
        return this.forward(rv, "log", "", true);
      }
    }, {
      key : "warn",
      /**
       * @return {?}
       */
      value : function() {
        /** @type {number} */
        var length = arguments.length;
        /** @type {Array} */
        var rv = new Array(length);
        /** @type {number} */
        var i = 0;
        for (;i < length;i++) {
          rv[i] = arguments[i];
        }
        return this.forward(rv, "warn", "", true);
      }
    }, {
      key : "error",
      /**
       * @return {?}
       */
      value : function() {
        /** @type {number} */
        var length = arguments.length;
        /** @type {Array} */
        var rv = new Array(length);
        /** @type {number} */
        var i = 0;
        for (;i < length;i++) {
          rv[i] = arguments[i];
        }
        return this.forward(rv, "error", "");
      }
    }, {
      key : "deprecate",
      /**
       * @return {?}
       */
      value : function() {
        /** @type {number} */
        var length = arguments.length;
        /** @type {Array} */
        var rv = new Array(length);
        /** @type {number} */
        var i = 0;
        for (;i < length;i++) {
          rv[i] = arguments[i];
        }
        return this.forward(rv, "warn", "WARNING DEPRECATED: ", true);
      }
    }, {
      key : "forward",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {Object} value
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes, value) {
        return value && !this.debug ? null : ("string" == typeof expectedHashCode[0] && (expectedHashCode[0] = "".concat(opt_attributes).concat(this.prefix, " ").concat(expectedHashCode[0])), this.logger[num](expectedHashCode));
      }
    }, {
      key : "create",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        return new process(this.logger, extend({}, {
          prefix : "".concat(this.prefix, ":").concat(expectedHashCode, ":")
        }, this.options));
      }
    }]), process;
  }());
  var p = function() {
    /**
     * @return {undefined}
     */
    function process() {
      each(this, process);
      this.observers = {};
    }
    return check(process, [{
      key : "on",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var list = this;
        return expectedHashCode.split(" ").forEach(function(name) {
          list.observers[name] = list.observers[name] || [];
          list.observers[name].push(num);
        }), this;
      }
    }, {
      key : "off",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {undefined}
       */
      value : function(expectedHashCode, num) {
        if (this.observers[expectedHashCode]) {
          if (num) {
            this.observers[expectedHashCode] = this.observers[expectedHashCode].filter(function(x) {
              return x !== num;
            });
          } else {
            delete this.observers[expectedHashCode];
          }
        }
      }
    }, {
      key : "emit",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        /** @type {number} */
        var len = arguments.length;
        /** @type {Array} */
        var args = new Array(len > 1 ? len - 1 : 0);
        /** @type {number} */
        var i = 1;
        for (;i < len;i++) {
          args[i - 1] = arguments[i];
        }
        if (this.observers[expectedHashCode]) {
          /** @type {Array} */
          var asserterNames = [].concat(this.observers[expectedHashCode]);
          asserterNames.forEach(function(wrapper) {
            wrapper.apply(void 0, args);
          });
        }
        if (this.observers["*"]) {
          /** @type {Array} */
          var failures = [].concat(this.observers["*"]);
          failures.forEach(function(__method) {
            __method.apply(__method, [expectedHashCode].concat(args));
          });
        }
      }
    }]), process;
  }();
  var buf = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&#39;",
    "/" : "&#x2F;"
  };
  var store = function(prop) {
    /**
     * @param {Object} data
     * @return {?}
     */
    function process(data) {
      var elem;
      var value = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        ns : ["translation"],
        defaultNS : "translation"
      };
      return each(this, process), elem = success(this, require(process).call(this)), p.call(get(elem)), elem.data = data || {}, elem.options = value, void 0 === elem.options.keySeparator && (elem.options.keySeparator = "."), elem;
    }
    return stub(process, prop), check(process, [{
      key : "addNamespaces",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        if (this.options.ns.indexOf(expectedHashCode) < 0) {
          this.options.ns.push(expectedHashCode);
        }
      }
    }, {
      key : "removeNamespaces",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        var fromIndex = this.options.ns.indexOf(expectedHashCode);
        if (fromIndex > -1) {
          this.options.ns.splice(fromIndex, 1);
        }
      }
    }, {
      key : "getResource",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var keySeparator = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        var tag = void 0 !== keySeparator.keySeparator ? keySeparator.keySeparator : this.options.keySeparator;
        /** @type {Array} */
        var string = [expectedHashCode, num];
        return opt_attributes && ("string" != typeof opt_attributes && (string = string.concat(opt_attributes))), opt_attributes && ("string" == typeof opt_attributes && (string = string.concat(tag ? opt_attributes.split(tag) : opt_attributes))), expectedHashCode.indexOf(".") > -1 && (string = expectedHashCode.split(".")), callback(this.data, string);
      }
    }, {
      key : "addResource",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {(Object|string)} value
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes, value) {
        var options = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
          silent : false
        };
        var split = this.options.keySeparator;
        if (void 0 === split) {
          /** @type {string} */
          split = ".";
        }
        /** @type {Array} */
        var args = [expectedHashCode, num];
        if (opt_attributes) {
          /** @type {Array} */
          args = args.concat(split ? opt_attributes.split(split) : opt_attributes);
        }
        if (expectedHashCode.indexOf(".") > -1) {
          value = num;
          num = (args = expectedHashCode.split("."))[1];
        }
        this.addNamespaces(num);
        func(this.data, args, value);
        if (!options.silent) {
          this.emit("added", expectedHashCode, num, opt_attributes, value);
        }
      }
    }, {
      key : "addResources",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
          silent : false
        };
        var callbackName;
        for (callbackName in opt_attributes) {
          if (!("string" != typeof opt_attributes[callbackName] && "[object Array]" !== Object.prototype.toString.apply(opt_attributes[callbackName]))) {
            this.addResource(expectedHashCode, num, callbackName, opt_attributes[callbackName], {
              silent : true
            });
          }
        }
        if (!options.silent) {
          this.emit("added", expectedHashCode, num, opt_attributes);
        }
      }
    }, {
      key : "addResourceBundle",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {Object} value
       * @param {?} force
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes, value, force) {
        var options = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
          silent : false
        };
        /** @type {Array} */
        var msgs = [expectedHashCode, num];
        if (expectedHashCode.indexOf(".") > -1) {
          value = opt_attributes;
          opt_attributes = num;
          num = (msgs = expectedHashCode.split("."))[1];
        }
        this.addNamespaces(num);
        var params = callback(this.data, msgs) || {};
        if (value) {
          mixin(params, opt_attributes, force);
        } else {
          params = extend({}, params, opt_attributes);
        }
        func(this.data, msgs, params);
        if (!options.silent) {
          this.emit("added", expectedHashCode, num, opt_attributes);
        }
      }
    }, {
      key : "removeResourceBundle",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {undefined}
       */
      value : function(expectedHashCode, num) {
        if (this.hasResourceBundle(expectedHashCode, num)) {
          delete this.data[expectedHashCode][num];
        }
        this.removeNamespaces(num);
        this.emit("removed", expectedHashCode, num);
      }
    }, {
      key : "hasResourceBundle",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        return void 0 !== this.getResource(expectedHashCode, num);
      }
    }, {
      key : "getResourceBundle",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        return num || (num = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? extend({}, {}, this.getResource(expectedHashCode, num)) : this.getResource(expectedHashCode, num);
      }
    }, {
      key : "getDataByLanguage",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        return this.data[expectedHashCode];
      }
    }, {
      key : "toJSON",
      /**
       * @return {?}
       */
      value : function() {
        return this.data;
      }
    }]), process;
  }(p);
  var self = {
    processors : {},
    /**
     * @param {Function} fc
     * @return {undefined}
     */
    addPostProcessor : function(fc) {
      /** @type {Function} */
      this.processors[fc.name] = fc;
    },
    /**
     * @param {Array} target
     * @param {(Element|string)} node
     * @param {?} ctx
     * @param {?} tag
     * @param {?} tween
     * @return {?}
     */
    handle : function(target, node, ctx, tag, tween) {
      var env = this;
      return target.forEach(function(i) {
        if (env.processors[i]) {
          node = env.processors[i].process(node, ctx, tag, tween);
        }
      }), node;
    }
  };
  var Buffer = function(prop) {
    /**
     * @param {(number|string)} command
     * @return {?}
     */
    function process(command) {
      var elem;
      var asserterNames;
      var old;
      var data;
      var value = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return each(this, process), elem = success(this, require(process).call(this)), p.call(get(elem)), asserterNames = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], old = command, data = get(elem), asserterNames.forEach(function(name) {
        if (old[name]) {
          data[name] = old[name];
        }
      }), elem.options = value, void 0 === elem.options.keySeparator && (elem.options.keySeparator = "."), elem.logger = b.create("translator"), elem;
    }
    return stub(process, prop), check(process, [{
      key : "changeLanguage",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        if (expectedHashCode) {
          /** @type {string} */
          this.language = expectedHashCode;
        }
      }
    }, {
      key : "exists",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        var camelKey = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          interpolation : {}
        };
        var data = this.resolve(expectedHashCode, camelKey);
        return data && void 0 !== data.res;
      }
    }, {
      key : "extractFromKey",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var a = num.nsSeparator || this.options.nsSeparator;
        if (void 0 === a) {
          /** @type {string} */
          a = ":";
        }
        var b = void 0 !== num.keySeparator ? num.keySeparator : this.options.keySeparator;
        var err = num.ns || this.options.defaultNS;
        if (a && expectedHashCode.indexOf(a) > -1) {
          var keys = expectedHashCode.split(a);
          if (a !== b || a === b && this.options.ns.indexOf(keys[0]) > -1) {
            err = keys.shift();
          }
          expectedHashCode = keys.join(b);
        }
        return "string" == typeof err && (err = [err]), {
          key : expectedHashCode,
          namespaces : err
        };
      }
    }, {
      key : "translate",
      /**
       * @param {string} expectedHashCode
       * @param {Object} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var that = this;
        if ("object" !== create(num) && (this.options.overloadTranslationOptionHandler && (num = this.options.overloadTranslationOptionHandler(arguments))), num || (num = {}), null == expectedHashCode) {
          return "";
        }
        if (!Array.isArray(expectedHashCode)) {
          /** @type {Array} */
          expectedHashCode = [String(expectedHashCode)];
        }
        var STRINGS = void 0 !== num.keySeparator ? num.keySeparator : this.options.keySeparator;
        var options = this.extractFromKey(expectedHashCode[expectedHashCode.length - 1], num);
        var val = options.key;
        var ns = options.namespaces;
        var name = ns[ns.length - 1];
        var language = num.lng || this.language;
        var f = num.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (language && "cimode" === language.toLowerCase()) {
          if (f) {
            var _ = num.nsSeparator || this.options.nsSeparator;
            return name + _ + val;
          }
          return val;
        }
        var out = this.resolve(expectedHashCode, num);
        var value = out && out.res;
        var text = out && out.usedKey || val;
        var okay = out && out.exactUsedKey || val;
        /** @type {string} */
        var cur = Object.prototype.toString.apply(value);
        /** @type {Array} */
        var pos = ["[object Number]", "[object Function]", "[object RegExp]"];
        var v = void 0 !== num.joinArrays ? num.joinArrays : this.options.joinArrays;
        var paramHandler = !this.i18nFormat || this.i18nFormat.handleAsObject;
        /** @type {boolean} */
        var type = "string" != typeof value && ("boolean" != typeof value && "number" != typeof value);
        if (paramHandler && (value && (type && (pos.indexOf(cur) < 0 && ("string" != typeof v || "[object Array]" !== cur))))) {
          if (!num.returnObjects && !this.options.returnObjects) {
            return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(text, value, num) : "key '".concat(val, " (").concat(this.language, ")' returned an object instead of string.");
          }
          if (STRINGS) {
            /** @type {boolean} */
            var result = "[object Array]" === cur;
            /** @type {(Array|{})} */
            var obj = result ? [] : {};
            var rv = result ? okay : text;
            var i;
            for (i in value) {
              if (Object.prototype.hasOwnProperty.call(value, i)) {
                /** @type {string} */
                var el = "".concat(rv).concat(STRINGS).concat(i);
                obj[i] = this.translate(el, extend({}, num, {
                  joinArrays : false,
                  ns : ns
                }));
                if (obj[i] === el) {
                  obj[i] = value[i];
                }
              }
            }
            /** @type {(Array|{})} */
            value = obj;
          }
        } else {
          if (paramHandler && ("string" == typeof v && "[object Array]" === cur)) {
            if (value = value.join(v)) {
              value = this.extendTranslation(value, expectedHashCode, num);
            }
          } else {
            /** @type {boolean} */
            var dataType = false;
            /** @type {boolean} */
            var O = false;
            if (!this.isValidLookup(value) && void 0 !== num.defaultValue) {
              if (dataType = true, void 0 !== num.count) {
                var caseSensitive = this.pluralResolver.getSuffix(language, num.count);
                value = num["defaultValue".concat(caseSensitive)];
              }
              if (!value) {
                value = num.defaultValue;
              }
            }
            if (!this.isValidLookup(value)) {
              /** @type {boolean} */
              O = true;
              value = val;
            }
            var success = num.defaultValue && (num.defaultValue !== value && this.options.updateMissing);
            if (O || (dataType || success)) {
              this.logger.log(success ? "updateKey" : "missingKey", language, name, val, success ? num.defaultValue : value);
              /** @type {Array} */
              var results = [];
              var sorted = this.languageUtils.getFallbackCodes(this.options.fallbackLng, num.lng || this.language);
              if ("fallback" === this.options.saveMissingTo && (sorted && sorted[0])) {
                /** @type {number} */
                var j = 0;
                for (;j < sorted.length;j++) {
                  results.push(sorted[j]);
                }
              } else {
                if ("all" === this.options.saveMissingTo) {
                  results = this.languageUtils.toResolveHierarchy(num.lng || this.language);
                } else {
                  results.push(num.lng || this.language);
                }
              }
              /**
               * @param {Array} e
               * @param {?} key
               * @return {undefined}
               */
              var fn = function(e, key) {
                if (that.options.missingKeyHandler) {
                  that.options.missingKeyHandler(e, name, key, success ? num.defaultValue : value, success, num);
                } else {
                  if (that.backendConnector) {
                    if (that.backendConnector.saveMissing) {
                      that.backendConnector.saveMissing(e, name, key, success ? num.defaultValue : value, success, num);
                    }
                  }
                }
                that.emit("missingKey", e, name, key, value);
              };
              if (this.options.saveMissing) {
                /** @type {boolean} */
                var title = void 0 !== num.count && "string" != typeof num.count;
                if (this.options.saveMissingPlurals && title) {
                  results.forEach(function(basis) {
                    that.pluralResolver.getPluralFormsOfKey(basis, val).forEach(function(key) {
                      return fn([basis], key);
                    });
                  });
                } else {
                  fn(results, val);
                }
              }
            }
            value = this.extendTranslation(value, expectedHashCode, num, out);
            if (O) {
              if (value === val) {
                if (this.options.appendNamespaceToMissingKey) {
                  /** @type {string} */
                  value = "".concat(name, ":").concat(val);
                }
              }
            }
            if (O) {
              if (this.options.parseMissingKeyHandler) {
                value = this.options.parseMissingKeyHandler(value);
              }
            }
          }
        }
        return value;
      }
    }, {
      key : "extendTranslation",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {(Object|string)} value
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes, value) {
        var tempCtx = this;
        if (this.i18nFormat && this.i18nFormat.parse) {
          expectedHashCode = this.i18nFormat.parse(expectedHashCode, opt_attributes, value.usedLng, value.usedNS, value.usedKey, {
            resolved : value
          });
        } else {
          if (!opt_attributes.skipInterpolation) {
            if (opt_attributes.interpolation) {
              this.interpolator.init(extend({}, opt_attributes, {
                interpolation : extend({}, this.options.interpolation, opt_attributes.interpolation)
              }));
            }
            var actions = opt_attributes.replace && "string" != typeof opt_attributes.replace ? opt_attributes.replace : opt_attributes;
            if (this.options.interpolation.defaultVariables) {
              actions = extend({}, this.options.interpolation.defaultVariables, actions);
            }
            expectedHashCode = this.interpolator.interpolate(expectedHashCode, actions, opt_attributes.lng || this.language, opt_attributes);
            if (false !== opt_attributes.nest) {
              expectedHashCode = this.interpolator.nest(expectedHashCode, function() {
                return tempCtx.translate.apply(tempCtx, arguments);
              }, opt_attributes);
            }
            if (opt_attributes.interpolation) {
              this.interpolator.reset();
            }
          }
        }
        var opts = opt_attributes.postProcess || this.options.postProcess;
        var method = "string" == typeof opts ? [opts] : opts;
        return null != expectedHashCode && (method && (method.length && (false !== opt_attributes.applyPostProcessor && (expectedHashCode = self.handle(method, expectedHashCode, num, this.options && this.options.postProcessPassResolved ? extend({
          i18nResolved : value
        }, opt_attributes) : opt_attributes, this))))), expectedHashCode;
      }
    }, {
      key : "resolve",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        var response;
        var n;
        var declarationError;
        var attrs;
        var rv;
        var self = this;
        var opts = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" == typeof expectedHashCode && (expectedHashCode = [expectedHashCode]), expectedHashCode.forEach(function(slide) {
          if (!self.isValidLookup(response)) {
            var options = self.extractFromKey(slide, opts);
            var step = options.key;
            n = step;
            var namespaces = options.namespaces;
            if (self.options.fallbackNS) {
              namespaces = namespaces.concat(self.options.fallbackNS);
            }
            /** @type {boolean} */
            var f = void 0 !== opts.count && "string" != typeof opts.count;
            /** @type {boolean} */
            var d = void 0 !== opts.context && ("string" == typeof opts.context && "" !== opts.context);
            var asserterNames = opts.lngs ? opts.lngs : self.languageUtils.toResolveHierarchy(opts.lng || self.language, opts.fallbackLng);
            namespaces.forEach(function(i) {
              if (!self.isValidLookup(response)) {
                rv = i;
                if (self.utils) {
                  if (self.utils.hasLoadedNamespace) {
                    if (!self.utils.hasLoadedNamespace(rv)) {
                      self.logger.warn('key "'.concat(n, '" for namespace "').concat(rv, "\" won't get resolved as namespace was not yet loaded"), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    }
                  }
                }
                asserterNames.forEach(function(key) {
                  if (!self.isValidLookup(response)) {
                    attrs = key;
                    var size;
                    var e;
                    var offset = step;
                    /** @type {Array} */
                    var data = [offset];
                    if (self.i18nFormat && self.i18nFormat.addLookupKeys) {
                      self.i18nFormat.addLookupKeys(data, step, key, i, opts);
                    } else {
                      if (f) {
                        size = self.pluralResolver.getSuffix(key, opts.count);
                      }
                      if (f) {
                        if (d) {
                          data.push(offset + size);
                        }
                      }
                      if (d) {
                        data.push(offset += "".concat(self.options.contextSeparator).concat(opts.context));
                      }
                      if (f) {
                        data.push(offset += size);
                      }
                    }
                    for (;e = data.pop();) {
                      if (!self.isValidLookup(response)) {
                        declarationError = e;
                        response = self.getResource(key, i, e, opts);
                      }
                    }
                  }
                });
              }
            });
          }
        }), {
          res : response,
          usedKey : n,
          exactUsedKey : declarationError,
          usedLng : attrs,
          usedNS : rv
        };
      }
    }, {
      key : "isValidLookup",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        return!(void 0 === expectedHashCode || (!this.options.returnNull && null === expectedHashCode || !this.options.returnEmptyString && "" === expectedHashCode));
      }
    }, {
      key : "getResource",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var r20 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(expectedHashCode, num, opt_attributes, r20) : this.resourceStore.getResource(expectedHashCode, num, opt_attributes, r20);
      }
    }]), process;
  }(p);
  var constructor = function() {
    /**
     * @param {?} options
     * @return {undefined}
     */
    function process(options) {
      each(this, process);
      this.options = options;
      this.whitelist = this.options.whitelist || false;
      this.logger = b.create("languageUtils");
    }
    return check(process, [{
      key : "getScriptPartFromCode",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        if (!expectedHashCode || expectedHashCode.indexOf("-") < 0) {
          return null;
        }
        var buf = expectedHashCode.split("-");
        return 2 === buf.length ? null : (buf.pop(), this.formatLanguageCode(buf.join("-")));
      }
    }, {
      key : "getLanguagePartFromCode",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        if (!expectedHashCode || expectedHashCode.indexOf("-") < 0) {
          return expectedHashCode;
        }
        var buf = expectedHashCode.split("-");
        return this.formatLanguageCode(buf[0]);
      }
    }, {
      key : "formatLanguageCode",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        if ("string" == typeof expectedHashCode && expectedHashCode.indexOf("-") > -1) {
          /** @type {Array} */
          var excludes = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
          /** @type {Array.<string>} */
          var parts = expectedHashCode.split("-");
          return this.options.lowerCaseLng ? parts = parts.map(function(m3) {
            return m3.toLowerCase();
          }) : 2 === parts.length ? (parts[0] = parts[0].toLowerCase(), parts[1] = parts[1].toUpperCase(), excludes.indexOf(parts[1].toLowerCase()) > -1 && (parts[1] = find(parts[1].toLowerCase()))) : 3 === parts.length && (parts[0] = parts[0].toLowerCase(), 2 === parts[1].length && (parts[1] = parts[1].toUpperCase()), "sgn" !== parts[0] && (2 === parts[2].length && (parts[2] = parts[2].toUpperCase())), excludes.indexOf(parts[1].toLowerCase()) > -1 && (parts[1] = find(parts[1].toLowerCase())), excludes.indexOf(parts[2].toLowerCase()) >
          -1 && (parts[2] = find(parts[2].toLowerCase()))), parts.join("-");
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? expectedHashCode.toLowerCase() : expectedHashCode;
      }
    }, {
      key : "isWhitelisted",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        return("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (expectedHashCode = this.getLanguagePartFromCode(expectedHashCode)), !this.whitelist || (!this.whitelist.length || this.whitelist.indexOf(expectedHashCode) > -1);
      }
    }, {
      key : "getFallbackCodes",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        if (!expectedHashCode) {
          return[];
        }
        if ("string" == typeof expectedHashCode && (expectedHashCode = [expectedHashCode]), "[object Array]" === Object.prototype.toString.apply(expectedHashCode)) {
          return expectedHashCode;
        }
        if (!num) {
          return expectedHashCode.default || [];
        }
        var message = expectedHashCode[num];
        return message || (message = expectedHashCode[this.getScriptPartFromCode(num)]), message || (message = expectedHashCode[this.formatLanguageCode(num)]), message || (message = expectedHashCode.default), message || [];
      }
    }, {
      key : "toResolveHierarchy",
      /**
       * @param {string} expectedHashCode
       * @param {boolean} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var self = this;
        var asserterNames = this.getFallbackCodes(num || (this.options.fallbackLng || []), expectedHashCode);
        /** @type {Array} */
        var responses = [];
        /**
         * @param {?} args
         * @return {undefined}
         */
        var callback = function(args) {
          if (args) {
            if (self.isWhitelisted(args)) {
              responses.push(args);
            } else {
              self.logger.warn("rejecting non-whitelisted language code: ".concat(args));
            }
          }
        };
        return "string" == typeof expectedHashCode && expectedHashCode.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && callback(this.formatLanguageCode(expectedHashCode)), "languageOnly" !== this.options.load && ("currentOnly" !== this.options.load && callback(this.getScriptPartFromCode(expectedHashCode))), "currentOnly" !== this.options.load && callback(this.getLanguagePartFromCode(expectedHashCode))) : "string" == typeof expectedHashCode && callback(this.formatLanguageCode(expectedHashCode)),
        asserterNames.forEach(function(value) {
          if (responses.indexOf(value) < 0) {
            callback(self.formatLanguageCode(value));
          }
        }), responses;
      }
    }]), process;
  }();
  /** @type {Array} */
  var asserterNames = [{
    lngs : ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
    nr : [1, 2],
    fc : 1
  }, {
    lngs : ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr : [1, 2],
    fc : 2
  }, {
    lngs : ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr : [1],
    fc : 3
  }, {
    lngs : ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr : [1, 2, 5],
    fc : 4
  }, {
    lngs : ["ar"],
    nr : [0, 1, 2, 3, 11, 100],
    fc : 5
  }, {
    lngs : ["cs", "sk"],
    nr : [1, 2, 5],
    fc : 6
  }, {
    lngs : ["csb", "pl"],
    nr : [1, 2, 5],
    fc : 7
  }, {
    lngs : ["cy"],
    nr : [1, 2, 3, 8],
    fc : 8
  }, {
    lngs : ["fr"],
    nr : [1, 2],
    fc : 9
  }, {
    lngs : ["ga"],
    nr : [1, 2, 3, 7, 11],
    fc : 10
  }, {
    lngs : ["gd"],
    nr : [1, 2, 3, 20],
    fc : 11
  }, {
    lngs : ["is"],
    nr : [1, 2],
    fc : 12
  }, {
    lngs : ["jv"],
    nr : [0, 1],
    fc : 13
  }, {
    lngs : ["kw"],
    nr : [1, 2, 3, 4],
    fc : 14
  }, {
    lngs : ["lt"],
    nr : [1, 2, 10],
    fc : 15
  }, {
    lngs : ["lv"],
    nr : [1, 2, 0],
    fc : 16
  }, {
    lngs : ["mk"],
    nr : [1, 2],
    fc : 17
  }, {
    lngs : ["mnk"],
    nr : [0, 1, 2],
    fc : 18
  }, {
    lngs : ["mt"],
    nr : [1, 2, 11, 20],
    fc : 19
  }, {
    lngs : ["or"],
    nr : [2, 1],
    fc : 2
  }, {
    lngs : ["ro"],
    nr : [1, 2, 20],
    fc : 20
  }, {
    lngs : ["sl"],
    nr : [5, 1, 2, 3],
    fc : 21
  }, {
    lngs : ["he"],
    nr : [1, 2, 20, 21],
    fc : 22
  }];
  var cells = {
    /**
     * @param {number} n
     * @return {?}
     */
    1 : function(n) {
      return Number(n > 1);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    2 : function(dataAndEvents) {
      return Number(1 != dataAndEvents);
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    3 : function(dataAndEvents) {
      return 0;
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    4 : function(dataAndEvents) {
      return Number(dataAndEvents % 10 == 1 && dataAndEvents % 100 != 11 ? 0 : dataAndEvents % 10 >= 2 && (dataAndEvents % 10 <= 4 && (dataAndEvents % 100 < 10 || dataAndEvents % 100 >= 20)) ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    5 : function(dataAndEvents) {
      return Number(0 === dataAndEvents ? 0 : 1 == dataAndEvents ? 1 : 2 == dataAndEvents ? 2 : dataAndEvents % 100 >= 3 && dataAndEvents % 100 <= 10 ? 3 : dataAndEvents % 100 >= 11 ? 4 : 5);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    6 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : dataAndEvents >= 2 && dataAndEvents <= 4 ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    7 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : dataAndEvents % 10 >= 2 && (dataAndEvents % 10 <= 4 && (dataAndEvents % 100 < 10 || dataAndEvents % 100 >= 20)) ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    8 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : 2 == dataAndEvents ? 1 : 8 != dataAndEvents && 11 != dataAndEvents ? 2 : 3);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    9 : function(dataAndEvents) {
      return Number(dataAndEvents >= 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    10 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : 2 == dataAndEvents ? 1 : dataAndEvents < 7 ? 2 : dataAndEvents < 11 ? 3 : 4);
    },
    /**
     * @param {number} c
     * @return {?}
     */
    11 : function(c) {
      return Number(1 == c || 11 == c ? 0 : 2 == c || 12 == c ? 1 : c > 2 && c < 20 ? 2 : 3);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    12 : function(dataAndEvents) {
      return Number(dataAndEvents % 10 != 1 || dataAndEvents % 100 == 11);
    },
    /**
     * @param {string} expectedHashCode
     * @return {?}
     */
    13 : function(expectedHashCode) {
      return Number(0 !== expectedHashCode);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    14 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : 2 == dataAndEvents ? 1 : 3 == dataAndEvents ? 2 : 3);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    15 : function(dataAndEvents) {
      return Number(dataAndEvents % 10 == 1 && dataAndEvents % 100 != 11 ? 0 : dataAndEvents % 10 >= 2 && (dataAndEvents % 100 < 10 || dataAndEvents % 100 >= 20) ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    16 : function(dataAndEvents) {
      return Number(dataAndEvents % 10 == 1 && dataAndEvents % 100 != 11 ? 0 : 0 !== dataAndEvents ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    17 : function(dataAndEvents) {
      return Number(1 == dataAndEvents || dataAndEvents % 10 == 1 ? 0 : 1);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    18 : function(dataAndEvents) {
      return Number(0 == dataAndEvents ? 0 : 1 == dataAndEvents ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    19 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : 0 === dataAndEvents || dataAndEvents % 100 > 1 && dataAndEvents % 100 < 11 ? 1 : dataAndEvents % 100 > 10 && dataAndEvents % 100 < 20 ? 2 : 3);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    20 : function(dataAndEvents) {
      return Number(1 == dataAndEvents ? 0 : 0 === dataAndEvents || dataAndEvents % 100 > 0 && dataAndEvents % 100 < 20 ? 1 : 2);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    21 : function(dataAndEvents) {
      return Number(dataAndEvents % 100 == 1 ? 1 : dataAndEvents % 100 == 2 ? 2 : dataAndEvents % 100 == 3 || dataAndEvents % 100 == 4 ? 3 : 0);
    },
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    22 : function(dataAndEvents) {
      return Number(1 === dataAndEvents ? 0 : 2 === dataAndEvents ? 1 : (dataAndEvents < 0 || dataAndEvents > 10) && dataAndEvents % 10 == 0 ? 2 : 3);
    }
  };
  var Resource = function() {
    /**
     * @param {?} last
     * @return {undefined}
     */
    function process(last) {
      var buf;
      var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      each(this, process);
      this.languageUtils = last;
      this.options = options;
      this.logger = b.create("pluralResolver");
      this.rules = (buf = {}, asserterNames.forEach(function(item) {
        item.lngs.forEach(function(off) {
          buf[off] = {
            numbers : item.nr,
            plurals : cells[item.fc]
          };
        });
      }), buf);
    }
    return check(process, [{
      key : "addRule",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {undefined}
       */
      value : function(expectedHashCode, num) {
        this.rules[expectedHashCode] = num;
      }
    }, {
      key : "getRule",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        return this.rules[expectedHashCode] || this.rules[this.languageUtils.getLanguagePartFromCode(expectedHashCode)];
      }
    }, {
      key : "needsPlural",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        var found = this.getRule(expectedHashCode);
        return found && found.numbers.length > 1;
      }
    }, {
      key : "getPluralFormsOfKey",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var self = this;
        /** @type {Array} */
        var rulesets = [];
        var meta = this.getRule(expectedHashCode);
        return meta ? (meta.numbers.forEach(function(funcToCall) {
          var paths = self.getSuffix(expectedHashCode, funcToCall);
          rulesets.push("".concat(num).concat(paths));
        }), rulesets) : rulesets;
      }
    }, {
      key : "getSuffix",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var that = this;
        var ext = this.getRule(expectedHashCode);
        if (ext) {
          var i = ext.noAbs ? ext.plurals(num) : ext.plurals(Math.abs(num));
          var value = ext.numbers[i];
          if (this.options.simplifyPluralSuffix) {
            if (2 === ext.numbers.length) {
              if (1 === ext.numbers[0]) {
                if (2 === value) {
                  /** @type {string} */
                  value = "plural";
                } else {
                  if (1 === value) {
                    /** @type {string} */
                    value = "";
                  }
                }
              }
            }
          }
          /**
           * @return {?}
           */
          var number = function() {
            return that.options.prepend && value.toString() ? that.options.prepend + value.toString() : value.toString();
          };
          return "v1" === this.options.compatibilityJSON ? 1 === value ? "" : "number" == typeof value ? "_plural_".concat(value.toString()) : number() : "v2" === this.options.compatibilityJSON ? number() : this.options.simplifyPluralSuffix && (2 === ext.numbers.length && 1 === ext.numbers[0]) ? number() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
        }
        return this.logger.warn("no plural rule found for: ".concat(expectedHashCode)), "";
      }
    }]), process;
  }();
  var Vector = function() {
    /**
     * @return {undefined}
     */
    function process() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      each(this, process);
      this.logger = b.create("interpolator");
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function(match) {
        return match;
      };
      this.init(options);
    }
    return check(process, [{
      key : "init",
      /**
       * @return {undefined}
       */
      value : function() {
        var scope = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!scope.interpolation) {
          scope.interpolation = {
            escapeValue : true
          };
        }
        var options = scope.interpolation;
        this.escape = void 0 !== options.escape ? options.escape : escape;
        this.escapeValue = void 0 === options.escapeValue || options.escapeValue;
        this.useRawValueToEscape = void 0 !== options.useRawValueToEscape && options.useRawValueToEscape;
        this.prefix = options.prefix ? $(options.prefix) : options.prefixEscaped || "{{";
        this.suffix = options.suffix ? $(options.suffix) : options.suffixEscaped || "}}";
        this.formatSeparator = options.formatSeparator ? options.formatSeparator : options.formatSeparator || ",";
        this.unescapePrefix = options.unescapeSuffix ? "" : options.unescapePrefix || "-";
        this.unescapeSuffix = this.unescapePrefix ? "" : options.unescapeSuffix || "";
        this.nestingPrefix = options.nestingPrefix ? $(options.nestingPrefix) : options.nestingPrefixEscaped || $("$t(");
        this.nestingSuffix = options.nestingSuffix ? $(options.nestingSuffix) : options.nestingSuffixEscaped || $(")");
        this.maxReplaces = options.maxReplaces ? options.maxReplaces : 1E3;
        this.resetRegExp();
      }
    }, {
      key : "reset",
      /**
       * @return {undefined}
       */
      value : function() {
        if (this.options) {
          this.init(this.options);
        }
      }
    }, {
      key : "resetRegExp",
      /**
       * @return {undefined}
       */
      value : function() {
        /** @type {string} */
        var re = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        /** @type {RegExp} */
        this.regexp = new RegExp(re, "g");
        /** @type {string} */
        var keyops = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
        /** @type {RegExp} */
        this.regexpUnescape = new RegExp(keyops, "g");
        /** @type {string} */
        var regexS = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
        /** @type {RegExp} */
        this.nestingRegexp = new RegExp(regexS, "g");
      }
    }, {
      key : "interpolate",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {Object} value
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes, value) {
        /**
         * @param {string} value
         * @return {?}
         */
        function formatNumber(value) {
          return value.replace(/\$/g, "$$$$");
        }
        var key;
        var val;
        var a;
        var self = this;
        var timeout = this.options && (this.options.interpolation && this.options.interpolation.defaultVariables) || {};
        /**
         * @param {string} data
         * @return {?}
         */
        var check = function(data) {
          if (data.indexOf(self.formatSeparator) < 0) {
            return done(num, timeout, data);
          }
          var path = data.split(self.formatSeparator);
          var pdataCur = path.shift().trim();
          var dep = path.join(self.formatSeparator).trim();
          return self.format(done(num, timeout, pdataCur), dep, opt_attributes);
        };
        this.resetRegExp();
        var fn = value && value.missingInterpolationHandler || this.options.missingInterpolationHandler;
        /** @type {number} */
        a = 0;
        for (;key = this.regexpUnescape.exec(expectedHashCode);) {
          if (void 0 === (val = check(key[1].trim()))) {
            if ("function" == typeof fn) {
              var err = fn(expectedHashCode, key, value);
              /** @type {string} */
              val = "string" == typeof err ? err : "";
            } else {
              this.logger.warn("missed to pass in variable ".concat(key[1], " for interpolating ").concat(expectedHashCode));
              /** @type {string} */
              val = "";
            }
          } else {
            if (!("string" == typeof val)) {
              if (!this.useRawValueToEscape) {
                val = trim(val);
              }
            }
          }
          if (expectedHashCode = expectedHashCode.replace(key[0], formatNumber(val)), this.regexpUnescape.lastIndex = 0, ++a >= this.maxReplaces) {
            break;
          }
        }
        /** @type {number} */
        a = 0;
        for (;key = this.regexp.exec(expectedHashCode);) {
          if (void 0 === (val = check(key[1].trim()))) {
            if ("function" == typeof fn) {
              var wrapper = fn(expectedHashCode, key, value);
              /** @type {string} */
              val = "string" == typeof wrapper ? wrapper : "";
            } else {
              this.logger.warn("missed to pass in variable ".concat(key[1], " for interpolating ").concat(expectedHashCode));
              /** @type {string} */
              val = "";
            }
          } else {
            if (!("string" == typeof val)) {
              if (!this.useRawValueToEscape) {
                val = trim(val);
              }
            }
          }
          if (val = this.escapeValue ? formatNumber(this.escape(val)) : formatNumber(val), expectedHashCode = expectedHashCode.replace(key[0], val), this.regexp.lastIndex = 0, ++a >= this.maxReplaces) {
            break;
          }
        }
        return expectedHashCode;
      }
    }, {
      key : "nest",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        /**
         * @param {string} data
         * @param {?} settings
         * @return {?}
         */
        function process(data, settings) {
          if (data.indexOf(",") < 0) {
            return data;
          }
          var namespaces = data.split(",");
          data = namespaces.shift();
          var content = namespaces.join(",");
          content = (content = this.interpolate(content, options)).replace(/'/g, '"');
          try {
            /** @type {*} */
            options = JSON.parse(content);
            if (settings) {
              options = extend({}, settings, options);
            }
          } catch (e) {
            this.logger.error("failed parsing options string in nesting for key ".concat(data), e);
          }
          return delete options.defaultValue, data;
        }
        var match;
        var source;
        var oldconfig = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var options = extend({}, oldconfig);
        /** @type {boolean} */
        options.applyPostProcessor = false;
        delete options.defaultValue;
        for (;match = this.nestingRegexp.exec(expectedHashCode);) {
          if ((source = num(process.call(this, match[1].trim(), options), options)) && (match[0] === expectedHashCode && "string" != typeof source)) {
            return source;
          }
          if ("string" != typeof source) {
            source = trim(source);
          }
          if (!source) {
            this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(expectedHashCode));
            /** @type {string} */
            source = "";
          }
          expectedHashCode = expectedHashCode.replace(match[0], source);
          /** @type {number} */
          this.regexp.lastIndex = 0;
        }
        return expectedHashCode;
      }
    }]), process;
  }();
  var Layout = function(prop) {
    /**
     * @param {?} info
     * @param {?} collection
     * @param {?} message
     * @return {?}
     */
    function process(info, collection, message) {
      var self;
      var data = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return each(this, process), self = success(this, require(process).call(this)), p.call(get(self)), self.backend = info, self.store = collection, self.services = message, self.languageUtils = message.languageUtils, self.options = data, self.logger = b.create("backendConnector"), self.state = {}, self.queue = [], self.backend && (self.backend.init && self.backend.init(message, data.backend, data)), self;
    }
    return stub(process, prop), check(process, [{
      key : "queueLoad",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {Object} value
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes, value) {
        var self = this;
        /** @type {Array} */
        var results = [];
        /** @type {Array} */
        var operators = [];
        /** @type {Array} */
        var changes = [];
        /** @type {Array} */
        var classes = [];
        return expectedHashCode.forEach(function(val) {
          /** @type {boolean} */
          var r = true;
          num.forEach(function(className) {
            /** @type {string} */
            var match = "".concat(val, "|").concat(className);
            if (!opt_attributes.reload && self.store.hasResourceBundle(val, className)) {
              /** @type {number} */
              self.state[match] = 2;
            } else {
              if (!(self.state[match] < 0)) {
                if (1 === self.state[match]) {
                  if (operators.indexOf(match) < 0) {
                    operators.push(match);
                  }
                } else {
                  /** @type {number} */
                  self.state[match] = 1;
                  /** @type {boolean} */
                  r = false;
                  if (operators.indexOf(match) < 0) {
                    operators.push(match);
                  }
                  if (results.indexOf(match) < 0) {
                    results.push(match);
                  }
                  if (classes.indexOf(className) < 0) {
                    classes.push(className);
                  }
                }
              }
            }
          });
          if (!r) {
            changes.push(val);
          }
        }), (results.length || operators.length) && this.queue.push({
          pending : operators,
          loaded : {},
          errors : [],
          callback : value
        }), {
          toLoad : results,
          pending : operators,
          toLoadLanguages : changes,
          toLoadNamespaces : classes
        };
      }
    }, {
      key : "loaded",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var array = all(expectedHashCode.split("|"), 2);
        var object = array[0];
        var value = array[1];
        if (num) {
          this.emit("failedLoading", object, value, num);
        }
        if (opt_attributes) {
          this.store.addResourceBundle(object, value, opt_attributes);
        }
        /** @type {number} */
        this.state[expectedHashCode] = num ? -1 : 2;
        var paths = {};
        this.queue.forEach(function(that) {
          var element;
          var val;
          var s;
          var v;
          var obj;
          var key;
          element = that.loaded;
          val = value;
          v = trigger(element, [object], Object);
          obj = v.obj;
          key = v.k;
          obj[key] = obj[key] || [];
          if (s) {
            obj[key] = obj[key].concat(val);
          }
          if (!s) {
            obj[key].push(val);
          }
          (function(pointers, arr) {
            var i = pointers.indexOf(arr);
            for (;-1 !== i;) {
              pointers.splice(i, 1);
              i = pointers.indexOf(arr);
            }
          })(that.pending, expectedHashCode);
          if (num) {
            that.errors.push(num);
          }
          if (!(0 !== that.pending.length)) {
            if (!that.done) {
              Object.keys(that.loaded).forEach(function(key) {
                if (!paths[key]) {
                  /** @type {Array} */
                  paths[key] = [];
                }
                if (that.loaded[key].length) {
                  that.loaded[key].forEach(function(suite) {
                    if (paths[key].indexOf(suite) < 0) {
                      paths[key].push(suite);
                    }
                  });
                }
              });
              /** @type {boolean} */
              that.done = true;
              if (that.errors.length) {
                that.callback(that.errors);
              } else {
                that.callback();
              }
            }
          }
        });
        this.emit("loaded", paths);
        this.queue = this.queue.filter(function(todo) {
          return!todo.done;
        });
      }
    }, {
      key : "read",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var self = this;
        var firingIndex = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        var backoff = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250;
        var $ = arguments.length > 5 ? arguments[5] : void 0;
        return expectedHashCode.length ? this.backend[opt_attributes](expectedHashCode, num, function(mediaElem, list) {
          if (mediaElem && (list && firingIndex < 5)) {
            setTimeout(function() {
              self.read.call(self, expectedHashCode, num, opt_attributes, firingIndex + 1, 2 * backoff, $);
            }, backoff);
          } else {
            $(mediaElem, list);
          }
        }) : $(null, {});
      }
    }, {
      key : "prepareLoading",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var uvs = this;
        var which = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var func = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) {
          return this.logger.warn("No backend was added via i18next.use. Will not load resources."), func && func();
        }
        if ("string" == typeof expectedHashCode) {
          expectedHashCode = this.languageUtils.toResolveHierarchy(expectedHashCode);
        }
        if ("string" == typeof num) {
          /** @type {Array} */
          num = [num];
        }
        var self = this.queueLoad(expectedHashCode, num, which, func);
        if (!self.toLoad.length) {
          return self.pending.length || func(), null;
        }
        self.toLoad.forEach(function(u) {
          uvs.loadOne(u);
        });
      }
    }, {
      key : "load",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        this.prepareLoading(expectedHashCode, num, {}, opt_attributes);
      }
    }, {
      key : "reload",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        this.prepareLoading(expectedHashCode, num, {
          reload : true
        }, opt_attributes);
      }
    }, {
      key : "loadOne",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        var self = this;
        var p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        var uris = expectedHashCode.split("|");
        var ast = all(uris, 2);
        var args = ast[0];
        var children = ast[1];
        this.read(args, children, "read", null, null, function(id, err) {
          if (id) {
            self.logger.warn("".concat(p, "loading namespace ").concat(children, " for language ").concat(args, " failed"), id);
          }
          if (!id) {
            if (err) {
              self.logger.log("".concat(p, "loaded namespace ").concat(children, " for language ").concat(args), err);
            }
          }
          self.loaded(expectedHashCode, id, err);
        });
      }
    }, {
      key : "saveMissing",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @param {(Object|string)} isXML
       * @param {Array} howMany
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes, isXML, howMany) {
        var oldconfig = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
        if (this.services.utils && (this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(num))) {
          this.logger.warn('did not save key "'.concat(opt_attributes, '" for namespace "').concat(num, '" as the namespace was not yet loaded'), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        } else {
          if (this.backend) {
            if (this.backend.create) {
              this.backend.create(expectedHashCode, num, opt_attributes, isXML, null, extend({}, oldconfig, {
                isUpdate : howMany
              }));
            }
          }
          if (expectedHashCode) {
            if (expectedHashCode[0]) {
              this.store.addResource(expectedHashCode[0], num, opt_attributes, isXML);
            }
          }
        }
      }
    }]), process;
  }(p);
  var value = new (function(prop) {
    /**
     * @return {?}
     */
    function process() {
      var self;
      var url = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var debug = arguments.length > 1 ? arguments[1] : void 0;
      if (each(this, process), self = success(this, require(process).call(this)), p.call(get(self)), self.options = match(url), self.services = {}, self.logger = b, self.modules = {
        external : []
      }, debug && (!self.isInitialized && !url.isClone)) {
        if (!self.options.initImmediate) {
          return self.init(url, debug), success(self, get(self));
        }
        setTimeout(function() {
          self.init(url, debug);
        }, 0);
      }
      return self;
    }
    return stub(process, prop), check(process, [{
      key : "init",
      /**
       * @return {?}
       */
      value : function() {
        /**
         * @param {string} arg
         * @return {?}
         */
        function require(arg) {
          return arg ? "function" == typeof arg ? new arg : arg : null;
        }
        var options = this;
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var cb = arguments.length > 1 ? arguments[1] : void 0;
        if ("function" == typeof n && (cb = n, n = {}), this.options = extend({}, init(), this.options, match(n)), this.format = this.options.interpolation.format, cb || (cb = doc), !this.options.isClone) {
          if (this.modules.logger) {
            b.init(require(this.modules.logger), this.options);
          } else {
            b.init(null, this.options);
          }
          var item = new constructor(this.options);
          this.store = new store(this.options.resources, this.options);
          var self = this.services;
          self.logger = b;
          self.resourceStore = this.store;
          self.languageUtils = item;
          self.pluralResolver = new Resource(item, {
            prepend : this.options.pluralSeparator,
            compatibilityJSON : this.options.compatibilityJSON,
            simplifyPluralSuffix : this.options.simplifyPluralSuffix
          });
          self.interpolator = new Vector(this.options);
          self.utils = {
            hasLoadedNamespace : this.hasLoadedNamespace.bind(this)
          };
          self.backendConnector = new Layout(require(this.modules.backend), self.resourceStore, self, this.options);
          self.backendConnector.on("*", function(err) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var otherArgs = new Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
              otherArgs[i - 1] = arguments[i];
            }
            options.emit.apply(options, [err].concat(otherArgs));
          });
          if (this.modules.languageDetector) {
            self.languageDetector = require(this.modules.languageDetector);
            self.languageDetector.init(self, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            self.i18nFormat = require(this.modules.i18nFormat);
            if (self.i18nFormat.init) {
              self.i18nFormat.init(this);
            }
          }
          this.translator = new Buffer(this.services, this.options);
          this.translator.on("*", function(err) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var otherArgs = new Array(len > 1 ? len - 1 : 0);
            /** @type {number} */
            var i = 1;
            for (;i < len;i++) {
              otherArgs[i - 1] = arguments[i];
            }
            options.emit.apply(options, [err].concat(otherArgs));
          });
          this.modules.external.forEach(function(model) {
            if (model.init) {
              model.init(options);
            }
          });
        }
        /** @type {Array} */
        var asserterNames = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
        asserterNames.forEach(function(origin) {
          /**
           * @return {?}
           */
          options[origin] = function() {
            var _ref3;
            return(_ref3 = options.store)[origin].apply(_ref3, arguments);
          };
        });
        var dfd = Deferred();
        /**
         * @return {undefined}
         */
        var fn = function() {
          options.changeLanguage(options.options.lng, function(outErr, results) {
            /** @type {boolean} */
            options.isInitialized = true;
            options.logger.log("initialized", options.options);
            options.emit("initialized", options.options);
            dfd.resolve(results);
            cb(outErr, results);
          });
        };
        return this.options.resources || !this.options.initImmediate ? fn() : setTimeout(fn, 0), dfd;
      }
    }, {
      key : "loadResources",
      /**
       * @return {?}
       */
      value : function() {
        var disconnectWhitelist = this;
        var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : doc;
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (this.language && "cimode" === this.language.toLowerCase()) {
            return data();
          }
          /** @type {Array} */
          var ids = [];
          /**
           * @param {?} left
           * @return {undefined}
           */
          var traverse = function(left) {
            if (left) {
              disconnectWhitelist.services.languageUtils.toResolveHierarchy(left).forEach(function(id) {
                if (ids.indexOf(id) < 0) {
                  ids.push(id);
                }
              });
            }
          };
          if (this.language) {
            traverse(this.language);
          } else {
            var asserterNames = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            asserterNames.forEach(function(dir) {
              return traverse(dir);
            });
          }
          if (this.options.preload) {
            this.options.preload.forEach(function(dir) {
              return traverse(dir);
            });
          }
          this.services.backendConnector.load(ids, this.options.ns, data);
        } else {
          data(null);
        }
      }
    }, {
      key : "reloadResources",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {Object} opt_attributes
       * @return {?}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var dfd = Deferred();
        return expectedHashCode || (expectedHashCode = this.languages), num || (num = this.options.ns), opt_attributes || (opt_attributes = doc), this.services.backendConnector.reload(expectedHashCode, num, function(deepDataAndEvents) {
          dfd.resolve();
          opt_attributes(deepDataAndEvents);
        }), dfd;
      }
    }, {
      key : "use",
      /**
       * @param {Object} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        return "backend" === expectedHashCode.type && (this.modules.backend = expectedHashCode), ("logger" === expectedHashCode.type || expectedHashCode.log && (expectedHashCode.warn && expectedHashCode.error)) && (this.modules.logger = expectedHashCode), "languageDetector" === expectedHashCode.type && (this.modules.languageDetector = expectedHashCode), "i18nFormat" === expectedHashCode.type && (this.modules.i18nFormat = expectedHashCode), "postProcessor" === expectedHashCode.type && self.addPostProcessor(expectedHashCode),
        "3rdParty" === expectedHashCode.type && this.modules.external.push(expectedHashCode), this;
      }
    }, {
      key : "changeLanguage",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var self = this;
        var dfd = Deferred();
        this.emit("languageChanging", expectedHashCode);
        /**
         * @param {?} id
         * @return {undefined}
         */
        var init = function(id) {
          if (id) {
            self.language = id;
            self.languages = self.services.languageUtils.toResolveHierarchy(id);
            if (!self.translator.language) {
              self.translator.changeLanguage(id);
            }
            if (self.services.languageDetector) {
              self.services.languageDetector.cacheUserLanguage(id);
            }
          }
          self.loadResources(function(deepDataAndEvents) {
            !function(deepDataAndEvents, str) {
              self.translator.changeLanguage(str);
              if (str) {
                self.emit("languageChanged", str);
                self.logger.log("languageChanged", str);
              }
              dfd.resolve(function() {
                return self.t.apply(self, arguments);
              });
              if (num) {
                num(deepDataAndEvents, function() {
                  return self.t.apply(self, arguments);
                });
              }
            }(deepDataAndEvents, id);
          });
        };
        return expectedHashCode || (!this.services.languageDetector || this.services.languageDetector.async) ? !expectedHashCode && (this.services.languageDetector && this.services.languageDetector.async) ? this.services.languageDetector.detect(init) : init(expectedHashCode) : init(this.services.languageDetector.detect()), dfd;
      }
    }, {
      key : "getFixedT",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var el = this;
        /**
         * @param {Object} key
         * @param {boolean} options
         * @return {?}
         */
        var self = function add(key, options) {
          var params;
          if ("object" !== create(options)) {
            /** @type {number} */
            var len = arguments.length;
            /** @type {Array} */
            var otherArgs = new Array(len > 2 ? len - 2 : 0);
            /** @type {number} */
            var i = 2;
            for (;i < len;i++) {
              otherArgs[i - 2] = arguments[i];
            }
            params = el.options.overloadTranslationOptionHandler([key, options].concat(otherArgs));
          } else {
            params = extend({}, options);
          }
          return params.lng = params.lng || add.lng, params.lngs = params.lngs || add.lngs, params.ns = params.ns || add.ns, el.t(key, params);
        };
        return "string" == typeof expectedHashCode ? self.lng = expectedHashCode : self.lngs = expectedHashCode, self.ns = num, self;
      }
    }, {
      key : "t",
      /**
       * @return {?}
       */
      value : function() {
        var newArgs;
        return this.translator && (newArgs = this.translator).translate.apply(newArgs, arguments);
      }
    }, {
      key : "exists",
      /**
       * @return {?}
       */
      value : function() {
        var newArgs;
        return this.translator && (newArgs = this.translator).exists.apply(newArgs, arguments);
      }
    }, {
      key : "setDefaultNamespace",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        /** @type {string} */
        this.options.defaultNS = expectedHashCode;
      }
    }, {
      key : "hasLoadedNamespace",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        var disconnectWhitelist = this;
        if (!this.isInitialized) {
          return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
        }
        if (!this.languages || !this.languages.length) {
          return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
        }
        var language = this.languages[0];
        var r = !!this.options && this.options.fallbackLng;
        var typePattern = this.languages[this.languages.length - 1];
        if ("cimode" === language.toLowerCase()) {
          return true;
        }
        /**
         * @param {?} args
         * @param {string} f
         * @return {?}
         */
        var callback = function(args, f) {
          var preceding = disconnectWhitelist.services.backendConnector.state["".concat(args, "|").concat(f)];
          return-1 === preceding || 2 === preceding;
        };
        return!!this.hasResourceBundle(language, expectedHashCode) || (!this.services.backendConnector.backend || !(!callback(language, expectedHashCode) || r && !callback(typePattern, expectedHashCode)));
      }
    }, {
      key : "loadNamespaces",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var elem = this;
        var dfd = Deferred();
        return this.options.ns ? ("string" == typeof expectedHashCode && (expectedHashCode = [expectedHashCode]), expectedHashCode.forEach(function(suite) {
          if (elem.options.ns.indexOf(suite) < 0) {
            elem.options.ns.push(suite);
          }
        }), this.loadResources(function(op) {
          dfd.resolve();
          if (num) {
            num(op);
          }
        }), dfd) : (num && num(), Promise.resolve());
      }
    }, {
      key : "loadLanguages",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @return {?}
       */
      value : function(expectedHashCode, num) {
        var dfd = Deferred();
        if ("string" == typeof expectedHashCode) {
          /** @type {Array} */
          expectedHashCode = [expectedHashCode];
        }
        var l = this.options.preload || [];
        var w = expectedHashCode.filter(function(indent) {
          return l.indexOf(indent) < 0;
        });
        return w.length ? (this.options.preload = l.concat(w), this.loadResources(function(op) {
          dfd.resolve();
          if (num) {
            num(op);
          }
        }), dfd) : (num && num(), Promise.resolve());
      }
    }, {
      key : "dir",
      /**
       * @param {string} expectedHashCode
       * @return {?}
       */
      value : function(expectedHashCode) {
        if (expectedHashCode || (expectedHashCode = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !expectedHashCode) {
          return "rtl";
        }
        return["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(expectedHashCode)) >=
        0 ? "rtl" : "ltr";
      }
    }, {
      key : "createInstance",
      /**
       * @return {?}
       */
      value : function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var n = arguments.length > 1 ? arguments[1] : void 0;
        return new process(e, n);
      }
    }, {
      key : "cloneInstance",
      /**
       * @return {?}
       */
      value : function() {
        var originalEvent = this;
        var customOptions = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : doc;
        var options = extend({}, this.options, customOptions, {
          isClone : true
        });
        var self = new process(options);
        /** @type {Array} */
        var asserterNames = ["store", "services", "language"];
        return asserterNames.forEach(function(prop) {
          self[prop] = originalEvent[prop];
        }), self.translator = new Buffer(self.services, self.options), self.translator.on("*", function(err) {
          /** @type {number} */
          var len = arguments.length;
          /** @type {Array} */
          var otherArgs = new Array(len > 1 ? len - 1 : 0);
          /** @type {number} */
          var i = 1;
          for (;i < len;i++) {
            otherArgs[i - 1] = arguments[i];
          }
          self.emit.apply(self, [err].concat(otherArgs));
        }), self.init(options, context), self.translator.options = self.options, self;
      }
    }]), process;
  }(p));
  element.a = value;
}, function(dataAndEvents, mix, require) {
  (function(p) {
    /**
     * @return {?}
     */
    function merge() {
      return(merge = Object.assign || function(expectedHashCode) {
        /** @type {number} */
        var i = 1;
        for (;i < arguments.length;i++) {
          var iterable = arguments[i];
          var key;
          for (key in iterable) {
            if (Object.prototype.hasOwnProperty.call(iterable, key)) {
              expectedHashCode[key] = iterable[key];
            }
          }
        }
        return expectedHashCode;
      }).apply(this, arguments);
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function isFunction(obj) {
      return "function" == typeof obj;
    }
    /**
     * @param {Function} collection
     * @return {?}
     */
    function fn(collection) {
      return collection.displayName || (collection.name || "Component");
    }
    /**
     * @param {boolean} str
     * @return {?}
     */
    function trim(str) {
      return str && "string" == typeof str.styledComponentId;
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @return {undefined}
     */
    function put(expectedNumberOfNonCommentArgs) {
      /** @type {number} */
      var len = arguments.length;
      /** @type {Array} */
      var newArgs = new Array(len > 1 ? len - 1 : 0);
      /** @type {number} */
      var i = 1;
      for (;i < len;i++) {
        newArgs[i - 1] = arguments[i];
      }
      throw new Error("An error occurred. See https://git.io/JUIaE#" + expectedNumberOfNonCommentArgs + " for more information." + (newArgs.length > 0 ? " Args: " + newArgs.join(", ") : ""));
    }
    /**
     * @param {number} offset
     * @return {?}
     */
    function normalize(offset) {
      var chunk;
      /** @type {string} */
      var str = "";
      /** @type {number} */
      chunk = Math.abs(offset);
      for (;chunk > 52;chunk = chunk / 52 | 0) {
        /** @type {string} */
        str = charAt(chunk % 52) + str;
      }
      return(charAt(chunk % 52) + str).replace(r20, "$1-$2");
    }
    /**
     * @param {Array} arr
     * @return {?}
     */
    function each(arr) {
      /** @type {number} */
      var i = 0;
      for (;i < arr.length;i += 1) {
        var val = arr[i];
        if (isFunction(val) && !trim(val)) {
          return false;
        }
      }
      return true;
    }
    /**
     * @param {Object} object
     * @return {?}
     */
    function filter(object) {
      /**
       * @param {string} val
       * @param {?} a
       * @param {string} b
       * @param {string} a2
       * @return {?}
       */
      function f(val, a, b, a2) {
        if (void 0 === a2) {
          /** @type {string} */
          a2 = "&";
        }
        var string = val.replace(rCRLF, "");
        var finalString = a && b ? b + " " + a + " { " + string + " }" : string;
        return error = a2, last = a, binding_field = new RegExp("\\" + last + "\\b", "g"), core_rnotwhite = new RegExp("(\\" + last + "\\b){2,}"), parse(b || !a ? "" : a, finalString);
      }
      var error;
      var last;
      var binding_field;
      var core_rnotwhite;
      var self = void 0 === object ? arg : object;
      var a = self.options;
      var adown = void 0 === a ? arg : a;
      var x = self.plugins;
      var p = void 0 === x ? id : x;
      var parse = new helper.a(adown);
      /** @type {Array} */
      var computed = [];
      var match = function(removeClass) {
        /**
         * @param {string} key
         * @return {undefined}
         */
        function fn(key) {
          if (key) {
            try {
              removeClass(key + "}");
            } catch (e) {
            }
          }
        }
        return function(deepDataAndEvents, key, dataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, opt_attributes, matcherFunction, execResult, band) {
          switch(deepDataAndEvents) {
            case 1:
              if (0 === execResult && 64 === key.charCodeAt(0)) {
                return removeClass(key + ";"), "";
              }
              break;
            case 2:
              if (0 === matcherFunction) {
                return key + "/*|*/";
              }
              break;
            case 3:
              switch(matcherFunction) {
                case 102:
                ;
                case 112:
                  return removeClass(dataAndEvents[0] + key), "";
                default:
                  return key + (0 === band ? "/*|*/" : "");
              }
            ;
            case -2:
              key.split("/*|*/}").forEach(fn);
          }
        };
      }(function(spaceName) {
        computed.push(spaceName);
      });
      /**
       * @param {?} not
       * @param {number} inplace
       * @param {Object} value
       * @return {?}
       */
      var filter = function(not, inplace, value) {
        return 0 === inplace && result.includes(value[last.length]) || value.match(core_rnotwhite) ? not : "." + error;
      };
      return parse.use([].concat(p, [function(dataAndEvents, deepDataAndEvents, m) {
        if (2 === dataAndEvents) {
          if (m.length) {
            if (m[0].lastIndexOf(last) > 0) {
              m[0] = m[0].replace(binding_field, filter);
            }
          }
        }
      }, match, function(dataAndEvents) {
        if (-2 === dataAndEvents) {
          var result = computed;
          return computed = [], result;
        }
      }])), f.hash = p.length ? p.reduce(function(er, stat) {
        return stat.name || put(15), callback(er, stat.name);
      }, 5381).toString() : "", f;
    }
    /**
     * @return {?}
     */
    function isObject() {
      return Object(options.useContext)(o) || node;
    }
    /**
     * @return {?}
     */
    function isExtensible() {
      return Object(options.useContext)(data) || tmp;
    }
    /**
     * @param {HTMLElement} e
     * @return {?}
     */
    function create(e) {
      var params = Object(options.useState)(e.stylisPlugins);
      var param = params[0];
      var fn = params[1];
      var obj = isObject();
      var origValue = Object(options.useMemo)(function() {
        var request = obj;
        return e.sheet ? request = e.sheet : e.target && (request = request.reconstructWithOptions({
          target : e.target
        }, false)), e.disableCSSOMInjection && (request = request.reconstructWithOptions({
          useCSSOMInjection : false
        })), request;
      }, [e.disableCSSOMInjection, e.sheet, e.target]);
      var progress = Object(options.useMemo)(function() {
        return filter({
          options : {
            prefix : !e.disableVendorPrefixes
          },
          plugins : param
        });
      }, [e.disableVendorPrefixes, param]);
      return Object(options.useEffect)(function() {
        if (!dir()(param, e.stylisPlugins)) {
          fn(e.stylisPlugins);
        }
      }, [e.stylisPlugins]), opts.a.createElement(o.Provider, {
        value : origValue
      }, opts.a.createElement(data.Provider, {
        value : progress
      }, e.children));
    }
    /**
     * @param {string} prop
     * @return {?}
     */
    function register(prop) {
      return exclude.test(prop) ? prop.replace(rclass, format).replace(rreturn, "-ms-") : prop;
    }
    /**
     * @param {Object} data
     * @param {string} expectedHashCode
     * @param {boolean} options
     * @param {(Object|string)} name
     * @return {?}
     */
    function init(data, expectedHashCode, options, name) {
      if (Array.isArray(data)) {
        var value;
        /** @type {Array} */
        var ret = [];
        /** @type {number} */
        var i = 0;
        var iLen = data.length;
        for (;i < iLen;i += 1) {
          if ("" !== (value = init(data[i], expectedHashCode, options, name))) {
            if (Array.isArray(value)) {
              ret.push.apply(ret, value);
            } else {
              ret.push(value);
            }
          }
        }
        return ret;
      }
      return getter(data) ? "" : trim(data) ? "." + data.styledComponentId : isFunction(data) ? "function" != typeof(character = data) || (character.prototype && character.prototype.isReactComponent || !expectedHashCode) ? data : init(data(expectedHashCode), expectedHashCode, options, name) : data instanceof ArrayBuffer ? options ? (data.inject(options, name), data.getName(name)) : data : isArray(data) ? function init(obj, method) {
        var id;
        var r;
        /** @type {Array} */
        var fun = [];
        var i;
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (!getter(obj[i])) {
              if (isArray(obj[i])) {
                fun.push.apply(fun, init(obj[i], i));
              } else {
                if (isFunction(obj[i])) {
                  fun.push(register(i) + ":", obj[i], ";");
                } else {
                  fun.push(register(i) + ": " + (id = i, null == (r = obj[i]) || ("boolean" == typeof r || "" === r) ? "" : "number" != typeof r || (0 === r || id in db.a) ? String(r).trim() : r + "px") + ";");
                }
              }
            }
          }
        }
        return method ? [method + " {"].concat(fun, ["}"]) : fun;
      }(data) : data.toString();
      var character;
    }
    /**
     * @param {string} context
     * @return {?}
     */
    function done(context) {
      /** @type {number} */
      var len = arguments.length;
      /** @type {Array} */
      var rv = new Array(len > 1 ? len - 1 : 0);
      /** @type {number} */
      var i = 1;
      for (;i < len;i++) {
        rv[i - 1] = arguments[i];
      }
      return isFunction(context) || isArray(context) ? init(test(id, [context].concat(rv))) : 0 === rv.length && (1 === context.length && "string" == typeof context[0]) ? context : init(test(context, rv));
    }
    /**
     * @param {string} s
     * @return {?}
     */
    function log(s) {
      return s.replace(rSlash, "-").replace(badChars, "");
    }
    /**
     * @param {Function} str
     * @return {?}
     */
    function decode(str) {
      return "string" == typeof str && true;
    }
    /**
     * @param {Object} msg
     * @param {Object} value
     * @param {string} name
     * @return {undefined}
     */
    function ok(msg, value, name) {
      var args = msg[name];
      if (fail(value) && fail(args)) {
        equal(args, value);
      } else {
        /** @type {Object} */
        msg[name] = value;
      }
    }
    /**
     * @param {Object} b
     * @return {?}
     */
    function equal(b) {
      /** @type {number} */
      var len = arguments.length;
      /** @type {Array} */
      var newArgs = new Array(len > 1 ? len - 1 : 0);
      /** @type {number} */
      var i = 1;
      for (;i < len;i++) {
        newArgs[i - 1] = arguments[i];
      }
      /** @type {number} */
      var itemIndex = 0;
      /** @type {Array} */
      var minArray = newArgs;
      for (;itemIndex < minArray.length;itemIndex++) {
        var a = minArray[itemIndex];
        if (fail(a)) {
          var prefix;
          for (prefix in a) {
            if (splitPrefix(prefix)) {
              ok(b, a[prefix], prefix);
            }
          }
        }
      }
      return b;
    }
    /**
     * @param {Object} data
     * @param {Object} options
     * @param {Array} entityMap
     * @return {?}
     */
    function parse(data, options, entityMap) {
      var name = trim(data);
      /** @type {boolean} */
      var action = !decode(data);
      var obj = options.attrs;
      var flags = void 0 === obj ? id : obj;
      var value = options.componentId;
      var content = void 0 === value ? function(data, prefix) {
        var path = "string" != typeof data ? "sc" : log(data);
        scripts[path] = (scripts[path] || 0) + 1;
        /** @type {string} */
        var id = path + "-" + pad("5.2.1" + path + scripts[path]);
        return prefix ? prefix + "-" + id : id;
      }(options.displayName, options.parentComponentId) : value;
      var client = options.displayName;
      var property = void 0 === client ? function(data) {
        return decode(data) ? "styled." + data : "Styled(" + fn(data) + ")";
      }(data) : client;
      var start = options.displayName && options.componentId ? log(options.displayName) + "-" + options.componentId : options.componentId || content;
      var attrs = name && data.attrs ? Array.prototype.concat(data.attrs, flags).filter(Boolean) : flags;
      var i = options.shouldForwardProp;
      if (name) {
        if (data.shouldForwardProp) {
          i = options.shouldForwardProp ? function(target, event) {
            return data.shouldForwardProp(target, event) && options.shouldForwardProp(target, event);
          } : data.shouldForwardProp;
        }
      }
      var self;
      var body = new DataView(entityMap, start, name ? data.componentStyle : void 0);
      var dataAndEvents = body.isStatic && 0 === flags.length;
      /**
       * @param {?} view
       * @param {?} deepDataAndEvents
       * @return {?}
       */
      var bind = function(view, deepDataAndEvents) {
        return function(self, cur, deepDataAndEvents, dataAndEvents) {
          var obj = self.attrs;
          var a = self.componentStyle;
          var fromIndex = self.defaultProps;
          var className = self.foldedComponentIds;
          var callback = self.shouldForwardProp;
          var index = self.styledComponentId;
          var container = self.target;
          var last = function(path, _123f, xs) {
            if (void 0 === path) {
              path = arg;
            }
            var data = merge({}, _123f, {
              theme : path
            });
            var cache = {};
            return xs.forEach(function(computed) {
              var prop;
              var a;
              var b;
              var result = computed;
              for (prop in isFunction(result) && (result = result(data)), result) {
                data[prop] = cache[prop] = "className" === prop ? (a = cache[prop], b = result[prop], a && b ? a + " " + b : a || b) : result[prop];
              }
            }), [data, cache];
          }(indexOf(cur, Object(options.useContext)(restoreScript), fromIndex) || arg, cur, obj);
          var pdataOld = last[0];
          var udataCur = last[1];
          var num = function(list, dataAndEvents, value, deepDataAndEvents) {
            var memory = isObject();
            var info = isExtensible();
            return dataAndEvents ? list.generateAndInjectStyles(arg, memory, info) : list.generateAndInjectStyles(value, memory, info);
          }(a, dataAndEvents, pdataOld);
          var ref = deepDataAndEvents;
          var data = udataCur.$as || (cur.$as || (udataCur.as || (cur.as || container)));
          var sessid = decode(data);
          var iterable = udataCur !== cur ? merge({}, cur, {}, udataCur) : cur;
          var config = {};
          var key;
          for (key in iterable) {
            if ("$" !== key[0]) {
              if ("as" !== key) {
                if ("forwardedAs" === key) {
                  config.as = iterable[key];
                } else {
                  if (callback ? callback(key, object.a) : !sessid || Object(object.a)(key)) {
                    config[key] = iterable[key];
                  }
                }
              }
            }
          }
          return cur.style && (udataCur.style !== cur.style && (config.style = merge({}, cur.style, {}, udataCur.style))), config.className = Array.prototype.concat(className, index, num !== index ? num : null, cur.className, udataCur.className).filter(Boolean).join(" "), config.ref = ref, Object(options.createElement)(data, config);
        }(self, view, deepDataAndEvents, dataAndEvents);
      };
      return bind.displayName = property, (self = opts.a.forwardRef(bind)).attrs = attrs, self.componentStyle = body, self.displayName = property, self.shouldForwardProp = i, self.foldedComponentIds = name ? Array.prototype.concat(data.foldedComponentIds, data.styledComponentId) : id, self.styledComponentId = start, self.target = name ? data.target : data, self.withComponent = function(data) {
        var value = options.componentId;
        var cDigit = function(source, keys) {
          if (null == source) {
            return{};
          }
          var key;
          var i;
          var target = {};
          /** @type {Array.<string>} */
          var codeSegments = Object.keys(source);
          /** @type {number} */
          i = 0;
          for (;i < codeSegments.length;i++) {
            /** @type {string} */
            key = codeSegments[i];
            if (!(keys.indexOf(key) >= 0)) {
              target[key] = source[key];
            }
          }
          return target;
        }(options, ["componentId"]);
        var attrNames = value && value + "-" + (decode(data) ? data : log(fn(data)));
        return parse(data, merge({}, cDigit, {
          attrs : attrs,
          componentId : attrNames
        }), entityMap);
      }, Object.defineProperty(self, "defaultProps", {
        /**
         * @return {?}
         */
        get : function() {
          return this._foldedDefaultProps;
        },
        /**
         * @param {string} key
         * @return {undefined}
         */
        set : function(key) {
          this._foldedDefaultProps = name ? equal({}, data.defaultProps, key) : key;
        }
      }), self.toString = function() {
        return "." + self.styledComponentId;
      }, action && promote()(self, data, {
        attrs : true,
        componentStyle : true,
        displayName : true,
        foldedComponentIds : true,
        shouldForwardProp : true,
        styledComponentId : true,
        target : true,
        withComponent : true
      }), self;
    }
    var assert = require(8);
    var options = require(0);
    var opts = require.n(options);
    var file = require(17);
    var dir = require.n(file);
    var helper = require(18);
    var db = require(19);
    var object = require(12);
    var nodes = require(11);
    var promote = require.n(nodes);
    /**
     * @param {Array} source
     * @param {Array} result
     * @return {?}
     */
    var test = function(source, result) {
      /** @type {Array} */
      var ret = [source[0]];
      /** @type {number} */
      var i = 0;
      var iLength = result.length;
      for (;i < iLength;i += 1) {
        ret.push(result[i], source[i + 1]);
      }
      return ret;
    };
    /**
     * @param {Object} obj
     * @return {?}
     */
    var isArray = function(obj) {
      return null !== obj && ("object" == typeof obj && ("[object Object]" === (obj.toString ? obj.toString() : Object.prototype.toString.call(obj)) && !Object(assert.typeOf)(obj)));
    };
    /** @type {Array} */
    var id = Object.freeze([]);
    var arg = Object.freeze({});
    var attribute = void 0 !== p && (p.env.REACT_APP_SC_ATTR || p.env.SC_ATTR) || "data-styled";
    /** @type {boolean} */
    var YY_START = "undefined" != typeof window && "HTMLElement" in window;
    /** @type {boolean} */
    var has_search_bar = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== p && (void 0 !== p.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== p.env.REACT_APP_SC_DISABLE_SPEEDY) ? "false" !== p.env.REACT_APP_SC_DISABLE_SPEEDY && p.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== p && (void 0 !== p.env.SC_DISABLE_SPEEDY && ("" !== p.env.SC_DISABLE_SPEEDY && ("false" !== p.env.SC_DISABLE_SPEEDY && p.env.SC_DISABLE_SPEEDY))));
    var Literal = function() {
      /**
       * @param {?} tag
       * @return {undefined}
       */
      function tag(tag) {
        /** @type {Uint32Array} */
        this.groupSizes = new Uint32Array(512);
        /** @type {number} */
        this.length = 512;
        this.tag = tag;
      }
      var type = tag.prototype;
      return type.indexOfGroup = function(o) {
        /** @type {number} */
        var sum = 0;
        /** @type {number} */
        var i = 0;
        for (;i < o;i++) {
          sum += this.groupSizes[i];
        }
        return sum;
      }, type.insertRules = function(key, name) {
        if (key >= this.groupSizes.length) {
          var storageKey = this.groupSizes;
          var cnt = storageKey.length;
          var length = cnt;
          for (;key >= length;) {
            if ((length <<= 1) < 0) {
              put(16, "" + key);
            }
          }
          /** @type {Uint32Array} */
          this.groupSizes = new Uint32Array(length);
          this.groupSizes.set(storageKey);
          this.length = length;
          var i = cnt;
          for (;i < length;i++) {
            /** @type {number} */
            this.groupSizes[i] = 0;
          }
        }
        var rule = this.indexOfGroup(key + 1);
        /** @type {number} */
        var j = 0;
        var nlen = name.length;
        for (;j < nlen;j++) {
          if (this.tag.insertRule(rule, name[j])) {
            this.groupSizes[key]++;
            rule++;
          }
        }
      }, type.clearGroup = function(group) {
        if (group < this.length) {
          var numToRemove = this.groupSizes[group];
          var index = this.indexOfGroup(group);
          var limit = index + numToRemove;
          /** @type {number} */
          this.groupSizes[group] = 0;
          var i = index;
          for (;i < limit;i++) {
            this.tag.deleteRule(index);
          }
        }
      }, type.getGroup = function(name) {
        /** @type {string} */
        var newEls = "";
        if (name >= this.length || 0 === this.groupSizes[name]) {
          return newEls;
        }
        var queueHooks = this.groupSizes[name];
        var type = this.indexOfGroup(name);
        var key = type + queueHooks;
        var classNames = type;
        for (;classNames < key;classNames++) {
          newEls += this.tag.getRule(classNames) + "/*!sc*/\n";
        }
        return newEls;
      }, tag;
    }();
    var map = new Map;
    var data_user = new Map;
    /** @type {number} */
    var protoProps = 1;
    /**
     * @param {string} key
     * @return {?}
     */
    var del = function(key) {
      if (map.has(key)) {
        return map.get(key);
      }
      for (;data_user.has(protoProps);) {
        protoProps++;
      }
      /** @type {number} */
      var camelKey = protoProps++;
      return map.set(key, camelKey), data_user.set(camelKey, key), camelKey;
    };
    /**
     * @param {(number|string)} elem
     * @return {?}
     */
    var match = function(elem) {
      return data_user.get(elem);
    };
    /**
     * @param {string} camelKey
     * @param {string} props
     * @return {undefined}
     */
    var extend = function(camelKey, props) {
      map.set(camelKey, props);
      data_user.set(props, camelKey);
    };
    /** @type {string} */
    var s = "style[" + attribute + '][data-styled-version="5.2.1"]';
    /** @type {RegExp} */
    var typePattern = new RegExp("^" + attribute + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
    /**
     * @param {?} context
     * @param {string} data
     * @param {string} str
     * @return {undefined}
     */
    var template = function(context, data, str) {
      var block;
      var codeSegments = str.split(",");
      /** @type {number} */
      var i = 0;
      var valuesLen = codeSegments.length;
      for (;i < valuesLen;i++) {
        if (block = codeSegments[i]) {
          context.registerName(data, block);
        }
      }
    };
    /**
     * @param {?} context
     * @param {Element} canvas
     * @return {undefined}
     */
    var render = function(context, canvas) {
      var values = canvas.innerHTML.split("/*!sc*/\n");
      /** @type {Array} */
      var copies = [];
      /** @type {number} */
      var i = 0;
      var valuesLen = values.length;
      for (;i < valuesLen;i++) {
        var segment = values[i].trim();
        if (segment) {
          var octalLiteral = segment.match(typePattern);
          if (octalLiteral) {
            /** @type {number} */
            var settings = 0 | parseInt(octalLiteral[1], 10);
            var camelKey = octalLiteral[2];
            if (0 !== settings) {
              extend(camelKey, settings);
              template(context, camelKey, octalLiteral[3]);
              context.getTag().insertRules(settings, copies);
            }
            /** @type {number} */
            copies.length = 0;
          } else {
            copies.push(segment);
          }
        }
      }
    };
    /**
     * @return {?}
     */
    var readFile = function() {
      return require.nc;
    };
    /**
     * @param {Element} element
     * @return {?}
     */
    var next = function(element) {
      /** @type {(HTMLHeadElement|null)} */
      var root = document.head;
      var el = element || root;
      /** @type {Element} */
      var dom = document.createElement("style");
      var res = function(template) {
        var elements = template.childNodes;
        var i = elements.length;
        for (;i >= 0;i--) {
          var el = elements[i];
          if (el && (1 === el.nodeType && el.hasAttribute(attribute))) {
            return el;
          }
        }
      }(el);
      var first = void 0 !== res ? res.nextSibling : null;
      dom.setAttribute(attribute, "active");
      dom.setAttribute("data-styled-version", "5.2.1");
      var src = readFile();
      return src && dom.setAttribute("nonce", src), el.insertBefore(dom, first), dom;
    };
    var AllDbQueryCollection = function() {
      /**
       * @param {Element} element
       * @return {undefined}
       */
      function initialize(element) {
        var li = this.element = next(element);
        li.appendChild(document.createTextNode(""));
        this.sheet = function(n) {
          if (n.sheet) {
            return n.sheet;
          }
          /** @type {(StyleSheetList|null)} */
          var resultItems = document.styleSheets;
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var valuesLen = resultItems.length;
          for (;i < valuesLen;i++) {
            var result = resultItems[i];
            if (result.ownerNode === n) {
              return result;
            }
          }
          put(17);
        }(li);
        /** @type {number} */
        this.length = 0;
      }
      var parent = initialize.prototype;
      return parent.insertRule = function(r, rule) {
        try {
          return this.sheet.insertRule(rule, r), this.length++, true;
        } catch (e) {
          return false;
        }
      }, parent.deleteRule = function(index) {
        this.sheet.deleteRule(index);
        this.length--;
      }, parent.getRule = function(i) {
        var ss = this.sheet.cssRules[i];
        return void 0 !== ss && "string" == typeof ss.cssText ? ss.cssText : "";
      }, initialize;
    }();
    var TokenIterator = function() {
      /**
       * @param {Element} element
       * @return {undefined}
       */
      function Node(element) {
        var li = this.element = next(element);
        this.nodes = li.childNodes;
        /** @type {number} */
        this.length = 0;
      }
      var parent = Node.prototype;
      return parent.insertRule = function(path, rule) {
        if (path <= this.length && path >= 0) {
          /** @type {Text} */
          var fragment = document.createTextNode(rule);
          var nextNode = this.nodes[path];
          return this.element.insertBefore(fragment, nextNode || null), this.length++, true;
        }
        return false;
      }, parent.deleteRule = function(i) {
        this.element.removeChild(this.nodes[i]);
        this.length--;
      }, parent.getRule = function(i) {
        return i < this.length ? this.nodes[i].textContent : "";
      }, Node;
    }();
    var Entity = function() {
      /**
       * @param {?} req
       * @return {undefined}
       */
      function list(req) {
        /** @type {Array} */
        this.rules = [];
        /** @type {number} */
        this.length = 0;
      }
      var parent = list.prototype;
      return parent.insertRule = function(rule, rules) {
        return rule <= this.length && (this.rules.splice(rule, 0, rules), this.length++, true);
      }, parent.deleteRule = function(i) {
        this.rules.splice(i, 1);
        this.length--;
      }, parent.getRule = function(i) {
        return i < this.length ? this.rules[i] : "";
      }, list;
    }();
    /** @type {boolean} */
    var YYSTATE = YY_START;
    var cDigit = {
      isServer : !YY_START,
      useCSSOMInjection : !has_search_bar
    };
    var rbrace = function() {
      /**
       * @param {(Object|string)} isXML
       * @param {number} allBindingsAccessor
       * @param {?} app
       * @return {undefined}
       */
      function init(isXML, allBindingsAccessor, app) {
        if (void 0 === isXML) {
          isXML = arg;
        }
        if (void 0 === allBindingsAccessor) {
          allBindingsAccessor = {};
        }
        this.options = merge({}, cDigit, {}, isXML);
        /** @type {number} */
        this.gs = allBindingsAccessor;
        this.names = new Map(app);
        if (!this.options.isServer) {
          if (YY_START) {
            if (YYSTATE) {
              /** @type {boolean} */
              YYSTATE = false;
              (function(container) {
                /** @type {NodeList} */
                var q = document.querySelectorAll(s);
                /** @type {number} */
                var i = 0;
                /** @type {number} */
                var l = q.length;
                for (;i < l;i++) {
                  var el = q[i];
                  if (el) {
                    if ("active" !== el.getAttribute(attribute)) {
                      render(container, el);
                      if (el.parentNode) {
                        el.parentNode.removeChild(el);
                      }
                    }
                  }
                }
              })(this);
            }
          }
        }
      }
      /**
       * @param {string} id
       * @return {?}
       */
      init.registerId = function(id) {
        return del(id);
      };
      var $scope = init.prototype;
      return $scope.reconstructWithOptions = function(isXML, recurring) {
        return void 0 === recurring && (recurring = true), new init(merge({}, this.options, {}, isXML), this.gs, recurring && this.names || void 0);
      }, $scope.allocateGSInstance = function(timeoutKey) {
        return this.gs[timeoutKey] = (this.gs[timeoutKey] || 0) + 1;
      }, $scope.getTag = function() {
        return this.tag || (this.tag = (aposed = (data = this.options).isServer, quoted = data.useCSSOMInjection, session = data.target, vvar = aposed ? new Entity(session) : quoted ? new AllDbQueryCollection(session) : new TokenIterator(session), new Literal(vvar)));
        var vvar;
        var data;
        var aposed;
        var quoted;
        var session;
      }, $scope.hasNameForId = function(storageKey, name) {
        return this.names.has(storageKey) && this.names.get(storageKey).has(name);
      }, $scope.registerName = function(storageKey, suite) {
        if (del(storageKey), this.names.has(storageKey)) {
          this.names.get(storageKey).add(suite);
        } else {
          var pdataOld = new Set;
          pdataOld.add(suite);
          this.names.set(storageKey, pdataOld);
        }
      }, $scope.insertRules = function(storageKey, name, value) {
        this.registerName(storageKey, name);
        this.getTag().insertRules(del(storageKey), value);
      }, $scope.clearNames = function(storageKey) {
        if (this.names.has(storageKey)) {
          this.names.get(storageKey).clear();
        }
      }, $scope.clearRules = function(storageKey) {
        this.getTag().clearGroup(del(storageKey));
        this.clearNames(storageKey);
      }, $scope.clearTag = function() {
        this.tag = void 0;
      }, $scope.toString = function() {
        return function(field) {
          var keys = field.getTag();
          var il = keys.length;
          /** @type {string} */
          var optsData = "";
          /** @type {number} */
          var key = 0;
          for (;key < il;key++) {
            var camelKey = match(key);
            if (void 0 !== camelKey) {
              var asserterNames = field.names.get(camelKey);
              var r = keys.getGroup(key);
              if (void 0 !== asserterNames && 0 !== r.length) {
                /** @type {string} */
                var g = attribute + ".g" + key + '[id="' + camelKey + '"]';
                /** @type {string} */
                var buf = "";
                if (void 0 !== asserterNames) {
                  asserterNames.forEach(function(code) {
                    if (code.length > 0) {
                      buf += code + ",";
                    }
                  });
                }
                optsData += "" + r + g + '{content:"' + buf + '"}/*!sc*/\n';
              }
            }
          }
          return optsData;
        }(this);
      }, init;
    }();
    /** @type {RegExp} */
    var r20 = /(a)(d)/gi;
    /**
     * @param {number} i
     * @return {?}
     */
    var charAt = function(i) {
      return String.fromCharCode(i + (i > 25 ? 39 : 97));
    };
    /**
     * @param {number} data
     * @param {string} input
     * @return {?}
     */
    var callback = function(data, input) {
      var i = input.length;
      for (;i;) {
        /** @type {number} */
        data = 33 * data ^ input.charCodeAt(--i);
      }
      return data;
    };
    /**
     * @param {string} x
     * @return {?}
     */
    var pow = function(x) {
      return callback(5381, x);
    };
    var pdataCur = pow("5.2.1");
    var DataView = function() {
      /**
       * @param {Object} arr2
       * @param {string} data
       * @param {number} b
       * @return {undefined}
       */
      function append(arr2, data, b) {
        /** @type {Object} */
        this.rules = arr2;
        /** @type {string} */
        this.staticRulesId = "";
        this.isStatic = (void 0 === b || b.isStatic) && each(arr2);
        /** @type {string} */
        this.componentId = data;
        this.baseHash = callback(pdataCur, data);
        /** @type {number} */
        this.baseStyle = b;
        rbrace.registerId(data);
      }
      return append.prototype.generateAndInjectStyles = function(fn, flags, info) {
        var storageKey = this.componentId;
        /** @type {Array} */
        var assigns = [];
        if (this.baseStyle && assigns.push(this.baseStyle.generateAndInjectStyles(fn, flags, info)), this.isStatic && !info.hash) {
          if (this.staticRulesId && flags.hasNameForId(storageKey, this.staticRulesId)) {
            assigns.push(this.staticRulesId);
          } else {
            var key = init(this.rules, fn, flags, info).join("");
            var modId = normalize(callback(this.baseHash, key.length) >>> 0);
            if (!flags.hasNameForId(storageKey, modId)) {
              var camelKey = info(key, "." + modId, void 0, storageKey);
              flags.insertRules(storageKey, modId, camelKey);
            }
            assigns.push(modId);
            this.staticRulesId = modId;
          }
        } else {
          var len = this.rules.length;
          var value = callback(this.baseHash, info.hash);
          /** @type {string} */
          var text = "";
          /** @type {number} */
          var i = 0;
          for (;i < len;i++) {
            var line = this.rules[i];
            if ("string" == typeof line) {
              text += line;
            } else {
              if (line) {
                var ret = init(line, fn, flags, info);
                var a = Array.isArray(ret) ? ret.join("") : ret;
                value = callback(value, a + i);
                text += a;
              }
            }
          }
          if (text) {
            var vvar = normalize(value >>> 0);
            if (!flags.hasNameForId(storageKey, vvar)) {
              var udataCur = info(text, "." + vvar, void 0, storageKey);
              flags.insertRules(storageKey, vvar, udataCur);
            }
            assigns.push(vvar);
          }
        }
        return assigns.join(" ");
      }, append;
    }();
    /** @type {RegExp} */
    var rCRLF = /^\s*\/\/.*$/gm;
    /** @type {Array} */
    var result = [":", "[", ".", "#"];
    var o = opts.a.createContext();
    var data = (o.Consumer, opts.a.createContext());
    var node = (data.Consumer, new rbrace);
    var tmp = filter();
    var ArrayBuffer = function() {
      /**
       * @param {string} name
       * @param {Object} rules
       * @return {undefined}
       */
      function func(name, rules) {
        var self = this;
        /**
         * @param {boolean} value
         * @param {(Object|string)} fn
         * @return {undefined}
         */
        this.inject = function(value, fn) {
          if (void 0 === fn) {
            fn = tmp;
          }
          var key = self.name + fn.hash;
          if (!value.hasNameForId(self.id, key)) {
            value.insertRules(self.id, key, fn(self.rules, key, "@keyframes"));
          }
        };
        /**
         * @return {?}
         */
        this.toString = function() {
          return put(12, String(self.name));
        };
        /** @type {string} */
        this.name = name;
        /** @type {string} */
        this.id = "sc-keyframes-" + name;
        /** @type {Object} */
        this.rules = rules;
      }
      return func.prototype.getName = function(fn) {
        return void 0 === fn && (fn = tmp), this.name + fn.hash;
      }, func;
    }();
    /** @type {RegExp} */
    var exclude = /([A-Z])/;
    /** @type {RegExp} */
    var rclass = /([A-Z])/g;
    /** @type {RegExp} */
    var rreturn = /^ms-/;
    /**
     * @param {Object} html
     * @return {?}
     */
    var format = function(html) {
      return "-" + html.toLowerCase();
    };
    /**
     * @param {Object} value
     * @return {?}
     */
    var getter = function(value) {
      return null == value || (false === value || "" === value);
    };
    new Set;
    /**
     * @param {Object} o
     * @param {number} isSorted
     * @param {Object} obj
     * @return {?}
     */
    var indexOf = function(o, isSorted, obj) {
      return void 0 === obj && (obj = arg), o.theme !== obj.theme && o.theme || (isSorted || obj.theme);
    };
    /** @type {RegExp} */
    var rSlash = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
    /** @type {RegExp} */
    var badChars = /(^-|-$)/g;
    /**
     * @param {string} x
     * @return {?}
     */
    var pad = function(x) {
      return normalize(pow(x) >>> 0);
    };
    /**
     * @param {Object} actual
     * @return {?}
     */
    var fail = function(actual) {
      return "function" == typeof actual || "object" == typeof actual && (null !== actual && !Array.isArray(actual));
    };
    /**
     * @param {string} name
     * @return {?}
     */
    var splitPrefix = function(name) {
      return "__proto__" !== name && ("constructor" !== name && "prototype" !== name);
    };
    var restoreScript = opts.a.createContext();
    restoreScript.Consumer;
    var scripts = {};
    /**
     * @param {?} code
     * @return {?}
     */
    var a = function(code) {
      return function done(template, data, _123f) {
        if (void 0 === _123f && (_123f = arg), !Object(assert.isValidElementType)(data)) {
          return put(1, String(data));
        }
        /**
         * @return {?}
         */
        var t = function() {
          return template(data, _123f, done.apply(void 0, arguments));
        };
        return t.withConfig = function(ctor) {
          return done(template, data, merge({}, _123f, {}, ctor));
        }, t.attrs = function(flags) {
          return done(template, data, merge({}, _123f, {
            attrs : Array.prototype.concat(_123f.attrs, flags).filter(Boolean)
          }));
        }, t;
      }(parse, code);
    };
    ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li",
    "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse",
    "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(i) {
      a[i] = a(i);
    });
    !function() {
      /**
       * @param {Object} rules
       * @param {?} featureId
       * @return {undefined}
       */
      function Validator(rules, featureId) {
        /** @type {Object} */
        this.rules = rules;
        this.componentId = featureId;
        this.isStatic = each(rules);
        rbrace.registerId(this.componentId + 1);
      }
      var that = Validator.prototype;
      /**
       * @param {number} dataAndEvents
       * @param {string} i
       * @param {boolean} jQuery
       * @param {(Object|string)} callback
       * @return {undefined}
       */
      that.createStyles = function(dataAndEvents, i, jQuery, callback) {
        var value = callback(init(this.rules, i, jQuery, callback).join(""), "");
        var elements = this.componentId + dataAndEvents;
        jQuery.insertRules(elements, elements, value);
      };
      /**
       * @param {number} dataAndEvents
       * @param {boolean} deepDataAndEvents
       * @return {undefined}
       */
      that.removeStyles = function(dataAndEvents, deepDataAndEvents) {
        deepDataAndEvents.clearRules(this.componentId + dataAndEvents);
      };
      /**
       * @param {number} dataAndEvents
       * @param {string} dataName
       * @param {boolean} deepDataAndEvents
       * @param {(Object|string)} next_callback
       * @return {undefined}
       */
      that.renderStyles = function(dataAndEvents, dataName, deepDataAndEvents, next_callback) {
        if (dataAndEvents > 2) {
          rbrace.registerId(this.componentId + dataAndEvents);
        }
        this.removeStyles(dataAndEvents, deepDataAndEvents);
        this.createStyles(dataAndEvents, dataName, deepDataAndEvents, next_callback);
      };
    }();
    !function() {
      /**
       * @return {undefined}
       */
      function left() {
        var self = this;
        /**
         * @return {?}
         */
        this._emitSheetCSS = function() {
          var t = self.instance.toString();
          var input = readFile();
          return "<style " + [input && 'nonce="' + input + '"', attribute + '="true"', 'data-styled-version="5.2.1"'].filter(Boolean).join(" ") + ">" + t + "</style>";
        };
        /**
         * @return {?}
         */
        this.getStyleTags = function() {
          return self.sealed ? put(2) : self._emitSheetCSS();
        };
        /**
         * @return {?}
         */
        this.getStyleElement = function() {
          var props;
          if (self.sealed) {
            return put(2);
          }
          var cDigit = ((props = {})[attribute] = "", props["data-styled-version"] = "5.2.1", props.dangerouslySetInnerHTML = {
            __html : self.instance.toString()
          }, props);
          var input = readFile();
          return input && (cDigit.nonce = input), [opts.a.createElement("style", merge({}, cDigit, {
            key : "sc-0-0"
          }))];
        };
        /**
         * @return {undefined}
         */
        this.seal = function() {
          /** @type {boolean} */
          self.sealed = true;
        };
        this.instance = new rbrace({
          isServer : true
        });
        /** @type {boolean} */
        this.sealed = false;
      }
      var a = left.prototype;
      /**
       * @param {?} v
       * @return {?}
       */
      a.collectStyles = function(v) {
        return this.sealed ? put(2) : opts.a.createElement(create, {
          sheet : this.instance
        }, v);
      };
      /**
       * @param {?} dataAndEvents
       * @return {?}
       */
      a.interleaveWithNodeStream = function(dataAndEvents) {
        return put(3);
      };
    }();
    /** @type {function (?): ?} */
    mix.a = a;
  }).call(this, require(10));
}, function(dataAndEvents, object, read) {
  /**
   * @param {Node} view
   * @param {?} value
   * @return {?}
   */
  function callback(view, value) {
    var parts = view.parentNode.querySelectorAll(value);
    return 1 === parts.length && parts[0] === view;
  }
  /**
   * @param {(RegExp|string)} event
   * @param {?} elem
   * @return {?}
   */
  function next(event, elem) {
    return elem.find(callback.bind(null, event));
  }
  /**
   * @param {(Node|string)} arg
   * @param {?} info
   * @param {number} a
   * @return {?}
   */
  function add(arg, info, a) {
    var match = (0, text.getCombinations)(info, 3);
    var result = next(arg, match);
    return Boolean(result) ? result : Boolean(a) && (result = next(arg, match = match.map(function(b) {
      return a + b;
    })), Boolean(result)) ? result : null;
  }
  /**
   * @param {Node} arg
   * @param {Object} obj
   * @param {?} body
   * @param {(RegExp|string)} errors
   * @return {?}
   */
  function done(arg, obj, body, errors) {
    var val = void 0;
    var data = function(value, arr, statements) {
      var producer = {
        Tag : field.getTag,
        NthChild : orig_code.getNthChild,
        /**
         * @param {?} done
         * @return {?}
         */
        Attributes : function(done) {
          return(0, component.getAttributes)(done, statements);
        },
        Class : buf2.getClassSelectors,
        ID : user.getID
      };
      return arr.reduce(function($cookies, key) {
        return $cookies[key] = producer[key](value), $cookies;
      }, {});
    }(arg, obj, body);
    if (errors) {
      if (errors instanceof RegExp) {
        data.ID = errors.test(data.ID) ? null : data.ID;
        data.Class = data.Class.filter(function(err) {
          return!errors.test(err);
        });
      }
    }
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var h = false;
    var bulk = void 0;
    try {
      var _ref;
      var self = obj[Symbol.iterator]();
      for (;!(callback2 = (_ref = self.next()).done);callback2 = true) {
        var color = _ref.value;
        var root = data.ID;
        var value = data.Tag;
        var v = data.Class;
        var i = data.Attributes;
        var result = data.NthChild;
        switch(color) {
          case "ID":
            if (Boolean(root) && callback(arg, root)) {
              return root;
            }
            break;
          case "Tag":
            if (Boolean(value) && callback(arg, value)) {
              return value;
            }
            break;
          case "Class":
            if (Boolean(v) && (v.length && (val = add(arg, v, value)))) {
              return val;
            }
            break;
          case "Attributes":
            if (Boolean(i) && (i.length && (val = add(arg, i, value)))) {
              return val;
            }
            break;
          case "NthChild":
            if (Boolean(result)) {
              return result;
            }
          ;
        }
      }
    } catch (fn) {
      /** @type {boolean} */
      h = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (h) {
          throw bulk;
        }
      }
    }
    return "*";
  }
  Object.defineProperty(object, "__esModule", {
    value : true
  });
  /**
   * @param {string} expectedHashCode
   * @return {?}
   */
  object.default = function(expectedHashCode) {
    var node = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var value = node.selectorTypes;
    var suiteView = void 0 === value ? ["ID", "Class", "Tag", "NthChild"] : value;
    var id = node.attributesToIgnore;
    var url = void 0 === id ? ["id", "class", "length"] : id;
    var a = node.excludeRegex;
    var adown = void 0 === a ? null : a;
    /** @type {Array} */
    var assigns = [];
    var iterator = (0, ref_id.getParents)(expectedHashCode);
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var p = false;
    var bulk = void 0;
    try {
      var option;
      var self = iterator[Symbol.iterator]();
      for (;!(callback2 = (option = self.next()).done);callback2 = true) {
        var vvar = done(option.value, suiteView, url, adown);
        if (Boolean(vvar)) {
          assigns.push(vvar);
        }
      }
    } catch (fn) {
      /** @type {boolean} */
      p = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (p) {
          throw bulk;
        }
      }
    }
    /** @type {Array} */
    var keys = [];
    /** @type {boolean} */
    var _ref1 = true;
    /** @type {boolean} */
    var k = false;
    var _clockseq = void 0;
    try {
      var _ref;
      var tree = assigns[Symbol.iterator]();
      for (;!(_ref1 = (_ref = tree.next()).done);_ref1 = true) {
        var key = _ref.value;
        keys.unshift(key);
        /** @type {string} */
        var msgElement = keys.join(" > ");
        if ((0, sap_stuff.isUnique)(expectedHashCode, msgElement)) {
          return msgElement;
        }
      }
    } catch (clockseq) {
      /** @type {boolean} */
      k = true;
      _clockseq = clockseq;
    } finally {
      try {
        if (!_ref1) {
          if (tree.return) {
            tree.return();
          }
        }
      } finally {
        if (k) {
          throw _clockseq;
        }
      }
    }
    return null;
  };
  var user = read(24);
  var buf2 = read(25);
  var text = read(26);
  var component = read(27);
  var orig_code = read(28);
  var field = read(29);
  var sap_stuff = read(30);
  var ref_id = read(31);
}, function(dataAndEvents, node, jQuery) {
  (function(runner) {
    jQuery.d(node, "a", function() {
      return signature;
    });
    jQuery.d(node, "b", function() {
      return p;
    });
    jQuery.d(node, "c", function() {
      return h;
    });
    var r20;
    var restoreScript;
    var suiteView;
    var pdataCur;
    var rreturn;
    var udataCur;
    var pdataOld;
    var object = jQuery(1);
    var doc = jQuery(3);
    var signature = (r20 = {}, Object(object.a)(r20, doc.a.BigCommerce, "https://login.bigcommerce.com/login"), Object(object.a)(r20, doc.a.ECWID, "https://my.ecwid.com/cp/"), Object(object.a)(r20, doc.a.PrestaShop, "https://auth.prestashop.com/login"), Object(object.a)(r20, doc.a.Shopify, "https://apps.shopify.com"), Object(object.a)(r20, doc.a.Square, "https://squareup.com/dashboard/online-channels/overview"), Object(object.a)(r20, doc.a.lojaintegrada, "https://lojaintegrada.com.br/?utm_source=tiktok&utm_medium=referral&utm_campaign=li_topo_awareness_aquisicao_parceria-tiktok"),
    Object(object.a)(r20, doc.a.Tray, "https://www.tray.com.br/integracoes/"), Object(object.a)(r20, doc.a.VTEX, "https://apps.vtex.com/"), Object(object.a)(r20, doc.a.WooCommerce, "https://woocommerce.com/signin-with-wordpress/"), Object(object.a)(r20, doc.a.Kyte, "https://app.adjust.com/iw6jqsy"), Object(object.a)(r20, doc.a.BASE, "https://admin.thebase.in/users/login"), Object(object.a)(r20, doc.a.OpenCart, "https://www.opencart.com/index.php?route=account/login"), Object(object.a)(r20, doc.a.Segment,
    "https://segment.com/docs/connections/destinations/catalog/tiktok-conversions/"), Object(object.a)(r20, doc.a.Tealium, "https://community.tealiumiq.com/t5/Client-Side-Tags/TikTok-Pixel-Tag-Setup-Guide/ta-p/36583"), Object(object.a)(r20, doc.a.Cafe24, "https://eclogin.cafe24.com/Shop/"), Object(object.a)(r20, doc.a.SHOPLINE, "https://admin.myshopline.com/user/signIn"), doc.a.Segment, doc.a.Tray, doc.a.PrestaShop, doc.a.OpenCart, doc.a.WooCommerce, function(opt_attributes) {
      return opt_attributes.SG = "SG", opt_attributes.IN = "IN", opt_attributes.US = "US", opt_attributes.TTP = "TTP", opt_attributes.TTP_BOE = "TTP_BOE", opt_attributes;
    }({}));
    var p = (restoreScript = {}, Object(object.a)(restoreScript, signature.SG, "https://lf16-adcdn-sg.ibytedtos.com/obj/meteor-i18n-static-sg"), Object(object.a)(restoreScript, signature.TTP, "https://tosv.tiktokd.org/obj/meteor-i18n-static-tx"), Object(object.a)(restoreScript, signature.TTP_BOE, "https://tosv.tiktokd.org/obj/meteor-i18n-static-tx"), Object(object.a)(restoreScript, signature.IN, "https://lf16-adcdn-gcp.tiktokcdn-in.com/obj/meteor-i18n-static"), Object(object.a)(restoreScript, signature.US,
    "https://sf16-muse-va.ibytedtos.com/obj/meteor-i18n-static"), suiteView = {}, Object(object.a)(suiteView, signature.SG, "https://lf16-adcdn-sg.ibytedtos.com"), Object(object.a)(suiteView, signature.TTP, "https://tosv.tiktokd.org"), Object(object.a)(suiteView, signature.TTP_BOE, "https://tosv.tiktokd.org"), Object(object.a)(suiteView, signature.IN, "https://lf16-adcdn-gcp.tiktokcdn-in.com"), Object(object.a)(suiteView, signature.US, "https://sf16-muse-va.ibytedtos.com"), pdataCur = {}, Object(object.a)(pdataCur,
    signature.SG, "https://starling-sg.byteoversea.com"), Object(object.a)(pdataCur, signature.TTP, "https://starling.us.tiktokv.com"), Object(object.a)(pdataCur, signature.TTP_BOE, "https://starling.us.tiktokv.com"), Object(object.a)(pdataCur, signature.IN, "https://starling-oversea-useast2a.byteoversea.com"), Object(object.a)(pdataCur, signature.US, "https://starling-va.byteoversea.com"), pdataCur);
    var h = (rreturn = {}, Object(object.a)(rreturn, signature.SG, "https://sgali-mcs.byteoversea.com"), Object(object.a)(rreturn, signature.TTP, "https://io-tx.tiktokd.org"), Object(object.a)(rreturn, signature.TTP_BOE, "https://io-tx.tiktokd.org"), Object(object.a)(rreturn, signature.IN, "https://mcs-va-useast2a.tiktokv.com"), Object(object.a)(rreturn, signature.US, "https://maliva-mcs.byteoversea.com"), rreturn);
    var ext = function(userData) {
      return userData.ONLINE = "online", userData.OFFLINE = "offline", userData.TEST = "test", userData;
    }({});
    var m = (udataCur = {}, Object(object.a)(udataCur, ext.ONLINE, "https://ads.us.tiktok.com"), Object(object.a)(udataCur, ext.OFFLINE, "https://boei18n-ads.byteoversea.net"), Object(object.a)(udataCur, ext.TEST, "https://ads.us.tiktok.com"), udataCur);
    var v = (pdataOld = {}, Object(object.a)(pdataOld, ext.ONLINE, "https://ads.tiktok.com"), Object(object.a)(pdataOld, ext.OFFLINE, "https://boei18n-ads.byteoversea.net"), Object(object.a)(pdataOld, ext.TEST, "https://ads.tiktok.com"), pdataOld);
    if (!runner.env.CUSTOM_TTP_DOMAIN) {
      runner.env.BUILD_TYPE;
    }
    if (!runner.env.CUSTOM_MAIN_DOMAIN) {
      runner.env.BUILD_TYPE;
    }
  }).call(this, jQuery(10));
}, function(module, dataAndEvents, factory) {
  module.exports = factory(32);
}, function(dataAndEvents, env, f) {
  (function(p) {
    /**
     * @param {string} files
     * @return {?}
     */
    function run(files) {
      var namespace = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "pixel_pickup";
      var zoneHost = color.b[p.env.REGION || color.a.US];
      var TEAChannelDomain = color.c[p.env.REGION || color.a.US];
      var exports = new x.a({
        api_key : "0f037890bda511e9aaeecd0ed0219ab1",
        namespace : namespace,
        locale : files,
        TEAChannelDomain : TEAChannelDomain,
        zoneHost : zoneHost
      });
      return new Promise(function(on, cb) {
        exports.load(function(translation) {
          var failuresLink = Object(value.a)({}, files, {
            translation : translation
          });
          $scope.a.addResourceBundle(files, namespace, translation, true, true);
          $scope.a.changeLanguage(files).then(function() {
            on(failuresLink);
          });
        }).catch(function(outErr) {
          cb(outErr);
        });
      });
    }
    f.d(env, "a", function() {
      return create;
    });
    var r = f(2);
    var value = f(1);
    var status = f(0);
    var $scope = f(4);
    var x = f(16);
    var color = f(7);
    $scope.a.init({
      keySeparator : false,
      fallbackLng : "en"
    });
    /**
     * @return {?}
     */
    var create = function() {
      var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
      var done = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "pixel_pickup";
      var camelKey = Object(status.useState)(key);
      var dirs = Object(r.a)(camelKey, 2);
      var dir = dirs[0];
      var xy = dirs[1];
      var angle = Object(status.useState)(true);
      var c = Object(r.a)(angle, 2);
      var op = c[0];
      var left = c[1];
      var _args = Object(status.useState)(null);
      var args = Object(r.a)(_args, 2);
      var pageY = args[0];
      var next = args[1];
      var radY = Object(status.useState)(null);
      var y = Object(r.a)(radY, 2);
      var col1 = y[0];
      var HOP = y[1];
      return Object(status.useMemo)(function() {
        run(dir, done).then(function(walkers) {
          left(false);
          HOP(walkers);
        }).catch(function(name) {
          left(false);
          next(name);
          console.error(name);
        });
      }, [dir]), [col1, op, pageY, dir, xy];
    };
  }).call(this, f(10));
}, function(module, dataAndEvents) {
  /**
   * @return {?}
   */
  function r() {
    throw new Error("setTimeout has not been defined");
  }
  /**
   * @return {?}
   */
  function none() {
    throw new Error("clearTimeout has not been defined");
  }
  /**
   * @param {Function} callback
   * @return {?}
   */
  function get(callback) {
    if (type === setTimeout) {
      return setTimeout(callback, 0);
    }
    if ((type === r || !type) && setTimeout) {
      return type = setTimeout, setTimeout(callback, 0);
    }
    try {
      return type(callback, 0);
    } catch (t) {
      try {
        return type.call(null, callback, 0);
      } catch (t) {
        return type.call(this, callback, 0);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function next() {
    if (c) {
      if (received) {
        /** @type {boolean} */
        c = false;
        if (received.length) {
          data = received.concat(data);
        } else {
          /** @type {number} */
          index = -1;
        }
        if (data.length) {
          start();
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function start() {
    if (!c) {
      var on = get(next);
      /** @type {boolean} */
      c = true;
      var length = data.length;
      for (;length;) {
        received = data;
        /** @type {Array} */
        data = [];
        for (;++index < length;) {
          if (received) {
            received[index].run();
          }
        }
        /** @type {number} */
        index = -1;
        /** @type {number} */
        length = data.length;
      }
      /** @type {null} */
      received = null;
      /** @type {boolean} */
      c = false;
      (function(id) {
        if (display === clearTimeout) {
          return clearTimeout(id);
        }
        if ((display === none || !display) && clearTimeout) {
          return display = clearTimeout, clearTimeout(id);
        }
        try {
          display(id);
        } catch (t) {
          try {
            return display.call(null, id);
          } catch (t) {
            return display.call(this, id);
          }
        }
      })(on);
    }
  }
  /**
   * @param {Function} options
   * @param {Object} array
   * @return {undefined}
   */
  function Animation(options, array) {
    /** @type {Function} */
    this.fun = options;
    /** @type {Object} */
    this.array = array;
  }
  /**
   * @return {undefined}
   */
  function tmp() {
  }
  var type;
  var display;
  var process = module.exports = {};
  !function() {
    try {
      /** @type {Function} */
      type = "function" == typeof setTimeout ? setTimeout : r;
    } catch (e) {
      /** @type {function (): ?} */
      type = r;
    }
    try {
      /** @type {Function} */
      display = "function" == typeof clearTimeout ? clearTimeout : none;
    } catch (e) {
      /** @type {function (): ?} */
      display = none;
    }
  }();
  var received;
  /** @type {Array} */
  var data = [];
  /** @type {boolean} */
  var c = false;
  /** @type {number} */
  var index = -1;
  /**
   * @param {string} fn
   * @return {undefined}
   */
  process.nextTick = function(fn) {
    /** @type {Array} */
    var x = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        x[i - 1] = arguments[i];
      }
    }
    data.push(new Animation(fn, x));
    if (!(1 !== data.length)) {
      if (!c) {
        get(start);
      }
    }
  };
  /**
   * @return {undefined}
   */
  Animation.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  /** @type {string} */
  process.title = "browser";
  /** @type {boolean} */
  process.browser = true;
  process.env = {};
  /** @type {Array} */
  process.argv = [];
  /** @type {string} */
  process.version = "";
  process.versions = {};
  /** @type {function (): undefined} */
  process.on = tmp;
  /** @type {function (): undefined} */
  process.addListener = tmp;
  /** @type {function (): undefined} */
  process.once = tmp;
  /** @type {function (): undefined} */
  process.off = tmp;
  /** @type {function (): undefined} */
  process.removeListener = tmp;
  /** @type {function (): undefined} */
  process.removeAllListeners = tmp;
  /** @type {function (): undefined} */
  process.emit = tmp;
  /** @type {function (): undefined} */
  process.prependListener = tmp;
  /** @type {function (): undefined} */
  process.prependOnceListener = tmp;
  /**
   * @param {?} type
   * @return {?}
   */
  process.listeners = function(type) {
    return[];
  };
  /**
   * @param {?} name
   * @return {?}
   */
  process.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  /**
   * @return {?}
   */
  process.cwd = function() {
    return "/";
  };
  /**
   * @param {?} dir
   * @return {?}
   */
  process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  /**
   * @return {?}
   */
  process.umask = function() {
    return 0;
  };
}, function(module, dataAndEvents, topic) {
  /**
   * @param {?} d
   * @return {?}
   */
  function call(d) {
    return out.isMemo(d) ? el : cache[d.$$typeof] || callbacks;
  }
  var out = topic(8);
  var callbacks = {
    childContextTypes : true,
    contextType : true,
    contextTypes : true,
    defaultProps : true,
    displayName : true,
    getDefaultProps : true,
    getDerivedStateFromError : true,
    getDerivedStateFromProps : true,
    mixins : true,
    propTypes : true,
    type : true
  };
  var obj = {
    name : true,
    length : true,
    prototype : true,
    caller : true,
    callee : true,
    arguments : true,
    arity : true
  };
  var el = {
    $$typeof : true,
    compare : true,
    defaultProps : true,
    displayName : true,
    propTypes : true,
    type : true
  };
  var cache = {};
  cache[out.ForwardRef] = {
    $$typeof : true,
    render : true,
    defaultProps : true,
    displayName : true,
    propTypes : true
  };
  cache[out.Memo] = el;
  /** @type {function (Object, string, Object): Object} */
  var orig = Object.defineProperty;
  /** @type {function (Object): Array.<string>} */
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var self = Object.getOwnPropertySymbols;
  /** @type {function (Object, string): (ObjectPropertyDescriptor|undefined)} */
  var _Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** @type {function (Object): (Object|null)} */
  var getPrototypeOf = Object.getPrototypeOf;
  var objectProto = Object.prototype;
  /**
   * @param {string} expectedHashCode
   * @param {?} num
   * @param {?} opt_attributes
   * @return {?}
   */
  module.exports = function copy(expectedHashCode, num, opt_attributes) {
    if ("string" != typeof num) {
      if (objectProto) {
        /** @type {(Object|null)} */
        var cDigit = getPrototypeOf(num);
        if (cDigit) {
          if (cDigit !== objectProto) {
            copy(expectedHashCode, cDigit, opt_attributes);
          }
        }
      }
      /** @type {Array.<string>} */
      var codeSegments = getOwnPropertyNames(num);
      if (self) {
        /** @type {Array} */
        codeSegments = codeSegments.concat(self(num));
      }
      var object = call(expectedHashCode);
      var r = call(num);
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;++i) {
        var prop = codeSegments[i];
        if (!(obj[prop] || (opt_attributes && opt_attributes[prop] || (r && r[prop] || object && object[prop])))) {
          /** @type {(ObjectPropertyDescriptor|undefined)} */
          var desc = _Object_getOwnPropertyDescriptor(num, prop);
          try {
            orig(expectedHashCode, prop, desc);
          } catch (e) {
          }
        }
      }
    }
    return expectedHashCode;
  };
}, function(dataAndEvents, element, deepDataAndEvents) {
  /** @type {RegExp} */
  var rchecked = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var value = function(method) {
    var clone = {};
    return function(param) {
      return void 0 === clone[param] && (clone[param] = method(param)), clone[param];
    };
  }(function(value) {
    return rchecked.test(value) || 111 === value.charCodeAt(0) && (110 === value.charCodeAt(1) && value.charCodeAt(2) < 91);
  });
  element.a = value;
}, function(module, dataAndEvents, deepDataAndEvents) {
  /**
   * @param {string} o
   * @return {?}
   */
  function toObject(o) {
    if (null == o) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(o);
  }
  var freeze = Object.getOwnPropertySymbols;
  /** @type {function (this:Object, *): boolean} */
  var own = Object.prototype.hasOwnProperty;
  /** @type {function (this:Object, string): boolean} */
  var fn = Object.prototype.propertyIsEnumerable;
  module.exports = function() {
    try {
      if (!Object.assign) {
        return false;
      }
      /** @type {String} */
      var s = new String("abc");
      if (s[5] = "de", "5" === Object.getOwnPropertyNames(s)[0]) {
        return false;
      }
      var value = {};
      /** @type {number} */
      var end = 0;
      for (;end < 10;end++) {
        /** @type {number} */
        value["_" + String.fromCharCode(end)] = end;
      }
      if ("0123456789" !== Object.getOwnPropertyNames(value).map(function(arrayIndex) {
        return value[arrayIndex];
      }).join("")) {
        return false;
      }
      var cDigit = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(testname) {
        /** @type {string} */
        cDigit[testname] = testname;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, cDigit)).join("");
    } catch (e) {
      return false;
    }
  }() ? Object.assign : function(expectedHashCode, num) {
    var self;
    var items;
    var obj = toObject(expectedHashCode);
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var key;
      for (key in self = Object(arguments[i])) {
        if (own.call(self, key)) {
          obj[key] = self[key];
        }
      }
      if (freeze) {
        items = freeze(self);
        /** @type {number} */
        var index = 0;
        for (;index < items.length;index++) {
          if (fn.call(self, items[index])) {
            obj[items[index]] = self[items[index]];
          }
        }
      }
    }
    return obj;
  };
}, function(dataAndEvents, child, deepDataAndEvents) {
  Object.defineProperty(child, "__esModule", {
    value : true
  });
  /** @type {function (Function): ?} */
  var isDOMNode = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(el) {
    return typeof el;
  } : function(b) {
    return b && ("function" == typeof Symbol && (b.constructor === Symbol && b !== Symbol.prototype)) ? "symbol" : typeof b;
  };
  /**
   * @param {Object} elem
   * @return {?}
   */
  child.isElement = function(elem) {
    var isElement = void 0;
    /** @type {boolean} */
    isElement = "object" === ("undefined" == typeof HTMLElement ? "undefined" : isDOMNode(HTMLElement)) ? elem instanceof HTMLElement : !!elem && ("object" === (void 0 === elem ? "undefined" : isDOMNode(elem)) && (1 === elem.nodeType && "string" == typeof elem.nodeName));
    return isElement;
  };
}, function(module, dataAndEvents, factory) {
  !function check() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
      0;
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(check);
      } catch (label) {
        console.error(label);
      }
    }
  }();
  module.exports = factory(21);
}, function(dataAndEvents, mix, deepDataAndEvents) {
  /**
   * @param {Function} type
   * @param {string} expectedHashCode
   * @return {undefined}
   */
  function extend(type, expectedHashCode) {
    /**
     * @return {undefined}
     */
    function Surrogate() {
      /** @type {Function} */
      this.constructor = type;
    }
    fn(type, expectedHashCode);
    type.prototype = null === expectedHashCode ? Object.create(expectedHashCode) : (Surrogate.prototype = expectedHashCode.prototype, new Surrogate);
  }
  /**
   * @param {?} _this
   * @param {?} opt_attributes
   * @param {string} expectedNumberOfNonCommentArgs
   * @param {Function} cb
   * @return {?}
   */
  function next(_this, opt_attributes, expectedNumberOfNonCommentArgs, cb) {
    return new (expectedNumberOfNonCommentArgs || (expectedNumberOfNonCommentArgs = Promise))(function(success, callback) {
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      function noop(expectedHashCode) {
        try {
          next(cb.next(expectedHashCode));
        } catch (STOP) {
          callback(STOP);
        }
      }
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      function pass(expectedHashCode) {
        try {
          next(cb.throw(expectedHashCode));
        } catch (STOP) {
          callback(STOP);
        }
      }
      /**
       * @param {Object} event
       * @return {undefined}
       */
      function next(event) {
        var result;
        if (event.done) {
          success(event.value);
        } else {
          (result = event.value, result instanceof expectedNumberOfNonCommentArgs ? result : new expectedNumberOfNonCommentArgs(function(finished) {
            finished(result);
          })).then(noop, pass);
        }
      }
      next((cb = cb.apply(_this, opt_attributes || [])).next());
    });
  }
  /**
   * @param {?} self
   * @param {Function} success
   * @return {?}
   */
  function callback(self, success) {
    /**
     * @param {number} recurring
     * @return {?}
     */
    function k(recurring) {
      return function(dataAndEvents) {
        return function(data) {
          if (y) {
            throw new TypeError("Generator is already executing.");
          }
          for (;json;) {
            try {
              if (y = 1, node && ((_ref = 2 & data[0] ? node.return : data[0] ? node.throw || ((_ref = node.return) && _ref.call(node), 0) : node.next) && !(_ref = _ref.call(node, data[1])).done)) {
                return _ref;
              }
              switch(node = 0, _ref && (data = [2 & data[0], _ref.value]), data[0]) {
                case 0:
                ;
                case 1:
                  _ref = data;
                  break;
                case 4:
                  return json.label++, {
                    value : data[1],
                    done : false
                  };
                case 5:
                  json.label++;
                  node = data[1];
                  /** @type {Array} */
                  data = [0];
                  continue;
                case 7:
                  data = json.ops.pop();
                  json.trys.pop();
                  continue;
                default:
                  if (!(_ref = (_ref = json.trys).length > 0 && _ref[_ref.length - 1]) && (6 === data[0] || 2 === data[0])) {
                    /** @type {number} */
                    json = 0;
                    continue;
                  }
                  if (3 === data[0] && (!_ref || data[1] > _ref[0] && data[1] < _ref[3])) {
                    json.label = data[1];
                    break;
                  }
                  if (6 === data[0] && json.label < _ref[1]) {
                    json.label = _ref[1];
                    _ref = data;
                    break;
                  }
                  if (_ref && json.label < _ref[2]) {
                    json.label = _ref[2];
                    json.ops.push(data);
                    break;
                  }
                  if (_ref[2]) {
                    json.ops.pop();
                  }
                  json.trys.pop();
                  continue;
              }
              data = success.call(self, json);
            } catch (hiTime) {
              /** @type {Array} */
              data = [6, hiTime];
              /** @type {number} */
              node = 0;
            } finally {
              /** @type {number} */
              y = _ref = 0;
            }
          }
          if (5 & data[0]) {
            throw data[1];
          }
          return{
            value : data[0] ? data[1] : void 0,
            done : true
          };
        }([recurring, dataAndEvents]);
      };
    }
    var y;
    var node;
    var _ref;
    var attributes;
    var json = {
      label : 0,
      /**
       * @return {?}
       */
      sent : function() {
        if (1 & _ref[0]) {
          throw _ref[1];
        }
        return _ref[1];
      },
      trys : [],
      ops : []
    };
    return attributes = {
      next : k(0),
      throw : k(1),
      return : k(2)
    }, "function" == typeof Symbol && (attributes[Symbol.iterator] = function() {
      return this;
    }), attributes;
  }
  /**
   * @param {Object} object
   * @param {string} name
   * @param {Function} val
   * @return {?}
   */
  function _init(object, name, val) {
    return name in object ? Object.defineProperty(object, name, {
      /** @type {Function} */
      value : val,
      enumerable : true,
      configurable : true,
      writable : true
    }) : object[name] = val, object;
  }
  /**
   * @param {Array} node
   * @param {number} dataAndEvents
   * @return {?}
   */
  function load(node, dataAndEvents) {
    var fn = "function" == typeof Symbol && node[Symbol.iterator];
    if (!fn) {
      return node;
    }
    var op;
    var mockError;
    var self = fn.call(node);
    /** @type {Array} */
    var path = [];
    try {
      for (;(void 0 === dataAndEvents || dataAndEvents-- > 0) && !(op = self.next()).done;) {
        path.push(op.value);
      }
    } catch (err) {
      mockError = {
        error : err
      };
    } finally {
      try {
        if (op) {
          if (!op.done) {
            if (fn = self.return) {
              fn.call(self);
            }
          }
        }
      } finally {
        if (mockError) {
          throw mockError.error;
        }
      }
    }
    return path;
  }
  /**
   * @return {?}
   */
  function finish() {
    /** @type {Array} */
    var ok = [];
    /** @type {number} */
    var i = 0;
    for (;i < arguments.length;i++) {
      /** @type {Array} */
      ok = ok.concat(load(arguments[i]));
    }
    return ok;
  }
  /**
   * @param {number} not
   * @return {?}
   */
  function filter(not) {
    return not ? (not ^ 16 * Math.random() >> not / 4).toString(10) : ([1E7] + -1E3 + -4E3 + -8E3 + -1E11).replace(/[018]/g, filter);
  }
  /**
   * @param {number} data
   * @param {?} opts
   * @return {?}
   */
  function template(data, opts) {
    var timeout = opts.timeout;
    return new Promise(function(success, callback) {
      /** @type {XMLHttpRequest} */
      var request = new XMLHttpRequest;
      request.open("GET", data);
      /** @type {boolean} */
      request.withCredentials = false;
      /**
       * @return {undefined}
       */
      request.onreadystatechange = function() {
        if (request && (4 === request.readyState && (0 !== request.status || request.responseURL && 0 === request.responseURL.indexOf("file:")))) {
          var response = {
            data : JSON.parse(request.responseText),
            status : request.status,
            statusText : request.statusText,
            request : request
          };
          if (request.status >= 200 && request.status < 300) {
            success(response);
          } else {
            callback(new Message("Request failed with status code " + response.status, data, null, response.request, response));
          }
          /** @type {null} */
          request = null;
        }
      };
      /**
       * @return {undefined}
       */
      request.onerror = function() {
        callback(new Message("Network Error", data, null, request));
        /** @type {null} */
        request = null;
      };
      request.timeout = timeout;
      /**
       * @return {undefined}
       */
      request.ontimeout = function() {
        callback(new Message("timeout of " + timeout + "ms exceeded", data, "ECONNABORTED", request));
        /** @type {null} */
        request = null;
      };
      request.send();
    });
  }
  /**
   * @param {Function} tests
   * @param {Function} collection
   * @return {?}
   */
  var fn = function(tests, collection) {
    return(fn = Object.setPrototypeOf || ({
      __proto__ : []
    } instanceof Array && function(object, callback) {
      /** @type {Object} */
      object.__proto__ = callback;
    } || function(object, iterable) {
      var key;
      for (key in iterable) {
        if (iterable.hasOwnProperty(key)) {
          object[key] = iterable[key];
        }
      }
    }))(tests, collection);
  };
  /**
   * @param {Function} methodName
   * @param {Function} collection
   * @return {?}
   */
  var invoke = function(methodName, collection) {
    return(invoke = Object.setPrototypeOf || ({
      __proto__ : []
    } instanceof Array && function(object, callback) {
      /** @type {Object} */
      object.__proto__ = callback;
    } || function(object, iterable) {
      var key;
      for (key in iterable) {
        if (iterable.hasOwnProperty(key)) {
          object[key] = iterable[key];
        }
      }
    }))(methodName, collection);
  };
  /**
   * @return {?}
   */
  var registerDefaultHelpers = function() {
    return(registerDefaultHelpers = Object.assign || function(expectedHashCode) {
      var c;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argLength = arguments.length;
      for (;i < argLength;i++) {
        var e;
        for (e in c = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(c, e)) {
            expectedHashCode[e] = c[e];
          }
        }
      }
      return expectedHashCode;
    }).apply(this, arguments);
  };
  var Feature = function(_super) {
    /**
     * @param {number} code
     * @param {string} error
     * @param {?} status
     * @return {?}
     */
    function error(code, error, status) {
      var err = _super.call(this, error) || this;
      return err.code = code, err.message = error, err.originError = status, err.name = "StarlingError", err.code = code, err.message = error, err.originError = status, Error.captureStackTrace && Error.captureStackTrace(err, err.constructor), err;
    }
    return function(func, expectedHashCode) {
      /**
       * @return {undefined}
       */
      function __() {
        /** @type {function (number, string, ?): ?} */
        this.constructor = func;
      }
      invoke(func, expectedHashCode);
      func.prototype = null === expectedHashCode ? Object.create(expectedHashCode) : (__.prototype = expectedHashCode.prototype, new __);
    }(error, _super), error;
  }(Error);
  var elem = {
    CHECK_VERSION_ERROR : {
      ERROR_CODE : 100,
      ERROR_MESSAGE : "Request for checkVersion failed!"
    },
    LOAD_TEXT_ERROR : {
      ERROR_CODE : 101,
      ERROR_MESSAGE : "Request for loadText failed!"
    },
    TEST_ERROR : {
      ERROR_CODE : 102,
      ERROR_MESSAGE : "Request for loadTestText failed!"
    },
    API_PARAMS_ERROR : {
      ERROR_CODE : 103,
      ERROR_MESSAGE : "Request failed, confirm your apiKey and namespace is correct"
    },
    PARAMS_ERROR : {
      ERROR_CODE : 110,
      ERROR_MESSAGE : "Check your params, parameter apiKey, namespace and zoneHost is required!"
    },
    PARAMS_ERROR_2 : {
      ERROR_CODE : 111,
      ERROR_MESSAGE : "Check your params, parameter request and store is required!"
    },
    CACHE_ERROR : {
      ERROR_CODE : 112,
      ERROR_MESSAGE : "Cache error!"
    },
    OTHER_ERROR : {
      ERROR_CODE : 200,
      ERROR_MESSAGE : "Something Wrong!"
    }
  };
  var cDigit = {
    zone : "CN",
    locale : "zh",
    timeout : 5E3,
    test : false,
    mode : "normal",
    format : "merged",
    lazyUpdate : false,
    fallbackLang : ["zh"],
    /**
     * @return {undefined}
     */
    tracker : function() {
    }
  };
  var StackGraph = function() {
    /**
     * @param {?} options
     * @return {undefined}
     */
    function Client(options) {
      this.options = options;
      this.options = options;
    }
    return Client.prototype.getText = function(elems, url) {
      return next(this, void 0, void 0, function() {
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return[4, this._request(elems, url)];
            case 1:
              return[2, stream.sent()];
          }
        });
      });
    }, Client.prototype.getTexts = function(paths) {
      var Y_DOM = this;
      return Promise.all(paths.map(function(contents) {
        var node = contents[0];
        var content = contents[1];
        return Y_DOM.getText(node, content);
      }));
    }, Client.prototype._request = function(callback, value) {
      return next(this, void 0, void 0, function() {
        var result;
        var opts;
        var paths;
        var timeout;
        var obj;
        var node;
        var parent;
        var item;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return result = this.getUrl(callback, value), opts = this.options, paths = opts.request, timeout = opts.timeout, [4, paths(result, {
                timeout : timeout
              })];
            case 1:
              if (200 == +(obj = stream.sent()).data.status) {
                return[2, this._mapResponse(obj.data.message)];
              }
              throw node = elem.API_PARAMS_ERROR, parent = node.ERROR_CODE, item = node.ERROR_MESSAGE, new Feature(parent, item);;
          }
        });
      });
    }, Client.prototype.getUrl = function(id, r) {
      var opts = this.options;
      var username = opts.apiKey;
      var key = opts.locale;
      var caseSensitive = opts.fallbackLang;
      /** @type {string} */
      var a = opts.zoneHost + "/check_and_get_text/" + username + "/" + opts.mode + "/" + id + "?lang=" + [key].concat(caseSensitive);
      return r && (a += "&version=" + r), a;
    }, Client.prototype._mapResponse = function(object) {
      return object ? Object.keys(object).reduce(function(old, name) {
        return old[name.toLowerCase()] = object[name], old;
      }, {}) : {};
    }, Client;
  }();
  var CustomEvent = function() {
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function Element(options) {
      /** @type {Object} */
      this.options = options;
      /** @type {Object} */
      this.options = options;
    }
    return Element.prototype._setCache = function(storageKey, pdataOld) {
      try {
        return this.options.store.set(storageKey, pdataOld);
      } catch (e) {
        /** @type {number} */
        var code = elem.CACHE_ERROR.ERROR_CODE;
        return void this.options.tracker("cache_error", {
          code : code,
          message : e.message,
          stack : e.stack
        });
      }
    }, Element.prototype._getCache = function(storageKey) {
      try {
        return this.options.store.get(storageKey);
      } catch (e) {
        /** @type {number} */
        var code = elem.CACHE_ERROR.ERROR_CODE;
        return void this.options.tracker("cache_error", {
          code : code,
          message : e.message,
          stack : e.stack
        });
      }
    }, Element.prototype.getVersion = function(deepDataAndEvents) {
      var opts = this.options;
      var timeout = opts.apiKey;
      var l = opts.locale;
      return this._getCache("version." + timeout + "." + deepDataAndEvents + "." + l);
    }, Element.prototype.getVersions = function(keepData) {
      var model = this;
      return Promise.all(keepData.map(function(deepDataAndEvents) {
        return model.getVersion(deepDataAndEvents);
      }));
    }, Element.prototype.getText = function(dataAndEvents) {
      var options = this.options;
      var async = options.apiKey;
      var locale = options.locale;
      return this._getCache("text." + async + "." + dataAndEvents + "." + locale);
    }, Element.prototype.getTexts = function(paths) {
      var range = this;
      return Promise.all(paths.map(function(node) {
        return range.getText(node);
      }));
    }, Element.prototype.refresh = function(values, self, obj, size) {
      return next(this, void 0, void 0, function() {
        var apiKey;
        var annotationPromises;
        var fun = this;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return apiKey = this.options.apiKey, annotationPromises = [], self.forEach(function(dataAndEvents, i) {
                annotationPromises.push(fun._setCache("text." + apiKey + "." + values[i] + "." + size[i], self[i]));
                annotationPromises.push(fun._setCache("version." + apiKey + "." + values[i] + "." + size[i], obj[i]));
              }), [4, Promise.all(annotationPromises)];
            case 1:
              return stream.sent(), [2, self.reduce(function(expectedHashCode, _123f) {
                return Object.assign(expectedHashCode, _123f);
              }, {})];
          }
        });
      });
    }, Element;
  }();
  var Tooltip = function() {
    /**
     * @param {Array} models
     * @return {undefined}
     */
    function Collection(models) {
      if (void 0 === models) {
        /** @type {Array} */
        models = [];
      }
      /** @type {Array} */
      this._list = [];
      /** @type {Array} */
      this._list = models;
    }
    return Object.defineProperty(Collection.prototype, "length", {
      /**
       * @return {?}
       */
      get : function() {
        return this._list.length;
      },
      enumerable : false,
      configurable : true
    }), Collection.prototype.getList = function() {
      return this._list;
    }, Collection.prototype.getNamespaces = function() {
      return this._list.map(function(Y) {
        return Y.namespace;
      });
    }, Collection.prototype.addNamespace = function(value) {
      this._list.push(value);
    }, Collection.prototype.insertTexts = function(result) {
      this._list.forEach(function(o, key) {
        o.texts = result[key];
      });
    }, Collection.prototype.sortByPrior = function() {
      return this._list.sort(function(a, b) {
        return a.prior - b.prior;
      }), this._list;
    }, Collection.prototype.concat = function(var_args) {
      return new Collection(this._list.concat(var_args.getList()));
    }, Collection;
  }();
  var Dygraph = function() {
    /**
     * @param {string} contentHTML
     * @param {boolean} contentSize
     * @param {?} options
     * @return {undefined}
     */
    function initialize(contentHTML, contentSize, options) {
      this._promiseRefresh = Promise.resolve(null);
      /** @type {string} */
      this.remote = contentHTML;
      /** @type {boolean} */
      this.local = contentSize;
      this.options = options;
    }
    return initialize.prototype._checkVersions = function(key) {
      return next(this, void 0, void 0, function() {
        var lang;
        var old;
        var paths;
        var source;
        var Strophe;
        var api;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return lang = this.options.locale, [4, this.local.getVersions(key)];
            case 1:
              return old = stream.sent(), paths = key.map(function(dataAndEvents, name) {
                return[dataAndEvents, old[name]];
              }), [4, this.remote.getTexts(paths)];
            case 2:
              return source = stream.sent(), Strophe = new Tooltip, api = new Tooltip, key.forEach(function(namespace, name) {
                var d = source[name];
                var de = d.updated;
                var v = d.version;
                var input = d.data;
                var l = d.lang;
                if (de) {
                  api.addNamespace({
                    namespace : namespace,
                    prior : name,
                    version : v,
                    texts : input,
                    lang : l
                  });
                } else {
                  Strophe.addNamespace({
                    namespace : namespace,
                    prior : name,
                    version : old[name],
                    lang : lang
                  });
                }
              }), [2, {
                equalNs : Strophe,
                diffNs : api
              }];
          }
        });
      });
    }, initialize.prototype.waitForRefresh = function() {
      return this._promiseRefresh;
    }, initialize.prototype._refresh = function(keepData) {
      var asserterNames = keepData.getList();
      /** @type {Array} */
      var progressValues = [];
      /** @type {Array} */
      var out = [];
      /** @type {Array} */
      var callback = [];
      /** @type {Array} */
      var Y = [];
      return asserterNames.forEach(function(options) {
        progressValues.push(options.namespace);
        out.push(options.version);
        callback.push(options.texts);
        Y.push(options.lang);
      }), this.local.refresh(progressValues, callback, out, Y);
    }, initialize.prototype._getLocalTexts = function(v00) {
      return next(this, void 0, void 0, function() {
        var expectationResult;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return[4, this.local.getTexts(v00.getNamespaces())];
            case 1:
              return expectationResult = stream.sent(), v00.insertTexts(expectationResult), [2, expectationResult];
          }
        });
      });
    }, initialize.prototype.load = function(name) {
      return next(this, void 0, void 0, function() {
        var value;
        var event;
        var x;
        var key;
        var isFunction;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return value = this.options.format, [4, this._checkVersions(name)];
            case 1:
              return event = stream.sent(), x = event.equalNs, key = event.diffNs, x.length ? [4, this._getLocalTexts(x)] : [3, 3];
            case 2:
              return stream.sent(), [3, 4];
            case 3:
              [];
              /** @type {number} */
              stream.label = 4;
            case 4:
              return isFunction = this._formatTexts(value, key.concat(x)), key.length ? [4, this._refresh(key)] : [3, 6];
            case 5:
              stream.sent();
              /** @type {number} */
              stream.label = 6;
            case 6:
              return[2, {
                texts : isFunction,
                diffNs : key.getNamespaces(),
                equalNs : x.getNamespaces()
              }];
          }
        });
      });
    }, initialize.prototype.lazyLoad = function(name) {
      return next(this, void 0, void 0, function() {
        var opt;
        var val;
        var suiteView;
        var mod;
        var prevSources;
        var tooltip;
        var camelKey;
        var data;
        var is_defun;
        var options;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return opt = this.options, val = opt.locale, suiteView = opt.format, [4, this.local.getTexts(name)];
            case 1:
              return mod = stream.sent(), [4, this.local.getVersions(name)];
            case 2:
              return prevSources = stream.sent(), tooltip = mod.map(function(dataAndEvents, i) {
                if (dataAndEvents) {
                  return{
                    namespace : name[i],
                    version : prevSources[i],
                    lang : val,
                    texts : dataAndEvents
                  };
                }
              }).filter(function(dataAndEvents) {
                return!!dataAndEvents;
              }), camelKey = new Tooltip(tooltip), data = this._formatTexts(suiteView, camelKey), is_defun = 0 === Object.keys(data).length, this._promiseRefresh = this.load(name), is_defun ? [4, this._promiseRefresh] : [3, 4];
            case 3:
              options = stream.sent();
              data = options.texts;
              /** @type {number} */
              stream.label = 4;
            case 4:
              return[2, {
                texts : data,
                diffNs : is_defun ? options && options.diffNs : [],
                equalNs : is_defun ? options && options.equalNs : name
              }];
          }
        });
      });
    }, initialize.prototype._formatTexts = function(obj, value) {
      if ("splitted" === obj) {
        return value.getList().reduce(function(results, data) {
          var index = data.namespace;
          var lang = data.lang;
          var t = data.texts;
          var version = data.version;
          return results[index] = {
            lang : lang,
            texts : t,
            version : version
          }, results;
        }, {});
      }
      var r;
      var p;
      var tmp = value.sortByPrior().map(function(widget) {
        return widget.texts;
      });
      return r = tmp, (p ? r.concat(p) : r).reduce(function(expectedHashCode, _123f) {
        return Object.assign(expectedHashCode, _123f);
      }, {});
    }, initialize;
  }();
  /** @type {string} */
  var rreturn = "client_exception";
  /** @type {string} */
  var r20 = "client_load";
  /** @type {string} */
  var rclass = "client_cache";
  /** @type {string} */
  var trimRight = "client_load_time";
  var fragments = function() {
    /**
     * @param {?} options
     * @return {undefined}
     */
    function $(options) {
      this.setConfig(options);
    }
    return $.prototype._init = function(options) {
      var elem = this;
      this.options = function(attributes) {
        var tags = (attributes = Object.assign({}, cDigit, attributes)).namespace;
        var group = attributes.apiKey;
        var request = attributes.request;
        var i = attributes.store;
        var attsLength = attributes.zoneHost;
        if (attributes.test && (attributes.mode = "test"), attributes.namespace = tags = tags ? Array.isArray(tags) ? tags : [tags] : [], attributes.apiKey = group = group || attributes.api_key, !request || !i) {
          var result = elem.PARAMS_ERROR_2;
          /** @type {number} */
          var error = result.ERROR_CODE;
          /** @type {string} */
          var item = result.ERROR_MESSAGE;
          throw new Feature(error, item, null);
        }
        if (!group || (!tags.length || !attsLength)) {
          var options = elem.PARAMS_ERROR;
          /** @type {number} */
          error = options.ERROR_CODE;
          /** @type {string} */
          item = options.ERROR_MESSAGE;
          throw new Feature(error, item, null);
        }
        return attributes;
      }(options);
      var opts = this.options;
      var key = opts.apiKey;
      var locale = opts.locale;
      var timeout = opts.zoneHost;
      var request = opts.request;
      var success = opts.timeout;
      var silent = opts.fallbackLang;
      var store = opts.store;
      var run = opts.lazyUpdate;
      var fn = opts.test;
      var mode = opts.mode;
      var format = opts.format;
      var cDigit = {
        mode : run ? "lazy" : fn ? "test" : "prod",
        zone : timeout,
        locale : locale,
        apiKey : key
      };
      /**
       * @param {string} regex
       * @param {?} cur
       * @return {undefined}
       */
      this._tracker = function(regex, cur) {
        elem.options.tracker(regex, registerDefaultHelpers(registerDefaultHelpers({}, cDigit), cur));
      };
      var graph = new StackGraph({
        request : request,
        timeout : success,
        apiKey : key,
        locale : locale,
        zoneHost : timeout,
        fallbackLang : silent,
        mode : mode
      });
      var event = new CustomEvent({
        apiKey : key,
        locale : locale,
        store : store,
        /** @type {function (string, ?): undefined} */
        tracker : this._tracker
      });
      this._textManager = new Dygraph(graph, event, {
        locale : locale,
        format : format
      });
    }, $.prototype.setConfig = function(attributes) {
      var options = Object.assign({}, this.options, attributes);
      this._init(options);
    }, $.prototype.waitForRefresh = function() {
      return next(this, void 0, void 0, function() {
        var options;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return[4, this._textManager.waitForRefresh()];
            case 1:
              return[2, (options = stream.sent()) ? options.texts : null];
          }
        });
      });
    }, $.prototype._load = function() {
      return next(this, void 0, void 0, function() {
        var opts;
        var currentNamespace;
        var idKey;
        var nonStripName;
        var i;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              return opts = this.options, currentNamespace = opts.namespace, idKey = opts.lazyUpdate, nonStripName = currentNamespace, idKey ? [4, this._textManager.lazyLoad(nonStripName)] : [3, 2];
            case 1:
              return i = stream.sent(), [3, 4];
            case 2:
              return[4, this._textManager.load(nonStripName)];
            case 3:
              i = stream.sent();
              /** @type {number} */
              stream.label = 4;
            case 4:
              return[2, i];
          }
        });
      });
    }, $.prototype.load = function(name, callback) {
      return next(this, void 0, void 0, function() {
        var start;
        var _ref;
        var me;
        var re;
        var src;
        var line;
        var _len;
        var len;
        var steps;
        var ratio;
        var e;
        return callback(this, function(stream) {
          switch(stream.label) {
            case 0:
              /** @type {number} */
              start = Date.now();
              this._tracker(r20, {
                state : "start",
                version : "0.4.1"
              });
              _ref = this.options.namespace;
              /** @type {number} */
              stream.label = 1;
            case 1:
              return stream.trys.push([1, 3, , 4]), [4, this._load()];
            case 2:
              return me = stream.sent(), re = me.texts, src = me.diffNs, line = me.equalNs, name && name(re), this._tracker(trimRight, {
                time : Date.now() - start
              }), this._tracker(r20, {
                state : "success",
                version : "0.4.1"
              }), _len = src.length, len = line.length, steps = _ref.length, ratio = (len / steps).toFixed(2), this._tracker(rclass, {
                diffLen : _len,
                diff : src.join(","),
                equalLen : len,
                equal : line.join(","),
                namespaces : line.join(","),
                namespacesLen : steps,
                ratio : ratio
              }), [2, re];
            case 3:
              throw e = stream.sent(), this._tracker(r20, {
                state : "fail"
              }), this._tracker(rreturn, {
                code : e.code,
                message : e.message,
                stack : e.stack
              }), callback && callback(e), e;;
            case 4:
              return[2];
          }
        });
      });
    }, $;
  }();
  /**
   * @return {?}
   */
  var cb = function() {
    return(cb = Object.assign || function(expectedHashCode) {
      var old;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argLength = arguments.length;
      for (;i < argLength;i++) {
        var name;
        for (name in old = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(old, name)) {
            expectedHashCode[name] = old[name];
          }
        }
      }
      return expectedHashCode;
    }).apply(this, arguments);
  };
  /**
   * @param {boolean} recurring
   * @param {string} execResult
   * @return {?}
   */
  var parse = function(recurring, execResult) {
    /**
     * @param {RegExp} res
     * @param {string} type
     * @return {?}
     */
    function compress(res, type) {
      var match = res.exec(type);
      return match && match[1] ? match[1] : "";
    }
    var versionOffset;
    var n;
    /**
     * @param {string} name
     * @return {?}
     */
    var fn = function(name) {
      /** @type {Element} */
      var hash = document.createElement("a");
      return hash.href = name, hash;
    };
    /** @type {number} */
    var originalWidth_ = window.screen.width;
    /** @type {number} */
    var oldHeight = window.screen.height;
    /** @type {string} */
    var prop = window.navigator.appVersion;
    /** @type {string} */
    var userAgent = window.navigator.userAgent;
    /** @type {string} */
    var language = window.navigator.language;
    /** @type {string} */
    var view = document.referrer;
    var ret = view ? fn(view).hostname : "";
    var utm_source = function(view) {
      var querystring = fn(view).search;
      querystring = querystring.slice(1);
      var acc = {};
      return querystring.split("&").forEach(function(pair) {
        var key;
        var value;
        var path = pair.split("=");
        if (path.length) {
          key = path[0];
          value = path[1];
        }
        if (value) {
          value = value.replace(/\%/g, "%25");
        }
        /** @type {string} */
        acc[key] = decodeURIComponent(void 0 === value ? "" : value);
      }), acc;
    }(window.location.href);
    /** @type {string} */
    var os = "";
    /** @type {string} */
    var style = "";
    /** @type {string} */
    var browser = "";
    /** @type {string} */
    var source = "" + parseFloat(prop);
    if (-1 !== (versionOffset = userAgent.indexOf("Opera"))) {
      /** @type {string} */
      browser = "Opera";
      /** @type {string} */
      source = userAgent.substring(versionOffset + 6);
      if (-1 !== (versionOffset = userAgent.indexOf("Version"))) {
        /** @type {string} */
        source = userAgent.substring(versionOffset + 8);
      }
    }
    if (-1 !== (versionOffset = userAgent.indexOf("Edge"))) {
      /** @type {string} */
      browser = "Microsoft Edge";
      /** @type {string} */
      source = userAgent.substring(versionOffset + 5);
    } else {
      if (-1 !== (versionOffset = userAgent.indexOf("MSIE"))) {
        /** @type {string} */
        browser = "Microsoft Internet Explorer";
        /** @type {string} */
        source = userAgent.substring(versionOffset + 5);
      } else {
        if (-1 !== userAgent.indexOf("Chrome")) {
          if (-1 !== (versionOffset = userAgent.indexOf("MicroMessenger"))) {
            /** @type {string} */
            browser = "weixin";
            /** @type {string} */
            source = userAgent.substring(versionOffset + 15, versionOffset + 20);
          } else {
            if (-1 !== (versionOffset = userAgent.indexOf("MQQBrowser"))) {
              /** @type {string} */
              browser = "qqbrowser";
              /** @type {string} */
              source = userAgent.substring(versionOffset + 11, versionOffset + 15);
            } else {
              if (-1 !== (versionOffset = userAgent.indexOf("Chrome"))) {
                /** @type {string} */
                browser = "Chrome";
                /** @type {string} */
                source = userAgent.substring(versionOffset + 7);
              }
            }
          }
        } else {
          if (-1 !== userAgent.indexOf("Safari")) {
            if (-1 !== (versionOffset = userAgent.indexOf("QQ"))) {
              /** @type {string} */
              browser = "qqbrowser";
              /** @type {string} */
              source = userAgent.substring(versionOffset + 10, versionOffset + 16);
            } else {
              if (-1 !== (versionOffset = userAgent.indexOf("Safari"))) {
                /** @type {string} */
                browser = "Safari";
                /** @type {string} */
                source = userAgent.substring(versionOffset + 7);
                if (-1 !== (versionOffset = userAgent.indexOf("Version"))) {
                  /** @type {string} */
                  source = userAgent.substring(versionOffset + 8);
                }
              }
            }
          } else {
            if (-1 !== (versionOffset = userAgent.indexOf("Firefox"))) {
              /** @type {string} */
              browser = "Firefox";
              /** @type {string} */
              source = userAgent.substring(versionOffset + 8);
            } else {
              if (-1 !== (versionOffset = userAgent.indexOf("MicroMessenger"))) {
                /** @type {string} */
                browser = "weixin";
                /** @type {string} */
                source = userAgent.substring(versionOffset + 15, versionOffset + 20);
              } else {
                if (-1 !== (versionOffset = userAgent.indexOf("QQ"))) {
                  /** @type {string} */
                  browser = "qqbrowser";
                  /** @type {string} */
                  source = userAgent.substring(versionOffset + 3, versionOffset + 8);
                }
              }
            }
          }
        }
      }
    }
    if (-1 !== (n = source.indexOf(";"))) {
      /** @type {string} */
      source = source.substring(0, n);
    }
    if (-1 !== (n = source.indexOf(" "))) {
      /** @type {string} */
      source = source.substring(0, n);
    }
    if (-1 !== (n = source.indexOf(")"))) {
      /** @type {string} */
      source = source.substring(0, n);
    }
    var list;
    var index;
    /** @type {string} */
    var platform = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(prop) ? "wap" : "web";
    /** @type {Array} */
    var codeSegments = [{
      s : "Windows 10",
      r : /(Windows 10.0|Windows NT 10.0)/
    }, {
      s : "Windows 8.1",
      r : /(Windows 8.1|Windows NT 6.3)/
    }, {
      s : "Windows 8",
      r : /(Windows 8|Windows NT 6.2)/
    }, {
      s : "Windows 7",
      r : /(Windows 7|Windows NT 6.1)/
    }, {
      s : "Android",
      r : /Android/
    }, {
      s : "Sun OS",
      r : /SunOS/
    }, {
      s : "Linux",
      r : /(Linux|X11)/
    }, {
      s : "iOS",
      r : /(iPhone|iPad|iPod)/
    }, {
      s : "Mac OS X",
      r : /Mac OS X/
    }, {
      s : "Mac OS",
      r : /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var data = codeSegments[i];
      if (data.r.test(userAgent)) {
        os = data.s;
        break;
      }
    }
    switch(/Windows/.test(os) && (style = compress(/Windows (.*)/, os), os = "windows"), os) {
      case "Mac OS X":
        style = compress(/Mac OS X (10[\.\_\d]+)/, userAgent);
        /** @type {string} */
        os = "mac";
        break;
      case "Android":
        if (!(index = compress(/Android ([\.\_\d]+)/, list = userAgent))) {
          index = compress(/Android\/([\.\_\d]+)/, list);
        }
        style = index;
        /** @type {string} */
        os = "android";
        break;
      case "iOS":
        /** @type {string} */
        style = (style = /OS (\d+)_(\d+)_?(\d+)?/.exec(prop)) ? style[1] + "." + style[2] + "." + (0 | style[3]) : "";
        /** @type {string} */
        os = "ios";
    }
    var utm_medium = recurring ? function() {
      /** @type {string} */
      var storageKey = execResult ? "_tea_utm_cache_" + execResult : "_tea_utm_cache";
      var a = {};
      var b = {
        utm_source : utm_source.utm_source,
        utm_medium : utm_source.utm_medium,
        utm_campaign : utm_source.utm_campaign,
        utm_term : utm_source.utm_term,
        utm_content : utm_source.utm_content
      };
      try {
        /** @type {(Storage|null)} */
        var storage = window.sessionStorage;
        /** @type {boolean} */
        var o = false;
        var prop;
        for (prop in b) {
          if (b[prop]) {
            a[prop] = b[prop];
            /** @type {boolean} */
            o = true;
          }
        }
        if (o) {
          storage.setItem(storageKey, JSON.stringify(a));
        } else {
          /** @type {(null|string)} */
          var value = storage.getItem(storageKey);
          if (value) {
            /** @type {*} */
            a = JSON.parse(value);
          }
        }
      } catch (e) {
        return b;
      }
      return a;
    }() : {};
    return{
      browser : browser,
      browser_version : source,
      platform : platform,
      os_name : os,
      os_version : style,
      userAgent : userAgent,
      screen_width : originalWidth_,
      screen_height : oldHeight,
      device_model : function(type) {
        /** @type {string} */
        var p = "";
        try {
          if ("android" === type) {
            navigator.userAgent.split(";").forEach(function(xs) {
              if (xs.indexOf("Build/") > -1) {
                /** @type {string} */
                p = xs.slice(0, xs.indexOf("Build/"));
              }
            });
          } else {
            if ("ios" === type || "mac" === type) {
              /** @type {string} */
              var attr = navigator.userAgent.replace("Mozilla/5.0 (", "");
              /** @type {number} */
              var num = attr.indexOf(";");
              /** @type {string} */
              p = attr.slice(0, num);
            }
          }
        } catch (e) {
        }
        return p.trim();
      }(os),
      language : language,
      referrer : view,
      referrer_host : ret,
      utm_source : utm_medium.utm_source,
      utm_medium : utm_medium.utm_medium,
      utm_campaign : utm_medium.utm_campaign,
      utm_term : utm_medium.utm_term,
      utm_content : utm_medium.utm_content,
      isSupportBeacon : ("ios" !== os || "safari" !== browser) && (!(!window.navigator || !window.navigator.sendBeacon) || void 0)
    };
  };
  var res = function(next, module) {
    return next(module = {
      exports : {}
    }, module.exports), module.exports;
  }(function(module, dataAndEvents) {
    var factory;
    /**
     * @return {?}
     */
    factory = function() {
      /**
       * @return {?}
       */
      function merge() {
        /** @type {number} */
        var i = 0;
        var object = {};
        for (;i < arguments.length;i++) {
          var iterable = arguments[i];
          var key;
          for (key in iterable) {
            object[key] = iterable[key];
          }
        }
        return object;
      }
      /**
       * @param {string} name
       * @return {?}
       */
      function parse(name) {
        return name.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function init(input) {
        /**
         * @return {undefined}
         */
        function self() {
        }
        /**
         * @param {string} key
         * @param {string} value
         * @param {Object} options
         * @return {?}
         */
        function set(key, value, options) {
          if ("undefined" != typeof document) {
            if ("number" == typeof(options = merge({
              path : "/"
            }, self.defaults, options)).expires) {
              /** @type {Date} */
              options.expires = new Date(1 * new Date + 864E5 * options.expires);
            }
            options.expires = options.expires ? options.expires.toUTCString() : "";
            try {
              /** @type {string} */
              var newValue = JSON.stringify(value);
              if (/^[\{\[]/.test(newValue)) {
                /** @type {string} */
                value = newValue;
              }
            } catch (e) {
            }
            value = input.write ? input.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            /** @type {string} */
            key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            /** @type {string} */
            var path = "";
            var arg;
            for (arg in options) {
              if (options[arg]) {
                path += "; " + arg;
                if (true !== options[arg]) {
                  path += "=" + options[arg].split(";")[0];
                }
              }
            }
            return document.cookie = key + "=" + value + path;
          }
        }
        /**
         * @param {?} key
         * @param {boolean} recurring
         * @return {?}
         */
        function get(key, recurring) {
          if ("undefined" != typeof document) {
            var obj = {};
            /** @type {Array} */
            var codeSegments = document.cookie ? document.cookie.split("; ") : [];
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              var str = codeSegments[i].split("=");
              var v = str.slice(1).join("=");
              if (!recurring) {
                if (!('"' !== v.charAt(0))) {
                  v = v.slice(1, -1);
                }
              }
              try {
                var h = parse(str[0]);
                if (v = (input.read || input)(v, h) || parse(v), recurring) {
                  try {
                    /** @type {*} */
                    v = JSON.parse(v);
                  } catch (e) {
                  }
                }
                if (obj[h] = v, key === h) {
                  break;
                }
              } catch (e) {
              }
            }
            return key ? obj[key] : obj;
          }
        }
        return self.set = set, self.get = function(key) {
          return get(key, false);
        }, self.getJSON = function(url) {
          return get(url, true);
        }, self.remove = function(storageKey, options) {
          set(storageKey, "", merge(options, {
            expires : -1
          }));
        }, self.defaults = {}, self.withConverter = init, self;
      }(function() {
      });
    };
    module.exports = factory();
  });
  var jCanvasObject = function() {
    /**
     * @return {undefined}
     */
    function self() {
      this.cache = {};
    }
    return self.prototype.setItem = function(key, data) {
      /** @type {string} */
      this.cache[key] = data;
    }, self.prototype.getItem = function(key) {
      return this.cache[key];
    }, self.prototype.removeItem = function(key) {
      this.cache[key] = void 0;
    }, self;
  }();
  var store = {
    /**
     * @param {string} key
     * @return {?}
     */
    getItem : function(key) {
      try {
        var value = localStorage.getItem(key);
        var encodedValue = value;
        try {
          if (value) {
            if ("string" == typeof value) {
              /** @type {*} */
              encodedValue = JSON.parse(value);
            }
          }
        } catch (e) {
        }
        return encodedValue || void 0;
      } catch (e) {
      }
    },
    /**
     * @param {string} key
     * @param {string} data
     * @return {undefined}
     */
    setItem : function(key, data) {
      try {
        /** @type {string} */
        var pdataCur = "string" == typeof data ? data : JSON.stringify(data);
        localStorage.setItem(key, pdataCur);
      } catch (e) {
      }
    },
    /**
     * @param {string} key
     * @return {undefined}
     */
    removeItem : function(key) {
      try {
        localStorage.removeItem(key);
      } catch (e) {
      }
    },
    /**
     * @param {string} deepDataAndEvents
     * @return {?}
     */
    getCookie : function(deepDataAndEvents) {
      try {
        /** @type {(Array.<string>|null)} */
        var namespaceMatch = document.cookie.match(new RegExp("(?:^|;)\\s*" + deepDataAndEvents + "=([^;]+)"));
        /** @type {string} */
        var sign = namespaceMatch ? namespaceMatch[1] : "";
        return decodeURIComponent(sign);
      } catch (e) {
        return "";
      }
    },
    /**
     * @param {string} storageKey
     * @param {string} value
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    setCookie : function(storageKey, value, deepDataAndEvents) {
      try {
        var expires = +new Date + deepDataAndEvents;
        res.set(storageKey, value, {
          expires : new Date(expires),
          path : "/",
          domain : document.domain.split(".").slice(-2).join(".")
        });
      } catch (e) {
      }
    },
    isSupportLS : function() {
      try {
        return localStorage.setItem("_ranger-test-key", "hi"), localStorage.getItem("_ranger-test-key"), localStorage.removeItem("_ranger-test-key"), true;
      } catch (e) {
        return false;
      }
    }()
  };
  var AppRouter = function() {
    /**
     * @param {?} err
     * @return {undefined}
     */
    function self(err) {
      this._storage = !err && store.isSupportLS ? store : new jCanvasObject;
    }
    return self.prototype.getItem = function(key) {
      return this._storage.getItem(key);
    }, self.prototype.setItem = function(key, value) {
      this._storage.setItem(key, value);
    }, self.prototype.getCookie = function(deepDataAndEvents) {
      return this._storage.getCookie(deepDataAndEvents);
    }, self.prototype.setCookie = function(storageKey, value, deepDataAndEvents) {
      this._storage.setCookie(storageKey, value, deepDataAndEvents);
    }, self.prototype.removeItem = function(key) {
      this._storage.removeItem(key);
    }, self;
  }();
  var validators = {
    sg : "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
    va : "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
    in : "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z49z23z21z1cz18z21z22z4ez18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k"
  };
  /** @type {string} */
  var result = "/v1/user/webid";
  /** @type {string} */
  var g = "/v1/list";
  var act = {
    NO_URL : 4001,
    IMG_ON : 4E3,
    IMG_CATCH : 4002,
    BEACON_FALSE : 4003,
    XHR_ON : 500,
    RESPONSE : 5001
  };
  /**
   * @param {string} err
   * @param {boolean} recurring
   * @return {?}
   */
  var _error = function(err, recurring) {
    return recurring ? "__tea_cache_tokens_" + err : "__tea_cache_events_" + err;
  };
  /**
   * @param {string} s
   * @param {Array} srcFiles
   * @param {Function} onSuccess
   * @param {Function} cb
   * @return {?}
   */
  var loadScript = function(s, srcFiles, onSuccess, cb) {
    try {
      var slashSplit;
      var horizontalOffset = s.match(/\/v\d\//);
      slashSplit = horizontalOffset ? horizontalOffset[0] : -1 !== s.indexOf("/v1/") ? "/v1/" : "/v2/";
      var host = s.split(slashSplit)[0];
      if (!host) {
        return void cb(s, srcFiles, act.NO_URL);
      }
      srcFiles.forEach(function(srcFiles) {
        var port = function(files) {
          /** @type {string} */
          var querystring = "";
          var fileName;
          for (fileName in files) {
            if (files.hasOwnProperty(fileName)) {
              if (void 0 !== files[fileName]) {
                querystring += "&" + fileName + "=" + encodeURIComponent(JSON.stringify(files[fileName]));
              }
            }
          }
          return "&" === querystring[0] ? querystring.slice(1) : querystring;
        }(srcFiles);
        /** @type {Image} */
        var img = new Image(1, 1);
        /**
         * @return {undefined}
         */
        img.onload = function() {
          /** @type {null} */
          img = null;
          if (onSuccess) {
            onSuccess();
          }
        };
        /**
         * @return {undefined}
         */
        img.onerror = function() {
          /** @type {null} */
          img = null;
          if (cb) {
            cb(s, srcFiles, act.IMG_ON);
          }
        };
        /** @type {string} */
        img.src = host + "/v1/gif?" + port;
      });
    } catch (result) {
      if (cb) {
        cb(s, srcFiles, act.IMG_CATCH, result.message);
      }
    }
  };
  /**
   * @param {string} el
   * @param {?} srcFiles
   * @param {?} re
   * @param {Function} callback
   * @param {Function} cb
   * @param {boolean} recurring
   * @param {boolean} deepDataAndEvents
   * @param {Object} func
   * @return {?}
   */
  var onload = function(el, srcFiles, re, callback, cb, recurring, deepDataAndEvents, func) {
    /** @type {string} */
    var userAgent = window.navigator.userAgent;
    /** @type {boolean} */
    var a = -1 !== window.navigator.appName.indexOf("Microsoft Internet Explorer") && (-1 !== userAgent.indexOf("MSIE 8.0") || -1 !== userAgent.indexOf("MSIE 9.0"));
    /** @type {boolean} */
    var u = !!re;
    if (!u && a) {
      loadScript(el, srcFiles, callback, cb);
    } else {
      if (!u && deepDataAndEvents) {
        return parse(false).isSupportBeacon ? (func && func(), void(window.navigator.sendBeacon(el, JSON.stringify(srcFiles)) ? callback() : cb(el, srcFiles, act.BEACON_FALSE))) : void loadScript(el, srcFiles, callback, cb);
      }
    }
    if (recurring) {
      delete srcFiles.app_key;
    }
    (function(v, files, onSuccess, callback, id, $timeout, opt_method) {
      /** @type {XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      if ($timeout) {
        xhr.timeout = $timeout;
      }
      var method = opt_method || "POST";
      xhr.open(method, "" + v, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      if (id) {
        xhr.setRequestHeader("X-MCS-AppKey", "" + id);
      }
      /**
       * @return {undefined}
       */
      xhr.onload = function() {
        if (onSuccess) {
          /** @type {null} */
          var rs = null;
          if (xhr.responseText) {
            try {
              /** @type {*} */
              rs = JSON.parse(xhr.responseText);
            } catch (t) {
              rs = {};
            }
            onSuccess(rs);
          }
        }
      };
      if ($timeout) {
        /**
         * @return {undefined}
         */
        xhr.ontimeout = function() {
          callback();
        };
      }
      /**
       * @return {undefined}
       */
      xhr.onerror = function() {
        xhr.abort();
        if (callback) {
          callback(files, act.XHR_ON);
        }
      };
      xhr.send(JSON.stringify(files));
    })(el, srcFiles, callback, cb, re);
  };
  /**
   * @return {?}
   */
  var removeClass = function() {
    return filter().replace(/-/g, "").slice(0, 19);
  };
  var F;
  /**
   * @param {string} bytes
   * @return {?}
   */
  var update = function(bytes) {
    return function(bytes, opt_attributes, val) {
      if ("string" == typeof bytes && ("number" == typeof opt_attributes && "number" == typeof val)) {
        var codeSegments;
        /** @type {Array} */
        var out = [];
        /** @type {number} */
        val = val <= 25 ? val : val % 25;
        /** @type {string} */
        var whitespaceRegex = String.fromCharCode(val + 97);
        /** @type {Array.<string>} */
        codeSegments = bytes.split(whitespaceRegex);
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          /** @type {number} */
          var c = parseInt(codeSegments[i], val);
          /** @type {number} */
          c = 1 * c ^ opt_attributes;
          /** @type {string} */
          var copies = String.fromCharCode(c);
          out.push(copies);
        }
        return out.join("");
      }
    }(bytes, 64, 25);
  };
  var FileReceiver = function() {
    /**
     * @param {Object} config
     * @param {Object} cfg
     * @return {undefined}
     */
    function initialize(config, cfg) {
      this.browser = parse(true, config.app_id);
      /** @type {Object} */
      this.config = config;
      /** @type {Object} */
      this.cfg = cfg;
      this.storage = new AppRouter(false);
      this.appInfo = config.app_key || config.app_id;
      this.isNoWebid = config.disable_webid;
      this.isNoSsid = config.disable_webid || config.disable_ssid;
      this.domain = config.channel_domain || update(validators[config.channel]);
      /** @type {boolean} */
      this.tokenReady = false;
      this.checkExp = config.checkExp || false;
      this.enableCookie = config.cross_subdomain || false;
      /** @type {number} */
      this.expiresTime = this.enableCookie ? 94608E6 : 0;
      /** @type {string} */
      this.fetchUrl = "" + this.domain + result;
    }
    return initialize.prototype._getToken = function() {
      this.tokensKey = _error(this.appInfo, true);
      this.cookieKey = function(dataAndEvents) {
        return "__tea_cookie_tokens_" + dataAndEvents;
      }(this.appInfo);
      var name = this.storage.getItem(this.tokensKey);
      if (this.enableCookie) {
        var data = this.storage.getCookie(this.cookieKey);
        if (data) {
          /** @type {string} */
          data = decodeURIComponent(data);
          var r20 = (data = JSON.parse(data)).user_unique_id;
          var uuid = data.web_id;
          var udataCur = data.timestamp;
          var ssid = data.ssid;
          this._setToken(uuid, r20, ssid, udataCur);
        } else {
          if (!name) {
            return void this._requestWebId();
          }
          this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(name)), this.expiresTime);
          this._checkLocal(name);
        }
      } else {
        if (!name) {
          return void this._requestWebId();
        }
        this._checkLocal(name);
      }
    }, initialize.prototype._checkLocal = function(keepData) {
      if (!keepData.web_id) {
        var i = this.storage.getCookie("tt_webid");
        var ssid = this.storage.getCookie("__tea_sdk__ssid");
        var r20 = this.storage.getCookie("__tea_sdk__user_unique_id");
        if (i && (ssid && r20)) {
          var pdataCur = {
            web_id : i,
            ssid : ssid,
            user_unique_id : r20,
            timestamp : Date.now()
          };
          this.storage.setItem(this.tokensKey, pdataCur);
        }
      }
      var self = this.storage.getItem(this.tokensKey);
      var udataCur = (r20 = self.user_unique_id, i = self.web_id, self.timestamp);
      ssid = self.ssid;
      if (i && r20) {
        this._setToken(i, r20, ssid, udataCur);
      } else {
        this._requestWebId();
      }
    }, initialize.prototype._setToken = function(uuid, regex, ssid, value) {
      if (this.uuid = regex, this.web_id = uuid, this.ssid = ssid, this.checkExp) {
        /** @type {number} */
        var i = Date.now() - parseFloat(value);
        if (i > 7344E6) {
          return void this._requestWebId();
        }
        if (i > 432E7) {
          return void this._updateWebId(uuid);
        }
      }
      this._complete(uuid, regex, ssid);
    }, initialize.prototype._complete = function(value, o, id) {
      this.cfg.envInfo.user.ssid = id;
      this.cfg.envInfo.user.web_id = value;
      this.cfg.envInfo.user.user_unique_id = o;
      /** @type {boolean} */
      this.tokenReady = true;
    }, initialize.prototype._requestWebId = function() {
      if (this.isNoWebid) {
        this._setwebId({
          web_id : removeClass(),
          ssid : ""
        });
      } else {
        this._fetchWebId(this.fetchUrl, false);
      }
    }, initialize.prototype._updateWebId = function(uuid) {
      /** @type {string} */
      var failuresLink = "" + this.domain + result + "/" + uuid + "/update";
      this._fetchWebId(failuresLink, true);
    }, initialize.prototype._fetchWebId = function(el, recurring) {
      var self = this;
      /** @type {boolean} */
      this.isGetWebId = true;
      onload(el, {
        app_key : this.config.app_key,
        app_id : this.config.app_id,
        url : location.href,
        user_agent : this.browser.userAgent,
        referer : this.browser.referrer,
        user_unique_id : ""
      }, this.config.app_key, function(v) {
        if (v && 0 === v.e) {
          if (recurring) {
            var data = {
              web_id : self.web_id,
              ssid : self.ssid,
              user_unique_id : self.uuid,
              timestamp : Date.now()
            };
            if (self.enableCookie) {
              self.storage.setCookie(self.cookieKey, encodeURIComponent(JSON.stringify(data)), self.expiresTime);
            }
            self.storage.setItem(self.tokensKey, data);
            self._complete(self.web_id, self.uuid, self.ssid);
            if (self.isGetSsid) {
              self._requestSsId();
            } else {
              if (self.callback) {
                self.callback();
              }
            }
          } else {
            /** @type {boolean} */
            self.isGetWebId = false;
            self._setwebId(v);
            if (self.isGetSsid) {
              self._requestSsId();
            } else {
              if (self.callback) {
                self.callback();
              }
            }
          }
        } else {
          if (recurring) {
            self._fetchWebId(self.fetchUrl, false);
          } else {
            /** @type {boolean} */
            self.isGetWebId = false;
          }
        }
      }, function() {
        /** @type {boolean} */
        self.isGetWebId = false;
      }, true);
    }, initialize.prototype._setwebId = function(o) {
      var _uuid = this.cfg.envInfo.user.web_id || o.web_id;
      var data = {
        web_id : _uuid,
        ssid : o.ssid,
        user_unique_id : this._uuid ? this._uuid : _uuid,
        timestamp : Date.now()
      };
      if (this.enableCookie) {
        this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(data)), this.expiresTime);
      }
      this.storage.setItem(this.tokensKey, data);
      this.cfg.envInfo.user.ssid = o.ssid;
      this.cfg.envInfo.user.web_id = _uuid;
      this.cfg.envInfo.user.user_unique_id = this._uuid ? this._uuid : _uuid;
      this.uuid = this._uuid ? this._uuid : _uuid;
      this.web_id = _uuid;
      this.ssid = o.ssid;
      /** @type {boolean} */
      this.tokenReady = true;
    }, initialize.prototype._getSsid = function(uuid) {
      if (uuid) {
        if (-1 === ["0", "Null", "None", "", "undefined"].indexOf(uuid)) {
          if (this.uuid === uuid && (this.web_id && this.ssid)) {
            /** @type {boolean} */
            this.tokenReady = true;
          } else {
            this._uuid = uuid;
            this.uuid = uuid;
            this.cfg.envInfo.user.user_unique_id = uuid;
            /** @type {boolean} */
            this.isGetSsid = true;
            if (this.isNoSsid || this.isGetWebId) {
              if (this.callback) {
                this.callback();
              }
            } else {
              /** @type {boolean} */
              this.tokenReady = false;
              /** @type {boolean} */
              this.isGetSsid = false;
              this._requestSsId();
            }
          }
        }
      }
    }, initialize.prototype._requestSsId = function() {
      var self = this;
      /** @type {string} */
      var failuresLink = this.domain + "/v1/user/ssid";
      onload(failuresLink, {
        app_key : this.config.app_key,
        app_id : this.config.app_id,
        web_id : this.web_id,
        user_unique_id : this.uuid
      }, this.config.app_key, function(o) {
        if (o && 0 === o.e) {
          self.cfg.envInfo.user.ssid = o.ssid;
          var data = {
            web_id : self.web_id,
            ssid : o.ssid,
            user_unique_id : self.uuid,
            timestamp : Date.now()
          };
          if (self.enableCookie) {
            self.storage.setCookie(self.cookieKey, encodeURIComponent(JSON.stringify(data)), self.expiresTime);
          }
          self.storage.setItem(self.tokensKey, data);
          /** @type {boolean} */
          self.tokenReady = true;
        } else {
          /** @type {boolean} */
          self.tokenReady = true;
        }
        if (self.callback) {
          self.callback();
        }
      }, function() {
        /** @type {boolean} */
        self.tokenReady = true;
        if (self.callback) {
          self.callback();
        }
      }, true);
    }, initialize.prototype.isTokenReady = function() {
      return this.tokenReady;
    }, initialize;
  }();
  var App = function() {
    /**
     * @param {Object} config
     * @param {Object} textStatus
     * @param {?} jqXHR
     * @param {?} origError
     * @return {undefined}
     */
    function error(config, textStatus, jqXHR, origError) {
      /** @type {Object} */
      this.cfg = textStatus;
      /** @type {Object} */
      this.config = config;
      this._token = jqXHR;
      this.appInfo = config.app_key || config.app_id;
      /** @type {boolean} */
      this.debugMode = !!config.log;
      this.evtDataKey = _error(this.appInfo, false);
      var r = config.channel_domain || update(validators[config.channel]);
      this.reportUrl = config.report_url ? config.report_url : "" + r + g;
      this.maxReport = config.max_report || 20;
      this.storage = new AppRouter(true);
      this.plugin = origError;
      this.addListener();
    }
    return error.prototype.addListener = function() {
      var context = this;
      window.addEventListener("unload", function() {
        context.report(true);
      }, false);
      window.addEventListener("beforeunload", function() {
        context.report(true);
      }, false);
      document.addEventListener("visibilitychange", function() {
        if ("hidden" === document.visibilityState) {
          context.report(true);
        }
      }, false);
    }, error.prototype.setReady = function() {
      /** @type {boolean} */
      this.isReady = true;
      this.report();
    }, error.prototype.event = function(data, object) {
      var context = this;
      if (void 0 === data) {
        /** @type {Array} */
        data = [];
      }
      if (void 0 === object) {
        /** @type {boolean} */
        object = false;
      }
      var status = this.storage.getItem(this.evtDataKey) || [];
      var value = object ? finish(data, status) : finish(status, data);
      this.storage.setItem(this.evtDataKey, value);
      if (this.reportTimer) {
        clearTimeout(this.reportTimer);
      }
      if (value.length >= this.maxReport) {
        this.report();
      } else {
        /** @type {number} */
        this.reportTimer = setTimeout(function() {
          context.report();
          /** @type {null} */
          context.reportTimer = null;
        }, 30);
      }
    }, error.prototype.report = function(deepDataAndEvents) {
      if (void 0 === deepDataAndEvents && (deepDataAndEvents = false), this._token.isTokenReady() && this.isReady) {
        var name = this.storage.getItem(this.evtDataKey) || [];
        var paths = this._mergeEvents(name);
        this.storage.removeItem(this.evtDataKey);
        this._dealData(paths, deepDataAndEvents);
      }
    }, error.prototype._mergeEvents = function(suite) {
      var self = this;
      if (!suite.length) {
        return suite;
      }
      var req = this.cfg.get();
      /** @type {string} */
      req.header.custom = JSON.stringify(req.header.custom);
      /** @type {Array} */
      var suites = [];
      return suites.push(suite), suites.map(function(mod) {
        return{
          events : mod.map(function(_123f) {
            var generatedColumn = cb({}, self.cfg.get("evtParams"), _123f.params);
            return delete generatedColumn.__disable_storage__, cb({}, _123f, {
              params : JSON.stringify(generatedColumn)
            });
          }),
          user : req.user,
          header : req.header,
          verbose : self.debugMode ? 1 : void 0
        };
      });
    }, error.prototype._dealData = function(paths, deepDataAndEvents) {
      var jQuery = this;
      if (!paths.length) {
        return paths;
      }
      paths.map(function(vvar) {
        /** @type {Array} */
        var assigns = [];
        return assigns.push(vvar), assigns;
      }).forEach(function(data) {
        var which = removeClass();
        jQuery._send(which, data, deepDataAndEvents);
      });
    }, error.prototype._send = function(callback, e, deepDataAndEvents) {
      var that = this;
      /** @type {boolean} */
      this.isSending = true;
      /**
       * @return {undefined}
       */
      var complete = function() {
        /** @type {boolean} */
        that.isSending = false;
      };
      onload(this.reportUrl, e, this.config.app_key, function() {
        complete();
      }, function(deepDataAndEvents, opt_obj2) {
        complete();
        that.cfg.get("reportErrorCallback")(deepDataAndEvents, opt_obj2);
      }, false, deepDataAndEvents, complete);
    }, error;
  }();
  var ssid = void 0;
  /** @type {number} */
  var z2 = (new Date).getTimezoneOffset();
  /** @type {number} */
  var charCodeToReplace = parseInt("" + -z2 / 60, 10);
  /** @type {number} */
  var wz = 60 * z2;
  /** @type {string} */
  var sdk_version = "4.1.17";
  var Bar = function() {
    /**
     * @param {string} match
     * @param {string} allBindingsAccessor
     * @return {undefined}
     */
    function init(match, allBindingsAccessor) {
      var args = parse(true, match);
      /** @type {string} */
      this.initConfig = allBindingsAccessor;
      this.envInfo = {
        user : {
          user_unique_id : ssid,
          user_type : ssid,
          user_id : ssid,
          user_is_auth : ssid,
          user_is_login : ssid,
          device_id : ssid,
          web_id : ssid,
          ip_addr_id : ssid,
          ssid : ssid
        },
        header : {
          app_id : ssid,
          app_name : ssid,
          app_install_id : ssid,
          install_id : ssid,
          app_package : ssid,
          app_channel : ssid,
          app_version : ssid,
          os_name : args.os_name,
          os_version : args.os_version,
          device_model : args.device_model,
          ab_client : ssid,
          ab_version : ssid,
          ab_sdk_version : ssid,
          traffic_type : ssid,
          client_ip : ssid,
          device_brand : ssid,
          os_api : ssid,
          access : ssid,
          language : args.language,
          region : ssid,
          app_language : ssid,
          app_region : ssid,
          creative_id : ssid,
          ad_id : ssid,
          campaign_id : ssid,
          log_type : ssid,
          rnd : ssid,
          platform : args.platform,
          sdk_version : sdk_version,
          province : ssid,
          city : ssid,
          timezone : charCodeToReplace,
          tz_offset : wz,
          tz_name : ssid,
          sim_region : ssid,
          carrier : ssid,
          resolution : args.screen_width + "x" + args.screen_height,
          browser : args.browser,
          browser_version : args.browser_version,
          referrer : args.referrer,
          referrer_host : args.referrer_host,
          width : args.screen_width,
          height : args.screen_height,
          screen_width : args.screen_width,
          screen_height : args.screen_height,
          utm_term : args.utm_term,
          utm_content : args.utm_content,
          utm_source : args.utm_source,
          utm_medium : args.utm_medium,
          utm_campaign : args.utm_campaign,
          custom : {}
        }
      };
      this.evtParams = {};
      /**
       * @return {undefined}
       */
      this.reportErrorCallback = function() {
      };
    }
    return init.prototype.set = function(key, value) {
      var elem = this;
      if ("disable_auto_pv" !== key) {
        if ("evtParams" === key || "_staging_flag" === key) {
          var cDigit;
          cDigit = "evtParams" === key ? value : {
            _staging_flag : Number(value)
          };
          var theme = cb({}, cDigit);
          Object.keys(theme).forEach(function(name) {
            elem.evtParams[name] = theme[name];
          });
        } else {
          if ("reportErrorCallback" === key && "function" == typeof value) {
            /** @type {Object} */
            this.reportErrorCallback = value;
          } else {
            /** @type {string} */
            var path = "";
            if (key.indexOf(".") > -1) {
              var keys = key.split(".");
              path = keys[0];
              key = keys[1];
            }
            if ("user_unique_id" === key) {
              if (!value) {
                return;
              }
              if (-1 !== ["0", "Null", "None", "", "undefined"].indexOf(value)) {
                return;
              }
            }
            if ("os_version" === key && (key = "" + value), "web_id" === key) {
              if (!value) {
                return;
              }
              if (!this.envInfo.user.user_unique_id || this.envInfo.user.user_unique_id && this.envInfo.user.user_unique_id === this.envInfo.user.web_id) {
                /** @type {Object} */
                this.envInfo.user.user_unique_id = value;
              }
            }
            if (path) {
              if ("user" === path || "header" === path) {
                /** @type {Object} */
                this.envInfo[path][key] = value;
              } else {
                /** @type {Object} */
                this.envInfo.header.custom[key] = value;
              }
            } else {
              if (this.envInfo.user.hasOwnProperty(key)) {
                if (["user_type", "ip_addr_id"].indexOf(key) > -1) {
                  /** @type {number} */
                  this.envInfo.user[key] = Number(value);
                } else {
                  if (["user_id", "web_id", "user_unique_id", "ssid"].indexOf(key) > -1) {
                    /** @type {string} */
                    this.envInfo.user[key] = String(value);
                  } else {
                    if (["user_is_auth", "user_is_login"].indexOf(key) > -1) {
                      /** @type {boolean} */
                      this.envInfo.user[key] = Boolean(value);
                    } else {
                      if ("device_id" === key) {
                        if (this.initConfig && (this.initConfig.channel && "cn" === this.initConfig.channel)) {
                          /** @type {Object} */
                          this.envInfo.user[key] = value;
                        } else {
                          /** @type {number} */
                          this.envInfo.user[key] = Number(value);
                        }
                      }
                    }
                  }
                }
              } else {
                if (this.envInfo.header.hasOwnProperty(key)) {
                  /** @type {Object} */
                  this.envInfo.header[key] = value;
                } else {
                  /** @type {Object} */
                  this.envInfo.header.custom[key] = value;
                }
              }
            }
          }
        }
      }
    }, init.prototype.get = function(key) {
      return key ? "evtParams" === key ? this.evtParams : "reportErrorCallback" === key ? this.reportErrorCallback : JSON.parse(JSON.stringify(this.envInfo[key])) : JSON.parse(JSON.stringify(this.envInfo));
    }, init;
  }();
  var Logger = function() {
    /**
     * @param {string} name
     * @param {?} initiator
     * @return {undefined}
     */
    function ctor(name, initiator) {
      this.isLog = initiator;
      this.name = name || "";
    }
    var p = ctor.prototype;
    return p.info = function(message) {
      if (this.isLog) {
        console.log(this.name + " " + message);
      }
    }, p.warn = function(name) {
      if (this.isLog) {
        console.warn(this.name + " " + name);
      }
    }, p.error = function(name) {
      if (this.isLog) {
        console.error(this.name + " " + name);
      }
    }, p.throw = function(expectedHashCode) {
      throw this.error(this.name), new Error(expectedHashCode);
    }, ctor;
  }();
  var list = finish(["init", "config", "send", "start"], []);
  /** @type {function (): ?} */
  var fix = (F = +Date.now() + Number(("" + Math.random()).slice(2, 8)), function() {
    return F += 1;
  });
  /**
   * @param {string} token
   * @param {Object} actualObject
   * @return {?}
   */
  var handler = function(token, actualObject) {
    /** @type {string} */
    var name = token;
    if (/^event\./.test(token)) {
      name = token.slice(6);
    }
    /** @type {Object} */
    var object = actualObject;
    return "object" != typeof object && (object = {}), object.event_index = fix(), {
      event : name,
      params : object,
      local_time_ms : +new Date,
      is_bav : 0
    };
  };
  var Timer = function() {
    /**
     * @param {string} name
     * @return {undefined}
     */
    function self(name) {
      var params = this;
      /**
       * @param {?} attributes
       * @return {undefined}
       */
      this.predefinePageView = function(attributes) {
        if (void 0 === attributes) {
          attributes = {};
        }
        var cDigit = cb({
          title : document.title || location.pathname,
          url : location.href,
          url_path : location.pathname,
          time : Date.now(),
          referrer : window.document.referrer
        }, params._event.closeStorage ? {} : {
          __disable_storage__ : 1
        });
        var value = cb({}, cDigit, attributes);
        params.event("predefine_pageview", value, true);
      };
      /** @type {string} */
      this.name = name;
      /** @type {boolean} */
      this._isSend = false;
      /** @type {boolean} */
      this.autoPV = true;
    }
    return self.prototype.init = function(config) {
      var fake_onhashchange = this;
      if (!this._inited) {
        if (this._inited = true, !config || "object" != typeof config) {
          throw new Error("init params is error,please check");
        }
        var pdataOld = config.app_id;
        var string = config.app_key;
        var level = config.log;
        this._config = new Bar(pdataOld, config);
        this.logger = new Logger(this.name, level);
        if (!string) {
          if (!pdataOld) {
            this.logger.throw("no app_key or app_id please check");
          }
        }
        if (pdataOld) {
          if ("number" != typeof pdataOld) {
            this.logger.throw("app_id param is error,must be number,please check");
          }
        }
        if (string) {
          if ("string" != typeof string) {
            this.logger.warn("app_key is empty");
          }
        }
        if (!config.channel_domain) {
          if (!(-1 !== ["sg", "va", "in"].indexOf(config.channel))) {
            this.logger.throw("channel must be `sg`,`va`, `in`");
          }
        }
        this._config.set("app_id", pdataOld);
        config.channel = config.channel ? config.channel : "in";
        this._initConfig = config;
        this._token = new FileReceiver(config, this._config);
        /**
         * @return {undefined}
         */
        this._token.callback = function() {
          if (fake_onhashchange.callbackSend) {
            fake_onhashchange.start();
          }
        };
        this._event = new App(config, this._config, this._token, this.plugin);
        this._token._getToken();
      }
    }, self.prototype.config = function(val) {
      if (this._inited) {
        if (val && "object" == typeof val) {
          if (val.user_unique_id) {
            if ("string" != typeof val.user_unique_id) {
              throw new Error("user_unique_id must be string");
            }
            this._token._getSsid(val.user_unique_id);
          }
          var storageKey;
          for (storageKey in val.disable_auto_pv && (this.autoPV = false), val) {
            this._config.set(storageKey, val[storageKey]);
          }
        } else {
          this.logger.warn("config params is error,please check");
        }
      } else {
        this.logger.warn("config must be use after function init");
      }
    }, self.prototype.send = function() {
      this.start();
    }, self.prototype.start = function() {
      if (this._token.isTokenReady()) {
        if (this._isSend) {
          return;
        }
        /** @type {boolean} */
        this._isSend = true;
        this.logger.info("userInfo:" + JSON.stringify(this._config.get("user")));
        if (this.autoPV) {
          this.predefinePageView();
        }
        this._event.setReady();
      } else {
        /** @type {boolean} */
        this.callbackSend = true;
      }
    }, self.prototype.event = function() {
      /** @type {Array} */
      var querystring = [];
      /** @type {number} */
      var i = 0;
      for (;i < arguments.length;i++) {
        querystring[i] = arguments[i];
      }
      var which = "boolean" == typeof querystring[querystring.length - 1] && querystring[querystring.length - 1];
      /** @type {Array.<?>} */
      var key = "boolean" == typeof querystring[querystring.length - 1] ? querystring.slice(0, querystring.length - 1) : querystring;
      var variable = load(key, 1)[0];
      /** @type {Array} */
      var keys = [];
      if ("Array" !== Object.prototype.toString.call(variable).slice(8, -1)) {
        /** @type {Array.<?>} */
        keys[0] = key;
      } else {
        /** @type {Array.<?>} */
        keys = key;
      }
      /** @type {Array.<?>} */
      keys = keys.map(function(coordinates) {
        return handler(coordinates[0], coordinates[1]);
      });
      this._event.event(keys, which);
    }, self;
  }();
  /**
   * @param {?} name
   * @return {?}
   */
  var init = function(name) {
    var self = this;
    return _init(this, "_exportCollect", function() {
      /** @type {number} */
      var $_len = arguments.length;
      /** @type {Array} */
      var args = new Array($_len);
      /** @type {number} */
      var $_i = 0;
      for (;$_i < $_len;$_i++) {
        args[$_i] = arguments[$_i];
      }
      if (self._isProcess) {
        self._executeCmd.apply(self, args);
      } else {
        self.cmdQueue.push(args);
        self._processCmd();
      }
    }), _init(this, "_processCmd", function() {
      if (0 !== self.cmdQueue.length) {
        var props;
        var text;
        var id = (props = self.cmdQueue, "init", "0", text = -1, props.forEach(function(dataAndEvents, textAlt) {
          if ("init" === dataAndEvents[0]) {
            /** @type {number} */
            text = textAlt;
          }
        }), text);
        if (-1 !== id) {
          /** @type {boolean} */
          self._isProcess = true;
          self._executeCmd.apply(self, self.cmdQueue[id]);
          self.cmdQueue.forEach(function(checkSet, nextStack) {
            if (nextStack !== id) {
              self._executeCmd.apply(self, checkSet);
            }
          });
          /** @type {Array} */
          self.cmdQueue = [];
        }
      }
    }), _init(this, "_executeCmd", function() {
      /** @type {number} */
      var $_len = arguments.length;
      /** @type {Array} */
      var args = new Array($_len);
      /** @type {number} */
      var $_i = 0;
      for (;$_i < $_len;$_i++) {
        args[$_i] = arguments[$_i];
      }
      var _t;
      var cur;
      var arg = args[0];
      if (list.indexOf(arg) > -1) {
        (_t = self.colloctor)[arg].apply(_t, args.slice(1));
      } else {
        (cur = self.colloctor).event.apply(cur, args);
      }
    }), this.cmdQueue = [], this.name = name, this.colloctor = new Timer(name), this._isProcess = false, this._alias = {}, this._processCmd(), list.forEach(function(level) {
      self._exportCollect[level] = self._exportCollect.bind(self, level);
    }), this._exportCollect;
  };
  var CN = {
    CN : 3053,
    OVERSEA : 3297
  };
  var name = new (function() {
    /**
     * @return {undefined}
     */
    function Drawable() {
    }
    return Drawable.prototype.get = function(key) {
      if (localStorage && localStorage.getItem) {
        return function(actual) {
          if ("string" == typeof actual) {
            try {
              return JSON.parse(actual);
            } catch (t) {
              return actual || void 0;
            }
          }
        }(localStorage.getItem(key));
      }
    }, Drawable.prototype.set = function(key, value) {
      if (localStorage) {
        if (localStorage.setItem) {
          localStorage.setItem(key, function(obj) {
            return JSON.stringify(obj);
          }(value));
        }
      }
    }, Drawable;
  }());
  var Message = function(_super) {
    /**
     * @param {?} game
     * @param {?} text
     * @param {number} e
     * @param {string} options
     * @param {?} data
     * @return {?}
     */
    function error(game, text, e, options, data) {
      var result = _super.call(this, game) || this;
      return result.url = text, result.code = e, result.request = options, result.response = data, result.url = text, result.code = e, result.request = options, result.response = data, result;
    }
    return extend(error, _super), error;
  }(Error);
  var a = function(o) {
    /**
     * @param {Object} config
     * @return {?}
     */
    function init(config) {
      var node = config.test;
      var channel = config.TEAChannelDomain;
      var mode = config.mode;
      if (!channel) {
        throw new Message("param TEAChannelDomain is required");
      }
      return config.tracker = function(functions) {
        var length = functions.isTest;
        var def = functions.channel_domain;
        /** @type {number} */
        var app = def.includes("oversea") || def.includes("useast") ? CN.OVERSEA : CN.CN;
        var module = new init("tracker");
        return module.init({
          app_id : app,
          channel_domain : def
        }), module.config({
          _staging_flag : length,
          enable_et_test : length
        }), module.start(), module;
      }({
        isTest : node || "test" === mode,
        channel_domain : channel
      }), config.store || (config.store = name), config.request || (config.request = template), o.call(this, config) || this;
    }
    return extend(init, o), init;
  }(fragments);
  mix.a = a;
}, function(module, dataAndEvents) {
  /**
   * @param {string} expectedHashCode
   * @param {?} num
   * @param {?} opt_attributes
   * @param {(Object|string)} value
   * @return {?}
   */
  module.exports = function(expectedHashCode, num, opt_attributes, value) {
    var vertical = opt_attributes ? opt_attributes.call(value, expectedHashCode, num) : void 0;
    if (void 0 !== vertical) {
      return!!vertical;
    }
    if (expectedHashCode === num) {
      return true;
    }
    if ("object" != typeof expectedHashCode || (!expectedHashCode || ("object" != typeof num || !num))) {
      return false;
    }
    /** @type {Array.<string>} */
    var codeSegments = Object.keys(expectedHashCode);
    /** @type {Array.<string>} */
    var tokens = Object.keys(num);
    if (codeSegments.length !== tokens.length) {
      return false;
    }
    var inspect = Object.prototype.hasOwnProperty.bind(num);
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {string} */
      var key = codeSegments[i];
      if (!inspect(key)) {
        return false;
      }
      var newValue = expectedHashCode[key];
      var oldValue = num[key];
      if (false === (vertical = opt_attributes ? opt_attributes.call(value, newValue, oldValue, key) : void 0) || void 0 === vertical && newValue !== oldValue) {
        return false;
      }
    }
    return true;
  };
}, function(dataAndEvents, fnc, deepDataAndEvents) {
  /**
   * @param {string} storageKey
   * @return {?}
   */
  fnc.a = function(storageKey) {
    /**
     * @param {Object} data
     * @param {Object} buf
     * @param {number} obj
     * @return {?}
     */
    function get(data, buf, obj) {
      var second = buf.trim().split(whitespaceRegex);
      buf = second;
      var l = second.length;
      var length = data.length;
      switch(length) {
        case 0:
        ;
        case 1:
          /** @type {number} */
          var j = 0;
          data = 0 === length ? "" : data[0] + " ";
          for (;j < l;++j) {
            buf[j] = normalize(data, buf[j], obj).trim();
          }
          break;
        default:
          /** @type {number} */
          var offset = j = 0;
          /** @type {Array} */
          buf = [];
          for (;j < l;++j) {
            /** @type {number} */
            var i = 0;
            for (;i < length;++i) {
              buf[offset++] = normalize(data[i] + " ", second[j], obj).trim();
            }
          }
        ;
      }
      return buf;
    }
    /**
     * @param {string} s
     * @param {string} a
     * @param {number} event
     * @return {?}
     */
    function normalize(s, a, event) {
      var t = a.charCodeAt(0);
      switch(33 > t && (t = (a = a.trim()).charCodeAt(0)), t) {
        case 38:
          return a.replace(rxTrim, "$1" + s.trim());
        case 58:
          return s.trim() + a.replace(rxTrim, "$1" + s.trim());
        default:
          if (0 < 1 * event && 0 < a.indexOf("\f")) {
            return a.replace(rxTrim, (58 === s.charCodeAt(0) ? "" : "$1") + s.trim());
          }
        ;
      }
      return s + a;
    }
    /**
     * @param {string} pos
     * @param {number} i
     * @param {number} v11
     * @param {number} textStatus
     * @return {?}
     */
    function complete(pos, i, v11, textStatus) {
      /** @type {string} */
      var line = pos + ";";
      /** @type {number} */
      var j = 2 * i + 3 * v11 + 4 * textStatus;
      if (944 === j) {
        /** @type {number} */
        pos = line.indexOf(":", 9) + 1;
        /** @type {string} */
        var name = line.substring(pos, line.length - 1).trim();
        return name = line.substring(0, pos).trim() + name + ";", 1 === object || 2 === object && parse(name, 1) ? "-webkit-" + name + name : name;
      }
      if (0 === object || 2 === object && !parse(line, 1)) {
        return line;
      }
      switch(j) {
        case 1015:
          return 97 === line.charCodeAt(10) ? "-webkit-" + line + line : line;
        case 951:
          return 116 === line.charCodeAt(3) ? "-webkit-" + line + line : line;
        case 963:
          return 110 === line.charCodeAt(5) ? "-webkit-" + line + line : line;
        case 1009:
          if (100 !== line.charCodeAt(4)) {
            break;
          }
        ;
        case 969:
        ;
        case 942:
          return "-webkit-" + line + line;
        case 978:
          return "-webkit-" + line + "-moz-" + line + line;
        case 1019:
        ;
        case 983:
          return "-webkit-" + line + "-moz-" + line + "-ms-" + line + line;
        case 883:
          if (45 === line.charCodeAt(8)) {
            return "-webkit-" + line + line;
          }
          if (0 < line.indexOf("image-set(", 11)) {
            return line.replace(trimRight, "$1-webkit-$2") + line;
          }
          break;
        case 932:
          if (45 === line.charCodeAt(4)) {
            switch(line.charCodeAt(5)) {
              case 103:
                return "-webkit-box-" + line.replace("-grow", "") + "-webkit-" + line + "-ms-" + line.replace("grow", "positive") + line;
              case 115:
                return "-webkit-" + line + "-ms-" + line.replace("shrink", "negative") + line;
              case 98:
                return "-webkit-" + line + "-ms-" + line.replace("basis", "preferred-size") + line;
            }
          }
          return "-webkit-" + line + "-ms-" + line + line;
        case 964:
          return "-webkit-" + line + "-ms-flex-" + line + line;
        case 1023:
          if (99 !== line.charCodeAt(8)) {
            break;
          }
          return "-webkit-box-pack" + (name = line.substring(line.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + line + "-ms-flex-pack" + name + line;
        case 1005:
          return startRE.test(line) ? line.replace(r20, ":-webkit-") + line.replace(r20, ":-moz-") + line : line;
        case 1E3:
          switch(i = (name = line.substring(13).trim()).indexOf("-") + 1, name.charCodeAt(0) + name.charCodeAt(i)) {
            case 226:
              /** @type {string} */
              name = line.replace(dir, "tb");
              break;
            case 232:
              /** @type {string} */
              name = line.replace(dir, "tb-rl");
              break;
            case 220:
              /** @type {string} */
              name = line.replace(dir, "lr");
              break;
            default:
              return line;
          }
          return "-webkit-" + line + "-ms-" + name + line;
        case 1017:
          if (-1 === line.indexOf("sticky", 9)) {
            break;
          }
        ;
        case 975:
          switch(i = (line = pos).length - 10, j = (name = (33 === line.charCodeAt(i) ? line.substring(0, i) : line).substring(pos.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | name.charCodeAt(7))) {
            case 203:
              if (111 > name.charCodeAt(8)) {
                break;
              }
            ;
            case 115:
              line = line.replace(name, "-webkit-" + name) + ";" + line;
              break;
            case 207:
            ;
            case 102:
              /** @type {string} */
              line = line.replace(name, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + line.replace(name, "-webkit-" + name) + ";" + line.replace(name, "-ms-" + name + "box") + ";" + line;
          }
          return line + ";";
        case 938:
          if (45 === line.charCodeAt(5)) {
            switch(line.charCodeAt(6)) {
              case 105:
                return name = line.replace("-items", ""), "-webkit-" + line + "-webkit-box-" + name + "-ms-flex-" + name + line;
              case 115:
                return "-webkit-" + line + "-ms-flex-item-" + line.replace(rreturn, "") + line;
              default:
                return "-webkit-" + line + "-ms-flex-line-pack" + line.replace("align-content", "").replace(rreturn, "") + line;
            }
          }
          break;
        case 973:
        ;
        case 989:
          if (45 !== line.charCodeAt(3) || 122 === line.charCodeAt(4)) {
            break;
          }
        ;
        case 931:
        ;
        case 953:
          if (true === haystack.test(pos)) {
            return 115 === (name = pos.substring(pos.indexOf(":") + 1)).charCodeAt(0) ? complete(pos.replace("stretch", "fill-available"), i, v11, textStatus).replace(":fill-available", ":stretch") : line.replace(name, "-webkit-" + name) + line.replace(name, "-moz-" + name.replace("fill-", "")) + line;
          }
          break;
        case 962:
          if (line = "-webkit-" + line + (102 === line.charCodeAt(5) ? "-ms-" + line : "") + line, 211 === v11 + textStatus && (105 === line.charCodeAt(13) && 0 < line.indexOf("transform", 10))) {
            return line.substring(0, line.indexOf(";", 27) + 1).replace(rQuot, "$1-webkit-$2") + line;
          }
        ;
      }
      return line;
    }
    /**
     * @param {string} s
     * @param {number} expectedNumberOfNonCommentArgs
     * @return {?}
     */
    function parse(s, expectedNumberOfNonCommentArgs) {
      var n = s.indexOf(1 === expectedNumberOfNonCommentArgs ? ":" : "{");
      var selector = s.substring(0, 3 !== expectedNumberOfNonCommentArgs ? n : 10);
      return n = s.substring(n + 1, s.length - 1), cb(2 !== expectedNumberOfNonCommentArgs ? selector : selector.replace(normalizr, "$1"), n, expectedNumberOfNonCommentArgs);
    }
    /**
     * @param {?} all
     * @param {string} start
     * @return {?}
     */
    function replace(all, start) {
      var s = complete(start, start.charCodeAt(0), start.charCodeAt(1), start.charCodeAt(2));
      return s !== start + ";" ? s.replace(rSlash, " or ($1)").substring(4) : "(" + start + ")";
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @param {string} data
     * @param {?} status
     * @param {Array} value
     * @param {number} e
     * @param {number} f
     * @param {number} index
     * @param {number} collection
     * @param {number} statusText
     * @param {number} resp
     * @return {?}
     */
    function callback(expectedNumberOfNonCommentArgs, data, status, value, e, f, index, collection, statusText, resp) {
      var ret;
      /** @type {number} */
      var i = 0;
      /** @type {string} */
      var val = data;
      for (;i < d;++i) {
        switch(ret = functionBuffer[i].call(self, expectedNumberOfNonCommentArgs, val, status, value, e, f, index, collection, statusText, resp)) {
          case void 0:
          ;
          case false:
          ;
          case true:
          ;
          case null:
            break;
          default:
            val = ret;
        }
      }
      if (val !== data) {
        return val;
      }
    }
    /**
     * @param {string} key
     * @return {?}
     */
    function b(key) {
      return void 0 !== (key = key.prefix) && (cb = null, key ? "function" != typeof key ? object = 1 : (object = 2, cb = key) : object = 0), b;
    }
    /**
     * @param {Function} res
     * @param {(Array|string)} data
     * @return {?}
     */
    function self(res, data) {
      /** @type {Function} */
      var body = res;
      if (33 > body.charCodeAt(0) && (body = body.trim()), body = [body], 0 < d) {
        var result = callback(-1, data, body, body, args, fromIndex, 0, 0, 0, 0);
        if (void 0 !== result) {
          if ("string" == typeof result) {
            /** @type {string} */
            data = result;
          }
        }
      }
      var output = function success(buffer, status, input, collection, textStatus) {
        var x;
        var c;
        var result;
        var chunk;
        var ret;
        /** @type {number} */
        var _ = 0;
        /** @type {number} */
        var id = 0;
        /** @type {number} */
        var name = 0;
        /** @type {number} */
        var type = 0;
        /** @type {number} */
        var e = 0;
        /** @type {number} */
        var exception = 0;
        /** @type {number} */
        var i = result = x = 0;
        /** @type {number} */
        var index = 0;
        /** @type {number} */
        var body = 0;
        /** @type {number} */
        var suiteView = 0;
        /** @type {number} */
        var start = 0;
        var end = input.length;
        /** @type {number} */
        var length = end - 1;
        /** @type {string} */
        var data = "";
        /** @type {string} */
        var html = "";
        /** @type {string} */
        var suffix = "";
        /** @type {string} */
        var prefix = "";
        for (;index < end;) {
          if (c = input.charCodeAt(index), index === length && (0 !== id + type + name + _ && (0 !== id && (c = 47 === id ? 10 : 47), type = name = _ = 0, end++, length++)), 0 === id + type + name + _) {
            if (index === length && (0 < body && (data = data.replace(rNewline, "")), 0 < data.trim().length)) {
              switch(c) {
                case 32:
                ;
                case 9:
                ;
                case 59:
                ;
                case 13:
                ;
                case 10:
                  break;
                default:
                  data += input.charAt(index);
              }
              /** @type {number} */
              c = 59;
            }
            switch(c) {
              case 123:
                x = (data = data.trim()).charCodeAt(0);
                /** @type {number} */
                result = 1;
                /** @type {number} */
                start = ++index;
                for (;index < end;) {
                  switch(c = input.charCodeAt(index)) {
                    case 123:
                      result++;
                      break;
                    case 125:
                      result--;
                      break;
                    case 47:
                      switch(c = input.charCodeAt(index + 1)) {
                        case 42:
                        ;
                        case 47:
                          e: {
                            /** @type {number} */
                            i = index + 1;
                            for (;i < length;++i) {
                              switch(input.charCodeAt(i)) {
                                case 47:
                                  if (42 === c && (42 === input.charCodeAt(i - 1) && index + 2 !== i)) {
                                    /** @type {number} */
                                    index = i + 1;
                                    break e;
                                  }
                                  break;
                                case 10:
                                  if (47 === c) {
                                    /** @type {number} */
                                    index = i + 1;
                                    break e;
                                  }
                                ;
                              }
                            }
                            /** @type {number} */
                            index = i;
                          }
                        ;
                      }
                      break;
                    case 91:
                      c++;
                    case 40:
                      c++;
                    case 34:
                    ;
                    case 39:
                      for (;index++ < length && input.charCodeAt(index) !== c;) {
                      }
                    ;
                  }
                  if (0 === result) {
                    break;
                  }
                  index++;
                }
                switch(result = input.substring(start, index), 0 === x && (x = (data = data.replace(pattern_amp, "").trim()).charCodeAt(0)), x) {
                  case 64:
                    switch(0 < body && (data = data.replace(rNewline, "")), c = data.charCodeAt(1)) {
                      case 100:
                      ;
                      case 109:
                      ;
                      case 115:
                      ;
                      case 45:
                        /** @type {Array} */
                        body = status;
                        break;
                      default:
                        /** @type {Array} */
                        body = req;
                    }
                    if (start = (result = success(status, body, result, c, textStatus + 1)).length, 0 < d && (ret = callback(3, result, body = get(req, data, suiteView), status, args, fromIndex, start, c, textStatus, collection), data = body.join(""), void 0 !== ret && (0 === (start = (result = ret.trim()).length) && (c = 0, result = ""))), 0 < start) {
                      switch(c) {
                        case 115:
                          data = data.replace(emptyParagraphRegexp, replace);
                        case 100:
                        ;
                        case 109:
                        ;
                        case 45:
                          /** @type {string} */
                          result = data + "{" + result + "}";
                          break;
                        case 107:
                          /** @type {string} */
                          result = (data = data.replace(initialWhiteSpace, "$1 $2")) + "{" + result + "}";
                          /** @type {string} */
                          result = 1 === object || 2 === object && parse("@" + result, 3) ? "@-webkit-" + result + "@" + result : "@" + result;
                          break;
                        default:
                          result = data + result;
                          if (112 === collection) {
                            html += result;
                            /** @type {string} */
                            result = "";
                          }
                        ;
                      }
                    } else {
                      /** @type {string} */
                      result = "";
                    }
                    break;
                  default:
                    result = success(status, get(status, data, suiteView), result, collection, textStatus + 1);
                }
                suffix += result;
                /** @type {number} */
                result = suiteView = body = i = x = 0;
                /** @type {string} */
                data = "";
                c = input.charCodeAt(++index);
                break;
              case 125:
              ;
              case 59:
                if (1 < (start = (data = (0 < body ? data.replace(rNewline, "") : data).trim()).length)) {
                  switch(0 === i && ((x = data.charCodeAt(0), 45 === x || 96 < x && 123 > x) && (start = (data = data.replace(" ", ":")).length)), 0 < d && (void 0 !== (ret = callback(1, data, status, buffer, args, fromIndex, html.length, collection, textStatus, collection)) && (0 === (start = (data = ret.trim()).length) && (data = "\x00\x00"))), x = data.charCodeAt(0), c = data.charCodeAt(1), x) {
                    case 0:
                      break;
                    case 64:
                      if (105 === c || 99 === c) {
                        prefix += data + input.charAt(index);
                        break;
                      }
                    ;
                    default:
                      if (58 !== data.charCodeAt(start - 1)) {
                        html += complete(data, x, c, data.charCodeAt(2));
                      }
                    ;
                  }
                }
                /** @type {number} */
                suiteView = body = i = x = 0;
                /** @type {string} */
                data = "";
                c = input.charCodeAt(++index);
            }
          }
          switch(c) {
            case 13:
            ;
            case 10:
              if (47 === id) {
                /** @type {number} */
                id = 0;
              } else {
                if (0 === 1 + x) {
                  if (107 !== collection) {
                    if (0 < data.length) {
                      /** @type {number} */
                      body = 1;
                      data += "\x00";
                    }
                  }
                }
              }
              if (0 < d * base) {
                callback(0, data, status, buffer, args, fromIndex, html.length, collection, textStatus, collection);
              }
              /** @type {number} */
              fromIndex = 1;
              args++;
              break;
            case 59:
            ;
            case 125:
              if (0 === id + type + name + _) {
                fromIndex++;
                break;
              }
            ;
            default:
              switch(fromIndex++, chunk = input.charAt(index), c) {
                case 9:
                ;
                case 32:
                  if (0 === type + _ + id) {
                    switch(e) {
                      case 44:
                      ;
                      case 58:
                      ;
                      case 9:
                      ;
                      case 32:
                        /** @type {string} */
                        chunk = "";
                        break;
                      default:
                        if (32 !== c) {
                          /** @type {string} */
                          chunk = " ";
                        }
                      ;
                    }
                  }
                  break;
                case 0:
                  /** @type {string} */
                  chunk = "\\0";
                  break;
                case 12:
                  /** @type {string} */
                  chunk = "\\f";
                  break;
                case 11:
                  /** @type {string} */
                  chunk = "\\v";
                  break;
                case 38:
                  if (0 === type + id + _) {
                    /** @type {number} */
                    body = suiteView = 1;
                    /** @type {string} */
                    chunk = "\f" + chunk;
                  }
                  break;
                case 108:
                  if (0 === type + id + _ + message && 0 < i) {
                    switch(index - i) {
                      case 2:
                        if (112 === e) {
                          if (58 === input.charCodeAt(index - 3)) {
                            message = e;
                          }
                        }
                      ;
                      case 8:
                        if (111 === exception) {
                          message = exception;
                        }
                      ;
                    }
                  }
                  break;
                case 58:
                  if (0 === type + id + _) {
                    /** @type {number} */
                    i = index;
                  }
                  break;
                case 44:
                  if (0 === id + name + type + _) {
                    /** @type {number} */
                    body = 1;
                    chunk += "\r";
                  }
                  break;
                case 34:
                ;
                case 39:
                  if (0 === id) {
                    type = type === c ? 0 : 0 === type ? c : type;
                  }
                  break;
                case 91:
                  if (0 === type + id + name) {
                    _++;
                  }
                  break;
                case 93:
                  if (0 === type + id + name) {
                    _--;
                  }
                  break;
                case 41:
                  if (0 === type + id + _) {
                    name--;
                  }
                  break;
                case 40:
                  if (0 === type + id + _) {
                    if (0 === x) {
                      switch(2 * e + 3 * exception) {
                        case 533:
                          break;
                        default:
                          /** @type {number} */
                          x = 1;
                      }
                    }
                    name++;
                  }
                  break;
                case 64:
                  if (0 === id + name + type + _ + i + result) {
                    /** @type {number} */
                    result = 1;
                  }
                  break;
                case 42:
                ;
                case 47:
                  if (!(0 < type + _ + name)) {
                    switch(id) {
                      case 0:
                        switch(2 * c + 3 * input.charCodeAt(index + 1)) {
                          case 235:
                            /** @type {number} */
                            id = 47;
                            break;
                          case 220:
                            /** @type {number} */
                            start = index;
                            /** @type {number} */
                            id = 42;
                        }
                        break;
                      case 42:
                        if (47 === c) {
                          if (42 === e) {
                            if (start + 2 !== index) {
                              if (33 === input.charCodeAt(start + 2)) {
                                html += input.substring(start, index + 1);
                              }
                              /** @type {string} */
                              chunk = "";
                              /** @type {number} */
                              id = 0;
                            }
                          }
                        }
                      ;
                    }
                  }
                ;
              }
              if (0 === id) {
                data += chunk;
              }
            ;
          }
          exception = e;
          e = c;
          index++;
        }
        if (0 < (start = html.length)) {
          if (body = status, 0 < d && (void 0 !== (ret = callback(2, html, body, buffer, args, fromIndex, start, collection, textStatus, collection)) && 0 === (html = ret).length)) {
            return prefix + html + suffix;
          }
          if (html = body.join(",") + "{" + html + "}", 0 != object * message) {
            switch(2 !== object || (parse(html, 2) || (message = 0)), message) {
              case 111:
                /** @type {string} */
                html = html.replace(badChars, ":-moz-$1") + html;
                break;
              case 112:
                /** @type {string} */
                html = html.replace(rclass, "::-webkit-input-$1") + html.replace(rclass, "::-moz-$1") + html.replace(rclass, ":-ms-input-$1") + html;
            }
            /** @type {number} */
            message = 0;
          }
        }
        return prefix + html + suffix;
      }(req, body, data, 0, 0);
      return 0 < d && (void 0 !== (result = callback(-2, output, body, body, args, fromIndex, output.length, 0, 0, 0)) && (output = result)), "", message = 0, fromIndex = args = 1, output;
    }
    /** @type {RegExp} */
    var pattern_amp = /^\0+/g;
    /** @type {RegExp} */
    var rNewline = /[\0\r\f]/g;
    /** @type {RegExp} */
    var r20 = /: */g;
    /** @type {RegExp} */
    var startRE = /zoo|gra/;
    /** @type {RegExp} */
    var rQuot = /([,: ])(transform)/g;
    /** @type {RegExp} */
    var whitespaceRegex = /,\r+?/g;
    /** @type {RegExp} */
    var rxTrim = /([\t\r\n ])*\f?&/g;
    /** @type {RegExp} */
    var initialWhiteSpace = /@(k\w+)\s*(\S*)\s*/;
    /** @type {RegExp} */
    var rclass = /::(place)/g;
    /** @type {RegExp} */
    var badChars = /:(read-only)/g;
    /** @type {RegExp} */
    var dir = /[svh]\w+-[tblr]{2}/;
    /** @type {RegExp} */
    var emptyParagraphRegexp = /\(\s*(.*)\s*\)/g;
    /** @type {RegExp} */
    var rSlash = /([\s\S]*?);/g;
    /** @type {RegExp} */
    var rreturn = /-self|flex-/g;
    /** @type {RegExp} */
    var normalizr = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
    /** @type {RegExp} */
    var haystack = /stretch|:\s*\w+\-(?:conte|avail)/;
    /** @type {RegExp} */
    var trimRight = /([^-])(image-set\()/;
    /** @type {number} */
    var fromIndex = 1;
    /** @type {number} */
    var args = 1;
    /** @type {number} */
    var message = 0;
    /** @type {number} */
    var object = 1;
    /** @type {Array} */
    var req = [];
    /** @type {Array} */
    var functionBuffer = [];
    /** @type {number} */
    var d = 0;
    /** @type {null} */
    var cb = null;
    /** @type {number} */
    var base = 0;
    return self.use = function handler(arg) {
      switch(arg) {
        case void 0:
        ;
        case null:
          /** @type {number} */
          d = functionBuffer.length = 0;
          break;
        default:
          if ("function" == typeof arg) {
            /** @type {Array} */
            functionBuffer[d++] = arg;
          } else {
            if ("object" == typeof arg) {
              /** @type {number} */
              var i = 0;
              var valuesLen = arg.length;
              for (;i < valuesLen;++i) {
                handler(arg[i]);
              }
            } else {
              /** @type {number} */
              base = 0 | !!arg;
            }
          }
        ;
      }
      return handler;
    }, self.set = b, void 0 !== storageKey && b(storageKey), self;
  };
}, function(dataAndEvents, fnc, deepDataAndEvents) {
  fnc.a = {
    animationIterationCount : 1,
    borderImageOutset : 1,
    borderImageSlice : 1,
    borderImageWidth : 1,
    boxFlex : 1,
    boxFlexGroup : 1,
    boxOrdinalGroup : 1,
    columnCount : 1,
    columns : 1,
    flex : 1,
    flexGrow : 1,
    flexPositive : 1,
    flexShrink : 1,
    flexNegative : 1,
    flexOrder : 1,
    gridRow : 1,
    gridRowEnd : 1,
    gridRowSpan : 1,
    gridRowStart : 1,
    gridColumn : 1,
    gridColumnEnd : 1,
    gridColumnSpan : 1,
    gridColumnStart : 1,
    msGridRow : 1,
    msGridRowSpan : 1,
    msGridColumn : 1,
    msGridColumnSpan : 1,
    fontWeight : 1,
    lineHeight : 1,
    opacity : 1,
    order : 1,
    orphans : 1,
    tabSize : 1,
    widows : 1,
    zIndex : 1,
    zoom : 1,
    WebkitLineClamp : 1,
    fillOpacity : 1,
    floodOpacity : 1,
    stopOpacity : 1,
    strokeDasharray : 1,
    strokeDashoffset : 1,
    strokeMiterlimit : 1,
    strokeOpacity : 1,
    strokeWidth : 1
  };
}, function(module, dataAndEvents, require) {
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  function log(opt_attributes) {
    /** @type {string} */
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + opt_attributes;
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + opt_attributes + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  /**
   * @param {?} props
   * @param {?} key
   * @param {(Object|boolean|number|string)} err
   * @return {undefined}
   */
  function self(props, key, err) {
    this.props = props;
    this.context = key;
    this.refs = createdSoFar;
    this.updater = err || err2;
  }
  /**
   * @return {undefined}
   */
  function F() {
  }
  /**
   * @param {?} props
   * @param {?} context
   * @param {(Object|boolean|number|string)} err
   * @return {undefined}
   */
  function init(props, context, err) {
    this.props = props;
    this.context = context;
    this.refs = createdSoFar;
    this.updater = err || err2;
  }
  /**
   * @param {Object} type
   * @param {Object} expectedHashCode
   * @param {?} arr
   * @return {?}
   */
  function remove(type, expectedHashCode, arr) {
    var key;
    var obj = {};
    /** @type {null} */
    var name = null;
    /** @type {null} */
    var ref = null;
    if (null != expectedHashCode) {
      for (key in void 0 !== expectedHashCode.ref && (ref = expectedHashCode.ref), void 0 !== expectedHashCode.key && (name = "" + expectedHashCode.key), expectedHashCode) {
        if (hasOwnProperty.call(expectedHashCode, key)) {
          if (!params.hasOwnProperty(key)) {
            obj[key] = expectedHashCode[key];
          }
        }
      }
    }
    /** @type {number} */
    var e = arguments.length - 2;
    if (1 === e) {
      obj.children = arr;
    } else {
      if (1 < e) {
        /** @type {Array} */
        var items = Array(e);
        /** @type {number} */
        var i = 0;
        for (;i < e;i++) {
          items[i] = arguments[i + 2];
        }
        /** @type {Array} */
        obj.children = items;
      }
    }
    if (type && type.defaultProps) {
      for (key in e = type.defaultProps) {
        if (void 0 === obj[key]) {
          obj[key] = e[key];
        }
      }
    }
    return{
      $$typeof : String,
      type : type,
      key : name,
      ref : ref,
      props : obj,
      _owner : $pages.current
    };
  }
  /**
   * @param {Object} o
   * @return {?}
   */
  function isElement(o) {
    return "object" == typeof o && (null !== o && o.$$typeof === String);
  }
  /**
   * @param {string} a
   * @param {string} bytes
   * @param {Function} func
   * @param {?} context
   * @return {?}
   */
  function update(a, bytes, func, context) {
    if (stack.length) {
      var self = stack.pop();
      return self.result = a, self.keyPrefix = bytes, self.func = func, self.context = context, self.count = 0, self;
    }
    return{
      result : a,
      keyPrefix : bytes,
      /** @type {Function} */
      func : func,
      context : context,
      count : 0
    };
  }
  /**
   * @param {Object} args
   * @return {undefined}
   */
  function run(args) {
    /** @type {null} */
    args.result = null;
    /** @type {null} */
    args.keyPrefix = null;
    /** @type {null} */
    args.func = null;
    /** @type {null} */
    args.context = null;
    /** @type {number} */
    args.count = 0;
    if (10 > stack.length) {
      stack.push(args);
    }
  }
  /**
   * @param {Object} obj
   * @param {Function} callback
   * @param {?} opt_key
   * @return {?}
   */
  function get(obj, callback, opt_key) {
    return null == obj ? 0 : function process(obj, buffer, callback, arg) {
      /** @type {string} */
      var type = typeof obj;
      if (!("undefined" !== type && "boolean" !== type)) {
        /** @type {null} */
        obj = null;
      }
      /** @type {boolean} */
      var html = false;
      if (null === obj) {
        /** @type {boolean} */
        html = true;
      } else {
        switch(type) {
          case "string":
          ;
          case "number":
            /** @type {boolean} */
            html = true;
            break;
          case "object":
            switch(obj.$$typeof) {
              case String:
              ;
              case br:
                /** @type {boolean} */
                html = true;
            }
          ;
        }
      }
      if (html) {
        return callback(arg, obj, "" === buffer ? "." + success(obj, 0) : buffer), 1;
      }
      if (html = 0, buffer = "" === buffer ? "." : buffer + ":", Array.isArray(obj)) {
        /** @type {number} */
        var x = 0;
        for (;x < obj.length;x++) {
          /** @type {string} */
          var data = buffer + success(type = obj[x], x);
          html += process(type, data, callback, arg);
        }
      } else {
        if (null === obj || "object" != typeof obj ? data = null : data = "function" == typeof(data = special && obj[special] || obj["@@iterator"]) ? data : null, "function" == typeof data) {
          obj = data.call(obj);
          /** @type {number} */
          x = 0;
          for (;!(type = obj.next()).done;) {
            html += process(type = type.value, data = buffer + success(type, x++), callback, arg);
          }
        } else {
          if ("object" === type) {
            throw callback = "" + obj, Error(log(31, "[object Object]" === callback ? "object with keys {" + Object.keys(obj).join(", ") + "}" : callback, ""));
          }
        }
      }
      return html;
    }(obj, "", callback, opt_key);
  }
  /**
   * @param {Object} data
   * @param {(number|string)} object
   * @return {?}
   */
  function success(data, object) {
    return "object" == typeof data && (null !== data && null != data.key) ? function(str) {
      var buf = {
        "=" : "=0",
        ":" : "=2"
      };
      return "$" + ("" + str).replace(/[=:]/g, function(off) {
        return buf[off];
      });
    }(data.key) : object.toString(36);
  }
  /**
   * @param {Object} settings
   * @param {?} dt
   * @return {undefined}
   */
  function execute(settings, dt) {
    settings.func.call(settings.context, dt, settings.count++);
  }
  /**
   * @param {Object} node
   * @param {string} el
   * @param {string} arg
   * @return {undefined}
   */
  function walk(node, el, arg) {
    var text = node.result;
    var key = node.keyPrefix;
    node = node.func.call(node.context, el, node.count++);
    if (Array.isArray(node)) {
      fn(node, text, arg, function(dataAndEvents) {
        return dataAndEvents;
      });
    } else {
      if (null != node) {
        if (isElement(node)) {
          node = function(object, subKey) {
            return{
              $$typeof : String,
              type : object.type,
              key : subKey,
              ref : object.ref,
              props : object.props,
              _owner : object._owner
            };
          }(node, key + (!node.key || el && el.key === node.key ? "" : ("" + node.key).replace(r20, "$&/") + "/") + arg);
        }
        text.push(node);
      }
    }
  }
  /**
   * @param {Object} key
   * @param {?} count
   * @param {string} x
   * @param {Function} callback
   * @param {?} event
   * @return {undefined}
   */
  function fn(key, count, x, callback, event) {
    /** @type {string} */
    var data = "";
    if (null != x) {
      /** @type {string} */
      data = ("" + x).replace(r20, "$&/") + "/";
    }
    get(key, walk, count = update(count, data, callback, event));
    run(count);
  }
  /**
   * @return {?}
   */
  function link() {
    /** @type {null} */
    var result = messages.current;
    if (null === result) {
      throw Error(log(321));
    }
    return result;
  }
  var extend = require(13);
  var i = "function" == typeof Symbol && Symbol.for;
  var String = i ? Symbol.for("react.element") : 60103;
  var br = i ? Symbol.for("react.portal") : 60106;
  var tl = i ? Symbol.for("react.fragment") : 60107;
  var xsign = i ? Symbol.for("react.strict_mode") : 60108;
  var full_address = i ? Symbol.for("react.profiler") : 60114;
  var yCoord = i ? Symbol.for("react.provider") : 60109;
  var axis = i ? Symbol.for("react.context") : 60110;
  var passed = i ? Symbol.for("react.forward_ref") : 60112;
  var src = i ? Symbol.for("react.suspense") : 60113;
  if (i) {
    Symbol.for("react.suspense_list");
  }
  var c = i ? Symbol.for("react.memo") : 60115;
  var t = i ? Symbol.for("react.lazy") : 60116;
  if (i) {
    Symbol.for("react.fundamental");
  }
  if (i) {
    Symbol.for("react.responder");
  }
  if (i) {
    Symbol.for("react.scope");
  }
  var special = "function" == typeof Symbol && Symbol.iterator;
  var err2 = {
    /**
     * @return {?}
     */
    isMounted : function() {
      return false;
    },
    /**
     * @return {undefined}
     */
    enqueueForceUpdate : function() {
    },
    /**
     * @return {undefined}
     */
    enqueueReplaceState : function() {
    },
    /**
     * @return {undefined}
     */
    enqueueSetState : function() {
    }
  };
  var createdSoFar = {};
  self.prototype.isReactComponent = {};
  /**
   * @param {string} dataAndEvents
   * @param {Object} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.setState = function(dataAndEvents, deepDataAndEvents) {
    if ("object" != typeof dataAndEvents && ("function" != typeof dataAndEvents && null != dataAndEvents)) {
      throw Error(log(85));
    }
    this.updater.enqueueSetState(this, dataAndEvents, deepDataAndEvents, "setState");
  };
  /**
   * @param {Object} deepDataAndEvents
   * @return {undefined}
   */
  self.prototype.forceUpdate = function(deepDataAndEvents) {
    this.updater.enqueueForceUpdate(this, deepDataAndEvents, "forceUpdate");
  };
  F.prototype = self.prototype;
  var expectedHashCode = init.prototype = new F;
  /** @type {function (?, ?, (Object|boolean|number|string)): undefined} */
  expectedHashCode.constructor = init;
  extend(expectedHashCode, self.prototype);
  /** @type {boolean} */
  expectedHashCode.isPureReactComponent = true;
  var messages = {
    current : null
  };
  var $pages = {
    current : null
  };
  /** @type {function (this:Object, *): boolean} */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var params = {
    key : true,
    ref : true,
    __self : true,
    __source : true
  };
  /** @type {RegExp} */
  var r20 = /\/+/g;
  /** @type {Array} */
  var stack = [];
  var gratStyle = {
    Children : {
      /**
       * @param {Function} props
       * @param {Function} arr
       * @param {?} callback
       * @return {?}
       */
      map : function(props, arr, callback) {
        if (null == props) {
          return props;
        }
        /** @type {Array} */
        var i = [];
        return fn(props, i, null, arr, callback), i;
      },
      /**
       * @param {Function} obj
       * @param {Function} callback
       * @param {?} thisv
       * @return {?}
       */
      forEach : function(obj, callback, thisv) {
        if (null == obj) {
          return obj;
        }
        get(obj, execute, callback = update(null, null, callback, thisv));
        run(callback);
      },
      /**
       * @param {Object} item
       * @return {?}
       */
      count : function(item) {
        return get(item, function() {
          return null;
        }, null);
      },
      /**
       * @param {Object} n
       * @return {?}
       */
      toArray : function(n) {
        /** @type {Array} */
        var i = [];
        return fn(n, i, null, function(value) {
          return value;
        }), i;
      },
      /**
       * @param {Object} fn
       * @return {?}
       */
      only : function(fn) {
        if (!isElement(fn)) {
          throw Error(log(143));
        }
        return fn;
      }
    },
    /**
     * @return {?}
     */
    createRef : function() {
      return{
        current : null
      };
    },
    /** @type {function (?, ?, (Object|boolean|number|string)): undefined} */
    Component : self,
    /** @type {function (?, ?, (Object|boolean|number|string)): undefined} */
    PureComponent : init,
    /**
     * @param {Object} context
     * @param {Element} baseId
     * @return {?}
     */
    createContext : function(context, baseId) {
      return void 0 === baseId && (baseId = null), (context = {
        $$typeof : axis,
        _calculateChangedBits : baseId,
        _currentValue : context,
        _currentValue2 : context,
        _threadCount : 0,
        Provider : null,
        Consumer : null
      }).Provider = {
        $$typeof : yCoord,
        _context : context
      }, context.Consumer = context;
    },
    /**
     * @param {Function} container
     * @return {?}
     */
    forwardRef : function(container) {
      return{
        $$typeof : passed,
        /** @type {Function} */
        render : container
      };
    },
    /**
     * @param {?} immediate
     * @return {?}
     */
    lazy : function(immediate) {
      return{
        $$typeof : t,
        _ctor : immediate,
        _status : -1,
        _result : null
      };
    },
    /**
     * @param {string} key
     * @param {string} fallback
     * @return {?}
     */
    memo : function(key, fallback) {
      return{
        $$typeof : c,
        type : key,
        compare : void 0 === fallback ? null : fallback
      };
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useCallback : function(expectation, deepDataAndEvents) {
      return link().useCallback(expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useContext : function(expectation, deepDataAndEvents) {
      return link().useContext(expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useEffect : function(expectation, deepDataAndEvents) {
      return link().useEffect(expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {?}
     */
    useImperativeHandle : function(expectation, deepDataAndEvents, dataAndEvents) {
      return link().useImperativeHandle(expectation, deepDataAndEvents, dataAndEvents);
    },
    /**
     * @return {undefined}
     */
    useDebugValue : function() {
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useLayoutEffect : function(expectation, deepDataAndEvents) {
      return link().useLayoutEffect(expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useMemo : function(expectation, deepDataAndEvents) {
      return link().useMemo(expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {?}
     */
    useReducer : function(expectation, deepDataAndEvents, dataAndEvents) {
      return link().useReducer(expectation, deepDataAndEvents, dataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @return {?}
     */
    useRef : function(expectation) {
      return link().useRef(expectation);
    },
    /**
     * @param {Function} expectation
     * @return {?}
     */
    useState : function(expectation) {
      return link().useState(expectation);
    },
    Fragment : tl,
    Profiler : full_address,
    StrictMode : xsign,
    Suspense : src,
    /** @type {function (Object, Object, ?): ?} */
    createElement : remove,
    /**
     * @param {Object} opts
     * @param {Object} object
     * @param {?} str
     * @return {?}
     */
    cloneElement : function(opts, object, str) {
      if (null == opts) {
        throw Error(log(267, opts));
      }
      var props = extend({}, opts.props);
      var id = opts.key;
      var ref = opts.ref;
      var q = opts._owner;
      if (null != object) {
        if (void 0 !== object.ref && (ref = object.ref, q = $pages.current), void 0 !== object.key && (id = "" + object.key), opts.type && opts.type.defaultProps) {
          var args = opts.type.defaultProps
        }
        for (index in object) {
          if (hasOwnProperty.call(object, index)) {
            if (!params.hasOwnProperty(index)) {
              props[index] = void 0 === object[index] && void 0 !== args ? args[index] : object[index];
            }
          }
        }
      }
      /** @type {number} */
      var index = arguments.length - 2;
      if (1 === index) {
        props.children = str;
      } else {
        if (1 < index) {
          /** @type {Array} */
          args = Array(index);
          /** @type {number} */
          var i = 0;
          for (;i < index;i++) {
            args[i] = arguments[i + 2];
          }
          /** @type {Array} */
          props.children = args;
        }
      }
      return{
        $$typeof : String,
        type : opts.type,
        key : id,
        ref : ref,
        props : props,
        _owner : q
      };
    },
    /**
     * @param {?} type
     * @return {?}
     */
    createFactory : function(type) {
      var node = remove.bind(null, type);
      return node.type = type, node;
    },
    /** @type {function (Object): ?} */
    isValidElement : isElement,
    version : "16.12.0",
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED : {
      ReactCurrentDispatcher : messages,
      ReactCurrentBatchConfig : {
        suspense : null
      },
      ReactCurrentOwner : $pages,
      IsSomeRendererActing : {
        current : false
      },
      assign : extend
    }
  };
  var templates = {
    default : gratStyle
  };
  var obj = templates && gratStyle || templates;
  module.exports = obj.default || obj;
}, function(mod, dataAndEvents, action) {
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  function callback(opt_attributes) {
    /** @type {string} */
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + opt_attributes;
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + opt_attributes + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  /**
   * @return {undefined}
   */
  function ready() {
    if (exclude) {
      var index;
      for (index in cache) {
        var c = cache[index];
        var d = exclude.indexOf(index);
        if (!(-1 < d)) {
          throw Error(callback(96, index));
        }
        if (!codeSegments[d]) {
          if (!c.extractEvents) {
            throw Error(callback(97, index));
          }
          var i;
          for (i in codeSegments[d] = c, d = c.eventTypes) {
            var field = void 0;
            var val = d[i];
            var udataCur = c;
            /** @type {string} */
            var key = i;
            if (storage.hasOwnProperty(key)) {
              throw Error(callback(99, key));
            }
            storage[key] = val;
            var modified = val.phasedRegistrationNames;
            if (modified) {
              for (field in modified) {
                if (modified.hasOwnProperty(field)) {
                  onLoad(modified[field], udataCur, key);
                }
              }
              /** @type {boolean} */
              field = true;
            } else {
              if (val.registrationName) {
                onLoad(val.registrationName, udataCur, key);
                /** @type {boolean} */
                field = true;
              } else {
                /** @type {boolean} */
                field = false;
              }
            }
            if (!field) {
              throw Error(callback(98, i, index));
            }
          }
        }
      }
    }
  }
  /**
   * @param {?} data
   * @param {?} value
   * @param {string} name
   * @return {undefined}
   */
  function onLoad(data, value, name) {
    if (p[data]) {
      throw Error(callback(100, data));
    }
    p[data] = value;
    config[data] = value.eventTypes[name].dependencies;
  }
  /**
   * @param {?} thisValue
   * @param {Function} fn
   * @param {?} context
   * @param {?} obj
   * @param {?} strObjId
   * @param {?} collection
   * @param {?} stack
   * @param {?} inMethod
   * @param {?} listener
   * @return {undefined}
   */
  function invoke(thisValue, fn, context, obj, strObjId, collection, stack, inMethod, listener) {
    /** @type {Array.<?>} */
    var newArgs = Array.prototype.slice.call(arguments, 3);
    try {
      fn.apply(context, newArgs);
    } catch (suiteView) {
      this.onError(suiteView);
    }
  }
  /**
   * @param {?} b
   * @param {?} a
   * @param {?} arg
   * @param {?} x
   * @param {?} p
   * @param {?} number
   * @param {?} event
   * @param {?} methods
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  function f2(b, a, arg, x, p, number, event, methods, dataAndEvents) {
    /** @type {boolean} */
    m = false;
    /** @type {null} */
    ctx = null;
    invoke.apply(newArgs, arguments);
  }
  /**
   * @param {Object} event
   * @param {?} patterns
   * @param {boolean} element
   * @return {undefined}
   */
  function wrapper(event, patterns, element) {
    var udataCur = event.type || "unknown-event";
    event.currentTarget = unbind(element);
    (function(value, array, opt_attributes, v, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData) {
      if (f2.apply(this, arguments), m) {
        if (!m) {
          throw Error(callback(198));
        }
        var s = ctx;
        /** @type {boolean} */
        m = false;
        /** @type {null} */
        ctx = null;
        if (!y) {
          /** @type {boolean} */
          y = true;
          status = s;
        }
      }
    })(udataCur, patterns, void 0, event);
    /** @type {null} */
    event.currentTarget = null;
  }
  /**
   * @param {Object} object
   * @param {Object} data
   * @return {?}
   */
  function push(object, data) {
    if (null == data) {
      throw Error(callback(30));
    }
    return null == object ? data : Array.isArray(object) ? Array.isArray(data) ? (object.push.apply(object, data), object) : (object.push(data), object) : Array.isArray(data) ? [object].concat(data) : [object, data];
  }
  /**
   * @param {Array} obj
   * @param {Function} iterator
   * @param {Function} context
   * @return {undefined}
   */
  function f(obj, iterator, context) {
    if (Array.isArray(obj)) {
      obj.forEach(iterator, context);
    } else {
      if (obj) {
        iterator.call(context, obj);
      }
    }
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function context(event) {
    if (event) {
      var patterns = event._dispatchListeners;
      var related = event._dispatchInstances;
      if (Array.isArray(patterns)) {
        /** @type {number} */
        var i = 0;
        for (;i < patterns.length && !event.isPropagationStopped();i++) {
          wrapper(event, patterns[i], related[i]);
        }
      } else {
        if (patterns) {
          wrapper(event, patterns, related);
        }
      }
      /** @type {null} */
      event._dispatchListeners = null;
      /** @type {null} */
      event._dispatchInstances = null;
      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  }
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  function addEventListener(obj) {
    if (null !== obj && (str = push(str, obj)), obj = str, str = null, obj) {
      if (f(obj, context), str) {
        throw Error(callback(95));
      }
      if (y) {
        throw obj = status, y = false, status = null, obj;
      }
    }
  }
  /**
   * @param {Object} name
   * @param {?} key
   * @return {?}
   */
  function fn(name, key) {
    var fn = name.stateNode;
    if (!fn) {
      return null;
    }
    var result = defer(fn);
    if (!result) {
      return null;
    }
    fn = result[key];
    e: {
      switch(key) {
        case "onClick":
        ;
        case "onClickCapture":
        ;
        case "onDoubleClick":
        ;
        case "onDoubleClickCapture":
        ;
        case "onMouseDown":
        ;
        case "onMouseDownCapture":
        ;
        case "onMouseMove":
        ;
        case "onMouseMoveCapture":
        ;
        case "onMouseUp":
        ;
        case "onMouseUpCapture":
          if (!(result = !result.disabled)) {
            /** @type {boolean} */
            result = !("button" === (name = name.type) || ("input" === name || ("select" === name || "textarea" === name)));
          }
          /** @type {boolean} */
          name = !result;
          break e;
        default:
          /** @type {boolean} */
          name = false;
      }
    }
    if (name) {
      return null;
    }
    if (fn && "function" != typeof fn) {
      throw Error(callback(231, key, typeof fn));
    }
    return fn;
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return null === obj || "object" != typeof obj ? null : "function" == typeof(obj = special && obj[special] || obj["@@iterator"]) ? obj : null;
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function cb(data) {
    if (null == data) {
      return null;
    }
    if ("function" == typeof data) {
      return data.displayName || (data.name || null);
    }
    if ("string" == typeof data) {
      return data;
    }
    switch(data) {
      case Infinity:
        return "Fragment";
      case LOCATION_CHANGED_EVENT:
        return "Portal";
      case elementType:
        return "Profiler";
      case clearMarkers:
        return "StrictMode";
      case info:
        return "Suspense";
      case body:
        return "SuspenseList";
    }
    if ("object" == typeof data) {
      switch(data.$$typeof) {
        case transitionBegin:
          return "Context.Consumer";
        case progress:
          return "Context.Provider";
        case transitionEnd:
          var obj = data.render;
          return obj = obj.displayName || (obj.name || ""), data.displayName || ("" !== obj ? "ForwardRef(" + obj + ")" : "ForwardRef");
        case pause:
          return cb(data.type);
        case cancel:
          if (data = 1 === data._status ? data._result : null) {
            return cb(data);
          }
        ;
      }
    }
    return null;
  }
  /**
   * @param {Object} result
   * @return {?}
   */
  function on(result) {
    /** @type {string} */
    var optsData = "";
    do {
      e: {
        switch(result.tag) {
          case 3:
          ;
          case 4:
          ;
          case 6:
          ;
          case 7:
          ;
          case 10:
          ;
          case 9:
            /** @type {string} */
            var buf = "";
            break e;
          default:
            var msg = result._debugOwner;
            var error = result._debugSource;
            var type = cb(result.type);
            /** @type {null} */
            buf = null;
            if (msg) {
              buf = cb(msg.type);
            }
            msg = type;
            /** @type {string} */
            type = "";
            if (error) {
              /** @type {string} */
              type = " (at " + error.fileName.replace(r20, "") + ":" + error.lineNumber + ")";
            } else {
              if (buf) {
                /** @type {string} */
                type = " (created by " + buf + ")";
              }
            }
            /** @type {string} */
            buf = "\n    in " + (msg || "Unknown") + type;
        }
      }
      optsData += buf;
      result = result.return;
    } while (result);
    return optsData;
  }
  /**
   * @param {Object} body
   * @return {undefined}
   */
  function replace(body) {
    if (body = MAP(body)) {
      if ("function" != typeof set) {
        throw Error(callback(280));
      }
      var result = defer(body.stateNode);
      set(body.stateNode, body.type, result);
    }
  }
  /**
   * @param {Function} options
   * @return {undefined}
   */
  function configure(options) {
    if (from) {
      if (container) {
        container.push(options);
      } else {
        /** @type {Array} */
        container = [options];
      }
    } else {
      /** @type {Function} */
      from = options;
    }
  }
  /**
   * @return {undefined}
   */
  function type() {
    if (from) {
      var i = from;
      var codeSegments = container;
      if (container = from = null, replace(i), codeSegments) {
        /** @type {number} */
        i = 0;
        for (;i < codeSegments.length;i++) {
          replace(codeSegments[i]);
        }
      }
    }
  }
  /**
   * @param {Function} fn
   * @param {Object} arg
   * @return {?}
   */
  function assert(fn, arg) {
    return fn(arg);
  }
  /**
   * @param {Function} callback
   * @param {?} el
   * @param {?} context
   * @param {?} object
   * @return {?}
   */
  function attach(callback, el, context, object) {
    return callback(el, context, object);
  }
  /**
   * @return {undefined}
   */
  function removeListener() {
  }
  /**
   * @return {undefined}
   */
  function off() {
    if (!(null === from && null === container)) {
      removeListener();
      type();
    }
  }
  /**
   * @param {string} src
   * @param {number} eventType
   * @param {?} client
   * @param {(Array|number)} attributeName
   * @param {Element} details
   * @param {?} contentsOnly
   * @return {undefined}
   */
  function Image(src, eventType, client, attributeName, details, contentsOnly) {
    /** @type {boolean} */
    this.acceptsBooleans = 2 === eventType || (3 === eventType || 4 === eventType);
    /** @type {(Array|number)} */
    this.attributeName = attributeName;
    /** @type {Element} */
    this.attributeNamespace = details;
    this.mustUseProperty = client;
    /** @type {string} */
    this.propertyName = src;
    /** @type {number} */
    this.type = eventType;
    this.sanitizeURL = contentsOnly;
  }
  /**
   * @param {number} m
   * @return {?}
   */
  function boundary(m) {
    return m[1].toUpperCase();
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function format(value) {
    switch(typeof value) {
      case "boolean":
      ;
      case "number":
      ;
      case "object":
      ;
      case "string":
      ;
      case "undefined":
        return value;
      default:
        return "";
    }
  }
  /**
   * @param {Element} node
   * @param {string} key
   * @param {Object} value
   * @param {boolean} parent
   * @return {undefined}
   */
  function walk(node, key, value, parent) {
    var event = $cookies.hasOwnProperty(key) ? $cookies[key] : null;
    if (!(null !== event ? 0 === event.type : !parent && (2 < key.length && (("o" === key[0] || "O" === key[0]) && ("n" === key[1] || "N" === key[1]))))) {
      if (function(deepDataAndEvents, val2, startEvent, dataAndEvents) {
        if (null == val2 || function(deepDataAndEvents, val, e, dataAndEvents) {
          if (null !== e && 0 === e.type) {
            return false;
          }
          switch(typeof val) {
            case "function":
            ;
            case "symbol":
              return true;
            case "boolean":
              return!dataAndEvents && (null !== e ? !e.acceptsBooleans : "data-" !== (deepDataAndEvents = deepDataAndEvents.toLowerCase().slice(0, 5)) && "aria-" !== deepDataAndEvents);
            default:
              return false;
          }
        }(deepDataAndEvents, val2, startEvent, dataAndEvents)) {
          return true;
        }
        if (dataAndEvents) {
          return false;
        }
        if (null !== startEvent) {
          switch(startEvent.type) {
            case 3:
              return!val2;
            case 4:
              return false === val2;
            case 5:
              return isNaN(val2);
            case 6:
              return isNaN(val2) || 1 > val2;
          }
        }
        return false;
      }(key, value, event, parent)) {
        /** @type {null} */
        value = null;
      }
      if (parent || null === event) {
        if (function(name) {
          return!!__hasProp.call(matchers, name) || !__hasProp.call(pairs, name) && (rparentsprev.test(name) ? matchers[name] = true : (pairs[name] = true, false));
        }(key)) {
          if (null === value) {
            node.removeAttribute(key);
          } else {
            node.setAttribute(key, "" + value);
          }
        }
      } else {
        if (event.mustUseProperty) {
          node[event.propertyName] = null === value ? 3 !== event.type && "" : value;
        } else {
          key = event.attributeName;
          parent = event.attributeNamespace;
          if (null === value) {
            node.removeAttribute(key);
          } else {
            /** @type {string} */
            value = 3 === (event = event.type) || 4 === event && true === value ? "" : "" + value;
            if (parent) {
              node.setAttributeNS(parent, key, value);
            } else {
              node.setAttribute(key, value);
            }
          }
        }
      }
    }
  }
  /**
   * @param {string} node
   * @return {?}
   */
  function fixNode(node) {
    var type = node.type;
    return(node = node.nodeName) && ("input" === node.toLowerCase() && ("checkbox" === type || "radio" === type));
  }
  /**
   * @param {Object} ctx
   * @return {undefined}
   */
  function transform(ctx) {
    if (!ctx._valueTracker) {
      ctx._valueTracker = function(node) {
        /** @type {string} */
        var prop = fixNode(node) ? "checked" : "value";
        /** @type {(ObjectPropertyDescriptor|undefined)} */
        var desc = Object.getOwnPropertyDescriptor(node.constructor.prototype, prop);
        var value = "" + node[prop];
        if (!node.hasOwnProperty(prop) && (void 0 !== desc && ("function" == typeof desc.get && "function" == typeof desc.set))) {
          var getter = desc.get;
          var setter = desc.set;
          return Object.defineProperty(node, prop, {
            configurable : true,
            /**
             * @return {?}
             */
            get : function() {
              return getter.call(this);
            },
            /**
             * @param {string} key
             * @return {undefined}
             */
            set : function(key) {
              /** @type {string} */
              value = "" + key;
              setter.call(this, key);
            }
          }), Object.defineProperty(node, prop, {
            enumerable : desc.enumerable
          }), {
            /**
             * @return {?}
             */
            getValue : function() {
              return value;
            },
            /**
             * @param {string} val
             * @return {undefined}
             */
            setValue : function(val) {
              /** @type {string} */
              value = "" + val;
            },
            /**
             * @return {undefined}
             */
            stopTracking : function() {
              /** @type {null} */
              node._valueTracker = null;
              delete node[prop];
            }
          };
        }
      }(ctx);
    }
  }
  /**
   * @param {Object} item
   * @return {?}
   */
  function click(item) {
    if (!item) {
      return false;
    }
    var items = item._valueTracker;
    if (!items) {
      return true;
    }
    var n = items.getValue();
    /** @type {string} */
    var serialized = "";
    return item && (serialized = fixNode(item) ? item.checked ? "true" : "false" : item.value), (item = serialized) !== n && (items.setValue(item), true);
  }
  /**
   * @param {?} target
   * @param {Object} options
   * @return {?}
   */
  function mixin(target, options) {
    var value = options.checked;
    return extend({}, options, {
      defaultChecked : void 0,
      defaultValue : void 0,
      value : void 0,
      checked : null != value ? value : target._wrapperState.initialChecked
    });
  }
  /**
   * @param {?} element
   * @param {Element} elem
   * @return {undefined}
   */
  function getValue(element, elem) {
    var initialValue = null == elem.defaultValue ? "" : elem.defaultValue;
    var initialChecked = null != elem.checked ? elem.checked : elem.defaultChecked;
    initialValue = format(null != elem.value ? elem.value : initialValue);
    element._wrapperState = {
      initialChecked : initialChecked,
      initialValue : initialValue,
      controlled : "checkbox" === elem.type || "radio" === elem.type ? null != elem.checked : null != elem.value
    };
  }
  /**
   * @param {string} key
   * @param {string} actual
   * @return {undefined}
   */
  function equals(key, actual) {
    if (null != (actual = actual.checked)) {
      walk(key, "checked", actual, false);
    }
  }
  /**
   * @param {Object} elem
   * @param {Object} item
   * @return {?}
   */
  function check(elem, item) {
    equals(elem, item);
    var text = format(item.value);
    var type = item.type;
    if (null != text) {
      if ("number" === type) {
        if (0 === text && "" === elem.value || elem.value != text) {
          /** @type {string} */
          elem.value = "" + text;
        }
      } else {
        if (elem.value !== "" + text) {
          /** @type {string} */
          elem.value = "" + text;
        }
      }
    } else {
      if ("submit" === type || "reset" === type) {
        return void elem.removeAttribute("value");
      }
    }
    if (item.hasOwnProperty("value")) {
      getComputedStyle(elem, item.type, text);
    } else {
      if (item.hasOwnProperty("defaultValue")) {
        getComputedStyle(elem, item.type, format(item.defaultValue));
      }
    }
    if (null == item.checked) {
      if (null != item.defaultChecked) {
        /** @type {boolean} */
        elem.defaultChecked = !!item.defaultChecked;
      }
    }
  }
  /**
   * @param {Object} el
   * @param {string} v
   * @param {Object} name
   * @return {undefined}
   */
  function func(el, v, name) {
    if (v.hasOwnProperty("value") || v.hasOwnProperty("defaultValue")) {
      var type = v.type;
      if (!("submit" !== type && "reset" !== type || void 0 !== v.value && null !== v.value)) {
        return;
      }
      /** @type {string} */
      v = "" + el._wrapperState.initialValue;
      if (!name) {
        if (!(v === el.value)) {
          /** @type {string} */
          el.value = v;
        }
      }
      /** @type {string} */
      el.defaultValue = v;
    }
    if ("" !== (name = el.name)) {
      /** @type {string} */
      el.name = "";
    }
    /** @type {boolean} */
    el.defaultChecked = !el.defaultChecked;
    /** @type {boolean} */
    el.defaultChecked = !!el._wrapperState.initialChecked;
    if ("" !== name) {
      /** @type {Object} */
      el.name = name;
    }
  }
  /**
   * @param {Object} elem
   * @param {string} t
   * @param {string} c
   * @return {undefined}
   */
  function getComputedStyle(elem, t, c) {
    if (!("number" === t && elem.ownerDocument.activeElement === elem)) {
      if (null == c) {
        /** @type {string} */
        elem.defaultValue = "" + elem._wrapperState.initialValue;
      } else {
        if (elem.defaultValue !== "" + c) {
          /** @type {string} */
          elem.defaultValue = "" + c;
        }
      }
    }
  }
  /**
   * @param {Element} obj
   * @param {Object} args
   * @return {?}
   */
  function trigger(obj, args) {
    return obj = extend({
      children : void 0
    }, args), (args = function(defs) {
      /** @type {string} */
      var optsData = "";
      return graph.Children.forEach(defs, function(buf) {
        if (null != buf) {
          optsData += buf;
        }
      }), optsData;
    }(args.children)) && (obj.children = args), obj;
  }
  /**
   * @param {Object} options
   * @param {Object} option
   * @param {?} x
   * @param {boolean} recurring
   * @return {?}
   */
  function build(options, option, x, recurring) {
    if (options = options.options, option) {
      option = {};
      /** @type {number} */
      var i = 0;
      for (;i < x.length;i++) {
        /** @type {boolean} */
        option["$" + x[i]] = true;
      }
      /** @type {number} */
      x = 0;
      for (;x < options.length;x++) {
        /** @type {boolean} */
        i = option.hasOwnProperty("$" + options[x].value);
        if (options[x].selected !== i) {
          /** @type {boolean} */
          options[x].selected = i;
        }
        if (i) {
          if (recurring) {
            /** @type {boolean} */
            options[x].defaultSelected = true;
          }
        }
      }
    } else {
      /** @type {string} */
      x = "" + format(x);
      /** @type {null} */
      option = null;
      /** @type {number} */
      i = 0;
      for (;i < options.length;i++) {
        if (options[i].value === x) {
          return options[i].selected = true, void(recurring && (options[i].defaultSelected = true));
        }
        if (!(null !== option)) {
          if (!options[i].disabled) {
            option = options[i];
          }
        }
      }
      if (null !== option) {
        /** @type {boolean} */
        option.selected = true;
      }
    }
  }
  /**
   * @param {?} obj
   * @param {Object} data
   * @return {?}
   */
  function fire(obj, data) {
    if (null != data.dangerouslySetInnerHTML) {
      throw Error(callback(91));
    }
    return extend({}, data, {
      value : void 0,
      defaultValue : void 0,
      children : "" + obj._wrapperState.initialValue
    });
  }
  /**
   * @param {?} element
   * @param {string} item
   * @return {undefined}
   */
  function setup(element, item) {
    var val = item.value;
    if (null == val) {
      if (val = item.defaultValue, null != (item = item.children)) {
        if (null != val) {
          throw Error(callback(92));
        }
        if (Array.isArray(item)) {
          if (!(1 >= item.length)) {
            throw Error(callback(93));
          }
          item = item[0];
        }
        /** @type {string} */
        val = item;
      }
      if (null == val) {
        /** @type {string} */
        val = "";
      }
    }
    element._wrapperState = {
      initialValue : format(val)
    };
  }
  /**
   * @param {Object} element
   * @param {Object} node
   * @return {undefined}
   */
  function expect(element, node) {
    var value = format(node.value);
    var f = format(node.defaultValue);
    if (null != value) {
      if ((value = "" + value) !== element.value) {
        /** @type {string} */
        element.value = value;
      }
      if (null == node.defaultValue) {
        if (element.defaultValue !== value) {
          /** @type {string} */
          element.defaultValue = value;
        }
      }
    }
    if (null != f) {
      /** @type {string} */
      element.defaultValue = "" + f;
    }
  }
  /**
   * @param {Element} node
   * @return {undefined}
   */
  function setter(node) {
    var text = node.textContent;
    if (text === node._wrapperState.initialValue) {
      if ("" !== text) {
        if (null !== text) {
          node.value = text;
        }
      }
    }
  }
  /**
   * @param {string} keepData
   * @return {?}
   */
  function describe(keepData) {
    switch(keepData) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  /**
   * @param {string} object
   * @param {string} name
   * @return {?}
   */
  function hasKey(object, name) {
    return null == object || "http://www.w3.org/1999/xhtml" === object ? describe(name) : "http://www.w3.org/2000/svg" === object && "foreignObject" === name ? "http://www.w3.org/1999/xhtml" : object;
  }
  /**
   * @param {HTMLElement} node
   * @param {string} value
   * @return {?}
   */
  function $(node, value) {
    if (value) {
      var child = node.firstChild;
      if (child && (child === node.lastChild && 3 === child.nodeType)) {
        return void(child.nodeValue = value);
      }
    }
    /** @type {string} */
    node.textContent = value;
  }
  /**
   * @param {string} name
   * @param {string} eventName
   * @return {?}
   */
  function _prefixedEvent(name, eventName) {
    var _ = {};
    return _[name.toLowerCase()] = eventName.toLowerCase(), _["Webkit" + name] = "webkit" + eventName, _["Moz" + name] = "moz" + eventName, _;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function make_name(name) {
    if (object[name]) {
      return object[name];
    }
    if (!base[name]) {
      return name;
    }
    var i;
    var old = base[name];
    for (i in old) {
      if (old.hasOwnProperty(i) && i in arr2) {
        return object[name] = old[i];
      }
    }
    return name;
  }
  /**
   * @param {Object} node
   * @return {?}
   */
  function visit(node) {
    /** @type {Object} */
    var tree = node;
    /** @type {Object} */
    var root = node;
    if (node.alternate) {
      for (;tree.return;) {
        tree = tree.return;
      }
    } else {
      node = tree;
      do {
        if (0 != (1026 & (tree = node).effectTag)) {
          root = tree.return;
        }
        node = tree.return;
      } while (node);
    }
    return 3 === tree.tag ? root : null;
  }
  /**
   * @param {Object} object
   * @return {?}
   */
  function isArguments(object) {
    if (13 === object.tag) {
      var length = object.memoizedState;
      if (null === length && (null !== (object = object.alternate) && (length = object.memoizedState)), null !== length) {
        return length.dehydrated;
      }
    }
    return null;
  }
  /**
   * @param {Object} from
   * @return {undefined}
   */
  function validate(from) {
    if (visit(from) !== from) {
      throw Error(callback(188));
    }
  }
  /**
   * @param {Object} value
   * @return {?}
   */
  function step(value) {
    if (!(value = function(node) {
      var i = node.alternate;
      if (!i) {
        if (null === (i = visit(node))) {
          throw Error(callback(188));
        }
        return i !== node ? null : node;
      }
      /** @type {Object} */
      var self = node;
      var value = i;
      for (;;) {
        var option = self.return;
        if (null === option) {
          break;
        }
        var parent = option.alternate;
        if (null === parent) {
          if (null !== (value = option.return)) {
            self = value;
            continue;
          }
          break;
        }
        if (option.child === parent.child) {
          parent = option.child;
          for (;parent;) {
            if (parent === self) {
              return validate(option), node;
            }
            if (parent === value) {
              return validate(option), i;
            }
            parent = parent.sibling;
          }
          throw Error(callback(188));
        }
        if (self.return !== value.return) {
          self = option;
          value = parent;
        } else {
          /** @type {boolean} */
          var l = false;
          var item = option.child;
          for (;item;) {
            if (item === self) {
              /** @type {boolean} */
              l = true;
              self = option;
              value = parent;
              break;
            }
            if (item === value) {
              /** @type {boolean} */
              l = true;
              value = option;
              self = parent;
              break;
            }
            item = item.sibling;
          }
          if (!l) {
            item = parent.child;
            for (;item;) {
              if (item === self) {
                /** @type {boolean} */
                l = true;
                self = parent;
                value = option;
                break;
              }
              if (item === value) {
                /** @type {boolean} */
                l = true;
                value = parent;
                self = option;
                break;
              }
              item = item.sibling;
            }
            if (!l) {
              throw Error(callback(189));
            }
          }
        }
        if (self.alternate !== value) {
          throw Error(callback(190));
        }
      }
      if (3 !== self.tag) {
        throw Error(callback(188));
      }
      return self.stateNode.current === self ? node : i;
    }(value))) {
      return null;
    }
    /** @type {Object} */
    var ret = value;
    for (;;) {
      if (5 === ret.tag || 6 === ret.tag) {
        return ret;
      }
      if (ret.child) {
        ret.child.return = ret;
        ret = ret.child;
      } else {
        if (ret === value) {
          break;
        }
        for (;!ret.sibling;) {
          if (!ret.return || ret.return === value) {
            return null;
          }
          ret = ret.return;
        }
        ret.sibling.return = ret.return;
        ret = ret.sibling;
      }
    }
    return null;
  }
  /**
   * @param {Object} obj
   * @param {Error} val
   * @param {number} v
   * @param {Object} cb
   * @return {?}
   */
  function min(obj, val, v, cb) {
    return{
      blockedOn : obj,
      topLevelType : val,
      eventSystemFlags : 32 | v,
      nativeEvent : cb
    };
  }
  /**
   * @param {Error} type
   * @param {Object} result
   * @return {undefined}
   */
  function addEvents(type, result) {
    switch(type) {
      case "focus":
      ;
      case "blur":
        /** @type {null} */
        output = null;
        break;
      case "dragenter":
      ;
      case "dragleave":
        /** @type {null} */
        v = null;
        break;
      case "mouseover":
      ;
      case "mouseout":
        /** @type {null} */
        arg = null;
        break;
      case "pointerover":
      ;
      case "pointerout":
        results.delete(result.pointerId);
        break;
      case "gotpointercapture":
      ;
      case "lostpointercapture":
        methods.delete(result.pointerId);
    }
  }
  /**
   * @param {?} value
   * @param {Object} source
   * @param {Error} v
   * @param {number} arg
   * @param {Object} obj
   * @return {?}
   */
  function stringify(value, source, v, arg, obj) {
    return null === value || value.nativeEvent !== obj ? (value = min(source, v, arg, obj), null !== source && (null !== (source = (0,eval)(source)) && trim(source)), value) : (value.eventSystemFlags |= arg, value);
  }
  /**
   * @param {(Object|string)} event
   * @return {?}
   */
  function f1(event) {
    var from = findParent(event.target);
    if (null !== from) {
      var a = visit(from);
      if (null !== a) {
        if (13 === (from = a.tag)) {
          if (null !== (from = isArguments(a))) {
            return event.blockedOn = from, void table.unstable_runWithPriority(event.priority, function() {
              Element(a);
            });
          }
        } else {
          if (3 === from && a.stateNode.hydrate) {
            return void(event.blockedOn = 3 === a.tag ? a.stateNode.containerInfo : null);
          }
        }
      }
    }
    /** @type {null} */
    event.blockedOn = null;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  function evaluate(event) {
    if (null !== event.blockedOn) {
      return false;
    }
    var data = onError(event.topLevelType, event.eventSystemFlags, event.nativeEvent);
    if (null !== data) {
      var message = (0,eval)(data);
      return null !== message && trim(message), event.blockedOn = data, false;
    }
    return true;
  }
  /**
   * @param {?} state
   * @param {?} type
   * @param {Object} obj
   * @return {undefined}
   */
  function property(state, type, obj) {
    if (evaluate(state)) {
      obj.delete(type);
    }
  }
  /**
   * @return {undefined}
   */
  function poll() {
    /** @type {boolean} */
    lt = false;
    for (;0 < arr.length;) {
      var message = arr[0];
      if (null !== message.blockedOn) {
        if (null !== (message = (0,eval)(message.blockedOn))) {
          empty(message);
        }
        break;
      }
      var level = onError(message.topLevelType, message.eventSystemFlags, message.nativeEvent);
      if (null !== level) {
        message.blockedOn = level;
      } else {
        arr.shift();
      }
    }
    if (null !== output) {
      if (evaluate(output)) {
        /** @type {null} */
        output = null;
      }
    }
    if (null !== v) {
      if (evaluate(v)) {
        /** @type {null} */
        v = null;
      }
    }
    if (null !== arg) {
      if (evaluate(arg)) {
        /** @type {null} */
        arg = null;
      }
    }
    results.forEach(property);
    methods.forEach(property);
  }
  /**
   * @param {?} value
   * @param {?} target
   * @return {undefined}
   */
  function round(value, target) {
    if (value.blockedOn === target) {
      /** @type {null} */
      value.blockedOn = null;
      if (!lt) {
        /** @type {boolean} */
        lt = true;
        table.unstable_scheduleCallback(table.unstable_NormalPriority, poll);
      }
    }
  }
  /**
   * @param {?} value
   * @return {undefined}
   */
  function tick(value) {
    /**
     * @param {?} arg
     * @return {?}
     */
    function method(arg) {
      return round(arg, value);
    }
    if (0 < arr.length) {
      round(arr[0], value);
      /** @type {number} */
      var i = 1;
      for (;i < arr.length;i++) {
        var item = arr[i];
        if (item.blockedOn === value) {
          /** @type {null} */
          item.blockedOn = null;
        }
      }
    }
    if (null !== output) {
      round(output, value);
    }
    if (null !== v) {
      round(v, value);
    }
    if (null !== arg) {
      round(arg, value);
    }
    results.forEach(method);
    methods.forEach(method);
    /** @type {number} */
    i = 0;
    for (;i < items.length;i++) {
      if ((item = items[i]).blockedOn === value) {
        /** @type {null} */
        item.blockedOn = null;
      }
    }
    for (;0 < items.length && null === (i = items[0]).blockedOn;) {
      f1(i);
      if (null === i.blockedOn) {
        items.shift();
      }
    }
  }
  /**
   * @param {Object} target
   * @return {?}
   */
  function getTarget(target) {
    return(target = target.target || (target.srcElement || window)).correspondingUseElement && (target = target.correspondingUseElement), 3 === target.nodeType ? target.parentNode : target;
  }
  /**
   * @param {Object} x
   * @return {?}
   */
  function parseInt(x) {
    do {
      x = x.return;
    } while (x && 5 !== x.tag);
    return x || null;
  }
  /**
   * @param {Object} item
   * @param {string} data
   * @param {Object} event
   * @return {undefined}
   */
  function execute(item, data, event) {
    if (data = fn(item, event.dispatchConfig.phasedRegistrationNames[data])) {
      event._dispatchListeners = push(event._dispatchListeners, data);
      event._dispatchInstances = push(event._dispatchInstances, item);
    }
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function fetchData(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      var i = event._targetInst;
      /** @type {Array} */
      var vals = [];
      for (;i;) {
        vals.push(i);
        i = parseInt(i);
      }
      /** @type {number} */
      i = vals.length;
      for (;0 < i--;) {
        execute(vals[i], "captured", event);
      }
      /** @type {number} */
      i = 0;
      for (;i < vals.length;i++) {
        execute(vals[i], "bubbled", event);
      }
    }
  }
  /**
   * @param {Object} data
   * @param {string} x
   * @param {Object} event
   * @return {undefined}
   */
  function handle(data, x, event) {
    if (data) {
      if (event) {
        if (event.dispatchConfig.registrationName) {
          if (x = fn(data, event.dispatchConfig.registrationName)) {
            event._dispatchListeners = push(event._dispatchListeners, x);
            event._dispatchInstances = push(event._dispatchInstances, data);
          }
        }
      }
    }
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function n(event) {
    if (event) {
      if (event.dispatchConfig.registrationName) {
        handle(event._targetInst, null, event);
      }
    }
  }
  /**
   * @param {Object} event
   * @return {undefined}
   */
  function addEvent(event) {
    f(event, fetchData);
  }
  /**
   * @return {?}
   */
  function returnTrue() {
    return true;
  }
  /**
   * @return {?}
   */
  function _returnFalse() {
    return false;
  }
  /**
   * @param {Object} expectedHashCode
   * @param {?} num
   * @param {string} opt_attributes
   * @param {Object} value
   * @return {?}
   */
  function Event(expectedHashCode, num, opt_attributes, value) {
    var i;
    for (i in this.dispatchConfig = expectedHashCode, this._targetInst = num, this.nativeEvent = opt_attributes, expectedHashCode = this.constructor.Interface) {
      if (expectedHashCode.hasOwnProperty(i)) {
        if (num = expectedHashCode[i]) {
          this[i] = num(opt_attributes);
        } else {
          if ("target" === i) {
            /** @type {Object} */
            this.target = value;
          } else {
            this[i] = opt_attributes[i];
          }
        }
      }
    }
    return this.isDefaultPrevented = (null != opt_attributes.defaultPrevented ? opt_attributes.defaultPrevented : false === opt_attributes.returnValue) ? returnTrue : _returnFalse, this.isPropagationStopped = _returnFalse, this;
  }
  /**
   * @param {?} fn
   * @param {Object} obj
   * @param {Object} nativeEvent
   * @param {Object} name
   * @return {?}
   */
  function values(fn, obj, nativeEvent, name) {
    if (this.eventPool.length) {
      var r20 = this.eventPool.pop();
      return this.call(r20, fn, obj, nativeEvent, name), r20;
    }
    return new this(fn, obj, nativeEvent, name);
  }
  /**
   * @param {Object} v
   * @return {undefined}
   */
  function release(v) {
    if (!(v instanceof this)) {
      throw Error(callback(279));
    }
    v.destructor();
    if (10 > this.eventPool.length) {
      this.eventPool.push(v);
    }
  }
  /**
   * @param {Function} obj
   * @return {undefined}
   */
  function isPlainObject(obj) {
    /** @type {Array} */
    obj.eventPool = [];
    /** @type {function (?, Object, Object, Object): ?} */
    obj.getPooled = values;
    /** @type {function (Object): undefined} */
    obj.release = release;
  }
  /**
   * @param {number} e
   * @return {?}
   */
  function fixEvent(e) {
    var c = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && (13 === c && (e = 13)) : e = c, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
  }
  /**
   * @param {Text} b
   * @return {?}
   */
  function array(b) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(b) : !!(b = bytes[b]) && !!a[b];
  }
  /**
   * @return {?}
   */
  function repeat() {
    return array;
  }
  /**
   * @param {Object} element
   * @return {undefined}
   */
  function onElement(element) {
    var node = element.targetInst;
    var next = node;
    do {
      if (!next) {
        element.ancestors.push(next);
        break;
      }
      var child = next;
      if (3 === child.tag) {
        child = child.stateNode.containerInfo;
      } else {
        for (;child.return;) {
          child = child.return;
        }
        child = 3 !== child.tag ? null : child.stateNode.containerInfo;
      }
      if (!child) {
        break;
      }
      if (!(5 !== (node = next.tag) && 6 !== node)) {
        element.ancestors.push(next);
      }
      next = findParent(child);
    } while (next);
    /** @type {number} */
    next = 0;
    for (;next < element.ancestors.length;next++) {
      node = element.ancestors[next];
      var elements = getTarget(element.nativeEvent);
      child = element.topLevelType;
      var e = element.nativeEvent;
      var list = element.eventSystemFlags;
      /** @type {null} */
      var result = null;
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var callback = codeSegments[i];
        if (callback) {
          if (callback = callback.extractEvents(child, node, e, elements, list)) {
            result = push(result, callback);
          }
        }
      }
      addEventListener(result);
    }
  }
  /**
   * @param {string} type
   * @param {Object} message
   * @return {undefined}
   */
  function equal(type, message) {
    listen(message, type, false);
  }
  /**
   * @param {Object} s
   * @param {string} callback
   * @param {boolean} recurring
   * @return {undefined}
   */
  function listen(s, callback, recurring) {
    switch(makeCallback(callback)) {
      case 0:
        var cb = proxy.bind(null, callback, 1);
        break;
      case 1:
        cb = flow.bind(null, callback, 1);
        break;
      default:
        cb = next.bind(null, callback, 1);
    }
    if (recurring) {
      s.addEventListener(callback, cb, true);
    } else {
      s.addEventListener(callback, cb, false);
    }
  }
  /**
   * @param {?} fn
   * @param {?} func
   * @param {?} key
   * @return {undefined}
   */
  function proxy(fn, func, key) {
    if (!tag) {
      removeListener();
    }
    /** @type {function (Error, null, Object): undefined} */
    var el = next;
    var _tag = tag;
    /** @type {boolean} */
    tag = true;
    try {
      attach(el, fn, func, key);
    } finally {
      if (!(tag = _tag)) {
        off();
      }
    }
  }
  /**
   * @param {?} callback
   * @param {?} doc
   * @param {?} inEvent
   * @return {undefined}
   */
  function flow(callback, doc, inEvent) {
    tbody(attributes, next.bind(null, callback, doc, inEvent));
  }
  /**
   * @param {Object} doc
   * @param {Function} fn
   * @param {Object} callback
   * @param {?} c
   * @return {undefined}
   */
  function save(doc, fn, callback, c) {
    if (result.length) {
      var options = result.pop();
      /** @type {Object} */
      options.topLevelType = doc;
      /** @type {Function} */
      options.eventSystemFlags = fn;
      /** @type {Object} */
      options.nativeEvent = callback;
      options.targetInst = c;
      doc = options;
    } else {
      doc = {
        topLevelType : doc,
        /** @type {Function} */
        eventSystemFlags : fn,
        nativeEvent : callback,
        targetInst : c,
        ancestors : []
      };
    }
    try {
      if (fn = onElement, callback = doc, fe) {
        fn(callback, void 0);
      } else {
        /** @type {boolean} */
        fe = true;
        try {
          writeFile(fn, callback, void 0);
        } finally {
          /** @type {boolean} */
          fe = false;
          off();
        }
      }
    } finally {
      /** @type {null} */
      doc.topLevelType = null;
      /** @type {null} */
      doc.nativeEvent = null;
      /** @type {null} */
      doc.targetInst = null;
      /** @type {number} */
      doc.ancestors.length = 0;
      if (result.length < length) {
        result.push(doc);
      }
    }
  }
  /**
   * @param {Error} m
   * @param {null} event
   * @param {Object} callback
   * @return {undefined}
   */
  function next(m, event, callback) {
    if (clockseq) {
      if (0 < arr.length && -1 < matches.indexOf(m)) {
        m = min(null, m, event, callback);
        arr.push(m);
      } else {
        var e = onError(m, event, callback);
        if (null === e) {
          addEvents(m, callback);
        } else {
          if (-1 < matches.indexOf(m)) {
            m = min(e, m, event, callback);
            arr.push(m);
          } else {
            if (!function(value, key, e, easing) {
              switch(key) {
                case "focus":
                  return output = stringify(output, value, key, e, easing), true;
                case "dragenter":
                  return v = stringify(v, value, key, e, easing), true;
                case "mouseover":
                  return arg = stringify(arg, value, key, e, easing), true;
                case "pointerover":
                  var storageKey = easing.pointerId;
                  return results.set(storageKey, stringify(results.get(storageKey) || null, value, key, e, easing)), true;
                case "gotpointercapture":
                  return storageKey = easing.pointerId, methods.set(storageKey, stringify(methods.get(storageKey) || null, value, key, e, easing)), true;
              }
              return false;
            }(e, m, event, callback)) {
              addEvents(m, callback);
              save(m, event, callback, null);
            }
          }
        }
      }
    }
  }
  /**
   * @param {Object} m
   * @param {Function} event
   * @param {Object} value
   * @return {?}
   */
  function onError(m, event, value) {
    var cur = getTarget(value);
    if (null !== (cur = findParent(cur))) {
      var next = visit(cur);
      if (null === next) {
        /** @type {null} */
        cur = null;
      } else {
        var t = next.tag;
        if (13 === t) {
          if (null !== (cur = isArguments(next))) {
            return cur;
          }
          /** @type {null} */
          cur = null;
        } else {
          if (3 === t) {
            if (next.stateNode.hydrate) {
              return 3 === next.tag ? next.stateNode.containerInfo : null;
            }
            /** @type {null} */
            cur = null;
          } else {
            if (next !== cur) {
              /** @type {null} */
              cur = null;
            }
          }
        }
      }
    }
    return save(m, event, value, cur), null;
  }
  /**
   * @param {string} eventName
   * @return {?}
   */
  function stop(eventName) {
    if (!isWindowEnv) {
      return false;
    }
    /** @type {boolean} */
    var element = (eventName = "on" + eventName) in document;
    return element || ((element = document.createElement("div")).setAttribute(eventName, "return;"), element = "function" == typeof element[eventName]), element;
  }
  /**
   * @param {string} storageKey
   * @return {?}
   */
  function removeItem(storageKey) {
    var udataCur = data_user.get(storageKey);
    return void 0 === udataCur && (udataCur = new Set, data_user.set(storageKey, udataCur)), udataCur;
  }
  /**
   * @param {string} event
   * @param {Object} element
   * @param {Object} el
   * @return {undefined}
   */
  function listener(event, element, el) {
    if (!el.has(event)) {
      switch(event) {
        case "scroll":
          listen(element, "scroll", true);
          break;
        case "focus":
        ;
        case "blur":
          listen(element, "focus", true);
          listen(element, "blur", true);
          el.add("blur");
          el.add("focus");
          break;
        case "cancel":
        ;
        case "close":
          if (stop(event)) {
            listen(element, event, true);
          }
          break;
        case "invalid":
        ;
        case "submit":
        ;
        case "reset":
          break;
        default:
          if (-1 === events.indexOf(event)) {
            equal(event, element);
          }
        ;
      }
      el.add(event);
    }
  }
  /**
   * @param {string} key
   * @param {number} val
   * @param {string} value
   * @return {?}
   */
  function css(key, val, value) {
    return null == val || ("boolean" == typeof val || "" === val) ? "" : value || ("number" != typeof val || (0 === val || variables.hasOwnProperty(key) && variables[key])) ? ("" + val).trim() : val + "px";
  }
  /**
   * @param {Object} node
   * @param {Object} object
   * @return {undefined}
   */
  function load(node, object) {
    var property;
    for (property in node = node.style, object) {
      if (object.hasOwnProperty(property)) {
        /** @type {boolean} */
        var udataCur = 0 === property.indexOf("--");
        var value = css(property, object[property], udataCur);
        if ("float" === property) {
          /** @type {string} */
          property = "cssFloat";
        }
        if (udataCur) {
          node.setProperty(property, value);
        } else {
          node[property] = value;
        }
      }
    }
  }
  /**
   * @param {Object} key
   * @param {Object} obj
   * @return {undefined}
   */
  function forEach(key, obj) {
    if (obj) {
      if (locals[key] && (null != obj.children || null != obj.dangerouslySetInnerHTML)) {
        throw Error(callback(137, key, ""));
      }
      if (null != obj.dangerouslySetInnerHTML) {
        if (null != obj.children) {
          throw Error(callback(60));
        }
        if (!("object" == typeof obj.dangerouslySetInnerHTML && "__html" in obj.dangerouslySetInnerHTML)) {
          throw Error(callback(61));
        }
      }
      if (null != obj.style && "object" != typeof obj.style) {
        throw Error(callback(62, ""));
      }
    }
  }
  /**
   * @param {string} type
   * @param {?} t
   * @return {?}
   */
  function find(type, t) {
    if (-1 === type.indexOf("-")) {
      return "string" == typeof t.is;
    }
    switch(type) {
      case "annotation-xml":
      ;
      case "color-profile":
      ;
      case "font-face":
      ;
      case "font-face-src":
      ;
      case "font-face-uri":
      ;
      case "font-face-format":
      ;
      case "font-face-name":
      ;
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  /**
   * @param {Object} elem
   * @param {?} name
   * @return {undefined}
   */
  function createElement(elem, name) {
    var failuresLink = removeItem(elem = 9 === elem.nodeType || 11 === elem.nodeType ? elem : elem.ownerDocument);
    name = config[name];
    /** @type {number} */
    var c = 0;
    for (;c < name.length;c++) {
      listener(name[c], elem, failuresLink);
    }
  }
  /**
   * @return {undefined}
   */
  function t() {
  }
  /**
   * @param {Node} doc
   * @return {?}
   */
  function getSelection(doc) {
    if (void 0 === (doc = doc || ("undefined" != typeof document ? document : void 0))) {
      return null;
    }
    try {
      return doc.activeElement || doc.body;
    } catch (t) {
      return doc.body;
    }
  }
  /**
   * @param {Object} node
   * @return {?}
   */
  function cloneNode(node) {
    for (;node && node.firstChild;) {
      node = node.firstChild;
    }
    return node;
  }
  /**
   * @param {number} from
   * @param {number} value
   * @return {?}
   */
  function highlight(from, value) {
    var to;
    var node = cloneNode(from);
    /** @type {number} */
    from = 0;
    for (;node;) {
      if (3 === node.nodeType) {
        if (to = from + node.textContent.length, from <= value && to >= value) {
          return{
            node : node,
            offset : value - from
          };
        }
        from = to;
      }
      e: {
        for (;node;) {
          if (node.nextSibling) {
            node = node.nextSibling;
            break e;
          }
          node = node.parentNode;
        }
        node = void 0;
      }
      node = cloneNode(node);
    }
  }
  /**
   * @return {?}
   */
  function getData() {
    /** @type {Window} */
    var context = window;
    var data = getSelection();
    for (;data instanceof context.HTMLIFrameElement;) {
      try {
        /** @type {boolean} */
        var string = "string" == typeof data.contentWindow.location.href;
      } catch (e) {
        /** @type {boolean} */
        string = false;
      }
      if (!string) {
        break;
      }
      data = getSelection((context = data.contentWindow).document);
    }
    return data;
  }
  /**
   * @param {boolean} node
   * @return {?}
   */
  function init(node) {
    var name = node && (node.nodeName && node.nodeName.toLowerCase());
    return name && ("input" === name && ("text" === node.type || ("search" === node.type || ("tel" === node.type || ("url" === node.type || "password" === node.type)))) || ("textarea" === name || "true" === node.contentEditable));
  }
  /**
   * @param {?} type
   * @param {?} second
   * @return {?}
   */
  function needsFocus(type, second) {
    switch(type) {
      case "button":
      ;
      case "input":
      ;
      case "select":
      ;
      case "textarea":
        return!!second.autoFocus;
    }
    return false;
  }
  /**
   * @param {string} name
   * @param {Object} props
   * @return {?}
   */
  function get(name, props) {
    return "textarea" === name || ("option" === name || ("noscript" === name || ("string" == typeof props.children || ("number" == typeof props.children || "object" == typeof props.dangerouslySetInnerHTML && (null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html)))));
  }
  /**
   * @param {Object} node
   * @return {?}
   */
  function nextElement(node) {
    for (;null != node;node = node.nextSibling) {
      var type = node.nodeType;
      if (1 === type || 3 === type) {
        break;
      }
    }
    return node;
  }
  /**
   * @param {Object} el
   * @return {?}
   */
  function getParent(el) {
    el = el.previousSibling;
    /** @type {number} */
    var t = 0;
    for (;el;) {
      if (8 === el.nodeType) {
        var v = el.data;
        if (v === k || (v === WARN || v === ERROR)) {
          if (0 === t) {
            return el;
          }
          t--;
        } else {
          if (v === expected) {
            t++;
          }
        }
      }
      el = el.previousSibling;
    }
    return null;
  }
  /**
   * @param {Object} elem
   * @return {?}
   */
  function findParent(elem) {
    var o = elem[i];
    if (o) {
      return o;
    }
    var node = elem.parentNode;
    for (;node;) {
      if (o = node[last] || node[i]) {
        if (node = o.alternate, null !== o.child || null !== node && null !== node.child) {
          elem = getParent(elem);
          for (;null !== elem;) {
            if (node = elem[i]) {
              return node;
            }
            elem = getParent(elem);
          }
        }
        return o;
      }
      node = (elem = node).parentNode;
    }
    return null;
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function eval(data) {
    return!(data = data[i] || data[last]) || 5 !== data.tag && (6 !== data.tag && (13 !== data.tag && 3 !== data.tag)) ? null : data;
  }
  /**
   * @param {boolean} node
   * @return {?}
   */
  function createNode(node) {
    if (5 === node.tag || 6 === node.tag) {
      return node.stateNode;
    }
    throw Error(callback(33));
  }
  /**
   * @param {?} events
   * @return {?}
   */
  function mix(events) {
    return events[name] || null;
  }
  /**
   * @return {?}
   */
  function makeSelection() {
    if (cur) {
      return cur;
    }
    var j;
    var start;
    var result = tmp;
    var length = result.length;
    var a = "value" in elem ? elem.value : elem.textContent;
    var al = a.length;
    /** @type {number} */
    j = 0;
    for (;j < length && result[j] === a[j];j++) {
    }
    /** @type {number} */
    var n = length - j;
    /** @type {number} */
    start = 1;
    for (;start <= n && result[length - start] === a[al - start];start++) {
    }
    return cur = a.slice(j, 1 < start ? 1 - start : void 0);
  }
  /**
   * @param {string} type
   * @param {Object} evt
   * @return {?}
   */
  function close(type, evt) {
    switch(type) {
      case "keyup":
        return-1 !== HOT_KEYS.indexOf(evt.keyCode);
      case "keydown":
        return 229 !== evt.keyCode;
      case "keypress":
      ;
      case "mousedown":
      ;
      case "blur":
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {Object} e
   * @return {?}
   */
  function changePage(e) {
    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null;
  }
  /**
   * @param {boolean} elem
   * @return {?}
   */
  function getName(elem) {
    var name = elem && (elem.nodeName && elem.nodeName.toLowerCase());
    return "input" === name ? !!defaults[elem.type] : "textarea" === name;
  }
  /**
   * @param {Object} event
   * @param {?} nativeEvent
   * @param {?} options
   * @return {?}
   */
  function setValue(event, nativeEvent, options) {
    return(event = Event.getPooled(slider.change, event, nativeEvent, options)).type = "change", configure(options), addEvent(event), event;
  }
  /**
   * @param {Object} walkers
   * @return {undefined}
   */
  function task(walkers) {
    addEventListener(walkers);
  }
  /**
   * @param {Object} text
   * @return {?}
   */
  function escape(text) {
    if (click(createNode(text))) {
      return text;
    }
  }
  /**
   * @param {string} dataAndEvents
   * @param {boolean} elem
   * @return {?}
   */
  function restoreScript(dataAndEvents, elem) {
    if ("change" === dataAndEvents) {
      return elem;
    }
  }
  /**
   * @return {undefined}
   */
  function rmEvt() {
    if (capturedNode) {
      capturedNode.detachEvent("onpropertychange", onFocus);
      /** @type {null} */
      msg = capturedNode = null;
    }
  }
  /**
   * @param {Object} e
   * @return {undefined}
   */
  function onFocus(e) {
    if ("value" === e.propertyName && escape(msg)) {
      if (e = setValue(msg, e, getTarget(e)), tag) {
        addEventListener(e);
      } else {
        /** @type {boolean} */
        tag = true;
        try {
          assert(task, e);
        } finally {
          /** @type {boolean} */
          tag = false;
          off();
        }
      }
    }
  }
  /**
   * @param {string} dataAndEvents
   * @param {Function} target
   * @param {?} type
   * @return {undefined}
   */
  function navigate(dataAndEvents, target, type) {
    if ("focus" === dataAndEvents) {
      rmEvt();
      msg = type;
      (capturedNode = target).attachEvent("onpropertychange", onFocus);
    } else {
      if ("blur" === dataAndEvents) {
        rmEvt();
      }
    }
  }
  /**
   * @param {string} node
   * @return {?}
   */
  function literal(node) {
    if ("selectionchange" === node || ("keyup" === node || "keydown" === node)) {
      return escape(msg);
    }
  }
  /**
   * @param {string} dataAndEvents
   * @param {boolean} value
   * @return {?}
   */
  function response(dataAndEvents, value) {
    if ("click" === dataAndEvents) {
      return escape(value);
    }
  }
  /**
   * @param {string} key
   * @param {boolean} value
   * @return {?}
   */
  function access(key, value) {
    if ("input" === key || "change" === key) {
      return escape(value);
    }
  }
  /**
   * @param {?} a
   * @param {?} obj
   * @return {?}
   */
  function objEquiv(a, obj) {
    if (assertEquals(a, obj)) {
      return true;
    }
    if ("object" != typeof a || (null === a || ("object" != typeof obj || null === obj))) {
      return false;
    }
    /** @type {Array.<string>} */
    var items = Object.keys(a);
    /** @type {Array.<string>} */
    var i = Object.keys(obj);
    if (items.length !== i.length) {
      return false;
    }
    /** @type {number} */
    i = 0;
    for (;i < items.length;i++) {
      if (!hasOwn.call(obj, items[i]) || !assertEquals(a[items[i]], obj[items[i]])) {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {Object} event
   * @param {Object} obj
   * @return {?}
   */
  function select(event, obj) {
    var selection = obj.window === obj ? obj.document : 9 === obj.nodeType ? obj : obj.ownerDocument;
    return si || (null == ret || ret !== getSelection(selection)) ? null : ("selectionStart" in (selection = ret) && init(selection) ? selection = {
      start : selection.selectionStart,
      end : selection.selectionEnd
    } : selection = {
      anchorNode : (selection = (selection.ownerDocument && selection.ownerDocument.defaultView || window).getSelection()).anchorNode,
      anchorOffset : selection.anchorOffset,
      focusNode : selection.focusNode,
      focusOffset : selection.focusOffset
    }, actual && objEquiv(actual, selection) ? null : (actual = selection, (event = Event.getPooled(conf.select, suiteView, event, obj)).type = "select", event.target = ret, addEvent(event), event));
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function has(obj) {
    if (!(0 > lang)) {
      obj.current = url[lang];
      /** @type {null} */
      url[lang] = null;
      lang--;
    }
  }
  /**
   * @param {?} obj
   * @param {Object} val
   * @return {undefined}
   */
  function contains(obj, val) {
    lang++;
    url[lang] = obj.current;
    /** @type {Object} */
    obj.current = val;
  }
  /**
   * @param {Object} expr
   * @param {?} b
   * @return {?}
   */
  function call(expr, b) {
    var defaultConfig = expr.type.contextTypes;
    if (!defaultConfig) {
      return alternativeMessage;
    }
    var a = expr.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === b) {
      return a.__reactInternalMemoizedMaskedChildContext;
    }
    var key;
    var result = {};
    for (key in defaultConfig) {
      result[key] = b[key];
    }
    return a && ((expr = expr.stateNode).__reactInternalMemoizedUnmaskedChildContext = b, expr.__reactInternalMemoizedMaskedChildContext = result), result;
  }
  /**
   * @param {string} node
   * @return {?}
   */
  function encodeURIComponent(node) {
    return null != (node = node.childContextTypes);
  }
  /**
   * @param {?} action
   * @return {undefined}
   */
  function play(action) {
    has(b);
    has(seen);
  }
  /**
   * @param {?} n
   * @return {undefined}
   */
  function advance(n) {
    has(b);
    has(seen);
  }
  /**
   * @param {number} recurring
   * @param {Object} elem
   * @param {boolean} item
   * @return {undefined}
   */
  function apply(recurring, elem, item) {
    if (seen.current !== alternativeMessage) {
      throw Error(callback(168));
    }
    contains(seen, elem);
    contains(b, item);
  }
  /**
   * @param {Object} options
   * @param {Object} args
   * @param {?} settings
   * @return {?}
   */
  function run(options, args, settings) {
    var methods = options.stateNode;
    if (options = args.childContextTypes, "function" != typeof methods.getChildContext) {
      return settings;
    }
    var index;
    for (index in methods = methods.getChildContext()) {
      if (!(index in options)) {
        throw Error(callback(108, cb(args) || "Unknown", index));
      }
    }
    return extend({}, settings, {}, methods);
  }
  /**
   * @param {Object} optionsString
   * @return {?}
   */
  function _isFunction(optionsString) {
    var err = optionsString.stateNode;
    return err = err && err.__reactInternalMemoizedMergedChildContext || alternativeMessage, ol = seen.current, contains(seen, err), contains(b, b.current), true;
  }
  /**
   * @param {Object} data
   * @param {(Object|string)} item
   * @param {boolean} type
   * @return {undefined}
   */
  function queue(data, item, type) {
    var args = data.stateNode;
    if (!args) {
      throw Error(callback(169));
    }
    if (type) {
      item = run(data, item, ol);
      /** @type {(Object|string)} */
      args.__reactInternalMemoizedMergedChildContext = item;
      has(b);
      has(seen);
      contains(seen, item);
    } else {
      has(b);
    }
    contains(b, type);
  }
  /**
   * @return {?}
   */
  function reject() {
    switch(makeIterator()) {
      case command:
        return 99;
      case c:
        return 98;
      case count:
        return 97;
      case modelList:
        return 96;
      case frame:
        return 95;
      default:
        throw Error(callback(332));;
    }
  }
  /**
   * @param {number} cb
   * @return {?}
   */
  function maybeCallback(cb) {
    switch(cb) {
      case 99:
        return command;
      case 98:
        return c;
      case 97:
        return count;
      case 96:
        return modelList;
      case 95:
        return frame;
      default:
        throw Error(callback(332));;
    }
  }
  /**
   * @param {number} callback
   * @param {Function} name
   * @return {?}
   */
  function exists(callback, name) {
    return callback = maybeCallback(callback), validator(callback, name);
  }
  /**
   * @param {number} callback
   * @param {Function} options
   * @param {Object} key
   * @return {?}
   */
  function toJSON(callback, options, key) {
    return callback = maybeCallback(callback), exec(callback, options, key);
  }
  /**
   * @param {Function} context
   * @return {?}
   */
  function formatDate(context) {
    return null === args ? (args = [context], child = exec(command, resolve)) : args.push(context), formattedBack;
  }
  /**
   * @return {undefined}
   */
  function text() {
    if (null !== child) {
      var str = child;
      /** @type {null} */
      child = null;
      repeat_string(str);
    }
    resolve();
  }
  /**
   * @return {undefined}
   */
  function resolve() {
    if (!Vi && null !== args) {
      /** @type {boolean} */
      Vi = true;
      /** @type {number} */
      var i = 0;
      try {
        /** @type {Array} */
        var resultItems = args;
        exists(99, function() {
          for (;i < resultItems.length;i++) {
            var result = resultItems[i];
            do {
              result = result(true);
            } while (null !== result);
          }
        });
        /** @type {null} */
        args = null;
      } catch (t) {
        throw null !== args && (args = args.slice(i + 1)), exec(command, text), t;
      } finally {
        /** @type {boolean} */
        Vi = false;
      }
    }
  }
  /**
   * @param {number} object
   * @param {number} opt_attributes
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  function keys(object, opt_attributes, expectedNumberOfNonCommentArgs) {
    return 1073741821 - (1 + ((1073741821 - object + opt_attributes / 10) / (expectedNumberOfNonCommentArgs /= 10) | 0)) * expectedNumberOfNonCommentArgs;
  }
  /**
   * @param {Object} object
   * @param {Object} o
   * @return {?}
   */
  function bind(object, o) {
    if (object && object.defaultProps) {
      var k;
      for (k in o = extend({}, o), object = object.defaultProps) {
        if (void 0 === o[k]) {
          o[k] = object[k];
        }
      }
    }
    return o;
  }
  /**
   * @return {undefined}
   */
  function writeHead() {
    /** @type {null} */
    list = stack = mode = null;
  }
  /**
   * @param {Object} data
   * @param {?} value
   * @return {undefined}
   */
  function put(data, value) {
    var _context = data.type._context;
    contains(obj, _context._currentValue);
    _context._currentValue = value;
  }
  /**
   * @param {Object} object
   * @return {undefined}
   */
  function size(object) {
    /** @type {null} */
    var terse = obj.current;
    has(obj);
    /** @type {null} */
    object.type._context._currentValue = terse;
  }
  /**
   * @param {Object} self
   * @param {?} e
   * @return {undefined}
   */
  function hide(self, e) {
    for (;null !== self;) {
      var a = self.alternate;
      if (self.childExpirationTime < e) {
        self.childExpirationTime = e;
        if (null !== a) {
          if (a.childExpirationTime < e) {
            a.childExpirationTime = e;
          }
        }
      } else {
        if (!(null !== a && a.childExpirationTime < e)) {
          break;
        }
        a.childExpirationTime = e;
      }
      self = self.return;
    }
  }
  /**
   * @param {Object} options
   * @param {Object} callback
   * @return {undefined}
   */
  function ajax(options, callback) {
    /** @type {Object} */
    mode = options;
    /** @type {null} */
    list = stack = null;
    if (null !== (options = options.dependencies)) {
      if (null !== options.firstContext) {
        if (options.expirationTime >= callback) {
          /** @type {boolean} */
          iframe = true;
        }
        /** @type {null} */
        options.firstContext = null;
      }
    }
  }
  /**
   * @param {Function} object
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function each(object, deepDataAndEvents) {
    if (list !== object && (false !== deepDataAndEvents && 0 !== deepDataAndEvents)) {
      if ("number" == typeof deepDataAndEvents && 1073741823 !== deepDataAndEvents || (list = object, deepDataAndEvents = 1073741823), deepDataAndEvents = {
        /** @type {Function} */
        context : object,
        observedBits : deepDataAndEvents,
        next : null
      }, null === stack) {
        if (null === mode) {
          throw Error(callback(308));
        }
        /** @type {Object} */
        stack = deepDataAndEvents;
        mode.dependencies = {
          expirationTime : 0,
          firstContext : deepDataAndEvents,
          responders : null
        };
      } else {
        stack = stack.next = deepDataAndEvents;
      }
    }
    return object._currentValue;
  }
  /**
   * @param {?} o
   * @return {?}
   */
  function compileNode(o) {
    return{
      baseState : o,
      firstUpdate : null,
      lastUpdate : null,
      firstCapturedUpdate : null,
      lastCapturedUpdate : null,
      firstEffect : null,
      lastEffect : null,
      firstCapturedEffect : null,
      lastCapturedEffect : null
    };
  }
  /**
   * @param {Object} r
   * @return {?}
   */
  function fun(r) {
    return{
      baseState : r.baseState,
      firstUpdate : r.firstUpdate,
      lastUpdate : r.lastUpdate,
      firstCapturedUpdate : null,
      lastCapturedUpdate : null,
      firstEffect : null,
      lastEffect : null,
      firstCapturedEffect : null,
      lastCapturedEffect : null
    };
  }
  /**
   * @param {Object} source
   * @param {Array} key
   * @return {?}
   */
  function split(source, key) {
    return{
      expirationTime : source,
      suspenseConfig : key,
      tag : 0,
      payload : null,
      callback : null,
      next : null,
      nextEffect : null
    };
  }
  /**
   * @param {Object} v
   * @param {?} index
   * @return {undefined}
   */
  function extract(v, index) {
    if (null === v.lastUpdate) {
      v.firstUpdate = v.lastUpdate = index;
    } else {
      v.lastUpdate.next = index;
      v.lastUpdate = index;
    }
  }
  /**
   * @param {Object} dataAndEvents
   * @param {?} node
   * @return {undefined}
   */
  function traverseNode(dataAndEvents, node) {
    var v = dataAndEvents.alternate;
    if (null === v) {
      var l = dataAndEvents.updateQueue;
      /** @type {null} */
      var r = null;
      if (null === l) {
        l = dataAndEvents.updateQueue = compileNode(dataAndEvents.memoizedState);
      }
    } else {
      l = dataAndEvents.updateQueue;
      r = v.updateQueue;
      if (null === l) {
        if (null === r) {
          l = dataAndEvents.updateQueue = compileNode(dataAndEvents.memoizedState);
          r = v.updateQueue = compileNode(v.memoizedState);
        } else {
          l = dataAndEvents.updateQueue = fun(r);
        }
      } else {
        if (null === r) {
          r = v.updateQueue = fun(l);
        }
      }
    }
    if (null === r || l === r) {
      extract(l, node);
    } else {
      if (null === l.lastUpdate || null === r.lastUpdate) {
        extract(l, node);
        extract(r, node);
      } else {
        extract(l, node);
        r.lastUpdate = node;
      }
    }
  }
  /**
   * @param {Object} c
   * @param {?} path
   * @return {undefined}
   */
  function getFile(c, path) {
    var p = c.updateQueue;
    if (null === (p = null === p ? c.updateQueue = compileNode(c.memoizedState) : match(c, p)).lastCapturedUpdate) {
      p.firstCapturedUpdate = p.lastCapturedUpdate = path;
    } else {
      p.lastCapturedUpdate.next = path;
      p.lastCapturedUpdate = path;
    }
  }
  /**
   * @param {Object} item
   * @param {string} data
   * @return {?}
   */
  function match(item, data) {
    var value = item.alternate;
    return null !== value && (data === value.updateQueue && (data = item.updateQueue = fun(data))), data;
  }
  /**
   * @param {(Function|string)} callback
   * @param {number} recurring
   * @param {Object} obj
   * @param {?} r
   * @param {(Object|string)} options
   * @param {?} context
   * @return {?}
   */
  function sortedIndex(callback, recurring, obj, r, options, context) {
    switch(obj.tag) {
      case 1:
        return "function" == typeof(callback = obj.payload) ? callback.call(context, r, options) : callback;
      case 3:
        /** @type {number} */
        callback.effectTag = -4097 & callback.effectTag | 64;
      case 0:
        if (null == (options = "function" == typeof(callback = obj.payload) ? callback.call(context, r, options) : callback)) {
          break;
        }
        return extend({}, r, options);
      case 2:
        /** @type {boolean} */
        curr = true;
    }
    return r;
  }
  /**
   * @param {Object} str
   * @param {Object} obj
   * @param {Object} o
   * @param {?} item
   * @param {Object} object
   * @return {undefined}
   */
  function indexOf(str, obj, o, item, object) {
    /** @type {boolean} */
    curr = false;
    var queuedFn = (obj = match(str, obj)).baseState;
    /** @type {null} */
    var ctx = null;
    /** @type {number} */
    var i = 0;
    var context = obj.firstUpdate;
    var fn = queuedFn;
    for (;null !== context;) {
      var c = context.expirationTime;
      if (c < object) {
        if (null === ctx) {
          ctx = context;
          queuedFn = fn;
        }
        if (i < c) {
          i = c;
        }
      } else {
        slice(c, context.suspenseConfig);
        fn = sortedIndex(str, 0, context, fn, o, item);
        if (null !== context.callback) {
          str.effectTag |= 32;
          /** @type {null} */
          context.nextEffect = null;
          if (null === obj.lastEffect) {
            obj.firstEffect = obj.lastEffect = context;
          } else {
            obj.lastEffect.nextEffect = context;
            obj.lastEffect = context;
          }
        }
      }
      context = context.next;
    }
    /** @type {null} */
    c = null;
    context = obj.firstCapturedUpdate;
    for (;null !== context;) {
      var j = context.expirationTime;
      if (j < object) {
        if (null === c) {
          c = context;
          if (null === ctx) {
            queuedFn = fn;
          }
        }
        if (i < j) {
          i = j;
        }
      } else {
        fn = sortedIndex(str, 0, context, fn, o, item);
        if (null !== context.callback) {
          str.effectTag |= 32;
          /** @type {null} */
          context.nextEffect = null;
          if (null === obj.lastCapturedEffect) {
            obj.firstCapturedEffect = obj.lastCapturedEffect = context;
          } else {
            obj.lastCapturedEffect.nextEffect = context;
            obj.lastCapturedEffect = context;
          }
        }
      }
      context = context.next;
    }
    if (null === ctx) {
      /** @type {null} */
      obj.lastUpdate = null;
    }
    if (null === c) {
      /** @type {null} */
      obj.lastCapturedUpdate = null;
    } else {
      str.effectTag |= 32;
    }
    if (null === ctx) {
      if (null === c) {
        queuedFn = fn;
      }
    }
    obj.baseState = queuedFn;
    /** @type {null} */
    obj.firstUpdate = ctx;
    /** @type {null} */
    obj.firstCapturedUpdate = c;
    open(i);
    /** @type {number} */
    str.expirationTime = i;
    str.memoizedState = fn;
  }
  /**
   * @param {number} recurring
   * @param {?} obj
   * @param {?} name
   * @return {undefined}
   */
  function onComplete(recurring, obj, name) {
    if (null !== obj.firstCapturedUpdate) {
      if (null !== obj.lastUpdate) {
        obj.lastUpdate.next = obj.firstCapturedUpdate;
        obj.lastUpdate = obj.lastCapturedUpdate;
      }
      /** @type {null} */
      obj.firstCapturedUpdate = obj.lastCapturedUpdate = null;
    }
    draw(obj.firstEffect, name);
    /** @type {null} */
    obj.firstEffect = obj.lastEffect = null;
    draw(obj.firstCapturedEffect, name);
    /** @type {null} */
    obj.firstCapturedEffect = obj.lastCapturedEffect = null;
  }
  /**
   * @param {Object} options
   * @param {?} keepData
   * @return {undefined}
   */
  function draw(options, keepData) {
    for (;null !== options;) {
      var fn = options.callback;
      if (null !== fn) {
        /** @type {null} */
        options.callback = null;
        var elems = keepData;
        if ("function" != typeof fn) {
          throw Error(callback(191, fn));
        }
        fn.call(elems);
      }
      options = options.nextEffect;
    }
  }
  /**
   * @param {Object} options
   * @param {Object} data
   * @param {(Function|string)} c
   * @param {string} expectedHashCode
   * @return {undefined}
   */
  function tmpl(options, data, c, expectedHashCode) {
    c = null == (c = c(expectedHashCode, data = options.memoizedState)) ? data : extend({}, data, c);
    /** @type {(Function|string)} */
    options.memoizedState = c;
    if (null !== (expectedHashCode = options.updateQueue)) {
      if (0 === options.expirationTime) {
        /** @type {(Function|string)} */
        expectedHashCode.baseState = c;
      }
    }
  }
  /**
   * @param {(Function|string)} view
   * @param {Object} parent
   * @param {?} actual
   * @param {Object} key
   * @param {?} config
   * @param {?} values
   * @param {?} callback
   * @return {?}
   */
  function query(view, parent, actual, key, config, values, callback) {
    return "function" == typeof(view = view.stateNode).shouldComponentUpdate ? view.shouldComponentUpdate(key, values, callback) : !parent.prototype || (!parent.prototype.isPureReactComponent || (!objEquiv(actual, key) || !objEquiv(config, values)));
  }
  /**
   * @param {Object} event
   * @param {string} node
   * @param {string} string
   * @return {?}
   */
  function test(event, node, string) {
    /** @type {boolean} */
    var retNode = false;
    var oldconfig = alternativeMessage;
    var prop = node.contextType;
    return "object" == typeof prop && null !== prop ? prop = each(prop) : (oldconfig = encodeURIComponent(node) ? ol : seen.current, prop = (retNode = null != (retNode = node.contextTypes)) ? call(event, oldconfig) : alternativeMessage), node = new node(string, prop), event.memoizedState = null !== node.state && void 0 !== node.state ? node.state : null, node.updater = target, event.stateNode = node, node._reactInternalFiber = event, retNode && ((event = event.stateNode).__reactInternalMemoizedUnmaskedChildContext =
    oldconfig, event.__reactInternalMemoizedMaskedChildContext = prop), node;
  }
  /**
   * @param {(Function|string)} state
   * @param {(Object|string)} self
   * @param {boolean} callback
   * @param {?} fn
   * @return {undefined}
   */
  function errorHandler(state, self, callback, fn) {
    state = self.state;
    if ("function" == typeof self.componentWillReceiveProps) {
      self.componentWillReceiveProps(callback, fn);
    }
    if ("function" == typeof self.UNSAFE_componentWillReceiveProps) {
      self.UNSAFE_componentWillReceiveProps(callback, fn);
    }
    if (self.state !== state) {
      target.enqueueReplaceState(self, self.state, null);
    }
  }
  /**
   * @param {Object} options
   * @param {string} item
   * @param {Object} obj
   * @param {Object} object
   * @return {undefined}
   */
  function isArray(options, item, obj, object) {
    var self = options.stateNode;
    /** @type {Object} */
    self.props = obj;
    self.state = options.memoizedState;
    self.refs = originalrefs;
    var prop = item.contextType;
    if ("object" == typeof prop && null !== prop) {
      self.context = each(prop);
    } else {
      prop = encodeURIComponent(item) ? ol : seen.current;
      self.context = call(options, prop);
    }
    if (null !== (prop = options.updateQueue)) {
      indexOf(options, prop, obj, self, object);
      self.state = options.memoizedState;
    }
    if ("function" == typeof(prop = item.getDerivedStateFromProps)) {
      tmpl(options, item, prop, obj);
      self.state = options.memoizedState;
    }
    if (!("function" == typeof item.getDerivedStateFromProps)) {
      if (!("function" == typeof self.getSnapshotBeforeUpdate)) {
        if (!("function" != typeof self.UNSAFE_componentWillMount && "function" != typeof self.componentWillMount)) {
          item = self.state;
          if ("function" == typeof self.componentWillMount) {
            self.componentWillMount();
          }
          if ("function" == typeof self.UNSAFE_componentWillMount) {
            self.UNSAFE_componentWillMount();
          }
          if (item !== self.state) {
            target.enqueueReplaceState(self, self.state, null);
          }
          if (null !== (prop = options.updateQueue)) {
            indexOf(options, prop, obj, self, object);
            self.state = options.memoizedState;
          }
        }
      }
    }
    if ("function" == typeof self.componentDidMount) {
      options.effectTag |= 4;
    }
  }
  /**
   * @param {(Function|string)} data
   * @param {Object} item
   * @param {Object} config
   * @return {?}
   */
  function success(data, item, config) {
    if (null !== (data = config.ref) && ("function" != typeof data && "object" != typeof data)) {
      if (config._owner) {
        if (config = config._owner) {
          if (1 !== config.tag) {
            throw Error(callback(309));
          }
          var root = config.stateNode;
        }
        if (!root) {
          throw Error(callback(147, data));
        }
        /** @type {string} */
        var tail = "" + data;
        return null !== item && (null !== item.ref && ("function" == typeof item.ref && item.ref._stringRef === tail)) ? item.ref : ((item = function(val) {
          var qs = root.refs;
          if (qs === originalrefs) {
            qs = root.refs = {};
          }
          if (null === val) {
            delete qs[tail];
          } else {
            /** @type {number} */
            qs[tail] = val;
          }
        })._stringRef = tail, item);
      }
      if ("string" != typeof data) {
        throw Error(callback(284));
      }
      if (!config._owner) {
        throw Error(callback(290, data));
      }
    }
    return data;
  }
  /**
   * @param {Object} e
   * @param {?} str
   * @return {undefined}
   */
  function done(e, str) {
    if ("textarea" !== e.type) {
      throw Error(callback(31, "[object Object]" === Object.prototype.toString.call(str) ? "object with keys {" + Object.keys(str).join(", ") + "}" : str, ""));
    }
  }
  /**
   * @param {boolean} recurring
   * @return {?}
   */
  function onSuccess(recurring) {
    /**
     * @param {Object} e
     * @param {?} arr
     * @return {undefined}
     */
    function next(e, arr) {
      if (recurring) {
        var options = e.lastEffect;
        if (null !== options) {
          options.nextEffect = arr;
          e.lastEffect = arr;
        } else {
          e.firstEffect = e.lastEffect = arr;
        }
        /** @type {null} */
        arr.nextEffect = null;
        /** @type {number} */
        arr.effectTag = 8;
      }
    }
    /**
     * @param {Object} n
     * @param {Object} obj
     * @return {?}
     */
    function $(n, obj) {
      if (!recurring) {
        return null;
      }
      for (;null !== obj;) {
        next(n, obj);
        obj = obj.sibling;
      }
      return null;
    }
    /**
     * @param {Object} item
     * @param {Object} t
     * @return {?}
     */
    function update(item, t) {
      item = new Map;
      for (;null !== t;) {
        if (null !== t.key) {
          item.set(t.key, t);
        } else {
          item.set(t.index, t);
        }
        t = t.sibling;
      }
      return item;
    }
    /**
     * @param {Object} obj
     * @param {Object} name
     * @param {?} opt_default
     * @return {?}
     */
    function get(obj, name, opt_default) {
      return(obj = _(obj, name)).index = 0, obj.sibling = null, obj;
    }
    /**
     * @param {Object} o
     * @param {?} n
     * @param {Object} i
     * @return {?}
     */
    function f(o, n, i) {
      return o.index = i, recurring ? null !== (i = o.alternate) ? (i = i.index) < n ? (o.effectTag = 2, n) : i : (o.effectTag = 2, n) : n;
    }
    /**
     * @param {Object} opt_e
     * @return {?}
     */
    function logError(opt_e) {
      return recurring && (null === opt_e.alternate && (opt_e.effectTag = 2)), opt_e;
    }
    /**
     * @param {Object} v
     * @param {Object} val
     * @param {string} path
     * @param {Function} value
     * @return {?}
     */
    function resolve(v, val, path, value) {
      return null === val || 6 !== val.tag ? ((val = require(path, v.mode, value)).return = v, val) : ((val = get(val, path)).return = v, val);
    }
    /**
     * @param {Object} v
     * @param {Object} item
     * @param {Object} data
     * @param {Function} result
     * @return {?}
     */
    function emit(v, item, data, result) {
      return null !== item && item.elementType === data.type ? ((result = get(item, data.props)).ref = success(v, item, data), result.return = v, result) : ((result = handler(data.type, data.key, data.props, null, v.mode, result)).ref = success(v, item, data), result.return = v, result);
    }
    /**
     * @param {Object} v
     * @param {Object} node
     * @param {Object} row
     * @param {Function} value
     * @return {?}
     */
    function fn(v, node, row, value) {
      return null === node || (4 !== node.tag || (node.stateNode.containerInfo !== row.containerInfo || node.stateNode.implementation !== row.implementation)) ? ((node = clone(row, v.mode, value)).return = v, node) : ((node = get(node, row.children || [])).return = v, node);
    }
    /**
     * @param {Object} v
     * @param {Object} result
     * @param {Object} data
     * @param {Function} value
     * @param {Object} recurring
     * @return {?}
     */
    function callback(v, result, data, value, recurring) {
      return null === result || 7 !== result.tag ? ((result = filter(data, v.mode, value, recurring)).return = v, result) : ((result = get(result, data)).return = v, result);
    }
    /**
     * @param {Object} result
     * @param {Object} data
     * @param {Function} options
     * @return {?}
     */
    function cb(result, data, options) {
      if ("string" == typeof data || "number" == typeof data) {
        return(data = require("" + data, result.mode, options)).return = result, data;
      }
      if ("object" == typeof data && null !== data) {
        switch(data.$$typeof) {
          case CLOSE_EVENT:
            return(options = handler(data.type, data.key, data.props, null, result.mode, options)).ref = success(result, null, data), options.return = result, options;
          case LOCATION_CHANGED_EVENT:
            return(data = clone(data, result.mode, options)).return = result, data;
        }
        if (ok(data) || isObject(data)) {
          return(data = filter(data, result.mode, options, null)).return = result, data;
        }
        done(result, data);
      }
      return null;
    }
    /**
     * @param {Object} result
     * @param {Object} val
     * @param {Object} data
     * @param {Function} status
     * @return {?}
     */
    function add(result, val, data, status) {
      var recurring = null !== val ? val.key : null;
      if ("string" == typeof data || "number" == typeof data) {
        return null !== recurring ? null : resolve(result, val, "" + data, status);
      }
      if ("object" == typeof data && null !== data) {
        switch(data.$$typeof) {
          case CLOSE_EVENT:
            return data.key === recurring ? data.type === Infinity ? callback(result, val, data.props.children, status, recurring) : emit(result, val, data, status) : null;
          case LOCATION_CHANGED_EVENT:
            return data.key === recurring ? fn(result, val, data, status) : null;
        }
        if (ok(data) || isObject(data)) {
          return null !== recurring ? null : callback(result, val, data, status, null);
        }
        done(result, data);
      }
      return null;
    }
    /**
     * @param {(Object|string)} doc
     * @param {Object} result
     * @param {Object} key
     * @param {Object} data
     * @param {Function} status
     * @return {?}
     */
    function success(doc, result, key, data, status) {
      if ("string" == typeof data || "number" == typeof data) {
        return resolve(result, doc = doc.get(key) || null, "" + data, status);
      }
      if ("object" == typeof data && null !== data) {
        switch(data.$$typeof) {
          case CLOSE_EVENT:
            return doc = doc.get(null === data.key ? key : data.key) || null, data.type === Infinity ? callback(result, doc, data.props.children, status, data.key) : emit(result, doc, data, status);
          case LOCATION_CHANGED_EVENT:
            return fn(result, doc = doc.get(null === data.key ? key : data.key) || null, data, status);
        }
        if (ok(data) || isObject(data)) {
          return callback(result, doc = doc.get(key) || null, data, status, null);
        }
        done(result, data);
      }
      return null;
    }
    /**
     * @param {Object} a
     * @param {Object} v
     * @param {Object} items
     * @param {Function} body
     * @return {?}
     */
    function complete(a, v, items, body) {
      /** @type {null} */
      var result = null;
      /** @type {null} */
      var options = null;
      /** @type {Object} */
      var obj = v;
      /** @type {number} */
      var i = v = 0;
      /** @type {null} */
      var o = null;
      for (;null !== obj && i < items.length;i++) {
        if (obj.index > i) {
          o = obj;
          /** @type {null} */
          obj = null;
        } else {
          o = obj.sibling;
        }
        var item = add(a, obj, items[i], body);
        if (null === item) {
          if (null === obj) {
            /** @type {null} */
            obj = o;
          }
          break;
        }
        if (recurring) {
          if (obj) {
            if (null === item.alternate) {
              next(a, obj);
            }
          }
        }
        v = f(item, v, i);
        if (null === options) {
          result = item;
        } else {
          options.sibling = item;
        }
        options = item;
        /** @type {null} */
        obj = o;
      }
      if (i === items.length) {
        return $(a, obj), result;
      }
      if (null === obj) {
        for (;i < items.length;i++) {
          if (null !== (obj = cb(a, items[i], body))) {
            v = f(obj, v, i);
            if (null === options) {
              result = obj;
            } else {
              options.sibling = obj;
            }
            options = obj;
          }
        }
        return result;
      }
      obj = update(a, obj);
      for (;i < items.length;i++) {
        if (null !== (o = success(obj, a, i, items[i], body))) {
          if (recurring) {
            if (null !== o.alternate) {
              obj.delete(null === o.key ? i : o.key);
            }
          }
          v = f(o, v, i);
          if (null === options) {
            result = o;
          } else {
            options.sibling = o;
          }
          options = o;
        }
      }
      return recurring && obj.forEach(function(topic) {
        return next(a, topic);
      }), result;
    }
    /**
     * @param {Object} i
     * @param {Object} path
     * @param {Object} src
     * @param {Function} data
     * @return {?}
     */
    function process(i, path, src, data) {
      var fn = isObject(src);
      if ("function" != typeof fn) {
        throw Error(callback(150));
      }
      if (null == (src = fn.call(src))) {
        throw Error(callback(151));
      }
      /** @type {null} */
      var node = fn = null;
      /** @type {Object} */
      var obj = path;
      /** @type {number} */
      var name = path = 0;
      /** @type {null} */
      var o = null;
      var ret = src.next();
      for (;null !== obj && !ret.done;name++, ret = src.next()) {
        if (obj.index > name) {
          o = obj;
          /** @type {null} */
          obj = null;
        } else {
          o = obj.sibling;
        }
        var value = add(i, obj, ret.value, data);
        if (null === value) {
          if (null === obj) {
            /** @type {null} */
            obj = o;
          }
          break;
        }
        if (recurring) {
          if (obj) {
            if (null === value.alternate) {
              next(i, obj);
            }
          }
        }
        path = f(value, path, name);
        if (null === node) {
          fn = value;
        } else {
          node.sibling = value;
        }
        node = value;
        /** @type {null} */
        obj = o;
      }
      if (ret.done) {
        return $(i, obj), fn;
      }
      if (null === obj) {
        for (;!ret.done;name++, ret = src.next()) {
          if (null !== (ret = cb(i, ret.value, data))) {
            path = f(ret, path, name);
            if (null === node) {
              fn = ret;
            } else {
              node.sibling = ret;
            }
            node = ret;
          }
        }
        return fn;
      }
      obj = update(i, obj);
      for (;!ret.done;name++, ret = src.next()) {
        if (null !== (ret = success(obj, i, name, ret.value, data))) {
          if (recurring) {
            if (null !== ret.alternate) {
              obj.delete(null === ret.key ? name : ret.key);
            }
          }
          path = f(ret, path, name);
          if (null === node) {
            fn = ret;
          } else {
            node.sibling = ret;
          }
          node = ret;
        }
      }
      return recurring && obj.forEach(function(topic) {
        return next(i, topic);
      }), fn;
    }
    return function(e, result, options, i) {
      /** @type {boolean} */
      var item = "object" == typeof options && (null !== options && (options.type === Infinity && null === options.key));
      if (item) {
        options = options.props.children;
      }
      /** @type {boolean} */
      var id = "object" == typeof options && null !== options;
      if (id) {
        switch(options.$$typeof) {
          case CLOSE_EVENT:
            e: {
              id = options.key;
              /** @type {Object} */
              item = result;
              for (;null !== item;) {
                if (item.key === id) {
                  if (7 === item.tag ? options.type === Infinity : item.elementType === options.type) {
                    $(e, item.sibling);
                    (result = get(item, options.type === Infinity ? options.props.children : options.props)).ref = success(e, item, options);
                    /** @type {Object} */
                    result.return = e;
                    /** @type {Object} */
                    e = result;
                    break e;
                  }
                  $(e, item);
                  break;
                }
                next(e, item);
                item = item.sibling;
              }
              if (options.type === Infinity) {
                /** @type {Object} */
                (result = filter(options.props.children, e.mode, i, options.key)).return = e;
                /** @type {Object} */
                e = result;
              } else {
                (i = handler(options.type, options.key, options.props, null, e.mode, i)).ref = success(e, result, options);
                /** @type {Object} */
                i.return = e;
                /** @type {Object} */
                e = i;
              }
            }
            return logError(e);
          case LOCATION_CHANGED_EVENT:
            e: {
              item = options.key;
              for (;null !== result;) {
                if (result.key === item) {
                  if (4 === result.tag && (result.stateNode.containerInfo === options.containerInfo && result.stateNode.implementation === options.implementation)) {
                    $(e, result.sibling);
                    /** @type {Object} */
                    (result = get(result, options.children || [])).return = e;
                    /** @type {Object} */
                    e = result;
                    break e;
                  }
                  $(e, result);
                  break;
                }
                next(e, result);
                result = result.sibling;
              }
              /** @type {Object} */
              (result = clone(options, e.mode, i)).return = e;
              /** @type {Object} */
              e = result;
            }
            return logError(e);
        }
      }
      if ("string" == typeof options || "number" == typeof options) {
        return options = "" + options, null !== result && 6 === result.tag ? ($(e, result.sibling), (result = get(result, options)).return = e, e = result) : ($(e, result), (result = require(options, e.mode, i)).return = e, e = result), logError(e);
      }
      if (ok(options)) {
        return complete(e, result, options, i);
      }
      if (isObject(options)) {
        return process(e, result, options, i);
      }
      if (id && done(e, options), void 0 === options && !item) {
        switch(e.tag) {
          case 1:
          ;
          case 0:
            throw e = e.type, Error(callback(152, e.displayName || (e.name || "Component")));;
        }
      }
      return $(e, result);
    };
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function value(val) {
    if (val === needle) {
      throw Error(callback(174));
    }
    return val;
  }
  /**
   * @param {Object} target
   * @param {Object} a
   * @return {undefined}
   */
  function handleEvent(target, a) {
    contains(source, a);
    contains(prop, target);
    contains(el, needle);
    var t = a.nodeType;
    switch(t) {
      case 9:
      ;
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : hasKey(null, "");
        break;
      default:
        a = hasKey(a = (t = 8 === t ? a.parentNode : a).namespaceURI || null, t = t.tagName);
    }
    has(el);
    contains(el, a);
  }
  /**
   * @param {?} throwable
   * @return {undefined}
   */
  function trace(throwable) {
    has(el);
    has(prop);
    has(source);
  }
  /**
   * @param {Object} b
   * @return {undefined}
   */
  function is_or_contains(b) {
    value(source.current);
    var seen = value(el.current);
    var found = hasKey(seen, b.type);
    if (seen !== found) {
      contains(prop, b);
      contains(el, found);
    }
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function toArray(obj) {
    if (prop.current === obj) {
      has(el);
      has(prop);
    }
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function normalize(object) {
    var ret = object;
    for (;null !== ret;) {
      if (13 === ret.tag) {
        var next = ret.memoizedState;
        if (null !== next && (null === (next = next.dehydrated) || (next.data === ERROR || next.data === WARN))) {
          return ret;
        }
      } else {
        if (19 === ret.tag && void 0 !== ret.memoizedProps.revealOrder) {
          if (0 != (64 & ret.effectTag)) {
            return ret;
          }
        } else {
          if (null !== ret.child) {
            ret.child.return = ret;
            ret = ret.child;
            continue;
          }
        }
      }
      if (ret === object) {
        break;
      }
      for (;null === ret.sibling;) {
        if (null === ret.return || ret.return === object) {
          return null;
        }
        ret = ret.return;
      }
      ret.sibling.return = ret.return;
      ret = ret.sibling;
    }
    return null;
  }
  /**
   * @param {Function} expectation
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function wasComparison(expectation, deepDataAndEvents) {
    return{
      /** @type {Function} */
      responder : expectation,
      props : deepDataAndEvents
    };
  }
  /**
   * @return {?}
   */
  function getAll() {
    throw Error(callback(321));
  }
  /**
   * @param {Array} deepDataAndEvents
   * @param {Object} array
   * @return {?}
   */
  function containsMatch(deepDataAndEvents, array) {
    if (null === array) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (;i < array.length && i < deepDataAndEvents.length;i++) {
      if (!assertEquals(deepDataAndEvents[i], array[i])) {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {Object} obj
   * @param {string} str
   * @param {?} cb
   * @param {string} x
   * @param {?} v
   * @param {Object} data
   * @return {?}
   */
  function log(obj, str, cb, x, v, data) {
    if (lastValue = data, root = str, node = null !== obj ? obj.memoizedState : null, self.current = null === node ? pageX : current, str = cb(x, v), ua) {
      do {
        /** @type {boolean} */
        ua = false;
        fa += 1;
        node = null !== obj ? obj.memoizedState : null;
        t1 = head;
        /** @type {null} */
        that = tail = element = null;
        self.current = current;
        str = cb(x, v);
      } while (ua);
      /** @type {null} */
      _self = null;
      /** @type {number} */
      fa = 0;
    }
    if (self.current = to, (obj = root).memoizedState = head, obj.expirationTime = bestValue, obj.updateQueue = that, obj.effectTag |= effectTag, obj = null !== element && null !== element.next, lastValue = 0, t1 = tail = head = node = element = root = null, bestValue = 0, that = null, effectTag = 0, obj) {
      throw Error(callback(300));
    }
    return str;
  }
  /**
   * @return {undefined}
   */
  function Status() {
    self.current = to;
    /** @type {number} */
    lastValue = 0;
    /** @type {null} */
    t1 = tail = head = node = element = root = null;
    /** @type {number} */
    bestValue = 0;
    /** @type {null} */
    that = null;
    /** @type {number} */
    effectTag = 0;
    /** @type {boolean} */
    ua = false;
    /** @type {null} */
    _self = null;
    /** @type {number} */
    fa = 0;
  }
  /**
   * @return {?}
   */
  function toVLQSigned() {
    var next = {
      memoizedState : null,
      baseState : null,
      queue : null,
      baseUpdate : null,
      next : null
    };
    return null === tail ? head = tail = next : tail = tail.next = next, tail;
  }
  /**
   * @return {?}
   */
  function emit() {
    if (null !== t1) {
      t1 = (tail = t1).next;
      node = null !== (element = node) ? element.next : null;
    } else {
      if (null === node) {
        throw Error(callback(310));
      }
      var next = {
        memoizedState : (element = node).memoizedState,
        baseState : element.baseState,
        queue : element.queue,
        baseUpdate : element.baseUpdate,
        next : null
      };
      tail = null === tail ? head = next : tail.next = next;
      node = element.next;
    }
    return tail;
  }
  /**
   * @param {string} expectedHashCode
   * @param {?} num
   * @return {?}
   */
  function expectation(expectedHashCode, num) {
    return "function" == typeof num ? num(expectedHashCode) : num;
  }
  /**
   * @param {Function} object
   * @return {?}
   */
  function remove(object) {
    var el = emit();
    var node = el.queue;
    if (null === node) {
      throw Error(callback(311));
    }
    if (node.lastRenderedReducer = object, 0 < fa) {
      var target = node.dispatch;
      if (null !== _self) {
        var v = _self.get(node);
        if (void 0 !== v) {
          _self.delete(node);
          var expectedHashCode = el.memoizedState;
          do {
            expectedHashCode = object(expectedHashCode, v.action);
            v = v.next;
          } while (null !== v);
          return assertEquals(expectedHashCode, el.memoizedState) || (iframe = true), el.memoizedState = expectedHashCode, el.baseUpdate === node.last && (el.baseState = expectedHashCode), node.lastRenderedState = expectedHashCode, [expectedHashCode, target];
        }
      }
      return[el.memoizedState, target];
    }
    target = node.last;
    var src = el.baseUpdate;
    if (expectedHashCode = el.baseState, null !== src ? (null !== target && (target.next = null), target = src.next) : target = null !== target ? target.next : null, null !== target) {
      /** @type {null} */
      var ret = v = null;
      var item = target;
      /** @type {boolean} */
      var c = false;
      do {
        var value = item.expirationTime;
        if (value < lastValue) {
          if (!c) {
            /** @type {boolean} */
            c = true;
            ret = src;
            v = expectedHashCode;
          }
          if (value > bestValue) {
            open(bestValue = value);
          }
        } else {
          slice(value, item.suspenseConfig);
          expectedHashCode = item.eagerReducer === object ? item.eagerState : object(expectedHashCode, item.action);
        }
        src = item;
        item = item.next;
      } while (null !== item && item !== target);
      if (!c) {
        ret = src;
        v = expectedHashCode;
      }
      if (!assertEquals(expectedHashCode, el.memoizedState)) {
        /** @type {boolean} */
        iframe = true;
      }
      el.memoizedState = expectedHashCode;
      el.baseUpdate = ret;
      el.baseState = v;
      node.lastRenderedState = expectedHashCode;
    }
    return[el.memoizedState, node.dispatch];
  }
  /**
   * @param {Function} actual
   * @return {?}
   */
  function compare(actual) {
    var div = toVLQSigned();
    return "function" == typeof actual && (actual = actual()), div.memoizedState = div.baseState = actual, actual = (actual = div.queue = {
      last : null,
      dispatch : null,
      /** @type {function (string, ?): ?} */
      lastRenderedReducer : expectation,
      /** @type {Function} */
      lastRenderedState : actual
    }).dispatch = initialize.bind(null, root, actual), [div.memoizedState, actual];
  }
  /**
   * @param {Function} object
   * @return {?}
   */
  function getEnumerableProperties(object) {
    return remove(expectation);
  }
  /**
   * @param {Object} context
   * @param {Object} options
   * @param {Object} next
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function stream(context, options, next, deepDataAndEvents) {
    return context = {
      tag : context,
      create : options,
      destroy : next,
      deps : deepDataAndEvents,
      next : null
    }, null === that ? (that = {
      lastEffect : null
    }).lastEffect = context.next = context : null === (options = that.lastEffect) ? that.lastEffect = context.next = context : (next = options.next, options.next = context, context.next = next, that.lastEffect = context), context;
  }
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {number} opt_attributes
   * @param {Function} type
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function createDom(expectedNumberOfNonCommentArgs, opt_attributes, type, deepDataAndEvents) {
    var vlq = toVLQSigned();
    effectTag |= expectedNumberOfNonCommentArgs;
    vlq.memoizedState = stream(opt_attributes, type, void 0, void 0 === deepDataAndEvents ? null : deepDataAndEvents);
  }
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {number} opt_attributes
   * @param {Function} callback
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function sendMessage(expectedNumberOfNonCommentArgs, opt_attributes, callback, deepDataAndEvents) {
    var self = emit();
    deepDataAndEvents = void 0 === deepDataAndEvents ? null : deepDataAndEvents;
    var opts = void 0;
    if (null !== element) {
      var content = element.memoizedState;
      if (opts = content.destroy, null !== deepDataAndEvents && containsMatch(deepDataAndEvents, content.deps)) {
        return void stream(0, callback, opts, deepDataAndEvents);
      }
    }
    effectTag |= expectedNumberOfNonCommentArgs;
    self.memoizedState = stream(opt_attributes, callback, opts, deepDataAndEvents);
  }
  /**
   * @param {Function} actual
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function notEqual(actual, deepDataAndEvents) {
    return createDom(516, 192, actual, deepDataAndEvents);
  }
  /**
   * @param {Function} actual
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function reportFailure(actual, deepDataAndEvents) {
    return sendMessage(516, 192, actual, deepDataAndEvents);
  }
  /**
   * @param {Object} fn
   * @param {Object} callback
   * @return {?}
   */
  function runTest(fn, callback) {
    return "function" == typeof callback ? (fn = fn(), callback(fn), function() {
      callback(null);
    }) : null != callback ? (fn = fn(), callback.current = fn, function() {
      /** @type {null} */
      callback.current = null;
    }) : void 0;
  }
  /**
   * @return {undefined}
   */
  function useDebugValue() {
  }
  /**
   * @param {Function} expectation
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  function matchObject(expectation, deepDataAndEvents) {
    return toVLQSigned().memoizedState = [expectation, void 0 === deepDataAndEvents ? null : deepDataAndEvents], expectation;
  }
  /**
   * @param {Function} func
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function multiple(func, deepDataAndEvents) {
    var patternObject = emit();
    deepDataAndEvents = void 0 === deepDataAndEvents ? null : deepDataAndEvents;
    var pattern = patternObject.memoizedState;
    return null !== pattern && (null !== deepDataAndEvents && containsMatch(deepDataAndEvents, pattern[1])) ? pattern[0] : (patternObject.memoizedState = [func, deepDataAndEvents], func);
  }
  /**
   * @param {Object} node
   * @param {Object} current
   * @param {?} _123f
   * @return {undefined}
   */
  function initialize(node, current, _123f) {
    if (!(25 > fa)) {
      throw Error(callback(301));
    }
    var parent = node.alternate;
    if (node === root || null !== parent && parent === root) {
      if (ua = true, node = {
        expirationTime : lastValue,
        suspenseConfig : null,
        action : _123f,
        eagerReducer : null,
        eagerState : null,
        next : null
      }, null === _self && (_self = new Map), void 0 === (_123f = _self.get(current))) {
        _self.set(current, node);
      } else {
        current = _123f;
        for (;null !== current.next;) {
          current = current.next;
        }
        /** @type {Object} */
        current.next = node;
      }
    } else {
      var result = decodeURIComponent();
      var context = ev.suspense;
      context = {
        expirationTime : result = map(result, node, context),
        suspenseConfig : context,
        action : _123f,
        eagerReducer : null,
        eagerState : null,
        next : null
      };
      var element = current.last;
      if (null === element) {
        context.next = context;
      } else {
        var next = element.next;
        if (null !== next) {
          context.next = next;
        }
        element.next = context;
      }
      if (current.last = context, 0 === node.expirationTime && ((null === parent || 0 === parent.expirationTime) && null !== (parent = current.lastRenderedReducer))) {
        try {
          var expectedHashCode = current.lastRenderedState;
          var old = parent(expectedHashCode, _123f);
          if (context.eagerReducer = parent, context.eagerState = old, assertEquals(old, expectedHashCode)) {
            return;
          }
        } catch (e) {
        }
      }
      getter(node, result);
    }
  }
  /**
   * @param {?} a
   * @param {?} key
   * @return {undefined}
   */
  function merge(a, key) {
    var e = debug(5, null, null, 0);
    /** @type {string} */
    e.elementType = "DELETED";
    /** @type {string} */
    e.type = "DELETED";
    e.stateNode = key;
    e.return = a;
    /** @type {number} */
    e.effectTag = 8;
    if (null !== a.lastEffect) {
      a.lastEffect.nextEffect = e;
      a.lastEffect = e;
    } else {
      a.firstEffect = a.lastEffect = e;
    }
  }
  /**
   * @param {Object} obj
   * @param {Object} el
   * @return {?}
   */
  function traverse(obj, el) {
    switch(obj.tag) {
      case 5:
        var evt = obj.type;
        return null !== (el = 1 !== el.nodeType || evt.toLowerCase() !== el.nodeName.toLowerCase() ? null : el) && (obj.stateNode = el, true);
      case 6:
        return null !== (el = "" === obj.pendingProps || 3 !== el.nodeType ? null : el) && (obj.stateNode = el, true);
      case 13:
      ;
      default:
        return false;
    }
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function inherit(obj) {
    if (origType) {
      var tmp = json;
      if (tmp) {
        var node = tmp;
        if (!traverse(obj, tmp)) {
          if (!(tmp = nextElement(node.nextSibling)) || !traverse(obj, tmp)) {
            return obj.effectTag = -1025 & obj.effectTag | 2, origType = false, void(o = obj);
          }
          merge(o, node);
        }
        /** @type {Object} */
        o = obj;
        json = nextElement(tmp.firstChild);
      } else {
        /** @type {number} */
        obj.effectTag = -1025 & obj.effectTag | 2;
        /** @type {boolean} */
        origType = false;
        /** @type {Object} */
        o = obj;
      }
    }
  }
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  function isEmpty(obj) {
    obj = obj.return;
    for (;null !== obj && (5 !== obj.tag && (3 !== obj.tag && 13 !== obj.tag));) {
      obj = obj.return;
    }
    /** @type {Object} */
    o = obj;
  }
  /**
   * @param {Object} node
   * @return {?}
   */
  function insert(node) {
    if (node !== o) {
      return false;
    }
    if (!origType) {
      return isEmpty(node), origType = true, false;
    }
    var type = node.type;
    if (5 !== node.tag || "head" !== type && ("body" !== type && !get(type, node.memoizedProps))) {
      type = json;
      for (;type;) {
        merge(node, type);
        type = nextElement(type.nextSibling);
      }
    }
    if (isEmpty(node), 13 === node.tag) {
      if (!(node = null !== (node = node.memoizedState) ? node.dehydrated : null)) {
        throw Error(callback(317));
      }
      e: {
        node = node.nextSibling;
        /** @type {number} */
        type = 0;
        for (;node;) {
          if (8 === node.nodeType) {
            var level = node.data;
            if (level === expected) {
              if (0 === type) {
                json = nextElement(node.nextSibling);
                break e;
              }
              type--;
            } else {
              if (!(level !== k && (level !== WARN && level !== ERROR))) {
                type++;
              }
            }
          }
          node = node.nextSibling;
        }
        /** @type {null} */
        json = null;
      }
    } else {
      json = o ? nextElement(node.stateNode.nextSibling) : null;
    }
    return true;
  }
  /**
   * @return {undefined}
   */
  function templateFunc() {
    /** @type {null} */
    json = o = null;
    /** @type {boolean} */
    origType = false;
  }
  /**
   * @param {Object} selector
   * @param {Object} staticProps
   * @param {?} context
   * @param {Object} c
   * @return {undefined}
   */
  function jQuery(selector, staticProps, context, c) {
    staticProps.child = null === selector ? sprintf(staticProps, null, context, c) : pick(staticProps, selector.child, context, c);
  }
  /**
   * @param {Object} el
   * @param {Object} options
   * @param {Object} template
   * @param {(Array|string)} o
   * @param {Object} callback
   * @return {?}
   */
  function compile(el, options, template, o, callback) {
    template = template.render;
    var e = options.ref;
    return ajax(options, callback), o = log(el, options, template, o, e, callback), null === el || iframe ? (options.effectTag |= 1, jQuery(el, options, o, callback), options.child) : (options.updateQueue = el.updateQueue, options.effectTag &= -517, el.expirationTime <= callback && (el.expirationTime = 0), request(el, options, callback));
  }
  /**
   * @param {Object} result
   * @param {Object} options
   * @param {Object} state
   * @param {Object} index
   * @param {Object} i
   * @param {Object} x
   * @return {?}
   */
  function go(result, options, state, index, i, x) {
    if (null === result) {
      var name = state.type;
      return "function" != typeof name || (join(name) || (void 0 !== name.defaultProps || (null !== state.compare || void 0 !== state.defaultProps))) ? ((result = handler(state.type, null, index, null, options.mode, x)).ref = options.ref, result.return = options, options.child = result) : (options.tag = 15, options.type = name, makeRequest(result, options, name, index, i, x));
    }
    return name = result.child, i < x && (i = name.memoizedProps, (state = null !== (state = state.compare) ? state : objEquiv)(i, index) && result.ref === options.ref) ? request(result, options, x) : (options.effectTag |= 1, (result = _(name, index)).ref = options.ref, result.return = options, options.child = result);
  }
  /**
   * @param {Object} options
   * @param {Object} method
   * @param {?} path
   * @param {string} expected
   * @param {?} i
   * @param {?} data
   * @return {?}
   */
  function makeRequest(options, method, path, expected, i, data) {
    return null !== options && (objEquiv(options.memoizedProps, expected) && (options.ref === method.ref && (iframe = false, i < data))) ? request(options, method, data) : populate(options, method, path, expected, data);
  }
  /**
   * @param {Object} value
   * @param {Object} options
   * @return {undefined}
   */
  function loop(value, options) {
    var userId = options.ref;
    if (null === value && null !== userId || null !== value && value.ref !== userId) {
      options.effectTag |= 128;
    }
  }
  /**
   * @param {Object} html
   * @param {Object} options
   * @param {?} template
   * @param {string} target
   * @param {Object} callback
   * @return {?}
   */
  function populate(html, options, template, target, callback) {
    var params = encodeURIComponent(template) ? ol : seen.current;
    return params = call(options, params), ajax(options, callback), template = log(html, options, template, target, params, callback), null === html || iframe ? (options.effectTag |= 1, jQuery(html, options, template, callback), options.child) : (options.updateQueue = html.updateQueue, options.effectTag &= -517, html.expirationTime <= callback && (html.expirationTime = 0), request(html, options, callback));
  }
  /**
   * @param {Object} params
   * @param {Object} options
   * @param {string} item
   * @param {boolean} method
   * @param {Object} which
   * @return {?}
   */
  function fetch(params, options, item, method, which) {
    if (encodeURIComponent(item)) {
      /** @type {boolean} */
      var failuresLink = true;
      _isFunction(options);
    } else {
      /** @type {boolean} */
      failuresLink = false;
    }
    if (ajax(options, which), null === options.stateNode) {
      if (null !== params) {
        /** @type {null} */
        params.alternate = null;
        /** @type {null} */
        options.alternate = null;
        options.effectTag |= 2;
      }
      test(options, item, method);
      isArray(options, item, method, which);
      /** @type {boolean} */
      method = true;
    } else {
      if (null === params) {
        var self = options.stateNode;
        var name = options.memoizedProps;
        self.props = name;
        var value = self.context;
        var prop = item.contextType;
        if ("object" == typeof prop && null !== prop) {
          prop = each(prop);
        } else {
          prop = call(options, prop = encodeURIComponent(item) ? ol : seen.current);
        }
        var type = item.getDerivedStateFromProps;
        /** @type {boolean} */
        var f = "function" == typeof type || "function" == typeof self.getSnapshotBeforeUpdate;
        if (!f) {
          if (!("function" != typeof self.UNSAFE_componentWillReceiveProps && "function" != typeof self.componentWillReceiveProps)) {
            if (name !== method || value !== prop) {
              errorHandler(options, self, method, prop);
            }
          }
        }
        /** @type {boolean} */
        curr = false;
        var content = options.memoizedState;
        value = self.state = content;
        var key = options.updateQueue;
        if (null !== key) {
          indexOf(options, key, method, self, which);
          value = options.memoizedState;
        }
        if (name !== method || (content !== value || (b.current || curr))) {
          if ("function" == typeof type) {
            tmpl(options, item, type, method);
            value = options.memoizedState;
          }
          if (name = curr || query(options, item, name, method, content, value, prop)) {
            if (!f) {
              if (!("function" != typeof self.UNSAFE_componentWillMount && "function" != typeof self.componentWillMount)) {
                if ("function" == typeof self.componentWillMount) {
                  self.componentWillMount();
                }
                if ("function" == typeof self.UNSAFE_componentWillMount) {
                  self.UNSAFE_componentWillMount();
                }
              }
            }
            if ("function" == typeof self.componentDidMount) {
              options.effectTag |= 4;
            }
          } else {
            if ("function" == typeof self.componentDidMount) {
              options.effectTag |= 4;
            }
            /** @type {boolean} */
            options.memoizedProps = method;
            options.memoizedState = value;
          }
          /** @type {boolean} */
          self.props = method;
          self.state = value;
          self.context = prop;
          method = name;
        } else {
          if ("function" == typeof self.componentDidMount) {
            options.effectTag |= 4;
          }
          /** @type {boolean} */
          method = false;
        }
      } else {
        self = options.stateNode;
        name = options.memoizedProps;
        self.props = options.type === options.elementType ? name : bind(options.type, name);
        value = self.context;
        if ("object" == typeof(prop = item.contextType) && null !== prop) {
          prop = each(prop);
        } else {
          prop = call(options, prop = encodeURIComponent(item) ? ol : seen.current);
        }
        if (!(f = "function" == typeof(type = item.getDerivedStateFromProps) || "function" == typeof self.getSnapshotBeforeUpdate)) {
          if (!("function" != typeof self.UNSAFE_componentWillReceiveProps && "function" != typeof self.componentWillReceiveProps)) {
            if (name !== method || value !== prop) {
              errorHandler(options, self, method, prop);
            }
          }
        }
        /** @type {boolean} */
        curr = false;
        value = options.memoizedState;
        content = self.state = value;
        if (null !== (key = options.updateQueue)) {
          indexOf(options, key, method, self, which);
          content = options.memoizedState;
        }
        if (name !== method || (value !== content || (b.current || curr))) {
          if ("function" == typeof type) {
            tmpl(options, item, type, method);
            content = options.memoizedState;
          }
          if (type = curr || query(options, item, name, method, value, content, prop)) {
            if (!f) {
              if (!("function" != typeof self.UNSAFE_componentWillUpdate && "function" != typeof self.componentWillUpdate)) {
                if ("function" == typeof self.componentWillUpdate) {
                  self.componentWillUpdate(method, content, prop);
                }
                if ("function" == typeof self.UNSAFE_componentWillUpdate) {
                  self.UNSAFE_componentWillUpdate(method, content, prop);
                }
              }
            }
            if ("function" == typeof self.componentDidUpdate) {
              options.effectTag |= 4;
            }
            if ("function" == typeof self.getSnapshotBeforeUpdate) {
              options.effectTag |= 256;
            }
          } else {
            if (!("function" != typeof self.componentDidUpdate)) {
              if (!(name === params.memoizedProps && value === params.memoizedState)) {
                options.effectTag |= 4;
              }
            }
            if (!("function" != typeof self.getSnapshotBeforeUpdate)) {
              if (!(name === params.memoizedProps && value === params.memoizedState)) {
                options.effectTag |= 256;
              }
            }
            /** @type {boolean} */
            options.memoizedProps = method;
            options.memoizedState = content;
          }
          /** @type {boolean} */
          self.props = method;
          self.state = content;
          self.context = prop;
          method = type;
        } else {
          if (!("function" != typeof self.componentDidUpdate)) {
            if (!(name === params.memoizedProps && value === params.memoizedState)) {
              options.effectTag |= 4;
            }
          }
          if (!("function" != typeof self.getSnapshotBeforeUpdate)) {
            if (!(name === params.memoizedProps && value === params.memoizedState)) {
              options.effectTag |= 256;
            }
          }
          /** @type {boolean} */
          method = false;
        }
      }
    }
    return animate(params, options, item, method, failuresLink, which);
  }
  /**
   * @param {Object} node
   * @param {Object} options
   * @param {string} name
   * @param {Object} object
   * @param {boolean} el
   * @param {Object} callback
   * @return {?}
   */
  function animate(node, options, name, object, el, callback) {
    loop(node, options);
    /** @type {boolean} */
    var property = 0 != (64 & options.effectTag);
    if (!object && !property) {
      return el && queue(options, name, false), request(node, options, callback);
    }
    object = options.stateNode;
    /** @type {Object} */
    store.current = options;
    var origContext = property && "function" != typeof name.getDerivedStateFromError ? null : object.render();
    return options.effectTag |= 1, null !== node && property ? (options.child = pick(options, node.child, null, callback), options.child = pick(options, null, origContext, callback)) : jQuery(node, options, origContext, callback), options.memoizedState = object.state, el && queue(options, name, true), options.child;
  }
  /**
   * @param {Object} res
   * @return {undefined}
   */
  function copy(res) {
    var data = res.stateNode;
    if (data.pendingContext) {
      apply(0, data.pendingContext, data.pendingContext !== data.context);
    } else {
      if (data.context) {
        apply(0, data.context, false);
      }
    }
    handleEvent(res, data.containerInfo);
  }
  /**
   * @param {Object} options
   * @param {?} self
   * @param {?} value
   * @return {?}
   */
  function toString(options, self, value) {
    var component;
    var type = self.mode;
    var config = self.pendingProps;
    /** @type {number} */
    var current = res.current;
    /** @type {boolean} */
    var node = false;
    if ((component = 0 != (64 & self.effectTag)) || (component = 0 != (2 & current) && (null === options || null !== options.memoizedState)), component ? (node = true, self.effectTag &= -65) : null !== options && null === options.memoizedState || (void 0 === config.fallback || (true === config.unstable_avoidThisFallback || (current |= 1))), contains(res, 1 & current), null === options) {
      if (void 0 !== config.fallback && inherit(self), node) {
        if (node = config.fallback, (config = filter(null, type, 0, null)).return = self, 0 == (2 & self.mode)) {
          options = null !== self.memoizedState ? self.child.child : self.child;
          /** @type {Object} */
          config.child = options;
          for (;null !== options;) {
            options.return = config;
            options = options.sibling;
          }
        }
        return(value = filter(node, type, value, null)).return = self, config.sibling = value, self.memoizedState = compassResult, self.child = config, value;
      }
      return type = config.children, self.memoizedState = null, self.child = sprintf(self, null, type, value);
    }
    if (null !== options.memoizedState) {
      if (type = (options = options.child).sibling, node) {
        if (config = config.fallback, (value = _(options, options.pendingProps)).return = self, 0 == (2 & self.mode) && (node = null !== self.memoizedState ? self.child.child : self.child) !== options.child) {
          value.child = node;
          for (;null !== node;) {
            node.return = value;
            node = node.sibling;
          }
        }
        return(type = _(type, config, type.expirationTime)).return = self, value.sibling = type, value.childExpirationTime = 0, self.memoizedState = compassResult, self.child = value, type;
      }
      return value = pick(self, options.child, config.children, value), self.memoizedState = null, self.child = value;
    }
    if (options = options.child, node) {
      if (node = config.fallback, (config = filter(null, type, 0, null)).return = self, config.child = options, null !== options && (options.return = config), 0 == (2 & self.mode)) {
        options = null !== self.memoizedState ? self.child.child : self.child;
        /** @type {Object} */
        config.child = options;
        for (;null !== options;) {
          options.return = config;
          options = options.sibling;
        }
      }
      return(value = filter(node, type, value, null)).return = self, config.sibling = value, value.effectTag |= 2, config.childExpirationTime = 0, self.memoizedState = compassResult, self.child = config, value;
    }
    return self.memoizedState = null, self.child = pick(self, options, config.children, value);
  }
  /**
   * @param {Object} node
   * @param {?} file
   * @return {undefined}
   */
  function rewrite(node, file) {
    if (node.expirationTime < file) {
      node.expirationTime = file;
    }
    var options = node.alternate;
    if (null !== options) {
      if (options.expirationTime < file) {
        options.expirationTime = file;
      }
    }
    hide(node.return, file);
  }
  /**
   * @param {Object} parent
   * @param {boolean} recurring
   * @param {Object} callback
   * @param {Object} pos
   * @param {string} name
   * @param {?} key
   * @return {undefined}
   */
  function promote(parent, recurring, callback, pos, name, key) {
    var node = parent.memoizedState;
    if (null === node) {
      parent.memoizedState = {
        isBackwards : recurring,
        rendering : null,
        last : pos,
        tail : callback,
        tailExpiration : 0,
        tailMode : name,
        lastEffect : key
      };
    } else {
      /** @type {boolean} */
      node.isBackwards = recurring;
      /** @type {null} */
      node.rendering = null;
      /** @type {Object} */
      node.last = pos;
      /** @type {Object} */
      node.tail = callback;
      /** @type {number} */
      node.tailExpiration = 0;
      /** @type {string} */
      node.tailMode = name;
      node.lastEffect = key;
    }
  }
  /**
   * @param {Object} node
   * @param {Object} parent
   * @param {Object} e
   * @return {?}
   */
  function parse(node, parent, e) {
    var a = parent.pendingProps;
    var t = a.revealOrder;
    var h = a.tail;
    if (jQuery(node, parent, a.children, e), 0 != (2 & (a = res.current))) {
      /** @type {number} */
      a = 1 & a | 2;
      parent.effectTag |= 64;
    } else {
      if (null !== node && 0 != (64 & node.effectTag)) {
        node = parent.child;
        e: for (;null !== node;) {
          if (13 === node.tag) {
            if (null !== node.memoizedState) {
              rewrite(node, e);
            }
          } else {
            if (19 === node.tag) {
              rewrite(node, e);
            } else {
              if (null !== node.child) {
                /** @type {Object} */
                node.child.return = node;
                node = node.child;
                continue;
              }
            }
          }
          if (node === parent) {
            break e;
          }
          for (;null === node.sibling;) {
            if (null === node.return || node.return === parent) {
              break e;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      a &= 1;
    }
    if (contains(res, a), 0 == (2 & parent.mode)) {
      /** @type {null} */
      parent.memoizedState = null;
    } else {
      switch(t) {
        case "forwards":
          e = parent.child;
          /** @type {null} */
          t = null;
          for (;null !== e;) {
            if (null !== (node = e.alternate)) {
              if (null === normalize(node)) {
                /** @type {Object} */
                t = e;
              }
            }
            e = e.sibling;
          }
          if (null === (e = t)) {
            t = parent.child;
            /** @type {null} */
            parent.child = null;
          } else {
            t = e.sibling;
            /** @type {null} */
            e.sibling = null;
          }
          promote(parent, false, t, e, h, parent.lastEffect);
          break;
        case "backwards":
          /** @type {null} */
          e = null;
          t = parent.child;
          /** @type {null} */
          parent.child = null;
          for (;null !== t;) {
            if (null !== (node = t.alternate) && null === normalize(node)) {
              parent.child = t;
              break;
            }
            node = t.sibling;
            /** @type {Object} */
            t.sibling = e;
            e = t;
            /** @type {Object} */
            t = node;
          }
          promote(parent, true, e, null, h, parent.lastEffect);
          break;
        case "together":
          promote(parent, false, null, null, void 0, parent.lastEffect);
          break;
        default:
          /** @type {null} */
          parent.memoizedState = null;
      }
    }
    return parent.child;
  }
  /**
   * @param {Object} options
   * @param {Object} config
   * @param {Object} data
   * @return {?}
   */
  function request(options, config, data) {
    if (null !== options) {
      config.dependencies = options.dependencies;
    }
    var e = config.expirationTime;
    if (0 !== e && open(e), config.childExpirationTime < data) {
      return null;
    }
    if (null !== options && config.child !== options.child) {
      throw Error(callback(153));
    }
    if (null !== config.child) {
      data = _(options = config.child, options.pendingProps, options.expirationTime);
      /** @type {Object} */
      config.child = data;
      /** @type {Object} */
      data.return = config;
      for (;null !== options.sibling;) {
        options = options.sibling;
        /** @type {Object} */
        (data = data.sibling = _(options, options.pendingProps, options.expirationTime)).return = config;
      }
      /** @type {null} */
      data.sibling = null;
    }
    return config.child;
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function isString(obj) {
    obj.effectTag |= 4;
  }
  /**
   * @param {Object} node
   * @param {boolean} recurring
   * @return {undefined}
   */
  function reduce(node, recurring) {
    switch(node.tailMode) {
      case "hidden":
        recurring = node.tail;
        /** @type {null} */
        var ctx = null;
        for (;null !== recurring;) {
          if (null !== recurring.alternate) {
            /** @type {boolean} */
            ctx = recurring;
          }
          recurring = recurring.sibling;
        }
        if (null === ctx) {
          /** @type {null} */
          node.tail = null;
        } else {
          /** @type {null} */
          ctx.sibling = null;
        }
        break;
      case "collapsed":
        ctx = node.tail;
        /** @type {null} */
        var cb = null;
        for (;null !== ctx;) {
          if (null !== ctx.alternate) {
            cb = ctx;
          }
          ctx = ctx.sibling;
        }
        if (null === cb) {
          if (recurring || null === node.tail) {
            /** @type {null} */
            node.tail = null;
          } else {
            /** @type {null} */
            node.tail.sibling = null;
          }
        } else {
          /** @type {null} */
          cb.sibling = null;
        }
      ;
    }
  }
  /**
   * @param {Object} result
   * @return {?}
   */
  function parser(result) {
    switch(result.tag) {
      case 1:
        if (encodeURIComponent(result.type)) {
          play();
        }
        var error = result.effectTag;
        return 4096 & error ? (result.effectTag = -4097 & error | 64, result) : null;
      case 3:
        if (trace(), advance(), 0 != (64 & (error = result.effectTag))) {
          throw Error(callback(285));
        }
        return result.effectTag = -4097 & error | 64, result;
      case 5:
        return toArray(result), null;
      case 13:
        return has(res), 4096 & (error = result.effectTag) ? (result.effectTag = -4097 & error | 64, result) : null;
      case 19:
        return has(res), null;
      case 4:
        return trace(), null;
      case 10:
        return size(result), null;
      default:
        return null;
    }
  }
  /**
   * @param {?} value
   * @param {Object} object
   * @return {?}
   */
  function valueOf(value, object) {
    return{
      value : value,
      source : object,
      stack : on(object)
    };
  }
  /**
   * @param {Object} e
   * @param {Object} x
   * @return {undefined}
   */
  function error(e, x) {
    var message = x.source;
    var length = x.stack;
    if (null === length) {
      if (null !== message) {
        length = on(message);
      }
    }
    if (null !== message) {
      cb(message.type);
    }
    x = x.value;
    if (null !== e) {
      if (1 === e.tag) {
        cb(e.type);
      }
    }
    try {
      console.error(x);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  /**
   * @param {Object} args
   * @return {undefined}
   */
  function _each(args) {
    var result = args.ref;
    if (null !== result) {
      if ("function" == typeof result) {
        try {
          result(null);
        } catch (zip_bl) {
          isFunction(args, zip_bl);
        }
      } else {
        /** @type {null} */
        result.current = null;
      }
    }
  }
  /**
   * @param {Object} context
   * @param {Object} item
   * @return {undefined}
   */
  function register(context, item) {
    switch(item.tag) {
      case 0:
      ;
      case 11:
      ;
      case 15:
        warn(2, 0, item);
        break;
      case 1:
        if (256 & item.effectTag && null !== context) {
          var data = context.memoizedProps;
          var j = context.memoizedState;
          item = (context = item.stateNode).getSnapshotBeforeUpdate(item.elementType === item.type ? data : bind(item.type, data), j);
          /** @type {Object} */
          context.__reactInternalSnapshotBeforeUpdate = item;
        }
        break;
      case 3:
      ;
      case 5:
      ;
      case 6:
      ;
      case 4:
      ;
      case 17:
        break;
      default:
        throw Error(callback(163));;
    }
  }
  /**
   * @param {number} opt_attributes
   * @param {number} outstandingDataSize
   * @param {Object} node
   * @return {undefined}
   */
  function warn(opt_attributes, outstandingDataSize, node) {
    if (null !== (node = null !== (node = node.updateQueue) ? node.lastEffect : null)) {
      var item = node = node.next;
      do {
        if (0 != (item.tag & opt_attributes)) {
          var src = item.destroy;
          item.destroy = void 0;
          if (void 0 !== src) {
            src();
          }
        }
        if (0 != (item.tag & outstandingDataSize)) {
          src = item.create;
          item.destroy = src();
        }
        item = item.next;
      } while (item !== node);
    }
  }
  /**
   * @param {Object} e
   * @param {Object} data
   * @param {number} value
   * @return {undefined}
   */
  function destroy(e, data, value) {
    switch("function" == typeof layout && layout(data), data.tag) {
      case 0:
      ;
      case 11:
      ;
      case 14:
      ;
      case 15:
        if (null !== (e = data.updateQueue) && null !== (e = e.lastEffect)) {
          var start = e.next;
          exists(97 < value ? 97 : value, function() {
            var end = start;
            do {
              var destroy = end.destroy;
              if (void 0 !== destroy) {
                /** @type {Object} */
                var args = data;
                try {
                  destroy();
                } catch (zip_bl) {
                  isFunction(args, zip_bl);
                }
              }
              end = end.next;
            } while (end !== start);
          });
        }
        break;
      case 1:
        _each(data);
        if ("function" == typeof(value = data.stateNode).componentWillUnmount) {
          (function(data, source) {
            try {
              source.props = data.memoizedProps;
              source.state = data.memoizedState;
              source.componentWillUnmount();
            } catch (zip_bl) {
              isFunction(data, zip_bl);
            }
          })(data, value);
        }
        break;
      case 5:
        _each(data);
        break;
      case 4:
        reset(e, data, value);
    }
  }
  /**
   * @param {Object} result
   * @return {undefined}
   */
  function complete(result) {
    var a = result.alternate;
    /** @type {null} */
    result.return = null;
    /** @type {null} */
    result.child = null;
    /** @type {null} */
    result.memoizedState = null;
    /** @type {null} */
    result.updateQueue = null;
    /** @type {null} */
    result.dependencies = null;
    /** @type {null} */
    result.alternate = null;
    /** @type {null} */
    result.firstEffect = null;
    /** @type {null} */
    result.lastEffect = null;
    /** @type {null} */
    result.pendingProps = null;
    /** @type {null} */
    result.memoizedProps = null;
    if (null !== a) {
      complete(a);
    }
  }
  /**
   * @param {?} obj
   * @return {?}
   */
  function getType(obj) {
    return 5 === obj.tag || (3 === obj.tag || 4 === obj.tag);
  }
  /**
   * @param {?} collection
   * @return {undefined}
   */
  function process(collection) {
    e: {
      var ele = collection.return;
      for (;null !== ele;) {
        if (getType(ele)) {
          var self = ele;
          break e;
        }
        ele = ele.return;
      }
      throw Error(callback(160));
    }
    switch(ele = self.stateNode, self.tag) {
      case 5:
        /** @type {boolean} */
        var r = false;
        break;
      case 3:
      ;
      case 4:
        ele = ele.containerInfo;
        /** @type {boolean} */
        r = true;
        break;
      default:
        throw Error(callback(161));;
    }
    if (16 & self.effectTag) {
      $(ele, "");
      self.effectTag &= -17;
    }
    self = collection;
    e: t: for (;;) {
      for (;null === self.sibling;) {
        if (null === self.return || getType(self.return)) {
          /** @type {null} */
          self = null;
          break e;
        }
        self = self.return;
      }
      self.sibling.return = self.return;
      self = self.sibling;
      for (;5 !== self.tag && (6 !== self.tag && 18 !== self.tag);) {
        if (2 & self.effectTag) {
          continue t;
        }
        if (null === self.child || 4 === self.tag) {
          continue t;
        }
        self.child.return = self;
        self = self.child;
      }
      if (!(2 & self.effectTag)) {
        self = self.stateNode;
        break e;
      }
    }
    var result = collection;
    for (;;) {
      /** @type {boolean} */
      var parent = 5 === result.tag || 6 === result.tag;
      if (parent) {
        var el = parent ? result.stateNode : result.stateNode.instance;
        if (self) {
          if (r) {
            var child = el;
            el = self;
            if (8 === (parent = ele).nodeType) {
              parent.parentNode.insertBefore(child, el);
            } else {
              parent.insertBefore(child, el);
            }
          } else {
            ele.insertBefore(el, self);
          }
        } else {
          if (r) {
            if (8 === (child = ele).nodeType) {
              (parent = child.parentNode).insertBefore(el, child);
            } else {
              (parent = child).appendChild(el);
            }
            if (!(null != (child = child._reactRootContainer))) {
              if (!(null !== parent.onclick)) {
                /** @type {function (): undefined} */
                parent.onclick = t;
              }
            }
          } else {
            ele.appendChild(el);
          }
        }
      } else {
        if (4 !== result.tag && null !== result.child) {
          result.child.return = result;
          result = result.child;
          continue;
        }
      }
      if (result === collection) {
        break;
      }
      for (;null === result.sibling;) {
        if (null === result.return || result.return === collection) {
          return;
        }
        result = result.return;
      }
      result.sibling.return = result.return;
      result = result.sibling;
    }
  }
  /**
   * @param {Object} el
   * @param {?} name
   * @param {number} state
   * @return {undefined}
   */
  function reset(el, name, state) {
    var target;
    var i;
    var options = name;
    /** @type {boolean} */
    var result = false;
    for (;;) {
      if (!result) {
        result = options.return;
        e: for (;;) {
          if (null === result) {
            throw Error(callback(160));
          }
          switch(target = result.stateNode, result.tag) {
            case 5:
              /** @type {boolean} */
              i = false;
              break e;
            case 3:
            ;
            case 4:
              target = target.containerInfo;
              /** @type {boolean} */
              i = true;
              break e;
          }
          result = result.return;
        }
        /** @type {boolean} */
        result = true;
      }
      if (5 === options.tag || 6 === options.tag) {
        /** @type {Object} */
        var node = el;
        var b = options;
        /** @type {number} */
        var udataCur = state;
        var a = b;
        e: for (;;) {
          if (destroy(node, a, udataCur), null !== a.child && 4 !== a.tag) {
            a.child.return = a;
            a = a.child;
          } else {
            if (a === b) {
              break;
            }
            for (;null === a.sibling;) {
              if (null === a.return || a.return === b) {
                break e;
              }
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
        }
        if (i) {
          node = target;
          b = options.stateNode;
          if (8 === node.nodeType) {
            node.parentNode.removeChild(b);
          } else {
            node.removeChild(b);
          }
        } else {
          target.removeChild(options.stateNode);
        }
      } else {
        if (4 === options.tag) {
          if (null !== options.child) {
            target = options.stateNode.containerInfo;
            /** @type {boolean} */
            i = true;
            options.child.return = options;
            options = options.child;
            continue;
          }
        } else {
          if (destroy(el, options, state), null !== options.child) {
            options.child.return = options;
            options = options.child;
            continue;
          }
        }
      }
      if (options === name) {
        break;
      }
      for (;null === options.sibling;) {
        if (null === options.return || options.return === name) {
          return;
        }
        if (4 === (options = options.return).tag) {
          /** @type {boolean} */
          result = false;
        }
      }
      options.sibling.return = options.return;
      options = options.sibling;
    }
  }
  /**
   * @param {Object} event
   * @param {Object} result
   * @return {undefined}
   */
  function update(event, result) {
    switch(result.tag) {
      case 0:
      ;
      case 11:
      ;
      case 14:
      ;
      case 15:
        warn(4, 8, result);
        break;
      case 1:
        break;
      case 5:
        var data = result.stateNode;
        if (null != data) {
          var item = result.memoizedProps;
          var o = null !== event ? event.memoizedProps : item;
          event = result.type;
          var message = result.updateQueue;
          if (result.updateQueue = null, null !== message) {
            data[name] = item;
            if ("input" === event) {
              if ("radio" === item.type) {
                if (null != item.name) {
                  equals(data, item);
                }
              }
            }
            find(event, o);
            result = find(event, item);
            /** @type {number} */
            o = 0;
            for (;o < message.length;o += 2) {
              var camelKey = message[o];
              var value = message[o + 1];
              if ("style" === camelKey) {
                load(data, value);
              } else {
                if ("dangerouslySetInnerHTML" === camelKey) {
                  serialize(data, value);
                } else {
                  if ("children" === camelKey) {
                    $(data, value);
                  } else {
                    walk(data, camelKey, value, result);
                  }
                }
              }
            }
            switch(event) {
              case "input":
                check(data, item);
                break;
              case "textarea":
                expect(data, item);
                break;
              case "select":
                result = data._wrapperState.wasMultiple;
                /** @type {boolean} */
                data._wrapperState.wasMultiple = !!item.multiple;
                if (null != (event = item.value)) {
                  build(data, !!item.multiple, event, false);
                } else {
                  if (result !== !!item.multiple) {
                    if (null != item.defaultValue) {
                      build(data, !!item.multiple, item.defaultValue, true);
                    } else {
                      build(data, !!item.multiple, item.multiple ? [] : "", false);
                    }
                  }
                }
              ;
            }
          }
        }
        break;
      case 6:
        if (null === result.stateNode) {
          throw Error(callback(162));
        }
        result.stateNode.nodeValue = result.memoizedProps;
        break;
      case 3:
        if ((result = result.stateNode).hydrate) {
          /** @type {boolean} */
          result.hydrate = false;
          tick(result.containerInfo);
        }
        break;
      case 12:
        break;
      case 13:
        if (data = result, null === result.memoizedState ? item = false : (item = true, data = result.child, mean_height = getTime()), null !== data) {
          event = data;
          e: for (;;) {
            if (5 === event.tag) {
              message = event.stateNode;
              if (item) {
                if ("function" == typeof(message = message.style).setProperty) {
                  message.setProperty("display", "none", "important");
                } else {
                  /** @type {string} */
                  message.display = "none";
                }
              } else {
                message = event.stateNode;
                o = null != (o = event.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null;
                message.style.display = css("display", o);
              }
            } else {
              if (6 === event.tag) {
                event.stateNode.nodeValue = item ? "" : event.memoizedProps;
              } else {
                if (13 === event.tag && (null !== event.memoizedState && null === event.memoizedState.dehydrated)) {
                  /** @type {Object} */
                  (message = event.child.sibling).return = event;
                  event = message;
                  continue;
                }
                if (null !== event.child) {
                  /** @type {Object} */
                  event.child.return = event;
                  event = event.child;
                  continue;
                }
              }
            }
            if (event === data) {
              break e;
            }
            for (;null === event.sibling;) {
              if (null === event.return || event.return === data) {
                break e;
              }
              event = event.return;
            }
            event.sibling.return = event.return;
            event = event.sibling;
          }
        }
        successCallback(result);
        break;
      case 19:
        successCallback(result);
        break;
      case 17:
      ;
      case 20:
      ;
      case 21:
        break;
      default:
        throw Error(callback(163));;
    }
  }
  /**
   * @param {Object} result
   * @return {undefined}
   */
  function successCallback(result) {
    var selectors = result.updateQueue;
    if (null !== selectors) {
      /** @type {null} */
      result.updateQueue = null;
      var matches = result.stateNode;
      if (null === matches) {
        matches = result.stateNode = new Buffer;
      }
      selectors.forEach(function(el) {
        var spy = options.bind(null, result, el);
        if (!matches.has(el)) {
          matches.add(el);
          el.then(spy, spy);
        }
      });
    }
  }
  /**
   * @param {Object} value
   * @param {Object} data
   * @param {Object} name
   * @return {?}
   */
  function onData(value, data, name) {
    /** @type {number} */
    (name = split(name, null)).tag = 3;
    name.payload = {
      element : null
    };
    var ret = data.value;
    return name.callback = function() {
      if (!is) {
        /** @type {boolean} */
        is = true;
        s = ret;
      }
      error(value, data);
    }, name;
  }
  /**
   * @param {Object} e
   * @param {?} data
   * @param {Object} source
   * @return {?}
   */
  function show(e, data, source) {
    /** @type {number} */
    (source = split(source, null)).tag = 3;
    var fn = e.type.getDerivedStateFromError;
    if ("function" == typeof fn) {
      var val = data.value;
      /**
       * @return {?}
       */
      source.payload = function() {
        return error(e, data), fn(val);
      };
    }
    var button = e.stateNode;
    return null !== button && ("function" == typeof button.componentDidCatch && (source.callback = function() {
      if ("function" != typeof fn) {
        if (null === callbacks) {
          callbacks = new Set([this]);
        } else {
          callbacks.add(this);
        }
        error(e, data);
      }
      var stack = data.stack;
      this.componentDidCatch(data.value, {
        componentStack : null !== stack ? stack : ""
      });
    })), source;
  }
  /**
   * @return {?}
   */
  function decodeURIComponent() {
    return(j & (YEARS | MONTHS)) !== lineStart ? 1073741821 - (getTime() / 10 | 0) : 0 !== ps ? ps : ps = 1073741821 - (getTime() / 10 | 0);
  }
  /**
   * @param {number} object
   * @param {Object} dataAndEvents
   * @param {Object} data
   * @return {?}
   */
  function map(object, dataAndEvents, data) {
    if (0 == (2 & (dataAndEvents = dataAndEvents.mode))) {
      return 1073741823;
    }
    var r = reject();
    if (0 == (4 & dataAndEvents)) {
      return 99 === r ? 1073741823 : 1073741822;
    }
    if ((j & YEARS) !== lineStart) {
      return a;
    }
    if (null !== data) {
      object = keys(object, 0 | data.timeoutMs || 5E3, 250);
    } else {
      switch(r) {
        case 99:
          /** @type {number} */
          object = 1073741823;
          break;
        case 98:
          object = keys(object, 150, 100);
          break;
        case 97:
        ;
        case 96:
          object = keys(object, 5E3, 250);
          break;
        case 95:
          /** @type {number} */
          object = 2;
          break;
        default:
          throw Error(callback(326));;
      }
    }
    return null !== mySecret && (object === a && --object), object;
  }
  /**
   * @param {string} node
   * @param {number} value
   * @return {undefined}
   */
  function getter(node, value) {
    if (50 < fs) {
      throw fs = 0, serverVersionsStream = null, Error(callback(185));
    }
    if (null !== (node = iter(node, value))) {
      var param = reject();
      if (1073741823 === value) {
        if ((j & pos) !== lineStart && (j & (YEARS | MONTHS)) === lineStart) {
          finish(node);
        } else {
          indent(node);
          if (j === lineStart) {
            text();
          }
        }
      } else {
        indent(node);
      }
      if (!((4 & j) === lineStart)) {
        if (!(98 !== param && 99 !== param)) {
          if (null === collection) {
            collection = new Map([[node, value]]);
          } else {
            if (void 0 === (param = collection.get(node)) || param > value) {
              collection.set(node, value);
            }
          }
        }
      }
    }
  }
  /**
   * @param {Object} node
   * @param {?} offset
   * @return {?}
   */
  function iter(node, offset) {
    if (node.expirationTime < offset) {
      node.expirationTime = offset;
    }
    var options = node.alternate;
    if (null !== options) {
      if (options.expirationTime < offset) {
        options.expirationTime = offset;
      }
    }
    var self = node.return;
    /** @type {null} */
    var value = null;
    if (null === self && 3 === node.tag) {
      value = node.stateNode;
    } else {
      for (;null !== self;) {
        if (options = self.alternate, self.childExpirationTime < offset && (self.childExpirationTime = offset), null !== options && (options.childExpirationTime < offset && (options.childExpirationTime = offset)), null === self.return && 3 === self.tag) {
          value = self.stateNode;
          break;
        }
        self = self.return;
      }
    }
    return null !== value && (mySecret === value && (open(offset), className === number && attr(value, a)), extractStacktrace(value, offset)), value;
  }
  /**
   * @param {string} message
   * @return {?}
   */
  function postMessage(message) {
    var code = message.lastExpiredTime;
    return 0 !== code ? code : oldErrorHandler(message, code = message.firstPendingTime) ? (code = message.lastPingedTime) > (message = message.nextKnownPendingLevel) ? code : message : code;
  }
  /**
   * @param {Function} message
   * @return {undefined}
   */
  function indent(message) {
    if (0 !== message.lastExpiredTime) {
      /** @type {number} */
      message.callbackExpirationTime = 1073741823;
      /** @type {number} */
      message.callbackPriority = 99;
      message.callbackNode = formatDate(finish.bind(null, message));
    } else {
      var error = postMessage(message);
      var str = message.callbackNode;
      if (0 === error) {
        if (null !== str) {
          /** @type {null} */
          message.callbackNode = null;
          /** @type {number} */
          message.callbackExpirationTime = 0;
          /** @type {number} */
          message.callbackPriority = 90;
        }
      } else {
        var msg = decodeURIComponent();
        if (1073741823 === error ? msg = 99 : 1 === error || 2 === error ? msg = 95 : msg = 0 >= (msg = 10 * (1073741821 - error) - 10 * (1073741821 - msg)) ? 99 : 250 >= msg ? 98 : 5250 >= msg ? 97 : 95, null !== str) {
          var mail = message.callbackPriority;
          if (message.callbackExpirationTime === error && mail >= msg) {
            return;
          }
          if (str !== formattedBack) {
            repeat_string(str);
          }
        }
        message.callbackExpirationTime = error;
        message.callbackPriority = msg;
        error = 1073741823 === error ? formatDate(finish.bind(null, message)) : toJSON(msg, send.bind(null, message), {
          timeout : 10 * (1073741821 - error) - getTime()
        });
        message.callbackNode = error;
      }
    }
  }
  /**
   * @param {Function} message
   * @param {(Function|string)} result
   * @return {?}
   */
  function send(message, result) {
    if (ps = 0, result) {
      return _send(message, result = decodeURIComponent()), indent(message), null;
    }
    var id = postMessage(message);
    if (0 !== id) {
      if (result = message.callbackNode, (j & (YEARS | MONTHS)) !== lineStart) {
        throw Error(callback(327));
      }
      if (splice(), message === mySecret && id === a || pop(message, id), null !== data) {
        var p = j;
        j |= YEARS;
        var i = end();
        for (;;) {
          try {
            xhr();
            break;
          } catch (nodes) {
            write(message, nodes);
          }
        }
        if (writeHead(), j = p, settings.current = i, className === currentType) {
          throw result = ie, pop(message, id), attr(message, id), indent(message), result;
        }
        if (null === data) {
          switch(i = message.finishedWork = message.current.alternate, message.finishedExpirationTime = id, p = className, mySecret = null, p) {
            case check_unmarked:
            ;
            case currentType:
              throw Error(callback(345));;
            case Ul:
              _send(message, 2 < id ? 2 : id);
              break;
            case bbGrid_subgrid_control:
              if (attr(message, id), id === (p = message.lastSuspendedTime) && (message.nextKnownPendingLevel = encode(i)), 1073741823 === down && 10 < (i = mean_height + heightstep - getTime())) {
                if (es) {
                  var node = message.lastPingedTime;
                  if (0 === node || node >= id) {
                    message.lastPingedTime = id;
                    pop(message, id);
                    break;
                  }
                }
                if (0 !== (node = postMessage(message)) && node !== id) {
                  break;
                }
                if (0 !== p && p !== id) {
                  message.lastPingedTime = p;
                  break;
                }
                /** @type {number} */
                message.timeoutHandle = hasOwnProperty(fail.bind(null, message), i);
                break;
              }
              fail(message);
              break;
            case number:
              if (attr(message, id), id === (p = message.lastSuspendedTime) && (message.nextKnownPendingLevel = encode(i)), es && (0 === (i = message.lastPingedTime) || i >= id)) {
                message.lastPingedTime = id;
                pop(message, id);
                break;
              }
              if (0 !== (i = postMessage(message)) && i !== id) {
                break;
              }
              if (0 !== p && p !== id) {
                message.lastPingedTime = p;
                break;
              }
              if (1073741823 !== right ? p = 10 * (1073741821 - right) - getTime() : 1073741823 === down ? p = 0 : (p = 10 * (1073741821 - down) - 5E3, 0 > (p = (i = getTime()) - p) && (p = 0), (id = 10 * (1073741821 - id) - i) < (p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3E3 > p ? 3E3 : 4320 > p ? 4320 : 1960 * ceil(p / 1960)) - p) && (p = id)), 10 < p) {
                /** @type {number} */
                message.timeoutHandle = hasOwnProperty(fail.bind(null, message), p);
                break;
              }
              fail(message);
              break;
            case selector:
              if (1073741823 !== down && null !== firingStart) {
                node = down;
                var options = firingStart;
                if (0 >= (p = 0 | options.busyMinDurationMs) ? p = 0 : (i = 0 | options.busyDelayMs, p = (node = getTime() - (10 * (1073741821 - node) - (0 | options.timeoutMs || 5E3))) <= i ? 0 : i + p - node), 10 < p) {
                  attr(message, id);
                  /** @type {number} */
                  message.timeoutHandle = hasOwnProperty(fail.bind(null, message), p);
                  break;
                }
              }
              fail(message);
              break;
            default:
              throw Error(callback(329));;
          }
        }
        if (indent(message), message.callbackNode === result) {
          return send.bind(null, message);
        }
      }
    }
    return null;
  }
  /**
   * @param {Function} message
   * @return {?}
   */
  function finish(message) {
    var id = message.lastExpiredTime;
    if (id = 0 !== id ? id : 1073741823, message.finishedExpirationTime === id) {
      fail(message);
    } else {
      if ((j & (YEARS | MONTHS)) !== lineStart) {
        throw Error(callback(327));
      }
      if (splice(), message === mySecret && id === a || pop(message, id), null !== data) {
        var p = j;
        j |= YEARS;
        var url = end();
        for (;;) {
          try {
            constructor();
            break;
          } catch (nodes) {
            write(message, nodes);
          }
        }
        if (writeHead(), j = p, settings.current = url, className === currentType) {
          throw p = ie, pop(message, id), attr(message, id), indent(message), p;
        }
        if (null !== data) {
          throw Error(callback(261));
        }
        message.finishedWork = message.current.alternate;
        message.finishedExpirationTime = id;
        /** @type {null} */
        mySecret = null;
        fail(message);
        indent(message);
      }
    }
    return null;
  }
  /**
   * @param {Function} fn
   * @param {Object} item
   * @return {?}
   */
  function focus(fn, item) {
    var p = j;
    j |= 1;
    try {
      return fn(item);
    } finally {
      if ((j = p) === lineStart) {
        text();
      }
    }
  }
  /**
   * @param {Function} callback
   * @param {?} err
   * @return {?}
   */
  function read(callback, err) {
    var p = j;
    j &= -2;
    j |= pos;
    try {
      return callback(err);
    } finally {
      if ((j = p) === lineStart) {
        text();
      }
    }
  }
  /**
   * @param {Function} message
   * @param {?} id
   * @return {undefined}
   */
  function pop(message, id) {
    /** @type {null} */
    message.finishedWork = null;
    /** @type {number} */
    message.finishedExpirationTime = 0;
    var text = message.timeoutHandle;
    if (-1 !== text && (message.timeoutHandle = -1, append(text)), null !== data) {
      text = data.return;
      for (;null !== text;) {
        var result = text;
        switch(result.tag) {
          case 1:
            var childContextTypes = result.type.childContextTypes;
            if (null != childContextTypes) {
              play();
            }
            break;
          case 3:
            trace();
            advance();
            break;
          case 5:
            toArray(result);
            break;
          case 4:
            trace();
            break;
          case 13:
          ;
          case 19:
            has(res);
            break;
          case 10:
            size(result);
        }
        text = text.return;
      }
    }
    /** @type {Function} */
    mySecret = message;
    data = _(message.current, null);
    a = id;
    /** @type {number} */
    className = check_unmarked;
    /** @type {null} */
    ie = null;
    /** @type {number} */
    right = down = 1073741823;
    /** @type {null} */
    firingStart = null;
    /** @type {number} */
    offset = 0;
    /** @type {boolean} */
    es = false;
  }
  /**
   * @param {Function} bytes
   * @param {Object} fragment
   * @return {?}
   */
  function write(bytes, fragment) {
    for (;;) {
      try {
        if (writeHead(), Status(), null === data || null === data.return) {
          return className = currentType, ie = fragment, null;
        }
        e: {
          /** @type {Function} */
          var instance = bytes;
          var fn = data.return;
          var node = data;
          /** @type {Object} */
          var value = fragment;
          if (fragment = a, node.effectTag |= 2048, node.firstEffect = node.lastEffect = null, null !== value && ("object" == typeof value && "function" == typeof value.then)) {
            var camelKey = value;
            /** @type {boolean} */
            var l = 0 != (1 & res.current);
            var self = fn;
            do {
              var u;
              if (u = 13 === self.tag) {
                var len = self.memoizedState;
                if (null !== len) {
                  /** @type {boolean} */
                  u = null !== len.dehydrated;
                } else {
                  var o = self.memoizedProps;
                  /** @type {boolean} */
                  u = void 0 !== o.fallback && (true !== o.unstable_avoidThisFallback || !l);
                }
              }
              if (u) {
                var previous = self.updateQueue;
                if (null === previous) {
                  var set = new Set;
                  set.add(camelKey);
                  self.updateQueue = set;
                } else {
                  previous.add(camelKey);
                }
                if (0 == (2 & self.mode)) {
                  if (self.effectTag |= 64, node.effectTag &= -2981, 1 === node.tag) {
                    if (null === node.alternate) {
                      /** @type {number} */
                      node.tag = 17;
                    } else {
                      var s = split(1073741823, null);
                      /** @type {number} */
                      s.tag = 2;
                      traverseNode(node, s);
                    }
                  }
                  /** @type {number} */
                  node.expirationTime = 1073741823;
                  break e;
                }
                value = void 0;
                /** @type {Object} */
                node = fragment;
                var host = instance.pingCache;
                if (null === host ? (host = instance.pingCache = new BB, value = new Set, host.set(camelKey, value)) : void 0 === (value = host.get(camelKey)) && (value = new Set, host.set(camelKey, value)), !value.has(node)) {
                  value.add(node);
                  var reject = module.bind(null, instance, camelKey, node);
                  camelKey.then(reject, reject);
                }
                self.effectTag |= 4096;
                /** @type {Object} */
                self.expirationTime = fragment;
                break e;
              }
              self = self.return;
            } while (null !== self);
            /** @type {Error} */
            value = Error((cb(node.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + on(node));
          }
          if (className !== selector) {
            /** @type {number} */
            className = Ul;
          }
          value = valueOf(value, node);
          self = fn;
          do {
            switch(self.tag) {
              case 3:
                camelKey = value;
                self.effectTag |= 4096;
                /** @type {Object} */
                self.expirationTime = fragment;
                getFile(self, onData(self, camelKey, fragment));
                break e;
              case 1:
                camelKey = value;
                var type = self.type;
                var result = self.stateNode;
                if (0 == (64 & self.effectTag) && ("function" == typeof type.getDerivedStateFromError || null !== result && ("function" == typeof result.componentDidCatch && (null === callbacks || !callbacks.has(result))))) {
                  self.effectTag |= 4096;
                  /** @type {Object} */
                  self.expirationTime = fragment;
                  getFile(self, show(self, camelKey, fragment));
                  break e;
                }
              ;
            }
            self = self.return;
          } while (null !== self);
        }
        data = create(data);
      } catch (first) {
        fragment = first;
        continue;
      }
      break;
    }
  }
  /**
   * @return {?}
   */
  function end() {
    var value = settings.current;
    return settings.current = to, null === value ? to : value;
  }
  /**
   * @param {number} left
   * @param {Object} start
   * @return {undefined}
   */
  function slice(left, start) {
    if (left < down) {
      if (2 < left) {
        /** @type {number} */
        down = left;
      }
    }
    if (null !== start) {
      if (left < right) {
        if (2 < left) {
          /** @type {number} */
          right = left;
          /** @type {Object} */
          firingStart = start;
        }
      }
    }
  }
  /**
   * @param {number} x
   * @return {undefined}
   */
  function open(x) {
    if (x > offset) {
      /** @type {number} */
      offset = x;
    }
  }
  /**
   * @return {undefined}
   */
  function constructor() {
    for (;null !== data;) {
      data = _render(data);
    }
  }
  /**
   * @return {undefined}
   */
  function xhr() {
    for (;null !== data && !parent();) {
      data = _render(data);
    }
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function _render(data) {
    var result = render(data.alternate, data, a);
    return data.memoizedProps = data.pendingProps, null === result && (result = create(data)), user.current = null, result;
  }
  /**
   * @param {Object} message
   * @return {?}
   */
  function create(message) {
    /** @type {Object} */
    data = message;
    do {
      var result = data.alternate;
      if (message = data.return, 0 == (2048 & data.effectTag)) {
        e: {
          var options = result;
          var node = a;
          var ret = (result = data).pendingProps;
          switch(result.tag) {
            case 2:
            ;
            case 16:
              break;
            case 15:
            ;
            case 0:
              break;
            case 1:
              if (encodeURIComponent(result.type)) {
                play();
              }
              break;
            case 3:
              trace();
              advance();
              if ((ret = result.stateNode).pendingContext) {
                ret.context = ret.pendingContext;
                /** @type {null} */
                ret.pendingContext = null;
              }
              if (null === options || null === options.child) {
                if (insert(result)) {
                  isString(result);
                }
              }
              isList(result);
              break;
            case 5:
              toArray(result);
              node = value(source.current);
              var n = result.type;
              if (null !== options && null != result.stateNode) {
                add(options, result, n, ret, node);
                if (options.ref !== result.ref) {
                  result.effectTag |= 128;
                }
              } else {
                if (ret) {
                  var val = value(el.current);
                  if (insert(result)) {
                    var e = (ret = result).stateNode;
                    options = ret.type;
                    var self = ret.memoizedProps;
                    var type = node;
                    switch(e[i] = ret, e[name] = self, n = void 0, node = e, options) {
                      case "iframe":
                      ;
                      case "object":
                      ;
                      case "embed":
                        equal("load", node);
                        break;
                      case "video":
                      ;
                      case "audio":
                        /** @type {number} */
                        e = 0;
                        for (;e < events.length;e++) {
                          equal(events[e], node);
                        }
                        break;
                      case "source":
                        equal("error", node);
                        break;
                      case "img":
                      ;
                      case "image":
                      ;
                      case "link":
                        equal("error", node);
                        equal("load", node);
                        break;
                      case "form":
                        equal("reset", node);
                        equal("submit", node);
                        break;
                      case "details":
                        equal("toggle", node);
                        break;
                      case "input":
                        getValue(node, self);
                        equal("invalid", node);
                        createElement(type, "onChange");
                        break;
                      case "select":
                        node._wrapperState = {
                          wasMultiple : !!self.multiple
                        };
                        equal("invalid", node);
                        createElement(type, "onChange");
                        break;
                      case "textarea":
                        setup(node, self);
                        equal("invalid", node);
                        createElement(type, "onChange");
                    }
                    for (n in forEach(options, self), e = null, self) {
                      if (self.hasOwnProperty(n)) {
                        val = self[n];
                        if ("children" === n) {
                          if ("string" == typeof val) {
                            if (node.textContent !== val) {
                              /** @type {Array} */
                              e = ["children", val];
                            }
                          } else {
                            if ("number" == typeof val) {
                              if (node.textContent !== "" + val) {
                                /** @type {Array} */
                                e = ["children", "" + val];
                              }
                            }
                          }
                        } else {
                          if (p.hasOwnProperty(n)) {
                            if (null != val) {
                              createElement(type, n);
                            }
                          }
                        }
                      }
                    }
                    switch(options) {
                      case "input":
                        transform(node);
                        func(node, self, true);
                        break;
                      case "textarea":
                        transform(node);
                        setter(node);
                        break;
                      case "select":
                      ;
                      case "option":
                        break;
                      default:
                        if ("function" == typeof self.onClick) {
                          /** @type {function (): undefined} */
                          node.onclick = t;
                        }
                      ;
                    }
                    /** @type {null} */
                    n = e;
                    /** @type {null} */
                    ret.updateQueue = n;
                    if (ret = null !== n) {
                      isString(result);
                    }
                  } else {
                    options = result;
                    type = n;
                    self = ret;
                    e = 9 === node.nodeType ? node : node.ownerDocument;
                    if (val === namespaces.html) {
                      val = describe(type);
                    }
                    if (val === namespaces.html) {
                      if ("script" === type) {
                        /** @type {string} */
                        (self = e.createElement("div")).innerHTML = "<script>\x3c/script>";
                        e = self.removeChild(self.firstChild);
                      } else {
                        if ("string" == typeof self.is) {
                          e = e.createElement(type, {
                            is : self.is
                          });
                        } else {
                          e = e.createElement(type);
                          if ("select" === type) {
                            type = e;
                            if (self.multiple) {
                              /** @type {boolean} */
                              type.multiple = true;
                            } else {
                              if (self.size) {
                                type.size = self.size;
                              }
                            }
                          }
                        }
                      }
                    } else {
                      e = e.createElementNS(val, type);
                    }
                    (self = e)[i] = options;
                    self[name] = ret;
                    isNode(self, result, false, false);
                    result.stateNode = self;
                    var ol = node;
                    var stat = find(type = n, options = ret);
                    switch(type) {
                      case "iframe":
                      ;
                      case "object":
                      ;
                      case "embed":
                        equal("load", self);
                        node = options;
                        break;
                      case "video":
                      ;
                      case "audio":
                        /** @type {number} */
                        node = 0;
                        for (;node < events.length;node++) {
                          equal(events[node], self);
                        }
                        node = options;
                        break;
                      case "source":
                        equal("error", self);
                        node = options;
                        break;
                      case "img":
                      ;
                      case "image":
                      ;
                      case "link":
                        equal("error", self);
                        equal("load", self);
                        node = options;
                        break;
                      case "form":
                        equal("reset", self);
                        equal("submit", self);
                        node = options;
                        break;
                      case "details":
                        equal("toggle", self);
                        node = options;
                        break;
                      case "input":
                        getValue(self, options);
                        node = mixin(self, options);
                        equal("invalid", self);
                        createElement(ol, "onChange");
                        break;
                      case "option":
                        node = trigger(self, options);
                        break;
                      case "select":
                        self._wrapperState = {
                          wasMultiple : !!options.multiple
                        };
                        node = extend({}, options, {
                          value : void 0
                        });
                        equal("invalid", self);
                        createElement(ol, "onChange");
                        break;
                      case "textarea":
                        setup(self, options);
                        node = fire(self, options);
                        equal("invalid", self);
                        createElement(ol, "onChange");
                        break;
                      default:
                        node = options;
                    }
                    forEach(type, node);
                    e = void 0;
                    val = type;
                    var vvar = self;
                    var methods = node;
                    for (e in methods) {
                      if (methods.hasOwnProperty(e)) {
                        var obj = methods[e];
                        if ("style" === e) {
                          load(vvar, obj);
                        } else {
                          if ("dangerouslySetInnerHTML" === e) {
                            if (null != (obj = obj ? obj.__html : void 0)) {
                              serialize(vvar, obj);
                            }
                          } else {
                            if ("children" === e) {
                              if ("string" == typeof obj) {
                                if ("textarea" !== val || "" !== obj) {
                                  $(vvar, obj);
                                }
                              } else {
                                if ("number" == typeof obj) {
                                  $(vvar, "" + obj);
                                }
                              }
                            } else {
                              if ("suppressContentEditableWarning" !== e) {
                                if ("suppressHydrationWarning" !== e) {
                                  if ("autoFocus" !== e) {
                                    if (p.hasOwnProperty(e)) {
                                      if (null != obj) {
                                        createElement(ol, e);
                                      }
                                    } else {
                                      if (null != obj) {
                                        walk(vvar, e, obj, stat);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    switch(type) {
                      case "input":
                        transform(self);
                        func(self, options, false);
                        break;
                      case "textarea":
                        transform(self);
                        setter(self);
                        break;
                      case "option":
                        if (null != options.value) {
                          self.setAttribute("value", "" + format(options.value));
                        }
                        break;
                      case "select":
                        /** @type {boolean} */
                        (node = self).multiple = !!options.multiple;
                        if (null != (self = options.value)) {
                          build(node, !!options.multiple, self, false);
                        } else {
                          if (null != options.defaultValue) {
                            build(node, !!options.multiple, options.defaultValue, true);
                          }
                        }
                        break;
                      default:
                        if ("function" == typeof node.onClick) {
                          /** @type {function (): undefined} */
                          self.onclick = t;
                        }
                      ;
                    }
                    if (ret = needsFocus(n, ret)) {
                      isString(result);
                    }
                  }
                  if (null !== result.ref) {
                    result.effectTag |= 128;
                  }
                } else {
                  if (null === result.stateNode) {
                    throw Error(callback(166));
                  }
                }
              }
              break;
            case 6:
              if (options && null != result.stateNode) {
                forOwn(options, result, options.memoizedProps, ret);
              } else {
                if ("string" != typeof ret && null === result.stateNode) {
                  throw Error(callback(166));
                }
                node = value(source.current);
                value(el.current);
                if (insert(result)) {
                  n = (ret = result).stateNode;
                  node = ret.memoizedProps;
                  n[i] = ret;
                  if (ret = n.nodeValue !== node) {
                    isString(result);
                  }
                } else {
                  n = result;
                  (ret = (9 === node.nodeType ? node : node.ownerDocument).createTextNode(ret))[i] = n;
                  result.stateNode = ret;
                }
              }
              break;
            case 11:
              break;
            case 13:
              if (has(res), ret = result.memoizedState, 0 != (64 & result.effectTag)) {
                result.expirationTime = node;
                break e;
              }
              /** @type {boolean} */
              ret = null !== ret;
              /** @type {boolean} */
              n = false;
              if (null === options) {
                if (void 0 !== result.memoizedProps.fallback) {
                  insert(result);
                }
              } else {
                /** @type {boolean} */
                n = null !== (node = options.memoizedState);
                if (!ret) {
                  if (!(null === node)) {
                    if (null !== (node = options.child.sibling)) {
                      if (null !== (self = result.firstEffect)) {
                        result.firstEffect = node;
                        node.nextEffect = self;
                      } else {
                        result.firstEffect = result.lastEffect = node;
                        /** @type {null} */
                        node.nextEffect = null;
                      }
                      /** @type {number} */
                      node.effectTag = 8;
                    }
                  }
                }
              }
              if (ret) {
                if (!n) {
                  if (0 != (2 & result.mode)) {
                    if (null === options && true !== result.memoizedProps.unstable_avoidThisFallback || 0 != (1 & res.current)) {
                      if (className === check_unmarked) {
                        /** @type {number} */
                        className = bbGrid_subgrid_control;
                      }
                    } else {
                      if (!(className !== check_unmarked && className !== bbGrid_subgrid_control)) {
                        /** @type {number} */
                        className = number;
                      }
                      if (0 !== offset) {
                        if (null !== mySecret) {
                          attr(mySecret, a);
                          extractStacktrace(mySecret, offset);
                        }
                      }
                    }
                  }
                }
              }
              if (ret || n) {
                result.effectTag |= 4;
              }
              break;
            case 7:
            ;
            case 8:
            ;
            case 12:
              break;
            case 4:
              trace();
              isList(result);
              break;
            case 10:
              size(result);
              break;
            case 9:
            ;
            case 14:
              break;
            case 17:
              if (encodeURIComponent(result.type)) {
                play();
              }
              break;
            case 19:
              if (has(res), null === (ret = result.memoizedState)) {
                break;
              }
              if (n = 0 != (64 & result.effectTag), null === (self = ret.rendering)) {
                if (n) {
                  reduce(ret, false);
                } else {
                  if (className !== check_unmarked || null !== options && 0 != (64 & options.effectTag)) {
                    options = result.child;
                    for (;null !== options;) {
                      if (null !== (self = normalize(options))) {
                        result.effectTag |= 64;
                        reduce(ret, false);
                        if (null !== (n = self.updateQueue)) {
                          result.updateQueue = n;
                          result.effectTag |= 4;
                        }
                        if (null === ret.lastEffect) {
                          /** @type {null} */
                          result.firstEffect = null;
                        }
                        result.lastEffect = ret.lastEffect;
                        ret = node;
                        n = result.child;
                        for (;null !== n;) {
                          options = ret;
                          (node = n).effectTag &= 2;
                          /** @type {null} */
                          node.nextEffect = null;
                          /** @type {null} */
                          node.firstEffect = null;
                          /** @type {null} */
                          node.lastEffect = null;
                          if (null === (self = node.alternate)) {
                            /** @type {number} */
                            node.childExpirationTime = 0;
                            node.expirationTime = options;
                            /** @type {null} */
                            node.child = null;
                            /** @type {null} */
                            node.memoizedProps = null;
                            /** @type {null} */
                            node.memoizedState = null;
                            /** @type {null} */
                            node.updateQueue = null;
                            /** @type {null} */
                            node.dependencies = null;
                          } else {
                            node.childExpirationTime = self.childExpirationTime;
                            node.expirationTime = self.expirationTime;
                            node.child = self.child;
                            node.memoizedProps = self.memoizedProps;
                            node.memoizedState = self.memoizedState;
                            node.updateQueue = self.updateQueue;
                            options = self.dependencies;
                            /** @type {(null|{expirationTime: ?, firstContext: ?, responders: ?})} */
                            node.dependencies = null === options ? null : {
                              expirationTime : options.expirationTime,
                              firstContext : options.firstContext,
                              responders : options.responders
                            };
                          }
                          n = n.sibling;
                        }
                        contains(res, 1 & res.current | 2);
                        result = result.child;
                        break e;
                      }
                      options = options.sibling;
                    }
                  }
                }
              } else {
                if (!n) {
                  if (null !== (options = normalize(self))) {
                    if (result.effectTag |= 64, n = true, null !== (node = options.updateQueue) && (result.updateQueue = node, result.effectTag |= 4), reduce(ret, true), null === ret.tail && ("hidden" === ret.tailMode && !self.alternate)) {
                      if (null !== (result = result.lastEffect = ret.lastEffect)) {
                        /** @type {null} */
                        result.nextEffect = null;
                      }
                      break;
                    }
                  } else {
                    if (getTime() > ret.tailExpiration) {
                      if (1 < node) {
                        result.effectTag |= 64;
                        /** @type {boolean} */
                        n = true;
                        reduce(ret, false);
                        /** @type {number} */
                        result.expirationTime = result.childExpirationTime = node - 1;
                      }
                    }
                  }
                }
                if (ret.isBackwards) {
                  self.sibling = result.child;
                  result.child = self;
                } else {
                  if (null !== (node = ret.last)) {
                    node.sibling = self;
                  } else {
                    result.child = self;
                  }
                  ret.last = self;
                }
              }
              if (null !== ret.tail) {
                if (0 === ret.tailExpiration) {
                  ret.tailExpiration = getTime() + 500;
                }
                node = ret.tail;
                ret.rendering = node;
                ret.tail = node.sibling;
                ret.lastEffect = result.lastEffect;
                /** @type {null} */
                node.sibling = null;
                /** @type {number} */
                ret = res.current;
                contains(res, ret = n ? 1 & ret | 2 : 1 & ret);
                result = node;
                break e;
              }
              break;
            case 20:
            ;
            case 21:
              break;
            default:
              throw Error(callback(156, result.tag));;
          }
          /** @type {null} */
          result = null;
        }
        if (ret = data, 1 === a || 1 !== ret.childExpirationTime) {
          /** @type {number} */
          n = 0;
          node = ret.child;
          for (;null !== node;) {
            if ((options = node.expirationTime) > n) {
              n = options;
            }
            if ((self = node.childExpirationTime) > n) {
              n = self;
            }
            node = node.sibling;
          }
          ret.childExpirationTime = n;
        }
        if (null !== result) {
          return result;
        }
        if (null !== message) {
          if (0 == (2048 & message.effectTag)) {
            if (null === message.firstEffect) {
              message.firstEffect = data.firstEffect;
            }
            if (null !== data.lastEffect) {
              if (null !== message.lastEffect) {
                message.lastEffect.nextEffect = data.firstEffect;
              }
              message.lastEffect = data.lastEffect;
            }
            if (1 < data.effectTag) {
              if (null !== message.lastEffect) {
                message.lastEffect.nextEffect = data;
              } else {
                message.firstEffect = data;
              }
              message.lastEffect = data;
            }
          }
        }
      } else {
        if (null !== (result = parser(data))) {
          return result.effectTag &= 2047, result;
        }
        if (null !== message) {
          /** @type {null} */
          message.firstEffect = message.lastEffect = null;
          message.effectTag |= 2048;
        }
      }
      if (null !== (result = data.sibling)) {
        return result;
      }
      /** @type {Object} */
      data = message;
    } while (null !== data);
    return className === check_unmarked && (className = selector), null;
  }
  /**
   * @param {Object} body
   * @return {?}
   */
  function encode(body) {
    var n = body.expirationTime;
    return n > (body = body.childExpirationTime) ? n : body;
  }
  /**
   * @param {Function} message
   * @return {?}
   */
  function fail(message) {
    var step = reject();
    return exists(99, start.bind(null, message, step)), null;
  }
  /**
   * @param {Function} stream
   * @param {Object} arg
   * @return {?}
   */
  function start(stream, arg) {
    do {
      splice();
    } while (null !== tree);
    if ((j & (YEARS | MONTHS)) !== lineStart) {
      throw Error(callback(327));
    }
    var i = stream.finishedWork;
    var end = stream.finishedExpirationTime;
    if (null === i) {
      return null;
    }
    if (stream.finishedWork = null, stream.finishedExpirationTime = 0, i === stream.current) {
      throw Error(callback(177));
    }
    /** @type {null} */
    stream.callbackNode = null;
    /** @type {number} */
    stream.callbackExpirationTime = 0;
    /** @type {number} */
    stream.callbackPriority = 90;
    /** @type {number} */
    stream.nextKnownPendingLevel = 0;
    var ret = encode(i);
    if (stream.firstPendingTime = ret, end <= stream.lastSuspendedTime ? stream.firstSuspendedTime = stream.lastSuspendedTime = stream.nextKnownPendingLevel = 0 : end <= stream.firstSuspendedTime && (stream.firstSuspendedTime = end - 1), end <= stream.lastPingedTime && (stream.lastPingedTime = 0), end <= stream.lastExpiredTime && (stream.lastExpiredTime = 0), stream === mySecret && (data = mySecret = null, a = 0), 1 < i.effectTag ? null !== i.lastEffect ? (i.lastEffect.nextEffect = i, ret = i.firstEffect) :
    ret = i : ret = i.firstEffect, null !== ret) {
      var p = j;
      j |= MONTHS;
      /** @type {null} */
      user.current = null;
      _clockseq = clockseq;
      var node = getData();
      if (init(node)) {
        if ("selectionStart" in node) {
          var doc = {
            start : node.selectionStart,
            end : node.selectionEnd
          }
        } else {
          e: {
            var sel = (doc = (doc = node.ownerDocument) && doc.defaultView || window).getSelection && doc.getSelection();
            if (sel && 0 !== sel.rangeCount) {
              doc = sel.anchorNode;
              var result = sel.anchorOffset;
              var item = sel.focusNode;
              sel = sel.focusOffset;
              try {
                doc.nodeType;
                item.nodeType;
              } catch (e) {
                /** @type {null} */
                doc = null;
                break e;
              }
              /** @type {number} */
              var prefix = 0;
              /** @type {number} */
              var value = -1;
              /** @type {number} */
              var name = -1;
              /** @type {number} */
              var num = 0;
              /** @type {number} */
              var m = 0;
              var current = node;
              /** @type {null} */
              var element = null;
              t: for (;;) {
                var tmp;
                for (;current !== doc || (0 !== result && 3 !== current.nodeType || (value = prefix + result)), current !== item || (0 !== sel && 3 !== current.nodeType || (name = prefix + sel)), 3 === current.nodeType && (prefix += current.nodeValue.length), null !== (tmp = current.firstChild);) {
                  element = current;
                  current = tmp;
                }
                for (;;) {
                  if (current === node) {
                    break t;
                  }
                  if (element === doc && (++num === result && (value = prefix)), element === item && (++m === sel && (name = prefix)), null !== (tmp = current.nextSibling)) {
                    break;
                  }
                  element = (current = element).parentNode;
                }
                current = tmp;
              }
              /** @type {(null|{end: ?, start: ?})} */
              doc = -1 === value || -1 === name ? null : {
                start : value,
                end : name
              };
            } else {
              /** @type {null} */
              doc = null;
            }
          }
        }
        /** @type {({end: ?, start: ?}|{end: number, start: number})} */
        doc = doc || {
          start : 0,
          end : 0
        };
      } else {
        /** @type {null} */
        doc = null;
      }
      js = {
        focusedElem : node,
        selectionRange : doc
      };
      /** @type {boolean} */
      clockseq = false;
      params = ret;
      do {
        try {
          subscribe();
        } catch (zip_bl) {
          if (null === params) {
            throw Error(callback(330));
          }
          isFunction(params, zip_bl);
          params = params.nextEffect;
        }
      } while (null !== params);
      params = ret;
      do {
        try {
          /** @type {Function} */
          node = stream;
          /** @type {Object} */
          doc = arg;
          for (;null !== params;) {
            var el = params.effectTag;
            if (16 & el && $(params.stateNode, ""), 128 & el) {
              var expectedHashCode = params.alternate;
              if (null !== expectedHashCode) {
                var self = expectedHashCode.ref;
                if (null !== self) {
                  if ("function" == typeof self) {
                    self(null);
                  } else {
                    /** @type {null} */
                    self.current = null;
                  }
                }
              }
            }
            switch(1038 & el) {
              case 2:
                process(params);
                params.effectTag &= -3;
                break;
              case 6:
                process(params);
                params.effectTag &= -3;
                update(params.alternate, params);
                break;
              case 1024:
                params.effectTag &= -1025;
                break;
              case 1028:
                params.effectTag &= -1025;
                update(params.alternate, params);
                break;
              case 4:
                update(params.alternate, params);
                break;
              case 8:
                reset(node, result = params, doc);
                complete(result);
            }
            params = params.nextEffect;
          }
        } catch (zip_bd) {
          if (null === params) {
            throw Error(callback(330));
          }
          isFunction(params, zip_bd);
          params = params.nextEffect;
        }
      } while (null !== params);
      if (self = js, expectedHashCode = getData(), el = self.focusedElem, doc = self.selectionRange, expectedHashCode !== el && (el && (el.ownerDocument && function contains(a, b) {
        return!(!a || !b) && (a === b || (!a || 3 !== a.nodeType) && (b && 3 === b.nodeType ? contains(a, b.parentNode) : "contains" in a ? a.contains(b) : !!a.compareDocumentPosition && !!(16 & a.compareDocumentPosition(b))));
      }(el.ownerDocument.documentElement, el)))) {
        if (null !== doc) {
          if (init(el)) {
            expectedHashCode = doc.start;
            if (void 0 === (self = doc.end)) {
              self = expectedHashCode;
            }
            if ("selectionStart" in el) {
              el.selectionStart = expectedHashCode;
              /** @type {number} */
              el.selectionEnd = Math.min(self, el.value.length);
            } else {
              if ((self = (expectedHashCode = el.ownerDocument || document) && expectedHashCode.defaultView || window).getSelection) {
                self = self.getSelection();
                result = el.textContent.length;
                /** @type {number} */
                node = Math.min(doc.start, result);
                /** @type {number} */
                doc = void 0 === doc.end ? node : Math.min(doc.end, result);
                if (!self.extend) {
                  if (node > doc) {
                    /** @type {number} */
                    result = doc;
                    /** @type {number} */
                    doc = node;
                    /** @type {number} */
                    node = result;
                  }
                }
                result = highlight(el, node);
                item = highlight(el, doc);
                if (result) {
                  if (item) {
                    if (1 !== self.rangeCount || (self.anchorNode !== result.node || (self.anchorOffset !== result.offset || (self.focusNode !== item.node || self.focusOffset !== item.offset)))) {
                      (expectedHashCode = expectedHashCode.createRange()).setStart(result.node, result.offset);
                      self.removeAllRanges();
                      if (node > doc) {
                        self.addRange(expectedHashCode);
                        self.extend(item.node, item.offset);
                      } else {
                        expectedHashCode.setEnd(item.node, item.offset);
                        self.addRange(expectedHashCode);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        /** @type {Array} */
        expectedHashCode = [];
        self = el;
        for (;self = self.parentNode;) {
          if (1 === self.nodeType) {
            expectedHashCode.push({
              element : self,
              left : self.scrollLeft,
              top : self.scrollTop
            });
          }
        }
        if ("function" == typeof el.focus) {
          el.focus();
        }
        /** @type {number} */
        el = 0;
        for (;el < expectedHashCode.length;el++) {
          (self = expectedHashCode[el]).element.scrollLeft = self.left;
          self.element.scrollTop = self.top;
        }
      }
      /** @type {null} */
      js = null;
      /** @type {boolean} */
      clockseq = !!_clockseq;
      /** @type {null} */
      _clockseq = null;
      stream.current = i;
      params = ret;
      do {
        try {
          el = end;
          for (;null !== params;) {
            var len = params.effectTag;
            if (36 & len) {
              var options = params.alternate;
              switch(self = el, (expectedHashCode = params).tag) {
                case 0:
                ;
                case 11:
                ;
                case 15:
                  warn(16, 32, expectedHashCode);
                  break;
                case 1:
                  var _ = expectedHashCode.stateNode;
                  if (4 & expectedHashCode.effectTag) {
                    if (null === options) {
                      _.componentDidMount();
                    } else {
                      var reversed = expectedHashCode.elementType === expectedHashCode.type ? options.memoizedProps : bind(expectedHashCode.type, options.memoizedProps);
                      _.componentDidUpdate(reversed, options.memoizedState, _.__reactInternalSnapshotBeforeUpdate);
                    }
                  }
                  var fromIndex = expectedHashCode.updateQueue;
                  if (null !== fromIndex) {
                    onComplete(0, fromIndex, _);
                  }
                  break;
                case 3:
                  var suiteView = expectedHashCode.updateQueue;
                  if (null !== suiteView) {
                    if (node = null, null !== expectedHashCode.child) {
                      switch(expectedHashCode.child.tag) {
                        case 5:
                          node = expectedHashCode.child.stateNode;
                          break;
                        case 1:
                          node = expectedHashCode.child.stateNode;
                      }
                    }
                    onComplete(0, suiteView, node);
                  }
                  break;
                case 5:
                  var submenu = expectedHashCode.stateNode;
                  if (null === options) {
                    if (4 & expectedHashCode.effectTag) {
                      if (needsFocus(expectedHashCode.type, expectedHashCode.memoizedProps)) {
                        submenu.focus();
                      }
                    }
                  }
                  break;
                case 6:
                ;
                case 4:
                ;
                case 12:
                  break;
                case 13:
                  if (null === expectedHashCode.memoizedState) {
                    var functions = expectedHashCode.alternate;
                    if (null !== functions) {
                      var length = functions.memoizedState;
                      if (null !== length) {
                        var udataCur = length.dehydrated;
                        if (null !== udataCur) {
                          tick(udataCur);
                        }
                      }
                    }
                  }
                  break;
                case 19:
                ;
                case 17:
                ;
                case 20:
                ;
                case 21:
                  break;
                default:
                  throw Error(callback(163));;
              }
            }
            if (128 & len) {
              expectedHashCode = void 0;
              var opts = params.ref;
              if (null !== opts) {
                var ln = params.stateNode;
                switch(params.tag) {
                  case 5:
                    expectedHashCode = ln;
                    break;
                  default:
                    expectedHashCode = ln;
                }
                if ("function" == typeof opts) {
                  opts(expectedHashCode);
                } else {
                  opts.current = expectedHashCode;
                }
              }
            }
            params = params.nextEffect;
          }
        } catch (te) {
          if (null === params) {
            throw Error(callback(330));
          }
          isFunction(params, te);
          params = params.nextEffect;
        }
      } while (null !== params);
      /** @type {null} */
      params = null;
      observableToAsync();
      j = p;
    } else {
      stream.current = i;
    }
    if (ls) {
      /** @type {boolean} */
      ls = false;
      /** @type {Function} */
      tree = stream;
      /** @type {Object} */
      dict = arg;
    } else {
      params = ret;
      for (;null !== params;) {
        arg = params.nextEffect;
        /** @type {null} */
        params.nextEffect = null;
        /** @type {Object} */
        params = arg;
      }
    }
    if (0 === (arg = stream.firstPendingTime) && (callbacks = null), 1073741823 === arg ? stream === serverVersionsStream ? fs++ : (fs = 0, serverVersionsStream = stream) : fs = 0, "function" == typeof back && back(i.stateNode, end), indent(stream), is) {
      throw is = false, stream = s, s = null, stream;
    }
    return(j & pos) !== lineStart ? null : (text(), null);
  }
  /**
   * @return {undefined}
   */
  function subscribe() {
    for (;null !== params;) {
      var len = params.effectTag;
      if (0 != (256 & len)) {
        register(params.alternate, params);
      }
      if (!(0 == (512 & len))) {
        if (!ls) {
          /** @type {boolean} */
          ls = true;
          toJSON(97, function() {
            return splice(), null;
          });
        }
      }
      params = params.nextEffect;
    }
  }
  /**
   * @return {?}
   */
  function splice() {
    if (90 !== dict) {
      var restoreScript = 97 < dict ? 97 : dict;
      return dict = 90, exists(restoreScript, some);
    }
  }
  /**
   * @return {?}
   */
  function some() {
    if (null === tree) {
      return false;
    }
    var node = tree;
    if (tree = null, (j & (YEARS | MONTHS)) !== lineStart) {
      throw Error(callback(331));
    }
    var p = j;
    j |= MONTHS;
    node = node.current.firstEffect;
    for (;null !== node;) {
      try {
        var next = node;
        if (0 != (512 & next.effectTag)) {
          switch(next.tag) {
            case 0:
            ;
            case 11:
            ;
            case 15:
              warn(128, 0, next);
              warn(0, 64, next);
          }
        }
      } catch (zip_bl) {
        if (null === node) {
          throw Error(callback(330));
        }
        isFunction(node, zip_bl);
      }
      next = node.nextEffect;
      /** @type {null} */
      node.nextEffect = null;
      node = next;
    }
    return j = p, text(), true;
  }
  /**
   * @param {Object} node
   * @param {Object} item
   * @param {?} n
   * @return {undefined}
   */
  function sibling(node, item, n) {
    traverseNode(node, item = onData(node, item = valueOf(n, item), 1073741823));
    if (null !== (node = iter(node, 1073741823))) {
      indent(node);
    }
  }
  /**
   * @param {Object} item
   * @param {?} n
   * @return {undefined}
   */
  function isFunction(item, n) {
    if (3 === item.tag) {
      sibling(item, item, n);
    } else {
      var node = item.return;
      for (;null !== node;) {
        if (3 === node.tag) {
          sibling(node, item, n);
          break;
        }
        if (1 === node.tag) {
          var result = node.stateNode;
          if ("function" == typeof node.type.getDerivedStateFromError || "function" == typeof result.componentDidCatch && (null === callbacks || !callbacks.has(result))) {
            traverseNode(node, item = show(node, item = valueOf(n, item), 1073741823));
            if (null !== (node = iter(node, 1073741823))) {
              indent(node);
            }
            break;
          }
        }
        node = node.return;
      }
    }
  }
  /**
   * @param {Function} message
   * @param {Object} name
   * @param {?} id
   * @return {undefined}
   */
  function module(message, name, id) {
    var node = message.pingCache;
    if (null !== node) {
      node.delete(name);
    }
    if (mySecret === message && a === id) {
      if (className === number || className === bbGrid_subgrid_control && (1073741823 === down && getTime() - mean_height < heightstep)) {
        pop(message, a);
      } else {
        /** @type {boolean} */
        es = true;
      }
    } else {
      if (oldErrorHandler(message, id)) {
        if (!(0 !== (name = message.lastPingedTime) && name < id)) {
          message.lastPingedTime = id;
          if (message.finishedExpirationTime === id) {
            /** @type {number} */
            message.finishedExpirationTime = 0;
            /** @type {null} */
            message.finishedWork = null;
          }
          indent(message);
        }
      }
    }
  }
  /**
   * @param {Object} node
   * @param {(number|string)} data
   * @return {undefined}
   */
  function options(node, data) {
    var s = node.stateNode;
    if (null !== s) {
      s.delete(data);
    }
    if (0 === (data = 0)) {
      data = map(data = decodeURIComponent(), node, null);
    }
    if (null !== (node = iter(node, data))) {
      indent(node);
    }
  }
  /**
   * @param {?} tag
   * @param {?} opt_parent
   * @param {?} key
   * @param {?} mode
   * @return {undefined}
   */
  function Node(tag, opt_parent, key, mode) {
    this.tag = tag;
    this.key = key;
    /** @type {null} */
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    /** @type {number} */
    this.index = 0;
    /** @type {null} */
    this.ref = null;
    this.pendingProps = opt_parent;
    /** @type {null} */
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = mode;
    /** @type {number} */
    this.effectTag = 0;
    /** @type {null} */
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    /** @type {number} */
    this.childExpirationTime = this.expirationTime = 0;
    /** @type {null} */
    this.alternate = null;
  }
  /**
   * @param {number} opt_attributes
   * @param {string} value
   * @param {?} recurring
   * @param {number} keepData
   * @return {?}
   */
  function debug(opt_attributes, value, recurring, keepData) {
    return new Node(opt_attributes, value, recurring, keepData);
  }
  /**
   * @param {Object} arg
   * @return {?}
   */
  function join(arg) {
    return!(!(arg = arg.prototype) || !arg.isReactComponent);
  }
  /**
   * @param {Object} options
   * @param {Object} object
   * @return {?}
   */
  function _(options, object) {
    var node = options.alternate;
    return null === node ? ((node = debug(options.tag, object, options.key, options.mode)).elementType = options.elementType, node.type = options.type, node.stateNode = options.stateNode, node.alternate = options, options.alternate = node) : (node.pendingProps = object, node.effectTag = 0, node.nextEffect = null, node.firstEffect = null, node.lastEffect = null), node.childExpirationTime = options.childExpirationTime, node.expirationTime = options.expirationTime, node.child = options.child, node.memoizedProps =
    options.memoizedProps, node.memoizedState = options.memoizedState, node.updateQueue = options.updateQueue, object = options.dependencies, node.dependencies = null === object ? null : {
      expirationTime : object.expirationTime,
      firstContext : object.firstContext,
      responders : object.responders
    }, node.sibling = options.sibling, node.index = options.index, node.ref = options.ref, node;
  }
  /**
   * @param {Object} options
   * @param {Object} a
   * @param {Object} name
   * @param {Object} recurring
   * @param {number} type
   * @param {Function} value
   * @return {?}
   */
  function handler(options, a, name, recurring, type, value) {
    /** @type {number} */
    var attributes = 2;
    if (recurring = options, "function" == typeof options) {
      if (join(options)) {
        /** @type {number} */
        attributes = 1;
      }
    } else {
      if ("string" == typeof options) {
        /** @type {number} */
        attributes = 5;
      } else {
        e: {
          switch(options) {
            case Infinity:
              return filter(name.children, type, value, a);
            case centerAt:
              /** @type {number} */
              attributes = 8;
              type |= 7;
              break;
            case clearMarkers:
              /** @type {number} */
              attributes = 8;
              type |= 1;
              break;
            case elementType:
              return(options = debug(12, name, a, 8 | type)).elementType = elementType, options.type = elementType, options.expirationTime = value, options;
            case info:
              return(options = debug(13, name, a, type)).type = info, options.elementType = info, options.expirationTime = value, options;
            case body:
              return(options = debug(19, name, a, type)).elementType = body, options.expirationTime = value, options;
            default:
              if ("object" == typeof options && null !== options) {
                switch(options.$$typeof) {
                  case progress:
                    /** @type {number} */
                    attributes = 10;
                    break e;
                  case transitionBegin:
                    /** @type {number} */
                    attributes = 9;
                    break e;
                  case transitionEnd:
                    /** @type {number} */
                    attributes = 11;
                    break e;
                  case pause:
                    /** @type {number} */
                    attributes = 14;
                    break e;
                  case cancel:
                    /** @type {number} */
                    attributes = 16;
                    /** @type {null} */
                    recurring = null;
                    break e;
                }
              }
              throw Error(callback(130, null == options ? options : typeof options, ""));;
          }
        }
      }
    }
    return(a = debug(attributes, name, a, type)).elementType = options, a.type = recurring, a.expirationTime = value, a;
  }
  /**
   * @param {Object} id
   * @param {number} type
   * @param {Function} value
   * @param {Object} recurring
   * @return {?}
   */
  function filter(id, type, value, recurring) {
    return(id = debug(7, id, recurring, type)).expirationTime = value, id;
  }
  /**
   * @param {string} arg
   * @param {?} type
   * @param {Function} index
   * @return {?}
   */
  function require(arg, type, index) {
    return(arg = debug(6, arg, null, type)).expirationTime = index, arg;
  }
  /**
   * @param {Object} options
   * @param {?} events
   * @param {Function} target
   * @return {?}
   */
  function clone(options, events, target) {
    return(events = debug(4, null !== options.children ? options.children : [], options.key, events)).expirationTime = target, events.stateNode = {
      containerInfo : options.containerInfo,
      pendingChildren : null,
      implementation : options.implementation
    }, events;
  }
  /**
   * @param {?} arr
   * @param {?} tag
   * @param {?} initial
   * @return {undefined}
   */
  function clear(arr, tag, initial) {
    this.tag = tag;
    /** @type {null} */
    this.current = null;
    this.containerInfo = arr;
    /** @type {null} */
    this.pingCache = this.pendingChildren = null;
    /** @type {number} */
    this.finishedExpirationTime = 0;
    /** @type {null} */
    this.finishedWork = null;
    /** @type {number} */
    this.timeoutHandle = -1;
    /** @type {null} */
    this.pendingContext = this.context = null;
    this.hydrate = initial;
    /** @type {null} */
    this.callbackNode = null;
    /** @type {number} */
    this.callbackPriority = 90;
    /** @type {number} */
    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }
  /**
   * @param {(Function|string)} y
   * @param {?} end
   * @return {?}
   */
  function oldErrorHandler(y, end) {
    var x = y.firstSuspendedTime;
    return y = y.lastSuspendedTime, 0 !== x && (x >= end && y <= end);
  }
  /**
   * @param {Function} message
   * @param {?} msg
   * @return {undefined}
   */
  function attr(message, msg) {
    var mail = message.firstSuspendedTime;
    var endCol = message.lastSuspendedTime;
    if (mail < msg) {
      message.firstSuspendedTime = msg;
    }
    if (endCol > msg || 0 === mail) {
      message.lastSuspendedTime = msg;
    }
    if (msg <= message.lastPingedTime) {
      /** @type {number} */
      message.lastPingedTime = 0;
    }
    if (msg <= message.lastExpiredTime) {
      /** @type {number} */
      message.lastExpiredTime = 0;
    }
  }
  /**
   * @param {Array} data
   * @param {?} offset
   * @return {undefined}
   */
  function extractStacktrace(data, offset) {
    if (offset > data.firstPendingTime) {
      data.firstPendingTime = offset;
    }
    var length = data.firstSuspendedTime;
    if (0 !== length) {
      if (offset >= length) {
        /** @type {number} */
        data.firstSuspendedTime = data.lastSuspendedTime = data.nextKnownPendingLevel = 0;
      } else {
        if (offset >= data.lastSuspendedTime) {
          data.lastSuspendedTime = offset + 1;
        }
      }
      if (offset > data.nextKnownPendingLevel) {
        data.nextKnownPendingLevel = offset;
      }
    }
  }
  /**
   * @param {Function} message
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function _send(message, deepDataAndEvents) {
    var mail = message.lastExpiredTime;
    if (0 === mail || mail > deepDataAndEvents) {
      message.lastExpiredTime = deepDataAndEvents;
    }
  }
  /**
   * @param {string} target
   * @param {Object} data
   * @param {Object} options
   * @param {string} parent
   * @return {?}
   */
  function publish(target, data, options, parent) {
    var node = data.current;
    var name = decodeURIComponent();
    var camelKey = ev.suspense;
    name = map(name, node, camelKey);
    e: {
      if (options) {
        t: {
          if (visit(options = options._reactInternalFiber) !== options || 1 !== options.tag) {
            throw Error(callback(170));
          }
          /** @type {Object} */
          var opts = options;
          do {
            switch(opts.tag) {
              case 3:
                opts = opts.stateNode.context;
                break t;
              case 1:
                if (encodeURIComponent(opts.type)) {
                  opts = opts.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
              ;
            }
            opts = opts.return;
          } while (null !== opts);
          throw Error(callback(171));
        }
        if (1 === options.tag) {
          var args = options.type;
          if (encodeURIComponent(args)) {
            options = run(options, args, opts);
            break e;
          }
        }
        options = opts;
      } else {
        options = alternativeMessage;
      }
    }
    return null === data.context ? data.context = options : data.pendingContext = options, (data = split(name, camelKey)).payload = {
      element : target
    }, null !== (parent = void 0 === parent ? null : parent) && (data.callback = parent), traverseNode(node, data), getter(node, name), name;
  }
  /**
   * @param {Object} options
   * @return {?}
   */
  function pipe(options) {
    if (!(options = options.current).child) {
      return null;
    }
    switch(options.child.tag) {
      case 5:
      ;
      default:
        return options.child.stateNode;
    }
  }
  /**
   * @param {(Function|string)} s
   * @param {?} msg
   * @return {undefined}
   */
  function enter(s, msg) {
    if (null !== (s = s.memoizedState)) {
      if (null !== s.dehydrated) {
        if (s.retryTime < msg) {
          s.retryTime = msg;
        }
      }
    }
  }
  /**
   * @param {Object} node
   * @param {?} name
   * @return {undefined}
   */
  function index(node, name) {
    enter(node, name);
    if (node = node.alternate) {
      enter(node, name);
    }
  }
  /**
   * @param {Object} content
   * @param {number} options
   * @param {boolean} todos
   * @return {undefined}
   */
  function ViewModel(content, options, todos) {
    var request = new clear(content, options, todos = null != todos && true === todos.hydrate);
    var response = debug(3, null, null, 2 === options ? 7 : 1 === options ? 3 : 0);
    request.current = response;
    response.stateNode = request;
    content[last] = request.current;
    if (todos) {
      if (0 !== options) {
        (function(classesToRemove) {
          var failuresLink = removeItem(classesToRemove);
          matches.forEach(function(event) {
            listener(event, classesToRemove, failuresLink);
          });
          asserterNames.forEach(function(event) {
            listener(event, classesToRemove, failuresLink);
          });
        })(9 === content.nodeType ? content : content.ownerDocument);
      }
    }
    this._internalRoot = request;
  }
  /**
   * @param {Node} obj
   * @return {?}
   */
  function isUndefined(obj) {
    return!(!obj || 1 !== obj.nodeType && (9 !== obj.nodeType && (11 !== obj.nodeType && (8 !== obj.nodeType || " react-mount-point-unstable " !== obj.nodeValue))));
  }
  /**
   * @param {Object} recurring
   * @param {string} data
   * @param {Node} d
   * @param {boolean} opt_isDefault
   * @param {Function} attributes
   * @return {?}
   */
  function template(recurring, data, d, opt_isDefault, attributes) {
    var v = d._reactRootContainer;
    if (v) {
      var x = v._internalRoot;
      if ("function" == typeof attributes) {
        /** @type {Function} */
        var block = attributes;
        /**
         * @return {undefined}
         */
        attributes = function() {
          var o = pipe(x);
          block.call(o);
        };
      }
      publish(data, x, recurring, attributes);
    } else {
      if (v = d._reactRootContainer = function(p, elem) {
        if (elem || (elem = !(!(elem = p ? 9 === p.nodeType ? p.documentElement : p.firstChild : null) || (1 !== elem.nodeType || !elem.hasAttribute("data-reactroot")))), !elem) {
          var c;
          for (;c = p.lastChild;) {
            p.removeChild(c);
          }
        }
        return new ViewModel(p, 0, elem ? {
          hydrate : true
        } : void 0);
      }(d, opt_isDefault), x = v._internalRoot, "function" == typeof attributes) {
        /** @type {Function} */
        var ostring = attributes;
        /**
         * @return {undefined}
         */
        attributes = function() {
          var it = pipe(x);
          ostring.call(it);
        };
      }
      read(function() {
        publish(data, x, recurring, attributes);
      });
    }
    return pipe(x);
  }
  /**
   * @param {?} deepDataAndEvents
   * @param {Node} y
   * @return {?}
   */
  function factory(deepDataAndEvents, y) {
    var r20 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!isUndefined(y)) {
      throw Error(callback(200));
    }
    return function(deepDataAndEvents, v11, recurring) {
      var res = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return{
        $$typeof : LOCATION_CHANGED_EVENT,
        key : null == res ? null : "" + res,
        children : deepDataAndEvents,
        containerInfo : v11,
        implementation : recurring
      };
    }(deepDataAndEvents, y, null, r20);
  }
  var graph = action(0);
  var extend = action(13);
  var table = action(22);
  if (!graph) {
    throw Error(callback(227));
  }
  /** @type {null} */
  var exclude = null;
  var cache = {};
  /** @type {Array} */
  var codeSegments = [];
  var storage = {};
  var p = {};
  var config = {};
  /** @type {boolean} */
  var m = false;
  /** @type {null} */
  var ctx = null;
  /** @type {boolean} */
  var y = false;
  /** @type {null} */
  var status = null;
  var newArgs = {
    /**
     * @param {Function} obj
     * @return {undefined}
     */
    onError : function(obj) {
      /** @type {boolean} */
      m = true;
      /** @type {Function} */
      ctx = obj;
    }
  };
  /** @type {null} */
  var defer = null;
  /** @type {null} */
  var MAP = null;
  /** @type {null} */
  var unbind = null;
  /** @type {null} */
  var str = null;
  var EventPluginRegistry = {
    /**
     * @param {Array} next_scope
     * @return {undefined}
     */
    injectEventPluginOrder : function(next_scope) {
      if (exclude) {
        throw Error(callback(101));
      }
      /** @type {Array.<?>} */
      exclude = Array.prototype.slice.call(next_scope);
      ready();
    },
    /**
     * @param {Object} attributes
     * @return {undefined}
     */
    injectEventPluginsByName : function(attributes) {
      var key;
      /** @type {boolean} */
      var n = false;
      for (key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          var value = attributes[key];
          if (!cache.hasOwnProperty(key) || cache[key] !== value) {
            if (cache[key]) {
              throw Error(callback(102, key));
            }
            cache[key] = value;
            /** @type {boolean} */
            n = true;
          }
        }
      }
      if (n) {
        ready();
      }
    }
  };
  var exports = graph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (!exports.hasOwnProperty("ReactCurrentDispatcher")) {
    exports.ReactCurrentDispatcher = {
      current : null
    };
  }
  if (!exports.hasOwnProperty("ReactCurrentBatchConfig")) {
    exports.ReactCurrentBatchConfig = {
      suspense : null
    };
  }
  /** @type {RegExp} */
  var r20 = /^(.*)[\\\/]/;
  var showMessage = "function" == typeof Symbol && Symbol.for;
  var CLOSE_EVENT = showMessage ? Symbol.for("react.element") : 60103;
  var LOCATION_CHANGED_EVENT = showMessage ? Symbol.for("react.portal") : 60106;
  var Infinity = showMessage ? Symbol.for("react.fragment") : 60107;
  var clearMarkers = showMessage ? Symbol.for("react.strict_mode") : 60108;
  var elementType = showMessage ? Symbol.for("react.profiler") : 60114;
  var progress = showMessage ? Symbol.for("react.provider") : 60109;
  var transitionBegin = showMessage ? Symbol.for("react.context") : 60110;
  var centerAt = showMessage ? Symbol.for("react.concurrent_mode") : 60111;
  var transitionEnd = showMessage ? Symbol.for("react.forward_ref") : 60112;
  var info = showMessage ? Symbol.for("react.suspense") : 60113;
  var body = showMessage ? Symbol.for("react.suspense_list") : 60120;
  var pause = showMessage ? Symbol.for("react.memo") : 60115;
  var cancel = showMessage ? Symbol.for("react.lazy") : 60116;
  if (showMessage) {
    Symbol.for("react.fundamental");
  }
  if (showMessage) {
    Symbol.for("react.responder");
  }
  if (showMessage) {
    Symbol.for("react.scope");
  }
  var special = "function" == typeof Symbol && Symbol.iterator;
  /** @type {boolean} */
  var isWindowEnv = !("undefined" == typeof window || (void 0 === window.document || void 0 === window.document.createElement));
  /** @type {null} */
  var set = null;
  /** @type {null} */
  var from = null;
  /** @type {null} */
  var container = null;
  /** @type {function (Function, Object): ?} */
  var writeFile = assert;
  /** @type {boolean} */
  var tag = false;
  /** @type {boolean} */
  var fe = false;
  new Map;
  /** @type {RegExp} */
  var rparentsprev = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  /** @type {function (this:Object, *): boolean} */
  var __hasProp = Object.prototype.hasOwnProperty;
  var pairs = {};
  var matchers = {};
  var $cookies = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(key) {
    $cookies[key] = new Image(key, 0, false, key, null, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(ps) {
    var key = ps[0];
    $cookies[key] = new Image(key, 1, false, ps[1], null, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(key) {
    $cookies[key] = new Image(key, 2, false, key.toLowerCase(), null, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(key) {
    $cookies[key] = new Image(key, 2, false, key, null, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(key) {
    $cookies[key] = new Image(key, 3, false, key.toLowerCase(), null, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(key) {
    $cookies[key] = new Image(key, 3, true, key, null, false);
  });
  ["capture", "download"].forEach(function(key) {
    $cookies[key] = new Image(key, 4, false, key, null, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(key) {
    $cookies[key] = new Image(key, 6, false, key, null, false);
  });
  ["rowSpan", "start"].forEach(function(key) {
    $cookies[key] = new Image(key, 5, false, key.toLowerCase(), null, false);
  });
  /** @type {RegExp} */
  var cx = /[\-:]([a-z])/g;
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(text) {
    /** @type {string} */
    var key = text.replace(cx, boundary);
    $cookies[key] = new Image(key, 1, false, text, null, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(text) {
    /** @type {string} */
    var key = text.replace(cx, boundary);
    $cookies[key] = new Image(key, 1, false, text, "http://www.w3.org/1999/xlink", false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(text) {
    var key = text.replace(cx, boundary);
    $cookies[key] = new Image(key, 1, false, text, "http://www.w3.org/XML/1998/namespace", false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(key) {
    $cookies[key] = new Image(key, 1, false, key.toLowerCase(), null, false);
  });
  $cookies.xlinkHref = new Image("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
  ["src", "href", "action", "formAction"].forEach(function(key) {
    $cookies[key] = new Image(key, 1, false, key.toLowerCase(), null, true);
  });
  var namespaces = {
    html : "http://www.w3.org/1999/xhtml",
    mathml : "http://www.w3.org/1998/Math/MathML",
    svg : "http://www.w3.org/2000/svg"
  };
  var div;
  var serialize = function(success) {
    return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(failures, resp, dataAndEvents, deepDataAndEvents) {
      MSApp.execUnsafeLocalFunction(function() {
        return success(failures, resp);
      });
    } : success;
  }(function(el, a) {
    if (el.namespaceURI !== namespaces.svg || "innerHTML" in el) {
      /** @type {Object} */
      el.innerHTML = a;
    } else {
      /** @type {string} */
      (div = div || document.createElement("div")).innerHTML = "<svg>" + a.valueOf().toString() + "</svg>";
      a = div.firstChild;
      for (;el.firstChild;) {
        el.removeChild(el.firstChild);
      }
      for (;a.firstChild;) {
        el.appendChild(a.firstChild);
      }
    }
  });
  var base = {
    animationend : _prefixedEvent("Animation", "AnimationEnd"),
    animationiteration : _prefixedEvent("Animation", "AnimationIteration"),
    animationstart : _prefixedEvent("Animation", "AnimationStart"),
    transitionend : _prefixedEvent("Transition", "TransitionEnd")
  };
  var object = {};
  var arr2 = {};
  if (isWindowEnv) {
    /** @type {(CSSStyleDeclaration|null)} */
    arr2 = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete base.animationend.animation;
      delete base.animationiteration.animation;
      delete base.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete base.transitionend.transition;
    }
  }
  var Text = make_name("animationend");
  var animation = make_name("animationiteration");
  var gallery = make_name("animationstart");
  var canvas = make_name("transitionend");
  /** @type {Array.<string>} */
  var events = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var empty;
  var trim;
  var Element;
  /** @type {boolean} */
  var lt = false;
  /** @type {Array} */
  var arr = [];
  /** @type {null} */
  var output = null;
  /** @type {null} */
  var v = null;
  /** @type {null} */
  var arg = null;
  var results = new Map;
  var methods = new Map;
  /** @type {Array} */
  var items = [];
  /** @type {Array.<string>} */
  var matches = "" +
      "mousedown mouseup " +
      "touchcancel touchend " +
      "touchstart auxclick " +
      "dblclick pointercancel " +
      "pointerdown pointerup " +
      "dragend dragstart drop " +
      "compositionend compositionstart " +
      "keydown keypress keyup input " +
      "textInput close cancel copy " +
      "cut paste click change contextmenu " +
      "reset submit".split(" ");
  /** @type {Array.<string>} */
  var asserterNames = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
  extend(Event.prototype, {
    /**
     * @return {undefined}
     */
    preventDefault : function() {
      /** @type {boolean} */
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (event) {
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          if ("unknown" != typeof event.returnValue) {
            /** @type {boolean} */
            event.returnValue = false;
          }
        }
        /** @type {function (): ?} */
        this.isDefaultPrevented = returnTrue;
      }
    },
    /**
     * @return {undefined}
     */
    stopPropagation : function() {
      var event = this.nativeEvent;
      if (event) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          if ("unknown" != typeof event.cancelBubble) {
            /** @type {boolean} */
            event.cancelBubble = true;
          }
        }
        /** @type {function (): ?} */
        this.isPropagationStopped = returnTrue;
      }
    },
    /**
     * @return {undefined}
     */
    persist : function() {
      /** @type {function (): ?} */
      this.isPersistent = returnTrue;
    },
    /** @type {function (): ?} */
    isPersistent : _returnFalse,
    /**
     * @return {undefined}
     */
    destructor : function() {
      var propName;
      var Interface = this.constructor.Interface;
      for (propName in Interface) {
        /** @type {null} */
        this[propName] = null;
      }
      /** @type {null} */
      this.nativeEvent = this._targetInst = this.dispatchConfig = null;
      /** @type {function (): ?} */
      this.isPropagationStopped = this.isDefaultPrevented = _returnFalse;
      /** @type {null} */
      this._dispatchInstances = this._dispatchListeners = null;
    }
  });
  Event.Interface = {
    type : null,
    target : null,
    /**
     * @return {?}
     */
    currentTarget : function() {
      return null;
    },
    eventPhase : null,
    bubbles : null,
    cancelable : null,
    /**
     * @param {Event} event
     * @return {?}
     */
    timeStamp : function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented : null,
    isTrusted : null
  };
  /**
   * @param {?} opt_attributes
   * @return {?}
   */
  Event.extend = function(opt_attributes) {
    /**
     * @return {undefined}
     */
    function F() {
    }
    /**
     * @return {?}
     */
    function Class() {
      return parent.apply(this, arguments);
    }
    var parent = this;
    F.prototype = parent.prototype;
    var prototype = new F;
    return extend(prototype, Class.prototype), Class.prototype = prototype, Class.prototype.constructor = Class, Class.Interface = extend({}, parent.Interface, opt_attributes), Class.extend = parent.extend, isPlainObject(Class), Class;
  };
  isPlainObject(Event);
  var fx = Event.extend({
    animationName : null,
    elapsedTime : null,
    pseudoElement : null
  });
  var tp = Event.extend({
    /**
     * @param {Window} e
     * @return {?}
     */
    clipboardData : function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  });
  var Y = Event.extend({
    view : null,
    detail : null
  });
  var listeners = Y.extend({
    relatedTarget : null
  });
  var key = {
    Esc : "Escape",
    Spacebar : " ",
    Left : "ArrowLeft",
    Up : "ArrowUp",
    Right : "ArrowRight",
    Down : "ArrowDown",
    Del : "Delete",
    Win : "OS",
    Menu : "ContextMenu",
    Apps : "ContextMenu",
    Scroll : "ScrollLock",
    MozPrintableKey : "Unidentified"
  };
  var keytable = {
    8 : "Backspace",
    9 : "Tab",
    12 : "Clear",
    13 : "Enter",
    16 : "Shift",
    17 : "Control",
    18 : "Alt",
    19 : "Pause",
    20 : "CapsLock",
    27 : "Escape",
    32 : " ",
    33 : "PageUp",
    34 : "PageDown",
    35 : "End",
    36 : "Home",
    37 : "ArrowLeft",
    38 : "ArrowUp",
    39 : "ArrowRight",
    40 : "ArrowDown",
    45 : "Insert",
    46 : "Delete",
    112 : "F1",
    113 : "F2",
    114 : "F3",
    115 : "F4",
    116 : "F5",
    117 : "F6",
    118 : "F7",
    119 : "F8",
    120 : "F9",
    121 : "F10",
    122 : "F11",
    123 : "F12",
    144 : "NumLock",
    145 : "ScrollLock",
    224 : "Meta"
  };
  var bytes = {
    Alt : "altKey",
    Control : "ctrlKey",
    Meta : "metaKey",
    Shift : "shiftKey"
  };
  var OTHER = Y.extend({
    /**
     * @param {string} expectedHashCode
     * @return {?}
     */
    key : function(expectedHashCode) {
      if (expectedHashCode.key) {
        var j = key[expectedHashCode.key] || expectedHashCode.key;
        if ("Unidentified" !== j) {
          return j;
        }
      }
      return "keypress" === expectedHashCode.type ?
          13 === (expectedHashCode = fixEvent(expectedHashCode)) ?
              "Enter" : String.fromCharCode(expectedHashCode) :
          "keydown" === expectedHashCode.type || "keyup" === expectedHashCode.type ?
              keytable[expectedHashCode.keyCode] || "Unidentified" : "";
    },
    location : null,
    ctrlKey : null,
    shiftKey : null,
    altKey : null,
    metaKey : null,
    repeat : null,
    locale : null,
    /** @type {function (): ?} */
    getModifierState : repeat,
    /**
     * @param {Object} e
     * @return {?}
     */
    charCode : function(e) {
      return "keypress" === e.type ? fixEvent(e) : 0;
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    keyCode : function(e) {
      return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    /**
     * @param {Object} e
     * @return {?}
     */
    which : function(e) {
      return "keypress" === e.type ? fixEvent(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    }
  });
  /** @type {number} */
  var shift = 0;
  /** @type {number} */
  var _ref1 = 0;
  /** @type {boolean} */
  var Jt = false;
  /** @type {boolean} */
  var Zt = false;
  var box = Y.extend({
    screenX : null,
    screenY : null,
    clientX : null,
    clientY : null,
    pageX : null,
    pageY : null,
    ctrlKey : null,
    shiftKey : null,
    altKey : null,
    metaKey : null,
    /** @type {function (): ?} */
    getModifierState : repeat,
    button : null,
    buttons : null,
    /**
     * @param {string} expectedHashCode
     * @return {?}
     */
    relatedTarget : function(expectedHashCode) {
      return expectedHashCode.relatedTarget || (expectedHashCode.fromElement === expectedHashCode.srcElement ? expectedHashCode.toElement : expectedHashCode.fromElement);
    },
    /**
     * @param {Object} ev
     * @return {?}
     */
    movementX : function(ev) {
      if ("movementX" in ev) {
        return ev.movementX;
      }
      var dragOY = shift;
      return shift = ev.screenX, Jt ? "mousemove" === ev.type ? ev.screenX - dragOY : 0 : (Jt = true, 0);
    },
    /**
     * @param {Object} ev
     * @return {?}
     */
    movementY : function(ev) {
      if ("movementY" in ev) {
        return ev.movementY;
      }
      var dragOY = _ref1;
      return _ref1 = ev.screenY, Zt ? "mousemove" === ev.type ? ev.screenY - dragOY : 0 : (Zt = true, 0);
    }
  });
  var MSGPACK_INT32 = box.extend({
    pointerId : null,
    width : null,
    height : null,
    pressure : null,
    tangentialPressure : null,
    tiltX : null,
    tiltY : null,
    twist : null,
    pointerType : null,
    isPrimary : null
  });
  var _type = box.extend({
    dataTransfer : null
  });
  var POST = Y.extend({
    touches : null,
    targetTouches : null,
    changedTouches : null,
    altKey : null,
    metaKey : null,
    ctrlKey : null,
    shiftKey : null,
    /** @type {function (): ?} */
    getModifierState : repeat
  });
  var beforeunload = Event.extend({
    propertyName : null,
    elapsedTime : null,
    pseudoElement : null
  });
  var segment = box.extend({
    /**
     * @param {Object} event
     * @return {?}
     */
    deltaX : function(event) {
      return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
    },
    /**
     * @param {Object} event
     * @return {?}
     */
    deltaY : function(event) {
      return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
    },
    deltaZ : null,
    deltaMode : null
  });
  /** @type {Array} */
  var branchDataJSON = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown",
  0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit",
  "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Text, "animationEnd", 2], [animation, "animationIteration", 2], [gallery, "animationStart", 2], ["canplay",
  "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking",
  2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [canvas, "transitionEnd", 2], ["waiting", "waiting", 2]];
  var bits = {};
  var item = {};
  /** @type {number} */
  var conditionIndex = 0;
  for (;conditionIndex < branchDataJSON.length;conditionIndex++) {
    var parts = branchDataJSON[conditionIndex];
    var id = parts[0];
    var part = parts[1];
    var spaceAfter = parts[2];
    /** @type {string} */
    var cap = "on" + (part[0].toUpperCase() + part.slice(1));
    var val = {
      phasedRegistrationNames : {
        bubbled : cap,
        captured : cap + "Capture"
      },
      dependencies : [id],
      eventPriority : spaceAfter
    };
    bits[part] = val;
    item[id] = val;
  }
  var extractEvents = {
    eventTypes : bits,
    /**
     * @param {(Element|string)} func
     * @return {?}
     */
    getEventPriority : function(func) {
      return void 0 !== (func = item[func]) ? func.eventPriority : 2;
    },
    /**
     * @param {?} type
     * @param {Error} index
     * @param {Object} e
     * @param {Object} name
     * @return {?}
     */
    extractEvents : function(type, index, e, name) {
      var callback = item[type];
      if (!callback) {
        return null;
      }
      switch(type) {
        case "keypress":
          if (0 === fixEvent(e)) {
            return null;
          }
        ;
        case "keydown":
        ;
        case "keyup":
          type = OTHER;
          break;
        case "blur":
        ;
        case "focus":
          type = listeners;
          break;
        case "click":
          if (2 === e.button) {
            return null;
          }
        ;
        case "auxclick":
        ;
        case "dblclick":
        ;
        case "mousedown":
        ;
        case "mousemove":
        ;
        case "mouseup":
        ;
        case "mouseout":
        ;
        case "mouseover":
        ;
        case "contextmenu":
          type = box;
          break;
        case "drag":
        ;
        case "dragend":
        ;
        case "dragenter":
        ;
        case "dragexit":
        ;
        case "dragleave":
        ;
        case "dragover":
        ;
        case "dragstart":
        ;
        case "drop":
          type = _type;
          break;
        case "touchcancel":
        ;
        case "touchend":
        ;
        case "touchmove":
        ;
        case "touchstart":
          type = POST;
          break;
        case Text:
        ;
        case animation:
        ;
        case gallery:
          type = fx;
          break;
        case canvas:
          type = beforeunload;
          break;
        case "scroll":
          type = Y;
          break;
        case "wheel":
          type = segment;
          break;
        case "copy":
        ;
        case "cut":
        ;
        case "paste":
          type = tp;
          break;
        case "gotpointercapture":
        ;
        case "lostpointercapture":
        ;
        case "pointercancel":
        ;
        case "pointerdown":
        ;
        case "pointermove":
        ;
        case "pointerout":
        ;
        case "pointerover":
        ;
        case "pointerup":
          type = MSGPACK_INT32;
          break;
        default:
          /** @type {function (Object, ?, string, Object): ?} */
          type = Event;
      }
      return addEvent(index = type.getPooled(callback, index, e, name)), index;
    }
  };
  var attributes = table.unstable_UserBlockingPriority;
  var tbody = table.unstable_runWithPriority;
  /** @type {function ((Element|string)): ?} */
  var makeCallback = extractEvents.getEventPriority;
  /** @type {number} */
  var length = 10;
  /** @type {Array} */
  var result = [];
  /** @type {boolean} */
  var clockseq = true;
  var data_user = new ("function" == typeof WeakMap ? WeakMap : Map);
  var variables = {
    animationIterationCount : true,
    borderImageOutset : true,
    borderImageSlice : true,
    borderImageWidth : true,
    boxFlex : true,
    boxFlexGroup : true,
    boxOrdinalGroup : true,
    columnCount : true,
    columns : true,
    flex : true,
    flexGrow : true,
    flexPositive : true,
    flexShrink : true,
    flexNegative : true,
    flexOrder : true,
    gridArea : true,
    gridRow : true,
    gridRowEnd : true,
    gridRowSpan : true,
    gridRowStart : true,
    gridColumn : true,
    gridColumnEnd : true,
    gridColumnSpan : true,
    gridColumnStart : true,
    fontWeight : true,
    lineClamp : true,
    lineHeight : true,
    opacity : true,
    order : true,
    orphans : true,
    tabSize : true,
    widows : true,
    zIndex : true,
    zoom : true,
    fillOpacity : true,
    floodOpacity : true,
    stopOpacity : true,
    strokeDasharray : true,
    strokeDashoffset : true,
    strokeMiterlimit : true,
    strokeOpacity : true,
    strokeWidth : true
  };
  /** @type {Array} */
  var prefixes = ["Webkit", "ms", "Moz", "O"];
  Object.keys(variables).forEach(function(k) {
    prefixes.forEach(function(index) {
      /** @type {string} */
      index = index + k.charAt(0).toUpperCase() + k.substring(1);
      variables[index] = variables[k];
    });
  });
  var locals = extend({
    menuitem : true
  }, {
    area : true,
    base : true,
    br : true,
    col : true,
    embed : true,
    hr : true,
    img : true,
    input : true,
    keygen : true,
    link : true,
    meta : true,
    param : true,
    source : true,
    track : true,
    wbr : true
  });
  /** @type {string} */
  var k = "$";
  /** @type {string} */
  var expected = "/$";
  /** @type {string} */
  var ERROR = "$?";
  /** @type {string} */
  var WARN = "$!";
  /** @type {null} */
  var _clockseq = null;
  /** @type {null} */
  var js = null;
  /** @type {(function ((Function|null|string), number): number|undefined)} */
  var hasOwnProperty = "function" == typeof setTimeout ? setTimeout : void 0;
  /** @type {(function ((null|number|undefined)): ?|undefined)} */
  var append = "function" == typeof clearTimeout ? clearTimeout : void 0;
  /** @type {string} */
  var num = Math.random().toString(36).slice(2);
  /** @type {string} */
  var i = "__reactInternalInstance$" + num;
  /** @type {string} */
  var name = "__reactEventHandlers$" + num;
  /** @type {string} */
  var last = "__reactContainere$" + num;
  /** @type {null} */
  var elem = null;
  /** @type {null} */
  var tmp = null;
  /** @type {null} */
  var cur = null;
  var console = Event.extend({
    data : null
  });
  var emitter = Event.extend({
    data : null
  });
  /** @type {Array} */
  var HOT_KEYS = [9, 13, 27, 32];
  /** @type {boolean} */
  var iterator = isWindowEnv && "CompositionEvent" in window;
  /** @type {null} */
  var _ref = null;
  if (isWindowEnv) {
    if ("documentMode" in document) {
      _ref = document.documentMode;
    }
  }
  /** @type {boolean} */
  var prefix = isWindowEnv && ("TextEvent" in window && !_ref);
  var isCSSDropShadowEnabled = isWindowEnv && (!iterator || _ref && (8 < _ref && 11 >= _ref));
  /** @type {string} */
  var string = String.fromCharCode(32);
  var eventTypes = {
    beforeInput : {
      phasedRegistrationNames : {
        bubbled : "onBeforeInput",
        captured : "onBeforeInputCapture"
      },
      dependencies : ["compositionend", "keypress", "textInput", "paste"]
    },
    compositionEnd : {
      phasedRegistrationNames : {
        bubbled : "onCompositionEnd",
        captured : "onCompositionEndCapture"
      },
      dependencies : "blur compositionend keydown keypress keyup mousedown".split(" ")
    },
    compositionStart : {
      phasedRegistrationNames : {
        bubbled : "onCompositionStart",
        captured : "onCompositionStartCapture"
      },
      dependencies : "blur compositionstart keydown keypress keyup mousedown".split(" ")
    },
    compositionUpdate : {
      phasedRegistrationNames : {
        bubbled : "onCompositionUpdate",
        captured : "onCompositionUpdateCapture"
      },
      dependencies : "blur compositionupdate keydown keypress keyup mousedown".split(" ")
    }
  };
  /** @type {boolean} */
  var regexp = false;
  /** @type {boolean} */
  var compareShape = false;
  var BeforeInputEventPlugin = {
    eventTypes : eventTypes,
    /**
     * @param {Object} key
     * @param {Object} b
     * @param {Object} e
     * @param {Object} name
     * @return {?}
     */
    extractEvents : function(key, b, e, name) {
      var a;
      if (iterator) {
        e: {
          switch(key) {
            case "compositionstart":
              var eventType = eventTypes.compositionStart;
              break e;
            case "compositionend":
              eventType = eventTypes.compositionEnd;
              break e;
            case "compositionupdate":
              eventType = eventTypes.compositionUpdate;
              break e;
          }
          eventType = void 0;
        }
      } else {
        if (compareShape) {
          if (close(key, e)) {
            eventType = eventTypes.compositionEnd;
          }
        } else {
          if ("keydown" === key) {
            if (229 === e.keyCode) {
              eventType = eventTypes.compositionStart;
            }
          }
        }
      }
      return eventType ? (isCSSDropShadowEnabled && ("ko" !== e.locale && (compareShape || eventType !== eventTypes.compositionStart ? eventType === eventTypes.compositionEnd && (compareShape && (a = makeSelection())) : (tmp = "value" in (elem = name) ? elem.value : elem.textContent, compareShape = true))), eventType = console.getPooled(eventType, b, e, name), a ? eventType.data = a : null !== (a = changePage(e)) && (eventType.data = a), addEvent(eventType), a = eventType) : a = null, (key = prefix ?
      function(s, e) {
        switch(s) {
          case "compositionend":
            return changePage(e);
          case "keypress":
            return 32 !== e.which ? null : (regexp = true, string);
          case "textInput":
            return(s = e.data) === string && regexp ? null : s;
          default:
            return null;
        }
      }(key, e) : function(obj, evt) {
        if (compareShape) {
          return "compositionend" === obj || !iterator && close(obj, evt) ? (obj = makeSelection(), cur = tmp = elem = null, compareShape = false, obj) : null;
        }
        switch(obj) {
          case "paste":
            return null;
          case "keypress":
            if (!(evt.ctrlKey || (evt.altKey || evt.metaKey)) || evt.ctrlKey && evt.altKey) {
              if (evt.char && 1 < evt.char.length) {
                return evt.char;
              }
              if (evt.which) {
                return String.fromCharCode(evt.which);
              }
            }
            return null;
          case "compositionend":
            return isCSSDropShadowEnabled && "ko" !== evt.locale ? null : evt.data;
          default:
            return null;
        }
      }(key, e)) ? ((b = emitter.getPooled(eventTypes.beforeInput, b, e, name)).data = key, addEvent(b)) : b = null, null === a ? b : null === b ? a : [a, b];
    }
  };
  var defaults = {
    color : true,
    date : true,
    datetime : true,
    "datetime-local" : true,
    email : true,
    month : true,
    number : true,
    password : true,
    range : true,
    search : true,
    tel : true,
    text : true,
    time : true,
    url : true,
    week : true
  };
  var slider = {
    change : {
      phasedRegistrationNames : {
        bubbled : "onChange",
        captured : "onChangeCapture"
      },
      dependencies : "blur change click focus input keydown keyup selectionchange".split(" ")
    }
  };
  /** @type {null} */
  var capturedNode = null;
  /** @type {null} */
  var msg = null;
  /** @type {boolean} */
  var _isInputEventSupported = false;
  if (isWindowEnv) {
    _isInputEventSupported = stop("input") && (!document.documentMode || 9 < document.documentMode);
  }
  var _event;
  var ChangeEventPlugin = {
    eventTypes : slider,
    _isInputEventSupported : _isInputEventSupported,
    /**
     * @param {?} node
     * @param {boolean} selector
     * @param {?} nativeEvent
     * @param {?} value
     * @return {?}
     */
    extractEvents : function(node, selector, nativeEvent, value) {
      var elem = selector ? createNode(selector) : window;
      var name = elem.nodeName && elem.nodeName.toLowerCase();
      if ("select" === name || "input" === name && "file" === elem.type) {
        /** @type {function (string, boolean): ?} */
        var result = restoreScript
      } else {
        if (getName(elem)) {
          if (_isInputEventSupported) {
            /** @type {function (string, boolean): ?} */
            result = access;
          } else {
            /** @type {function (string): ?} */
            result = literal;
            /** @type {function (string, Function, ?): undefined} */
            var handler = navigate;
          }
        } else {
          if (name = elem.nodeName) {
            if ("input" === name.toLowerCase()) {
              if ("checkbox" === elem.type || "radio" === elem.type) {
                /** @type {function (string, boolean): ?} */
                result = response;
              }
            }
          }
        }
      }
      if (result && (result = result(node, selector))) {
        return setValue(result, nativeEvent, value);
      }
      if (handler) {
        handler(node, elem, selector);
      }
      if ("blur" === node) {
        if (node = elem._wrapperState) {
          if (node.controlled) {
            if ("number" === elem.type) {
              getComputedStyle(elem, "number", elem.value);
            }
          }
        }
      }
    }
  };
  var e = {
    mouseEnter : {
      registrationName : "onMouseEnter",
      dependencies : ["mouseout", "mouseover"]
    },
    mouseLeave : {
      registrationName : "onMouseLeave",
      dependencies : ["mouseout", "mouseover"]
    },
    pointerEnter : {
      registrationName : "onPointerEnter",
      dependencies : ["pointerout", "pointerover"]
    },
    pointerLeave : {
      registrationName : "onPointerLeave",
      dependencies : ["pointerout", "pointerover"]
    }
  };
  var EnterLeaveEventPlugin = {
    eventTypes : e,
    /**
     * @param {Object} node
     * @param {boolean} from
     * @param {Object} nativeEvent
     * @param {Object} obj
     * @param {Object} target
     * @return {?}
     */
    extractEvents : function(node, from, nativeEvent, obj, target) {
      /** @type {boolean} */
      var ret = "mouseover" === node || "pointerover" === node;
      /** @type {boolean} */
      var to = "mouseout" === node || "pointerout" === node;
      if (ret && (0 == (32 & target) && (nativeEvent.relatedTarget || nativeEvent.fromElement)) || !to && !ret) {
        return null;
      }
      if (target = obj.window === obj ? obj : (target = obj.ownerDocument) ? target.defaultView || target.parentWindow : window, to ? (to = from, null !== (from = (from = nativeEvent.relatedTarget || nativeEvent.toElement) ? findParent(from) : null) && ((from !== (ret = visit(from)) || 5 !== from.tag && 6 !== from.tag) && (from = null))) : to = null, to === from) {
        return null;
      }
      if ("mouseout" === node || "mouseover" === node) {
        var input = box;
        var event = e.mouseLeave;
        var n = e.mouseEnter;
        /** @type {string} */
        var i = "mouse";
      } else {
        if (!("pointerout" !== node && "pointerover" !== node)) {
          input = MSGPACK_INT32;
          event = e.pointerLeave;
          n = e.pointerEnter;
          /** @type {string} */
          i = "pointer";
        }
      }
      if (node = null == to ? target : createNode(to), target = null == from ? target : createNode(from), (event = input.getPooled(event, to, nativeEvent, obj)).type = i + "leave", event.target = node, event.relatedTarget = target, (obj = input.getPooled(n, from, nativeEvent, obj)).type = i + "enter", obj.target = target, obj.relatedTarget = node, i = from, (input = to) && i) {
        e: {
          node = i;
          /** @type {number} */
          to = 0;
          /** @type {boolean} */
          from = n = input;
          for (;from;from = parseInt(from)) {
            to++;
          }
          /** @type {number} */
          from = 0;
          /** @type {Object} */
          target = node;
          for (;target;target = parseInt(target)) {
            from++;
          }
          for (;0 < to - from;) {
            n = parseInt(n);
            to--;
          }
          for (;0 < from - to;) {
            node = parseInt(node);
            from--;
          }
          for (;to--;) {
            if (n === node || n === node.alternate) {
              break e;
            }
            n = parseInt(n);
            node = parseInt(node);
          }
          /** @type {null} */
          n = null;
        }
      } else {
        /** @type {null} */
        n = null;
      }
      node = n;
      /** @type {Array} */
      n = [];
      for (;input && (input !== node && (null === (to = input.alternate) || to !== node));) {
        n.push(input);
        input = parseInt(input);
      }
      /** @type {Array} */
      input = [];
      for (;i && (i !== node && (null === (to = i.alternate) || to !== node));) {
        input.push(i);
        i = parseInt(i);
      }
      /** @type {number} */
      i = 0;
      for (;i < n.length;i++) {
        handle(n[i], "bubbled", event);
      }
      /** @type {number} */
      i = input.length;
      for (;0 < i--;) {
        handle(input[i], "captured", obj);
      }
      return nativeEvent === _event ? (_event = null, [event]) : (_event = nativeEvent, [event, obj]);
    }
  };
  /** @type {Function} */
  var assertEquals = "function" == typeof Object.is ? Object.is : function(a, b) {
    return a === b && (0 !== a || 1 / a == 1 / b) || a != a && b != b;
  };
  /** @type {function (this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  /** @type {boolean} */
  var isFEDropShadowEnabled = isWindowEnv && ("documentMode" in document && 11 >= document.documentMode);
  var conf = {
    select : {
      phasedRegistrationNames : {
        bubbled : "onSelect",
        captured : "onSelectCapture"
      },
      dependencies : "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
    }
  };
  /** @type {null} */
  var ret = null;
  /** @type {null} */
  var suiteView = null;
  /** @type {null} */
  var actual = null;
  /** @type {boolean} */
  var si = false;
  var SelectEventPlugin = {
    eventTypes : conf,
    /**
     * @param {?} name
     * @param {boolean} selector
     * @param {Object} s
     * @param {Object} obj
     * @return {?}
     */
    extractEvents : function(name, selector, s, obj) {
      var codeSegments;
      var target = obj.window === obj ? obj.document : 9 === obj.nodeType ? obj : obj.ownerDocument;
      if (!(codeSegments = !target)) {
        e: {
          target = removeItem(target);
          codeSegments = config.onSelect;
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            if (!target.has(codeSegments[i])) {
              /** @type {boolean} */
              target = false;
              break e;
            }
          }
          /** @type {boolean} */
          target = true;
        }
        /** @type {boolean} */
        codeSegments = !target;
      }
      if (codeSegments) {
        return null;
      }
      switch(target = selector ? createNode(selector) : window, name) {
        case "focus":
          if (getName(target) || "true" === target.contentEditable) {
            ret = target;
            /** @type {boolean} */
            suiteView = selector;
            /** @type {null} */
            actual = null;
          }
          break;
        case "blur":
          /** @type {null} */
          actual = suiteView = ret = null;
          break;
        case "mousedown":
          /** @type {boolean} */
          si = true;
          break;
        case "contextmenu":
        ;
        case "mouseup":
        ;
        case "dragend":
          return si = false, select(s, obj);
        case "selectionchange":
          if (isFEDropShadowEnabled) {
            break;
          }
        ;
        case "keydown":
        ;
        case "keyup":
          return select(s, obj);
      }
      return null;
    }
  };
  EventPluginRegistry.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
  /** @type {function (?): ?} */
  defer = mix;
  /** @type {function (Object): ?} */
  MAP = eval;
  /** @type {function (boolean): ?} */
  unbind = createNode;
  EventPluginRegistry.injectEventPluginsByName({
    SimpleEventPlugin : extractEvents,
    EnterLeaveEventPlugin : EnterLeaveEventPlugin,
    ChangeEventPlugin : ChangeEventPlugin,
    SelectEventPlugin : SelectEventPlugin,
    BeforeInputEventPlugin : BeforeInputEventPlugin
  });
  new Set;
  /** @type {Array} */
  var url = [];
  /** @type {number} */
  var lang = -1;
  var alternativeMessage = {};
  var seen = {
    current : alternativeMessage
  };
  var b = {
    current : false
  };
  var ol = alternativeMessage;
  var validator = table.unstable_runWithPriority;
  var exec = table.unstable_scheduleCallback;
  var repeat_string = table.unstable_cancelCallback;
  var parent = table.unstable_shouldYield;
  var rows = table.unstable_requestPaint;
  var _getTime = table.unstable_now;
  var makeIterator = table.unstable_getCurrentPriorityLevel;
  var command = table.unstable_ImmediatePriority;
  var c = table.unstable_UserBlockingPriority;
  var count = table.unstable_NormalPriority;
  var modelList = table.unstable_LowPriority;
  var frame = table.unstable_IdlePriority;
  var formattedBack = {};
  var observableToAsync = void 0 !== rows ? rows : function() {
  };
  /** @type {null} */
  var args = null;
  /** @type {null} */
  var child = null;
  /** @type {boolean} */
  var Vi = false;
  var _startTime = _getTime();
  var getTime = 1E4 > _startTime ? _getTime : function() {
    return _getTime() - _startTime;
  };
  /** @type {number} */
  var Zi = 3;
  var obj = {
    current : null
  };
  /** @type {null} */
  var mode = null;
  /** @type {null} */
  var stack = null;
  /** @type {null} */
  var list = null;
  /** @type {boolean} */
  var curr = false;
  var ev = exports.ReactCurrentBatchConfig;
  var originalrefs = (new graph.Component).refs;
  var target = {
    /**
     * @param {(Object|string)} child
     * @return {?}
     */
    isMounted : function(child) {
      return!!(child = child._reactInternalFiber) && visit(child) === child;
    },
    /**
     * @param {(Object|string)} node
     * @param {string} dataAndEvents
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    enqueueSetState : function(node, dataAndEvents, deepDataAndEvents) {
      node = node._reactInternalFiber;
      var result = decodeURIComponent();
      var item = ev.suspense;
      /** @type {string} */
      (item = split(result = map(result, node, item), item)).payload = dataAndEvents;
      if (null != deepDataAndEvents) {
        /** @type {Object} */
        item.callback = deepDataAndEvents;
      }
      traverseNode(node, item);
      getter(node, result);
    },
    /**
     * @param {(Object|string)} node
     * @param {(Object|string)} completedall
     * @param {Object} recurring
     * @return {undefined}
     */
    enqueueReplaceState : function(node, completedall, recurring) {
      node = node._reactInternalFiber;
      var result = decodeURIComponent();
      var item = ev.suspense;
      /** @type {number} */
      (item = split(result = map(result, node, item), item)).tag = 1;
      /** @type {(Object|string)} */
      item.payload = completedall;
      if (null != recurring) {
        /** @type {Object} */
        item.callback = recurring;
      }
      traverseNode(node, item);
      getter(node, result);
    },
    /**
     * @param {string} node
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    enqueueForceUpdate : function(node, deepDataAndEvents) {
      node = node._reactInternalFiber;
      var result = decodeURIComponent();
      var item = ev.suspense;
      /** @type {number} */
      (item = split(result = map(result, node, item), item)).tag = 2;
      if (null != deepDataAndEvents) {
        /** @type {Object} */
        item.callback = deepDataAndEvents;
      }
      traverseNode(node, item);
      getter(node, result);
    }
  };
  /** @type {function (*): boolean} */
  var ok = Array.isArray;
  var pick = onSuccess(true);
  var sprintf = onSuccess(false);
  var needle = {};
  var el = {
    current : needle
  };
  var prop = {
    current : needle
  };
  var source = {
    current : needle
  };
  var res = {
    current : 0
  };
  var self = exports.ReactCurrentDispatcher;
  var event = exports.ReactCurrentBatchConfig;
  /** @type {number} */
  var lastValue = 0;
  /** @type {null} */
  var root = null;
  /** @type {null} */
  var element = null;
  /** @type {null} */
  var node = null;
  /** @type {null} */
  var head = null;
  /** @type {null} */
  var tail = null;
  /** @type {null} */
  var t1 = null;
  /** @type {number} */
  var bestValue = 0;
  /** @type {null} */
  var that = null;
  /** @type {number} */
  var effectTag = 0;
  /** @type {boolean} */
  var ua = false;
  /** @type {null} */
  var _self = null;
  /** @type {number} */
  var fa = 0;
  var to = {
    /** @type {function (Function, Object): ?} */
    readContext : each,
    /** @type {function (): ?} */
    useCallback : getAll,
    /** @type {function (): ?} */
    useContext : getAll,
    /** @type {function (): ?} */
    useEffect : getAll,
    /** @type {function (): ?} */
    useImperativeHandle : getAll,
    /** @type {function (): ?} */
    useLayoutEffect : getAll,
    /** @type {function (): ?} */
    useMemo : getAll,
    /** @type {function (): ?} */
    useReducer : getAll,
    /** @type {function (): ?} */
    useRef : getAll,
    /** @type {function (): ?} */
    useState : getAll,
    /** @type {function (): ?} */
    useDebugValue : getAll,
    /** @type {function (): ?} */
    useResponder : getAll,
    /** @type {function (): ?} */
    useDeferredValue : getAll,
    /** @type {function (): ?} */
    useTransition : getAll
  };
  var pageX = {
    /** @type {function (Function, Object): ?} */
    readContext : each,
    /** @type {function (Function, ?): ?} */
    useCallback : matchObject,
    /** @type {function (Function, Object): ?} */
    useContext : each,
    /** @type {function (Function, Object): ?} */
    useEffect : notEqual,
    /**
     * @param {Function} object
     * @param {Object} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {?}
     */
    useImperativeHandle : function(object, deepDataAndEvents, dataAndEvents) {
      return dataAndEvents = null != dataAndEvents ? dataAndEvents.concat([object]) : null, createDom(4, 36, runTest.bind(null, deepDataAndEvents, object), dataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useLayoutEffect : function(expectation, deepDataAndEvents) {
      return createDom(4, 36, expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} object
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    useMemo : function(object, deepDataAndEvents) {
      var vlq = toVLQSigned();
      return deepDataAndEvents = void 0 === deepDataAndEvents ? null : deepDataAndEvents, object = object(), vlq.memoizedState = [object, deepDataAndEvents], object;
    },
    /**
     * @param {Function} object
     * @param {Object} deepDataAndEvents
     * @param {string} dataAndEvents
     * @return {?}
     */
    useReducer : function(object, deepDataAndEvents, dataAndEvents) {
      var item = toVLQSigned();
      return deepDataAndEvents = void 0 !== dataAndEvents ? dataAndEvents(deepDataAndEvents) : deepDataAndEvents, item.memoizedState = item.baseState = deepDataAndEvents, object = (object = item.queue = {
        last : null,
        dispatch : null,
        /** @type {Function} */
        lastRenderedReducer : object,
        lastRenderedState : deepDataAndEvents
      }).dispatch = initialize.bind(null, root, object), [item.memoizedState, object];
    },
    /**
     * @param {Function} expectation
     * @return {?}
     */
    useRef : function(expectation) {
      return expectation = {
        /** @type {Function} */
        current : expectation
      }, toVLQSigned().memoizedState = expectation;
    },
    /** @type {function (Function): ?} */
    useState : compare,
    /** @type {function (): undefined} */
    useDebugValue : useDebugValue,
    /** @type {function (Function, Object): ?} */
    useResponder : wasComparison,
    /**
     * @param {Function} expectation
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    useDeferredValue : function(expectation, deepDataAndEvents) {
      var args = compare(expectation);
      var pageY = args[0];
      var parent = args[1];
      return notEqual(function() {
        table.unstable_next(function() {
          var originalType = event.suspense;
          event.suspense = void 0 === deepDataAndEvents ? null : deepDataAndEvents;
          try {
            parent(expectation);
          } finally {
            event.suspense = originalType;
          }
        });
      }, [expectation, deepDataAndEvents]), pageY;
    },
    /**
     * @param {Function} object
     * @return {?}
     */
    useTransition : function(object) {
      var args = compare(false);
      var pageY = args[0];
      var parent = args[1];
      return[matchObject(function($sanitize) {
        parent(true);
        table.unstable_next(function() {
          var originalType = event.suspense;
          event.suspense = void 0 === object ? null : object;
          try {
            parent(false);
            $sanitize();
          } finally {
            event.suspense = originalType;
          }
        });
      }, [object, pageY]), pageY];
    }
  };
  var current = {
    /** @type {function (Function, Object): ?} */
    readContext : each,
    /** @type {function (Function, Object): ?} */
    useCallback : multiple,
    /** @type {function (Function, Object): ?} */
    useContext : each,
    /** @type {function (Function, Object): ?} */
    useEffect : reportFailure,
    /**
     * @param {Function} object
     * @param {Object} deepDataAndEvents
     * @param {?} dataAndEvents
     * @return {?}
     */
    useImperativeHandle : function(object, deepDataAndEvents, dataAndEvents) {
      return dataAndEvents = null != dataAndEvents ? dataAndEvents.concat([object]) : null, sendMessage(4, 36, runTest.bind(null, deepDataAndEvents, object), dataAndEvents);
    },
    /**
     * @param {Function} expectation
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useLayoutEffect : function(expectation, deepDataAndEvents) {
      return sendMessage(4, 36, expectation, deepDataAndEvents);
    },
    /**
     * @param {Function} object
     * @param {Object} deepDataAndEvents
     * @return {?}
     */
    useMemo : function(object, deepDataAndEvents) {
      var patternObject = emit();
      deepDataAndEvents = void 0 === deepDataAndEvents ? null : deepDataAndEvents;
      var pattern = patternObject.memoizedState;
      return null !== pattern && (null !== deepDataAndEvents && containsMatch(deepDataAndEvents, pattern[1])) ? pattern[0] : (object = object(), patternObject.memoizedState = [object, deepDataAndEvents], object);
    },
    /** @type {function (Function): ?} */
    useReducer : remove,
    /**
     * @return {?}
     */
    useRef : function() {
      return emit().memoizedState;
    },
    /** @type {function (Function): ?} */
    useState : getEnumerableProperties,
    /** @type {function (): undefined} */
    useDebugValue : useDebugValue,
    /** @type {function (Function, Object): ?} */
    useResponder : wasComparison,
    /**
     * @param {Function} actual
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    useDeferredValue : function(actual, deepDataAndEvents) {
      var segmentMatch = getEnumerableProperties();
      var key = segmentMatch[0];
      var objEquiv = segmentMatch[1];
      return reportFailure(function() {
        table.unstable_next(function() {
          var originalType = event.suspense;
          event.suspense = void 0 === deepDataAndEvents ? null : deepDataAndEvents;
          try {
            objEquiv(actual);
          } finally {
            event.suspense = originalType;
          }
        });
      }, [actual, deepDataAndEvents]), key;
    },
    /**
     * @param {Function} object
     * @return {?}
     */
    useTransition : function(object) {
      var t = getEnumerableProperties();
      var val = t[0];
      var fragment = t[1];
      return[multiple(function($sanitize) {
        fragment(true);
        table.unstable_next(function() {
          var originalType = event.suspense;
          event.suspense = void 0 === object ? null : object;
          try {
            fragment(false);
            $sanitize();
          } finally {
            event.suspense = originalType;
          }
        });
      }, [object, val]), val];
    }
  };
  /** @type {null} */
  var o = null;
  /** @type {null} */
  var json = null;
  /** @type {boolean} */
  var origType = false;
  var store = exports.ReactCurrentOwner;
  /** @type {boolean} */
  var iframe = false;
  var isNode;
  var isList;
  var add;
  var forOwn;
  var compassResult = {
    dehydrated : null,
    retryTime : 0
  };
  /**
   * @param {Element} el
   * @param {?} obj
   * @return {undefined}
   */
  isNode = function(el, obj) {
    var options = obj.child;
    for (;null !== options;) {
      if (5 === options.tag || 6 === options.tag) {
        el.appendChild(options.stateNode);
      } else {
        if (4 !== options.tag && null !== options.child) {
          options.child.return = options;
          options = options.child;
          continue;
        }
      }
      if (options === obj) {
        break;
      }
      for (;null === options.sibling;) {
        if (null === options.return || options.return === obj) {
          return;
        }
        options = options.return;
      }
      options.sibling.return = options.return;
      options = options.sibling;
    }
  };
  /**
   * @return {undefined}
   */
  isList = function() {
  };
  /**
   * @param {Array} options
   * @param {?} handler
   * @param {Object} params
   * @param {Object} args
   * @param {(Object|string)} fn
   * @return {undefined}
   */
  add = function(options, handler, params, args, fn) {
    var data = options.memoizedProps;
    if (data !== args) {
      var name;
      var k;
      var obj = handler.stateNode;
      switch(value(el.current), options = null, params) {
        case "input":
          data = mixin(obj, data);
          args = mixin(obj, args);
          /** @type {Array} */
          options = [];
          break;
        case "option":
          data = trigger(obj, data);
          args = trigger(obj, args);
          /** @type {Array} */
          options = [];
          break;
        case "select":
          data = extend({}, data, {
            value : void 0
          });
          args = extend({}, args, {
            value : void 0
          });
          /** @type {Array} */
          options = [];
          break;
        case "textarea":
          data = fire(obj, data);
          args = fire(obj, args);
          /** @type {Array} */
          options = [];
          break;
        default:
          if ("function" != typeof data.onClick) {
            if ("function" == typeof args.onClick) {
              /** @type {function (): undefined} */
              obj.onclick = t;
            }
          }
        ;
      }
      for (name in forEach(params, args), params = null, data) {
        if (!args.hasOwnProperty(name) && (data.hasOwnProperty(name) && null != data[name])) {
          if ("style" === name) {
            for (k in obj = data[name]) {
              if (obj.hasOwnProperty(k)) {
                if (!params) {
                  params = {};
                }
                /** @type {string} */
                params[k] = "";
              }
            }
          } else {
            if ("dangerouslySetInnerHTML" !== name) {
              if ("children" !== name) {
                if ("suppressContentEditableWarning" !== name) {
                  if ("suppressHydrationWarning" !== name) {
                    if ("autoFocus" !== name) {
                      if (p.hasOwnProperty(name)) {
                        if (!options) {
                          /** @type {Array} */
                          options = [];
                        }
                      } else {
                        (options = options || []).push(name, null);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (name in args) {
        var r = args[name];
        if (obj = null != data ? data[name] : void 0, args.hasOwnProperty(name) && (r !== obj && (null != r || null != obj))) {
          if ("style" === name) {
            if (obj) {
              for (k in obj) {
                if (!!obj.hasOwnProperty(k)) {
                  if (!(r && r.hasOwnProperty(k))) {
                    if (!params) {
                      params = {};
                    }
                    /** @type {string} */
                    params[k] = "";
                  }
                }
              }
              for (k in r) {
                if (r.hasOwnProperty(k)) {
                  if (obj[k] !== r[k]) {
                    if (!params) {
                      params = {};
                    }
                    params[k] = r[k];
                  }
                }
              }
            } else {
              if (!params) {
                if (!options) {
                  /** @type {Array} */
                  options = [];
                }
                options.push(name, params);
              }
              params = r;
            }
          } else {
            if ("dangerouslySetInnerHTML" === name) {
              r = r ? r.__html : void 0;
              obj = obj ? obj.__html : void 0;
              if (null != r) {
                if (obj !== r) {
                  (options = options || []).push(name, "" + r);
                }
              }
            } else {
              if ("children" === name) {
                if (!(obj === r)) {
                  if (!("string" != typeof r && "number" != typeof r)) {
                    (options = options || []).push(name, "" + r);
                  }
                }
              } else {
                if ("suppressContentEditableWarning" !== name) {
                  if ("suppressHydrationWarning" !== name) {
                    if (p.hasOwnProperty(name)) {
                      if (null != r) {
                        createElement(fn, name);
                      }
                      if (!options) {
                        if (!(obj === r)) {
                          /** @type {Array} */
                          options = [];
                        }
                      }
                    } else {
                      (options = options || []).push(name, r);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (params) {
        (options = options || []).push("style", params);
      }
      /** @type {Array} */
      fn = options;
      if (handler.updateQueue = fn) {
        isString(handler);
      }
    }
  };
  /**
   * @param {?} collection
   * @param {?} object
   * @param {?} callback
   * @param {?} obj
   * @return {undefined}
   */
  forOwn = function(collection, object, callback, obj) {
    if (callback !== obj) {
      isString(object);
    }
  };
  var Buffer = "function" == typeof WeakSet ? WeakSet : Set;
  var BB = "function" == typeof WeakMap ? WeakMap : Map;
  var render;
  /** @type {function (*): number} */
  var ceil = Math.ceil;
  var settings = exports.ReactCurrentDispatcher;
  var user = exports.ReactCurrentOwner;
  /** @type {number} */
  var lineStart = 0;
  /** @type {number} */
  var pos = 8;
  /** @type {number} */
  var YEARS = 16;
  /** @type {number} */
  var MONTHS = 32;
  /** @type {number} */
  var check_unmarked = 0;
  /** @type {number} */
  var currentType = 1;
  /** @type {number} */
  var Ul = 2;
  /** @type {number} */
  var bbGrid_subgrid_control = 3;
  /** @type {number} */
  var number = 4;
  /** @type {number} */
  var selector = 5;
  /** @type {number} */
  var j = lineStart;
  /** @type {null} */
  var mySecret = null;
  /** @type {null} */
  var data = null;
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var className = check_unmarked;
  /** @type {null} */
  var ie = null;
  /** @type {number} */
  var down = 1073741823;
  /** @type {number} */
  var right = 1073741823;
  /** @type {null} */
  var firingStart = null;
  /** @type {number} */
  var offset = 0;
  /** @type {boolean} */
  var es = false;
  /** @type {number} */
  var mean_height = 0;
  /** @type {number} */
  var heightstep = 500;
  /** @type {null} */
  var params = null;
  /** @type {boolean} */
  var is = false;
  /** @type {null} */
  var s = null;
  /** @type {null} */
  var callbacks = null;
  /** @type {boolean} */
  var ls = false;
  /** @type {null} */
  var tree = null;
  /** @type {number} */
  var dict = 90;
  /** @type {null} */
  var collection = null;
  /** @type {number} */
  var fs = 0;
  /** @type {null} */
  var serverVersionsStream = null;
  /** @type {number} */
  var ps = 0;
  /**
   * @param {Object} option
   * @param {Object} options
   * @param {Object} value
   * @return {?}
   */
  render = function(option, options, value) {
    var item = options.expirationTime;
    if (null !== option) {
      var type = options.pendingProps;
      if (option.memoizedProps !== type || b.current) {
        /** @type {boolean} */
        iframe = true;
      } else {
        if (item < value) {
          switch(iframe = false, options.tag) {
            case 3:
              copy(options);
              templateFunc();
              break;
            case 5:
              if (is_or_contains(options), 4 & options.mode && (1 !== value && type.hidden)) {
                return options.expirationTime = options.childExpirationTime = 1, null;
              }
              break;
            case 1:
              if (encodeURIComponent(options.type)) {
                _isFunction(options);
              }
              break;
            case 4:
              handleEvent(options, options.stateNode.containerInfo);
              break;
            case 10:
              put(options, options.memoizedProps.value);
              break;
            case 13:
              if (null !== options.memoizedState) {
                return 0 !== (item = options.child.childExpirationTime) && item >= value ? toString(option, options, value) : (contains(res, 1 & res.current), null !== (options = request(option, options, value)) ? options.sibling : null);
              }
              contains(res, 1 & res.current);
              break;
            case 19:
              if (item = options.childExpirationTime >= value, 0 != (64 & option.effectTag)) {
                if (item) {
                  return parse(option, options, value);
                }
                options.effectTag |= 64;
              }
              if (null !== (type = options.memoizedState) && (type.rendering = null, type.tail = null), contains(res, res.current), !item) {
                return null;
              }
            ;
          }
          return request(option, options, value);
        }
        /** @type {boolean} */
        iframe = false;
      }
    } else {
      /** @type {boolean} */
      iframe = false;
    }
    switch(options.expirationTime = 0, options.tag) {
      case 2:
        if (item = options.type, null !== option && (option.alternate = null, options.alternate = null, options.effectTag |= 2), option = options.pendingProps, type = call(options, seen.current), ajax(options, value), type = log(null, options, item, option, type, value), options.effectTag |= 1, "object" == typeof type && (null !== type && ("function" == typeof type.render && void 0 === type.$$typeof))) {
          if (options.tag = 1, Status(), encodeURIComponent(item)) {
            /** @type {boolean} */
            var name = true;
            _isFunction(options);
          } else {
            /** @type {boolean} */
            name = false;
          }
          options.memoizedState = null !== type.state && void 0 !== type.state ? type.state : null;
          var parent = item.getDerivedStateFromProps;
          if ("function" == typeof parent) {
            tmpl(options, item, parent, option);
          }
          type.updater = target;
          options.stateNode = type;
          /** @type {Object} */
          type._reactInternalFiber = options;
          isArray(options, item, option, value);
          options = animate(null, options, item, true, name, value);
        } else {
          /** @type {number} */
          options.tag = 0;
          jQuery(null, options, type, value);
          options = options.child;
        }
        return options;
      case 16:
        if (type = options.elementType, null !== option && (option.alternate = null, options.alternate = null, options.effectTag |= 2), option = options.pendingProps, function(self) {
          if (-1 === self._status) {
            /** @type {number} */
            self._status = 0;
            var next = self._ctor;
            next = next();
            self._result = next;
            next.then(function(val) {
              if (0 === self._status) {
                val = val.default;
                /** @type {number} */
                self._status = 1;
                /** @type {Object} */
                self._result = val;
              }
            }, function(r) {
              if (0 === self._status) {
                /** @type {number} */
                self._status = 2;
                self._result = r;
              }
            });
          }
        }(type), 1 !== type._status) {
          throw type._result;
        }
        switch(type = type._result, options.type = type, name = options.tag = function(path) {
          if ("function" == typeof path) {
            return join(path) ? 1 : 0;
          }
          if (null != path) {
            if ((path = path.$$typeof) === transitionEnd) {
              return 11;
            }
            if (path === pause) {
              return 14;
            }
          }
          return 2;
        }(type), option = bind(type, option), name) {
          case 0:
            options = populate(null, options, type, option, value);
            break;
          case 1:
            options = fetch(null, options, type, option, value);
            break;
          case 11:
            options = compile(null, options, type, option, value);
            break;
          case 14:
            options = go(null, options, type, bind(type.type, option), item, value);
            break;
          default:
            throw Error(callback(306, type, ""));;
        }
        return options;
      case 0:
        return item = options.type, type = options.pendingProps, populate(option, options, item, type = options.elementType === item ? type : bind(item, type), value);
      case 1:
        return item = options.type, type = options.pendingProps, fetch(option, options, item, type = options.elementType === item ? type : bind(item, type), value);
      case 3:
        if (copy(options), null === (item = options.updateQueue)) {
          throw Error(callback(282));
        }
        if (type = null !== (type = options.memoizedState) ? type.element : null, indexOf(options, item, options.pendingProps, null, value), (item = options.memoizedState.element) === type) {
          templateFunc();
          options = request(option, options, value);
        } else {
          if ((type = options.stateNode.hydrate) && (json = nextElement(options.stateNode.containerInfo.firstChild), o = options, type = origType = true), type) {
            value = sprintf(options, null, item, value);
            /** @type {Object} */
            options.child = value;
            for (;value;) {
              /** @type {number} */
              value.effectTag = -3 & value.effectTag | 1024;
              value = value.sibling;
            }
          } else {
            jQuery(option, options, item, value);
            templateFunc();
          }
          options = options.child;
        }
        return options;
      case 5:
        return is_or_contains(options), null === option && inherit(options), item = options.type, type = options.pendingProps, name = null !== option ? option.memoizedProps : null, parent = type.children, get(item, type) ? parent = null : null !== name && (get(item, name) && (options.effectTag |= 16)), loop(option, options), 4 & options.mode && (1 !== value && type.hidden) ? (options.expirationTime = options.childExpirationTime = 1, options = null) : (jQuery(option, options, parent, value), options =
        options.child), options;
      case 6:
        return null === option && inherit(options), null;
      case 13:
        return toString(option, options, value);
      case 4:
        return handleEvent(options, options.stateNode.containerInfo), item = options.pendingProps, null === option ? options.child = pick(options, null, item, value) : jQuery(option, options, item, value), options.child;
      case 11:
        return item = options.type, type = options.pendingProps, compile(option, options, item, type = options.elementType === item ? type : bind(item, type), value);
      case 7:
        return jQuery(option, options, options.pendingProps, value), options.child;
      case 8:
      ;
      case 12:
        return jQuery(option, options, options.pendingProps.children, value), options.child;
      case 10:
        e: {
          if (item = options.type._context, type = options.pendingProps, parent = options.memoizedProps, put(options, name = type.value), null !== parent) {
            var node = parent.value;
            if (0 === (name = assertEquals(node, name) ? 0 : 0 | ("function" == typeof item._calculateChangedBits ? item._calculateChangedBits(node, name) : 1073741823))) {
              if (parent.children === type.children && !b.current) {
                options = request(option, options, value);
                break e;
              }
            } else {
              if (null !== (node = options.child)) {
                /** @type {Object} */
                node.return = options;
              }
              for (;null !== node;) {
                var root = node.dependencies;
                if (null !== root) {
                  parent = node.child;
                  var child = root.firstContext;
                  for (;null !== child;) {
                    if (child.context === item && 0 != (child.observedBits & name)) {
                      if (1 === node.tag) {
                        /** @type {number} */
                        (child = split(value, null)).tag = 2;
                        traverseNode(node, child);
                      }
                      if (node.expirationTime < value) {
                        /** @type {Object} */
                        node.expirationTime = value;
                      }
                      if (null !== (child = node.alternate)) {
                        if (child.expirationTime < value) {
                          /** @type {Object} */
                          child.expirationTime = value;
                        }
                      }
                      hide(node.return, value);
                      if (root.expirationTime < value) {
                        /** @type {Object} */
                        root.expirationTime = value;
                      }
                      break;
                    }
                    child = child.next;
                  }
                } else {
                  parent = 10 === node.tag && node.type === options.type ? null : node.child;
                }
                if (null !== parent) {
                  parent.return = node;
                } else {
                  parent = node;
                  for (;null !== parent;) {
                    if (parent === options) {
                      /** @type {null} */
                      parent = null;
                      break;
                    }
                    if (null !== (node = parent.sibling)) {
                      node.return = parent.return;
                      parent = node;
                      break;
                    }
                    parent = parent.return;
                  }
                }
                node = parent;
              }
            }
          }
          jQuery(option, options, type.children, value);
          options = options.child;
        }
        return options;
      case 9:
        return type = options.type, item = (name = options.pendingProps).children, ajax(options, value), item = item(type = each(type, name.unstable_observedBits)), options.effectTag |= 1, jQuery(option, options, item, value), options.child;
      case 14:
        return name = bind(type = options.type, options.pendingProps), go(option, options, type, name = bind(type.type, name), item, value);
      case 15:
        return makeRequest(option, options, options.type, options.pendingProps, item, value);
      case 17:
        return item = options.type, type = options.pendingProps, type = options.elementType === item ? type : bind(item, type), null !== option && (option.alternate = null, options.alternate = null, options.effectTag |= 2), options.tag = 1, encodeURIComponent(item) ? (option = true, _isFunction(options)) : option = false, ajax(options, value), test(options, item, type), isArray(options, item, type, value), animate(null, options, item, true, option, value);
      case 19:
        return parse(option, options, value);
    }
    throw Error(callback(156, options.tag));
  };
  /** @type {null} */
  var back = null;
  /** @type {null} */
  var layout = null;
  /**
   * @param {string} expectedHashCode
   * @param {?} num
   * @return {undefined}
   */
  ViewModel.prototype.render = function(expectedHashCode, num) {
    publish(expectedHashCode, this._internalRoot, null, void 0 === num ? null : num);
  };
  /**
   * @param {?} value
   * @return {undefined}
   */
  ViewModel.prototype.unmount = function(value) {
    var pdataCur = this._internalRoot;
    var computed = void 0 === value ? null : value;
    var obj = pdataCur.containerInfo;
    publish(null, pdataCur, null, function() {
      /** @type {null} */
      obj[last] = null;
      if (null !== computed) {
        computed();
      }
    });
  };
  /**
   * @param {Object} node
   * @return {undefined}
   */
  empty = function(node) {
    if (13 === node.tag) {
      var name = keys(decodeURIComponent(), 150, 100);
      getter(node, name);
      index(node, name);
    }
  };
  /**
   * @param {Object} s
   * @return {undefined}
   */
  trim = function(s) {
    if (13 === s.tag) {
      decodeURIComponent();
      /** @type {number} */
      var name = Zi++;
      getter(s, name);
      index(s, name);
    }
  };
  /**
   * @param {Object} node
   * @return {undefined}
   */
  Element = function(node) {
    if (13 === node.tag) {
      var result = decodeURIComponent();
      getter(node, result = map(result, node, null));
      index(node, result);
    }
  };
  /**
   * @param {Object} options
   * @param {Object} t
   * @param {Object} node
   * @return {undefined}
   */
  set = function(options, t, node) {
    switch(t) {
      case "input":
        if (check(options, node), t = node.name, "radio" === node.type && null != t) {
          /** @type {Object} */
          node = options;
          for (;node.parentNode;) {
            node = node.parentNode;
          }
          node = node.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]');
          /** @type {number} */
          t = 0;
          for (;t < node.length;t++) {
            var data = node[t];
            if (data !== options && data.form === options.form) {
              var token = mix(data);
              if (!token) {
                throw Error(callback(90));
              }
              click(data);
              check(data, token);
            }
          }
        }
        break;
      case "textarea":
        expect(options, node);
        break;
      case "select":
        if (null != (t = node.value)) {
          build(options, !!node.multiple, t, false);
        }
      ;
    }
  };
  /** @type {function (Function, Object): ?} */
  assert = focus;
  /**
   * @param {Function} el
   * @param {?} fn
   * @param {?} callback
   * @param {?} event
   * @return {?}
   */
  attach = function(el, fn, callback, event) {
    var p = j;
    j |= 4;
    try {
      return exists(98, el.bind(null, fn, callback, event));
    } finally {
      if ((j = p) === lineStart) {
        text();
      }
    }
  };
  /**
   * @return {undefined}
   */
  removeListener = function() {
    if ((j & (1 | YEARS | MONTHS)) === lineStart) {
      (function() {
        if (null !== collection) {
          var iterable = collection;
          /** @type {null} */
          collection = null;
          iterable.forEach(function(deepDataAndEvents, message) {
            _send(message, deepDataAndEvents);
            indent(message);
          });
          text();
        }
      })();
      splice();
    }
  };
  /**
   * @param {Function} fn
   * @param {Object} path
   * @return {?}
   */
  writeFile = function(fn, path) {
    var p = j;
    j |= 2;
    try {
      return fn(path);
    } finally {
      if ((j = p) === lineStart) {
        text();
      }
    }
  };
  var oldconfig;
  var matcher;
  var gratStyle = {
    /** @type {function (?, Node): ?} */
    createPortal : factory,
    /**
     * @param {Object} result
     * @return {?}
     */
    findDOMNode : function(result) {
      if (null == result) {
        return null;
      }
      if (1 === result.nodeType) {
        return result;
      }
      var value = result._reactInternalFiber;
      if (void 0 === value) {
        if ("function" == typeof result.render) {
          throw Error(callback(188));
        }
        throw Error(callback(268, Object.keys(result)));
      }
      return result = null === (result = step(value)) ? null : result.stateNode;
    },
    /**
     * @param {string} expectedHashCode
     * @param {?} num
     * @param {?} opt_attributes
     * @return {?}
     */
    hydrate : function(expectedHashCode, num, opt_attributes) {
      if (!isUndefined(num)) {
        throw Error(callback(200));
      }
      return template(null, expectedHashCode, num, true, opt_attributes);
    },
    /**
     * @param {string} expectedHashCode
     * @param {?} num
     * @param {?} opt_attributes
     * @return {?}
     */
    render : function(expectedHashCode, num, opt_attributes) {
      if (!isUndefined(num)) {
        throw Error(callback(200));
      }
      return template(null, expectedHashCode, num, false, opt_attributes);
    },
    /**
     * @param {Object} recurring
     * @param {string} data
     * @param {Node} obj
     * @param {Function} opt_attributes
     * @return {?}
     */
    unstable_renderSubtreeIntoContainer : function(recurring, data, obj, opt_attributes) {
      if (!isUndefined(obj)) {
        throw Error(callback(200));
      }
      if (null == recurring || void 0 === recurring._reactInternalFiber) {
        throw Error(callback(38));
      }
      return template(recurring, data, obj, false, opt_attributes);
    },
    /**
     * @param {Node} obj
     * @return {?}
     */
    unmountComponentAtNode : function(obj) {
      if (!isUndefined(obj)) {
        throw Error(callback(40));
      }
      return!!obj._reactRootContainer && (read(function() {
        template(null, null, obj, false, function() {
          /** @type {null} */
          obj._reactRootContainer = null;
          /** @type {null} */
          obj[last] = null;
        });
      }), true);
    },
    /**
     * @return {?}
     */
    unstable_createPortal : function() {
      return factory.apply(void 0, arguments);
    },
    /** @type {function (Function, Object): ?} */
    unstable_batchedUpdates : focus,
    /**
     * @param {Function} handle
     * @param {?} data
     * @return {?}
     */
    flushSync : function(handle, data) {
      if ((j & (YEARS | MONTHS)) !== lineStart) {
        throw Error(callback(187));
      }
      var p = j;
      j |= 1;
      try {
        return exists(99, handle.bind(null, data));
      } finally {
        j = p;
        text();
      }
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED : {
      Events : [eval, createNode, mix, EventPluginRegistry.injectEventPluginsByName, storage, addEvent, function(initial) {
        f(initial, n);
      }, configure, type, next, addEventListener, splice, {
        current : false
      }]
    }
  };
  /** @type {function (Object): ?} */
  matcher = (oldconfig = {
    /** @type {function (Object): ?} */
    findFiberByHostInstance : findParent,
    bundleType : 0,
    version : "16.12.0",
    rendererPackageName : "react-dom"
  }).findFiberByHostInstance;
  (function(element) {
    if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      return false;
    }
    var input = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (input.isDisabled || !input.supportsFiber) {
      return true;
    }
    try {
      var tabIndex = input.inject(element);
      /**
       * @param {Object} index
       * @return {undefined}
       */
      back = function(index) {
        try {
          input.onCommitFiberRoot(tabIndex, index, void 0, 64 == (64 & index.current.effectTag));
        } catch (e) {
        }
      };
      /**
       * @param {Object} type
       * @return {undefined}
       */
      layout = function(type) {
        try {
          input.onCommitFiberUnmount(tabIndex, type);
        } catch (e) {
        }
      };
    } catch (e) {
    }
  })(extend({}, oldconfig, {
    overrideHookState : null,
    overrideProps : null,
    setSuspenseHandler : null,
    scheduleUpdate : null,
    currentDispatcherRef : exports.ReactCurrentDispatcher,
    /**
     * @param {Error} cssValue
     * @return {?}
     */
    findHostInstanceByFiber : function(cssValue) {
      return null === (cssValue = step(cssValue)) ? null : cssValue.stateNode;
    },
    /**
     * @param {boolean} elem
     * @return {?}
     */
    findFiberByHostInstance : function(elem) {
      return matcher ? matcher(elem) : null;
    },
    findHostInstancesForRefresh : null,
    scheduleRefresh : null,
    scheduleRoot : null,
    setRefreshHandler : null,
    getCurrentFiber : null
  }));
  var templates = {
    default : gratStyle
  };
  var opts = templates && gratStyle || templates;
  mod.exports = opts.default || opts;
}, function(module, dataAndEvents, factory) {
  module.exports = factory(23);
}, function(dataAndEvents, ctx, deepDataAndEvents) {
  /**
   * @param {Object} data
   * @param {(Object|number)} d
   * @return {undefined}
   */
  function validate(data, d) {
    var k = data.length;
    data.push(d);
    e: for (;;) {
      /** @type {number} */
      var key = Math.floor((k - 1) / 2);
      var r = data[key];
      if (!(void 0 !== r && 0 < cb(r, d))) {
        break e;
      }
      /** @type {(Object|number)} */
      data[key] = d;
      data[k] = r;
      /** @type {number} */
      k = key;
    }
  }
  /**
   * @param {?} message
   * @return {?}
   */
  function parseJSON(message) {
    return void 0 === (message = message[0]) ? null : message;
  }
  /**
   * @param {Array} data
   * @return {?}
   */
  function resolve(data) {
    var text = data[0];
    if (void 0 !== text) {
      var r = data.pop();
      if (r !== text) {
        data[0] = r;
        /** @type {number} */
        var i = 0;
        var iLen = data.length;
        e: for (;i < iLen;) {
          /** @type {number} */
          var type = 2 * (i + 1) - 1;
          var d = data[type];
          /** @type {number} */
          var key = type + 1;
          var value = data[key];
          if (void 0 !== d && 0 > cb(d, r)) {
            if (void 0 !== value && 0 > cb(value, d)) {
              data[i] = value;
              data[key] = r;
              /** @type {number} */
              i = key;
            } else {
              data[i] = d;
              data[type] = r;
              /** @type {number} */
              i = type;
            }
          } else {
            if (!(void 0 !== value && 0 > cb(value, r))) {
              break e;
            }
            data[i] = value;
            data[key] = r;
            /** @type {number} */
            i = key;
          }
        }
      }
      return text;
    }
    return null;
  }
  /**
   * @param {?} a
   * @param {(Object|number)} b
   * @return {?}
   */
  function cb(a, b) {
    /** @type {number} */
    var code = a.sortIndex - b.sortIndex;
    return 0 !== code ? code : a.id - b.id;
  }
  /**
   * @param {?} logger
   * @return {undefined}
   */
  function init(logger) {
    var data = parseJSON(xhr);
    for (;null !== data;) {
      if (null === data.callback) {
        resolve(xhr);
      } else {
        if (!(data.startTime <= logger)) {
          break;
        }
        resolve(xhr);
        data.sortIndex = data.expirationTime;
        validate(json, data);
      }
      data = parseJSON(xhr);
    }
  }
  /**
   * @param {?} root
   * @return {undefined}
   */
  function onSuccess(root) {
    if (err = false, init(root), !doubleQuotedValue) {
      if (null !== parseJSON(json)) {
        /** @type {boolean} */
        doubleQuotedValue = true;
        next(render);
      } else {
        var data = parseJSON(xhr);
        if (null !== data) {
          set(onSuccess, data.startTime - root);
        }
      }
    }
  }
  /**
   * @param {boolean} rows
   * @param {?} root
   * @return {?}
   */
  function render(rows, root) {
    /** @type {boolean} */
    doubleQuotedValue = false;
    if (err) {
      /** @type {boolean} */
      err = false;
      done();
    }
    /** @type {boolean} */
    singleQoutedValue = true;
    var next = node;
    try {
      init(root);
      data = parseJSON(json);
      for (;null !== data && (!(data.expirationTime > root) || rows && !tryIt());) {
        var c = data.callback;
        if (null !== c) {
          /** @type {null} */
          data.callback = null;
          node = data.priorityLevel;
          var options = c(data.expirationTime <= root);
          root = ctx.unstable_now();
          if ("function" == typeof options) {
            /** @type {Function} */
            data.callback = options;
          } else {
            if (data === parseJSON(json)) {
              resolve(json);
            }
          }
          init(root);
        } else {
          resolve(json);
        }
        data = parseJSON(json);
      }
      if (null !== data) {
        /** @type {boolean} */
        var ee = true
      } else {
        var file = parseJSON(xhr);
        if (null !== file) {
          set(onSuccess, file.startTime - root);
        }
        /** @type {boolean} */
        ee = false;
      }
      return ee;
    } finally {
      /** @type {null} */
      data = null;
      node = next;
      /** @type {boolean} */
      singleQoutedValue = false;
    }
  }
  /**
   * @param {(Object|number)} value
   * @return {?}
   */
  function scanPunctuator(value) {
    switch(value) {
      case 1:
        return-1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1E4;
      default:
        return 5E3;
    }
  }
  var next;
  var set;
  var done;
  var tryIt;
  var destination;
  if (Object.defineProperty(ctx, "__esModule", {
    value : true
  }), "undefined" == typeof window || "function" != typeof MessageChannel) {
    /** @type {null} */
    var dataAttr = null;
    /** @type {null} */
    var timer = null;
    /**
     * @return {undefined}
     */
    var later = function() {
      if (null !== dataAttr) {
        try {
          var camelKey = ctx.unstable_now();
          dataAttr(true, camelKey);
          /** @type {null} */
          dataAttr = null;
        } catch (e) {
          throw setTimeout(later, 0), e;
        }
      }
    };
    /** @type {number} */
    var f = Date.now();
    /**
     * @return {?}
     */
    ctx.unstable_now = function() {
      return Date.now() - f;
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    next = function(event) {
      if (null !== dataAttr) {
        setTimeout(next, 0, event);
      } else {
        dataAttr = event;
        setTimeout(later, 0);
      }
    };
    /**
     * @param {Function} done
     * @param {number} ms
     * @return {undefined}
     */
    set = function(done, ms) {
      /** @type {number} */
      timer = setTimeout(done, ms);
    };
    /**
     * @return {undefined}
     */
    done = function() {
      clearTimeout(timer);
    };
    /**
     * @return {?}
     */
    tryIt = function() {
      return false;
    };
    /** @type {function (): undefined} */
    destination = ctx.unstable_forceFrameRate = function() {
    };
  } else {
    /** @type {(Performance|null)} */
    var performance = window.performance;
    var S = window.Date;
    /** @type {function (this:Window, (Function|null|string), number, ...[*]): number} */
    var wto = window.setTimeout;
    /** @type {function (this:Window, (null|number|undefined)): ?} */
    var clear = window.clearTimeout;
    if ("undefined" != typeof console) {
      /** @type {function (this:Window, number): ?} */
      var cancelAnimationFrame = window.cancelAnimationFrame;
      if ("function" != typeof window.requestAnimationFrame) {
        console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if ("function" != typeof cancelAnimationFrame) {
        console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
    }
    if ("object" == typeof performance && "function" == typeof performance.now) {
      /**
       * @return {?}
       */
      ctx.unstable_now = function() {
        return performance.now();
      };
    } else {
      var v = S.now();
      /**
       * @return {?}
       */
      ctx.unstable_now = function() {
        return S.now() - v;
      };
    }
    /** @type {boolean} */
    var y = false;
    /** @type {null} */
    var callback = null;
    /** @type {number} */
    var id = -1;
    /** @type {number} */
    var z = 5;
    /** @type {number} */
    var path = 0;
    /**
     * @return {?}
     */
    tryIt = function() {
      return ctx.unstable_now() >= path;
    };
    /**
     * @return {undefined}
     */
    destination = function() {
    };
    /**
     * @param {number} ns
     * @return {undefined}
     */
    ctx.unstable_forceFrameRate = function(ns) {
      if (0 > ns || 125 < ns) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
      } else {
        /** @type {number} */
        z = 0 < ns ? Math.floor(1E3 / ns) : 5;
      }
    };
    /** @type {MessageChannel} */
    var channel = new MessageChannel;
    /** @type {MessagePort} */
    var port = channel.port2;
    /**
     * @return {undefined}
     */
    channel.port1.onmessage = function() {
      if (null !== callback) {
        var feed = ctx.unstable_now();
        path = feed + z;
        try {
          if (callback(true, feed)) {
            port.postMessage(null);
          } else {
            /** @type {boolean} */
            y = false;
            /** @type {null} */
            callback = null;
          }
        } catch (e) {
          throw port.postMessage(null), e;
        }
      } else {
        /** @type {boolean} */
        y = false;
      }
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    next = function(event) {
      callback = event;
      if (!y) {
        /** @type {boolean} */
        y = true;
        port.postMessage(null);
      }
    };
    /**
     * @param {Function} success
     * @param {number} delay
     * @return {undefined}
     */
    set = function(success, delay) {
      /** @type {number} */
      id = wto(function() {
        success(ctx.unstable_now());
      }, delay);
    };
    /**
     * @return {undefined}
     */
    done = function() {
      clear(id);
      /** @type {number} */
      id = -1;
    };
  }
  /** @type {Array} */
  var json = [];
  /** @type {Array} */
  var xhr = [];
  /** @type {number} */
  var equiv_class_id = 1;
  /** @type {null} */
  var data = null;
  /** @type {number} */
  var node = 3;
  /** @type {boolean} */
  var singleQoutedValue = false;
  /** @type {boolean} */
  var doubleQuotedValue = false;
  /** @type {boolean} */
  var err = false;
  /** @type {function (): undefined} */
  var result = destination;
  /** @type {number} */
  ctx.unstable_ImmediatePriority = 1;
  /** @type {number} */
  ctx.unstable_UserBlockingPriority = 2;
  /** @type {number} */
  ctx.unstable_NormalPriority = 3;
  /** @type {number} */
  ctx.unstable_IdlePriority = 5;
  /** @type {number} */
  ctx.unstable_LowPriority = 4;
  /**
   * @param {number} view
   * @param {Function} actual
   * @return {?}
   */
  ctx.unstable_runWithPriority = function(view, actual) {
    switch(view) {
      case 1:
      ;
      case 2:
      ;
      case 3:
      ;
      case 4:
      ;
      case 5:
        break;
      default:
        /** @type {number} */
        view = 3;
    }
    var next = node;
    /** @type {number} */
    node = view;
    try {
      return actual();
    } finally {
      node = next;
    }
  };
  /**
   * @param {Function} $sanitize
   * @return {?}
   */
  ctx.unstable_next = function($sanitize) {
    switch(node) {
      case 1:
      ;
      case 2:
      ;
      case 3:
        /** @type {number} */
        var parentNode = 3;
        break;
      default:
        parentNode = node;
    }
    var next = node;
    node = parentNode;
    try {
      return $sanitize();
    } finally {
      node = next;
    }
  };
  /**
   * @param {(Object|number)} data
   * @param {Function} callback
   * @param {Object} options
   * @return {?}
   */
  ctx.unstable_scheduleCallback = function(data, callback, options) {
    var start = ctx.unstable_now();
    if ("object" == typeof options && null !== options) {
      var end = options.delay;
      end = "number" == typeof end && 0 < end ? start + end : start;
      options = "number" == typeof options.timeout ? options.timeout : scanPunctuator(data);
    } else {
      options = scanPunctuator(data);
      end = start;
    }
    return data = {
      id : equiv_class_id++,
      /** @type {Function} */
      callback : callback,
      priorityLevel : data,
      startTime : end,
      expirationTime : options = end + options,
      sortIndex : -1
    }, end > start ? (data.sortIndex = end, validate(xhr, data), null === parseJSON(json) && (data === parseJSON(xhr) && (err ? done() : err = true, set(onSuccess, end - start)))) : (data.sortIndex = options, validate(json, data), doubleQuotedValue || (singleQoutedValue || (doubleQuotedValue = true, next(render)))), data;
  };
  /**
   * @param {?} spy
   * @return {undefined}
   */
  ctx.unstable_cancelCallback = function(spy) {
    /** @type {null} */
    spy.callback = null;
  };
  /**
   * @param {Function} matcherFunction
   * @return {?}
   */
  ctx.unstable_wrapCallback = function(matcherFunction) {
    var next = node;
    return function() {
      var n = node;
      node = next;
      try {
        return matcherFunction.apply(this, arguments);
      } finally {
        node = n;
      }
    };
  };
  /**
   * @return {?}
   */
  ctx.unstable_getCurrentPriorityLevel = function() {
    return node;
  };
  /**
   * @return {?}
   */
  ctx.unstable_shouldYield = function() {
    var root = ctx.unstable_now();
    init(root);
    var event = parseJSON(json);
    return event !== data && (null !== data && (null !== event && (null !== event.callback && (event.startTime <= root && event.expirationTime < data.expirationTime)))) || tryIt();
  };
  /** @type {function (): undefined} */
  ctx.unstable_requestPaint = result;
  /**
   * @return {undefined}
   */
  ctx.unstable_continueExecution = function() {
    if (!doubleQuotedValue) {
      if (!singleQoutedValue) {
        /** @type {boolean} */
        doubleQuotedValue = true;
        next(render);
      }
    }
  };
  /**
   * @return {undefined}
   */
  ctx.unstable_pauseExecution = function() {
  };
  /**
   * @return {?}
   */
  ctx.unstable_getFirstCallbackNode = function() {
    return parseJSON(json);
  };
  /** @type {null} */
  ctx.unstable_Profiling = null;
}, function(dataAndEvents, c, deepDataAndEvents) {
  Object.defineProperty(c, "__esModule", {
    value : true
  });
  /**
   * @param {Element} el
   * @return {?}
   */
  c.getID = function(el) {
    var val = el.getAttribute("id");
    if (null !== val && "" !== val) {
      return val.match(/(?:^\d|:)/) ? '[id="' + val + '"]' : "#" + val;
    }
    return null;
  };
}, function(dataAndEvents, global, deepDataAndEvents) {
  /**
   * @param {HTMLElement} elem
   * @return {?}
   */
  function process(elem) {
    if (!elem.hasAttribute("class")) {
      return[];
    }
    try {
      return Array.prototype.slice.call(elem.classList).filter(function(part) {
        return/^[a-z_-][a-z\d_-]*$/i.test(part) ? part : null;
      });
    } catch (n) {
      var classes = elem.getAttribute("class");
      return(classes = classes.trim().replace(/\s+/g, " ")).split(" ");
    }
  }
  Object.defineProperty(global, "__esModule", {
    value : true
  });
  /** @type {function (HTMLElement): ?} */
  global.getClasses = process;
  /**
   * @param {undefined} selector
   * @return {?}
   */
  global.getClassSelectors = function(selector) {
    return process(selector).filter(Boolean).map(function(dataAndEvents) {
      return "." + dataAndEvents;
    });
  };
}, function(dataAndEvents, ctx, deepDataAndEvents) {
  /**
   * @param {Array} obj
   * @param {Array} data
   * @param {Object} value
   * @param {number} ps
   * @param {number} segments
   * @param {number} idx
   * @param {number} end
   * @return {undefined}
   */
  function set(obj, data, value, ps, segments, idx, end) {
    if (idx !== end) {
      /** @type {number} */
      var i = ps;
      for (;i <= segments && segments - i + 1 >= end - idx;++i) {
        value[idx] = data[i];
        set(obj, data, value, i + 1, segments, idx + 1, end);
      }
    } else {
      obj.push(value.slice(0, idx).join(""));
    }
  }
  Object.defineProperty(ctx, "__esModule", {
    value : true
  });
  /**
   * @param {Array} values
   * @param {number} dataAndEvents
   * @return {?}
   */
  ctx.getCombinations = function(values, dataAndEvents) {
    /** @type {Array} */
    var suiteView = [];
    var valuesLen = values.length;
    /** @type {Array} */
    var udataCur = [];
    /** @type {number} */
    var quote = 1;
    for (;quote <= dataAndEvents;++quote) {
      set(suiteView, values, udataCur, 0, valuesLen - 1, 0, quote);
    }
    return suiteView;
  };
}, function(dataAndEvents, store, deepDataAndEvents) {
  Object.defineProperty(store, "__esModule", {
    value : true
  });
  /**
   * @param {Object} elem
   * @return {?}
   */
  store.getAttributes = function(elem) {
    var nodeNames = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["id", "class", "length"];
    var parent = elem.attributes;
    return[].concat(function(items) {
      if (Array.isArray(items)) {
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var result = Array(items.length);
        for (;i < items.length;i++) {
          result[i] = items[i];
        }
        return result;
      }
      return Array.from(items);
    }(parent)).reduce(function(matchIndexes, elem) {
      return nodeNames.indexOf(elem.nodeName) > -1 || matchIndexes.push("[" + elem.nodeName + '="' + elem.value + '"]'), matchIndexes;
    }, []);
  };
}, function(dataAndEvents, ctx, compile) {
  Object.defineProperty(ctx, "__esModule", {
    value : true
  });
  /**
   * @param {HTMLElement} el
   * @return {?}
   */
  ctx.getNthChild = function(el) {
    /** @type {number} */
    var t = 0;
    var i = void 0;
    var child = void 0;
    var current = el.parentNode;
    if (Boolean(current)) {
      var children = current.childNodes;
      var l = children.length;
      /** @type {number} */
      i = 0;
      for (;i < l;i++) {
        if (child = children[i], (0, element.isElement)(child) && (t++, child === el)) {
          return ":nth-child(" + t + ")";
        }
      }
    }
    return null;
  };
  var element = compile(14);
}, function(dataAndEvents, child, deepDataAndEvents) {
  Object.defineProperty(child, "__esModule", {
    value : true
  });
  /**
   * @param {Node} el
   * @return {?}
   */
  child.getTag = function(el) {
    return el.tagName.toLowerCase().replace(/:/g, "\\:");
  };
}, function(dataAndEvents, def, deepDataAndEvents) {
  Object.defineProperty(def, "__esModule", {
    value : true
  });
  /**
   * @param {Node} el
   * @param {?} item
   * @return {?}
   */
  def.isUnique = function(el, item) {
    if (!Boolean(item)) {
      return false;
    }
    var arr = el.ownerDocument.querySelectorAll(item);
    return 1 === arr.length && arr[0] === el;
  };
}, function(dataAndEvents, el, compile) {
  Object.defineProperty(el, "__esModule", {
    value : true
  });
  /**
   * @param {?} node
   * @return {?}
   */
  el.getParents = function(node) {
    /** @type {Array} */
    var eventPath = [];
    var cur = node;
    for (;(0, element.isElement)(cur);) {
      eventPath.push(cur);
      cur = cur.parentNode;
    }
    return eventPath;
  };
  var element = compile(14);
}, function(dataAndEvents, exports, deepDataAndEvents) {
  /**
   * @param {Object} data
   * @return {?}
   */
  function parse(data) {
    if ("object" == typeof data && null !== data) {
      var max = data.$$typeof;
      switch(max) {
        case min:
          switch(data = data.type) {
            case backtrace:
            ;
            case update:
            ;
            case type:
            ;
            case Profiler:
            ;
            case value:
            ;
            case string:
              return data;
            default:
              switch(data = data && data.$$typeof) {
                case d:
                ;
                case String:
                ;
                case Color:
                ;
                case i:
                ;
                case compare:
                  return data;
                default:
                  return max;
              }
            ;
          }
        ;
        case g:
          return max;
      }
    }
  }
  /**
   * @param {Object} type
   * @return {?}
   */
  function Event(type) {
    return parse(type) === update;
  }
  var r = "function" == typeof Symbol && Symbol.for;
  var min = r ? Symbol.for("react.element") : 60103;
  var g = r ? Symbol.for("react.portal") : 60106;
  var type = r ? Symbol.for("react.fragment") : 60107;
  var value = r ? Symbol.for("react.strict_mode") : 60108;
  var Profiler = r ? Symbol.for("react.profiler") : 60114;
  var compare = r ? Symbol.for("react.provider") : 60109;
  var d = r ? Symbol.for("react.context") : 60110;
  var backtrace = r ? Symbol.for("react.async_mode") : 60111;
  var update = r ? Symbol.for("react.concurrent_mode") : 60111;
  var String = r ? Symbol.for("react.forward_ref") : 60112;
  var string = r ? Symbol.for("react.suspense") : 60113;
  var _offlineErrorCode = r ? Symbol.for("react.suspense_list") : 60120;
  var i = r ? Symbol.for("react.memo") : 60115;
  var Color = r ? Symbol.for("react.lazy") : 60116;
  var signum = r ? Symbol.for("react.block") : 60121;
  var Literal = r ? Symbol.for("react.fundamental") : 60117;
  var ArrayExpression = r ? Symbol.for("react.responder") : 60118;
  var ObjectExpression = r ? Symbol.for("react.scope") : 60119;
  exports.AsyncMode = backtrace;
  exports.ConcurrentMode = update;
  exports.ContextConsumer = d;
  exports.ContextProvider = compare;
  exports.Element = min;
  exports.ForwardRef = String;
  exports.Fragment = type;
  exports.Lazy = Color;
  exports.Memo = i;
  exports.Portal = g;
  exports.Profiler = Profiler;
  exports.StrictMode = value;
  exports.Suspense = string;
  /**
   * @param {Object} type
   * @return {?}
   */
  exports.isAsyncMode = function(type) {
    return Event(type) || parse(type) === backtrace;
  };
  /** @type {function (Object): ?} */
  exports.isConcurrentMode = Event;
  /**
   * @param {Object} argument
   * @return {?}
   */
  exports.isContextConsumer = function(argument) {
    return parse(argument) === d;
  };
  /**
   * @param {Object} a
   * @return {?}
   */
  exports.isContextProvider = function(a) {
    return parse(a) === compare;
  };
  /**
   * @param {Object} o
   * @return {?}
   */
  exports.isElement = function(o) {
    return "object" == typeof o && (null !== o && o.$$typeof === min);
  };
  /**
   * @param {Object} str
   * @return {?}
   */
  exports.isForwardRef = function(str) {
    return parse(str) === String;
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  exports.isFragment = function(obj) {
    return parse(obj) === type;
  };
  /**
   * @param {Object} argument
   * @return {?}
   */
  exports.isLazy = function(argument) {
    return parse(argument) === Color;
  };
  /**
   * @param {?} v
   * @return {?}
   */
  exports.isMemo = function(v) {
    return parse(v) === i;
  };
  /**
   * @param {Object} argument
   * @return {?}
   */
  exports.isPortal = function(argument) {
    return parse(argument) === g;
  };
  /**
   * @param {Object} argument
   * @return {?}
   */
  exports.isProfiler = function(argument) {
    return parse(argument) === Profiler;
  };
  /**
   * @param {Object} item
   * @return {?}
   */
  exports.isStrictMode = function(item) {
    return parse(item) === value;
  };
  /**
   * @param {Object} v
   * @return {?}
   */
  exports.isSuspense = function(v) {
    return parse(v) === string;
  };
  /**
   * @param {?} arg
   * @return {?}
   */
  exports.isValidElementType = function(arg) {
    return "string" == typeof arg || ("function" == typeof arg || (arg === type || (arg === update || (arg === Profiler || (arg === value || (arg === string || (arg === _offlineErrorCode || "object" == typeof arg && (null !== arg && (arg.$$typeof === Color || (arg.$$typeof === i || (arg.$$typeof === compare || (arg.$$typeof === d || (arg.$$typeof === String || (arg.$$typeof === Literal || (arg.$$typeof === ArrayExpression || (arg.$$typeof === ObjectExpression || arg.$$typeof === signum))))))))))))))));
  };
  /** @type {function (Object): ?} */
  exports.typeOf = parse;
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7lhbPpl608L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMy42ODk3MzMzMywyLjg0MTMzMzMzIEw4LjAyNjYsNy4xNzc3MzMzMyBMMTIuMzY0MjY2NywyLjg0MTczMzMzIEMxMi41OTc2LDIuNjA4NCAxMi45Nzg5MzMzLDIuNjA4NCAxMy4yMTI5MzMzLDIuODQxNzMzMzMgQzEzLjQ0NTYsMy4wNzUwNjY2NyAxMy40NDU2LDMuNDU3MDY2NjcgMTMuMjEyOTMzMywzLjY4OTczMzMzIEw4Ljg3NDYsOC4wMjY3MzMzMyBMMTMuMjEyNCwxMi4zNjQ2NjY3IEMxMy40NDU3MzMzLDEyLjU5NzMzMzMgMTMuNDQ1NzMzMywxMi45Nzg2NjY3IDEzLjIxMjQsMTMuMjEyNjY2NyBDMTIuOTc5MDY2NywxMy40NDYgMTIuNTk3NzMzMywxMy40NDYgMTIuMzY0NCwxMy4yMTI2NjY3IEw4LjAyNjYsOC44NzQ3MzMzMyBMMy42ODk2LDEzLjIxMjQgQzMuNDU2OTMzMzMsMTMuNDQ1NzMzMyAzLjA3NTYsMTMuNDQ1NzMzMyAyLjg0MTYsMTMuMjEyNCBDMi42MDgyNjY2NywxMi45NzkwNjY3IDIuNjA4MjY2NjcsMTIuNTk3NzMzMyAyLjg0MTYsMTIuMzY0NCBMNy4xNzg2LDguMDI2NzMzMzMgTDIuODQxNzMzMzMsMy42OSBDMi42MDg0LDMuNDU2NjY2NjcgMi42MDg0LDMuMDc1MzMzMzMgMi44NDE3MzMzMywyLjg0MTMzMzMzIEMzLjA3NTA2NjY3LDIuNjA4NjY2NjcgMy40NTcwNjY2NywyLjYwODY2NjY3IDMuNjg5NzMzMzMsMi44NDEzMzMzMyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGl4ZWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLms5XliqHnrb7nvbIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDYwLjAwMDAwMCwgLTI5Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU4LjAwMDAwMCwgMjY2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjMuaWNvbi9zaHV0LWRvd24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwMC4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0i5YWz6ZetIiBmaWxsPSIjOTk5OTk5IiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
}, function(dataAndEvents, val, jQuery) {
  /**
   * @param {?} func
   * @param {boolean} signal_eof
   * @return {?}
   */
  function next(func, signal_eof) {
    /** @type {Array.<string>} */
    var q = Object.keys(func);
    if (Object.getOwnPropertySymbols) {
      var match = Object.getOwnPropertySymbols(func);
      if (signal_eof) {
        match = match.filter(function(uuid) {
          return Object.getOwnPropertyDescriptor(func, uuid).enumerable;
        });
      }
      q.push.apply(q, match);
    }
    return q;
  }
  /**
   * @param {?} o
   * @return {?}
   */
  function copy(o) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var obj = null != arguments[i] ? arguments[i] : {};
      if (i % 2) {
        next(Object(obj), true).forEach(function(name) {
          merge(o, name, obj[name]);
        });
      } else {
        if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(o, Object.getOwnPropertyDescriptors(obj));
        } else {
          next(Object(obj)).forEach(function(prop) {
            Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(obj, prop));
          });
        }
      }
    }
    return o;
  }
  /**
   * @param {?} obj
   * @param {?} key
   * @param {string} value
   * @return {?}
   */
  function merge(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  /**
   * @param {Object} obj
   * @param {Array} data
   * @return {?}
   */
  function onSuccess(obj, data) {
    if (null == obj) {
      return{};
    }
    var field;
    var i;
    var values = function(iterable, actual) {
      if (null == iterable) {
        return{};
      }
      var key;
      var i;
      var object = {};
      /** @type {Array.<string>} */
      var codeSegments = Object.keys(iterable);
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        /** @type {string} */
        key = codeSegments[i];
        if (!(actual.indexOf(key) >= 0)) {
          object[key] = iterable[key];
        }
      }
      return object;
    }(obj, data);
    if (Object.getOwnPropertySymbols) {
      var codeSegments = Object.getOwnPropertySymbols(obj);
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        field = codeSegments[i];
        if (!(data.indexOf(field) >= 0)) {
          if (Object.prototype.propertyIsEnumerable.call(obj, field)) {
            values[field] = obj[field];
          }
        }
      }
    }
    return values;
  }
  /**
   * @return {?}
   */
  function walk() {
    return "icon-" + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
  }
  /**
   * @param {string} value
   * @param {boolean} recurring
   * @param {Function} text
   * @return {?}
   */
  function load(value, recurring, text) {
    return function(options) {
      var size = options.size;
      var strokeWidth = options.strokeWidth;
      var async = options.strokeLinecap;
      var successCb = options.strokeLinejoin;
      var theme = options.theme;
      var fill = options.fill;
      var current = options.className;
      var thisArg = options.spin;
      var data = onSuccess(options, camelKey);
      var s = Object(p.useContext)(setting);
      var passes = function(term, options, data) {
        var r = "string" == typeof options.fill ? [options.fill] : options.fill || [];
        /** @type {Array} */
        var colors = [];
        switch(options.theme || data.theme) {
          case "outline":
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("none");
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("none");
            break;
          case "filled":
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("#FFF");
            colors.push("#FFF");
            break;
          case "two-tone":
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("string" == typeof r[1] ? r[1] : data.colors.twoTone.twoTone);
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("string" == typeof r[1] ? r[1] : data.colors.twoTone.twoTone);
            break;
          case "multi-color":
            colors.push("string" == typeof r[0] ? r[0] : "currentColor");
            colors.push("string" == typeof r[1] ? r[1] : data.colors.multiColor.outFillColor);
            colors.push("string" == typeof r[2] ? r[2] : data.colors.multiColor.innerStrokeColor);
            colors.push("string" == typeof r[3] ? r[3] : data.colors.multiColor.innerFillColor);
        }
        return{
          size : options.size || data.size,
          strokeWidth : options.strokeWidth || data.strokeWidth,
          strokeLinecap : options.strokeLinecap || data.strokeLinecap,
          strokeLinejoin : options.strokeLinejoin || data.strokeLinejoin,
          colors : colors,
          id : term
        };
      }(Object(p.useMemo)(walk, []), {
        size : size,
        strokeWidth : strokeWidth,
        strokeLinecap : async,
        strokeLinejoin : successCb,
        theme : theme,
        fill : fill
      }, s);
      /** @type {Array} */
      var results = [s.prefix + "-icon"];
      return results.push(s.prefix + "-icon-" + value), recurring && (s.rtl && results.push(s.prefix + "-icon-rtl")), thisArg && results.push(s.prefix + "-icon-spin"), current && results.push(current), d.a.createElement("span", copy(copy({}, data), {}, {
        className : results.join(" ")
      }), text(passes));
    };
  }
  /**
   * @param {Function} now
   * @param {Function} config
   * @return {?}
   */
  function set(now, config) {
    return(set = Object.setPrototypeOf || function(object, callback) {
      return object.__proto__ = callback, object;
    })(now, config);
  }
  /**
   * @param {Function} func
   * @param {Object} object
   * @return {undefined}
   */
  function map(func, object) {
    if ("function" != typeof object && null !== object) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {Object} */
    func.prototype = Object.create(object && object.prototype, {
      constructor : {
        /** @type {Function} */
        value : func,
        writable : true,
        configurable : true
      }
    });
    if (object) {
      set(func, object);
    }
  }
  /**
   * @param {Function} callback
   * @return {?}
   */
  function call(callback) {
    return(call = Object.setPrototypeOf ? Object.getPrototypeOf : function(obj) {
      return obj.__proto__ || Object.getPrototypeOf(obj);
    })(callback);
  }
  /**
   * @return {?}
   */
  function process() {
    if ("undefined" == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" == typeof Proxy) {
      return true;
    }
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch (e) {
      return false;
    }
  }
  /**
   * @param {string} v12
   * @return {?}
   */
  function bind(v12) {
    return(bind = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(v12) {
      return typeof v12;
    } : function(b) {
      return b && ("function" == typeof Symbol && (b.constructor === Symbol && b !== Symbol.prototype)) ? "symbol" : typeof b;
    })(v12);
  }
  /**
   * @param {number} end
   * @param {string} b
   * @return {?}
   */
  function done(end, b) {
    return!b || "object" !== bind(b) && "function" != typeof b ? function(wanted) {
      if (void 0 === wanted) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return wanted;
    }(end) : b;
  }
  /**
   * @param {Function} method
   * @return {?}
   */
  function handler(method) {
    return function() {
      var result;
      var value = call(method);
      if (process()) {
        var c = call(this).constructor;
        result = Reflect.construct(value, arguments, c);
      } else {
        result = value.apply(this, arguments);
      }
      return done(this, result);
    };
  }
  /**
   * @param {?} object
   * @param {Function} initialize
   * @return {undefined}
   */
  function freeze(object, initialize) {
    if (!(object instanceof initialize)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {Function} method
   * @param {?} attributes
   * @return {undefined}
   */
  function defineProperty(method, attributes) {
    /** @type {number} */
    var i = 0;
    for (;i < attributes.length;i++) {
      var desc = attributes[i];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(method, desc.key, desc);
    }
  }
  /**
   * @param {Function} initialize
   * @param {?} opt_attributes
   * @param {(Error|string)} name
   * @return {?}
   */
  function onDocumentBody(initialize, opt_attributes, name) {
    return opt_attributes && defineProperty(initialize.prototype, opt_attributes), name && defineProperty(initialize, name), initialize;
  }
  jQuery.r(val);
  var object = jQuery(2);
  var p = jQuery(0);
  var d = jQuery.n(p);
  /** @type {Array} */
  var camelKey = ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "className", "spin"];
  var defaults = {
    size : "1em",
    strokeWidth : 4,
    strokeLinecap : "round",
    strokeLinejoin : "round",
    rtl : false,
    theme : "outline",
    colors : {
      outline : {
        fill : "#333",
        background : "transparent"
      },
      filled : {
        fill : "#333",
        background : "#FFF"
      },
      twoTone : {
        fill : "#333",
        twoTone : "#2F88FF"
      },
      multiColor : {
        outStrokeColor : "#333",
        outFillColor : "#2F88FF",
        innerStrokeColor : "#FFF",
        innerFillColor : "#43CCF8"
      }
    },
    prefix : "i"
  };
  var setting = Object(p.createContext)(defaults);
  setting.Provider;
  var nodeStr = load("add-one", false, function(attr) {
    return d.a.createElement("svg", {
      width : attr.size,
      height : attr.size,
      viewBox : "0 0 48 48",
      fill : "none"
    }, d.a.createElement("path", {
      d : "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
      fill : attr.colors[1],
      stroke : attr.colors[0],
      strokeWidth : attr.strokeWidth,
      strokeLinejoin : attr.strokeLinejoin
    }), d.a.createElement("path", {
      d : "M24 16V32",
      stroke : attr.colors[2],
      strokeWidth : attr.strokeWidth,
      strokeLinecap : attr.strokeLinecap,
      strokeLinejoin : attr.strokeLinejoin
    }), d.a.createElement("path", {
      d : "M16 24L32 24",
      stroke : attr.colors[2],
      strokeWidth : attr.strokeWidth,
      strokeLinecap : attr.strokeLinecap,
      strokeLinejoin : attr.strokeLinejoin
    }));
  });
  var obj = load("success", true, function(attr) {
    return d.a.createElement("svg", {
      width : attr.size,
      height : attr.size,
      viewBox : "0 0 48 48",
      fill : "none"
    }, d.a.createElement("path", {
      d : "M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",
      fill : attr.colors[1],
      stroke : attr.colors[0],
      strokeWidth : attr.strokeWidth,
      strokeLinecap : attr.strokeLinecap,
      strokeLinejoin : attr.strokeLinejoin
    }), d.a.createElement("path", {
      d : "M17 24L22 29L32 19",
      stroke : attr.colors[2],
      strokeWidth : attr.strokeWidth,
      strokeLinecap : attr.strokeLinecap,
      strokeLinejoin : attr.strokeLinejoin
    }));
  });
  var nodes = jQuery(15);
  var node = jQuery.n(nodes);
  var that = jQuery(5);
  var row = jQuery(4);
  var foo = jQuery(1);
  var context = function(opt_attributes) {
    return opt_attributes[opt_attributes.WRONG = -1] = "WRONG", opt_attributes[opt_attributes.KEEP = 0] = "KEEP", opt_attributes[opt_attributes.ARRAY = -2] = "ARRAY", opt_attributes[opt_attributes.TURNINTOINTEGER = 1] = "TURNINTOINTEGER", opt_attributes[opt_attributes.TURNINTODECIMAL = 2] = "TURNINTODECIMAL", opt_attributes;
  }({});
  var env = function(opt_attributes) {
    return opt_attributes.PickElement = "pixel_pick_element", opt_attributes.Embed = "pixel_embed", opt_attributes.SetUrl = "pixel_set_current_url", opt_attributes;
  }({});
  var SetElements = function(opt_attributes) {
    return opt_attributes.SetElements = "pixel_set_elements", opt_attributes.SetMode = "pixel_set_mode", opt_attributes.SetLang = "pixel_set_lang", opt_attributes.SetSeletedDynamicParameters = "pixel_set_selected_dynamic_Parameters", opt_attributes.SetXpathType = "pixel_set_xpath_type", opt_attributes.SetEventName = "pixel_set_event_name", opt_attributes.SelectedDynamicParametersSuccess = "pixel_set_dynamic_parameter_success", opt_attributes;
  }({});
  var options = function(opt_attributes) {
    return opt_attributes.SetDynamicPatameters = "pixel_set_dynamicPatameters", opt_attributes;
  }({});
  var state = function(self) {
    return self.View = "view", self.PickUp = "pickup", self.DynamicPatameter = "dynamicPatameter", self.None = "none", self;
  }({});
  var restoreScript = function() {
    /**
     * @param {Window} contentHTML
     * @param {Array} callbacks
     * @return {undefined}
     */
    function initialize(contentHTML, callbacks) {
      freeze(this, initialize);
      /** @type {null} */
      this.opener = null;
      this.callbacks = {};
      /** @type {Window} */
      this.opener = contentHTML;
      /** @type {Array} */
      this.callbacks = callbacks;
    }
    return onDocumentBody(initialize, [{
      key : "start",
      /**
       * @return {undefined}
       */
      value : function() {
        window.removeEventListener("message", this.handleMessage.bind(this));
        window.addEventListener("message", this.handleMessage.bind(this), false);
      }
    }, {
      key : "stop",
      /**
       * @return {undefined}
       */
      value : function() {
        window.removeEventListener("message", this.handleMessage);
      }
    }, {
      key : "send",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        if (this.opener) {
          this.opener.postMessage(expectedHashCode, "*");
        }
      }
    }, {
      key : "handleMessage",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        var root = this.callbacks;
        var data = expectedHashCode.data;
        var type = data.type;
        var error = data.detail;
        Object.entries(root).forEach(function(cx) {
          var t = Object(object.a)(cx, 2);
          var fragment = t[0];
          var onErrorFnPrev = t[1];
          if (type === fragment) {
            onErrorFnPrev(error);
          }
        });
      }
    }]), initialize;
  }();
  var Data = function(callback) {
    /**
     * @param {(Object|string)} data
     * @return {?}
     */
    function initialize(data) {
      var ret;
      var value = data.opener;
      var name = data.callbacks;
      return freeze(this, initialize), (ret = hooks.call(this, value, name)).embed(), ret;
    }
    map(initialize, callback);
    var hooks = handler(initialize);
    return onDocumentBody(initialize, [{
      key : "pickElement",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var record = {
          type : env.PickElement,
          detail : {
            selector : expectedHashCode,
            eventName : num,
            index : opt_attributes
          }
        };
        this.send(record);
      }
    }, {
      key : "embed",
      /**
       * @return {undefined}
       */
      value : function() {
        var record = {
          type : env.Embed,
          detail : {
            url : window.location.href
          }
        };
        this.send(record);
      }
    }, {
      key : "setCurrentUrl",
      /**
       * @param {string} expectedHashCode
       * @return {undefined}
       */
      value : function(expectedHashCode) {
        var record = {
          type : env.SetUrl,
          detail : {
            url : expectedHashCode
          }
        };
        this.send(record);
      }
    }]), initialize;
  }(restoreScript);
  var MySQLStore = function(callback) {
    /**
     * @param {(Object|string)} win
     * @return {?}
     */
    function initialize(win) {
      var c = win.opener;
      var w = win.callbacks;
      return freeze(this, initialize), me.call(this, c, w);
    }
    map(initialize, callback);
    var me = handler(initialize);
    return onDocumentBody(initialize, [{
      key : "pickupDynamicPemeterElememt",
      /**
       * @param {string} expectedHashCode
       * @param {?} num
       * @param {?} opt_attributes
       * @return {undefined}
       */
      value : function(expectedHashCode, num, opt_attributes) {
        var record = {
          type : options.SetDynamicPatameters,
          detail : {
            selector : expectedHashCode,
            ruleOptions : opt_attributes,
            ori_value : num
          }
        };
        this.send(record);
      }
    }]), initialize;
  }(restoreScript);
  var elems = jQuery(6);
  var isArray = jQuery.n(elems);
  var doc = jQuery(9);
  /** @type {Array} */
  var protoProps = [];
  /**
   * @param {?} dataAndEvents
   * @param {Object} item
   * @return {?}
   */
  var clone = function(dataAndEvents, item) {
    var type = item.type;
    var payload = item.payload;
    switch(type) {
      case "setElements":
        return payload.slice(0);
      default:
        throw new Error;;
    }
  };
  /** @type {null} */
  var data_user = null;
  /**
   * @return {?}
   */
  var init = function() {
    var string = Object(p.useReducer)(clone, protoProps);
    var ast = Object(object.a)(string, 2);
    var options = ast[0];
    var value = ast[1];
    var child = Object(p.useReducer)(clone, protoProps);
    var next = Object(object.a)(child, 2);
    var obj = next[0];
    var fn = next[1];
    var cacheKey = Object(p.useState)(false);
    var cached = Object(object.a)(cacheKey, 2);
    var overflow = cached[0];
    var ready = cached[1];
    var otherElement = Object(p.useState)(state.View);
    var otherElementRect = Object(object.a)(otherElement, 2);
    var CHAR_LINE_FEED = otherElementRect[0];
    var fire = otherElementRect[1];
    var strong = Object(doc.a)("en");
    var b = Object(object.a)(strong, 5);
    var b21 = b[1];
    var promote = b[4];
    var en = Object(doc.a)("en", "pixel_create");
    var result = Object(object.a)(en, 5);
    var message = result[1];
    var root = result[4];
    var englishData = Object(doc.a)("en", "external_action_18n");
    var data = Object(object.a)(englishData, 5);
    var event = data[1];
    var html = data[4];
    var segs = Object(p.useState)("");
    var levels = Object(object.a)(segs, 2);
    var udataCur = levels[0];
    var isAncestor = levels[1];
    var startName = Object(p.useState)([]);
    var parts = Object(object.a)(startName, 2);
    var table = parts[0];
    var last = parts[1];
    Object(p.useEffect)(function() {
      var r20;
      (data_user = new Data({
        opener : window.parent !== window.self ? window.parent : window.opener,
        callbacks : (r20 = {}, Object(foo.a)(r20, SetElements.SetElements, add), Object(foo.a)(r20, SetElements.SetMode, init), Object(foo.a)(r20, SetElements.SetLang, parse), Object(foo.a)(r20, SetElements.SetEventName, select), r20)
      })).start();
    }, []);
    Object(p.useEffect)(function() {
      if (document.body) {
        /** @type {string} */
        document.body.style.overflow = overflow ? "hidden" : "auto";
      }
    }, [overflow]);
    /**
     * @param {HTMLFormElement} data
     * @return {undefined}
     */
    var add = function(data) {
      var cells = data.elements;
      var result = function(arr, keys) {
        return arr.reduce(function(_results, selector, actualObject) {
          if (!selector) {
            return _results.push({
              empty : []
            }), _results;
          }
          try {
            var formula = Array.from(document.querySelectorAll(selector)).reduce(function(boxes, range) {
              var cfg = range.getBoundingClientRect();
              var x = cfg.left;
              var y = cfg.top;
              var left = cfg.width;
              var cssHeight = cfg.height;
              var key = keys ? keys[selector] : "";
              var object = actualObject;
              return boxes.push({
                left : x + window.pageXOffset,
                top : y + window.pageYOffset,
                width : left,
                height : cssHeight,
                eventName : key,
                elementIndex : object
              }), boxes;
            }, []);
            return _results.push(Object(foo.a)({}, selector, formula)), _results;
          } catch (label) {
            return console.error(label), [];
          }
        }, []);
      }(cells, data.selectorEventMap);
      last(Object.keys(cells).map(Number));
      value({
        type : "setElements",
        payload : result
      });
    };
    /**
     * @param {Object} time
     * @return {undefined}
     */
    var init = function(time) {
      var memory = time.mode;
      fire(memory);
      value({
        type : "setElements",
        payload : []
      });
      fn({
        type : "setElements",
        payload : []
      });
      ready(false);
    };
    /**
     * @param {Object} message
     * @return {undefined}
     */
    var parse = function(message) {
      var lang = message.lang;
      promote(lang);
      root(lang);
      html(lang);
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    var select = function(event) {
      var related = event.eventName;
      isAncestor(related);
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    var update = function(e) {
      if (CHAR_LINE_FEED !== state.View && !overflow) {
        var object = e.target;
        if (object && object instanceof HTMLElement) {
          /** @type {(ClientRect|null)} */
          var cfg = object.getBoundingClientRect();
          /** @type {number} */
          var x = cfg.left;
          /** @type {number} */
          var y = cfg.top;
          /** @type {number} */
          var left = cfg.width;
          /** @type {number} */
          var cssHeight = cfg.height;
          var reserved = isArray()(e.target, {
            selectorTypes : ["ID", "Tag", "NthChild", "Class"]
          });
          if (reserved.includes(i)) {
            return;
          }
          /** @type {Array} */
          var payload = [Object(foo.a)({}, reserved, [{
            left : x + window.pageXOffset,
            top : y + window.pageYOffset,
            width : left,
            height : cssHeight
          }])];
          fn({
            type : "setElements",
            payload : payload
          });
        }
      }
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    var completed = function(event) {
      if (CHAR_LINE_FEED !== state.View) {
        if (CHAR_LINE_FEED !== state.DynamicPatameter) {
          event.stopPropagation();
          event.preventDefault();
          if (!overflow) {
            ready(true);
          }
        }
      }
    };
    return Object(p.useEffect)(function() {
      return CHAR_LINE_FEED === state.PickUp && (document.addEventListener("mouseover", update, false), document.addEventListener("click", completed, false)), function() {
        document.removeEventListener("mouseover", update);
        document.removeEventListener("click", completed);
      };
    }, [overflow, CHAR_LINE_FEED]), [obj[0] ? obj[0] : null, options, overflow, function() {
      ready(false);
    }, function(from) {
      /** @type {string} */
      var dest = Object.keys(from)[0];
      if (!options.some(function(defs) {
        return Object.keys(defs)[0] === dest;
      })) {
        if (data_user) {
          data_user.pickElement(dest, udataCur, function(keys) {
            if (0 === keys.length) {
              return 0;
            }
            var key = keys[0];
            /** @type {number} */
            var i = 1;
            for (;i < keys.length;i++) {
              if (keys[i] > key) {
                key = keys[i];
              }
            }
            return key;
          }(table) + 1);
        }
        if (udataCur) {
          from[dest][0].eventName = udataCur;
        }
        var payload = options.concat([from]);
        value({
          type : "setElements",
          payload : payload
        });
        fn({
          type : "setElements",
          payload : []
        });
      }
      ready(false);
    }, CHAR_LINE_FEED, b21 || (message || event)];
  };
  /**
   * @param {?} options
   * @param {number} start
   * @return {?}
   */
  var scan = function(options, start) {
    /** @type {Array} */
    var result = [];
    var data = options.replaceAll(" ", ",");
    if (/(,)/g.test(data) && /(\.)/g.test(data)) {
      if (/\.\d{1,},/g.test(data)) {
        result.push({
          valueFrom : options,
          rule : context.WRONG,
          optionValue : options,
          index : start
        });
      } else {
        var resultItems = data.split(/[,\.]/g);
        /** @type {string} */
        var optsData = "";
        resultItems.forEach(function(buf, dataAndEvents) {
          if (dataAndEvents < resultItems.length - 1) {
            optsData += buf;
          } else {
            optsData += "." + buf;
          }
        });
        result.push({
          valueFrom : options,
          rule : context.TURNINTODECIMAL,
          optionValue : optsData,
          index : start
        });
        result.push({
          valueFrom : options,
          rule : context.KEEP,
          optionValue : options,
          index : start
        });
      }
    } else {
      if (/(,)/g.test(data) && !/(\.)/g.test(data)) {
        result.push({
          valueFrom : options,
          rule : context.TURNINTOINTEGER,
          optionValue : data.replaceAll(",", ""),
          index : start
        });
        var assertions = data.split(",");
        /** @type {string} */
        var value = "";
        assertions.forEach(function(lineEnd, dataAndEvents) {
          if (dataAndEvents < assertions.length - 1) {
            value += lineEnd;
          } else {
            value += "." + lineEnd;
          }
        });
        result.push({
          valueFrom : options,
          rule : context.TURNINTODECIMAL,
          optionValue : value,
          index : start
        });
      } else {
        if (!/(,)/g.test(data) && /(\.)/g.test(data)) {
          result.push({
            valueFrom : options,
            rule : context.TURNINTOINTEGER,
            optionValue : data.replaceAll(".", ""),
            index : start
          });
          result.push({
            valueFrom : options,
            rule : context.KEEP,
            optionValue : options,
            index : start
          });
        } else {
          result.push({
            valueFrom : options,
            rule : context.KEEP,
            optionValue : options,
            index : start
          });
        }
      }
    }
    return result;
  };
  /**
   * @param {string} kind
   * @return {?}
   */
  var update = function(kind) {
    var nodes = document.evaluate("//text()", document, null, XPathResult.ANY_TYPE, null);
    /** @type {Array} */
    var ret = [];
    var node = nodes.iterateNext();
    for (;node;) {
      if ("number" === kind && (node.textContent && (node.parentElement && (parseInt(node.textContent.replace(/[^0-9]/gi, "")) && node.textContent.length < 100)))) {
        var cfg = node.parentElement.getBoundingClientRect();
        var x = cfg.left;
        var top = cfg.top;
        var left = cfg.width;
        var cssHeight = cfg.height;
        try {
          var S = isArray()(node.parentElement, {
            selectorTypes : ["ID", "Tag", "NthChild", "Class"]
          });
          if (!S.startsWith("#" + i) && (0 !== left && 0 !== cssHeight)) {
            /** @type {(CSSStyleDeclaration|null)} */
            var cs = window.getComputedStyle(node.parentElement);
            if ("hidden" !== cs.visibility && ("none" !== cs.display && ((parseInt(cs.width) > 1 || isNaN(parseInt(cs.width))) && (parseInt(cs.height) > 1 || isNaN(parseInt(cs.height)))))) {
              var rreturn = Object(foo.a)({}, S, [{
                left : x + window.pageXOffset,
                top : top + window.pageYOffset,
                width : left,
                height : cssHeight
              }]);
              ret.push(rreturn);
            }
          }
        } catch (label) {
          console.error(label);
        }
      }
      if ("string" === kind && (node.textContent && (node.parentElement && (node.textContent.trim().length > 1 && node.textContent.length < 100)))) {
        var rect = node.parentElement.getBoundingClientRect();
        var width = rect.left;
        var y = rect.top;
        var w = rect.width;
        var h = rect.height;
        try {
          var text = isArray()(node.parentElement, {
            selectorTypes : ["ID", "Tag", "NthChild", "Class"]
          });
          if (!text.startsWith("#" + i) && (0 !== w && 0 !== h)) {
            /** @type {(CSSStyleDeclaration|null)} */
            var computedStyle = window.getComputedStyle(node.parentElement);
            if ("hidden" !== computedStyle.visibility && ("none" !== computedStyle.display && ((parseInt(computedStyle.width) > 1 || isNaN(parseInt(computedStyle.width))) && (parseInt(computedStyle.height) > 1 || isNaN(parseInt(computedStyle.height)))))) {
              var t = Object(foo.a)({}, text, [{
                left : width + window.pageXOffset,
                top : y + window.pageYOffset,
                width : w,
                height : h
              }]);
              ret.push(t);
            }
          }
        } catch (name) {
          console.error(name);
        }
      }
      node = nodes.iterateNext();
    }
    return ret;
  };
  /** @type {null} */
  var dojo = null;
  /**
   * @param {?} index
   * @return {?}
   */
  var start = function(index) {
    var bites = Object(p.useState)([]);
    var res = Object(object.a)(bites, 2);
    var files = res[0];
    var children = res[1];
    var arg = Object(p.useState)([]);
    var type = Object(object.a)(arg, 2);
    var def = type[0];
    var isUndefined = type[1];
    var tag = Object(p.useState)(null);
    var elements = Object(object.a)(tag, 2);
    var element = elements[0];
    var MAP = elements[1];
    var start = Object(p.useState)("number");
    var dirs = Object(object.a)(start, 2);
    var kind = dirs[0];
    var dir = dirs[1];
    var selector = Object(p.useState)(false);
    var elem = Object(object.a)(selector, 2);
    var id = elem[0];
    var val = elem[1];
    var array = Object(p.useMemo)(function() {
      return files.filter(function(err) {
        return!def.includes(err);
      });
    }, [def, files]);
    Object(p.useEffect)(function() {
      if (index === state.DynamicPatameter) {
        /** @type {Array} */
        var p = [];
        if ("number" === kind) {
          p = update(kind);
        }
        if ("string" === kind) {
          p = update(kind);
        }
        children(p);
      }
    }, [kind, index]);
    /**
     * @param {HTMLFormElement} type
     * @return {undefined}
     */
    var reset = function(type) {
      type.elements;
    };
    /**
     * @param {?} output
     * @return {undefined}
     */
    var finished = function(output) {
      var lo = output.xpathType;
      dir(lo);
    };
    /**
     * @param {Object} handler
     * @return {undefined}
     */
    var queue = function(handler) {
      var selector = handler.selector;
      /** @type {Array} */
      var suiteView = [];
      var sel = selector[0];
      files.forEach(function(matches) {
        if (matches[sel]) {
          /** @type {Array} */
          suiteView = [Object(foo.a)({}, sel, matches[sel])];
        }
      });
      isUndefined(suiteView);
    };
    Object(p.useEffect)(function() {
      var r20;
      (dojo = new MySQLStore({
        opener : window.parent !== window.self ? window.parent : window.opener,
        callbacks : (r20 = {}, Object(foo.a)(r20, SetElements.SetSeletedDynamicParameters, reset), Object(foo.a)(r20, SetElements.SetXpathType, finished), Object(foo.a)(r20, SetElements.SelectedDynamicParametersSuccess, queue), r20)
      })).start();
    }, [files]);
    var data = Object(p.useCallback)(function(evt) {
      evt.preventDefault();
      var element = evt.target;
      if (element) {
        var i = isArray()(evt.target, {
          selectorTypes : ["ID", "Tag", "NthChild", "Class"]
        });
        if (array.some(function(defs) {
          return Object.keys(defs)[0] === i && ("number" === kind ? (defs[i][0].value = function(f) {
            var actual;
            /** @type {RegExp} */
            var re = /(\d+([\.,\s]\d+)*)/gm;
            /** @type {Array} */
            var listItems = [];
            for (;null !== (actual = re.exec(f));) {
              if (actual.index === re.lastIndex) {
                re.lastIndex++;
              }
              listItems.push(actual[0]);
            }
            /** @type {Array.<?>} */
            var mod = listItems.filter(function(qualifier) {
              return/\d/.test(qualifier);
            });
            return mod = mod.map(function(lastLine) {
              return lastLine.replace(/^[,.]|[,.]$/g, "");
            });
          }(element.innerText.trim()), defs[i][0].ori_value = element.innerText.trim(), MAP(defs)) : (defs[i][0].ori_value = element.innerText.trim(), MAP(defs)), true);
        })) {
          val(true);
        }
      }
      return false;
    }, [array, kind]);
    var conf = Object(p.useRef)(data);
    return Object(p.useEffect)(function() {
      conf.current = data;
    }, [data]), Object(p.useEffect)(function() {
      var completed = conf.current;
      return id ? document.removeEventListener("click", completed) : index === state.DynamicPatameter && document.addEventListener("click", completed, true), function() {
        document.removeEventListener("click", completed);
      };
    }, [id, index, array, kind]), [function(env) {
      /** @type {string} */
      var searchText = Object.keys(env)[0];
      var e = Object.values(env)[0][0];
      if ("number" === kind && (e.ori_value && e.value)) {
        var fromIndex = function(dirs, optionValue) {
          /** @type {Array} */
          var result = [];
          if (dirs.length > 1) {
            dirs.forEach(function(text, i) {
              var code = scan(text, i);
              result = result.concat(code);
            });
            result.push({
              valueFrom : optionValue,
              rule : context.KEEP,
              optionValue : optionValue,
              isArrayKeep : true
            });
          } else {
            var dir = dirs[0];
            result = scan(dir);
          }
          return result;
        }(e.value, e.ori_value);
        if (dojo) {
          dojo.pickupDynamicPemeterElememt(searchText, e.ori_value, fromIndex);
        }
        val(false);
      } else {
        if ("string" === kind) {
          if (e.ori_value) {
            if (dojo) {
              dojo.pickupDynamicPemeterElememt(searchText, e.ori_value);
            }
            val(false);
          }
        }
      }
    }, id, function() {
      val(false);
    }, element, array, def];
  };
  /** @type {string} */
  var i = "__tt_pixel_pickup_container";
  var type = that.a.div.withConfig({
    displayName : "Panel__PrimaryButton",
    componentId : "sc-1vh9zh8-0"
  })(["display:inline-flex;align-items:center;padding:3px 16px;margin-left:8px;font-size:12px;line-height:20px;background:#f8f9fa;border:1px solid #dadfe3;border-color:#dadfe3;color:#333;border-radius:4px;cursor:pointer;:hover,:active,:focus{background-color:#f8f9fa;color:#F60457;border-color:#F60457;}"]);
  var outerHTML = Object(that.a)(type).withConfig({
    displayName : "Panel__ConfirmButton",
    componentId : "sc-1vh9zh8-1"
  })(["color:#fff;background-color:#F60457;border-color:#F60457;:hover,:active,:focus{background:#D20251;border-color:#D20251;color:#fff;}"]);
  var elem = that.a.div.withConfig({
    displayName : "Panel__ElementBlock",
    componentId : "sc-1vh9zh8-2"
  })(["box-sizing:border-box;pointer-events:none;position:absolute;z-index:999999;background:rgba(52,81,247,0.3);border:2px solid #7B96FA;border-radius:4px;"]);
  var t = that.a.div.withConfig({
    displayName : "Panel__ElementIndex",
    componentId : "sc-1vh9zh8-3"
  })(["box-sizing:border-box;position:absolute;left:-1px;top:-21px;height:20px;line-height:20px;font-size:10px;padding:0 5px;color:#FFFFFF;white-space:nowrap;background:#3451F7;border-radius:4px 4px 0 0;"]);
  var cycle = that.a.div.withConfig({
    displayName : "Panel__ModalBlock",
    componentId : "sc-1vh9zh8-4"
  })(["box-sizing:border-box;position:absolute;z-index:999999;padding:16px;min-width:234px;background:#FFFFFF;border-radius:4px;font-size:14px;font-family:PingFang SC;outline:none;border:1px solid rgba(0,0,0,0.15);", ";"], function(dataAndEvents) {
    return "bottom" === dataAndEvents.triangleDirection ? '\n      &::before {\n        content: "";\n        position: absolute;\n        bottom: -6px;\n        left: 50%;\n        background: #ffffff;\n        width: 10px;\n        height: 10px;\n        transform: rotate(225deg);\n        border: 1px solid rgba(0,0,0,0.15);\n        border-right: 0;\n        border-bottom: 0;\n      }\n    ' : '\n    &::before {\n      content: "";\n      position: absolute;\n      top: -6px;\n      left: 50%;\n      background: #ffffff;\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      border: 1px solid rgba(0,0,0,0.15);\n      border-right: 0;\n      border-bottom: 0;\n    }\n  ';
  });
  var typeName = that.a.div.withConfig({
    displayName : "Panel__ModalHeader",
    componentId : "sc-1vh9zh8-5"
  })(["display:flex;justify-content:space-between;"]);
  var _tagName = that.a.div.withConfig({
    displayName : "Panel__ModalQuestion",
    componentId : "sc-1vh9zh8-6"
  })(["box-sizing:border-box;margin-bottom:10px;font-size:14px;color:#464D62;"]);
  var tagType = (that.a.div.withConfig({
    displayName : "Panel__ModalCloseIcon",
    componentId : "sc-1vh9zh8-7"
  })(["width:16px;height:16px;position:relative;top:-4px;background:url(", ");background-size:12px;background-position:center;background-repeat:no-repeat;cursor:pointer;"], jQuery(33)), that.a.div.withConfig({
    displayName : "Panel__ModalFooter",
    componentId : "sc-1vh9zh8-8"
  })(["box-sizing:border-box;text-align:right;div{margin-left:6px;}"]));
  /**
   * @param {?} options
   * @return {?}
   */
  var createElement = function(options) {
    var opts = options.targetElement;
    if (opts && (opts.height && (opts.left && (opts.top && opts.width)))) {
      var style = {
        height : "".concat(opts.height, "px"),
        left : "".concat(opts.left, "px"),
        top : "".concat(opts.top, "px"),
        width : "".concat(opts.width, "px"),
        pointerEvents : "none"
      };
      return d.a.createElement(elem, {
        style : style
      });
    }
    return d.a.createElement(d.a.Fragment, null);
  };
  /**
   * @param {HTMLFormElement} arr
   * @return {?}
   */
  var initialize = function(arr) {
    var e = arr.elements;
    return d.a.createElement(function() {
      var reversed = e.reduce(function(beginswith, i, subKey) {
        var caseSensitive = Object.values(i)[0].reduce(function(assigns, child) {
          var data = {
            height : "".concat(child.height, "px"),
            left : "".concat(child.left, "px"),
            top : "".concat(child.top, "px"),
            width : "".concat(child.width, "px"),
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            cursor : "pointer"
          };
          var vvar = d.a.createElement(elem, {
            key : subKey,
            style : data
          }, d.a.createElement(nodeStr, {
            theme : "filled",
            size : "18",
            fill : "#3451F7",
            strokeWidth : 2
          }));
          return assigns.push(vvar), assigns;
        }, []);
        return beginswith.concat(caseSensitive);
      }, []);
      return d.a.createElement(d.a.Fragment, null, reversed, " ");
    }, null);
  };
  /**
   * @param {HTMLFormElement} node
   * @return {?}
   */
  var a = function(node) {
    var fields = node.elements;
    return d.a.createElement(function() {
      var reversed = fields.reduce(function(beginswith, i, subKey) {
        var caseSensitive = Object.values(i)[0].reduce(function(assigns, child) {
          var data = {
            height : "".concat(child.height, "px"),
            left : "".concat(child.left, "px"),
            top : "".concat(child.top, "px"),
            width : "".concat(child.width, "px"),
            display : "flex",
            justifyContent : "center",
            alignItems : "center"
          };
          var vvar = d.a.createElement(elem, {
            key : subKey,
            style : data
          }, d.a.createElement(obj, {
            theme : "filled",
            size : "18",
            fill : "#3451F7",
            strokeWidth : 2
          }));
          return assigns.push(vvar), assigns;
        }, []);
        return beginswith.concat(caseSensitive);
      }, []);
      return d.a.createElement(d.a.Fragment, null, reversed, " ");
    }, null);
  };
  /**
   * @param {HTMLFormElement} obj
   * @return {?}
   */
  var self = function(obj) {
    var coords = obj.elements;
    var nodeStr = Object(p.useCallback)(function() {
      var reversed = coords.reduce(function(beginswith, i, no) {
        var caseSensitive = Object.values(i)[0].reduce(function(assigns, info) {
          var style = {
            height : "".concat(info.height, "px"),
            left : "".concat(info.left, "px"),
            top : "".concat(info.top, "px"),
            width : "".concat(info.width, "px")
          };
          var vvar = d.a.createElement(elem, {
            style : style
          }, d.a.createElement(t, null, row.a.t("pixel_create:click_events.iframe_element", {
            1 : info.elementIndex ? info.elementIndex : no
          }), row.a.t("external_action_18n:".concat(info.eventName)) ? ": " + row.a.t("external_action_18n:".concat(info.eventName)) : ""));
          return assigns.push(vvar), assigns;
        }, []);
        return beginswith.concat(caseSensitive);
      }, []);
      return d.a.createElement(d.a.Fragment, null, reversed, " ");
    }, [coords]);
    return d.a.createElement(nodeStr, null);
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  var create = function(options) {
    var full = options.isShow;
    var click = options.close;
    var i = options.targetElement;
    var setter = options.pickElement;
    var onClick = Object(p.useCallback)(function(dataAndEvents) {
      if (i) {
        setter(i);
      }
    }, [full]);
    if (full && i) {
      var elementRect = Object.values(i)[0][0];
      /** @type {string} */
      var valign = "top";
      var caseSensitive = elementRect.top + elementRect.height + 10;
      var left = elementRect.left + elementRect.width + 10;
      if (left < window.pageXOffset) {
        /** @type {number} */
        left = window.pageXOffset;
      } else {
        if (left + 270 > window.pageXOffset + window.innerWidth) {
          /** @type {number} */
          left = window.pageXOffset + window.innerWidth - 270;
        }
      }
      if (caseSensitive < window.pageYOffset) {
        /** @type {string} */
        valign = "top";
      } else {
        if (caseSensitive + 100 > window.pageYOffset + window.innerHeight) {
          /** @type {number} */
          caseSensitive = caseSensitive - 10 - 100 - elementRect.height;
          /** @type {string} */
          valign = "bottom";
        } else {
          /** @type {string} */
          valign = "top";
        }
      }
      var position = {
        left : "".concat(left, "px"),
        top : "".concat(caseSensitive, "px")
      };
      return d.a.createElement(cycle, {
        style : position,
        triangleDirection : valign
      }, d.a.createElement(typeName, null, d.a.createElement(_tagName, null, d.a.createElement("span", null, row.a.t("pixel_create:click_events.iframe_selection_text")))), d.a.createElement(tagType, null, d.a.createElement(type, {
        onClick : click
      }, d.a.createElement("span", null, row.a.t("pixel_create:click_events.iframe_selection_no"))), d.a.createElement(outerHTML, {
        onClick : onClick
      }, d.a.createElement("span", null, row.a.t("pixel_create:click_events.iframe_selection_yes")))));
    }
    return d.a.createElement(d.a.Fragment, null);
  };
  /**
   * @return {?}
   */
  var ready = function() {
    var depId = init();
    var module = Object(object.a)(depId, 7);
    var dependencies = module[0];
    var element = module[1];
    var exec = module[2];
    var close = module[3];
    var name = module[4];
    var value = module[5];
    var div = module[6];
    var values = start(value);
    var args = Object(object.a)(values, 6);
    var next = args[0];
    var pageY = args[1];
    var pageX = args[2];
    var target = args[3];
    var options = args[4];
    var id = args[5];
    /**
     * @param {Object} data
     * @return {undefined}
     */
    var completed = function(data) {
      if (data_user) {
        data_user.setCurrentUrl(data.destination.url);
      }
    };
    Object(p.useEffect)(function() {
      try {
        window.navigation.addEventListener("navigate", completed);
      } catch (e) {
      }
      return function() {
        try {
          window.navigation.removeEventListener("navigate", completed);
        } catch (e) {
        }
      };
    }, []);
    var targetElement = dependencies ? Object.values(dependencies)[0][0] : null;
    return div ? d.a.createElement("div", null) : d.a.createElement(d.a.Fragment, null, d.a.createElement(createElement, {
      targetElement : targetElement
    }), value === state.PickUp && d.a.createElement(self, {
      elements : element
    }), value === state.DynamicPatameter && d.a.createElement(d.a.Fragment, null, d.a.createElement(initialize, {
      elements : options
    }), d.a.createElement(a, {
      elements : id
    })), d.a.createElement(create, {
      isShow : exec,
      close : close,
      targetElement : dependencies,
      pickElement : name
    }), d.a.createElement(create, {
      isShow : pageY,
      close : pageX,
      targetElement : target,
      pickElement : next
    }));
  };
  setTimeout(function() {
    var el;
    var cDigit;
    /** @type {string} */
    (el = document.createElement("div")).id = i;
    /** @type {string} */
    el.style.position = "absolute";
    /** @type {string} */
    el.style.top = "0";
    /** @type {string} */
    el.style.left = "0";
    /** @type {string} */
    el.style.zIndex = "99999";
    document.documentElement.appendChild(el);
    if (cDigit = document.getElementById(i)) {
      node.a.render(d.a.createElement(ready, null), cDigit);
    } else {
      console.warn("has no ".concat(i));
    }
  }, 1E3);
}]);
