(window["webpackJsonp.TiktTokAnalytics"] = window["webpackJsonp.TiktTokAnalytics"] || []).push([[1], {
  /**
   * @param {?} dataAndEvents
   * @param {string} val
   * @param {Object} jQuery
   * @return {undefined}
   */
  "6rls" : function(dataAndEvents, val, jQuery) {
    /**
     * @param {Function} callback
     * @param {Array} args
     * @return {?}
     */
    function exec(callback, args) {
      /** @type {Array.<?>} */
      args = Array.prototype.slice.call(args);
      return args.push(grid), callback.apply(this, args);
    }
    /**
     * @param {string} dataAndEvents
     * @return {?}
     */
    function wrap(dataAndEvents) {
      return(wrap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dataAndEvents) {
        return typeof dataAndEvents;
      } : function(b) {
        return b && ("function" == typeof Symbol && (b.constructor === Symbol && b !== Symbol.prototype)) ? "symbol" : typeof b;
      })(dataAndEvents);
    }
    /**
     * @param {?} func
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function off(func, dataAndEvents) {
      var pending;
      /** @type {Array.<string>} */
      var newArgs = Object.keys(func);
      return Object.getOwnPropertySymbols && (pending = Object.getOwnPropertySymbols(func), dataAndEvents && (pending = pending.filter(function(uuid) {
        return Object.getOwnPropertyDescriptor(func, uuid).enumerable;
      })), newArgs.push.apply(newArgs, pending)), newArgs;
    }
    /**
     * @param {undefined} o
     * @return {?}
     */
    function toggle(o) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          off(Object(obj), true).forEach(function(val) {
            var object;
            var key;
            object = o;
            val = obj[key = val];
            if (key in object) {
              Object.defineProperty(object, key, {
                value : val,
                enumerable : true,
                configurable : true,
                writable : true
              });
            } else {
              /** @type {(Function|string)} */
              object[key] = val;
            }
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(o, Object.getOwnPropertyDescriptors(obj));
          } else {
            off(Object(obj)).forEach(function(prop) {
              Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(obj, prop));
            });
          }
        }
      }
      return o;
    }
    /**
     * @param {?} elements
     * @param {number} classNames
     * @return {?}
     */
    function add(elements, classNames) {
      return function(v) {
        if (Array.isArray(v)) {
          return v;
        }
      }(elements) || (function(elems, i) {
        var ret = null == elems ? null : "undefined" != typeof Symbol && elems[Symbol.iterator] || elems["@@iterator"];
        if (null != ret) {
          var rule;
          var bulk;
          /** @type {Array} */
          var matched = [];
          /** @type {boolean} */
          var callback2 = true;
          /** @type {boolean} */
          var a = false;
          try {
            ret = ret.call(elems);
            for (;!(callback2 = (rule = ret.next()).done) && (matched.push(rule.value), !i || matched.length !== i);callback2 = true) {
            }
          } catch (fn) {
            /** @type {boolean} */
            a = true;
            bulk = fn;
          } finally {
            try {
              if (!callback2) {
                if (!(null == ret.return)) {
                  ret.return();
                }
              }
            } finally {
              if (a) {
                throw bulk;
              }
            }
          }
          return matched;
        }
      }(elements, classNames) || (function(val, opt_classNames) {
        if (val) {
          if ("string" == typeof val) {
            return clone(val, opt_classNames);
          }
          /** @type {string} */
          var number = Object.prototype.toString.call(val).slice(8, -1);
          return "Map" === (number = "Object" === number && val.constructor ? val.constructor.name : number) || "Set" === number ? Array.from(val) : "Arguments" === number || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(number) ? clone(val, opt_classNames) : void 0;
        }
      }(elements, classNames) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()));
    }
    /**
     * @param {Array} arr
     * @param {Function} length
     * @return {?}
     */
    function clone(arr, length) {
      if (null == length || length > arr.length) {
        length = arr.length;
      }
      /** @type {number} */
      var i = 0;
      /** @type {Array} */
      var rv = new Array(length);
      for (;i < length;i++) {
        rv[i] = arr[i];
      }
      return rv;
    }
    /**
     * @param {Object} value
     * @return {?}
     */
    function listener(value) {
      var opts;
      var ret;
      var matches = add(Array.prototype.slice.call(value), 4);
      var v = matches[0];
      var name = matches[1];
      value = matches[2];
      matches = matches[3];
      if ("string" != typeof v) {
        throw new TypeError("A text for parsing must be a string.");
      }
      if (v = v, name && "string" != typeof name) {
        if (!func(name)) {
          throw new Error("Invalid second argument: ".concat(name));
        }
        ret = value ? (opts = name, value) : name;
      } else {
        ret = matches ? (opts = value, matches) : (opts = void 0, value);
        if (name) {
          opts = toggle({
            defaultCountry : name
          }, opts);
        }
      }
      return{
        text : v,
        options : opts,
        metadata : ret
      };
    }
    /**
     * @param {boolean} props
     * @return {?}
     */
    function mixin(props) {
      return(mixin = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a;
      } : function(b) {
        return b && ("function" == typeof Symbol && (b.constructor === Symbol && b !== Symbol.prototype)) ? "symbol" : typeof b;
      })(props);
    }
    /**
     * @param {?} p
     * @param {(Array|NodeList)} data
     * @return {undefined}
     */
    function defineProperty(p, data) {
      /** @type {number} */
      var i = 0;
      for (;i < data.length;i++) {
        var desc = data[i];
        desc.enumerable = desc.enumerable || false;
        /** @type {boolean} */
        desc.configurable = true;
        if ("value" in desc) {
          /** @type {boolean} */
          desc.writable = true;
        }
        Object.defineProperty(p, desc.key, desc);
      }
    }
    /**
     * @param {Function} value
     * @return {?}
     */
    function go(value) {
      var speed = isEmpty();
      return function() {
        var which;
        var v = call(value);
        return function(elems, c) {
          if (c && ("object" === mixin(c) || "function" == typeof c)) {
            return c;
          }
          if (void 0 !== c) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return toArray(elems);
        }(this, speed ? (which = call(this).constructor, Reflect.construct(v, arguments, which)) : v.apply(this, arguments));
      };
    }
    /**
     * @param {?} object
     * @return {?}
     */
    function toArray(object) {
      if (void 0 === object) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return object;
    }
    /**
     * @param {Function} title
     * @return {?}
     */
    function create(title) {
      var view = "function" == typeof Map ? new Map : void 0;
      return(create = function(element) {
        /**
         * @return {?}
         */
        function children() {
          return flatten(element, arguments, call(this).constructor);
        }
        if (null === element || (child = element, -1 === Function.toString.call(child).indexOf("[native code]"))) {
          return element;
        }
        var child;
        if ("function" != typeof element) {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (void 0 !== view) {
          if (view.has(element)) {
            return view.get(element);
          }
          view.set(element, children);
        }
        return children.prototype = Object.create(element.prototype, {
          constructor : {
            /** @type {function (): ?} */
            value : children,
            enumerable : false,
            writable : true,
            configurable : true
          }
        }), has(children, element);
      })(title);
    }
    /**
     * @param {Function} arr
     * @param {Object} array
     * @param {Function} object
     * @return {?}
     */
    function flatten(arr, array, object) {
      return(flatten = isEmpty() ? Reflect.construct : function(arr, args, object) {
        /** @type {Array} */
        var elements = [null];
        elements.push.apply(elements, args);
        elements = new (Function.bind.apply(arr, elements));
        return object && has(elements, object.prototype), elements;
      }).apply(null, arguments);
    }
    /**
     * @return {?}
     */
    function isEmpty() {
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
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (d) {
        return false;
      }
    }
    /**
     * @param {Function} target
     * @param {Object} attr
     * @return {?}
     */
    function has(target, attr) {
      return(has = Object.setPrototypeOf || function(arr, obj) {
        return arr.__proto__ = obj, arr;
      })(target, attr);
    }
    /**
     * @param {Function} number
     * @return {?}
     */
    function call(number) {
      return(call = Object.setPrototypeOf ? Object.getPrototypeOf : function(obj) {
        return obj.__proto__ || Object.getPrototypeOf(obj);
      })(number);
    }
    /**
     * @param {string} xs
     * @return {?}
     */
    function extend(xs) {
      return(extend = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(xs) {
        return typeof xs;
      } : function(b) {
        return b && ("function" == typeof Symbol && (b.constructor === Symbol && b !== Symbol.prototype)) ? "symbol" : typeof b;
      })(xs);
    }
    /**
     * @param {?} dataAndEvents
     * @param {Function} out
     * @return {undefined}
     */
    function handle(dataAndEvents, out) {
      if (!(dataAndEvents instanceof out)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {Function} object
     * @param {Array} d
     * @return {undefined}
     */
    function deepClone(object, d) {
      /** @type {number} */
      var i = 0;
      for (;i < d.length;i++) {
        var desc = d[i];
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
     * @param {Function} child
     * @param {Array} opt_attributes
     * @param {(Array|string)} event
     * @return {?}
     */
    function transitionDone(child, opt_attributes, event) {
      return opt_attributes && deepClone(child.prototype, opt_attributes), event && deepClone(child, event), Object.defineProperty(child, "prototype", {
        writable : false
      }), child;
    }
    /**
     * @param {Array} fromClass
     * @param {string} dataAndEvents
     * @return {?}
     */
    function swap(fromClass, dataAndEvents) {
      switch(dataAndEvents) {
        case "FIXED_LINE":
          return fromClass[0];
        case "MOBILE":
          return fromClass[1];
        case "TOLL_FREE":
          return fromClass[2];
        case "PREMIUM_RATE":
          return fromClass[3];
        case "PERSONAL_NUMBER":
          return fromClass[4];
        case "VOICEMAIL":
          return fromClass[5];
        case "UAN":
          return fromClass[6];
        case "PAGER":
          return fromClass[7];
        case "VOIP":
          return fromClass[8];
        case "SHARED_COST":
          return fromClass[9];
      }
    }
    /**
     * @param {string} prop
     * @param {(Element|string)} node
     * @return {?}
     */
    function push(prop, node) {
      if ((node = new Node(node)).hasCountry(prop)) {
        return node.country(prop).countryCallingCode();
      }
      throw new Error("Unknown country: ".concat(prop));
    }
    /**
     * @param {number} json
     * @return {undefined}
     */
    function set(json) {
      json = json.version;
      if ("number" == typeof json) {
        /** @type {boolean} */
        this.v1 = 1 === json;
        /** @type {boolean} */
        this.v2 = 2 === json;
        /** @type {boolean} */
        this.v3 = 3 === json;
        /** @type {boolean} */
        this.v4 = 4 === json;
      } else {
        if (json) {
          if (-1 === normalize(json, parentName)) {
            /** @type {boolean} */
            this.v2 = true;
          } else {
            if (-1 === normalize(json, oldconfig)) {
              /** @type {boolean} */
              this.v3 = true;
            } else {
              /** @type {boolean} */
              this.v4 = true;
            }
          }
        } else {
          /** @type {boolean} */
          this.v1 = true;
        }
      }
    }
    /**
     * @param {string} statements
     * @return {?}
     */
    function redo_if(statements) {
      return "([".concat(caseSensitive, "]{1,").concat(statements, "})");
    }
    /**
     * @return {?}
     */
    function charSet() {
      /** @type {string} */
      var to = "[  \\t,]*";
      /** @type {string} */
      var parent = "[:\\.\uff0e]?[  \\t,-]*";
      /** @type {string} */
      var child = "[  \\t]*";
      return ";ext=" + redo_if("20") + "|" + (to + "(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|anexo)" + parent + redo_if("20") + "#?") + "|" + (to + "(?:[x\uff58#\uff03~\uff5e]|int|\uff49\uff4e\uff54)" + parent + redo_if("9") + "#?") + "|" + ("[- ]+" + redo_if("6") + "#") + "|" + (child + "(?:,{2}|;)" + parent + redo_if("15") + "#?") + "|" + (child + "(?:,)+" + parent + redo_if("9") + "#?");
    }
    /**
     * @param {Array} value
     * @return {?}
     */
    function addClass(value) {
      return value.length >= len && regexp.test(value);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    function detachEvent(evt) {
      return eventList[evt];
    }
    /**
     * @param {Object} result
     * @param {Object} signal_eof
     * @return {?}
     */
    function next(result, signal_eof) {
      var matches = "undefined" != typeof Symbol && result[Symbol.iterator] || result["@@iterator"];
      if (matches) {
        return(matches = matches.call(result)).next.bind(matches);
      }
      if (Array.isArray(result) || ((matches = function(arg, type) {
        if (arg) {
          if ("string" == typeof arg) {
            return error(arg, type);
          }
          /** @type {string} */
          var peek = Object.prototype.toString.call(arg).slice(8, -1);
          return "Map" === (peek = "Object" === peek && arg.constructor ? arg.constructor.name : peek) || "Set" === peek ? Array.from(arg) : "Arguments" === peek || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(peek) ? error(arg, type) : void 0;
        }
      }(result)) || signal_eof && (result && "number" == typeof result.length))) {
        if (matches) {
          result = matches;
        }
        /** @type {number} */
        var j = 0;
        return function() {
          return j >= result.length ? {
            done : true
          } : {
            done : false,
            value : result[j++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    /**
     * @param {Array} args
     * @param {number} c
     * @return {?}
     */
    function error(args, c) {
      if (null == c || c > args.length) {
        c = args.length;
      }
      /** @type {number} */
      var i = 0;
      /** @type {Array} */
      var map = new Array(c);
      for (;i < c;i++) {
        map[i] = args[i];
      }
      return map;
    }
    /**
     * @param {string} url
     * @return {?}
     */
    function loaded(url) {
      var _ref;
      /** @type {string} */
      var version = "";
      var resolve = next(url.split(""));
      for (;!(_ref = resolve()).done;) {
        var win = _ref.value;
        version += (_ref = version, ("+" !== (win = win) ? detachEvent(win) : _ref ? void 0 : "+") || "");
      }
      return version;
    }
    /**
     * @param {Object} parts
     * @param {Object} execResult
     * @return {?}
     */
    function parse(parts, execResult) {
      var local = "undefined" != typeof Symbol && parts[Symbol.iterator] || parts["@@iterator"];
      if (local) {
        return(local = local.call(parts)).next.bind(local);
      }
      if (Array.isArray(parts) || ((local = function(str, width) {
        if (str) {
          if ("string" == typeof str) {
            return pad(str, width);
          }
          /** @type {string} */
          var peek = Object.prototype.toString.call(str).slice(8, -1);
          return "Map" === (peek = "Object" === peek && str.constructor ? str.constructor.name : peek) || "Set" === peek ? Array.from(str) : "Arguments" === peek || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(peek) ? pad(str, width) : void 0;
        }
      }(parts)) || execResult && (parts && "number" == typeof parts.length))) {
        if (local) {
          parts = local;
        }
        /** @type {number} */
        var position = 0;
        return function() {
          return position >= parts.length ? {
            done : true
          } : {
            done : false,
            value : parts[position++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    /**
     * @param {Array} data
     * @param {Function} len
     * @return {?}
     */
    function pad(data, len) {
      if (null == len || len > data.length) {
        len = data.length;
      }
      /** @type {number} */
      var i = 0;
      /** @type {Array} */
      var out = new Array(len);
      for (;i < len;i++) {
        out[i] = data[i];
      }
      return out;
    }
    /**
     * @param {string} result
     * @param {Object} event
     * @return {?}
     */
    function cb(result, event) {
      var bProperties = result.slice();
      var info = parse(event);
      for (;!(i = info()).done;) {
        var i = i.value;
        if (result.indexOf(i) < 0) {
          bProperties.push(i);
        }
      }
      return bProperties.sort(function(far, near) {
        return far - near;
      });
    }
    /**
     * @param {?} object
     * @param {?} i
     * @return {?}
     */
    function slice(object, i) {
      return function flatten(item, key, output) {
        var value = output.type(key);
        var items = value && value.possibleLengths() || output.possibleLengths();
        if (!items) {
          return "IS_POSSIBLE";
        }
        if ("FIXED_LINE_OR_MOBILE" === key) {
          if (!output.type("FIXED_LINE")) {
            return flatten(item, "MOBILE", output);
          }
          output = output.type("MOBILE");
          if (output) {
            items = cb(items, output.possibleLengths());
          }
        } else {
          if (key && !value) {
            return "INVALID_LENGTH";
          }
        }
        value = item.length;
        item = items[0];
        if (item === value) {
          return "IS_POSSIBLE";
        }
        if (value < item) {
          return "TOO_SHORT";
        }
        if (items[items.length - 1] < value) {
          return "TOO_LONG";
        }
        return 0 <= items.indexOf(value, 1) ? "IS_POSSIBLE" : "INVALID_LENGTH";
      }(object, void 0, i);
    }
    /**
     * @param {?} array
     * @param {string} state
     * @return {?}
     */
    function callback(array, state) {
      return "IS_POSSIBLE" === slice(array, state);
    }
    /**
     * @param {string} string
     * @param {string} consume
     * @return {?}
     */
    function match(string, consume) {
      return string = string || "", (new RegExp("^(?:" + consume + ")$")).test(string);
    }
    /**
     * @param {Object} parts
     * @param {Object} selfObj
     * @return {?}
     */
    function bind(parts, selfObj) {
      var local = "undefined" != typeof Symbol && parts[Symbol.iterator] || parts["@@iterator"];
      if (local) {
        return(local = local.call(parts)).next.bind(local);
      }
      if (Array.isArray(parts) || ((local = function(str, d) {
        if (str) {
          if ("string" == typeof str) {
            return p(str, d);
          }
          /** @type {string} */
          var peek = Object.prototype.toString.call(str).slice(8, -1);
          return "Map" === (peek = "Object" === peek && str.constructor ? str.constructor.name : peek) || "Set" === peek ? Array.from(str) : "Arguments" === peek || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(peek) ? p(str, d) : void 0;
        }
      }(parts)) || selfObj && (parts && "number" == typeof parts.length))) {
        if (local) {
          parts = local;
        }
        /** @type {number} */
        var position = 0;
        return function() {
          return position >= parts.length ? {
            done : true
          } : {
            done : false,
            value : parts[position++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    /**
     * @param {Array} args
     * @param {Function} c
     * @return {?}
     */
    function p(args, c) {
      if (null == c || c > args.length) {
        c = args.length;
      }
      /** @type {number} */
      var i = 0;
      /** @type {Array} */
      var map = new Array(c);
      for (;i < c;i++) {
        map[i] = args[i];
      }
      return map;
    }
    /**
     * @param {?} args
     * @param {Object} tags
     * @param {Event} param
     * @return {?}
     */
    function fn(args, tags, param) {
      if (tags = tags || {}, args.country) {
        (param = new Node(param)).selectNumberingPlan(args.country, args.countryCallingCode);
        var div = tags.v2 ? args.nationalNumber : args.phone;
        if (match(div, param.nationalNumberPattern())) {
          if (css(div, "FIXED_LINE", param)) {
            return param.type("MOBILE") && "" === param.type("MOBILE").pattern() || (!param.type("MOBILE") || css(div, "MOBILE", param)) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
          }
          var connect = bind(event);
          for (;!(attr = connect()).done;) {
            var attr = attr.value;
            if (css(div, attr, param)) {
              return attr;
            }
          }
        }
      }
    }
    /**
     * @param {string} c
     * @param {Object} key
     * @param {Event} value
     * @return {?}
     */
    function css(c, key, value) {
      return(key = value.type(key)) && (key.pattern() && (!(key.possibleLengths() && key.possibleLengths().indexOf(c.length) < 0) && match(c, key.pattern())));
    }
    /**
     * @param {Array} list
     * @param {Array} hash
     * @param {Array} ast
     * @return {?}
     */
    function write(list, hash, ast) {
      list = (new Node(ast)).getCountryCodesForCallingCode(list);
      return list ? list.filter(function(deepDataAndEvents) {
        return function(symbol, deepDataAndEvents, node) {
          node = new Node(node);
          if (node.selectNumberingPlan(deepDataAndEvents), 0 <= node.numberingPlan.possibleLengths().indexOf(symbol.length)) {
            return true;
          }
          return false;
        }(hash, deepDataAndEvents, ast);
      }) : [];
    }
    /**
     * @param {string} src
     * @param {string} p
     * @param {(Object|string)} config
     * @return {?}
     */
    function init(src, p, config) {
      var prefix = config.useInternationalFormat;
      var channel = config.withNationalPrefix;
      p = (config.carrierCode, config.metadata, src.replace(new RegExp(p.pattern()), prefix ? p.internationalFormat() : channel && p.nationalPrefixFormattingRule() ? p.format().replace(r20, p.nationalPrefixFormattingRule()) : p.format()));
      return prefix ? p.replace(new RegExp("[".concat(keywords, "]+"), "g"), " ").trim() : p;
    }
    /**
     * @param {Object} result
     * @param {Object} not
     * @return {?}
     */
    function filter(result, not) {
      var matches = "undefined" != typeof Symbol && result[Symbol.iterator] || result["@@iterator"];
      if (matches) {
        return(matches = matches.call(result)).next.bind(matches);
      }
      if (Array.isArray(result) || ((matches = function(a, resp) {
        if (a) {
          if ("string" == typeof a) {
            return success(a, resp);
          }
          /** @type {string} */
          var peek = Object.prototype.toString.call(a).slice(8, -1);
          return "Map" === (peek = "Object" === peek && a.constructor ? a.constructor.name : peek) || "Set" === peek ? Array.from(a) : "Arguments" === peek || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(peek) ? success(a, resp) : void 0;
        }
      }(result)) || not && (result && "number" == typeof result.length))) {
        if (matches) {
          result = matches;
        }
        /** @type {number} */
        var j = 0;
        return function() {
          return j >= result.length ? {
            done : true
          } : {
            done : false,
            value : result[j++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    /**
     * @param {Array} data
     * @param {Function} count
     * @return {?}
     */
    function success(data, count) {
      if (null == count || count > data.length) {
        count = data.length;
      }
      /** @type {number} */
      var i = 0;
      /** @type {Array} */
      var out = new Array(count);
      for (;i < count;i++) {
        out[i] = data[i];
      }
      return out;
    }
    /**
     * @param {?} source
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function execute(source, dataAndEvents) {
      var files;
      /** @type {Array.<string>} */
      var newArgs = Object.keys(source);
      return Object.getOwnPropertySymbols && (files = Object.getOwnPropertySymbols(source), dataAndEvents && (files = files.filter(function(uuid) {
        return Object.getOwnPropertyDescriptor(source, uuid).enumerable;
      })), newArgs.push.apply(newArgs, files)), newArgs;
    }
    /**
     * @param {undefined} object
     * @return {?}
     */
    function each(object) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          execute(Object(obj), true).forEach(function(val) {
            var parent;
            var key;
            parent = object;
            val = obj[key = val];
            if (key in parent) {
              Object.defineProperty(parent, key, {
                value : val,
                enumerable : true,
                configurable : true,
                writable : true
              });
            } else {
              /** @type {(Function|string)} */
              parent[key] = val;
            }
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(object, Object.getOwnPropertyDescriptors(obj));
          } else {
            execute(Object(obj)).forEach(function(prop) {
              Object.defineProperty(object, prop, Object.getOwnPropertyDescriptor(obj, prop));
            });
          }
        }
      }
      return object;
    }
    /**
     * @param {Object} options
     * @param {string} func
     * @param {HTMLElement} item
     * @param {Object} value
     * @return {?}
     */
    function compile(options, func, item, value) {
      if (item = item ? each(each({}, i), item) : i, value = new Node(value), options.country && "001" !== options.country) {
        if (!value.hasCountry(options.country)) {
          throw new Error("Unknown country: ".concat(options.country));
        }
        value.country(options.country);
      } else {
        if (!options.countryCallingCode) {
          return options.phone || "";
        }
        value.selectNumberingPlan(options.countryCallingCode);
      }
      var keys;
      var children = value.countryCallingCode();
      var val = item.v2 ? options.nationalNumber : options.phone;
      switch(func) {
        case "NATIONAL":
          return val ? log(keys = map(val, options.carrierCode, "NATIONAL", value, item), options.ext, value, item.formatExtension) : "";
        case "INTERNATIONAL":
          return val ? (keys = map(val, null, "INTERNATIONAL", value, item), log(keys = "+".concat(children, " ").concat(keys), options.ext, value, item.formatExtension)) : "+".concat(children);
        case "E.164":
          return "+".concat(children).concat(val);
        case "RFC3966":
          return function(res) {
            /** @type {string} */
            var out = res.number;
            res = res.ext;
            if (!out) {
              return "";
            }
            if ("+" !== out[0]) {
              throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
            }
            return "tel:".concat(out).concat(res ? ";ext=" + res : "");
          }({
            number : "+".concat(children).concat(val),
            ext : options.ext
          });
        case "IDD":
          return item.fromCountry ? log(function(node, y, x, a, value) {
            if (push(a, value.metadata) === x) {
              y = map(node, y, "NATIONAL", value);
              return "1" === x ? x + " " + y : y;
            }
            a = function(v02, opt_attributes, embed) {
              return(embed = new Node(embed)).selectNumberingPlan(v02, opt_attributes), embed.defaultIDDPrefix() ? embed.defaultIDDPrefix() : reWhitespace.test(embed.IDDPrefix()) ? embed.IDDPrefix() : void 0;
            }(a, void 0, value.metadata);
            if (a) {
              return "".concat(a, " ").concat(x, " ").concat(map(node, null, "INTERNATIONAL", value));
            }
          }(val, options.carrierCode, children, item.fromCountry, value), options.ext, value, item.formatExtension) : void 0;
        default:
          throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(func, '"'));;
      }
    }
    /**
     * @param {string} id
     * @param {Function} min2
     * @param {string} reject
     * @param {Object} fn
     * @param {Object} callback
     * @return {?}
     */
    function map(id, min2, reject, fn, callback) {
      var path = function(path, search) {
        var resolved = filter(path);
        for (;!(input = resolved()).done;) {
          var value = input.value;
          if (0 < value.leadingDigitsPatterns().length) {
            var input = value.leadingDigitsPatterns()[value.leadingDigitsPatterns().length - 1];
            if (0 !== search.search(input)) {
              continue;
            }
          }
          if (match(search, value.pattern())) {
            return value;
          }
        }
      }(fn.formats(), id);
      return path ? init(id, path, {
        useInternationalFormat : "INTERNATIONAL" === reject,
        withNationalPrefix : !path.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || (!callback || false !== callback.nationalPrefix),
        /** @type {Function} */
        carrierCode : min2,
        metadata : fn
      }) : id;
    }
    /**
     * @param {string} out
     * @param {?} test
     * @param {Object} obj
     * @param {?} callback
     * @return {?}
     */
    function log(out, test, obj, callback) {
      return test ? callback(out, test, obj) : out;
    }
    /**
     * @param {?} ext
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function merge(ext, dataAndEvents) {
      var pending;
      /** @type {Array.<string>} */
      var newArgs = Object.keys(ext);
      return Object.getOwnPropertySymbols && (pending = Object.getOwnPropertySymbols(ext), dataAndEvents && (pending = pending.filter(function(uuid) {
        return Object.getOwnPropertyDescriptor(ext, uuid).enumerable;
      })), newArgs.push.apply(newArgs, pending)), newArgs;
    }
    /**
     * @param {undefined} o
     * @return {?}
     */
    function override(o) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          merge(Object(obj), true).forEach(function(val) {
            var object;
            var key;
            object = o;
            val = obj[key = val];
            if (key in object) {
              Object.defineProperty(object, key, {
                value : val,
                enumerable : true,
                configurable : true,
                writable : true
              });
            } else {
              /** @type {string} */
              object[key] = val;
            }
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(o, Object.getOwnPropertyDescriptors(obj));
          } else {
            merge(Object(obj)).forEach(function(prop) {
              Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(obj, prop));
            });
          }
        }
      }
      return o;
    }
    /**
     * @param {?} value
     * @param {(Array|NodeList)} obj
     * @return {undefined}
     */
    function iterator(value, obj) {
      /** @type {number} */
      var i = 0;
      for (;i < obj.length;i++) {
        var desc = obj[i];
        desc.enumerable = desc.enumerable || false;
        /** @type {boolean} */
        desc.configurable = true;
        if ("value" in desc) {
          /** @type {boolean} */
          desc.writable = true;
        }
        Object.defineProperty(value, desc.key, desc);
      }
    }
    /**
     * @param {string} key
     * @param {?} name
     * @return {?}
     */
    function load(key, name) {
      var environment;
      var elem = function(url, keepData) {
        if (url && keepData.numberingPlan.nationalPrefixForParsing()) {
          /** @type {RegExp} */
          var regex = new RegExp("^(?:" + keepData.numberingPlan.nationalPrefixForParsing() + ")");
          /** @type {(Array.<string>|null)} */
          var matches = regex.exec(url);
          if (matches) {
            var m;
            var text;
            var match;
            /** @type {number} */
            var sel = matches.length - 1;
            /** @type {(boolean|string)} */
            var i = 0 < sel && matches[sel];
            return keepData.nationalPrefixTransformRule() && i ? (text = url.replace(regex, keepData.nationalPrefixTransformRule()), 1 < sel && (m = matches[1])) : (sel = matches[0], text = url.slice(sel.length), i && (m = matches[1])), i ? (i = url.indexOf(matches[1]), url.slice(0, i) === keepData.numberingPlan.nationalPrefix() && (match = keepData.numberingPlan.nationalPrefix())) : match = matches[0], {
              nationalNumber : text,
              nationalPrefix : match,
              carrierCode : m
            };
          }
        }
        return{
          nationalNumber : url
        };
      }(key, name);
      var nodeType = elem.carrierCode;
      var udataCur = elem.nationalNumber;
      if (udataCur !== key) {
        if (environment = udataCur, match(key, (elem = name).nationalNumberPattern()) && !match(environment, elem.nationalNumberPattern())) {
          return{
            nationalNumber : key
          };
        }
        if (name.possibleLengths() && !function(value, dataName) {
          switch(slice(value, dataName)) {
            case "TOO_SHORT":
            ;
            case "INVALID_LENGTH":
              return false;
            default:
              return true;
          }
        }(udataCur, name)) {
          return{
            nationalNumber : key
          };
        }
      }
      return{
        nationalNumber : udataCur,
        carrierCode : nodeType
      };
    }
    /**
     * @param {string} text
     * @param {boolean} data
     * @param {Object} s
     * @param {Text} n
     * @return {?}
     */
    function search(text, data, s, n) {
      if (!text) {
        return{};
      }
      var countryCallingCodeSource;
      if ("+" !== text[0]) {
        var m = function(data, _, v02, arg) {
          if (_) {
            arg = new Node(arg);
            arg.selectNumberingPlan(_, v02);
            /** @type {RegExp} */
            arg = new RegExp(arg.IDDPrefix());
            if (0 === data.search(arg)) {
              arg = (data = data.slice(data.match(arg)[0].length)).match(typePattern);
              if (!(arg && (null != arg[1] && (0 < arg[1].length && "0" === arg[1])))) {
                return data;
              }
            }
          }
        }(text, data, s, n);
        if (!m || m === text) {
          if (data || s) {
            data = function(type, key, object, n) {
              var self = key ? push(key, n) : object;
              if (0 === type.indexOf(self)) {
                (n = new Node(n)).selectNumberingPlan(key, object);
                var camelKey = type.slice(self.length);
                key = load(camelKey, n).nationalNumber;
                object = load(type, n).nationalNumber;
                if (!match(object, n.nationalNumberPattern()) && match(key, n.nationalNumberPattern()) || "TOO_LONG" === slice(object, n)) {
                  return{
                    countryCallingCode : self,
                    number : camelKey
                  };
                }
              }
              return{
                number : type
              };
            }(text, data, s, n);
            s = data.countryCallingCode;
            data = data.number;
            if (s) {
              return{
                countryCallingCodeSource : "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                countryCallingCode : s,
                number : data
              };
            }
          }
          return{
            number : text
          };
        }
        /** @type {boolean} */
        countryCallingCodeSource = true;
        /** @type {string} */
        text = "+" + m;
      }
      if ("0" === text[1]) {
        return{};
      }
      n = new Node(n);
      /** @type {number} */
      var index = 2;
      for (;index - 1 <= y && index <= text.length;) {
        var current = text.slice(1, index);
        if (n.hasCallingCode(current)) {
          return n.selectNumberingPlan(current), {
            countryCallingCodeSource : countryCallingCodeSource ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
            countryCallingCode : current,
            number : text.slice(index)
          };
        }
        index++;
      }
      return{};
    }
    /**
     * @param {Object} result
     * @param {Object} component
     * @return {?}
     */
    function test(result, component) {
      var matches = "undefined" != typeof Symbol && result[Symbol.iterator] || result["@@iterator"];
      if (matches) {
        return(matches = matches.call(result)).next.bind(matches);
      }
      if (Array.isArray(result) || ((matches = function(a, val) {
        if (a) {
          if ("string" == typeof a) {
            return ondata(a, val);
          }
          /** @type {string} */
          var peek = Object.prototype.toString.call(a).slice(8, -1);
          return "Map" === (peek = "Object" === peek && a.constructor ? a.constructor.name : peek) || "Set" === peek ? Array.from(a) : "Arguments" === peek || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(peek) ? ondata(a, val) : void 0;
        }
      }(result)) || component && (result && "number" == typeof result.length))) {
        if (matches) {
          result = matches;
        }
        /** @type {number} */
        var j = 0;
        return function() {
          return j >= result.length ? {
            done : true
          } : {
            done : false,
            value : result[j++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    /**
     * @param {Array} data
     * @param {Function} val
     * @return {?}
     */
    function ondata(data, val) {
      if (null == val || val > data.length) {
        val = data.length;
      }
      /** @type {number} */
      var prop = 0;
      /** @type {Array} */
      var cache = new Array(val);
      for (;prop < val;prop++) {
        cache[prop] = data[prop];
      }
      return cache;
    }
    /**
     * @param {Object} line
     * @param {(Object|string)} result
     * @return {?}
     */
    function done(line, result) {
      var failuresLink = result.nationalNumber;
      var msg = result.defaultCountry;
      result = result.metadata;
      if (maybe_code && result.isNonGeographicCallingCode(line)) {
        return "001";
      }
      line = result.getCountryCodesForCallingCode(line);
      return line ? 1 === line.length ? line[0] : function(el, item) {
        var elem = item.countries;
        var value = item.defaultCountry;
        var data = item.metadata;
        data = new Node(data);
        /** @type {Array} */
        var spec = [];
        var queue = test(elem);
        for (;!(func = queue()).done;) {
          var func = func.value;
          if (data.country(func), data.leadingDigits()) {
            if (el && 0 === el.search(data.leadingDigits())) {
              return func;
            }
          } else {
            if (fn({
              phone : el,
              country : func
            }, void 0, data.metadata)) {
              if (!value) {
                return func;
              }
              if (func === value) {
                return func;
              }
              spec.push(func);
            }
          }
        }
        if (0 < spec.length) {
          return spec[0];
        }
      }(failuresLink, {
        countries : line,
        defaultCountry : msg,
        metadata : result.metadata
      }) : void 0;
    }
    /**
     * @param {string} a
     * @param {string} content
     * @return {?}
     */
    function render(a, content) {
      var buffer;
      var c = content.extractFormattedPhoneNumber;
      var chunk = function(b) {
        var end = b.indexOf(closeTag);
        if (end < 0) {
          return null;
        }
        var start = end + closeTag.length;
        return start >= b.length ? "" : 0 <= (end = b.indexOf(";", start)) ? b.substring(start, end) : b.substring(start);
      }(a);
      if (null !== (content = chunk) && (0 === content.length || !rgx.test(content) && !regex.test(content))) {
        throw new Buffer("NOT_A_NUMBER");
      }
      if (null === chunk) {
        buffer = c(a) || "";
      } else {
        /** @type {string} */
        buffer = "";
        if (chunk.charAt(0) === r) {
          buffer += chunk;
        }
        chunk = 0 <= (index = a.indexOf(separator)) ? index + separator.length : 0;
        index = a.indexOf(closeTag);
        buffer += a.substring(chunk, index);
      }
      var index = buffer.indexOf(toFind);
      if ("" !== (buffer = 0 < index ? buffer.substring(0, index) : buffer)) {
        return buffer;
      }
    }
    /**
     * @param {Object} x
     * @param {Object} options
     * @param {Object} doc
     * @return {?}
     */
    function update(x, options, doc) {
      if (options = options || {}, doc = new Node(doc), options.defaultCountry && !doc.hasCountry(options.defaultCountry)) {
        if (options.v2) {
          throw new Buffer("INVALID_COUNTRY");
        }
        throw new Error("Unknown country: ".concat(options.defaultCountry));
      }
      var item = function(item, deepDataAndEvents, opt_i) {
        var content = render(item, {
          /**
           * @param {string} result
           * @return {?}
           */
          extractFormattedPhoneNumber : function(result) {
            return function(text, index, deepDataAndEvents) {
              if (text) {
                if (!(text.length > MAX_LENGTH)) {
                  if (false === index) {
                    return text;
                  }
                  index = text.search(query);
                  return index < 0 ? void 0 : text.slice(index).replace(rclass, "");
                }
                if (deepDataAndEvents) {
                  throw new Buffer("TOO_LONG");
                }
              }
            }(result, opt_i, deepDataAndEvents);
          }
        });
        if (!content) {
          return{};
        }
        if (!addClass(content)) {
          return function(url) {
            return matcher.test(url);
          }(content) ? {
            error : "TOO_SHORT"
          } : {};
        }
        item = function(line) {
          var index = line.search(re);
          if (index < 0) {
            return{};
          }
          var current = line.slice(0, index);
          var codeSegments = line.match(re);
          /** @type {number} */
          var i = 1;
          for (;i < codeSegments.length;) {
            if (codeSegments[i]) {
              return{
                number : current,
                ext : codeSegments[i]
              };
            }
            i++;
          }
        }(content);
        if (item.ext) {
          return item;
        }
        return{
          number : content
        };
      }(x, options.v2, options.extract);
      var content = item.number;
      var ext = item.ext;
      var args = item.error;
      if (!content) {
        if (options.v2) {
          if ("TOO_SHORT" === args) {
            throw new Buffer("TOO_SHORT");
          }
          throw new Buffer("NOT_A_NUMBER");
        }
        return{};
      }
      var data = function(content, text, options, obj) {
        var prop;
        var current = search(loaded(content), text, options, obj.metadata);
        var cl = current.countryCallingCodeSource;
        content = current.countryCallingCode;
        current = current.number;
        if (content) {
          obj.selectNumberingPlan(content);
        } else {
          if (!current || !text && !options) {
            return{};
          }
          obj.selectNumberingPlan(text, options);
          if (text) {
            /** @type {(Function|string)} */
            prop = text;
          } else {
            if (zd) {
              if (obj.isNonGeographicCallingCode(options)) {
                /** @type {string} */
                prop = "001";
              }
            }
          }
          content = options || push(text, obj.metadata);
        }
        if (!current) {
          return{
            countryCallingCodeSource : cl,
            countryCallingCode : content
          };
        }
        options = load(loaded(current), obj);
        current = options.nationalNumber;
        options = options.carrierCode;
        text = done(content, {
          nationalNumber : current,
          defaultCountry : text,
          metadata : obj
        });
        if (text) {
          if (!("001" === (prop = text))) {
            obj.country(prop);
          }
        }
        return{
          country : prop,
          countryCallingCode : content,
          countryCallingCodeSource : cl,
          nationalNumber : current,
          carrierCode : options
        };
      }(content, options.defaultCountry, options.defaultCallingCode, doc);
      x = data.country;
      item = data.nationalNumber;
      args = data.countryCallingCode;
      content = data.countryCallingCodeSource;
      data = data.carrierCode;
      if (!doc.hasSelectedNumberingPlan()) {
        if (options.v2) {
          throw new Buffer("INVALID_COUNTRY");
        }
        return{};
      }
      if (!item || item.length < len) {
        if (options.v2) {
          throw new Buffer("TOO_SHORT");
        }
        return{};
      }
      if (item.length > maxItemLength) {
        if (options.v2) {
          throw new Buffer("TOO_LONG");
        }
        return{};
      }
      if (options.v2) {
        var result = new PluginResult(args, item, doc.metadata);
        return x && (result.country = x), data && (result.carrierCode = data), ext && (result.ext = ext), result.__countryCallingCodeSource = content, result;
      }
      result = !(options.extended ? !doc.hasSelectedNumberingPlan() : !x) && match(item, doc.nationalNumberPattern());
      return options.extended ? {
        country : x,
        countryCallingCode : args,
        carrierCode : data,
        valid : result,
        possible : !!result || !(true !== options.extended || (!doc.possibleLengths() || !callback(item, doc))),
        phone : item,
        ext : ext
      } : result ? function(v00, item, ext) {
        item = {
          country : v00,
          phone : item
        };
        if (ext) {
          /** @type {string} */
          item.ext = ext;
        }
        return item;
      }(x, item, ext) : {};
    }
    /**
     * @param {?} obj
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function cleanup(obj, dataAndEvents) {
      var elems;
      /** @type {Array.<string>} */
      var names = Object.keys(obj);
      return Object.getOwnPropertySymbols && (elems = Object.getOwnPropertySymbols(obj), dataAndEvents && (elems = elems.filter(function(uuid) {
        return Object.getOwnPropertyDescriptor(obj, uuid).enumerable;
      })), names.push.apply(names, elems)), names;
    }
    /**
     * @param {undefined} o
     * @return {?}
     */
    function copy(o) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          cleanup(Object(obj), true).forEach(function(val) {
            var object;
            var key;
            object = o;
            val = obj[key = val];
            if (key in object) {
              Object.defineProperty(object, key, {
                value : val,
                enumerable : true,
                configurable : true,
                writable : true
              });
            } else {
              /** @type {(Function|string)} */
              object[key] = val;
            }
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(o, Object.getOwnPropertyDescriptors(obj));
          } else {
            cleanup(Object(obj)).forEach(function(prop) {
              Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(obj, prop));
            });
          }
        }
      }
      return o;
    }
    /**
     * @param {?} event
     * @param {Array} obj
     * @param {?} data
     * @return {?}
     */
    function reset(event, obj, data) {
      return update(event, copy(copy({}, obj), {}, {
        v2 : true
      }), data);
    }
    /**
     * @param {?} a
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function diff(a, dataAndEvents) {
      var buttons;
      /** @type {Array.<string>} */
      var newArgs = Object.keys(a);
      return Object.getOwnPropertySymbols && (buttons = Object.getOwnPropertySymbols(a), dataAndEvents && (buttons = buttons.filter(function(uuid) {
        return Object.getOwnPropertyDescriptor(a, uuid).enumerable;
      })), newArgs.push.apply(newArgs, buttons)), newArgs;
    }
    /**
     * @param {undefined} owner
     * @return {?}
     */
    function save(owner) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          diff(Object(obj), true).forEach(function(val) {
            var object;
            var key;
            object = owner;
            val = obj[key = val];
            if (key in object) {
              Object.defineProperty(object, key, {
                value : val,
                enumerable : true,
                configurable : true,
                writable : true
              });
            } else {
              /** @type {(Function|string)} */
              object[key] = val;
            }
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(owner, Object.getOwnPropertyDescriptors(obj));
          } else {
            diff(Object(obj)).forEach(function(prop) {
              Object.defineProperty(owner, prop, Object.getOwnPropertyDescriptor(obj, prop));
            });
          }
        }
      }
      return owner;
    }
    /**
     * @return {?}
     */
    function ready() {
      var result = listener(arguments);
      return function(m, data, item) {
        var id2;
        if (data) {
          if (data.defaultCountry) {
            if (id2 = data.defaultCountry, !item.countries.hasOwnProperty(id2)) {
              data = save(save({}, data), {}, {
                defaultCountry : void 0
              });
            }
          }
        }
        try {
          return reset(m, data, item);
        } catch (arg) {
          if (!(arg instanceof Buffer)) {
            throw arg;
          }
        }
      }(result.text, result.options, result.metadata);
    }
    /**
     * @return {?}
     */
    function tryToken() {
      return exec(ready, arguments);
    }
    /**
     * @param {?} root
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function $(root, dataAndEvents) {
      var arr;
      /** @type {Array.<string>} */
      var newArgs = Object.keys(root);
      return Object.getOwnPropertySymbols && (arr = Object.getOwnPropertySymbols(root), dataAndEvents && (arr = arr.filter(function(uuid) {
        return Object.getOwnPropertyDescriptor(root, uuid).enumerable;
      })), newArgs.push.apply(newArgs, arr)), newArgs;
    }
    /**
     * @param {undefined} owner
     * @return {?}
     */
    function max(owner) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var obj = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          $(Object(obj), true).forEach(function(val) {
            var object;
            var key;
            object = owner;
            val = obj[key = val];
            if (key in object) {
              Object.defineProperty(object, key, {
                value : val,
                enumerable : true,
                configurable : true,
                writable : true
              });
            } else {
              /** @type {(Function|string)} */
              object[key] = val;
            }
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(owner, Object.getOwnPropertyDescriptors(obj));
          } else {
            $(Object(obj)).forEach(function(prop) {
              Object.defineProperty(owner, prop, Object.getOwnPropertyDescriptor(obj, prop));
            });
          }
        }
      }
      return owner;
    }
    /**
     * @return {?}
     */
    function insert() {
      var x = listener(arguments);
      var text = x.text;
      var length = x.options;
      x = x.metadata;
      length = max(max({}, length), {}, {
        extract : false
      });
      try {
        var code = reset(text, length, x);
        (x = new Node(x)).selectNumberingPlan(code.countryCallingCode);
        var a = slice(code.nationalNumber, x);
        if ("IS_POSSIBLE" !== a) {
          return a;
        }
      } catch (arg) {
        if (arg instanceof Buffer) {
          return arg.message;
        }
        throw arg;
      }
    }
    /**
     * @return {?}
     */
    function getHeredocWord() {
      return exec(insert, arguments);
    }
    /**
     * @return {?}
     */
    function trim() {
      return Object.assign({}, config);
    }
    /**
     * @param {string} obj
     * @param {Array} items
     * @param {number} field
     * @return {?}
     */
    function remove(obj, items, field) {
      var thumbs;
      if (void 0 === field) {
        field = trim();
      }
      /** @type {Array} */
      var primes = [[]];
      /** @type {number} */
      var index = 0;
      for (;index < items.length;index++) {
        !function(i) {
          var _argsStack;
          var thing = items[i];
          if (Array.isArray(thing)) {
            /** @type {Array} */
            _argsStack = [];
            thing.forEach(function(dataAndEvents) {
              primes.forEach(function(args) {
                _argsStack.push(fire(args, [dataAndEvents]));
              });
            });
            /** @type {Array} */
            primes = _argsStack;
          } else {
            primes.forEach(function(arr) {
              arr.push(thing);
            });
          }
        }(index);
      }
      /** @type {Array} */
      var log = [];
      var queuedFn = null !== (thumbs = field.suggested_values) && (void 0 !== thumbs && thumbs.length) ? field.suggested_values[0] : void 0;
      /** @type {number} */
      index = 0;
      for (;index < primes.length;index++) {
        var codeSegments = primes[index];
        /** @type {Array} */
        var out = [];
        var suiteView = Object.assign({}, options);
        var fn = queuedFn;
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          var item = codeSegments[i];
          var copies = item.execute(fn || obj, suiteView);
          if (copies.suggestedValue && (fn = copies.suggestedValue), out.push(copies), !item.next(suiteView = copies)) {
            break;
          }
        }
        log.push(out);
      }
      /** @type {Array} */
      var configList = [];
      return log.forEach(function(failures) {
        var copies;
        failures.forEach(function(tag) {
          var parent;
          field.label = ret[tag.labelName] > ret[field.label] ? tag.labelName : field.label;
          if (!!tag.abnormalType) {
            if (!(null !== (parent = field.abnormal_types) && (void 0 !== parent && parent.includes(tag.abnormalType)))) {
              if (!(null !== (parent = field.abnormal_types) && (void 0 !== parent && parent.push(tag.abnormalType)))) {
                /** @type {Array} */
                field.abnormal_types = [tag.abnormalType];
              }
            }
          }
          if (tag.suggestedValue) {
            copies = frame.baseUtil.sha256(tag.suggestedValue);
          }
        });
        if (copies) {
          configList.push(copies);
        }
      }), 0 < configList.length && (field.suggested_values = fire(new Set(configList))), field;
    }
    /**
     * @param {string} obj
     * @param {string} key
     * @param {number} field
     * @return {?}
     */
    function get(obj, key, field) {
      return void 0 === field && (field = trim()), remove(obj, types[key], field);
    }
    /**
     * @param {number} obj
     * @param {string} key
     * @param {string} name
     * @return {?}
     */
    function setter(obj, key, name) {
      /** @type {string} */
      var value = String(obj);
      var result = {};
      var str = forEach(value, options);
      obj = {
        label : str.labelName
      };
      return str.abnormalType && (obj.abnormal_types = [str.abnormalType]), str.suggestedValue && (obj.suggested_values = [str.suggestedValue]), frame.baseUtil.isHash(value) ? result[name] = get(value, name, obj) : result[key] = get(value, key, obj), result;
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function removeClass(name, value) {
      return Object.assign(name, value);
    }
    jQuery.r(val);
    jQuery.d(val, "isHash", function() {
      return x.c;
    });
    jQuery.d(val, "sha256", function() {
      return self.sha256;
    });
    jQuery.d(val, "parsePhoneNumberFromString", function() {
      return tryToken;
    });
    jQuery.d(val, "validatePhoneNumberLength", function() {
      return getHeredocWord;
    });
    jQuery.d(val, "checkEmailFormat", function() {
      return x.a;
    });
    jQuery.d(val, "checkMDNEmailFormat", function() {
      return x.b;
    });
    jQuery.d(val, "genIdentifierLabelByUserProperties", function() {
      return initialize;
    });
    var self = jQuery("bCcq");
    var grid = {
      version : 4,
      country_calling_codes : {
        1 : ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
        7 : ["RU", "KZ"],
        20 : ["EG"],
        27 : ["ZA"],
        30 : ["GR"],
        31 : ["NL"],
        32 : ["BE"],
        33 : ["FR"],
        34 : ["ES"],
        36 : ["HU"],
        39 : ["IT", "VA"],
        40 : ["RO"],
        41 : ["CH"],
        43 : ["AT"],
        44 : ["GB", "GG", "IM", "JE"],
        45 : ["DK"],
        46 : ["SE"],
        47 : ["NO", "SJ"],
        48 : ["PL"],
        49 : ["DE"],
        51 : ["PE"],
        52 : ["MX"],
        53 : ["CU"],
        54 : ["AR"],
        55 : ["BR"],
        56 : ["CL"],
        57 : ["CO"],
        58 : ["VE"],
        60 : ["MY"],
        61 : ["AU", "CC", "CX"],
        62 : ["ID"],
        63 : ["PH"],
        64 : ["NZ"],
        65 : ["SG"],
        66 : ["TH"],
        81 : ["JP"],
        82 : ["KR"],
        84 : ["VN"],
        86 : ["CN"],
        90 : ["TR"],
        91 : ["IN"],
        92 : ["PK"],
        93 : ["AF"],
        94 : ["LK"],
        95 : ["MM"],
        98 : ["IR"],
        211 : ["SS"],
        212 : ["MA", "EH"],
        213 : ["DZ"],
        216 : ["TN"],
        218 : ["LY"],
        220 : ["GM"],
        221 : ["SN"],
        222 : ["MR"],
        223 : ["ML"],
        224 : ["GN"],
        225 : ["CI"],
        226 : ["BF"],
        227 : ["NE"],
        228 : ["TG"],
        229 : ["BJ"],
        230 : ["MU"],
        231 : ["LR"],
        232 : ["SL"],
        233 : ["GH"],
        234 : ["NG"],
        235 : ["TD"],
        236 : ["CF"],
        237 : ["CM"],
        238 : ["CV"],
        239 : ["ST"],
        240 : ["GQ"],
        241 : ["GA"],
        242 : ["CG"],
        243 : ["CD"],
        244 : ["AO"],
        245 : ["GW"],
        246 : ["IO"],
        247 : ["AC"],
        248 : ["SC"],
        249 : ["SD"],
        250 : ["RW"],
        251 : ["ET"],
        252 : ["SO"],
        253 : ["DJ"],
        254 : ["KE"],
        255 : ["TZ"],
        256 : ["UG"],
        257 : ["BI"],
        258 : ["MZ"],
        260 : ["ZM"],
        261 : ["MG"],
        262 : ["RE", "YT"],
        263 : ["ZW"],
        264 : ["NA"],
        265 : ["MW"],
        266 : ["LS"],
        267 : ["BW"],
        268 : ["SZ"],
        269 : ["KM"],
        290 : ["SH", "TA"],
        291 : ["ER"],
        297 : ["AW"],
        298 : ["FO"],
        299 : ["GL"],
        350 : ["GI"],
        351 : ["PT"],
        352 : ["LU"],
        353 : ["IE"],
        354 : ["IS"],
        355 : ["AL"],
        356 : ["MT"],
        357 : ["CY"],
        358 : ["FI", "AX"],
        359 : ["BG"],
        370 : ["LT"],
        371 : ["LV"],
        372 : ["EE"],
        373 : ["MD"],
        374 : ["AM"],
        375 : ["BY"],
        376 : ["AD"],
        377 : ["MC"],
        378 : ["SM"],
        380 : ["UA"],
        381 : ["RS"],
        382 : ["ME"],
        383 : ["XK"],
        385 : ["HR"],
        386 : ["SI"],
        387 : ["BA"],
        389 : ["MK"],
        420 : ["CZ"],
        421 : ["SK"],
        423 : ["LI"],
        500 : ["FK"],
        501 : ["BZ"],
        502 : ["GT"],
        503 : ["SV"],
        504 : ["HN"],
        505 : ["NI"],
        506 : ["CR"],
        507 : ["PA"],
        508 : ["PM"],
        509 : ["HT"],
        590 : ["GP", "BL", "MF"],
        591 : ["BO"],
        592 : ["GY"],
        593 : ["EC"],
        594 : ["GF"],
        595 : ["PY"],
        596 : ["MQ"],
        597 : ["SR"],
        598 : ["UY"],
        599 : ["CW", "BQ"],
        670 : ["TL"],
        672 : ["NF"],
        673 : ["BN"],
        674 : ["NR"],
        675 : ["PG"],
        676 : ["TO"],
        677 : ["SB"],
        678 : ["VU"],
        679 : ["FJ"],
        680 : ["PW"],
        681 : ["WF"],
        682 : ["CK"],
        683 : ["NU"],
        685 : ["WS"],
        686 : ["KI"],
        687 : ["NC"],
        688 : ["TV"],
        689 : ["PF"],
        690 : ["TK"],
        691 : ["FM"],
        692 : ["MH"],
        850 : ["KP"],
        852 : ["HK"],
        853 : ["MO"],
        855 : ["KH"],
        856 : ["LA"],
        880 : ["BD"],
        886 : ["TW"],
        960 : ["MV"],
        961 : ["LB"],
        962 : ["JO"],
        963 : ["SY"],
        964 : ["IQ"],
        965 : ["KW"],
        966 : ["SA"],
        967 : ["YE"],
        968 : ["OM"],
        970 : ["PS"],
        971 : ["AE"],
        972 : ["IL"],
        973 : ["BH"],
        974 : ["QA"],
        975 : ["BT"],
        976 : ["MN"],
        977 : ["NP"],
        992 : ["TJ"],
        993 : ["TM"],
        994 : ["AZ"],
        995 : ["GE"],
        996 : ["KG"],
        998 : ["UZ"]
      },
      countries : {
        AC : ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
        AD : ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
        AE : ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
        AF : ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
        AG : ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
        AI : ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
        AL : ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
        AM : ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
        AO : ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
        AR : ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
        "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
        "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})",
        "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
        "9$1"],
        AS : ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
        AT : ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})",
        "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
        AU : ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
        [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
        AW : ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
        AX : ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
        AZ : ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
        BA : ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
        BB : ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
        BD : ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"],
        "0$1"]], "0"],
        BE : ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
        BF : ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
        BG : ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})",
        "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
        BH : ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]],
        BI : ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
        BJ : ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]],
        BL : ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]],
        BM : ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
        BN : ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
        BO : ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
        BQ : ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
        BR : ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]],
        "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
        BS : ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
        BT : ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
        BW : ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
        BY : ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
        "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
        BZ : ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
        CA : ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",
        [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]],
        CC : ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}",
        [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
        CD : ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
        CF : ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
        CG : ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
        CH : ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
        CI : ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
        CK : ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
        CL : ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
        CM : ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
        CN : ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
        "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
        "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],
        "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
        "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"],
        CO : ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0(4(?:[14]4|56)|[579])?"],
        CR : ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
        CU : ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
        CV : ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
        CW : ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
        CX : ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}",
        [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
        CY : ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
        CZ : ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
        DE : ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],
        "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
        "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})",
        "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
        DJ : ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
        DK : ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
        DM : ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
        DO : ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
        DZ : ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
        EC : ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
        EE : ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
        EG : ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"],
        EH : ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
        ER : ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
        ES : ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
        ET : ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"],
        FI : ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
        FJ : ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        FK : ["500", "00", "[2-7]\\d{4}", [5]],
        FM : ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
        FO : ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
        FR : ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
        GA : ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"],
        GB : ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"],
        "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
        [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
        [10]], ["56\\d{8}", [10]]], 0, " x"],
        GD : ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
        GE : ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
        GF : ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"],
        GG : ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
        GH : ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
        GI : ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
        GL : ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]],
        GM : ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
        GN : ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
        GP : ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]],
        GQ : ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
        GR : ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]],
        GT : ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
        GU : ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([3-9]\\d{6})$|1", "671$1", 0, "671"],
        GW : ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
        GY : ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|510|862)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
        HK : ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        HN : ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
        HR : ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3",
        ["8"], "0$1"]], "0"],
        HT : ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]],
        HU : ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
        ID : ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3",
        ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
        IE : ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})",
        "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
        IL : ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
        "$1-$2 $3-$4", ["15"]]], "0"],
        IM : ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
        IN : ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],
        "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
        "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],
        "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
        "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"],
        0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
        IO : ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
        IQ : ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
        IR : ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
        IS : ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        IT : ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})",
        "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
        ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
        JE : ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
        ["56\\d{8}"]]],
        JM : ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
        JO : ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
        JP : ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],
        "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
        "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
        "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
        "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"],
        KE : ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
        KG : ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
        KH : ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
        KI : ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
        KM : ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
        KN : ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
        KP : ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
        KR : ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"],
        "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
        KW : ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]],
        KY : ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
        KZ : ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
        LA : ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
        LB : ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
        LC : ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
        LI : ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"],
        LK : ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
        LR : ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"],
        LS : ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
        LT : ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"],
        LU : ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})",
        "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
        LV : ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
        LY : ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
        MA : ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
        ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]],
        MC : ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
        MD : ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
        ME : ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
        MF : ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]],
        MG : ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"],
        MH : ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
        MK : ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
        ML : ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
        MM : ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})",
        "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
        MN : ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
        MO : ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
        MP : ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
        MQ : ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
        MR : ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
        MS : ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
        MT : ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
        MU : ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
        MV : ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        MW : ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
        MX : ["52", "0[09]", "1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"],
        MY : ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]],
        "0"],
        MZ : ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
        NA : ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
        NC : ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]],
        NE : ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]],
        NF : ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
        NG : ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
        NI : ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
        NL : ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"],
        NO : ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
        NP : ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
        NR : ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]],
        NU : ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
        NZ : ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"],
        "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
        OM : ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
        PA : ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
        PE : ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "],
        PF : ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
        PG : ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        PH : ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})",
        "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
        PK : ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
        "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
        PL : ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
        PM : ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
        PR : ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
        PS : ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
        PT : ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
        PW : ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
        PY : ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
        ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
        QA : ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]],
        RE : ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-5]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-27]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
        RO : ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
        RS : ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
        RU : ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],
        "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
        RW : ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"],
        SA : ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
        SB : ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
        SC : ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        SD : ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
        SE : ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],
        "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],
        "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
        SG : ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
        SH : ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
        SI : ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
        SJ : ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
        SK : ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
        SL : ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
        SM : ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
        SN : ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
        SO : ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"],
        SR : ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
        SS : ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
        ST : ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
        SV : ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
        SX : ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
        SY : ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
        SZ : ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
        TA : ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
        TC : ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
        TD : ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
        TG : ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
        TH : ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
        TJ : ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[04]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"],
        TK : ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
        TL : ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
        TM : ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
        TN : ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
        TO : ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
        TR : ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
        TT : ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
        TV : ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
        TW : ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0,
        0, 0, 0, "#"],
        TZ : ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
        UA : ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})",
        "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
        UG : ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
        US : ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["5056(?:[0-35-9]\\d|4[46])\\d{4}|(?:4722|505[2-57-9]|983[29])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
        [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],
        UY : ["598", "0(?:0|1[3-9]\\d)", "(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10, 13], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
        UZ : ["998", "810", "200\\d{6}|(?:33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
        VA : ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
        VC : ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
        VE : ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
        VG : ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
        VI : ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
        VN : ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
        VU : ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
        WF : ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
        WS : ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
        XK : ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"],
        YE : ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
        YT : ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],
        ZA : ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
        ZM : ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
        ZW : ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],
        "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"],
        "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
      },
      nonGeographic : {
        800 : ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]],
        808 : ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
        870 : ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],
        878 : ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
        881 : ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]],
        882 : ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})",
        "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],
        883 : ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],
        888 : ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
        979 : ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
      }
    };
    /**
     * @param {string} node
     * @return {?}
     */
    var func = function(node) {
      return "object" === wrap(node);
    };
    /** @type {number} */
    var len = 2;
    /** @type {number} */
    var maxItemLength = 17;
    /** @type {number} */
    var y = 3;
    /** @type {string} */
    var caseSensitive = "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9";
    /** @type {string} */
    var keywords = "".concat("-\u2010-\u2015\u2212\u30fc\uff0d").concat("\uff0f/").concat("\uff0e.").concat("  \u00ad\u200b\u2060\u3000").concat("()\uff08\uff09\uff3b\uff3d\\[\\]").concat("~\u2053\u223c\uff5e");
    var Buffer = function() {
      /**
       * @param {Object} type
       * @return {?}
       */
      function Element(type) {
        return function(dataAndEvents, clas) {
          if (!(dataAndEvents instanceof clas)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Element), type = promise.call(this, type), Object.setPrototypeOf(toArray(type), Element.prototype), type.name = type.constructor.name, type;
      }
      !function(child, extend) {
        if ("function" != typeof extend && null !== extend) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {Object} */
        child.prototype = Object.create(extend && extend.prototype, {
          constructor : {
            /** @type {function (Object): ?} */
            value : child,
            writable : true,
            configurable : true
          }
        });
        Object.defineProperty(child, "prototype", {
          writable : false
        });
        if (extend) {
          has(child, extend);
        }
      }(Element, create(Error));
      var to;
      var udataCur;
      var pdataCur;
      var promise = go(Element);
      return to = Element, udataCur && defineProperty(to.prototype, udataCur), pdataCur && defineProperty(to, pdataCur), Object.defineProperty(to, "prototype", {
        writable : false
      }), to;
    }();
    /**
     * @param {number} a
     * @param {string} b
     * @return {?}
     */
    var normalize = function(a, b) {
      a = a.split("-");
      b = b.split("-");
      var version = a[0].split(".");
      var guts = b[0].split(".");
      /** @type {number} */
      var i = 0;
      for (;i < 3;i++) {
        /** @type {number} */
        var n = Number(version[i]);
        /** @type {number} */
        var m = Number(guts[i]);
        if (m < n) {
          return 1;
        }
        if (n < m) {
          return-1;
        }
        if (!isNaN(n) && isNaN(m)) {
          return 1;
        }
        if (isNaN(n) && !isNaN(m)) {
          return-1;
        }
      }
      return a[1] && b[1] ? a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0 : !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
    };
    /** @type {string} */
    var parentName = "1.2.0";
    /** @type {string} */
    var oldconfig = "1.7.35";
    /** @type {string} */
    var D = " ext. ";
    /** @type {RegExp} */
    var rparentsprev = /^\d+$/;
    var Node = function() {
      /**
       * @param {?} name
       * @return {undefined}
       */
      function next(name) {
        handle(this, next);
        (function(node) {
          if (!node) {
            throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
          }
          if (!walk(node) || !walk(node.countries)) {
            throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(walk(node) ? "an object of shape: { " + Object.keys(node).join(", ") + " }" : "a " + traverseNode(node) + ": " + node, "."));
          }
        })(name);
        this.metadata = name;
        set.call(this, name);
      }
      return transitionDone(next, [{
        key : "getCountries",
        /**
         * @return {?}
         */
        value : function() {
          return Object.keys(this.metadata.countries).filter(function(dataAndEvents) {
            return "001" !== dataAndEvents;
          });
        }
      }, {
        key : "getCountryMetadata",
        /**
         * @param {string} methodName
         * @return {?}
         */
        value : function(methodName) {
          return this.metadata.countries[methodName];
        }
      }, {
        key : "nonGeographic",
        /**
         * @return {?}
         */
        value : function() {
          if (!(this.v1 || (this.v2 || this.v3))) {
            return this.metadata.nonGeographic || this.metadata.nonGeographical;
          }
        }
      }, {
        key : "hasCountry",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return void 0 !== this.getCountryMetadata(object);
        }
      }, {
        key : "hasCallingCode",
        /**
         * @param {string} methodName
         * @return {?}
         */
        value : function(methodName) {
          if (this.getCountryCodesForCallingCode(methodName)) {
            return true;
          }
          if (this.nonGeographic()) {
            if (this.nonGeographic()[methodName]) {
              return true;
            }
          } else {
            methodName = this.countryCallingCodes()[methodName];
            if (methodName && (1 === methodName.length && "001" === methodName[0])) {
              return true;
            }
          }
        }
      }, {
        key : "isNonGeographicCallingCode",
        /**
         * @param {string} methodName
         * @return {?}
         */
        value : function(methodName) {
          return this.nonGeographic() ? !!this.nonGeographic()[methodName] : !this.getCountryCodesForCallingCode(methodName);
        }
      }, {
        key : "country",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return this.selectNumberingPlan(object);
        }
      }, {
        key : "selectNumberingPlan",
        /**
         * @param {boolean} name
         * @param {boolean} index
         * @return {?}
         */
        value : function(name, index) {
          if (name && (rparentsprev.test(name) && (index = name, name = null)), name && "001" !== name) {
            if (!this.hasCountry(name)) {
              throw new Error("Unknown country: ".concat(name));
            }
            this.numberingPlan = new Uint8Array(this.getCountryMetadata(name), this);
          } else {
            if (index) {
              if (!this.hasCallingCode(index)) {
                throw new Error("Unknown calling code: ".concat(index));
              }
              this.numberingPlan = new Uint8Array(this.getNumberingPlanMetadata(index), this);
            } else {
              this.numberingPlan = void 0;
            }
          }
          return this;
        }
      }, {
        key : "getCountryCodesForCallingCode",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          object = this.countryCallingCodes()[object];
          if (object && (1 !== object.length || 3 !== object[0].length)) {
            return object;
          }
        }
      }, {
        key : "getCountryCodeForCallingCode",
        /**
         * @param {?} methodName
         * @return {?}
         */
        value : function(methodName) {
          methodName = this.getCountryCodesForCallingCode(methodName);
          if (methodName) {
            return methodName[0];
          }
        }
      }, {
        key : "getNumberingPlanMetadata",
        /**
         * @param {string} property
         * @return {?}
         */
        value : function(property) {
          var element = this.getCountryCodeForCallingCode(property);
          if (element) {
            return this.getCountryMetadata(element);
          }
          if (this.nonGeographic()) {
            element = this.nonGeographic()[property];
            if (element) {
              return element;
            }
          } else {
            property = this.countryCallingCodes()[property];
            if (property && (1 === property.length && "001" === property[0])) {
              return this.metadata.countries["001"];
            }
          }
        }
      }, {
        key : "countryCallingCode",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.callingCode();
        }
      }, {
        key : "IDDPrefix",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.IDDPrefix();
        }
      }, {
        key : "defaultIDDPrefix",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.defaultIDDPrefix();
        }
      }, {
        key : "nationalNumberPattern",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.nationalNumberPattern();
        }
      }, {
        key : "possibleLengths",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.possibleLengths();
        }
      }, {
        key : "formats",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.formats();
        }
      }, {
        key : "nationalPrefixForParsing",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.nationalPrefixForParsing();
        }
      }, {
        key : "nationalPrefixTransformRule",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.nationalPrefixTransformRule();
        }
      }, {
        key : "leadingDigits",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.leadingDigits();
        }
      }, {
        key : "hasTypes",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.hasTypes();
        }
      }, {
        key : "type",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return this.numberingPlan.type(object);
        }
      }, {
        key : "ext",
        /**
         * @return {?}
         */
        value : function() {
          return this.numberingPlan.ext();
        }
      }, {
        key : "countryCallingCodes",
        /**
         * @return {?}
         */
        value : function() {
          return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
        }
      }, {
        key : "chooseCountryByCountryCallingCode",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return this.selectNumberingPlan(object);
        }
      }, {
        key : "hasSelectedNumberingPlan",
        /**
         * @return {?}
         */
        value : function() {
          return void 0 !== this.numberingPlan;
        }
      }]), next;
    }();
    var Uint8Array = function() {
      /**
       * @param {string} signal_eof
       * @param {?} event
       * @return {undefined}
       */
      function next(signal_eof, event) {
        handle(this, next);
        this.globalMetadataObject = event;
        /** @type {string} */
        this.metadata = signal_eof;
        set.call(this, event.metadata);
      }
      return transitionDone(next, [{
        key : "callingCode",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata[0];
        }
      }, {
        key : "getDefaultCountryMetadataForRegion",
        /**
         * @return {?}
         */
        value : function() {
          return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
        }
      }, {
        key : "IDDPrefix",
        /**
         * @return {?}
         */
        value : function() {
          if (!this.v1 && !this.v2) {
            return this.metadata[1];
          }
        }
      }, {
        key : "defaultIDDPrefix",
        /**
         * @return {?}
         */
        value : function() {
          if (!this.v1 && !this.v2) {
            return this.metadata[12];
          }
        }
      }, {
        key : "nationalNumberPattern",
        /**
         * @return {?}
         */
        value : function() {
          return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
        }
      }, {
        key : "possibleLengths",
        /**
         * @return {?}
         */
        value : function() {
          if (!this.v1) {
            return this.metadata[this.v2 ? 2 : 3];
          }
        }
      }, {
        key : "_getFormats",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return object[this.v1 ? 2 : this.v2 ? 3 : 4];
        }
      }, {
        key : "formats",
        /**
         * @return {?}
         */
        value : function() {
          var fn = this;
          return(this._getFormats(this.metadata) || (this._getFormats(this.getDefaultCountryMetadataForRegion()) || [])).map(function(title) {
            return new Test(title, fn);
          });
        }
      }, {
        key : "nationalPrefix",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
        }
      }, {
        key : "_getNationalPrefixFormattingRule",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return object[this.v1 ? 4 : this.v2 ? 5 : 6];
        }
      }, {
        key : "nationalPrefixFormattingRule",
        /**
         * @return {?}
         */
        value : function() {
          return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
        }
      }, {
        key : "_nationalPrefixForParsing",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
        }
      }, {
        key : "nationalPrefixForParsing",
        /**
         * @return {?}
         */
        value : function() {
          return this._nationalPrefixForParsing() || this.nationalPrefix();
        }
      }, {
        key : "nationalPrefixTransformRule",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
        }
      }, {
        key : "_getNationalPrefixIsOptionalWhenFormatting",
        /**
         * @return {?}
         */
        value : function() {
          return!!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
        }
      }, {
        key : "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
        /**
         * @return {?}
         */
        value : function() {
          return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
        }
      }, {
        key : "leadingDigits",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
        }
      }, {
        key : "types",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
        }
      }, {
        key : "hasTypes",
        /**
         * @return {?}
         */
        value : function() {
          return(!this.types() || 0 !== this.types().length) && !!this.types();
        }
      }, {
        key : "type",
        /**
         * @param {string} node
         * @return {?}
         */
        value : function(node) {
          if (this.hasTypes() && swap(this.types(), node)) {
            return new Storage(swap(this.types(), node), this);
          }
        }
      }, {
        key : "ext",
        /**
         * @return {?}
         */
        value : function() {
          return!this.v1 && (!this.v2 && this.metadata[13]) || D;
        }
      }]), next;
    }();
    var Test = function() {
      /**
       * @param {Array} format
       * @param {?} signal_eof
       * @return {undefined}
       */
      function next(format, signal_eof) {
        handle(this, next);
        /** @type {Array} */
        this._format = format;
        this.metadata = signal_eof;
      }
      return transitionDone(next, [{
        key : "pattern",
        /**
         * @return {?}
         */
        value : function() {
          return this._format[0];
        }
      }, {
        key : "format",
        /**
         * @return {?}
         */
        value : function() {
          return this._format[1];
        }
      }, {
        key : "leadingDigitsPatterns",
        /**
         * @return {?}
         */
        value : function() {
          return this._format[2] || [];
        }
      }, {
        key : "nationalPrefixFormattingRule",
        /**
         * @return {?}
         */
        value : function() {
          return this._format[3] || this.metadata.nationalPrefixFormattingRule();
        }
      }, {
        key : "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
        /**
         * @return {?}
         */
        value : function() {
          return!!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
        }
      }, {
        key : "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
        /**
         * @return {?}
         */
        value : function() {
          return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
        }
      }, {
        key : "usesNationalPrefix",
        /**
         * @return {?}
         */
        value : function() {
          return!(!this.nationalPrefixFormattingRule() || rhtml.test(this.nationalPrefixFormattingRule()));
        }
      }, {
        key : "internationalFormat",
        /**
         * @return {?}
         */
        value : function() {
          return this._format[5] || this.format();
        }
      }]), next;
    }();
    /** @type {RegExp} */
    var rhtml = /^\(?\$1\)?$/;
    var Storage = function() {
      /**
       * @param {string} event
       * @param {string} signal_eof
       * @return {undefined}
       */
      function next(event, signal_eof) {
        handle(this, next);
        /** @type {string} */
        this.type = event;
        /** @type {string} */
        this.metadata = signal_eof;
      }
      return transitionDone(next, [{
        key : "pattern",
        /**
         * @return {?}
         */
        value : function() {
          return this.metadata.v1 ? this.type : this.type[0];
        }
      }, {
        key : "possibleLengths",
        /**
         * @return {?}
         */
        value : function() {
          if (!this.metadata.v1) {
            return this.type[1] || this.metadata.possibleLengths();
          }
        }
      }]), next;
    }();
    /**
     * @param {string} node
     * @return {?}
     */
    var walk = function(node) {
      return "object" === extend(node);
    };
    /**
     * @param {string} node
     * @return {?}
     */
    var traverseNode = function(node) {
      return extend(node);
    };
    /** @type {string} */
    var g = "[" + caseSensitive + "]{" + len + "}";
    /** @type {string} */
    val = "[+\uff0b]{0,1}(?:[" + keywords + "]*[" + caseSensitive + "]){3,}[" + keywords + caseSensitive + "]*";
    /** @type {RegExp} */
    var matcher = new RegExp("^[+\uff0b]{0,1}(?:[" + keywords + "]*[" + caseSensitive + "]){1,2}$", "i");
    /** @type {string} */
    val = val + "(?:" + charSet() + ")?";
    /** @type {RegExp} */
    var regexp = new RegExp("^" + g + "$|^" + val + "$", "i");
    /** @type {RegExp} */
    var re = new RegExp("(?:" + charSet() + ")$", "i");
    var eventList = {
      0 : "0",
      1 : "1",
      2 : "2",
      3 : "3",
      4 : "4",
      5 : "5",
      6 : "6",
      7 : "7",
      8 : "8",
      9 : "9",
      "\uff10" : "0",
      "\uff11" : "1",
      "\uff12" : "2",
      "\uff13" : "3",
      "\uff14" : "4",
      "\uff15" : "5",
      "\uff16" : "6",
      "\uff17" : "7",
      "\uff18" : "8",
      "\uff19" : "9",
      "\u0660" : "0",
      "\u0661" : "1",
      "\u0662" : "2",
      "\u0663" : "3",
      "\u0664" : "4",
      "\u0665" : "5",
      "\u0666" : "6",
      "\u0667" : "7",
      "\u0668" : "8",
      "\u0669" : "9",
      "\u06f0" : "0",
      "\u06f1" : "1",
      "\u06f2" : "2",
      "\u06f3" : "3",
      "\u06f4" : "4",
      "\u06f5" : "5",
      "\u06f6" : "6",
      "\u06f7" : "7",
      "\u06f8" : "8",
      "\u06f9" : "9"
    };
    /** @type {Array} */
    var event = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
    /** @type {RegExp} */
    var r20 = /(\$\d)/;
    /** @type {RegExp} */
    var reWhitespace = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
    var i = {
      /**
       * @param {?} children
       * @param {?} caseSensitive
       * @param {Object} artifacts
       * @return {?}
       */
      formatExtension : function(children, caseSensitive, artifacts) {
        return "".concat(children).concat(artifacts.ext()).concat(caseSensitive);
      }
    };
    /** @type {boolean} */
    var Id = false;
    var PluginResult = function() {
      /**
       * @param {(Function|string)} id
       * @param {?} min2
       * @param {Array} elems
       * @return {undefined}
       */
      function map(id, min2, elems) {
        if (!function(dataAndEvents, depMap) {
          if (!(dataAndEvents instanceof depMap)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, map), !id) {
          throw new TypeError("`country` or `countryCallingCode` not passed");
        }
        if (!min2) {
          throw new TypeError("`nationalNumber` not passed");
        }
        if (!elems) {
          throw new TypeError("`metadata` not passed");
        }
        var ret = function(options, el) {
          var query;
          var max;
          el = new Node(el);
          if (f(options)) {
            /** @type {string} */
            query = options;
            el.selectNumberingPlan(query);
            max = el.countryCallingCode();
          } else {
            /** @type {string} */
            max = options;
            if (Id) {
              if (el.isNonGeographicCallingCode(max)) {
                /** @type {string} */
                query = "001";
              }
            }
          }
          return{
            country : query,
            countryCallingCode : max
          };
        }(id, elems);
        id = ret.country;
        ret = ret.countryCallingCode;
        /** @type {(Function|string)} */
        this.country = id;
        this.countryCallingCode = ret;
        this.nationalNumber = min2;
        /** @type {string} */
        this.number = "+" + this.countryCallingCode + this.nationalNumber;
        /**
         * @return {?}
         */
        this.getMetadata = function() {
          return elems;
        };
      }
      var x;
      var suiteView;
      var a;
      return x = map, (suiteView = [{
        key : "setExt",
        /**
         * @param {string} object
         * @return {undefined}
         */
        value : function(object) {
          /** @type {string} */
          this.ext = object;
        }
      }, {
        key : "getPossibleCountries",
        /**
         * @return {?}
         */
        value : function() {
          return this.country ? [this.country] : write(this.countryCallingCode, this.nationalNumber, this.getMetadata());
        }
      }, {
        key : "isPossible",
        /**
         * @return {?}
         */
        value : function() {
          return function($scope, opt_attributes, doc) {
            if (void 0 === opt_attributes && (opt_attributes = {}), doc = new Node(doc), opt_attributes.v2) {
              if (!$scope.countryCallingCode) {
                throw new Error("Invalid phone number object passed");
              }
              doc.selectNumberingPlan($scope.countryCallingCode);
            } else {
              if (!$scope.phone) {
                return false;
              }
              if ($scope.country) {
                if (!doc.hasCountry($scope.country)) {
                  throw new Error("Unknown country: ".concat($scope.country));
                }
                doc.country($scope.country);
              } else {
                if (!$scope.countryCallingCode) {
                  throw new Error("Invalid phone number object passed");
                }
                doc.selectNumberingPlan($scope.countryCallingCode);
              }
            }
            if (doc.possibleLengths()) {
              return callback($scope.phone || $scope.nationalNumber, doc);
            }
            if ($scope.countryCallingCode && doc.isNonGeographicCallingCode($scope.countryCallingCode)) {
              return true;
            }
            throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
          }(this, {
            v2 : true
          }, this.getMetadata());
        }
      }, {
        key : "isValid",
        /**
         * @return {?}
         */
        value : function() {
          return tags = {
            v2 : true
          }, img = (details = this).getMetadata(), tags = tags || {}, (img = new Node(img)).selectNumberingPlan(details.country, details.countryCallingCode), img.hasTypes() ? void 0 !== fn(details, tags, img.metadata) : match(tags.v2 ? details.nationalNumber : details.phone, img.nationalNumberPattern());
          var details;
          var tags;
          var img;
        }
      }, {
        key : "isNonGeographic",
        /**
         * @return {?}
         */
        value : function() {
          return(new Node(this.getMetadata())).isNonGeographicCallingCode(this.countryCallingCode);
        }
      }, {
        key : "isEqual",
        /**
         * @param {Object} object
         * @return {?}
         */
        value : function(object) {
          return this.number === object.number && this.ext === object.ext;
        }
      }, {
        key : "getType",
        /**
         * @return {?}
         */
        value : function() {
          return fn(this, {
            v2 : true
          }, this.getMetadata());
        }
      }, {
        key : "format",
        /**
         * @param {string} object
         * @param {Object} token
         * @return {?}
         */
        value : function(object, token) {
          return compile(this, object, token ? override(override({}, token), {}, {
            v2 : true
          }) : {
            v2 : true
          }, this.getMetadata());
        }
      }, {
        key : "formatNational",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return this.format("NATIONAL", object);
        }
      }, {
        key : "formatInternational",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return this.format("INTERNATIONAL", object);
        }
      }, {
        key : "getURI",
        /**
         * @param {string} object
         * @return {?}
         */
        value : function(object) {
          return this.format("RFC3966", object);
        }
      }]) && iterator(x.prototype, suiteView), a && iterator(x, a), Object.defineProperty(x, "prototype", {
        writable : false
      }), map;
    }();
    /**
     * @param {string} k
     * @return {?}
     */
    var f = function(k) {
      return/^[A-Z]{2}$/.test(k);
    };
    /** @type {RegExp} */
    var typePattern = new RegExp("([" + caseSensitive + "])");
    /** @type {boolean} */
    var maybe_code = false;
    /** @type {string} */
    var r = "+";
    /** @type {string} */
    g = "([" + caseSensitive + "]|[\\-\\.\\(\\)]?)";
    /** @type {RegExp} */
    var rgx = new RegExp("^\\" + r + g + "*[" + caseSensitive + "]" + g + "*$", "g");
    /** @type {RegExp} */
    var regex = new RegExp("^([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]+((\\-)*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])*\\.)*[a-zA-Z]+((\\-)*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])*\\.?$", "g");
    /** @type {string} */
    var separator = "tel:";
    /** @type {string} */
    var closeTag = ";phone-context=";
    /** @type {string} */
    var toFind = ";isub=";
    /** @type {number} */
    var MAX_LENGTH = 250;
    /** @type {RegExp} */
    var query = new RegExp("[+\uff0b" + caseSensitive + "]");
    /** @type {RegExp} */
    var rclass = new RegExp("[^" + caseSensitive + "#]+$");
    /** @type {boolean} */
    var zd = false;
    var x = jQuery("xZxN");
    var obj = jQuery("fe1q");
    var object = jQuery("/6w+");
    var item = jQuery("HyyX");
    var frame = jQuery("wK/p");
    /**
     * @param {?} thisv
     * @param {number} event
     * @return {?}
     */
    var onComplete = function(thisv, event) {
      var fn = "function" == typeof Symbol && thisv[Symbol.iterator];
      if (!fn) {
        return thisv;
      }
      var param;
      var mockError;
      var self = fn.call(thisv);
      /** @type {Array} */
      var passedParams = [];
      try {
        for (;(void 0 === event || 0 < event--) && !(param = self.next()).done;) {
          passedParams.push(param.value);
        }
      } catch (err) {
        mockError = {
          error : err
        };
      } finally {
        try {
          if (param) {
            if (!param.done) {
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
      return passedParams;
    };
    /**
     * @return {?}
     */
    var fire = function() {
      /** @type {Array} */
      var ret = [];
      /** @type {number} */
      var i = 0;
      for (;i < arguments.length;i++) {
        /** @type {Array} */
        ret = ret.concat(onComplete(arguments[i]));
      }
      return ret;
    };
    var options = {
      hit : false,
      labelName : item.d.valid
    };
    var config = {
      label : item.d.valid
    };
    var ret = {
      missing : 1,
      valid : 2,
      invalid : 3
    };
    /** @type {Array} */
    var tokenTypes = ["", "undefined", "null", "0"];
    /**
     * @param {string} bind
     * @param {number} scope
     * @return {?}
     */
    var forEach = function(bind, scope) {
      if (void 0 === scope) {
        scope = options;
      }
      var xml;
      var retData;
      /** @type {boolean} */
      var hit = false;
      var data = bind.replace(/&.*;/, "");
      return(xml = Object(x.d)(data)) && xml ? (hit = true, data = xml) : (retData = Object(x.e)(data)) && (retData && (hit = true, data = retData)), (hit = data !== bind) ? {
        hit : hit,
        labelName : item.d.invalid,
        abnormalType : item.a.encode,
        suggestedValue : data
      } : {
        hit : hit,
        labelName : scope.labelName
      };
    };
    /** @type {RegExp} */
    val = /\+.*$/;
    /** @type {RegExp} */
    g = /\.|\+.*$/g;
    var files = {
      "gmail.com" : {
        cut : g
      },
      "googlemail.com" : {
        cut : g,
        aliasOf : "gmail.com"
      },
      "hotmail.com" : {
        cut : val
      },
      "live.com" : {
        cut : g
      },
      "outlook.com" : {
        cut : val
      }
    };
    /**
     * @param {string} path
     * @return {?}
     */
    var resolve = function(path) {
      if ("string" != typeof path) {
        return path;
      }
      /** @type {Array.<string>} */
      var filename = path.toLowerCase().split(/@/);
      return 2 !== filename.length ? path : (path = filename[0], filename = filename[1], files.hasOwnProperty(filename) && (files[filename].hasOwnProperty("cut") && (path = path.replace(files[filename].cut, "")), files[filename].hasOwnProperty("aliasOf") && (filename = files[filename].aliasOf)), path + "@" + filename);
    };
    var xhr = {
      domainThreshold : 2,
      secondLevelThreshold : 2,
      topLevelThreshold : 2,
      defaultDomains : ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "sky.com", "icloud.com", "mac.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizo.net", "rocketmail.com", "google.com", "optonline.net", "sbcglobal.net", "aol.com", "me.com", "btinternet.com", "charter.net", "shaw.ca"],
      defaultSecondLevelDomains : ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
      defaultTopLevelDomains : ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu"],
      /**
       * @param {Object} opts
       * @return {?}
       */
      run : function(opts) {
        opts.domains = opts.domains || xhr.defaultDomains;
        opts.secondLevelDomains = opts.secondLevelDomains || xhr.defaultSecondLevelDomains;
        opts.topLevelDomains = opts.topLevelDomains || xhr.defaultTopLevelDomains;
        opts.distanceFunction = opts.distanceFunction || xhr.sift3Distance;
        /**
         * @param {Object} a
         * @return {?}
         */
        var fn = function(a) {
          return a;
        };
        var callback = opts.suggested || fn;
        fn = opts.empty || fn;
        opts = xhr.suggest(xhr.encodeEmail(opts.email), opts.domains, opts.secondLevelDomains, opts.topLevelDomains, opts.distanceFunction);
        return opts ? callback(opts) : fn();
      },
      /**
       * @param {Object} options
       * @param {?} n
       * @param {string} data
       * @param {string} source
       * @param {boolean} distanceFunction
       * @return {?}
       */
      suggest : function(options, n, data, source, distanceFunction) {
        options = options.toLowerCase();
        options = this.splitEmail(options);
        if (!options) {
          return false;
        }
        if (data && (source && (-1 !== data.indexOf(options.secondLevelDomain) && -1 !== source.indexOf(options.topLevelDomain)))) {
          return false;
        }
        n = this.findClosestDomain(options.domain, n, distanceFunction, this.domainThreshold);
        if (n) {
          return n != options.domain && {
            address : options.address,
            domain : n,
            full : options.address + "@" + n
          };
        }
        n = this.findClosestDomain(options.secondLevelDomain, data, distanceFunction, this.secondLevelThreshold);
        data = this.findClosestDomain(options.topLevelDomain, source, distanceFunction, this.topLevelThreshold);
        if (options.domain) {
          source = options.domain;
          /** @type {boolean} */
          distanceFunction = false;
          if (n && (n != options.secondLevelDomain && (source = source.replace(options.secondLevelDomain, n), distanceFunction = true)), data && (data != options.topLevelDomain && (source = source.replace(options.topLevelDomain, data), distanceFunction = true)), 1 == distanceFunction) {
            return{
              address : options.address,
              domain : source,
              full : options.address + "@" + source
            };
          }
        }
        return false;
      },
      /**
       * @param {?} p
       * @param {?} data
       * @param {boolean} distanceFunction
       * @param {?} domain
       * @return {?}
       */
      findClosestDomain : function(p, data, distanceFunction, domain) {
        var dist;
        domain = domain || this.topLevelThreshold;
        /** @type {number} */
        var smallestDistance = 99;
        /** @type {null} */
        var datum = null;
        if (!p || !data) {
          return false;
        }
        distanceFunction = distanceFunction || this.sift3Distance;
        /** @type {number} */
        var i = 0;
        for (;i < data.length;i++) {
          if (p === data[i]) {
            return p;
          }
          if ((dist = distanceFunction(p, data[i])) < smallestDistance) {
            smallestDistance = dist;
            datum = data[i];
          }
        }
        return smallestDistance <= domain && (null !== datum && datum);
      },
      /**
       * @param {string} s1
       * @param {string} s2
       * @return {?}
       */
      sift3Distance : function(s1, s2) {
        if (null == s1 || 0 === s1.length) {
          return null == s2 || 0 === s2.length ? 0 : s2.length;
        }
        if (null == s2 || 0 === s2.length) {
          return s1.length;
        }
        /** @type {number} */
        var c = 0;
        /** @type {number} */
        var offset1 = 0;
        /** @type {number} */
        var offset2 = 0;
        /** @type {number} */
        var $ = 0;
        for (;c + offset1 < s1.length && c + offset2 < s2.length;) {
          if (s1.charAt(c + offset1) == s2.charAt(c + offset2)) {
            $++;
          } else {
            /** @type {number} */
            offset1 = 0;
            /** @type {number} */
            offset2 = 0;
            /** @type {number} */
            var i = 0;
            for (;i < 5;i++) {
              if (c + i < s1.length && s1.charAt(c + i) == s2.charAt(c)) {
                /** @type {number} */
                offset1 = i;
                break;
              }
              if (c + i < s2.length && s1.charAt(c) == s2.charAt(c + i)) {
                /** @type {number} */
                offset2 = i;
                break;
              }
            }
          }
          c++;
        }
        return(s1.length + s2.length) / 2 - $;
      },
      /**
       * @param {(Function|string)} b
       * @return {?}
       */
      splitEmail : function(b) {
        var namespaces = b.trim().split("@");
        if (namespaces.length < 2) {
          return false;
        }
        /** @type {number} */
        var i = 0;
        for (;i < namespaces.length;i++) {
          if ("" === namespaces[i]) {
            return false;
          }
        }
        var domain = namespaces.pop();
        if (!domain) {
          return false;
        }
        var codeSegments = domain.split(".");
        /** @type {string} */
        b = "";
        /** @type {string} */
        var tld = "";
        if (0 == codeSegments.length) {
          return false;
        }
        if (1 == codeSegments.length) {
          tld = codeSegments[0];
        } else {
          b = codeSegments[0];
          /** @type {number} */
          i = 1;
          for (;i < codeSegments.length;i++) {
            tld += codeSegments[i] + ".";
          }
          /** @type {string} */
          tld = tld.substring(0, tld.length - 1);
        }
        return{
          topLevelDomain : tld,
          secondLevelDomain : b,
          domain : domain,
          address : namespaces.join("@")
        };
      },
      /**
       * @param {?} link
       * @return {?}
       */
      encodeEmail : function(link) {
        return encodeURI(link).replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}");
      }
    };
    var mailcheck = xhr;
    /** @type {RegExp} */
    var rchecked = /^[^@]+@[^@]+$/;
    /** @type {Array} */
    val = [{
      name : "empty",
      /**
       * @param {boolean} type
       * @param {?} obj
       * @return {?}
       */
      execute : function(type, obj) {
        /** @type {boolean} */
        type = -1 < tokenTypes.indexOf(type);
        return type ? {
          hit : type,
          labelName : item.d.invalid,
          abnormalType : item.a.empty
        } : {
          hit : type,
          labelName : obj.labelName
        };
      },
      /**
       * @param {Object} event
       * @return {?}
       */
      next : function(event) {
        return!event.hit;
      }
    }, {
      name : "whitespace",
      /**
       * @param {string} target
       * @param {?} obj
       * @return {?}
       */
      execute : function(target, obj) {
        var value = target.replace(/\s/, "");
        return value === target ? {
          hit : false,
          labelName : obj.labelName
        } : {
          hit : true,
          labelName : item.d.invalid,
          abnormalType : item.a.whitespace,
          suggestedValue : value
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }, {
      name : "is_not_valid_email",
      /**
       * @param {boolean} hit
       * @param {?} obj
       * @return {?}
       */
      execute : function(hit, obj) {
        /** @type {boolean} */
        hit = !Object(x.b)(hit);
        return hit ? {
          hit : hit,
          labelName : item.d.invalid,
          abnormalType : item.b.isNotValidEmail
        } : {
          hit : hit,
          labelName : obj.labelName
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }, {
      name : "letter_case",
      /**
       * @param {boolean} next
       * @param {?} obj
       * @return {?}
       */
      execute : function(next, obj) {
        var charindex = next.toLowerCase();
        /** @type {boolean} */
        next = charindex !== next;
        return next ? {
          hit : next,
          labelName : obj.labelName,
          abnormalType : item.b.letterCase,
          suggestedValue : charindex
        } : {
          hit : next,
          labelName : obj.labelName
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }, {
      name : "is_not_possible_email",
      /**
       * @param {boolean} value
       * @param {?} obj
       * @return {?}
       */
      execute : function(value, obj) {
        /** @type {boolean} */
        value = !rchecked.test(value);
        return value ? {
          hit : value,
          labelName : item.d.invalid,
          abnormalType : item.b.isNotPossibleEmail
        } : {
          hit : value,
          labelName : obj.labelName
        };
      },
      /**
       * @param {Object} event
       * @return {?}
       */
      next : function(event) {
        return!event.hit;
      }
    }, {
      name : "domain_typo",
      /**
       * @param {boolean} value
       * @param {?} obj
       * @return {?}
       */
      execute : function(value, obj) {
        /** @type {string} */
        var full = "";
        mailcheck.run({
          email : value,
          /**
           * @param {Object} value
           * @return {undefined}
           */
          suggested : function(value) {
            full = value.full;
          },
          /**
           * @return {undefined}
           */
          empty : function() {
          }
        });
        /** @type {boolean} */
        value = !!full && full !== value;
        return value ? {
          hit : value,
          labelName : obj.labelName,
          abnormalType : item.b.domainTypo,
          suggestedValue : full
        } : {
          hit : value,
          labelName : obj.labelName
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }, {
      name : "address_format",
      /**
       * @param {boolean} callback
       * @param {?} obj
       * @return {?}
       */
      execute : function(callback, obj) {
        var cb = resolve(callback);
        /** @type {boolean} */
        callback = cb !== callback;
        return callback ? {
          hit : callback,
          labelName : item.d.invalid,
          abnormalType : item.b.addressFormat,
          suggestedValue : cb
        } : {
          hit : callback,
          labelName : obj.labelName
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }];
    var j = jQuery("SbFU");
    var pointList = {
      NOT_A_NUMBER : item.f.notANumber,
      INVALID_COUNTRY : item.f.invalidCountry,
      TOO_SHORT : item.f.tooShort,
      TOO_LONG : item.f.tooLong,
      INVALID_LENGTH : item.f.invalidLength
    };
    var special = {
      INVALID_COUNTRY : item.f.invalidCountryAfterInjectPlus,
      TOO_SHORT : item.f.tooShortAfterInjectPlus,
      TOO_LONG : item.f.tooLongAfterInjectPlus,
      INVALID_LENGTH : item.f.invalidLengthAfterInjectPlus,
      NOT_A_NUMBER : item.f.notANumberAfterInjectPlus
    };
    var uidList = {
      EMPTY_COUNTRY_CODE_THROUGH_IP : item.f.emptyCountryCodeThroughIP,
      INVALID_COUNTRY : item.f.invalidCountryAfterInjectCountry,
      TOO_SHORT : item.f.tooShortAfterInjectCountry,
      TOO_LONG : item.f.tooLongAfterInjectCountry,
      INVALID_LENGTH : item.f.invalidLengthAfterInjectCountry,
      NOT_A_NUMBER : item.f.notANumberAfterInjectCountry
    };
    /** @type {Array} */
    jQuery = [{
      name : "lib_rule",
      /**
       * @param {?} arr
       * @param {Object} obj
       * @return {?}
       */
      execute : function(arr, obj) {
        var i = frame.phoneUtil.validatePhoneNumberLength(arr);
        obj = {
          hit : false,
          labelName : obj.labelName
        };
        if (i) {
          /** @type {boolean} */
          obj.hit = true;
          obj.labelName = item.d.invalid;
          obj.abnormalType = pointList[i];
        }
        i = Object(frame.getPhone)(arr);
        return i !== arr && (obj.suggestedValue = i), obj;
      },
      /**
       * @param {Object} event
       * @return {?}
       */
      next : function(event) {
        return event.hit && event.abnormalType === item.f.invalidCountry;
      }
    }, [{
      name : "lib_rule_after_inject_plus",
      /**
       * @param {(number|string)} type
       * @param {?} obj
       * @return {?}
       */
      execute : function(type, obj) {
        type = frame.phoneUtil.validatePhoneNumberLength(id = "+" + type);
        if (type) {
          return{
            hit : true,
            labelName : item.d.invalid,
            abnormalType : special[type]
          };
        }
        var id = Object(frame.getPhone)(id);
        return{
          hit : false,
          labelName : obj.labelName,
          suggestedValue : id
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }, {
      name : "lib_rule_after_inject_country",
      /**
       * @param {string} buf
       * @param {?} obj
       * @return {?}
       */
      execute : function(buf, obj) {
        var camelKey = Object(j.j)();
        if (!camelKey) {
          return{
            hit : true,
            labelName : item.d.invalid,
            abnormalType : uidList.EMPTY_COUNTRY_CODE_THROUGH_IP
          };
        }
        var data = buf.trim().replace(/^\+/, "");
        var uid = frame.phoneUtil.validatePhoneNumberLength(buf, camelKey);
        if (uid) {
          return{
            hit : true,
            labelName : item.d.invalid,
            abnormalType : uidList[uid]
          };
        }
        data = Object(frame.getPhone)(buf, camelKey);
        return{
          hit : false,
          labelName : obj.labelName,
          suggestedValue : data
        };
      },
      /**
       * @return {?}
       */
      next : function() {
        return true;
      }
    }]];
    var types = {
      raw_email : val,
      raw_auto_email : val,
      raw_phone : jQuery,
      raw_auto_phone : jQuery,
      hashed_email : [],
      hashed_phone : []
    };
    /**
     * @param {Array} node
     * @param {number} opt_attributes
     * @return {?}
     */
    var format = function(node, opt_attributes) {
      var fn = "function" == typeof Symbol && node[Symbol.iterator];
      if (!fn) {
        return node;
      }
      var test;
      var mockError;
      var self = fn.call(node);
      /** @type {Array} */
      var _results = [];
      try {
        for (;(void 0 === opt_attributes || 0 < opt_attributes--) && !(test = self.next()).done;) {
          _results.push(test.value);
        }
      } catch (err) {
        mockError = {
          error : err
        };
      } finally {
        try {
          if (test) {
            if (!test.done) {
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
      return _results;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    var initialize = function(root) {
      var pkg = {};
      try {
        return root ? (Object.entries(root).forEach(function(node) {
          var nodes = format(node, 2);
          node = nodes[0];
          var el = nodes[1];
          switch(node) {
            case "email":
            ;
            case "sha256_email":
              pkg = removeClass(pkg, setter(el, "raw_email", "hashed_email"));
              break;
            case "auto_email":
              pkg = removeClass(pkg, setter(el, "raw_auto_email", "hashed_email"));
              break;
            case "phone_number":
            ;
            case "sha256_phone_number":
              pkg = removeClass(pkg, setter(el, "raw_phone", "hashed_phone"));
              break;
            case "auto_phone_number":
              pkg = removeClass(pkg, setter(el, "raw_auto_phone", "hashed_phone"));
          }
        }), pkg) : pkg;
      } catch (r20) {
        return Object(obj.c)(object.a.CUSTOM_ERROR, r20, {
          custom_name : "gen_identifier_label_error"
        }), pkg;
      }
    };
  },
  /**
   * @param {Object} module
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  PDX0 : function(module, dataAndEvents) {
    !function(unique) {
      module.exports = unique;
    }.call(this, {});
  },
  /**
   * @param {Object} module
   * @param {?} dataAndEvents
   * @param {?} callback
   * @return {undefined}
   */
  bCcq : function(module, dataAndEvents, callback) {
    !function(part) {
      var returnValue;
      !function() {
        /**
         * @param {boolean} component
         * @param {?} async
         * @return {undefined}
         */
        function test(component, async) {
          if (async) {
            /** @type {number} */
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            /** @type {Array} */
            this.blocks = blocks;
          } else {
            /** @type {Array} */
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
          if (component) {
            /** @type {number} */
            this.h0 = 3238371032;
            /** @type {number} */
            this.h1 = 914150663;
            /** @type {number} */
            this.h2 = 812702999;
            /** @type {number} */
            this.h3 = 4144912697;
            /** @type {number} */
            this.h4 = 4290775857;
            /** @type {number} */
            this.h5 = 1750603025;
            /** @type {number} */
            this.h6 = 1694076839;
            /** @type {number} */
            this.h7 = 3204075428;
          } else {
            /** @type {number} */
            this.h0 = 1779033703;
            /** @type {number} */
            this.h1 = 3144134277;
            /** @type {number} */
            this.h2 = 1013904242;
            /** @type {number} */
            this.h3 = 2773480762;
            /** @type {number} */
            this.h4 = 1359893119;
            /** @type {number} */
            this.h5 = 2600822924;
            /** @type {number} */
            this.h6 = 528734635;
            /** @type {number} */
            this.h7 = 1541459225;
          }
          /** @type {number} */
          this.block = this.start = this.bytes = this.hBytes = 0;
          /** @type {boolean} */
          this.finalized = this.hashed = false;
          /** @type {boolean} */
          this.first = true;
          /** @type {boolean} */
          this.is224 = component;
        }
        /**
         * @param {Object} input
         * @param {string} f
         * @param {?} key
         * @return {undefined}
         */
        function get(input, f, key) {
          /** @type {string} */
          var type = typeof input;
          if ("string" == type) {
            var val;
            /** @type {Array} */
            var res = [];
            var il = input.length;
            /** @type {number} */
            var resLength = 0;
            /** @type {number} */
            var i = 0;
            for (;i < il;++i) {
              if ((val = input.charCodeAt(i)) < 128) {
                res[resLength++] = val;
              } else {
                if (val < 2048) {
                  /** @type {number} */
                  res[resLength++] = 192 | val >> 6;
                } else {
                  if (val < 55296 || 57344 <= val) {
                    /** @type {number} */
                    res[resLength++] = 224 | val >> 12;
                  } else {
                    /** @type {number} */
                    val = 65536 + ((1023 & val) << 10 | 1023 & input.charCodeAt(++i));
                    /** @type {number} */
                    res[resLength++] = 240 | val >> 18;
                    /** @type {number} */
                    res[resLength++] = 128 | val >> 12 & 63;
                  }
                  /** @type {number} */
                  res[resLength++] = 128 | val >> 6 & 63;
                }
                /** @type {number} */
                res[resLength++] = 128 | 63 & val;
              }
            }
            /** @type {Array} */
            input = res;
          } else {
            if ("object" != type) {
              throw new Error(str);
            }
            if (null === input) {
              throw new Error(str);
            }
            if (shallow && input.constructor === ArrayBuffer) {
              /** @type {Uint8Array} */
              input = new Uint8Array(input);
            } else {
              if (!(Array.isArray(input) || shallow && ArrayBuffer.isView(input))) {
                throw new Error(str);
              }
            }
          }
          if (64 < input.length) {
            input = (new test(f, true)).update(input).array();
          }
          /** @type {Array} */
          var output = [];
          /** @type {Array} */
          var array = [];
          /** @type {number} */
          i = 0;
          for (;i < 64;++i) {
            var xor = input[i] || 0;
            /** @type {number} */
            output[i] = 92 ^ xor;
            /** @type {number} */
            array[i] = 54 ^ xor;
          }
          test.call(this, f, key);
          this.update(array);
          /** @type {Array} */
          this.oKeyPad = output;
          /** @type {boolean} */
          this.inner = true;
          this.sharedMemory = key;
        }
        /** @type {string} */
        var str = "input is invalid type";
        /** @type {boolean} */
        var nodeId = "object" == typeof window;
        /** @type {(Window|{})} */
        var root = nodeId ? window : {};
        if (root.JS_SHA256_NO_WINDOW) {
          /** @type {boolean} */
          nodeId = false;
        }
        /** @type {boolean} */
        var WEB_WORKER = !nodeId && "object" == typeof self;
        var strip = !root.JS_SHA256_NO_NODE_JS && (Object({
          env : Object({
            BUILD_TYPE : "online",
            NODE_ENV : "production",
            RUN_REGION : "OTHER",
            DEBUG : "CLOSE",
            RUNTIME : "DEFAULT",
            BLOOM : "DISABLE",
            PICKUP : "DISABLE",
            COMBINE : "DISABLE",
            COMBINE_IDENTIFY : "DISABLE"
          })
        }).versions && Object({
          env : Object({
            BUILD_TYPE : "online",
            NODE_ENV : "production",
            RUN_REGION : "OTHER",
            DEBUG : "CLOSE",
            RUNTIME : "DEFAULT",
            BLOOM : "DISABLE",
            PICKUP : "DISABLE",
            COMBINE : "DISABLE",
            COMBINE_IDENTIFY : "DISABLE"
          })
        }).versions.node);
        if (strip) {
          /** @type {boolean} */
          root = part;
        } else {
          if (WEB_WORKER) {
            /** @type {Window} */
            root = self;
          }
        }
        var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && ("object" == typeof module && module.exports);
        var current = callback("PDX0");
        /** @type {boolean} */
        var shallow = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer;
        /** @type {Array.<string>} */
        var bits = "0123456789abcdef".split("");
        /** @type {Array} */
        var prev = [-2147483648, 8388608, 32768, 128];
        /** @type {Array} */
        var SHIFT = [24, 16, 8, 0];
        /** @type {Array} */
        var spec = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921,
        2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        /** @type {Array} */
        var codeSegments = ["hex", "array", "digest", "arrayBuffer"];
        /** @type {Array} */
        var blocks = [];
        if (!(!root.JS_SHA256_NO_NODE_JS && Array.isArray)) {
          /**
           * @param {*} array
           * @return {boolean}
           */
          Array.isArray = function(array) {
            return "[object Array]" === Object.prototype.toString.call(array);
          };
        }
        if (!!shallow) {
          if (!(!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView)) {
            /**
             * @param {Object} item
             * @return {?}
             */
            ArrayBuffer.isView = function(item) {
              return "object" == typeof item && (item.buffer && item.buffer.constructor === ArrayBuffer);
            };
          }
        }
        /**
         * @param {string} name
         * @param {string} deepDataAndEvents
         * @return {?}
         */
        var $ = function(name, deepDataAndEvents) {
          return function(string) {
            return(new test(deepDataAndEvents, true)).update(string)[name]();
          };
        };
        /**
         * @param {Object} deepDataAndEvents
         * @return {?}
         */
        var Player = function(deepDataAndEvents) {
          var content = $("hex", deepDataAndEvents);
          /**
           * @return {?}
           */
          (content = strip ? onLoad(content, deepDataAndEvents) : content).create = function() {
            return new test(deepDataAndEvents);
          };
          /**
           * @param {?} input
           * @return {?}
           */
          content.update = function(input) {
            return content.create().update(input);
          };
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;++i) {
            var label = codeSegments[i];
            content[label] = $(label, deepDataAndEvents);
          }
          return content;
        };
        /**
         * @param {?} cb
         * @param {boolean} deepDataAndEvents
         * @return {?}
         */
        var onLoad = function(cb, deepDataAndEvents) {
          /** @type {*} */
          var crypto = eval("require('crypto')");
          /** @type {*} */
          var t = eval("require('buffer').Buffer");
          /** @type {string} */
          var algorithm = deepDataAndEvents ? "sha224" : "sha256";
          /**
           * @param {?} input
           * @return {?}
           */
          var init = function(input) {
            if ("string" == typeof input) {
              return crypto.createHash(algorithm).update(input, "utf8").digest("hex");
            }
            if (null == input) {
              throw new Error(str);
            }
            return input.constructor === ArrayBuffer && (input = new Uint8Array(input)), Array.isArray(input) || (ArrayBuffer.isView(input) || input.constructor === t) ? crypto.createHash(algorithm).update(new t(input)).digest("hex") : cb(input);
          };
          return init;
        };
        /**
         * @param {string} name
         * @param {Object} deepDataAndEvents
         * @return {?}
         */
        var template = function(name, deepDataAndEvents) {
          return function(dataAndEvents, string) {
            return(new get(dataAndEvents, deepDataAndEvents, true)).update(string)[name]();
          };
        };
        /**
         * @param {boolean} deepDataAndEvents
         * @return {?}
         */
        var bind = function(deepDataAndEvents) {
          var b = template("hex", deepDataAndEvents);
          /**
           * @param {?} element
           * @return {?}
           */
          b.create = function(element) {
            return new get(element, deepDataAndEvents);
          };
          /**
           * @param {?} element
           * @param {?} input
           * @return {?}
           */
          b.update = function(element, input) {
            return b.create(element).update(input);
          };
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;++i) {
            var service = codeSegments[i];
            b[service] = template(service, deepDataAndEvents);
          }
          return b;
        };
        /**
         * @param {?} input
         * @return {?}
         */
        test.prototype.update = function(input) {
          if (!this.finalized) {
            var t;
            /** @type {string} */
            var type = typeof input;
            if ("string" != type) {
              if ("object" != type) {
                throw new Error(str);
              }
              if (null === input) {
                throw new Error(str);
              }
              if (shallow && input.constructor === ArrayBuffer) {
                /** @type {Uint8Array} */
                input = new Uint8Array(input);
              } else {
                if (!(Array.isArray(input) || shallow && ArrayBuffer.isView(input))) {
                  throw new Error(str);
                }
              }
              /** @type {boolean} */
              t = true;
            }
            var x;
            var start;
            /** @type {number} */
            var j = 0;
            var end = input.length;
            var blocks = this.blocks;
            for (;j < end;) {
              if (this.hashed && (this.hashed = false, blocks[0] = this.block, blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0), t) {
                start = this.start;
                for (;j < end && start < 64;++j) {
                  blocks[start >> 2] |= input[j] << SHIFT[3 & start++];
                }
              } else {
                start = this.start;
                for (;j < end && start < 64;++j) {
                  if ((x = input.charCodeAt(j)) < 128) {
                    blocks[start >> 2] |= x << SHIFT[3 & start++];
                  } else {
                    if (x < 2048) {
                      blocks[start >> 2] |= (192 | x >> 6) << SHIFT[3 & start++];
                    } else {
                      if (x < 55296 || 57344 <= x) {
                        blocks[start >> 2] |= (224 | x >> 12) << SHIFT[3 & start++];
                      } else {
                        /** @type {number} */
                        x = 65536 + ((1023 & x) << 10 | 1023 & input.charCodeAt(++j));
                        blocks[start >> 2] |= (240 | x >> 18) << SHIFT[3 & start++];
                        blocks[start >> 2] |= (128 | x >> 12 & 63) << SHIFT[3 & start++];
                      }
                      blocks[start >> 2] |= (128 | x >> 6 & 63) << SHIFT[3 & start++];
                    }
                    blocks[start >> 2] |= (128 | 63 & x) << SHIFT[3 & start++];
                  }
                }
              }
              this.lastByteIndex = start;
              this.bytes += start - this.start;
              if (64 <= start) {
                this.block = blocks[16];
                /** @type {number} */
                this.start = start - 64;
                this.hash();
                /** @type {boolean} */
                this.hashed = true;
              } else {
                this.start = start;
              }
            }
            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
          }
        };
        /**
         * @return {undefined}
         */
        test.prototype.finalize = function() {
          var block;
          var WMASK;
          if (!this.finalized) {
            /** @type {boolean} */
            this.finalized = true;
            block = this.blocks;
            WMASK = this.lastByteIndex;
            block[16] = this.block;
            block[WMASK >> 2] |= prev[3 & WMASK];
            this.block = block[16];
            if (56 <= WMASK) {
              if (!this.hashed) {
                this.hash();
              }
              block[0] = this.block;
              /** @type {number} */
              block[16] = block[1] = block[2] = block[3] = block[4] = block[5] = block[6] = block[7] = block[8] = block[9] = block[10] = block[11] = block[12] = block[13] = block[14] = block[15] = 0;
            }
            /** @type {number} */
            block[14] = this.hBytes << 3 | this.bytes >>> 29;
            /** @type {number} */
            block[15] = this.bytes << 3;
            this.hash();
          }
        };
        /**
         * @return {undefined}
         */
        test.prototype.hash = function() {
          var elem;
          var j;
          var h4;
          var highPriority;
          var randomBit;
          var S;
          var bits = this.h0;
          var x = this.h1;
          var y = this.h2;
          var mask = this.h3;
          var a = this.h4;
          var b = this.h5;
          var c = this.h6;
          var d = this.h7;
          var wrap = this.blocks;
          /** @type {number} */
          var i = 16;
          for (;i < 64;++i) {
            /** @type {number} */
            elem = ((j = wrap[i - 15]) >>> 7 | j << 25) ^ (j >>> 18 | j << 14) ^ j >>> 3;
            j = wrap[i - 2];
            /** @type {number} */
            wrap[i] = wrap[i - 16] + elem + wrap[i - 7] + ((j >>> 17 | j << 15) ^ (j >>> 19 | j << 13) ^ j >>> 10) << 0;
          }
          /** @type {number} */
          S = x & y;
          /** @type {number} */
          i = 0;
          for (;i < 64;i += 4) {
            if (this.first) {
              /** @type {number} */
              mask = this.is224 ? (h4 = 300032, d = (j = wrap[0] - 1413257819) - 150054599 << 0, j + 24177077 << 0) : (h4 = 704751109, d = (j = wrap[0] - 210244248) - 1521486534 << 0, j + 143694565 << 0);
              /** @type {boolean} */
              this.first = false;
            } else {
              /** @type {number} */
              d = mask + (j = d + ((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & b ^ ~a & c) + spec[i] + wrap[i]) << 0;
              /** @type {number} */
              mask = j + ((elem = (bits >>> 2 | bits << 30) ^ (bits >>> 13 | bits << 19) ^ (bits >>> 22 | bits << 10)) + ((h4 = bits & x) ^ bits & y ^ S)) << 0;
            }
            /** @type {number} */
            c = y + (j = c + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & a ^ ~d & b) + spec[i + 1] + wrap[i + 1]) << 0;
            /** @type {number} */
            y = j + ((elem = (mask >>> 2 | mask << 30) ^ (mask >>> 13 | mask << 19) ^ (mask >>> 22 | mask << 10)) + ((highPriority = mask & bits) ^ mask & x ^ h4)) << 0;
            /** @type {number} */
            b = x + (j = b + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & d ^ ~c & a) + spec[i + 2] + wrap[i + 2]) << 0;
            /** @type {number} */
            x = j + ((elem = (y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + ((randomBit = y & mask) ^ y & bits ^ highPriority)) << 0;
            /** @type {number} */
            a = bits + (j = a + ((b >>> 6 | b << 26) ^ (b >>> 11 | b << 21) ^ (b >>> 25 | b << 7)) + (b & c ^ ~b & d) + spec[i + 3] + wrap[i + 3]) << 0;
            /** @type {number} */
            bits = j + ((elem = (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)) + ((S = x & y) ^ x & mask ^ randomBit)) << 0;
          }
          /** @type {number} */
          this.h0 = this.h0 + bits << 0;
          /** @type {number} */
          this.h1 = this.h1 + x << 0;
          /** @type {number} */
          this.h2 = this.h2 + y << 0;
          /** @type {number} */
          this.h3 = this.h3 + mask << 0;
          /** @type {number} */
          this.h4 = this.h4 + a << 0;
          /** @type {number} */
          this.h5 = this.h5 + b << 0;
          /** @type {number} */
          this.h6 = this.h6 + c << 0;
          /** @type {number} */
          this.h7 = this.h7 + d << 0;
        };
        /**
         * @return {?}
         */
        test.prototype.hex = function() {
          this.finalize();
          var h0 = this.h0;
          var h1 = this.h1;
          var h2 = this.h2;
          var h3 = this.h3;
          var h4 = this.h4;
          var h5 = this.h5;
          var h6 = this.h6;
          var h7 = this.h7;
          /** @type {string} */
          h6 = bits[h0 >> 28 & 15] + bits[h0 >> 24 & 15] + bits[h0 >> 20 & 15] + bits[h0 >> 16 & 15] + bits[h0 >> 12 & 15] + bits[h0 >> 8 & 15] + bits[h0 >> 4 & 15] + bits[15 & h0] + bits[h1 >> 28 & 15] + bits[h1 >> 24 & 15] + bits[h1 >> 20 & 15] + bits[h1 >> 16 & 15] + bits[h1 >> 12 & 15] + bits[h1 >> 8 & 15] + bits[h1 >> 4 & 15] + bits[15 & h1] + bits[h2 >> 28 & 15] + bits[h2 >> 24 & 15] + bits[h2 >> 20 & 15] + bits[h2 >> 16 & 15] + bits[h2 >> 12 & 15] + bits[h2 >> 8 & 15] + bits[h2 >> 4 & 15] +
          bits[15 & h2] + bits[h3 >> 28 & 15] + bits[h3 >> 24 & 15] + bits[h3 >> 20 & 15] + bits[h3 >> 16 & 15] + bits[h3 >> 12 & 15] + bits[h3 >> 8 & 15] + bits[h3 >> 4 & 15] + bits[15 & h3] + bits[h4 >> 28 & 15] + bits[h4 >> 24 & 15] + bits[h4 >> 20 & 15] + bits[h4 >> 16 & 15] + bits[h4 >> 12 & 15] + bits[h4 >> 8 & 15] + bits[h4 >> 4 & 15] + bits[15 & h4] + bits[h5 >> 28 & 15] + bits[h5 >> 24 & 15] + bits[h5 >> 20 & 15] + bits[h5 >> 16 & 15] + bits[h5 >> 12 & 15] + bits[h5 >> 8 & 15] + bits[h5 >>
          4 & 15] + bits[15 & h5] + bits[h6 >> 28 & 15] + bits[h6 >> 24 & 15] + bits[h6 >> 20 & 15] + bits[h6 >> 16 & 15] + bits[h6 >> 12 & 15] + bits[h6 >> 8 & 15] + bits[h6 >> 4 & 15] + bits[15 & h6];
          return this.is224 || (h6 += bits[h7 >> 28 & 15] + bits[h7 >> 24 & 15] + bits[h7 >> 20 & 15] + bits[h7 >> 16 & 15] + bits[h7 >> 12 & 15] + bits[h7 >> 8 & 15] + bits[h7 >> 4 & 15] + bits[15 & h7]), h6;
        };
        /** @type {function (): ?} */
        test.prototype.toString = test.prototype.hex;
        /**
         * @return {?}
         */
        test.prototype.digest = function() {
          this.finalize();
          var h0 = this.h0;
          var h1 = this.h1;
          var h2 = this.h2;
          var h3 = this.h3;
          var h4 = this.h4;
          var h5 = this.h5;
          var eventPath = this.h6;
          var h7 = this.h7;
          /** @type {Array} */
          eventPath = [h0 >> 24 & 255, h0 >> 16 & 255, h0 >> 8 & 255, 255 & h0, h1 >> 24 & 255, h1 >> 16 & 255, h1 >> 8 & 255, 255 & h1, h2 >> 24 & 255, h2 >> 16 & 255, h2 >> 8 & 255, 255 & h2, h3 >> 24 & 255, h3 >> 16 & 255, h3 >> 8 & 255, 255 & h3, h4 >> 24 & 255, h4 >> 16 & 255, h4 >> 8 & 255, 255 & h4, h5 >> 24 & 255, h5 >> 16 & 255, h5 >> 8 & 255, 255 & h5, eventPath >> 24 & 255, eventPath >> 16 & 255, eventPath >> 8 & 255, 255 & eventPath];
          return this.is224 || eventPath.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, 255 & h7), eventPath;
        };
        /** @type {function (): ?} */
        test.prototype.array = test.prototype.digest;
        /**
         * @return {?}
         */
        test.prototype.arrayBuffer = function() {
          this.finalize();
          /** @type {ArrayBuffer} */
          var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
          /** @type {DataView} */
          var view = new DataView(buffer);
          return view.setUint32(0, this.h0), view.setUint32(4, this.h1), view.setUint32(8, this.h2), view.setUint32(12, this.h3), view.setUint32(16, this.h4), view.setUint32(20, this.h5), view.setUint32(24, this.h6), this.is224 || view.setUint32(28, this.h7), buffer;
        };
        get.prototype = new test;
        /**
         * @return {undefined}
         */
        get.prototype.finalize = function() {
          var array;
          test.prototype.finalize.call(this);
          if (this.inner) {
            /** @type {boolean} */
            this.inner = false;
            array = this.array();
            test.call(this, this.is224, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(array);
            test.prototype.finalize.call(this);
          }
        };
        var scope = Player();
        scope.sha256 = scope;
        scope.sha224 = Player(true);
        scope.sha256.hmac = bind();
        scope.sha224.hmac = bind(true);
        if (COMMON_JS) {
          module.exports = scope;
        } else {
          root.sha256 = scope.sha256;
          root.sha224 = scope.sha224;
          if (current) {
            returnValue = function() {
              return scope;
            }.call(scope, callback, scope, module);
            if (!(void 0 === returnValue)) {
              module.exports = returnValue;
            }
          }
        }
      }();
    }.call(this, callback("yLpj"));
  }
}]);
