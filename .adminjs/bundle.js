(function (React, designSystem, styled, adminjs) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var blobToBase64 = function blobToBase64(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        resolve(reader.result);
      };
    });
  };
  var UploadPhoto = function UploadPhoto(props) {
    var property = props.property,
      record = props.record,
      onChange = props.onChange;
    var onUpload = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(files) {
        var newRecord, file, b64;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              newRecord = _objectSpread2({}, record);
              file = files.length && files[0];
              _context.next = 4;
              return blobToBase64(file);
            case 4:
              b64 = _context.sent;
              console.log(newRecord);
              onChange(_objectSpread2(_objectSpread2({}, newRecord), {}, {
                params: _objectSpread2(_objectSpread2({}, newRecord.params), {}, _defineProperty({}, property.name, {
                  file: b64
                }))
              }));
              event.preventDefault();
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function onUpload(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/React__namespace.createElement(designSystem.Box, null, /*#__PURE__*/React__namespace.createElement(designSystem.Label, {
      style: {
        marginBottom: 15
      }
    }, property.label), /*#__PURE__*/React__namespace.createElement(designSystem.DropZone, {
      onChange: function onChange(files) {
        return onUpload(files);
      }
    }));
  };

  function identity(x) {
    return x;
  }

  /** @internal */
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function (prev, fn) {
        return fn(prev);
      }, input);
    };
  }
  function observable(_subscribe) {
    var self = {
      subscribe: function subscribe(observer) {
        var teardownRef = null;
        var isDone = false;
        var unsubscribed = false;
        var teardownImmediately = false;
        function unsubscribe() {
          if (teardownRef === null) {
            teardownImmediately = true;
            return;
          }
          if (unsubscribed) {
            return;
          }
          unsubscribed = true;
          if (typeof teardownRef === 'function') {
            teardownRef();
          } else if (teardownRef) {
            teardownRef.unsubscribe();
          }
        }
        teardownRef = _subscribe({
          next: function next(value) {
            var _observer$next;
            if (isDone) {
              return;
            }
            (_observer$next = observer.next) === null || _observer$next === void 0 ? void 0 : _observer$next.call(observer, value);
          },
          error: function error(err) {
            var _observer$error;
            if (isDone) {
              return;
            }
            isDone = true;
            (_observer$error = observer.error) === null || _observer$error === void 0 ? void 0 : _observer$error.call(observer, err);
            unsubscribe();
          },
          complete: function complete() {
            var _observer$complete;
            if (isDone) {
              return;
            }
            isDone = true;
            (_observer$complete = observer.complete) === null || _observer$complete === void 0 ? void 0 : _observer$complete.call(observer);
            unsubscribe();
          }
        });
        if (teardownImmediately) {
          unsubscribe();
        }
        return {
          unsubscribe: unsubscribe
        };
      },
      pipe: function pipe() {
        for (var _len = arguments.length, operations = new Array(_len), _key = 0; _key < _len; _key++) {
          operations[_key] = arguments[_key];
        }
        return pipeFromArray(operations)(self);
      }
    };
    return self;
  }

  function share(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _opts) {
    return function (originalObserver) {
      var refCount = 0;
      var subscription = null;
      var observers = [];
      function startIfNeeded() {
        if (subscription) {
          return;
        }
        subscription = originalObserver.subscribe({
          next: function next(value) {
            for (var _i = 0, _observers = observers; _i < _observers.length; _i++) {
              var _observer$next;
              var observer = _observers[_i];
              (_observer$next = observer.next) === null || _observer$next === void 0 ? void 0 : _observer$next.call(observer, value);
            }
          },
          error: function error(_error) {
            for (var _i2 = 0, _observers2 = observers; _i2 < _observers2.length; _i2++) {
              var _observer$error;
              var observer = _observers2[_i2];
              (_observer$error = observer.error) === null || _observer$error === void 0 ? void 0 : _observer$error.call(observer, _error);
            }
          },
          complete: function complete() {
            for (var _i3 = 0, _observers3 = observers; _i3 < _observers3.length; _i3++) {
              var _observer$complete;
              var observer = _observers3[_i3];
              (_observer$complete = observer.complete) === null || _observer$complete === void 0 ? void 0 : _observer$complete.call(observer);
            }
          }
        });
      }
      function resetIfNeeded() {
        // "resetOnRefCountZero"
        if (refCount === 0 && subscription) {
          var _sub = subscription;
          subscription = null;
          _sub.unsubscribe();
        }
      }
      return {
        subscribe: function subscribe(observer) {
          refCount++;
          observers.push(observer);
          startIfNeeded();
          return {
            unsubscribe: function unsubscribe() {
              refCount--;
              resetIfNeeded();
              var index = observers.findIndex(function (v) {
                return v === observer;
              });
              if (index > -1) {
                observers.splice(index, 1);
              }
            }
          };
        }
      };
    };
  }
  function tap(observer) {
    return function (originalObserver) {
      return {
        subscribe: function subscribe(observer2) {
          return originalObserver.subscribe({
            next: function next(v) {
              var _observer$next3, _observer2$next;
              (_observer$next3 = observer.next) === null || _observer$next3 === void 0 ? void 0 : _observer$next3.call(observer, v);
              (_observer2$next = observer2.next) === null || _observer2$next === void 0 ? void 0 : _observer2$next.call(observer2, v);
            },
            error: function error(v) {
              var _observer$error3, _observer2$error;
              (_observer$error3 = observer.error) === null || _observer$error3 === void 0 ? void 0 : _observer$error3.call(observer, v);
              (_observer2$error = observer2.error) === null || _observer2$error === void 0 ? void 0 : _observer2$error.call(observer2, v);
            },
            complete: function complete() {
              var _observer$complete3, _observer2$complete;
              (_observer$complete3 = observer.complete) === null || _observer$complete3 === void 0 ? void 0 : _observer$complete3.call(observer);
              (_observer2$complete = observer2.complete) === null || _observer2$complete === void 0 ? void 0 : _observer2$complete.call(observer2);
            }
          });
        }
      };
    };
  }
  var ObservableAbortError = /*#__PURE__*/function (_Error) {
    _inherits(ObservableAbortError, _Error);
    var _super = _createSuper(ObservableAbortError);
    function ObservableAbortError(message) {
      var _this;
      _classCallCheck(this, ObservableAbortError);
      _this = _super.call(this, message);
      _this.name = 'ObservableAbortError';
      Object.setPrototypeOf(_assertThisInitialized(_this), ObservableAbortError.prototype);
      return _this;
    }
    return _createClass(ObservableAbortError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /** @internal */
  function observableToPromise(observable) {
    var abort;
    var promise = new Promise(function (resolve, reject) {
      var isDone = false;
      function onDone() {
        if (isDone) {
          return;
        }
        isDone = true;
        reject(new ObservableAbortError('This operation was aborted.'));
        obs$.unsubscribe();
      }
      var obs$ = observable.subscribe({
        next: function next(data) {
          isDone = true;
          resolve(data);
          onDone();
        },
        error: function error(data) {
          isDone = true;
          reject(data);
          onDone();
        },
        complete: function complete() {
          isDone = true;
          onDone();
        }
      });
      abort = onDone;
    });
    return {
      promise: promise,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      abort: abort
    };
  }

  var TRPCClientError = /*#__PURE__*/function (_Error) {
    _inherits(TRPCClientError, _Error);
    var _super = _createSuper(TRPCClientError);
    function TRPCClientError(message, opts) {
      var _opts$result, _opts$result2;
      var _this;
      _classCallCheck(this, TRPCClientError);
      var cause = opts === null || opts === void 0 ? void 0 : opts.cause;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore https://github.com/tc39/proposal-error-cause
      _this = _super.call(this, message, {
        cause: cause
      });
      _this.meta = opts === null || opts === void 0 ? void 0 : opts.meta;
      _this.cause = cause;
      _this.shape = opts === null || opts === void 0 ? void 0 : (_opts$result = opts.result) === null || _opts$result === void 0 ? void 0 : _opts$result.error;
      _this.data = opts === null || opts === void 0 ? void 0 : (_opts$result2 = opts.result) === null || _opts$result2 === void 0 ? void 0 : _opts$result2.error.data;
      _this.name = 'TRPCClientError';
      Object.setPrototypeOf(_assertThisInitialized(_this), TRPCClientError.prototype);
      return _this;
    }
    _createClass(TRPCClientError, null, [{
      key: "from",
      value: function from(cause) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!(cause instanceof Error)) {
          var _cause$error$message;
          return new TRPCClientError((_cause$error$message = cause.error.message) !== null && _cause$error$message !== void 0 ? _cause$error$message : '', _objectSpread2(_objectSpread2({}, opts), {}, {
            cause: undefined,
            result: cause
          }));
        }
        if (cause.name === 'TRPCClientError') {
          return cause;
        }
        return new TRPCClientError(cause.message, _objectSpread2(_objectSpread2({}, opts), {}, {
          cause: cause,
          result: null
        }));
      }
    }]);
    return TRPCClientError;
  }( /*#__PURE__*/_wrapNativeSuper(Error)); // FIXME:
  // - the generics here are probably unnecessary
  // - the RPC-spec could probably be simplified to combine HTTP + WS
  /** @internal */
  function transformResultInner(response, runtime) {
    if ('error' in response) {
      var error = runtime.transformer.deserialize(response.error);
      return {
        ok: false,
        error: _objectSpread2(_objectSpread2({}, response), {}, {
          error: error
        })
      };
    }
    var result = _objectSpread2(_objectSpread2({}, response.result), (!response.result.type || response.result.type === 'data') && {
      type: 'data',
      data: runtime.transformer.deserialize(response.result.data)
    });
    return {
      ok: true,
      result: result
    };
  }
  function isObject$1(value) {
    // check that value is object
    return !!value && !Array.isArray(value) && _typeof(value) === 'object';
  }
  /**
   * Transforms and validates that the result is a valid TRPCResponse
   * @internal
   */
  function transformResult(response, runtime) {
    var result;
    try {
      // Use the data transformers on the JSON-response
      result = transformResultInner(response, runtime);
    } catch (err) {
      throw new TRPCClientError('Unable to transform response from server');
    }
    // check that output of the transformers is a valid TRPCResponse
    if (!result.ok && (!isObject$1(result.error.error) || typeof result.error.error.code !== 'number')) {
      throw new TRPCClientError('Badly formatted response from server');
    }
    if (result.ok && !isObject$1(result.result)) {
      throw new TRPCClientError('Badly formatted response from server');
    }
    return result;
  }

  /** @internal */
  function createChain(opts) {
    return observable(function (observer) {
      function execute() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : opts.op;
        var next = opts.links[index];
        if (!next) {
          throw new Error('No more links to execute - did you forget to add an ending link?');
        }
        var subscription = next({
          op: op,
          next: function next(nextOp) {
            var nextObserver = execute(index + 1, nextOp);
            return nextObserver;
          }
        });
        return subscription;
      }
      var obs$ = execute();
      return obs$.subscribe(observer);
    });
  }
  function asArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function splitLink(opts) {
    return function (runtime) {
      var yes = asArray(opts["true"]).map(function (link) {
        return link(runtime);
      });
      var no = asArray(opts["false"]).map(function (link) {
        return link(runtime);
      });
      return function (props) {
        return observable(function (observer) {
          var links = opts.condition(props.op) ? yes : no;
          return createChain({
            op: props.op,
            links: links
          }).subscribe(observer);
        });
      };
    };
  }

  function getWindow() {
    if (typeof window !== 'undefined') {
      return window;
    }
    return globalThis;
  }
  function getAbortController$1(ac) {
    var _ref;
    return (_ref = ac !== null && ac !== void 0 ? ac : getWindow().AbortController) !== null && _ref !== void 0 ? _ref : null;
  }
  function getFetch(f) {
    if (f) {
      return f;
    }
    var win = getWindow();
    var globalFetch = win.fetch;
    if (globalFetch) {
      return typeof globalFetch.bind === 'function' ? globalFetch.bind(win) : globalFetch;
    }
    throw new Error('No fetch implementation found');
  }
  function resolveHTTPLinkOptions(opts) {
    var headers = opts.headers || function () {
      return {};
    };
    return {
      url: opts.url,
      fetch: getFetch(opts.fetch),
      AbortController: getAbortController$1(opts.AbortController),
      headers: typeof headers === 'function' ? headers : function () {
        return headers;
      }
    };
  }
  // https://github.com/trpc/trpc/pull/669
  function arrayToDict(array) {
    var dict = {};
    for (var index = 0; index < array.length; index++) {
      var element = array[index];
      dict[index] = element;
    }
    return dict;
  }
  var METHOD = {
    query: 'GET',
    mutation: 'POST'
  };
  function getInput(opts) {
    return 'input' in opts ? opts.runtime.transformer.serialize(opts.input) : arrayToDict(opts.inputs.map(function (_input) {
      return opts.runtime.transformer.serialize(_input);
    }));
  }
  function getUrl(opts) {
    var url = opts.url + '/' + opts.path;
    var queryParts = [];
    if ('inputs' in opts) {
      queryParts.push('batch=1');
    }
    if (opts.type === 'query') {
      var input = getInput(opts);
      if (input !== undefined) {
        queryParts.push("input=".concat(encodeURIComponent(JSON.stringify(input))));
      }
    }
    if (queryParts.length) {
      url += '?' + queryParts.join('&');
    }
    return url;
  }
  function getBody(opts) {
    if (opts.type === 'query') {
      return undefined;
    }
    var input = getInput(opts);
    return input !== undefined ? JSON.stringify(input) : undefined;
  }
  function httpRequest(opts) {
    var type = opts.type;
    var ac = opts.AbortController ? new opts.AbortController() : null;
    var promise = new Promise(function (resolve, reject) {
      var url = getUrl(opts);
      var body = getBody(opts);
      var meta = {};
      Promise.resolve(opts.headers()).then(function (headers) {
        /* istanbul ignore if  */if (type === 'subscription') {
          throw new Error('Subscriptions should use wsLink');
        }
        return opts.fetch(url, {
          method: METHOD[type],
          signal: ac === null || ac === void 0 ? void 0 : ac.signal,
          body: body,
          headers: _objectSpread2({
            'content-type': 'application/json'
          }, headers)
        });
      }).then(function (_res) {
        meta.response = _res;
        return _res.json();
      }).then(function (json) {
        resolve({
          json: json,
          meta: meta
        });
      })["catch"](reject);
    });
    var cancel = function cancel() {
      ac === null || ac === void 0 ? void 0 : ac.abort();
    };
    return {
      promise: promise,
      cancel: cancel
    };
  }

  /* eslint-disable @typescript-eslint/no-non-null-assertion */ /**
                                                                * A function that should never be called unless we messed something up.
                                                                */
  var throwFatalError = function throwFatalError() {
    throw new Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
  };
  /**
   * Dataloader that's very inspired by https://github.com/graphql/dataloader
   * Less configuration, no caching, and allows you to cancel requests
   * When cancelling a single fetch the whole batch will be cancelled only when _all_ items are cancelled
   */
  function dataLoader(batchLoader) {
    var pendingItems = null;
    var dispatchTimer = null;
    var destroyTimerAndPendingItems = function destroyTimerAndPendingItems() {
      clearTimeout(dispatchTimer);
      dispatchTimer = null;
      pendingItems = null;
    };
    /**
    * Iterate through the items and split them into groups based on the `batchLoader`'s validate function
    */
    function groupItems(items) {
      var groupedItems = [[]];
      var index = 0;
      while (true) {
        var item = items[index];
        if (!item) {
          break;
        }
        var lastGroup = groupedItems[groupedItems.length - 1];
        if (item.aborted) {
          // Item was aborted before it was dispatched
          item.reject(new Error('Aborted'));
          index++;
          continue;
        }
        var isValid = batchLoader.validate(lastGroup.concat(item).map(function (it) {
          return it.key;
        }));
        if (isValid) {
          lastGroup.push(item);
          index++;
          continue;
        }
        if (lastGroup.length === 0) {
          item.reject(new Error('Input is too big for a single dispatch'));
          index++;
          continue;
        }
        // Create new group, next iteration will try to add the item to that
        groupedItems.push([]);
      }
      return groupedItems;
    }
    function dispatch() {
      var groupedItems = groupItems(pendingItems);
      destroyTimerAndPendingItems();
      // Create batches for each group of items
      var _iterator = _createForOfIteratorHelper(groupedItems),
        _step;
      try {
        var _loop = function _loop() {
          var items = _step.value;
          if (!items.length) {
            return "continue";
          }
          var batch = {
            items: items,
            cancel: throwFatalError
          };
          var _iterator2 = _createForOfIteratorHelper(items),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              item.batch = batch;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var _batchLoader$fetch = batchLoader.fetch(batch.items.map(function (_item) {
              return _item.key;
            })),
            promise = _batchLoader$fetch.promise,
            cancel = _batchLoader$fetch.cancel;
          batch.cancel = cancel;
          promise.then(function (result) {
            for (var i = 0; i < result.length; i++) {
              var value = result[i];
              var item = batch.items[i];
              item.resolve(value);
              item.batch = null;
            }
          })["catch"](function (cause) {
            var _iterator3 = _createForOfIteratorHelper(batch.items),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                item.reject(cause);
                item.batch = null;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    function load(key) {
      var item = {
        aborted: false,
        key: key,
        batch: null,
        resolve: throwFatalError,
        reject: throwFatalError
      };
      var promise = new Promise(function (resolve, reject) {
        item.reject = reject;
        item.resolve = resolve;
        if (!pendingItems) {
          pendingItems = [];
        }
        pendingItems.push(item);
      });
      if (!dispatchTimer) {
        dispatchTimer = setTimeout(dispatch);
      }
      var cancel = function cancel() {
        var _item$batch;
        item.aborted = true;
        if ((_item$batch = item.batch) !== null && _item$batch !== void 0 && _item$batch.items.every(function (item) {
          return item.aborted;
        })) {
          // All items in the batch have been cancelled
          item.batch.cancel();
          item.batch = null;
        }
      };
      return {
        promise: promise,
        cancel: cancel
      };
    }
    return {
      load: load
    };
  }
  function httpBatchLink(opts) {
    var resolvedOpts = resolveHTTPLinkOptions(opts);
    // initialized config
    return function (runtime) {
      var maxURLLength = opts.maxURLLength || Infinity;
      var batchLoader = function batchLoader(type) {
        var validate = function validate(batchOps) {
          if (maxURLLength === Infinity) {
            // escape hatch for quick calcs
            return true;
          }
          var path = batchOps.map(function (op) {
            return op.path;
          }).join(',');
          var inputs = batchOps.map(function (op) {
            return op.input;
          });
          var url = getUrl(_objectSpread2(_objectSpread2({}, resolvedOpts), {}, {
            runtime: runtime,
            type: type,
            path: path,
            inputs: inputs
          }));
          return url.length <= maxURLLength;
        };
        var fetch = function fetch(batchOps) {
          var path = batchOps.map(function (op) {
            return op.path;
          }).join(',');
          var inputs = batchOps.map(function (op) {
            return op.input;
          });
          var _httpRequest = httpRequest(_objectSpread2(_objectSpread2({}, resolvedOpts), {}, {
              runtime: runtime,
              type: type,
              path: path,
              inputs: inputs
            })),
            promise = _httpRequest.promise,
            cancel = _httpRequest.cancel;
          return {
            promise: promise.then(function (res) {
              var resJSON = Array.isArray(res.json) ? res.json : batchOps.map(function () {
                return res.json;
              });
              var result = resJSON.map(function (item) {
                return {
                  meta: res.meta,
                  json: item
                };
              });
              return result;
            }),
            cancel: cancel
          };
        };
        return {
          validate: validate,
          fetch: fetch
        };
      };
      var query = dataLoader(batchLoader('query'));
      var mutation = dataLoader(batchLoader('mutation'));
      var subscription = dataLoader(batchLoader('subscription'));
      var loaders = {
        query: query,
        subscription: subscription,
        mutation: mutation
      };
      return function (_ref) {
        var op = _ref.op;
        return observable(function (observer) {
          var loader = loaders[op.type];
          var _loader$load = loader.load(op),
            promise = _loader$load.promise,
            cancel = _loader$load.cancel;
          promise.then(function (res) {
            var transformed = transformResult(res.json, runtime);
            if (!transformed.ok) {
              observer.error(TRPCClientError.from(transformed.error, {
                meta: res.meta
              }));
              return;
            }
            observer.next({
              context: res.meta,
              result: transformed.result
            });
            observer.complete();
          })["catch"](function (err) {
            return observer.error(TRPCClientError.from(err));
          });
          return function () {
            cancel();
          };
        });
      };
    };
  }

  var noop$3 = function noop() {
    // noop
  };
  function createInnerProxy(callback, path) {
    var proxy = new Proxy(noop$3, {
      get: function get(_obj, key) {
        if (typeof key !== 'string' || key === 'then') {
          // special case for if the proxy is accidentally treated
          // like a PromiseLike (like in `Promise.resolve(proxy)`)
          return undefined;
        }
        return createInnerProxy(callback, [].concat(_toConsumableArray(path), [key]));
      },
      apply: function apply(_1, _2, args) {
        return callback({
          args: args,
          path: path
        });
      }
    });
    return proxy;
  }
  /**
   * Creates a proxy that calls the callback with the path and arguments
   *
   * @internal
   */
  var createRecursiveProxy = function createRecursiveProxy(callback) {
    return createInnerProxy(callback, []);
  };
  /**
   * Used in place of `new Proxy` where each handler will map 1 level deep to another value.
   *
   * @internal
   */
  var createFlatProxy = function createFlatProxy(callback) {
    return new Proxy(noop$3, {
      get: function get(_obj, name) {
        if (typeof name !== 'string' || name === 'then') {
          // special case for if the proxy is accidentally treated
          // like a PromiseLike (like in `Promise.resolve(proxy)`)
          return undefined;
        }
        return callback(name);
      }
    });
  };

  var palette = {
    query: ['72e3ff', '3fb0d8'],
    mutation: ['c5a3fc', '904dfc'],
    subscription: ['ff49e1', 'd83fbe']
  };
  // maybe this should be moved to it's own package
  var defaultLogger$1 = function defaultLogger() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console;
    return function (props) {
      var direction = props.direction,
        input = props.input,
        type = props.type,
        path = props.path,
        context = props.context,
        id = props.id;
      var _palette$type = _slicedToArray(palette[type], 2),
        light = _palette$type[0],
        dark = _palette$type[1];
      var css = "\n    background-color: #".concat(direction === 'up' ? light : dark, "; \n    color: ").concat(direction === 'up' ? 'black' : 'white', ";\n    padding: 2px;\n  ");
      var parts = ['%c', direction === 'up' ? '>>' : '<<', type, "#".concat(id), "%c".concat(path, "%c"), '%O'];
      var args = [css, "".concat(css, "; font-weight: bold;"), "".concat(css, "; font-weight: normal;")];
      if (props.direction === 'up') {
        args.push({
          input: input,
          context: context
        });
      } else {
        args.push({
          input: input,
          result: props.result,
          elapsedMs: props.elapsedMs,
          context: context
        });
      }
      var fn = props.direction === 'down' && props.result && (props.result instanceof Error || 'error' in props.result.result) ? 'error' : 'log';
      c[fn].apply(null, [parts.join(' ')].concat(args));
    };
  };
  function loggerLink() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _opts$enabled = opts.enabled,
      enabled = _opts$enabled === void 0 ? function () {
        return true;
      } : _opts$enabled;
    var _opts$logger = opts.logger,
      logger = _opts$logger === void 0 ? defaultLogger$1(opts.console) : _opts$logger;
    return function () {
      return function (_ref) {
        var op = _ref.op,
          next = _ref.next;
        return observable(function (observer) {
          // ->
          enabled(_objectSpread2(_objectSpread2({}, op), {}, {
            direction: 'up'
          })) && logger(_objectSpread2(_objectSpread2({}, op), {}, {
            direction: 'up'
          }));
          var requestStartTime = Date.now();
          function logResult(result) {
            var elapsedMs = Date.now() - requestStartTime;
            enabled(_objectSpread2(_objectSpread2({}, op), {}, {
              direction: 'down',
              result: result
            })) && logger(_objectSpread2(_objectSpread2({}, op), {}, {
              direction: 'down',
              elapsedMs: elapsedMs,
              result: result
            }));
          }
          return next(op).pipe(tap({
            next: function next(result) {
              logResult(result);
            },
            error: function error(result) {
              logResult(result);
            }
          })).subscribe(observer);
        });
      };
    };
  }

  /* istanbul ignore next */
  var retryDelay = function retryDelay(attemptIndex) {
    return attemptIndex === 0 ? 0 : Math.min(1000 * Math.pow(2, attemptIndex), 30000);
  };
  function createWSClient(opts) {
    var url = opts.url,
      _opts$WebSocket = opts.WebSocket,
      WebSocketImpl = _opts$WebSocket === void 0 ? WebSocket : _opts$WebSocket,
      _opts$retryDelayMs = opts.retryDelayMs,
      retryDelayFn = _opts$retryDelayMs === void 0 ? retryDelay : _opts$retryDelayMs,
      onOpen = opts.onOpen,
      onClose = opts.onClose;
    /* istanbul ignore next */
    if (!WebSocketImpl) {
      throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
    }
    /**
    * outgoing messages buffer whilst not open
    */
    var outgoing = [];
    var pendingRequests = Object.create(null);
    var connectAttempt = 0;
    var dispatchTimer = null;
    var connectTimer = null;
    var activeConnection = createWS();
    var state = 'connecting';
    /**
    * tries to send the list of messages
    */
    function dispatch() {
      if (state !== 'open' || dispatchTimer) {
        return;
      }
      dispatchTimer = setTimeout(function () {
        dispatchTimer = null;
        if (outgoing.length === 1) {
          // single send
          activeConnection.send(JSON.stringify(outgoing.pop()));
        } else {
          // batch send
          activeConnection.send(JSON.stringify(outgoing));
        }
        // clear
        outgoing = [];
      });
    }
    function tryReconnect() {
      if (connectTimer || state === 'closed') {
        return;
      }
      var timeout = retryDelayFn(connectAttempt++);
      reconnectInMs(timeout);
    }
    function reconnect() {
      state = 'connecting';
      var oldConnection = activeConnection;
      activeConnection = createWS();
      closeIfNoPending(oldConnection);
    }
    function reconnectInMs(ms) {
      if (connectTimer) {
        return;
      }
      state = 'connecting';
      connectTimer = setTimeout(reconnect, ms);
    }
    function closeIfNoPending(conn) {
      // disconnect as soon as there are are no pending result
      var hasPendingRequests = Object.values(pendingRequests).some(function (p) {
        return p.ws === conn;
      });
      if (!hasPendingRequests) {
        conn.close();
      }
    }
    function resumeSubscriptionOnReconnect(req) {
      if (outgoing.some(function (r) {
        return r.id === req.op.id;
      })) {
        return;
      }
      request(req.op, req.callbacks);
    }
    function createWS() {
      var conn = new WebSocketImpl(url);
      clearTimeout(connectTimer);
      connectTimer = null;
      conn.addEventListener('open', function () {
        /* istanbul ignore next */if (conn !== activeConnection) {
          return;
        }
        connectAttempt = 0;
        state = 'open';
        onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        dispatch();
      });
      conn.addEventListener('error', function () {
        if (conn === activeConnection) {
          tryReconnect();
        }
      });
      var handleIncomingRequest = function handleIncomingRequest(req) {
        if (req.method === 'reconnect' && conn === activeConnection) {
          if (state === 'open') {
            onClose === null || onClose === void 0 ? void 0 : onClose();
          }
          reconnect();
          // notify subscribers
          for (var _i = 0, _Object$values = Object.values(pendingRequests); _i < _Object$values.length; _i++) {
            var pendingReq = _Object$values[_i];
            if (pendingReq.type === 'subscription') {
              resumeSubscriptionOnReconnect(pendingReq);
            }
          }
        }
      };
      var handleIncomingResponse = function handleIncomingResponse(data) {
        var _req$callbacks$next, _req$callbacks;
        var req = data.id !== null && pendingRequests[data.id];
        if (!req) {
          // do something?
          return;
        }
        (_req$callbacks$next = (_req$callbacks = req.callbacks).next) === null || _req$callbacks$next === void 0 ? void 0 : _req$callbacks$next.call(_req$callbacks, data);
        if (req.ws !== activeConnection && conn === activeConnection) {
          var oldWs = req.ws;
          // gracefully replace old connection with this
          req.ws = activeConnection;
          closeIfNoPending(oldWs);
        }
        if ('result' in data && data.result.type === 'stopped' && conn === activeConnection) {
          req.callbacks.complete();
        }
      };
      conn.addEventListener('message', function (_ref) {
        var data = _ref.data;
        var msg = JSON.parse(data);
        if ('method' in msg) {
          handleIncomingRequest(msg);
        } else {
          handleIncomingResponse(msg);
        }
        if (conn !== activeConnection || state === 'closed') {
          // when receiving a message, we close old connection that has no pending requests
          closeIfNoPending(conn);
        }
      });
      conn.addEventListener('close', function (_ref2) {
        var code = _ref2.code;
        if (state === 'open') {
          onClose === null || onClose === void 0 ? void 0 : onClose({
            code: code
          });
        }
        if (activeConnection === conn) {
          // connection might have been replaced already
          tryReconnect();
        }
        for (var _i2 = 0, _Object$entries = Object.entries(pendingRequests); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            req = _Object$entries$_i[1];
          if (req.ws !== conn) {
            continue;
          }
          if (state === 'closed') {
            var _req$callbacks$comple, _req$callbacks2;
            // If the connection was closed, we just call `complete()` on the request
            delete pendingRequests[key];
            (_req$callbacks$comple = (_req$callbacks2 = req.callbacks).complete) === null || _req$callbacks$comple === void 0 ? void 0 : _req$callbacks$comple.call(_req$callbacks2);
            continue;
          }
          // The connection was closed either unexpectedly or because of a reconnect
          if (req.type === 'subscription') {
            // Subscriptions will resume after we've reconnected
            resumeSubscriptionOnReconnect(req);
          } else {
            var _req$callbacks$error, _req$callbacks3;
            // Queries and mutations will error if interrupted
            delete pendingRequests[key];
            (_req$callbacks$error = (_req$callbacks3 = req.callbacks).error) === null || _req$callbacks$error === void 0 ? void 0 : _req$callbacks$error.call(_req$callbacks3, TRPCClientError.from(new TRPCWebSocketClosedError('WebSocket closed prematurely')));
          }
        }
      });
      return conn;
    }
    function request(op, callbacks) {
      var type = op.type,
        input = op.input,
        path = op.path,
        id = op.id;
      var envelope = {
        id: id,
        method: type,
        params: {
          input: input,
          path: path
        }
      };
      pendingRequests[id] = {
        ws: activeConnection,
        type: type,
        callbacks: callbacks,
        op: op
      };
      // enqueue message
      outgoing.push(envelope);
      dispatch();
      return function () {
        var _pendingRequests$id, _callbacks$complete;
        var callbacks = (_pendingRequests$id = pendingRequests[id]) === null || _pendingRequests$id === void 0 ? void 0 : _pendingRequests$id.callbacks;
        delete pendingRequests[id];
        outgoing = outgoing.filter(function (msg) {
          return msg.id !== id;
        });
        callbacks === null || callbacks === void 0 ? void 0 : (_callbacks$complete = callbacks.complete) === null || _callbacks$complete === void 0 ? void 0 : _callbacks$complete.call(callbacks);
        if (activeConnection.readyState === WebSocket.OPEN && op.type === 'subscription') {
          outgoing.push({
            id: id,
            method: 'subscription.stop'
          });
          dispatch();
        }
      };
    }
    return {
      close: function close() {
        state = 'closed';
        onClose === null || onClose === void 0 ? void 0 : onClose();
        closeIfNoPending(activeConnection);
        clearTimeout(connectTimer);
        connectTimer = null;
      },
      request: request,
      getConnection: function getConnection() {
        return activeConnection;
      }
    };
  }
  var TRPCWebSocketClosedError = /*#__PURE__*/function (_Error) {
    _inherits(TRPCWebSocketClosedError, _Error);
    var _super = _createSuper(TRPCWebSocketClosedError);
    function TRPCWebSocketClosedError(message) {
      var _this;
      _classCallCheck(this, TRPCWebSocketClosedError);
      _this = _super.call(this, message);
      _this.name = 'TRPCWebSocketClosedError';
      Object.setPrototypeOf(_assertThisInitialized(_this), TRPCWebSocketClosedError.prototype);
      return _this;
    }
    return _createClass(TRPCWebSocketClosedError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var TRPCSubscriptionEndedError = /*#__PURE__*/function (_Error2) {
    _inherits(TRPCSubscriptionEndedError, _Error2);
    var _super2 = _createSuper(TRPCSubscriptionEndedError);
    function TRPCSubscriptionEndedError(message) {
      var _this2;
      _classCallCheck(this, TRPCSubscriptionEndedError);
      _this2 = _super2.call(this, message);
      _this2.name = 'TRPCSubscriptionEndedError';
      Object.setPrototypeOf(_assertThisInitialized(_this2), TRPCSubscriptionEndedError.prototype);
      return _this2;
    }
    return _createClass(TRPCSubscriptionEndedError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  function wsLink(opts) {
    return function (runtime) {
      var client = opts.client;
      return function (_ref3) {
        var op = _ref3.op;
        return observable(function (observer) {
          var type = op.type,
            path = op.path,
            id = op.id,
            context = op.context;
          var input = runtime.transformer.serialize(op.input);
          var isDone = false;
          var unsub = client.request({
            type: type,
            path: path,
            input: input,
            id: id,
            context: context
          }, {
            error: function error(err) {
              isDone = true;
              observer.error(err);
              unsub();
            },
            complete: function complete() {
              if (!isDone) {
                isDone = true;
                observer.error(TRPCClientError.from(new TRPCSubscriptionEndedError('Operation ended prematurely')));
              } else {
                observer.complete();
              }
            },
            next: function next(message) {
              var transformed = transformResult(message, runtime);
              if (!transformed.ok) {
                observer.error(TRPCClientError.from(transformed.error));
                return;
              }
              observer.next({
                result: transformed.result
              });
              if (op.type !== 'subscription') {
                // if it isn't a subscription we don't care about next response
                isDone = true;
                unsub();
                observer.complete();
              }
            }
          });
          return function () {
            isDone = true;
            unsub();
          };
        });
      };
    };
  }

  var TRPCClient = /*#__PURE__*/function () {
    function TRPCClient(opts) {
      var _this = this;
      _classCallCheck(this, TRPCClient);
      this.requestId = 0;
      function getTransformer() {
        if (!opts.transformer || typeof opts.transformer === 'string') return {
          serialize: function serialize(data) {
            return data;
          },
          deserialize: function deserialize(data) {
            return data;
          }
        };
        // Type guard for `opts.transformer` because it can be `any`
        function isTransformer(obj) {
          return true;
        }
        if (isTransformer(opts.transformer)) {
          if ('input' in opts.transformer) return {
            serialize: opts.transformer.input.serialize,
            deserialize: opts.transformer.output.deserialize
          };
        }
        return opts.transformer;
      }
      this.runtime = {
        transformer: getTransformer()
      };
      // Initialize the links
      this.links = opts.links.map(function (link) {
        return link(_this.runtime);
      });
    }
    _createClass(TRPCClient, [{
      key: "$request",
      value: function $request(_ref) {
        var type = _ref.type,
          input = _ref.input,
          path = _ref.path,
          _ref$context = _ref.context,
          context = _ref$context === void 0 ? {} : _ref$context;
        var chain$ = createChain({
          links: this.links,
          op: {
            id: ++this.requestId,
            type: type,
            path: path,
            input: input,
            context: context
          }
        });
        return chain$.pipe(share());
      }
    }, {
      key: "requestAsPromise",
      value: function requestAsPromise(opts) {
        var req$ = this.$request(opts);
        var _observableToPromise = observableToPromise(req$),
          promise = _observableToPromise.promise,
          abort = _observableToPromise.abort;
        var abortablePromise = new Promise(function (resolve, reject) {
          var _opts$signal;
          (_opts$signal = opts.signal) === null || _opts$signal === void 0 ? void 0 : _opts$signal.addEventListener('abort', abort);
          promise.then(function (envelope) {
            resolve(envelope.result.data);
          })["catch"](function (err) {
            reject(TRPCClientError.from(err));
          });
        });
        return abortablePromise;
      }
    }, {
      key: "query",
      value: function query(path, input, opts) {
        return this.requestAsPromise({
          type: 'query',
          path: path,
          input: input,
          context: opts === null || opts === void 0 ? void 0 : opts.context,
          signal: opts === null || opts === void 0 ? void 0 : opts.signal
        });
      }
    }, {
      key: "mutation",
      value: function mutation(path, input, opts) {
        return this.requestAsPromise({
          type: 'mutation',
          path: path,
          input: input,
          context: opts === null || opts === void 0 ? void 0 : opts.context,
          signal: opts === null || opts === void 0 ? void 0 : opts.signal
        });
      }
    }, {
      key: "subscription",
      value: function subscription(path, input, opts) {
        var observable$ = this.$request({
          type: 'subscription',
          path: path,
          input: input,
          context: opts === null || opts === void 0 ? void 0 : opts.context
        });
        return observable$.subscribe({
          next: function next(envelope) {
            if (envelope.result.type === 'started') {
              var _opts$onStarted;
              (_opts$onStarted = opts.onStarted) === null || _opts$onStarted === void 0 ? void 0 : _opts$onStarted.call(opts);
            } else if (envelope.result.type === 'stopped') {
              var _opts$onStopped;
              (_opts$onStopped = opts.onStopped) === null || _opts$onStopped === void 0 ? void 0 : _opts$onStopped.call(opts);
            } else {
              var _opts$onData;
              (_opts$onData = opts.onData) === null || _opts$onData === void 0 ? void 0 : _opts$onData.call(opts, envelope.result.data);
            }
          },
          error: function error(err) {
            var _opts$onError;
            (_opts$onError = opts.onError) === null || _opts$onError === void 0 ? void 0 : _opts$onError.call(opts, err);
          },
          complete: function complete() {
            var _opts$onComplete;
            (_opts$onComplete = opts.onComplete) === null || _opts$onComplete === void 0 ? void 0 : _opts$onComplete.call(opts);
          }
        });
      }
    }]);
    return TRPCClient;
  }();
  /**
   * @deprecated use `createTRPCProxyClient` instead
   */
  function createTRPCClient(opts) {
    var getLinks = function getLinks() {
      if ('links' in opts) {
        return opts.links;
      }
      return [httpBatchLink(opts)];
    };
    var client = new TRPCClient(_objectSpread2(_objectSpread2({}, opts), {}, {
      links: getLinks()
    }));
    return client;
  }
  var clientCallTypeMap = {
    query: 'query',
    mutate: 'mutation',
    subscribe: 'subscription'
  };
  /**
   * @deprecated use `createTRPCProxyClient` instead
   * @internal
   */
  function createTRPCClientProxy(client) {
    return createFlatProxy(function (key) {
      if (client.hasOwnProperty(key)) {
        return client[key];
      }
      return createRecursiveProxy(function (_ref2) {
        var path = _ref2.path,
          args = _ref2.args;
        var pathCopy = [key].concat(_toConsumableArray(path));
        var clientCallType = pathCopy.pop();
        var procedureType = clientCallTypeMap[clientCallType];
        var fullPath = pathCopy.join('.');
        return client[procedureType].apply(client, [fullPath].concat(_toConsumableArray(args)));
      });
    });
  }

  var Subscribable = /*#__PURE__*/function () {
    function Subscribable() {
      _classCallCheck(this, Subscribable);
      this.listeners = [];
      this.subscribe = this.subscribe.bind(this);
    }
    _createClass(Subscribable, [{
      key: "subscribe",
      value: function subscribe(listener) {
        var _this = this;
        this.listeners.push(listener);
        this.onSubscribe();
        return function () {
          _this.listeners = _this.listeners.filter(function (x) {
            return x !== listener;
          });
          _this.onUnsubscribe();
        };
      }
    }, {
      key: "hasListeners",
      value: function hasListeners() {
        return this.listeners.length > 0;
      }
    }, {
      key: "onSubscribe",
      value: function onSubscribe() {// Do nothing
      }
    }, {
      key: "onUnsubscribe",
      value: function onUnsubscribe() {// Do nothing
      }
    }]);
    return Subscribable;
  }();

  // TYPES
  // UTILS
  var isServer = typeof window === 'undefined' || 'Deno' in window;
  function noop$2() {
    return undefined;
  }
  function functionalUpdate(updater, input) {
    return typeof updater === 'function' ? updater(input) : updater;
  }
  function isValidTimeout(value) {
    return typeof value === 'number' && value >= 0 && value !== Infinity;
  }
  function difference(array1, array2) {
    return array1.filter(function (x) {
      return array2.indexOf(x) === -1;
    });
  }
  function replaceAt(array, index, value) {
    var copy = array.slice(0);
    copy[index] = value;
    return copy;
  }
  function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
  }
  function parseQueryArgs(arg1, arg2, arg3) {
    if (!isQueryKey(arg1)) {
      return arg1;
    }
    if (typeof arg2 === 'function') {
      return _objectSpread2(_objectSpread2({}, arg3), {}, {
        queryKey: arg1,
        queryFn: arg2
      });
    }
    return _objectSpread2(_objectSpread2({}, arg2), {}, {
      queryKey: arg1
    });
  }
  function parseMutationArgs(arg1, arg2, arg3) {
    if (isQueryKey(arg1)) {
      if (typeof arg2 === 'function') {
        return _objectSpread2(_objectSpread2({}, arg3), {}, {
          mutationKey: arg1,
          mutationFn: arg2
        });
      }
      return _objectSpread2(_objectSpread2({}, arg2), {}, {
        mutationKey: arg1
      });
    }
    if (typeof arg1 === 'function') {
      return _objectSpread2(_objectSpread2({}, arg2), {}, {
        mutationFn: arg1
      });
    }
    return _objectSpread2({}, arg1);
  }
  function parseFilterArgs(arg1, arg2, arg3) {
    return isQueryKey(arg1) ? [_objectSpread2(_objectSpread2({}, arg2), {}, {
      queryKey: arg1
    }), arg3] : [arg1 || {}, arg2];
  }
  function matchQuery(filters, query) {
    var _filters$type = filters.type,
      type = _filters$type === void 0 ? 'all' : _filters$type,
      exact = filters.exact,
      fetchStatus = filters.fetchStatus,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;
    if (isQueryKey(queryKey)) {
      if (exact) {
        if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
          return false;
        }
      } else if (!partialMatchKey(query.queryKey, queryKey)) {
        return false;
      }
    }
    if (type !== 'all') {
      var isActive = query.isActive();
      if (type === 'active' && !isActive) {
        return false;
      }
      if (type === 'inactive' && isActive) {
        return false;
      }
    }
    if (typeof stale === 'boolean' && query.isStale() !== stale) {
      return false;
    }
    if (typeof fetchStatus !== 'undefined' && fetchStatus !== query.state.fetchStatus) {
      return false;
    }
    if (predicate && !predicate(query)) {
      return false;
    }
    return true;
  }
  function matchMutation(filters, mutation) {
    var exact = filters.exact,
      fetching = filters.fetching,
      predicate = filters.predicate,
      mutationKey = filters.mutationKey;
    if (isQueryKey(mutationKey)) {
      if (!mutation.options.mutationKey) {
        return false;
      }
      if (exact) {
        if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
          return false;
        }
      } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
        return false;
      }
    }
    if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
      return false;
    }
    if (predicate && !predicate(mutation)) {
      return false;
    }
    return true;
  }
  function hashQueryKeyByOptions(queryKey, options) {
    var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
    return hashFn(queryKey);
  }
  /**
   * Default query keys hash function.
   * Hashes the value into a stable hash.
   */

  function hashQueryKey(queryKey) {
    return JSON.stringify(queryKey, function (_, val) {
      return isPlainObject$1(val) ? Object.keys(val).sort().reduce(function (result, key) {
        result[key] = val[key];
        return result;
      }, {}) : val;
    });
  }
  /**
   * Checks if key `b` partially matches with key `a`.
   */

  function partialMatchKey(a, b) {
    return partialDeepEqual(a, b);
  }
  /**
   * Checks if `b` partially matches with `a`.
   */

  function partialDeepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (_typeof(a) !== _typeof(b)) {
      return false;
    }
    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      return !Object.keys(b).some(function (key) {
        return !partialDeepEqual(a[key], b[key]);
      });
    }
    return false;
  }
  /**
   * This function returns `a` if `b` is deeply equal.
   * If not, it will replace any deeply equal children of `b` with those of `a`.
   * This can be used for structural sharing between JSON values for example.
   */

  function replaceEqualDeep(a, b) {
    if (a === b) {
      return a;
    }
    var array = isPlainArray(a) && isPlainArray(b);
    if (array || isPlainObject$1(a) && isPlainObject$1(b)) {
      var aSize = array ? a.length : Object.keys(a).length;
      var bItems = array ? b : Object.keys(b);
      var bSize = bItems.length;
      var copy = array ? [] : {};
      var equalItems = 0;
      for (var i = 0; i < bSize; i++) {
        var key = array ? i : bItems[i];
        copy[key] = replaceEqualDeep(a[key], b[key]);
        if (copy[key] === a[key]) {
          equalItems++;
        }
      }
      return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
  }
  /**
   * Shallow compare objects. Only works with objects that always have the same properties.
   */

  function shallowEqualObjects(a, b) {
    if (a && !b || b && !a) {
      return false;
    }
    for (var key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
  } // Copied from: https://github.com/jonschlinkert/is-plain-object

  function isPlainObject$1(o) {
    if (!hasObjectPrototype(o)) {
      return false;
    } // If has modified constructor

    var ctor = o.constructor;
    if (typeof ctor === 'undefined') {
      return true;
    } // If has modified prototype

    var prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
      return false;
    } // If constructor does not have an Object-specific method

    if (!prot.hasOwnProperty('isPrototypeOf')) {
      return false;
    } // Most likely a plain Object

    return true;
  }
  function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }
  function isQueryKey(value) {
    return Array.isArray(value);
  }
  function sleep(timeout) {
    return new Promise(function (resolve) {
      setTimeout(resolve, timeout);
    });
  }
  /**
   * Schedules a microtask.
   * This can be useful to schedule state updates after rendering.
   */

  function scheduleMicrotask(callback) {
    sleep(0).then(callback);
  }
  function getAbortController() {
    if (typeof AbortController === 'function') {
      return new AbortController();
    }
    return;
  }
  function replaceData(prevData, data, options) {
    // Use prev data if an isDataEqual function is defined and returns `true`
    if (options.isDataEqual != null && options.isDataEqual(prevData, data)) {
      return prevData;
    } else if (typeof options.structuralSharing === 'function') {
      return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
      // Structurally share data between prev and new data if needed
      return replaceEqualDeep(prevData, data);
    }
    return data;
  }

  var FocusManager = /*#__PURE__*/function (_Subscribable) {
    _inherits(FocusManager, _Subscribable);
    var _super = _createSuper(FocusManager);
    function FocusManager() {
      var _this;
      _classCallCheck(this, FocusManager);
      _this = _super.call(this);
      _this.setup = function (onFocus) {
        // addEventListener does not exist in React Native, but window does
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!isServer && window.addEventListener) {
          var listener = function listener() {
            return onFocus();
          }; // Listen to visibillitychange and focus

          window.addEventListener('visibilitychange', listener, false);
          window.addEventListener('focus', listener, false);
          return function () {
            // Be sure to unsubscribe if a new handler is set
            window.removeEventListener('visibilitychange', listener);
            window.removeEventListener('focus', listener);
          };
        }
        return;
      };
      return _this;
    }
    _createClass(FocusManager, [{
      key: "onSubscribe",
      value: function onSubscribe() {
        if (!this.cleanup) {
          this.setEventListener(this.setup);
        }
      }
    }, {
      key: "onUnsubscribe",
      value: function onUnsubscribe() {
        if (!this.hasListeners()) {
          var _this$cleanup;
          (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
          this.cleanup = undefined;
        }
      }
    }, {
      key: "setEventListener",
      value: function setEventListener(setup) {
        var _this2 = this;
        var _this$cleanup2;
        this.setup = setup;
        (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
        this.cleanup = setup(function (focused) {
          if (typeof focused === 'boolean') {
            _this2.setFocused(focused);
          } else {
            _this2.onFocus();
          }
        });
      }
    }, {
      key: "setFocused",
      value: function setFocused(focused) {
        this.focused = focused;
        if (focused) {
          this.onFocus();
        }
      }
    }, {
      key: "onFocus",
      value: function onFocus() {
        this.listeners.forEach(function (listener) {
          listener();
        });
      }
    }, {
      key: "isFocused",
      value: function isFocused() {
        if (typeof this.focused === 'boolean') {
          return this.focused;
        } // document global can be unavailable in react native

        if (typeof document === 'undefined') {
          return true;
        }
        return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
      }
    }]);
    return FocusManager;
  }(Subscribable);
  var focusManager = new FocusManager();

  var OnlineManager = /*#__PURE__*/function (_Subscribable) {
    _inherits(OnlineManager, _Subscribable);
    var _super = _createSuper(OnlineManager);
    function OnlineManager() {
      var _this;
      _classCallCheck(this, OnlineManager);
      _this = _super.call(this);
      _this.setup = function (onOnline) {
        // addEventListener does not exist in React Native, but window does
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!isServer && window.addEventListener) {
          var listener = function listener() {
            return onOnline();
          }; // Listen to online

          window.addEventListener('online', listener, false);
          window.addEventListener('offline', listener, false);
          return function () {
            // Be sure to unsubscribe if a new handler is set
            window.removeEventListener('online', listener);
            window.removeEventListener('offline', listener);
          };
        }
        return;
      };
      return _this;
    }
    _createClass(OnlineManager, [{
      key: "onSubscribe",
      value: function onSubscribe() {
        if (!this.cleanup) {
          this.setEventListener(this.setup);
        }
      }
    }, {
      key: "onUnsubscribe",
      value: function onUnsubscribe() {
        if (!this.hasListeners()) {
          var _this$cleanup;
          (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
          this.cleanup = undefined;
        }
      }
    }, {
      key: "setEventListener",
      value: function setEventListener(setup) {
        var _this2 = this;
        var _this$cleanup2;
        this.setup = setup;
        (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
        this.cleanup = setup(function (online) {
          if (typeof online === 'boolean') {
            _this2.setOnline(online);
          } else {
            _this2.onOnline();
          }
        });
      }
    }, {
      key: "setOnline",
      value: function setOnline(online) {
        this.online = online;
        if (online) {
          this.onOnline();
        }
      }
    }, {
      key: "onOnline",
      value: function onOnline() {
        this.listeners.forEach(function (listener) {
          listener();
        });
      }
    }, {
      key: "isOnline",
      value: function isOnline() {
        if (typeof this.online === 'boolean') {
          return this.online;
        }
        if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
          return true;
        }
        return navigator.onLine;
      }
    }]);
    return OnlineManager;
  }(Subscribable);
  var onlineManager = new OnlineManager();

  function defaultRetryDelay(failureCount) {
    return Math.min(1000 * Math.pow(2, failureCount), 30000);
  }
  function canFetch(networkMode) {
    return (networkMode != null ? networkMode : 'online') === 'online' ? onlineManager.isOnline() : true;
  }
  var CancelledError = /*#__PURE__*/_createClass(function CancelledError(options) {
    _classCallCheck(this, CancelledError);
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  });
  function isCancelledError(value) {
    return value instanceof CancelledError;
  }
  function createRetryer(config) {
    var isRetryCancelled = false;
    var failureCount = 0;
    var isResolved = false;
    var continueFn;
    var promiseResolve;
    var promiseReject;
    var promise = new Promise(function (outerResolve, outerReject) {
      promiseResolve = outerResolve;
      promiseReject = outerReject;
    });
    var cancel = function cancel(cancelOptions) {
      if (!isResolved) {
        reject(new CancelledError(cancelOptions));
        config.abort == null ? void 0 : config.abort();
      }
    };
    var cancelRetry = function cancelRetry() {
      isRetryCancelled = true;
    };
    var continueRetry = function continueRetry() {
      isRetryCancelled = false;
    };
    var shouldPause = function shouldPause() {
      return !focusManager.isFocused() || config.networkMode !== 'always' && !onlineManager.isOnline();
    };
    var resolve = function resolve(value) {
      if (!isResolved) {
        isResolved = true;
        config.onSuccess == null ? void 0 : config.onSuccess(value);
        continueFn == null ? void 0 : continueFn();
        promiseResolve(value);
      }
    };
    var reject = function reject(value) {
      if (!isResolved) {
        isResolved = true;
        config.onError == null ? void 0 : config.onError(value);
        continueFn == null ? void 0 : continueFn();
        promiseReject(value);
      }
    };
    var pause = function pause() {
      return new Promise(function (continueResolve) {
        continueFn = function continueFn(value) {
          if (isResolved || !shouldPause()) {
            return continueResolve(value);
          }
        };
        config.onPause == null ? void 0 : config.onPause();
      }).then(function () {
        continueFn = undefined;
        if (!isResolved) {
          config.onContinue == null ? void 0 : config.onContinue();
        }
      });
    }; // Create loop function

    var run = function run() {
      // Do nothing if already resolved
      if (isResolved) {
        return;
      }
      var promiseOrValue; // Execute query

      try {
        promiseOrValue = config.fn();
      } catch (error) {
        promiseOrValue = Promise.reject(error);
      }
      Promise.resolve(promiseOrValue).then(resolve)["catch"](function (error) {
        var _config$retry, _config$retryDelay;

        // Stop if the fetch is already resolved
        if (isResolved) {
          return;
        } // Do we need to retry the request?

        var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
        var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
        var delay = typeof retryDelay === 'function' ? retryDelay(failureCount, error) : retryDelay;
        var shouldRetry = retry === true || typeof retry === 'number' && failureCount < retry || typeof retry === 'function' && retry(failureCount, error);
        if (isRetryCancelled || !shouldRetry) {
          // We are done if the query does not need to be retried
          reject(error);
          return;
        }
        failureCount++; // Notify on fail

        config.onFail == null ? void 0 : config.onFail(failureCount, error); // Delay

        sleep(delay) // Pause if the document is not visible or when the device is offline
        .then(function () {
          if (shouldPause()) {
            return pause();
          }
          return;
        }).then(function () {
          if (isRetryCancelled) {
            reject(error);
          } else {
            run();
          }
        });
      });
    }; // Start loop

    if (canFetch(config.networkMode)) {
      run();
    } else {
      pause().then(run);
    }
    return {
      promise: promise,
      cancel: cancel,
      "continue": function _continue() {
        continueFn == null ? void 0 : continueFn();
      },
      cancelRetry: cancelRetry,
      continueRetry: continueRetry
    };
  }

  var defaultLogger = console;

  function createNotifyManager() {
    var queue = [];
    var transactions = 0;
    var notifyFn = function notifyFn(callback) {
      callback();
    };
    var batchNotifyFn = function batchNotifyFn(callback) {
      callback();
    };
    var batch = function batch(callback) {
      var result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    };
    var schedule = function schedule(callback) {
      if (transactions) {
        queue.push(callback);
      } else {
        scheduleMicrotask(function () {
          notifyFn(callback);
        });
      }
    };
    /**
     * All calls to the wrapped function will be batched.
     */

    var batchCalls = function batchCalls(callback) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        schedule(function () {
          callback.apply(void 0, args);
        });
      };
    };
    var flush = function flush() {
      var originalQueue = queue;
      queue = [];
      if (originalQueue.length) {
        scheduleMicrotask(function () {
          batchNotifyFn(function () {
            originalQueue.forEach(function (callback) {
              notifyFn(callback);
            });
          });
        });
      }
    };
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */

    var setNotifyFunction = function setNotifyFunction(fn) {
      notifyFn = fn;
    };
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */

    var setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
      batchNotifyFn = fn;
    };
    return {
      batch: batch,
      batchCalls: batchCalls,
      schedule: schedule,
      setNotifyFunction: setNotifyFunction,
      setBatchNotifyFunction: setBatchNotifyFunction
    };
  } // SINGLETON

  var notifyManager = createNotifyManager();

  var Removable = /*#__PURE__*/function () {
    function Removable() {
      _classCallCheck(this, Removable);
    }
    _createClass(Removable, [{
      key: "destroy",
      value: function destroy() {
        this.clearGcTimeout();
      }
    }, {
      key: "scheduleGc",
      value: function scheduleGc() {
        var _this = this;
        this.clearGcTimeout();
        if (isValidTimeout(this.cacheTime)) {
          this.gcTimeout = setTimeout(function () {
            _this.optionalRemove();
          }, this.cacheTime);
        }
      }
    }, {
      key: "updateCacheTime",
      value: function updateCacheTime(newCacheTime) {
        // Default to 5 minutes (Infinity for server-side) if no cache time is set
        this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : isServer ? Infinity : 5 * 60 * 1000);
      }
    }, {
      key: "clearGcTimeout",
      value: function clearGcTimeout() {
        if (this.gcTimeout) {
          clearTimeout(this.gcTimeout);
          this.gcTimeout = undefined;
        }
      }
    }]);
    return Removable;
  }();

  // CLASS
  var Query = /*#__PURE__*/function (_Removable) {
    _inherits(Query, _Removable);
    var _super = _createSuper(Query);
    function Query(config) {
      var _this;
      _classCallCheck(this, Query);
      _this = _super.call(this);
      _this.abortSignalConsumed = false;
      _this.defaultOptions = config.defaultOptions;
      _this.setOptions(config.options);
      _this.observers = [];
      _this.cache = config.cache;
      _this.logger = config.logger || defaultLogger;
      _this.queryKey = config.queryKey;
      _this.queryHash = config.queryHash;
      _this.initialState = config.state || getDefaultState$1(_this.options);
      _this.state = _this.initialState;
      return _this;
    }
    _createClass(Query, [{
      key: "meta",
      get: function get() {
        return this.options.meta;
      }
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        this.options = _objectSpread2(_objectSpread2({}, this.defaultOptions), options);
        this.updateCacheTime(this.options.cacheTime);
      }
    }, {
      key: "optionalRemove",
      value: function optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === 'idle') {
          this.cache.remove(this);
        }
      }
    }, {
      key: "setData",
      value: function setData(newData, options) {
        var data = replaceData(this.state.data, newData, this.options); // Set data and mark it as cached

        this.dispatch({
          data: data,
          type: 'success',
          dataUpdatedAt: options == null ? void 0 : options.updatedAt,
          manual: options == null ? void 0 : options.manual
        });
        return data;
      }
    }, {
      key: "setState",
      value: function setState(state, setStateOptions) {
        this.dispatch({
          type: 'setState',
          state: state,
          setStateOptions: setStateOptions
        });
      }
    }, {
      key: "cancel",
      value: function cancel(options) {
        var _this$retryer;
        var promise = this.promise;
        (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
        return promise ? promise.then(noop$2)["catch"](noop$2) : Promise.resolve();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(Query.prototype), "destroy", this).call(this);
        this.cancel({
          silent: true
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.destroy();
        this.setState(this.initialState);
      }
    }, {
      key: "isActive",
      value: function isActive() {
        return this.observers.some(function (observer) {
          return observer.options.enabled !== false;
        });
      }
    }, {
      key: "isDisabled",
      value: function isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
    }, {
      key: "isStale",
      value: function isStale() {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (observer) {
          return observer.getCurrentResult().isStale;
        });
      }
    }, {
      key: "isStaleByTime",
      value: function isStaleByTime() {
        var staleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
      }
    }, {
      key: "onFocus",
      value: function onFocus() {
        var _this$retryer2;
        var observer = this.observers.find(function (x) {
          return x.shouldFetchOnWindowFocus();
        });
        if (observer) {
          observer.refetch({
            cancelRefetch: false
          });
        } // Continue fetch if currently paused

        (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2["continue"]();
      }
    }, {
      key: "onOnline",
      value: function onOnline() {
        var _this$retryer3;
        var observer = this.observers.find(function (x) {
          return x.shouldFetchOnReconnect();
        });
        if (observer) {
          observer.refetch({
            cancelRefetch: false
          });
        } // Continue fetch if currently paused

        (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3["continue"]();
      }
    }, {
      key: "addObserver",
      value: function addObserver(observer) {
        if (this.observers.indexOf(observer) === -1) {
          this.observers.push(observer); // Stop the query from being garbage collected

          this.clearGcTimeout();
          this.cache.notify({
            type: 'observerAdded',
            query: this,
            observer: observer
          });
        }
      }
    }, {
      key: "removeObserver",
      value: function removeObserver(observer) {
        if (this.observers.indexOf(observer) !== -1) {
          this.observers = this.observers.filter(function (x) {
            return x !== observer;
          });
          if (!this.observers.length) {
            // If the transport layer does not support cancellation
            // we'll let the query continue so the result can be cached
            if (this.retryer) {
              if (this.abortSignalConsumed) {
                this.retryer.cancel({
                  revert: true
                });
              } else {
                this.retryer.cancelRetry();
              }
            }
            this.scheduleGc();
          }
          this.cache.notify({
            type: 'observerRemoved',
            query: this,
            observer: observer
          });
        }
      }
    }, {
      key: "getObserversCount",
      value: function getObserversCount() {
        return this.observers.length;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        if (!this.state.isInvalidated) {
          this.dispatch({
            type: 'invalidate'
          });
        }
      }
    }, {
      key: "fetch",
      value: function fetch(options, fetchOptions) {
        var _this2 = this;
        var _this$options$behavio, _context$fetchOptions;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) {
            // Silently cancel current fetch if the user wants to cancel refetches
            this.cancel({
              silent: true
            });
          } else if (this.promise) {
            var _this$retryer4;

            // make sure that retries that were potentially cancelled due to unmounts can continue
            (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry(); // Return current promise if we are already fetching

            return this.promise;
          }
        } // Update config if passed, otherwise the config from the last execution is used

        if (options) {
          this.setOptions(options);
        } // Use the options from the first observer with a query function if no function is found.
        // This can happen when the query is hydrated or created with setQueryData.

        if (!this.options.queryFn) {
          var observer = this.observers.find(function (x) {
            return x.options.queryFn;
          });
          if (observer) {
            this.setOptions(observer.options);
          }
        }
        if (!Array.isArray(this.options.queryKey)) {
          {
            this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
          }
        }
        var abortController = getAbortController(); // Create query function context

        var queryFnContext = {
          queryKey: this.queryKey,
          pageParam: undefined,
          meta: this.meta
        }; // Adds an enumerable signal property to the object that
        // which sets abortSignalConsumed to true when the signal
        // is read.

        var addSignalProperty = function addSignalProperty(object) {
          Object.defineProperty(object, 'signal', {
            enumerable: true,
            get: function get() {
              if (abortController) {
                _this2.abortSignalConsumed = true;
                return abortController.signal;
              }
              return undefined;
            }
          });
        };
        addSignalProperty(queryFnContext); // Create fetch function

        var fetchFn = function fetchFn() {
          if (!_this2.options.queryFn) {
            return Promise.reject('Missing queryFn');
          }
          _this2.abortSignalConsumed = false;
          return _this2.options.queryFn(queryFnContext);
        }; // Trigger behavior hook

        var context = {
          fetchOptions: fetchOptions,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: fetchFn
        };
        addSignalProperty(context);
        (_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch(context); // Store state in case the current fetch needs to be reverted

        this.revertState = this.state; // Set to fetching state if not already in it

        if (this.state.fetchStatus === 'idle' || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
          var _context$fetchOptions2;
          this.dispatch({
            type: 'fetch',
            meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
          });
        }
        var onError = function onError(error) {
          // Optimistically update state if needed
          if (!(isCancelledError(error) && error.silent)) {
            _this2.dispatch({
              type: 'error',
              error: error
            });
          }
          if (!isCancelledError(error)) {
            var _this$cache$config$on, _this$cache$config;

            // Notify cache callback
            (_this$cache$config$on = (_this$cache$config = _this2.cache.config).onError) == null ? void 0 : _this$cache$config$on.call(_this$cache$config, error, _this2);
            {
              _this2.logger.error(error);
            }
          }
          if (!_this2.isFetchingOptimistic) {
            // Schedule query gc after fetching
            _this2.scheduleGc();
          }
          _this2.isFetchingOptimistic = false;
        }; // Try to fetch the data

        this.retryer = createRetryer({
          fn: context.fetchFn,
          abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
          onSuccess: function onSuccess(data) {
            var _this$cache$config$on2, _this$cache$config2;
            if (typeof data === 'undefined') {
              {
                _this2.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + _this2.queryHash);
              }
              onError(new Error('undefined'));
              return;
            }
            _this2.setData(data); // Notify cache callback

            (_this$cache$config$on2 = (_this$cache$config2 = _this2.cache.config).onSuccess) == null ? void 0 : _this$cache$config$on2.call(_this$cache$config2, data, _this2);
            if (!_this2.isFetchingOptimistic) {
              // Schedule query gc after fetching
              _this2.scheduleGc();
            }
            _this2.isFetchingOptimistic = false;
          },
          onError: onError,
          onFail: function onFail(failureCount, error) {
            _this2.dispatch({
              type: 'failed',
              failureCount: failureCount,
              error: error
            });
          },
          onPause: function onPause() {
            _this2.dispatch({
              type: 'pause'
            });
          },
          onContinue: function onContinue() {
            _this2.dispatch({
              type: 'continue'
            });
          },
          retry: context.options.retry,
          retryDelay: context.options.retryDelay,
          networkMode: context.options.networkMode
        });
        this.promise = this.retryer.promise;
        return this.promise;
      }
    }, {
      key: "dispatch",
      value: function dispatch(action) {
        var _this3 = this;
        var reducer = function reducer(state) {
          var _action$meta, _action$dataUpdatedAt;
          switch (action.type) {
            case 'failed':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                fetchFailureCount: action.failureCount,
                fetchFailureReason: action.error
              });
            case 'pause':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                fetchStatus: 'paused'
              });
            case 'continue':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                fetchStatus: 'fetching'
              });
            case 'fetch':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
                fetchStatus: canFetch(_this3.options.networkMode) ? 'fetching' : 'paused'
              }, !state.dataUpdatedAt && {
                error: null,
                status: 'loading'
              });
            case 'success':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                data: action.data,
                dataUpdateCount: state.dataUpdateCount + 1,
                dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
                error: null,
                isInvalidated: false,
                status: 'success'
              }, !action.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null
              });
            case 'error':
              var error = action.error;
              if (isCancelledError(error) && error.revert && _this3.revertState) {
                return _objectSpread2({}, _this3.revertState);
              }
              return _objectSpread2(_objectSpread2({}, state), {}, {
                error: error,
                errorUpdateCount: state.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: state.fetchFailureCount + 1,
                fetchFailureReason: error,
                fetchStatus: 'idle',
                status: 'error'
              });
            case 'invalidate':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                isInvalidated: true
              });
            case 'setState':
              return _objectSpread2(_objectSpread2({}, state), action.state);
          }
        };
        this.state = reducer(this.state);
        notifyManager.batch(function () {
          _this3.observers.forEach(function (observer) {
            observer.onQueryUpdate(action);
          });
          _this3.cache.notify({
            query: _this3,
            type: 'updated',
            action: action
          });
        });
      }
    }]);
    return Query;
  }(Removable);
  function getDefaultState$1(options) {
    var data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
    var hasData = typeof data !== 'undefined';
    var initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
      data: data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: hasData ? 'success' : 'loading',
      fetchStatus: 'idle'
    };
  }

  // CLASS
  var QueryCache = /*#__PURE__*/function (_Subscribable) {
    _inherits(QueryCache, _Subscribable);
    var _super = _createSuper(QueryCache);
    function QueryCache(config) {
      var _this;
      _classCallCheck(this, QueryCache);
      _this = _super.call(this);
      _this.config = config || {};
      _this.queries = [];
      _this.queriesMap = {};
      return _this;
    }
    _createClass(QueryCache, [{
      key: "build",
      value: function build(client, options, state) {
        var _options$queryHash;
        var queryKey = options.queryKey;
        var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
        var query = this.get(queryHash);
        if (!query) {
          query = new Query({
            cache: this,
            logger: client.getLogger(),
            queryKey: queryKey,
            queryHash: queryHash,
            options: client.defaultQueryOptions(options),
            state: state,
            defaultOptions: client.getQueryDefaults(queryKey)
          });
          this.add(query);
        }
        return query;
      }
    }, {
      key: "add",
      value: function add(query) {
        if (!this.queriesMap[query.queryHash]) {
          this.queriesMap[query.queryHash] = query;
          this.queries.push(query);
          this.notify({
            type: 'added',
            query: query
          });
        }
      }
    }, {
      key: "remove",
      value: function remove(query) {
        var queryInMap = this.queriesMap[query.queryHash];
        if (queryInMap) {
          query.destroy();
          this.queries = this.queries.filter(function (x) {
            return x !== query;
          });
          if (queryInMap === query) {
            delete this.queriesMap[query.queryHash];
          }
          this.notify({
            type: 'removed',
            query: query
          });
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this2 = this;
        notifyManager.batch(function () {
          _this2.queries.forEach(function (query) {
            _this2.remove(query);
          });
        });
      }
    }, {
      key: "get",
      value: function get(queryHash) {
        return this.queriesMap[queryHash];
      }
    }, {
      key: "getAll",
      value: function getAll() {
        return this.queries;
      }
    }, {
      key: "find",
      value: function find(arg1, arg2) {
        var _parseFilterArgs = parseFilterArgs(arg1, arg2),
          _parseFilterArgs2 = _slicedToArray(_parseFilterArgs, 1),
          filters = _parseFilterArgs2[0];
        if (typeof filters.exact === 'undefined') {
          filters.exact = true;
        }
        return this.queries.find(function (query) {
          return matchQuery(filters, query);
        });
      }
    }, {
      key: "findAll",
      value: function findAll(arg1, arg2) {
        var _parseFilterArgs3 = parseFilterArgs(arg1, arg2),
          _parseFilterArgs4 = _slicedToArray(_parseFilterArgs3, 1),
          filters = _parseFilterArgs4[0];
        return Object.keys(filters).length > 0 ? this.queries.filter(function (query) {
          return matchQuery(filters, query);
        }) : this.queries;
      }
    }, {
      key: "notify",
      value: function notify(event) {
        var _this3 = this;
        notifyManager.batch(function () {
          _this3.listeners.forEach(function (listener) {
            listener(event);
          });
        });
      }
    }, {
      key: "onFocus",
      value: function onFocus() {
        var _this4 = this;
        notifyManager.batch(function () {
          _this4.queries.forEach(function (query) {
            query.onFocus();
          });
        });
      }
    }, {
      key: "onOnline",
      value: function onOnline() {
        var _this5 = this;
        notifyManager.batch(function () {
          _this5.queries.forEach(function (query) {
            query.onOnline();
          });
        });
      }
    }]);
    return QueryCache;
  }(Subscribable);

  // CLASS
  var Mutation = /*#__PURE__*/function (_Removable) {
    _inherits(Mutation, _Removable);
    var _super = _createSuper(Mutation);
    function Mutation(config) {
      var _this;
      _classCallCheck(this, Mutation);
      _this = _super.call(this);
      _this.options = _objectSpread2(_objectSpread2({}, config.defaultOptions), config.options);
      _this.mutationId = config.mutationId;
      _this.mutationCache = config.mutationCache;
      _this.logger = config.logger || defaultLogger;
      _this.observers = [];
      _this.state = config.state || getDefaultState();
      _this.updateCacheTime(_this.options.cacheTime);
      _this.scheduleGc();
      return _this;
    }
    _createClass(Mutation, [{
      key: "meta",
      get: function get() {
        return this.options.meta;
      }
    }, {
      key: "setState",
      value: function setState(state) {
        this.dispatch({
          type: 'setState',
          state: state
        });
      }
    }, {
      key: "addObserver",
      value: function addObserver(observer) {
        if (this.observers.indexOf(observer) === -1) {
          this.observers.push(observer); // Stop the mutation from being garbage collected

          this.clearGcTimeout();
          this.mutationCache.notify({
            type: 'observerAdded',
            mutation: this,
            observer: observer
          });
        }
      }
    }, {
      key: "removeObserver",
      value: function removeObserver(observer) {
        this.observers = this.observers.filter(function (x) {
          return x !== observer;
        });
        this.scheduleGc();
        this.mutationCache.notify({
          type: 'observerRemoved',
          mutation: this,
          observer: observer
        });
      }
    }, {
      key: "optionalRemove",
      value: function optionalRemove() {
        if (!this.observers.length) {
          if (this.state.status === 'loading') {
            this.scheduleGc();
          } else {
            this.mutationCache.remove(this);
          }
        }
      }
    }, {
      key: "continue",
      value: function _continue() {
        if (this.retryer) {
          this.retryer["continue"]();
          return this.retryer.promise;
        }
        return this.execute();
      }
    }, {
      key: "execute",
      value: function () {
        var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _this2 = this;
          var executeMutation, restored, _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$options$onSettl, _this$options3, _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options, context, data, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onError, _this$options4, _this$options$onSettl2, _this$options5;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                executeMutation = function executeMutation() {
                  var _this$options$retry;
                  _this2.retryer = createRetryer({
                    fn: function fn() {
                      if (!_this2.options.mutationFn) {
                        return Promise.reject('No mutationFn found');
                      }
                      return _this2.options.mutationFn(_this2.state.variables);
                    },
                    onFail: function onFail(failureCount, error) {
                      _this2.dispatch({
                        type: 'failed',
                        failureCount: failureCount,
                        error: error
                      });
                    },
                    onPause: function onPause() {
                      _this2.dispatch({
                        type: 'pause'
                      });
                    },
                    onContinue: function onContinue() {
                      _this2.dispatch({
                        type: 'continue'
                      });
                    },
                    retry: (_this$options$retry = _this2.options.retry) != null ? _this$options$retry : 0,
                    retryDelay: _this2.options.retryDelay,
                    networkMode: _this2.options.networkMode
                  });
                  return _this2.retryer.promise;
                };
                restored = this.state.status === 'loading';
                _context.prev = 2;
                if (restored) {
                  _context.next = 11;
                  break;
                }
                this.dispatch({
                  type: 'loading',
                  variables: this.options.variables
                }); // Notify cache callback
                _context.next = 7;
                return (_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this);
              case 7:
                _context.next = 9;
                return (_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables);
              case 9:
                context = _context.sent;
                if (context !== this.state.context) {
                  this.dispatch({
                    type: 'loading',
                    context: context,
                    variables: this.state.variables
                  });
                }
              case 11:
                _context.next = 13;
                return executeMutation();
              case 13:
                data = _context.sent;
                _context.next = 16;
                return (_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this);
              case 16:
                _context.next = 18;
                return (_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context);
              case 18:
                _context.next = 20;
                return (_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context);
              case 20:
                this.dispatch({
                  type: 'success',
                  data: data
                });
                return _context.abrupt("return", data);
              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](2);
                _context.prev = 26;
                _context.next = 29;
                return (_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, _context.t0, this.state.variables, this.state.context, this);
              case 29:
                {
                  this.logger.error(_context.t0);
                }
                _context.next = 32;
                return (_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, _context.t0, this.state.variables, this.state.context);
              case 32:
                _context.next = 34;
                return (_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, undefined, _context.t0, this.state.variables, this.state.context);
              case 34:
                throw _context.t0;
              case 35:
                _context.prev = 35;
                this.dispatch({
                  type: 'error',
                  error: _context.t0
                });
                return _context.finish(35);
              case 38:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[2, 24], [26,, 35, 38]]);
        }));
        function execute() {
          return _execute.apply(this, arguments);
        }
        return execute;
      }()
    }, {
      key: "dispatch",
      value: function dispatch(action) {
        var _this3 = this;
        var reducer = function reducer(state) {
          switch (action.type) {
            case 'failed':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                failureCount: action.failureCount,
                failureReason: action.error
              });
            case 'pause':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                isPaused: true
              });
            case 'continue':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                isPaused: false
              });
            case 'loading':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                context: action.context,
                data: undefined,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: !canFetch(_this3.options.networkMode),
                status: 'loading',
                variables: action.variables
              });
            case 'success':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                data: action.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: 'success',
                isPaused: false
              });
            case 'error':
              return _objectSpread2(_objectSpread2({}, state), {}, {
                data: undefined,
                error: action.error,
                failureCount: state.failureCount + 1,
                failureReason: action.error,
                isPaused: false,
                status: 'error'
              });
            case 'setState':
              return _objectSpread2(_objectSpread2({}, state), action.state);
          }
        };
        this.state = reducer(this.state);
        notifyManager.batch(function () {
          _this3.observers.forEach(function (observer) {
            observer.onMutationUpdate(action);
          });
          _this3.mutationCache.notify({
            mutation: _this3,
            type: 'updated',
            action: action
          });
        });
      }
    }]);
    return Mutation;
  }(Removable);
  function getDefaultState() {
    return {
      context: undefined,
      data: undefined,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: 'idle',
      variables: undefined
    };
  }

  // CLASS
  var MutationCache = /*#__PURE__*/function (_Subscribable) {
    _inherits(MutationCache, _Subscribable);
    var _super = _createSuper(MutationCache);
    function MutationCache(config) {
      var _this;
      _classCallCheck(this, MutationCache);
      _this = _super.call(this);
      _this.config = config || {};
      _this.mutations = [];
      _this.mutationId = 0;
      return _this;
    }
    _createClass(MutationCache, [{
      key: "build",
      value: function build(client, options, state) {
        var mutation = new Mutation({
          mutationCache: this,
          logger: client.getLogger(),
          mutationId: ++this.mutationId,
          options: client.defaultMutationOptions(options),
          state: state,
          defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
        });
        this.add(mutation);
        return mutation;
      }
    }, {
      key: "add",
      value: function add(mutation) {
        this.mutations.push(mutation);
        this.notify({
          type: 'added',
          mutation: mutation
        });
      }
    }, {
      key: "remove",
      value: function remove(mutation) {
        this.mutations = this.mutations.filter(function (x) {
          return x !== mutation;
        });
        this.notify({
          type: 'removed',
          mutation: mutation
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this2 = this;
        notifyManager.batch(function () {
          _this2.mutations.forEach(function (mutation) {
            _this2.remove(mutation);
          });
        });
      }
    }, {
      key: "getAll",
      value: function getAll() {
        return this.mutations;
      }
    }, {
      key: "find",
      value: function find(filters) {
        if (typeof filters.exact === 'undefined') {
          filters.exact = true;
        }
        return this.mutations.find(function (mutation) {
          return matchMutation(filters, mutation);
        });
      }
    }, {
      key: "findAll",
      value: function findAll(filters) {
        return this.mutations.filter(function (mutation) {
          return matchMutation(filters, mutation);
        });
      }
    }, {
      key: "notify",
      value: function notify(event) {
        var _this3 = this;
        notifyManager.batch(function () {
          _this3.listeners.forEach(function (listener) {
            listener(event);
          });
        });
      }
    }, {
      key: "resumePausedMutations",
      value: function resumePausedMutations() {
        var pausedMutations = this.mutations.filter(function (x) {
          return x.state.isPaused;
        });
        return notifyManager.batch(function () {
          return pausedMutations.reduce(function (promise, mutation) {
            return promise.then(function () {
              return mutation["continue"]()["catch"](noop$2);
            });
          }, Promise.resolve());
        });
      }
    }]);
    return MutationCache;
  }(Subscribable);

  function infiniteQueryBehavior() {
    return {
      onFetch: function onFetch(context) {
        context.fetchFn = function () {
          var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
          var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
          var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
          var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
          var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
          var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
          var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
          var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
          var newPageParams = oldPageParams;
          var cancelled = false;
          var addSignalProperty = function addSignalProperty(object) {
            Object.defineProperty(object, 'signal', {
              enumerable: true,
              get: function get() {
                var _context$signal;
                if ((_context$signal = context.signal) != null && _context$signal.aborted) {
                  cancelled = true;
                } else {
                  var _context$signal2;
                  (_context$signal2 = context.signal) == null ? void 0 : _context$signal2.addEventListener('abort', function () {
                    cancelled = true;
                  });
                }
                return context.signal;
              }
            });
          }; // Get query function

          var queryFn = context.options.queryFn || function () {
            return Promise.reject('Missing queryFn');
          };
          var buildNewPages = function buildNewPages(pages, param, page, previous) {
            newPageParams = previous ? [param].concat(_toConsumableArray(newPageParams)) : [].concat(_toConsumableArray(newPageParams), [param]);
            return previous ? [page].concat(_toConsumableArray(pages)) : [].concat(_toConsumableArray(pages), [page]);
          }; // Create function to fetch a page

          var fetchPage = function fetchPage(pages, manual, param, previous) {
            if (cancelled) {
              return Promise.reject('Cancelled');
            }
            if (typeof param === 'undefined' && !manual && pages.length) {
              return Promise.resolve(pages);
            }
            var queryFnContext = {
              queryKey: context.queryKey,
              pageParam: param,
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext);
            var queryFnResult = queryFn(queryFnContext);
            var promise = Promise.resolve(queryFnResult).then(function (page) {
              return buildNewPages(pages, param, page, previous);
            });
            return promise;
          };
          var promise; // Fetch first page?

          if (!oldPages.length) {
            promise = fetchPage([]);
          } // Fetch next page?
          else if (isFetchingNextPage) {
            var manual = typeof pageParam !== 'undefined';
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } // Fetch previous page?
          else if (isFetchingPreviousPage) {
            var _manual = typeof pageParam !== 'undefined';
            var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, _manual, _param, true);
          } // Refetch pages
          else {
            newPageParams = [];
            var _manual2 = typeof context.options.getNextPageParam === 'undefined';
            var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true; // Fetch first page

            promise = shouldFetchFirstPage ? fetchPage([], _manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0])); // Fetch remaining pages
            var _loop = function _loop(i) {
              promise = promise.then(function (pages) {
                var shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;
                if (shouldFetchNextPage) {
                  var _param2 = _manual2 ? oldPageParams[i] : getNextPageParam(context.options, pages);
                  return fetchPage(pages, _manual2, _param2);
                }
                return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
              });
            };
            for (var i = 1; i < oldPages.length; i++) {
              _loop(i);
            }
          }
          var finalPromise = promise.then(function (pages) {
            return {
              pages: pages,
              pageParams: newPageParams
            };
          });
          return finalPromise;
        };
      }
    };
  }
  function getNextPageParam(options, pages) {
    return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
  }
  function getPreviousPageParam(options, pages) {
    return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
  }
  /**
   * Checks if there is a next page.
   * Returns `undefined` if it cannot be determined.
   */

  function hasNextPage(options, pages) {
    if (options.getNextPageParam && Array.isArray(pages)) {
      var nextPageParam = getNextPageParam(options, pages);
      return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
    }
    return;
  }
  /**
   * Checks if there is a previous page.
   * Returns `undefined` if it cannot be determined.
   */

  function hasPreviousPage(options, pages) {
    if (options.getPreviousPageParam && Array.isArray(pages)) {
      var previousPageParam = getPreviousPageParam(options, pages);
      return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
    }
    return;
  }

  // CLASS
  var QueryClient = /*#__PURE__*/function () {
    function QueryClient() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, QueryClient);
      this.queryCache = config.queryCache || new QueryCache();
      this.mutationCache = config.mutationCache || new MutationCache();
      this.logger = config.logger || defaultLogger;
      this.defaultOptions = config.defaultOptions || {};
      this.queryDefaults = [];
      this.mutationDefaults = [];
      if (config.logger) {
        this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
      }
    }
    _createClass(QueryClient, [{
      key: "mount",
      value: function mount() {
        var _this = this;
        this.unsubscribeFocus = focusManager.subscribe(function () {
          if (focusManager.isFocused()) {
            _this.resumePausedMutations();
            _this.queryCache.onFocus();
          }
        });
        this.unsubscribeOnline = onlineManager.subscribe(function () {
          if (onlineManager.isOnline()) {
            _this.resumePausedMutations();
            _this.queryCache.onOnline();
          }
        });
      }
    }, {
      key: "unmount",
      value: function unmount() {
        var _this$unsubscribeFocu, _this$unsubscribeOnli;
        (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
        (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
      }
    }, {
      key: "isFetching",
      value: function isFetching(arg1, arg2) {
        var _parseFilterArgs = parseFilterArgs(arg1, arg2),
          _parseFilterArgs2 = _slicedToArray(_parseFilterArgs, 1),
          filters = _parseFilterArgs2[0];
        filters.fetchStatus = 'fetching';
        return this.queryCache.findAll(filters).length;
      }
    }, {
      key: "isMutating",
      value: function isMutating(filters) {
        return this.mutationCache.findAll(_objectSpread2(_objectSpread2({}, filters), {}, {
          fetching: true
        })).length;
      }
    }, {
      key: "getQueryData",
      value: function getQueryData(queryKey, filters) {
        var _this$queryCache$find;
        return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
      }
    }, {
      key: "ensureQueryData",
      value: function ensureQueryData(arg1, arg2, arg3) {
        var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
        var cachedData = this.getQueryData(parsedOptions.queryKey);
        return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
      }
    }, {
      key: "getQueriesData",
      value: function getQueriesData(queryKeyOrFilters) {
        return this.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref2) {
          var queryKey = _ref2.queryKey,
            state = _ref2.state;
          var data = state.data;
          return [queryKey, data];
        });
      }
    }, {
      key: "setQueryData",
      value: function setQueryData(queryKey, updater, options) {
        var query = this.queryCache.find(queryKey);
        var prevData = query == null ? void 0 : query.state.data;
        var data = functionalUpdate(updater, prevData);
        if (typeof data === 'undefined') {
          return undefined;
        }
        var parsedOptions = parseQueryArgs(queryKey);
        var defaultedOptions = this.defaultQueryOptions(parsedOptions);
        return this.queryCache.build(this, defaultedOptions).setData(data, _objectSpread2(_objectSpread2({}, options), {}, {
          manual: true
        }));
      }
    }, {
      key: "setQueriesData",
      value: function setQueriesData(queryKeyOrFilters, updater, options) {
        var _this2 = this;
        return notifyManager.batch(function () {
          return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref3) {
            var queryKey = _ref3.queryKey;
            return [queryKey, _this2.setQueryData(queryKey, updater, options)];
          });
        });
      }
    }, {
      key: "getQueryState",
      value: function getQueryState(queryKey, filters) {
        var _this$queryCache$find2;
        return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
      }
    }, {
      key: "removeQueries",
      value: function removeQueries(arg1, arg2) {
        var _parseFilterArgs3 = parseFilterArgs(arg1, arg2),
          _parseFilterArgs4 = _slicedToArray(_parseFilterArgs3, 1),
          filters = _parseFilterArgs4[0];
        var queryCache = this.queryCache;
        notifyManager.batch(function () {
          queryCache.findAll(filters).forEach(function (query) {
            queryCache.remove(query);
          });
        });
      }
    }, {
      key: "resetQueries",
      value: function resetQueries(arg1, arg2, arg3) {
        var _this3 = this;
        var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3),
          _parseFilterArgs6 = _slicedToArray(_parseFilterArgs5, 2),
          filters = _parseFilterArgs6[0],
          options = _parseFilterArgs6[1];
        var queryCache = this.queryCache;
        var refetchFilters = _objectSpread2({
          type: 'active'
        }, filters);
        return notifyManager.batch(function () {
          queryCache.findAll(filters).forEach(function (query) {
            query.reset();
          });
          return _this3.refetchQueries(refetchFilters, options);
        });
      }
    }, {
      key: "cancelQueries",
      value: function cancelQueries(arg1, arg2, arg3) {
        var _this4 = this;
        var _parseFilterArgs7 = parseFilterArgs(arg1, arg2, arg3),
          _parseFilterArgs8 = _slicedToArray(_parseFilterArgs7, 2),
          filters = _parseFilterArgs8[0],
          _parseFilterArgs8$ = _parseFilterArgs8[1],
          cancelOptions = _parseFilterArgs8$ === void 0 ? {} : _parseFilterArgs8$;
        if (typeof cancelOptions.revert === 'undefined') {
          cancelOptions.revert = true;
        }
        var promises = notifyManager.batch(function () {
          return _this4.queryCache.findAll(filters).map(function (query) {
            return query.cancel(cancelOptions);
          });
        });
        return Promise.all(promises).then(noop$2)["catch"](noop$2);
      }
    }, {
      key: "invalidateQueries",
      value: function invalidateQueries(arg1, arg2, arg3) {
        var _this5 = this;
        var _parseFilterArgs9 = parseFilterArgs(arg1, arg2, arg3),
          _parseFilterArgs10 = _slicedToArray(_parseFilterArgs9, 2),
          filters = _parseFilterArgs10[0],
          options = _parseFilterArgs10[1];
        return notifyManager.batch(function () {
          var _ref, _filters$refetchType;
          _this5.queryCache.findAll(filters).forEach(function (query) {
            query.invalidate();
          });
          if (filters.refetchType === 'none') {
            return Promise.resolve();
          }
          var refetchFilters = _objectSpread2(_objectSpread2({}, filters), {}, {
            type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : 'active'
          });
          return _this5.refetchQueries(refetchFilters, options);
        });
      }
    }, {
      key: "refetchQueries",
      value: function refetchQueries(arg1, arg2, arg3) {
        var _this6 = this;
        var _parseFilterArgs11 = parseFilterArgs(arg1, arg2, arg3),
          _parseFilterArgs12 = _slicedToArray(_parseFilterArgs11, 2),
          filters = _parseFilterArgs12[0],
          options = _parseFilterArgs12[1];
        var promises = notifyManager.batch(function () {
          return _this6.queryCache.findAll(filters).filter(function (query) {
            return !query.isDisabled();
          }).map(function (query) {
            var _options$cancelRefetc;
            return query.fetch(undefined, _objectSpread2(_objectSpread2({}, options), {}, {
              cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
              meta: {
                refetchPage: filters.refetchPage
              }
            }));
          });
        });
        var promise = Promise.all(promises).then(noop$2);
        if (!(options != null && options.throwOnError)) {
          promise = promise["catch"](noop$2);
        }
        return promise;
      }
    }, {
      key: "fetchQuery",
      value: function fetchQuery(arg1, arg2, arg3) {
        var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
        var defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

        if (typeof defaultedOptions.retry === 'undefined') {
          defaultedOptions.retry = false;
        }
        var query = this.queryCache.build(this, defaultedOptions);
        return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
      }
    }, {
      key: "prefetchQuery",
      value: function prefetchQuery(arg1, arg2, arg3) {
        return this.fetchQuery(arg1, arg2, arg3).then(noop$2)["catch"](noop$2);
      }
    }, {
      key: "fetchInfiniteQuery",
      value: function fetchInfiniteQuery(arg1, arg2, arg3) {
        var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
        parsedOptions.behavior = infiniteQueryBehavior();
        return this.fetchQuery(parsedOptions);
      }
    }, {
      key: "prefetchInfiniteQuery",
      value: function prefetchInfiniteQuery(arg1, arg2, arg3) {
        return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop$2)["catch"](noop$2);
      }
    }, {
      key: "resumePausedMutations",
      value: function resumePausedMutations() {
        return this.mutationCache.resumePausedMutations();
      }
    }, {
      key: "getQueryCache",
      value: function getQueryCache() {
        return this.queryCache;
      }
    }, {
      key: "getMutationCache",
      value: function getMutationCache() {
        return this.mutationCache;
      }
    }, {
      key: "getLogger",
      value: function getLogger() {
        return this.logger;
      }
    }, {
      key: "getDefaultOptions",
      value: function getDefaultOptions() {
        return this.defaultOptions;
      }
    }, {
      key: "setDefaultOptions",
      value: function setDefaultOptions(options) {
        this.defaultOptions = options;
      }
    }, {
      key: "setQueryDefaults",
      value: function setQueryDefaults(queryKey, options) {
        var result = this.queryDefaults.find(function (x) {
          return hashQueryKey(queryKey) === hashQueryKey(x.queryKey);
        });
        if (result) {
          result.defaultOptions = options;
        } else {
          this.queryDefaults.push({
            queryKey: queryKey,
            defaultOptions: options
          });
        }
      }
    }, {
      key: "getQueryDefaults",
      value: function getQueryDefaults(queryKey) {
        if (!queryKey) {
          return undefined;
        } // Get the first matching defaults

        var firstMatchingDefaults = this.queryDefaults.find(function (x) {
          return partialMatchKey(queryKey, x.queryKey);
        }); // Additional checks and error in dev mode

        {
          // Retrieve all matching defaults for the given key
          var matchingDefaults = this.queryDefaults.filter(function (x) {
            return partialMatchKey(queryKey, x.queryKey);
          }); // It is ok not having defaults, but it is error prone to have more than 1 default for a given key

          if (matchingDefaults.length > 1) {
            this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(queryKey) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults.");
          }
        }
        return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
      }
    }, {
      key: "setMutationDefaults",
      value: function setMutationDefaults(mutationKey, options) {
        var result = this.mutationDefaults.find(function (x) {
          return hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey);
        });
        if (result) {
          result.defaultOptions = options;
        } else {
          this.mutationDefaults.push({
            mutationKey: mutationKey,
            defaultOptions: options
          });
        }
      }
    }, {
      key: "getMutationDefaults",
      value: function getMutationDefaults(mutationKey) {
        if (!mutationKey) {
          return undefined;
        } // Get the first matching defaults

        var firstMatchingDefaults = this.mutationDefaults.find(function (x) {
          return partialMatchKey(mutationKey, x.mutationKey);
        }); // Additional checks and error in dev mode

        {
          // Retrieve all matching defaults for the given key
          var matchingDefaults = this.mutationDefaults.filter(function (x) {
            return partialMatchKey(mutationKey, x.mutationKey);
          }); // It is ok not having defaults, but it is error prone to have more than 1 default for a given key

          if (matchingDefaults.length > 1) {
            this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(mutationKey) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults.");
          }
        }
        return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
      }
    }, {
      key: "defaultQueryOptions",
      value: function defaultQueryOptions(options) {
        if (options != null && options._defaulted) {
          return options;
        }
        var defaultedOptions = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, this.defaultOptions.queries), this.getQueryDefaults(options == null ? void 0 : options.queryKey)), options), {}, {
          _defaulted: true
        });
        if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
          defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
        } // dependent default values

        if (typeof defaultedOptions.refetchOnReconnect === 'undefined') {
          defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== 'always';
        }
        if (typeof defaultedOptions.useErrorBoundary === 'undefined') {
          defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
        }
        return defaultedOptions;
      }
    }, {
      key: "defaultMutationOptions",
      value: function defaultMutationOptions(options) {
        if (options != null && options._defaulted) {
          return options;
        }
        return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, this.defaultOptions.mutations), this.getMutationDefaults(options == null ? void 0 : options.mutationKey)), options), {}, {
          _defaulted: true
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        this.queryCache.clear();
        this.mutationCache.clear();
      }
    }]);
    return QueryClient;
  }();

  var _excluded$1 = ["refetchPage"];
  var QueryObserver = /*#__PURE__*/function (_Subscribable) {
    _inherits(QueryObserver, _Subscribable);
    var _super = _createSuper(QueryObserver);
    function QueryObserver(client, options) {
      var _this;
      _classCallCheck(this, QueryObserver);
      _this = _super.call(this);
      _this.client = client;
      _this.options = options;
      _this.trackedProps = new Set();
      _this.selectError = null;
      _this.bindMethods();
      _this.setOptions(options);
      return _this;
    }
    _createClass(QueryObserver, [{
      key: "bindMethods",
      value: function bindMethods() {
        this.remove = this.remove.bind(this);
        this.refetch = this.refetch.bind(this);
      }
    }, {
      key: "onSubscribe",
      value: function onSubscribe() {
        if (this.listeners.length === 1) {
          this.currentQuery.addObserver(this);
          if (shouldFetchOnMount(this.currentQuery, this.options)) {
            this.executeFetch();
          }
          this.updateTimers();
        }
      }
    }, {
      key: "onUnsubscribe",
      value: function onUnsubscribe() {
        if (!this.listeners.length) {
          this.destroy();
        }
      }
    }, {
      key: "shouldFetchOnReconnect",
      value: function shouldFetchOnReconnect() {
        return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
      }
    }, {
      key: "shouldFetchOnWindowFocus",
      value: function shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.listeners = [];
        this.clearStaleTimeout();
        this.clearRefetchInterval();
        this.currentQuery.removeObserver(this);
      }
    }, {
      key: "setOptions",
      value: function setOptions(options, notifyOptions) {
        var prevOptions = this.options;
        var prevQuery = this.currentQuery;
        this.options = this.client.defaultQueryOptions(options);
        if (typeof (options == null ? void 0 : options.isDataEqual) !== 'undefined') {
          this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option");
        }
        if (!shallowEqualObjects(prevOptions, this.options)) {
          this.client.getQueryCache().notify({
            type: 'observerOptionsUpdated',
            query: this.currentQuery,
            observer: this
          });
        }
        if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
          throw new Error('Expected enabled to be a boolean');
        } // Keep previous query key if the user does not supply one

        if (!this.options.queryKey) {
          this.options.queryKey = prevOptions.queryKey;
        }
        this.updateQuery();
        var mounted = this.hasListeners(); // Fetch if there are subscribers

        if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
          this.executeFetch();
        } // Update result

        this.updateResult(notifyOptions); // Update stale interval if needed

        if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
          this.updateStaleTimeout();
        }
        var nextRefetchInterval = this.computeRefetchInterval(); // Update refetch interval if needed

        if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
          this.updateRefetchInterval(nextRefetchInterval);
        }
      }
    }, {
      key: "getOptimisticResult",
      value: function getOptimisticResult(options) {
        var query = this.client.getQueryCache().build(this.client, options);
        return this.createResult(query, options);
      }
    }, {
      key: "getCurrentResult",
      value: function getCurrentResult() {
        return this.currentResult;
      }
    }, {
      key: "trackResult",
      value: function trackResult(result) {
        var _this2 = this;
        var trackedResult = {};
        Object.keys(result).forEach(function (key) {
          Object.defineProperty(trackedResult, key, {
            configurable: false,
            enumerable: true,
            get: function get() {
              _this2.trackedProps.add(key);
              return result[key];
            }
          });
        });
        return trackedResult;
      }
    }, {
      key: "getCurrentQuery",
      value: function getCurrentQuery() {
        return this.currentQuery;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.client.getQueryCache().remove(this.currentQuery);
      }
    }, {
      key: "refetch",
      value: function refetch() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          refetchPage = _ref.refetchPage,
          options = _objectWithoutProperties(_ref, _excluded$1);
        return this.fetch(_objectSpread2(_objectSpread2({}, options), {}, {
          meta: {
            refetchPage: refetchPage
          }
        }));
      }
    }, {
      key: "fetchOptimistic",
      value: function fetchOptimistic(options) {
        var _this3 = this;
        var defaultedOptions = this.client.defaultQueryOptions(options);
        var query = this.client.getQueryCache().build(this.client, defaultedOptions);
        query.isFetchingOptimistic = true;
        return query.fetch().then(function () {
          return _this3.createResult(query, defaultedOptions);
        });
      }
    }, {
      key: "fetch",
      value: function fetch(fetchOptions) {
        var _this4 = this;
        var _fetchOptions$cancelR;
        return this.executeFetch(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
          cancelRefetch: (_fetchOptions$cancelR = fetchOptions.cancelRefetch) != null ? _fetchOptions$cancelR : true
        })).then(function () {
          _this4.updateResult();
          return _this4.currentResult;
        });
      }
    }, {
      key: "executeFetch",
      value: function executeFetch(fetchOptions) {
        // Make sure we reference the latest query as the current one might have been removed
        this.updateQuery(); // Fetch

        var promise = this.currentQuery.fetch(this.options, fetchOptions);
        if (!(fetchOptions != null && fetchOptions.throwOnError)) {
          promise = promise["catch"](noop$2);
        }
        return promise;
      }
    }, {
      key: "updateStaleTimeout",
      value: function updateStaleTimeout() {
        var _this5 = this;
        this.clearStaleTimeout();
        if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
          return;
        }
        var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
        // To mitigate this issue we always add 1 ms to the timeout.

        var timeout = time + 1;
        this.staleTimeoutId = setTimeout(function () {
          if (!_this5.currentResult.isStale) {
            _this5.updateResult();
          }
        }, timeout);
      }
    }, {
      key: "computeRefetchInterval",
      value: function computeRefetchInterval() {
        var _this$options$refetch;
        return typeof this.options.refetchInterval === 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
      }
    }, {
      key: "updateRefetchInterval",
      value: function updateRefetchInterval(nextInterval) {
        var _this6 = this;
        this.clearRefetchInterval();
        this.currentRefetchInterval = nextInterval;
        if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
          return;
        }
        this.refetchIntervalId = setInterval(function () {
          if (_this6.options.refetchIntervalInBackground || focusManager.isFocused()) {
            _this6.executeFetch();
          }
        }, this.currentRefetchInterval);
      }
    }, {
      key: "updateTimers",
      value: function updateTimers() {
        this.updateStaleTimeout();
        this.updateRefetchInterval(this.computeRefetchInterval());
      }
    }, {
      key: "clearStaleTimeout",
      value: function clearStaleTimeout() {
        if (this.staleTimeoutId) {
          clearTimeout(this.staleTimeoutId);
          this.staleTimeoutId = undefined;
        }
      }
    }, {
      key: "clearRefetchInterval",
      value: function clearRefetchInterval() {
        if (this.refetchIntervalId) {
          clearInterval(this.refetchIntervalId);
          this.refetchIntervalId = undefined;
        }
      }
    }, {
      key: "createResult",
      value: function createResult(query, options) {
        var prevQuery = this.currentQuery;
        var prevOptions = this.options;
        var prevResult = this.currentResult;
        var prevResultState = this.currentResultState;
        var prevResultOptions = this.currentResultOptions;
        var queryChange = query !== prevQuery;
        var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
        var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
        var state = query.state;
        var dataUpdatedAt = state.dataUpdatedAt,
          error = state.error,
          errorUpdatedAt = state.errorUpdatedAt,
          fetchStatus = state.fetchStatus,
          status = state.status;
        var isPreviousData = false;
        var isPlaceholderData = false;
        var data; // Optimistically set result in fetching state if needed

        if (options._optimisticResults) {
          var mounted = this.hasListeners();
          var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
          var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
          if (fetchOnMount || fetchOptionally) {
            fetchStatus = canFetch(query.options.networkMode) ? 'fetching' : 'paused';
            if (!dataUpdatedAt) {
              status = 'loading';
            }
          }
          if (options._optimisticResults === 'isRestoring') {
            fetchStatus = 'idle';
          }
        } // Keep previous data if needed

        if (options.keepPreviousData && !state.dataUpdatedAt && prevQueryResult != null && prevQueryResult.isSuccess && status !== 'error') {
          data = prevQueryResult.data;
          dataUpdatedAt = prevQueryResult.dataUpdatedAt;
          status = prevQueryResult.status;
          isPreviousData = true;
        } // Select data if needed
        else if (options.select && typeof state.data !== 'undefined') {
          // Memoize select result
          if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
            data = this.selectResult;
          } else {
            try {
              this.selectFn = options.select;
              data = options.select(state.data);
              data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
              this.selectResult = data;
              this.selectError = null;
            } catch (selectError) {
              {
                this.client.getLogger().error(selectError);
              }
              this.selectError = selectError;
            }
          }
        } // Use query data
        else {
          data = state.data;
        } // Show placeholder data if needed

        if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && status === 'loading') {
          var placeholderData; // Memoize placeholder data

          if (prevResult != null && prevResult.isPlaceholderData && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
            placeholderData = prevResult.data;
          } else {
            placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;
            if (options.select && typeof placeholderData !== 'undefined') {
              try {
                placeholderData = options.select(placeholderData);
                this.selectError = null;
              } catch (selectError) {
                {
                  this.client.getLogger().error(selectError);
                }
                this.selectError = selectError;
              }
            }
          }
          if (typeof placeholderData !== 'undefined') {
            status = 'success';
            data = replaceData(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
            isPlaceholderData = true;
          }
        }
        if (this.selectError) {
          error = this.selectError;
          data = this.selectResult;
          errorUpdatedAt = Date.now();
          status = 'error';
        }
        var isFetching = fetchStatus === 'fetching';
        var isLoading = status === 'loading';
        var isError = status === 'error';
        var result = {
          status: status,
          fetchStatus: fetchStatus,
          isLoading: isLoading,
          isSuccess: status === 'success',
          isError: isError,
          isInitialLoading: isLoading && isFetching,
          data: data,
          dataUpdatedAt: dataUpdatedAt,
          error: error,
          errorUpdatedAt: errorUpdatedAt,
          failureCount: state.fetchFailureCount,
          failureReason: state.fetchFailureReason,
          errorUpdateCount: state.errorUpdateCount,
          isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
          isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
          isFetching: isFetching,
          isRefetching: isFetching && !isLoading,
          isLoadingError: isError && state.dataUpdatedAt === 0,
          isPaused: fetchStatus === 'paused',
          isPlaceholderData: isPlaceholderData,
          isPreviousData: isPreviousData,
          isRefetchError: isError && state.dataUpdatedAt !== 0,
          isStale: isStale(query, options),
          refetch: this.refetch,
          remove: this.remove
        };
        return result;
      }
    }, {
      key: "updateResult",
      value: function updateResult(notifyOptions) {
        var _this7 = this;
        var prevResult = this.currentResult;
        var nextResult = this.createResult(this.currentQuery, this.options);
        this.currentResultState = this.currentQuery.state;
        this.currentResultOptions = this.options; // Only notify and update result if something has changed

        if (shallowEqualObjects(nextResult, prevResult)) {
          return;
        }
        this.currentResult = nextResult; // Determine which callbacks to trigger

        var defaultNotifyOptions = {
          cache: true
        };
        var shouldNotifyListeners = function shouldNotifyListeners() {
          if (!prevResult) {
            return true;
          }
          var notifyOnChangeProps = _this7.options.notifyOnChangeProps;
          if (notifyOnChangeProps === 'all' || !notifyOnChangeProps && !_this7.trackedProps.size) {
            return true;
          }
          var includedProps = new Set(notifyOnChangeProps != null ? notifyOnChangeProps : _this7.trackedProps);
          if (_this7.options.useErrorBoundary) {
            includedProps.add('error');
          }
          return Object.keys(_this7.currentResult).some(function (key) {
            var typedKey = key;
            var changed = _this7.currentResult[typedKey] !== prevResult[typedKey];
            return changed && includedProps.has(typedKey);
          });
        };
        if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) {
          defaultNotifyOptions.listeners = true;
        }
        this.notify(_objectSpread2(_objectSpread2({}, defaultNotifyOptions), notifyOptions));
      }
    }, {
      key: "updateQuery",
      value: function updateQuery() {
        var query = this.client.getQueryCache().build(this.client, this.options);
        if (query === this.currentQuery) {
          return;
        }
        var prevQuery = this.currentQuery;
        this.currentQuery = query;
        this.currentQueryInitialState = query.state;
        this.previousQueryResult = this.currentResult;
        if (this.hasListeners()) {
          prevQuery == null ? void 0 : prevQuery.removeObserver(this);
          query.addObserver(this);
        }
      }
    }, {
      key: "onQueryUpdate",
      value: function onQueryUpdate(action) {
        var notifyOptions = {};
        if (action.type === 'success') {
          notifyOptions.onSuccess = !action.manual;
        } else if (action.type === 'error' && !isCancelledError(action.error)) {
          notifyOptions.onError = true;
        }
        this.updateResult(notifyOptions);
        if (this.hasListeners()) {
          this.updateTimers();
        }
      }
    }, {
      key: "notify",
      value: function notify(notifyOptions) {
        var _this8 = this;
        notifyManager.batch(function () {
          // First trigger the configuration callbacks
          if (notifyOptions.onSuccess) {
            var _this$options$onSucce, _this$options, _this$options$onSettl, _this$options2;
            (_this$options$onSucce = (_this$options = _this8.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options, _this8.currentResult.data);
            (_this$options$onSettl = (_this$options2 = _this8.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options2, _this8.currentResult.data, null);
          } else if (notifyOptions.onError) {
            var _this$options$onError, _this$options3, _this$options$onSettl2, _this$options4;
            (_this$options$onError = (_this$options3 = _this8.options).onError) == null ? void 0 : _this$options$onError.call(_this$options3, _this8.currentResult.error);
            (_this$options$onSettl2 = (_this$options4 = _this8.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options4, undefined, _this8.currentResult.error);
          } // Then trigger the listeners

          if (notifyOptions.listeners) {
            _this8.listeners.forEach(function (listener) {
              listener(_this8.currentResult);
            });
          } // Then the cache listeners

          if (notifyOptions.cache) {
            _this8.client.getQueryCache().notify({
              query: _this8.currentQuery,
              type: 'observerResultsUpdated'
            });
          }
        });
      }
    }]);
    return QueryObserver;
  }(Subscribable);
  function shouldLoadOnMount(query, options) {
    return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
  }
  function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
  }
  function shouldFetchOn(query, options, field) {
    if (options.enabled !== false) {
      var value = typeof field === 'function' ? field(query) : field;
      return value === 'always' || value !== false && isStale(query, options);
    }
    return false;
  }
  function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== 'error') && isStale(query, options);
  }
  function isStale(query, options) {
    return query.isStaleByTime(options.staleTime);
  }

  var QueriesObserver = /*#__PURE__*/function (_Subscribable) {
    _inherits(QueriesObserver, _Subscribable);
    var _super = _createSuper(QueriesObserver);
    function QueriesObserver(client, queries) {
      var _this;
      _classCallCheck(this, QueriesObserver);
      _this = _super.call(this);
      _this.client = client;
      _this.queries = [];
      _this.result = [];
      _this.observers = [];
      _this.observersMap = {};
      if (queries) {
        _this.setQueries(queries);
      }
      return _this;
    }
    _createClass(QueriesObserver, [{
      key: "onSubscribe",
      value: function onSubscribe() {
        var _this2 = this;
        if (this.listeners.length === 1) {
          this.observers.forEach(function (observer) {
            observer.subscribe(function (result) {
              _this2.onUpdate(observer, result);
            });
          });
        }
      }
    }, {
      key: "onUnsubscribe",
      value: function onUnsubscribe() {
        if (!this.listeners.length) {
          this.destroy();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.listeners = [];
        this.observers.forEach(function (observer) {
          observer.destroy();
        });
      }
    }, {
      key: "setQueries",
      value: function setQueries(queries, notifyOptions) {
        var _this3 = this;
        this.queries = queries;
        notifyManager.batch(function () {
          var prevObservers = _this3.observers;
          var newObserverMatches = _this3.findMatchingObservers(_this3.queries); // set options for the new observers to notify of changes

          newObserverMatches.forEach(function (match) {
            return match.observer.setOptions(match.defaultedQueryOptions, notifyOptions);
          });
          var newObservers = newObserverMatches.map(function (match) {
            return match.observer;
          });
          var newObserversMap = Object.fromEntries(newObservers.map(function (observer) {
            return [observer.options.queryHash, observer];
          }));
          var newResult = newObservers.map(function (observer) {
            return observer.getCurrentResult();
          });
          var hasIndexChange = newObservers.some(function (observer, index) {
            return observer !== prevObservers[index];
          });
          if (prevObservers.length === newObservers.length && !hasIndexChange) {
            return;
          }
          _this3.observers = newObservers;
          _this3.observersMap = newObserversMap;
          _this3.result = newResult;
          if (!_this3.hasListeners()) {
            return;
          }
          difference(prevObservers, newObservers).forEach(function (observer) {
            observer.destroy();
          });
          difference(newObservers, prevObservers).forEach(function (observer) {
            observer.subscribe(function (result) {
              _this3.onUpdate(observer, result);
            });
          });
          _this3.notify();
        });
      }
    }, {
      key: "getCurrentResult",
      value: function getCurrentResult() {
        return this.result;
      }
    }, {
      key: "getQueries",
      value: function getQueries() {
        return this.observers.map(function (observer) {
          return observer.getCurrentQuery();
        });
      }
    }, {
      key: "getObservers",
      value: function getObservers() {
        return this.observers;
      }
    }, {
      key: "getOptimisticResult",
      value: function getOptimisticResult(queries) {
        return this.findMatchingObservers(queries).map(function (match) {
          return match.observer.getOptimisticResult(match.defaultedQueryOptions);
        });
      }
    }, {
      key: "findMatchingObservers",
      value: function findMatchingObservers(queries) {
        var _this4 = this;
        var prevObservers = this.observers;
        var defaultedQueryOptions = queries.map(function (options) {
          return _this4.client.defaultQueryOptions(options);
        });
        var matchingObservers = defaultedQueryOptions.flatMap(function (defaultedOptions) {
          var match = prevObservers.find(function (observer) {
            return observer.options.queryHash === defaultedOptions.queryHash;
          });
          if (match != null) {
            return [{
              defaultedQueryOptions: defaultedOptions,
              observer: match
            }];
          }
          return [];
        });
        var matchedQueryHashes = matchingObservers.map(function (match) {
          return match.defaultedQueryOptions.queryHash;
        });
        var unmatchedQueries = defaultedQueryOptions.filter(function (defaultedOptions) {
          return !matchedQueryHashes.includes(defaultedOptions.queryHash);
        });
        var unmatchedObservers = prevObservers.filter(function (prevObserver) {
          return !matchingObservers.some(function (match) {
            return match.observer === prevObserver;
          });
        });
        var getObserver = function getObserver(options) {
          var defaultedOptions = _this4.client.defaultQueryOptions(options);
          var currentObserver = _this4.observersMap[defaultedOptions.queryHash];
          return currentObserver != null ? currentObserver : new QueryObserver(_this4.client, defaultedOptions);
        };
        var newOrReusedObservers = unmatchedQueries.map(function (options, index) {
          if (options.keepPreviousData) {
            // return previous data from one of the observers that no longer match
            var previouslyUsedObserver = unmatchedObservers[index];
            if (previouslyUsedObserver !== undefined) {
              return {
                defaultedQueryOptions: options,
                observer: previouslyUsedObserver
              };
            }
          }
          return {
            defaultedQueryOptions: options,
            observer: getObserver(options)
          };
        });
        var sortMatchesByOrderOfQueries = function sortMatchesByOrderOfQueries(a, b) {
          return defaultedQueryOptions.indexOf(a.defaultedQueryOptions) - defaultedQueryOptions.indexOf(b.defaultedQueryOptions);
        };
        return matchingObservers.concat(newOrReusedObservers).sort(sortMatchesByOrderOfQueries);
      }
    }, {
      key: "onUpdate",
      value: function onUpdate(observer, result) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
          this.result = replaceAt(this.result, index, result);
          this.notify();
        }
      }
    }, {
      key: "notify",
      value: function notify() {
        var _this5 = this;
        notifyManager.batch(function () {
          _this5.listeners.forEach(function (listener) {
            listener(_this5.result);
          });
        });
      }
    }]);
    return QueriesObserver;
  }(Subscribable);

  var _excluded = ["pageParam"],
    _excluded2 = ["pageParam"];
  var InfiniteQueryObserver = /*#__PURE__*/function (_QueryObserver) {
    _inherits(InfiniteQueryObserver, _QueryObserver);
    var _super = _createSuper(InfiniteQueryObserver);
    // Type override
    // Type override
    // Type override
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    function InfiniteQueryObserver(client, options) {
      _classCallCheck(this, InfiniteQueryObserver);
      return _super.call(this, client, options);
    }
    _createClass(InfiniteQueryObserver, [{
      key: "bindMethods",
      value: function bindMethods() {
        _get(_getPrototypeOf(InfiniteQueryObserver.prototype), "bindMethods", this).call(this);
        this.fetchNextPage = this.fetchNextPage.bind(this);
        this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
      }
    }, {
      key: "setOptions",
      value: function setOptions(options, notifyOptions) {
        _get(_getPrototypeOf(InfiniteQueryObserver.prototype), "setOptions", this).call(this, _objectSpread2(_objectSpread2({}, options), {}, {
          behavior: infiniteQueryBehavior()
        }), notifyOptions);
      }
    }, {
      key: "getOptimisticResult",
      value: function getOptimisticResult(options) {
        options.behavior = infiniteQueryBehavior();
        return _get(_getPrototypeOf(InfiniteQueryObserver.prototype), "getOptimisticResult", this).call(this, options);
      }
    }, {
      key: "fetchNextPage",
      value: function fetchNextPage() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          pageParam = _ref.pageParam,
          options = _objectWithoutProperties(_ref, _excluded);
        return this.fetch(_objectSpread2(_objectSpread2({}, options), {}, {
          meta: {
            fetchMore: {
              direction: 'forward',
              pageParam: pageParam
            }
          }
        }));
      }
    }, {
      key: "fetchPreviousPage",
      value: function fetchPreviousPage() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          pageParam = _ref2.pageParam,
          options = _objectWithoutProperties(_ref2, _excluded2);
        return this.fetch(_objectSpread2(_objectSpread2({}, options), {}, {
          meta: {
            fetchMore: {
              direction: 'backward',
              pageParam: pageParam
            }
          }
        }));
      }
    }, {
      key: "createResult",
      value: function createResult(query, options) {
        var _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet, _state$data, _state$data2;
        var state = query.state;
        var result = _get(_getPrototypeOf(InfiniteQueryObserver.prototype), "createResult", this).call(this, query, options);
        var isFetching = result.isFetching,
          isRefetching = result.isRefetching;
        var isFetchingNextPage = isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward';
        var isFetchingPreviousPage = isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward';
        return _objectSpread2(_objectSpread2({}, result), {}, {
          fetchNextPage: this.fetchNextPage,
          fetchPreviousPage: this.fetchPreviousPage,
          hasNextPage: hasNextPage(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
          hasPreviousPage: hasPreviousPage(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
          isFetchingNextPage: isFetchingNextPage,
          isFetchingPreviousPage: isFetchingPreviousPage,
          isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
        });
      }
    }]);
    return InfiniteQueryObserver;
  }(QueryObserver);

  // CLASS
  var MutationObserver = /*#__PURE__*/function (_Subscribable) {
    _inherits(MutationObserver, _Subscribable);
    var _super = _createSuper(MutationObserver);
    function MutationObserver(client, options) {
      var _this;
      _classCallCheck(this, MutationObserver);
      _this = _super.call(this);
      _this.client = client;
      _this.setOptions(options);
      _this.bindMethods();
      _this.updateResult();
      return _this;
    }
    _createClass(MutationObserver, [{
      key: "bindMethods",
      value: function bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
      }
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        var prevOptions = this.options;
        this.options = this.client.defaultMutationOptions(options);
        if (!shallowEqualObjects(prevOptions, this.options)) {
          this.client.getMutationCache().notify({
            type: 'observerOptionsUpdated',
            mutation: this.currentMutation,
            observer: this
          });
        }
      }
    }, {
      key: "onUnsubscribe",
      value: function onUnsubscribe() {
        if (!this.listeners.length) {
          var _this$currentMutation;
          (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
        }
      }
    }, {
      key: "onMutationUpdate",
      value: function onMutationUpdate(action) {
        this.updateResult(); // Determine which callbacks to trigger

        var notifyOptions = {
          listeners: true
        };
        if (action.type === 'success') {
          notifyOptions.onSuccess = true;
        } else if (action.type === 'error') {
          notifyOptions.onError = true;
        }
        this.notify(notifyOptions);
      }
    }, {
      key: "getCurrentResult",
      value: function getCurrentResult() {
        return this.currentResult;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.currentMutation = undefined;
        this.updateResult();
        this.notify({
          listeners: true
        });
      }
    }, {
      key: "mutate",
      value: function mutate(variables, options) {
        this.mutateOptions = options;
        if (this.currentMutation) {
          this.currentMutation.removeObserver(this);
        }
        this.currentMutation = this.client.getMutationCache().build(this.client, _objectSpread2(_objectSpread2({}, this.options), {}, {
          variables: typeof variables !== 'undefined' ? variables : this.options.variables
        }));
        this.currentMutation.addObserver(this);
        return this.currentMutation.execute();
      }
    }, {
      key: "updateResult",
      value: function updateResult() {
        var state = this.currentMutation ? this.currentMutation.state : getDefaultState();
        var result = _objectSpread2(_objectSpread2({}, state), {}, {
          isLoading: state.status === 'loading',
          isSuccess: state.status === 'success',
          isError: state.status === 'error',
          isIdle: state.status === 'idle',
          mutate: this.mutate,
          reset: this.reset
        });
        this.currentResult = result;
      }
    }, {
      key: "notify",
      value: function notify(options) {
        var _this2 = this;
        notifyManager.batch(function () {
          // First trigger the mutate callbacks
          if (_this2.mutateOptions) {
            if (options.onSuccess) {
              var _this$mutateOptions$o, _this$mutateOptions, _this$mutateOptions$o2, _this$mutateOptions2;
              (_this$mutateOptions$o = (_this$mutateOptions = _this2.mutateOptions).onSuccess) == null ? void 0 : _this$mutateOptions$o.call(_this$mutateOptions, _this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
              (_this$mutateOptions$o2 = (_this$mutateOptions2 = _this2.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o2.call(_this$mutateOptions2, _this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
            } else if (options.onError) {
              var _this$mutateOptions$o3, _this$mutateOptions3, _this$mutateOptions$o4, _this$mutateOptions4;
              (_this$mutateOptions$o3 = (_this$mutateOptions3 = _this2.mutateOptions).onError) == null ? void 0 : _this$mutateOptions$o3.call(_this$mutateOptions3, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
              (_this$mutateOptions$o4 = (_this$mutateOptions4 = _this2.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o4.call(_this$mutateOptions4, undefined, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
            }
          } // Then trigger the listeners

          if (options.listeners) {
            _this2.listeners.forEach(function (listener) {
              listener(_this2.currentResult);
            });
          }
        });
      }
    }]);
    return MutationObserver;
  }(Subscribable);

  // TYPES
  // FUNCTIONS
  function dehydrateMutation(mutation) {
    return {
      mutationKey: mutation.options.mutationKey,
      state: mutation.state
    };
  } // Most config is not dehydrated but instead meant to configure again when
  // consuming the de/rehydrated data, typically with useQuery on the client.
  // Sometimes it might make sense to prefetch data on the server and include
  // in the html-payload, but not consume it on the initial render.

  function dehydrateQuery(query) {
    return {
      state: query.state,
      queryKey: query.queryKey,
      queryHash: query.queryHash
    };
  }
  function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
  }
  function defaultShouldDehydrateQuery(query) {
    return query.state.status === 'success';
  }
  function dehydrate(client) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mutations = [];
    var queries = [];
    if (options.dehydrateMutations !== false) {
      var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
      client.getMutationCache().getAll().forEach(function (mutation) {
        if (shouldDehydrateMutation(mutation)) {
          mutations.push(dehydrateMutation(mutation));
        }
      });
    }
    if (options.dehydrateQueries !== false) {
      var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
      client.getQueryCache().getAll().forEach(function (query) {
        if (shouldDehydrateQuery(query)) {
          queries.push(dehydrateQuery(query));
        }
      });
    }
    return {
      mutations: mutations,
      queries: queries
    };
  }
  function hydrate(client, dehydratedState, options) {
    if (_typeof(dehydratedState) !== 'object' || dehydratedState === null) {
      return;
    }
    var mutationCache = client.getMutationCache();
    var queryCache = client.getQueryCache(); // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

    var mutations = dehydratedState.mutations || []; // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

    var queries = dehydratedState.queries || [];
    mutations.forEach(function (dehydratedMutation) {
      var _options$defaultOptio;
      mutationCache.build(client, _objectSpread2(_objectSpread2({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations), {}, {
        mutationKey: dehydratedMutation.mutationKey
      }), dehydratedMutation.state);
    });
    queries.forEach(function (dehydratedQuery) {
      var _options$defaultOptio2;
      var query = queryCache.get(dehydratedQuery.queryHash); // Do not hydrate if an existing query exists with newer data

      if (query) {
        if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
          query.setState(dehydratedQuery.state);
        }
        return;
      } // Restore query

      queryCache.build(client, _objectSpread2(_objectSpread2({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries), {}, {
        queryKey: dehydratedQuery.queryKey,
        queryHash: dehydratedQuery.queryHash
      }), dehydratedQuery.state);
    });
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var shim = {exports: {}};

  var useSyncExternalStoreShim_development = {};

  /**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    (function() {

  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
      'function'
  ) {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  }
            var React = React__default["default"];

  var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

  function error(format) {
    {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }
  }

  function printWarning(level, format, args) {
    // When changing this logic, you might want to also
    // update consoleWithStackDev.www.js as well.
    {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      } // eslint-disable-next-line react-internal/safe-string-coercion


      var argsWithFormat = args.map(function (item) {
        return String(item);
      }); // Careful: RN currently depends on this prefix

      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      // eslint-disable-next-line react-internal/no-production-logging

      Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
  }

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
    ;
  }

  var objectIs = typeof Object.is === 'function' ? Object.is : is;

  // dispatch for CommonJS interop named imports.

  var useState = React.useState,
      useEffect = React.useEffect,
      useLayoutEffect = React.useLayoutEffect,
      useDebugValue = React.useDebugValue;
  var didWarnOld18Alpha = false;
  var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
  // because of a very particular set of implementation details and assumptions
  // -- change any one of them and it will break. The most important assumption
  // is that updates are always synchronous, because concurrent rendering is
  // only available in versions of React that also have a built-in
  // useSyncExternalStore API. And we only use this shim when the built-in API
  // does not exist.
  //
  // Do not assume that the clever hacks used by this hook also work in general.
  // The point of this shim is to replace the need for hacks by other libraries.

  function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  getServerSnapshot) {
    {
      if (!didWarnOld18Alpha) {
        if (React.startTransition !== undefined) {
          didWarnOld18Alpha = true;

          error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
        }
      }
    } // Read the current snapshot from the store on every render. Again, this
    // breaks the rules of React, and only works here because of specific
    // implementation details, most importantly that updates are
    // always synchronous.


    var value = getSnapshot();

    {
      if (!didWarnUncachedGetSnapshot) {
        var cachedValue = getSnapshot();

        if (!objectIs(value, cachedValue)) {
          error('The result of getSnapshot should be cached to avoid an infinite loop');

          didWarnUncachedGetSnapshot = true;
        }
      }
    } // Because updates are synchronous, we don't queue them. Instead we force a
    // re-render whenever the subscribed state changes by updating an some
    // arbitrary useState hook. Then, during render, we call getSnapshot to read
    // the current value.
    //
    // Because we don't actually use the state returned by the useState hook, we
    // can save a bit of memory by storing other stuff in that slot.
    //
    // To implement the early bailout, we need to track some things on a mutable
    // object. Usually, we would put that in a useRef hook, but we can stash it in
    // our useState hook instead.
    //
    // To force a re-render, we call forceUpdate({inst}). That works because the
    // new object always fails an equality check.


    var _useState = useState({
      inst: {
        value: value,
        getSnapshot: getSnapshot
      }
    }),
        inst = _useState[0].inst,
        forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
    // in the layout phase so we can access it during the tearing check that
    // happens on subscribe.


    useLayoutEffect(function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
      // commit phase if there was an interleaved mutation. In concurrent mode
      // this can happen all the time, but even in synchronous mode, an earlier
      // effect may have mutated the store.

      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }, [subscribe, value, getSnapshot]);
    useEffect(function () {
      // Check for changes right before subscribing. Subsequent changes will be
      // detected in the subscription handler.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }

      var handleStoreChange = function () {
        // TODO: Because there is no cross-renderer API for batching updates, it's
        // up to the consumer of this library to wrap their subscription event
        // with unstable_batchedUpdates. Should we try to detect when this isn't
        // the case and print a warning in development?
        // The store changed. Check if the snapshot changed since the last time we
        // read from the store.
        if (checkIfSnapshotChanged(inst)) {
          // Force a re-render.
          forceUpdate({
            inst: inst
          });
        }
      }; // Subscribe to the store and return a clean-up function.


      return subscribe(handleStoreChange);
    }, [subscribe]);
    useDebugValue(value);
    return value;
  }

  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    var prevValue = inst.value;

    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(prevValue, nextValue);
    } catch (error) {
      return true;
    }
  }

  function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
    // Note: The shim does not use getServerSnapshot, because pre-18 versions of
    // React do not expose a way to check if we're hydrating. So users of the shim
    // will need to track that themselves and return the correct value
    // from `getSnapshot`.
    return getSnapshot();
  }

  var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

  var isServerEnvironment = !canUseDOM;

  var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
  var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

  useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
      'function'
  ) {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }
          
    })();
  }

  (function (module) {

  	{
  	  module.exports = useSyncExternalStoreShim_development;
  	}
  } (shim));

  // Temporary workaround due to an issue with react-native uSES - https://github.com/TanStack/query/pull/3601
  var useSyncExternalStore = shim.exports.useSyncExternalStore;

  var defaultContext = /*#__PURE__*/React__namespace.createContext(undefined);
  var QueryClientSharingContext = /*#__PURE__*/React__namespace.createContext(false); // If we are given a context, we will use it.
  // Otherwise, if contextSharing is on, we share the first and at least one
  // instance of the context across the window
  // to ensure that if React Query is used across
  // different bundles or microfrontends they will
  // all use the same **instance** of context, regardless
  // of module scoping.

  function getQueryClientContext(context, contextSharing) {
    if (context) {
      return context;
    }
    if (contextSharing && typeof window !== 'undefined') {
      if (!window.ReactQueryClientContext) {
        window.ReactQueryClientContext = defaultContext;
      }
      return window.ReactQueryClientContext;
    }
    return defaultContext;
  }
  var useQueryClient = function useQueryClient() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context;
    var queryClient = React__namespace.useContext(getQueryClientContext(context, React__namespace.useContext(QueryClientSharingContext)));
    if (!queryClient) {
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    }
    return queryClient;
  };
  var QueryClientProvider = function QueryClientProvider(_ref2) {
    var client = _ref2.client,
      children = _ref2.children,
      context = _ref2.context,
      _ref2$contextSharing = _ref2.contextSharing,
      contextSharing = _ref2$contextSharing === void 0 ? false : _ref2$contextSharing;
    React__namespace.useEffect(function () {
      client.mount();
      return function () {
        client.unmount();
      };
    }, [client]);
    if (contextSharing) {
      client.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
    }
    var Context = getQueryClientContext(context, contextSharing);
    return /*#__PURE__*/React__namespace.createElement(QueryClientSharingContext.Provider, {
      value: !context && contextSharing
    }, /*#__PURE__*/React__namespace.createElement(Context.Provider, {
      value: client
    }, children));
  };

  var IsRestoringContext = /*#__PURE__*/React__namespace.createContext(false);
  var useIsRestoring = function useIsRestoring() {
    return React__namespace.useContext(IsRestoringContext);
  };
  IsRestoringContext.Provider;

  function createValue() {
    var _isReset = false;
    return {
      clearReset: function clearReset() {
        _isReset = false;
      },
      reset: function reset() {
        _isReset = true;
      },
      isReset: function isReset() {
        return _isReset;
      }
    };
  }
  var QueryErrorResetBoundaryContext = /*#__PURE__*/React__namespace.createContext(createValue()); // HOOK

  var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
    return React__namespace.useContext(QueryErrorResetBoundaryContext);
  }; // COMPONENT

  function shouldThrowError(_useErrorBoundary, params) {
    // Allow useErrorBoundary function to override throwing behavior on a per-error basis
    if (typeof _useErrorBoundary === 'function') {
      return _useErrorBoundary.apply(void 0, _toConsumableArray(params));
    }
    return !!_useErrorBoundary;
  }

  var ensurePreventErrorBoundaryRetry = function ensurePreventErrorBoundaryRetry(options, errorResetBoundary) {
    if (options.suspense || options.useErrorBoundary) {
      // Prevent retrying failed query if the error boundary has not been reset yet
      if (!errorResetBoundary.isReset()) {
        options.retryOnMount = false;
      }
    }
  };
  var useClearResetErrorBoundary = function useClearResetErrorBoundary(errorResetBoundary) {
    React__namespace.useEffect(function () {
      errorResetBoundary.clearReset();
    }, [errorResetBoundary]);
  };
  var getHasError = function getHasError(_ref) {
    var result = _ref.result,
      errorResetBoundary = _ref.errorResetBoundary,
      useErrorBoundary = _ref.useErrorBoundary,
      query = _ref.query;
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(useErrorBoundary, [result.error, query]);
  };

  var ensureStaleTime = function ensureStaleTime(defaultedOptions) {
    if (defaultedOptions.suspense) {
      // Always set stale time when using suspense to prevent
      // fetching again when directly mounting after suspending
      if (typeof defaultedOptions.staleTime !== 'number') {
        defaultedOptions.staleTime = 1000;
      }
    }
  };
  var willFetch = function willFetch(result, isRestoring) {
    return result.isLoading && result.isFetching && !isRestoring;
  };
  var shouldSuspend = function shouldSuspend(defaultedOptions, result, isRestoring) {
    return (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
  };
  var fetchOptimistic = function fetchOptimistic(defaultedOptions, observer, errorResetBoundary) {
    return observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    })["catch"](function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  };

  // - `context` is omitted as it is passed as a root-level option to `useQueries` instead.

  function useQueries(_ref) {
    var queries = _ref.queries,
      context = _ref.context;
    var queryClient = useQueryClient({
      context: context
    });
    var isRestoring = useIsRestoring();
    var defaultedQueries = React__namespace.useMemo(function () {
      return queries.map(function (options) {
        var defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

        defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic';
        return defaultedOptions;
      });
    }, [queries, queryClient, isRestoring]);
    var _React$useState = React__namespace.useState(function () {
        return new QueriesObserver(queryClient, defaultedQueries);
      }),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      observer = _React$useState2[0];
    var optimisticResult = observer.getOptimisticResult(defaultedQueries);
    useSyncExternalStore(React__namespace.useCallback(function (onStoreChange) {
      return isRestoring ? function () {
        return undefined;
      } : observer.subscribe(notifyManager.batchCalls(onStoreChange));
    }, [observer, isRestoring]), function () {
      return observer.getCurrentResult();
    }, function () {
      return observer.getCurrentResult();
    });
    React__namespace.useEffect(function () {
      // Do not notify on updates because of changes in the options because
      // these changes should already be reflected in the optimistic result.
      observer.setQueries(defaultedQueries, {
        listeners: false
      });
    }, [defaultedQueries, observer]);
    var errorResetBoundary = useQueryErrorResetBoundary();
    defaultedQueries.forEach(function (query) {
      ensurePreventErrorBoundaryRetry(query, errorResetBoundary);
      ensureStaleTime(query);
    });
    useClearResetErrorBoundary(errorResetBoundary);
    var shouldAtLeastOneSuspend = optimisticResult.some(function (result, index) {
      return shouldSuspend(defaultedQueries[index], result, isRestoring);
    });
    var suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap(function (result, index) {
      var options = defaultedQueries[index];
      var queryObserver = observer.getObservers()[index];
      if (options && queryObserver) {
        if (shouldSuspend(options, result, isRestoring)) {
          return fetchOptimistic(options, queryObserver, errorResetBoundary);
        } else if (willFetch(result, isRestoring)) {
          void fetchOptimistic(options, queryObserver, errorResetBoundary);
        }
      }
      return [];
    }) : [];
    if (suspensePromises.length > 0) {
      throw Promise.all(suspensePromises);
    }
    var firstSingleResultWhichShouldThrow = optimisticResult.find(function (result, index) {
      var _defaultedQueries$ind, _defaultedQueries$ind2;
      return getHasError({
        result: result,
        errorResetBoundary: errorResetBoundary,
        useErrorBoundary: (_defaultedQueries$ind = (_defaultedQueries$ind2 = defaultedQueries[index]) == null ? void 0 : _defaultedQueries$ind2.useErrorBoundary) != null ? _defaultedQueries$ind : false,
        query: observer.getQueries()[index]
      });
    });
    if (firstSingleResultWhichShouldThrow != null && firstSingleResultWhichShouldThrow.error) {
      throw firstSingleResultWhichShouldThrow.error;
    }
    return optimisticResult;
  }

  function useBaseQuery(options, Observer) {
    var queryClient = useQueryClient({
      context: options.context
    });
    var isRestoring = useIsRestoring();
    var errorResetBoundary = useQueryErrorResetBoundary();
    var defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

    defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic'; // Include callbacks in batch renders

    if (defaultedOptions.onError) {
      defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
    }
    if (defaultedOptions.onSuccess) {
      defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
    }
    if (defaultedOptions.onSettled) {
      defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
    }
    ensureStaleTime(defaultedOptions);
    ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
    useClearResetErrorBoundary(errorResetBoundary);
    var _React$useState = React__namespace.useState(function () {
        return new Observer(queryClient, defaultedOptions);
      }),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      observer = _React$useState2[0];
    var result = observer.getOptimisticResult(defaultedOptions);
    useSyncExternalStore(React__namespace.useCallback(function (onStoreChange) {
      return isRestoring ? function () {
        return undefined;
      } : observer.subscribe(notifyManager.batchCalls(onStoreChange));
    }, [observer, isRestoring]), function () {
      return observer.getCurrentResult();
    }, function () {
      return observer.getCurrentResult();
    });
    React__namespace.useEffect(function () {
      // Do not notify on updates because of changes in the options because
      // these changes should already be reflected in the optimistic result.
      observer.setOptions(defaultedOptions, {
        listeners: false
      });
    }, [defaultedOptions, observer]); // Handle suspense

    if (shouldSuspend(defaultedOptions, result, isRestoring)) {
      throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
    } // Handle error boundary

    if (getHasError({
      result: result,
      errorResetBoundary: errorResetBoundary,
      useErrorBoundary: defaultedOptions.useErrorBoundary,
      query: observer.getCurrentQuery()
    })) {
      throw result.error;
    } // Handle result property usage tracking

    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
  }

  function useQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    return useBaseQuery(parsedOptions, QueryObserver);
  }

  function useHydrate(state) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var queryClient = useQueryClient({
      context: options.context
    });
    var optionsRef = React__namespace.useRef(options);
    optionsRef.current = options; // Running hydrate again with the same queries is safe,
    // it wont overwrite or initialize existing queries,
    // relying on useMemo here is only a performance optimization.
    // hydrate can and should be run *during* render here for SSR to work properly

    React__namespace.useMemo(function () {
      if (state) {
        hydrate(queryClient, state, optionsRef.current);
      }
    }, [queryClient, state]);
  }
  var Hydrate = function Hydrate(_ref) {
    var children = _ref.children,
      options = _ref.options,
      state = _ref.state;
    useHydrate(state, options);
    return children;
  };

  function useMutation(arg1, arg2, arg3) {
    var options = parseMutationArgs(arg1, arg2, arg3);
    var queryClient = useQueryClient({
      context: options.context
    });
    var _React$useState = React__namespace.useState(function () {
        return new MutationObserver(queryClient, options);
      }),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      observer = _React$useState2[0];
    React__namespace.useEffect(function () {
      observer.setOptions(options);
    }, [observer, options]);
    var result = useSyncExternalStore(React__namespace.useCallback(function (onStoreChange) {
      return observer.subscribe(notifyManager.batchCalls(onStoreChange));
    }, [observer]), function () {
      return observer.getCurrentResult();
    }, function () {
      return observer.getCurrentResult();
    });
    var mutate = React__namespace.useCallback(function (variables, mutateOptions) {
      observer.mutate(variables, mutateOptions)["catch"](noop$1);
    }, [observer]);
    if (result.error && shouldThrowError(observer.options.useErrorBoundary, [result.error])) {
      throw result.error;
    }
    return _objectSpread2(_objectSpread2({}, result), {}, {
      mutate: mutate,
      mutateAsync: result.mutate
    });
  } // eslint-disable-next-line @typescript-eslint/no-empty-function

  function noop$1() {}

  function useInfiniteQuery(arg1, arg2, arg3) {
    var options = parseQueryArgs(arg1, arg2, arg3);
    return useBaseQuery(options, InfiniteQueryObserver);
  }

  /**
   * To allow easy interactions with groups of related queries, such as
   * invalidating all queries of a router, we use an array as the path when
   * storing in tanstack query. This function converts from the `.` separated
   * path passed around internally by both the legacy and proxy implementation.
   * https://github.com/trpc/trpc/issues/2611
   **/
  function getArrayQueryKey(queryKey, type) {
    var queryKeyArrayed = Array.isArray(queryKey) ? queryKey : [queryKey];
    var _queryKeyArrayed = _slicedToArray(queryKeyArrayed, 2),
      path = _queryKeyArrayed[0],
      input = _queryKeyArrayed[1];
    var arrayPath = typeof path !== 'string' || path === '' ? [] : path.split('.');
    // Construct a query key that is easy to destructure and flexible for
    // partial selecting etc.
    // https://github.com/trpc/trpc/issues/3128
    if (!input && (!type || type === 'any'))
      // for `utils.invalidate()` to match all queries (including vanilla react-query)
      // we don't want nested array if path is empty, i.e. `[]` instead of `[[]]`
      return arrayPath.length ? [arrayPath] : [];
    return [arrayPath, _objectSpread2(_objectSpread2({}, typeof input !== 'undefined' && {
      input: input
    }), type && type !== 'any' && {
      type: type
    })];
  }

  /**
   * We treat `undefined` as an input the same as omitting an `input`
   * https://github.com/trpc/trpc/issues/2290
   */
  function getQueryKey(path, input) {
    if (path.length) return input === undefined ? [path] : [path, input];
    return [];
  }

  /**
   * Create proxy for decorating procedures
   * @internal
   */
  function createReactProxyDecoration(name, hooks) {
    return createRecursiveProxy(function (opts) {
      var args = opts.args;
      var pathCopy = [name].concat(_toConsumableArray(opts.path));
      // The last arg is for instance `.useMutation` or `.useQuery()`
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      var lastArg = pathCopy.pop();
      // The `path` ends up being something like `post.byId`
      var path = pathCopy.join('.');
      if (lastArg === 'useMutation') {
        return hooks[lastArg].apply(hooks, [path].concat(_toConsumableArray(args)));
      }
      var _args = _toArray(args),
        input = _args[0],
        rest = _args.slice(1);
      var queryKey = getQueryKey(path, input);
      // Expose queryKey helper
      if (lastArg === 'getQueryKey') {
        var _rest$;
        return getArrayQueryKey(queryKey, (_rest$ = rest[0]) !== null && _rest$ !== void 0 ? _rest$ : 'any');
      }
      if (lastArg.startsWith('useSuspense')) {
        var opts1 = rest[0] || {};
        var fn = lastArg === 'useSuspenseQuery' ? 'useQuery' : 'useInfiniteQuery';
        var result = hooks[fn](queryKey, _objectSpread2(_objectSpread2({}, opts1), {}, {
          suspense: true,
          enabled: true
        }));
        return [result.data, result];
      }
      return hooks[lastArg].apply(hooks, [queryKey].concat(_toConsumableArray(rest)));
    });
  }
  var contextProps = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'];
  var TRPCContext = /*#__PURE__*/React.createContext(null);

  /**
   * @internal
   */
  function createReactQueryUtilsProxy(context) {
    return createFlatProxy(function (key) {
      var contextName = key;
      if (contextName === 'client') {
        return createTRPCClientProxy(context.client);
      }
      if (contextProps.includes(contextName)) {
        return context[contextName];
      }
      return createRecursiveProxy(function (_ref) {
        var path = _ref.path,
          args = _ref.args;
        var pathCopy = [key].concat(_toConsumableArray(path));
        var utilName = pathCopy.pop();
        var fullPath = pathCopy.join('.');
        var getOpts = function getOpts(name) {
          if (['setData', 'setInfiniteData'].includes(name)) {
            var _args2 = _toArray(args),
              input = _args2[0],
              _updater = _args2[1],
              _rest = _args2.slice(2);
            var _queryKey = getQueryKey(fullPath, input);
            return {
              queryKey: _queryKey,
              updater: _updater,
              rest: _rest
            };
          }
          var _args3 = _toArray(args),
            input1 = _args3[0],
            rest1 = _args3.slice(1);
          var queryKey1 = getQueryKey(fullPath, input1);
          return {
            queryKey: queryKey1,
            rest: rest1
          };
        };
        var _getOpts = getOpts(utilName),
          queryKey = _getOpts.queryKey,
          rest = _getOpts.rest,
          updater = _getOpts.updater;
        var contextMap = {
          fetch: function fetch() {
            return context.fetchQuery.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          fetchInfinite: function fetchInfinite() {
            return context.fetchInfiniteQuery.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          prefetch: function prefetch() {
            return context.prefetchQuery.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          prefetchInfinite: function prefetchInfinite() {
            return context.prefetchInfiniteQuery.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          invalidate: function invalidate() {
            return context.invalidateQueries.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          reset: function reset() {
            return context.resetQueries.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          refetch: function refetch() {
            return context.refetchQueries.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          cancel: function cancel() {
            return context.cancelQuery.apply(context, [queryKey].concat(_toConsumableArray(rest)));
          },
          setData: function setData() {
            return context.setQueryData.apply(context, [queryKey, updater].concat(_toConsumableArray(rest)));
          },
          setInfiniteData: function setInfiniteData() {
            return context.setInfiniteQueryData.apply(context, [queryKey, updater].concat(_toConsumableArray(rest)));
          },
          getData: function getData() {
            return context.getQueryData(queryKey);
          },
          getInfiniteData: function getInfiniteData() {
            return context.getInfiniteQueryData(queryKey);
          }
        };
        return contextMap[utilName]();
      });
    });
  }

  /**
   * Create proxy for `useQueries` options
   * @internal
   */
  function createUseQueriesProxy(client) {
    return createRecursiveProxy(function (opts) {
      var path = opts.path.join('.');
      var _opts$args = _toArray(opts.args),
        input = _opts$args[0],
        rest = _opts$args.slice(1);
      var queryKey = getQueryKey(path, input);
      var options = _objectSpread2({
        queryKey: queryKey,
        queryFn: function queryFn() {
          return client.query(path, input);
        }
      }, rest[1]);
      return options;
    });
  }
  function getClientArgs(pathAndInput, opts) {
    var _pathAndInput = _slicedToArray(pathAndInput, 2),
      path = _pathAndInput[0],
      input = _pathAndInput[1];
    return [path, input, opts === null || opts === void 0 ? void 0 : opts.trpc];
  }
  /**
   * Makes a stable reference of the `trpc` prop
   */
  function useHookResult(value) {
    var ref = React.useRef(value);
    ref.current.path = value.path;
    return ref.current;
  }
  /**
   * Create strongly typed react hooks
   * @internal
   */
  function createHooksInternal(config) {
    var _config$unstable_over, _config$unstable_over2, _config$unstable_over3, _config$context;
    var mutationSuccessOverride = (_config$unstable_over = config === null || config === void 0 ? void 0 : (_config$unstable_over2 = config.unstable_overrides) === null || _config$unstable_over2 === void 0 ? void 0 : (_config$unstable_over3 = _config$unstable_over2.useMutation) === null || _config$unstable_over3 === void 0 ? void 0 : _config$unstable_over3.onSuccess) !== null && _config$unstable_over !== void 0 ? _config$unstable_over : function (options) {
      return options.originalFn();
    };
    var Context = (_config$context = config === null || config === void 0 ? void 0 : config.context) !== null && _config$context !== void 0 ? _config$context : TRPCContext;
    var ReactQueryContext = config === null || config === void 0 ? void 0 : config.reactQueryContext;
    var createClient = function createClient(opts) {
      return createTRPCClient(opts);
    };
    var TRPCProvider = function TRPCProvider(props) {
      var _props$ssrState;
      var _props$abortOnUnmount = props.abortOnUnmount,
        abortOnUnmount = _props$abortOnUnmount === void 0 ? false : _props$abortOnUnmount,
        client = props.client,
        queryClient = props.queryClient,
        ssrContext = props.ssrContext;
      var _useState = React.useState((_props$ssrState = props.ssrState) !== null && _props$ssrState !== void 0 ? _props$ssrState : false),
        _useState2 = _slicedToArray(_useState, 2),
        ssrState = _useState2[0],
        setSSRState = _useState2[1];
      React.useEffect(function () {
        // Only updating state to `mounted` if we are using SSR.
        // This makes it so we don't have an unnecessary re-render when opting out of SSR.
        setSSRState(function (state) {
          return state ? 'mounted' : false;
        });
      }, []);
      return /*#__PURE__*/React__default["default"].createElement(Context.Provider, {
        value: {
          abortOnUnmount: abortOnUnmount,
          queryClient: queryClient,
          client: client,
          ssrContext: ssrContext || null,
          ssrState: ssrState,
          fetchQuery: React.useCallback(function (pathAndInput, opts) {
            return queryClient.fetchQuery(getArrayQueryKey(pathAndInput, 'query'), function () {
              return client.query.apply(client, _toConsumableArray(getClientArgs(pathAndInput, opts)));
            }, opts);
          }, [client, queryClient]),
          fetchInfiniteQuery: React.useCallback(function (pathAndInput, opts) {
            return queryClient.fetchInfiniteQuery(getArrayQueryKey(pathAndInput, 'infinite'), function (_ref2) {
              var pageParam = _ref2.pageParam;
              var _pathAndInput2 = _slicedToArray(pathAndInput, 2),
                path = _pathAndInput2[0],
                input = _pathAndInput2[1];
              var actualInput = _objectSpread2(_objectSpread2({}, input), {}, {
                cursor: pageParam
              });
              return client.query.apply(client, _toConsumableArray(getClientArgs([path, actualInput], opts)));
            }, opts);
          }, [client, queryClient]),
          prefetchQuery: React.useCallback(function (pathAndInput, opts) {
            return queryClient.prefetchQuery(getArrayQueryKey(pathAndInput, 'query'), function () {
              return client.query.apply(client, _toConsumableArray(getClientArgs(pathAndInput, opts)));
            }, opts);
          }, [client, queryClient]),
          prefetchInfiniteQuery: React.useCallback(function (pathAndInput, opts) {
            return queryClient.prefetchInfiniteQuery(getArrayQueryKey(pathAndInput, 'infinite'), function (_ref3) {
              var pageParam = _ref3.pageParam;
              var _pathAndInput3 = _slicedToArray(pathAndInput, 2),
                path = _pathAndInput3[0],
                input = _pathAndInput3[1];
              var actualInput = _objectSpread2(_objectSpread2({}, input), {}, {
                cursor: pageParam
              });
              return client.query.apply(client, _toConsumableArray(getClientArgs([path, actualInput], opts)));
            }, opts);
          }, [client, queryClient]),
          invalidateQueries: React.useCallback(function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.invalidateQueries.apply(queryClient, [getArrayQueryKey(queryKey, 'any')].concat(_toConsumableArray(rest)));
          }, [queryClient]),
          resetQueries: React.useCallback(function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.resetQueries.apply(queryClient, [getArrayQueryKey(queryKey, 'any')].concat(_toConsumableArray(rest)));
          }, [queryClient]),
          refetchQueries: React.useCallback(function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.refetchQueries.apply(queryClient, [getArrayQueryKey(queryKey, 'any')].concat(_toConsumableArray(rest)));
          }, [queryClient]),
          cancelQuery: React.useCallback(function (pathAndInput) {
            return queryClient.cancelQueries(getArrayQueryKey(pathAndInput, 'any'));
          }, [queryClient]),
          setQueryData: React.useCallback(function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.setQueryData.apply(queryClient, [getArrayQueryKey(queryKey, 'query')].concat(_toConsumableArray(rest)));
          }, [queryClient]),
          getQueryData: React.useCallback(function () {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.getQueryData.apply(queryClient, [getArrayQueryKey(queryKey, 'query')].concat(_toConsumableArray(rest)));
          }, [queryClient]),
          setInfiniteQueryData: React.useCallback(function () {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.setQueryData.apply(queryClient, [getArrayQueryKey(queryKey, 'infinite')].concat(_toConsumableArray(rest)));
          }, [queryClient]),
          getInfiniteQueryData: React.useCallback(function () {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }
            var queryKey = args[0],
              rest = args.slice(1);
            return queryClient.getQueryData.apply(queryClient, [getArrayQueryKey(queryKey, 'infinite')].concat(_toConsumableArray(rest)));
          }, [queryClient])
        }
      }, props.children);
    };
    function useContext() {
      return React__default["default"].useContext(Context);
    }
    /**
    * Hack to make sure errors return `status`='error` when doing SSR
    * @link https://github.com/trpc/trpc/pull/1645
    */
    function useSSRQueryOptionsIfNeeded(pathAndInput, type, opts) {
      var _queryClient$getQuery;
      var _useContext = useContext(),
        queryClient = _useContext.queryClient,
        ssrState = _useContext.ssrState;
      return ssrState && ssrState !== 'mounted' && ((_queryClient$getQuery = queryClient.getQueryCache().find(getArrayQueryKey(pathAndInput, type))) === null || _queryClient$getQuery === void 0 ? void 0 : _queryClient$getQuery.state.status) === 'error' ? _objectSpread2({
        retryOnMount: false
      }, opts) : opts;
    }
    function useQuery$1(pathAndInput, opts) {
      var _opts$trpc, _opts$trpc$abortOnUnm, _opts$trpc2;
      var _useContext2 = useContext(),
        abortOnUnmount = _useContext2.abortOnUnmount,
        client = _useContext2.client,
        ssrState = _useContext2.ssrState,
        queryClient = _useContext2.queryClient,
        prefetchQuery = _useContext2.prefetchQuery;
      if (typeof window === 'undefined' && ssrState === 'prepass' && (opts === null || opts === void 0 ? void 0 : (_opts$trpc = opts.trpc) === null || _opts$trpc === void 0 ? void 0 : _opts$trpc.ssr) !== false && (opts === null || opts === void 0 ? void 0 : opts.enabled) !== false && !queryClient.getQueryCache().find(getArrayQueryKey(pathAndInput, 'query'))) {
        void prefetchQuery(pathAndInput, opts);
      }
      var ssrOpts = useSSRQueryOptionsIfNeeded(pathAndInput, 'query', opts);
      // request option should take priority over global
      var shouldAbortOnUnmount = (_opts$trpc$abortOnUnm = opts === null || opts === void 0 ? void 0 : (_opts$trpc2 = opts.trpc) === null || _opts$trpc2 === void 0 ? void 0 : _opts$trpc2.abortOnUnmount) !== null && _opts$trpc$abortOnUnm !== void 0 ? _opts$trpc$abortOnUnm : abortOnUnmount;
      var hook = useQuery(getArrayQueryKey(pathAndInput, 'query'), function (queryFunctionContext) {
        var actualOpts = _objectSpread2(_objectSpread2({}, ssrOpts), {}, {
          trpc: _objectSpread2(_objectSpread2({}, ssrOpts === null || ssrOpts === void 0 ? void 0 : ssrOpts.trpc), shouldAbortOnUnmount ? {
            signal: queryFunctionContext.signal
          } : {})
        });
        return client.query.apply(client, _toConsumableArray(getClientArgs(pathAndInput, actualOpts)));
      }, _objectSpread2({
        context: ReactQueryContext
      }, ssrOpts));
      hook.trpc = useHookResult({
        path: pathAndInput[0]
      });
      return hook;
    }
    function useMutation$1(path, opts) {
      var _useContext3 = useContext(),
        client = _useContext3.client;
      var queryClient = useQueryClient({
        context: ReactQueryContext
      });
      var hook = useMutation(function (input) {
        var actualPath = Array.isArray(path) ? path[0] : path;
        return client.mutation.apply(client, _toConsumableArray(getClientArgs([actualPath, input], opts)));
      }, _objectSpread2(_objectSpread2({
        context: ReactQueryContext
      }, opts), {}, {
        onSuccess: function onSuccess() {
          var _opts$meta;
          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }
          var originalFn = function originalFn() {
            var _opts$onSuccess;
            return opts === null || opts === void 0 ? void 0 : (_opts$onSuccess = opts.onSuccess) === null || _opts$onSuccess === void 0 ? void 0 : _opts$onSuccess.call.apply(_opts$onSuccess, [opts].concat(args));
          };
          return mutationSuccessOverride({
            originalFn: originalFn,
            queryClient: queryClient,
            meta: (_opts$meta = opts === null || opts === void 0 ? void 0 : opts.meta) !== null && _opts$meta !== void 0 ? _opts$meta : {}
          });
        }
      }));
      hook.trpc = useHookResult({
        path: Array.isArray(path) ? path[0] : path
      });
      return hook;
    }
    /* istanbul ignore next */ /**
                               * ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
                               *  **Experimental.** API might change without major version bump
                               * ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠
                               */
    function useSubscription(pathAndInput, opts) {
      var _opts$enabled;
      var enabled = (_opts$enabled = opts === null || opts === void 0 ? void 0 : opts.enabled) !== null && _opts$enabled !== void 0 ? _opts$enabled : true;
      var queryKey = hashQueryKey(pathAndInput);
      var _useContext4 = useContext(),
        client = _useContext4.client;
      return React.useEffect(function () {
        if (!enabled) {
          return;
        }
        var _pathAndInput4 = _slicedToArray(pathAndInput, 2),
          path = _pathAndInput4[0],
          input = _pathAndInput4[1];
        var isStopped = false;
        var subscription = client.subscription(path, input !== null && input !== void 0 ? input : undefined, {
          onStarted: function onStarted() {
            if (!isStopped) {
              var _opts$onStarted;
              (_opts$onStarted = opts.onStarted) === null || _opts$onStarted === void 0 ? void 0 : _opts$onStarted.call(opts);
            }
          },
          onData: function onData(data) {
            if (!isStopped) {
              opts.onData(data);
            }
          },
          onError: function onError(err) {
            if (!isStopped) {
              var _opts$onError;
              (_opts$onError = opts.onError) === null || _opts$onError === void 0 ? void 0 : _opts$onError.call(opts, err);
            }
          }
        });
        return function () {
          isStopped = true;
          subscription.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [queryKey, enabled]);
    }
    function useInfiniteQuery$1(pathAndInput, opts) {
      var _opts$trpc3, _opts$trpc$abortOnUnm2, _opts$trpc4;
      var _pathAndInput5 = _slicedToArray(pathAndInput, 2),
        path = _pathAndInput5[0],
        input = _pathAndInput5[1];
      var _useContext5 = useContext(),
        client = _useContext5.client,
        ssrState = _useContext5.ssrState,
        prefetchInfiniteQuery = _useContext5.prefetchInfiniteQuery,
        queryClient = _useContext5.queryClient,
        abortOnUnmount = _useContext5.abortOnUnmount;
      if (typeof window === 'undefined' && ssrState === 'prepass' && (opts === null || opts === void 0 ? void 0 : (_opts$trpc3 = opts.trpc) === null || _opts$trpc3 === void 0 ? void 0 : _opts$trpc3.ssr) !== false && (opts === null || opts === void 0 ? void 0 : opts.enabled) !== false && !queryClient.getQueryCache().find(getArrayQueryKey(pathAndInput, 'infinite'))) {
        void prefetchInfiniteQuery(pathAndInput, opts);
      }
      var ssrOpts = useSSRQueryOptionsIfNeeded(pathAndInput, 'infinite', opts);
      // request option should take priority over global
      var shouldAbortOnUnmount = (_opts$trpc$abortOnUnm2 = opts === null || opts === void 0 ? void 0 : (_opts$trpc4 = opts.trpc) === null || _opts$trpc4 === void 0 ? void 0 : _opts$trpc4.abortOnUnmount) !== null && _opts$trpc$abortOnUnm2 !== void 0 ? _opts$trpc$abortOnUnm2 : abortOnUnmount;
      var hook = useInfiniteQuery(getArrayQueryKey(pathAndInput, 'infinite'), function (queryFunctionContext) {
        var actualOpts = _objectSpread2(_objectSpread2({}, ssrOpts), {}, {
          trpc: _objectSpread2(_objectSpread2({}, ssrOpts === null || ssrOpts === void 0 ? void 0 : ssrOpts.trpc), shouldAbortOnUnmount ? {
            signal: queryFunctionContext.signal
          } : {})
        });
        var actualInput = _objectSpread2(_objectSpread2({}, input !== null && input !== void 0 ? input : {}), {}, {
          cursor: queryFunctionContext.pageParam
        });
        return client.query.apply(client, _toConsumableArray(getClientArgs([path, actualInput], actualOpts)));
      }, _objectSpread2({
        context: ReactQueryContext
      }, ssrOpts));
      hook.trpc = useHookResult({
        path: path
      });
      return hook;
    }
    var useQueries$1 = function useQueries$1(queriesCallback, context) {
      var _useContext6 = useContext(),
        ssrState = _useContext6.ssrState,
        queryClient = _useContext6.queryClient,
        prefetchQuery = _useContext6.prefetchQuery,
        client = _useContext6.client;
      var proxy = createUseQueriesProxy(client);
      var queries = queriesCallback(proxy);
      if (typeof window === 'undefined' && ssrState === 'prepass') {
        var _iterator = _createForOfIteratorHelper(queries),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _queryOption$trpc;
            var query = _step.value;
            var queryOption = query;
            if (((_queryOption$trpc = queryOption.trpc) === null || _queryOption$trpc === void 0 ? void 0 : _queryOption$trpc.ssr) !== false && !queryClient.getQueryCache().find(getArrayQueryKey(queryOption.queryKey, 'query'))) {
              void prefetchQuery(queryOption.queryKey, queryOption);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return useQueries({
        queries: queries.map(function (query) {
          return _objectSpread2(_objectSpread2({}, query), {}, {
            queryKey: getArrayQueryKey(query.queryKey, 'query')
          });
        }),
        context: context
      });
    };
    var useDehydratedState = function useDehydratedState(client, trpcState) {
      var transformed = React.useMemo(function () {
        if (!trpcState) {
          return trpcState;
        }
        return client.runtime.transformer.deserialize(trpcState);
      }, [trpcState, client]);
      return transformed;
    };
    return {
      Provider: TRPCProvider,
      createClient: createClient,
      useContext: useContext,
      useQuery: useQuery$1,
      useQueries: useQueries$1,
      useMutation: useMutation$1,
      useSubscription: useSubscription,
      useDehydratedState: useDehydratedState,
      useInfiniteQuery: useInfiniteQuery$1
    };
  }

  /**
   * @internal
   */
  function createHooksInternalProxy(trpc) {
    return createFlatProxy(function (key) {
      if (key === 'useContext') {
        return function () {
          var context = trpc.useContext();
          // create a stable reference of the utils context
          return React.useMemo(function () {
            return createReactQueryUtilsProxy(context);
          }, [context]);
        };
      }
      if (trpc.hasOwnProperty(key)) {
        return trpc[key];
      }
      return createReactProxyDecoration(key, trpc);
    });
  }
  function createTRPCReact(opts) {
    var hooks = createHooksInternal(opts);
    var proxy = createHooksInternalProxy(hooks);
    return proxy;
  }

  // interop:
  /**
   * @deprecated use `createTRPCReact` instead
   */
  function createReactQueryHooks(opts) {
    var trpc = createHooksInternal(opts);
    var proxy = createHooksInternalProxy(trpc);
    return _objectSpread2(_objectSpread2({}, trpc), {}, {
      proxy: proxy
    });
  }

  /**
   * @internal
   */
  var getQueryClient = function getQueryClient(config) {
    var _config$queryClient;
    return (_config$queryClient = config.queryClient) !== null && _config$queryClient !== void 0 ? _config$queryClient : new QueryClient(config.queryClientConfig);
  };

  var e = React__default["default"];

  function _interopDefaultLegacy$1(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }

  var r = _interopDefaultLegacy$1(e);

  function _extends() {
    _extends = Object.assign || function(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) {
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            e[n] = t[n];
          }
        }
      }
      return e;
    };
    return _extends.apply(this, arguments);
  }

  var t = 60103;

  var n = 60106;

  var u = 60107;

  var o = 60108;

  var a = 60114;

  var i = 60109;

  var c = 60110;

  var l = 60111;

  var f = 60112;

  var s = 60113;

  var v = 60115;

  var p = 60116;

  if ("function" == typeof Symbol && Symbol.for) {
    var d = Symbol.for;
    t = d("react.element");
    n = d("react.portal");
    u = d("react.fragment");
    o = d("react.strict_mode");
    a = d("react.profiler");
    i = d("react.provider");
    c = d("react.context");
    l = Symbol.for("react.concurrent_mode");
    f = d("react.forward_ref");
    s = d("react.suspense");
    v = d("react.memo");
    p = d("react.lazy");
  }

  var m = t;

  var h = n;

  var y = u;

  var _ = o;

  var S = a;

  var x = i;

  var b = c;

  var g = l;

  var M = f;

  var k = s;

  var w = v;

  var F = p;

  var E = e.Children.toArray;

  var isAbstractElement = function(e) {
    return null !== e && "object" == typeof e;
  };

  var getChildrenArray = function(e) {
    return E(e).filter(isAbstractElement);
  };

  var computeProps = function(e, r) {
    return "object" == typeof r ? _extends({}, r, e) : e;
  };

  var I = new Map;

  var q = {};

  var D = void 0;

  var C = void 0;

  var getCurrentContextMap = function() {
    return _extends({}, q);
  };

  var getCurrentContextStore = function() {
    return new Map(I);
  };

  var flushPrevContextMap = function() {
    var e = D;
    D = void 0;
    return e;
  };

  var flushPrevContextStore = function() {
    var e = C;
    C = void 0;
    return e;
  };

  var restoreContextMap = function(e) {
    if (void 0 !== e) {
      _extends(q, e);
    }
  };

  var restoreContextStore = function(e) {
    if (void 0 !== e) {
      I.set(e[0], e[1]);
    }
  };

  var setCurrentContextMap = function(e) {
    D = void 0;
    q = e;
  };

  var setCurrentContextStore = function(e) {
    C = void 0;
    I = e;
  };

  var readContextValue = function(e) {
    var r = I.get(e);
    if (void 0 !== r) {
      return r;
    }
    return e._currentValue;
  };

  var P = {};

  var maskContext = function(e) {
    var r = e.contextType;
    var t = e.contextTypes;
    if (r) {
      return readContextValue(r);
    } else if (!t) {
      return P;
    }
    var n = {};
    for (var u in t) {
      n[u] = q[u];
    }
    return n;
  };

  var R = null;

  var getCurrentErrorFrame = function() {
    return R;
  };

  var setCurrentErrorFrame = function(e) {
    R = e || null;
  };

  var z = {
    current: {
      uniqueID: 0
    }
  };

  var O = "function" == typeof Object.is ? Object.is : function is(e, r) {
    return e === r && (0 !== e || 1 / e == 1 / r) || e != e && r != r;
  };

  var W = null;

  var setCurrentIdentity = function(e) {
    W = e;
  };

  var getCurrentIdentity = function() {
    if (null === W) {
      throw new Error("[react-ssr-prepass] Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)");
    }
    return W;
  };

  var j = null;

  var H = null;

  var T = !1;

  var U = null;

  var $ = 0;

  var setFirstHook = function(e) {
    j = e;
  };

  function createWorkInProgressHook() {
    if (null === H) {
      if (null === j) {
        return j = H = {
          memoizedState: null,
          queue: null,
          next: null
        };
      } else {
        return H = j;
      }
    } else if (null === H.next) {
      return H = H.next = {
        memoizedState: null,
        queue: null,
        next: null
      };
    } else {
      return H = H.next;
    }
  }

  function basicStateReducer(e, r) {
    return "function" == typeof r ? r(e) : r;
  }

  function useReducer(e, r, t) {
    var n = getCurrentIdentity();
    if (null === (H = createWorkInProgressHook()).queue) {
      var u;
      if (e === basicStateReducer) {
        u = "function" == typeof r ? r() : r;
      } else {
        u = void 0 !== t ? t(r) : r;
      }
      H.memoizedState = u;
    }
    var o = H.queue || (H.queue = {
      last: null,
      dispatch: null
    });
    var a = o.dispatch || (o.dispatch = dispatchAction.bind(null, n, o));
    if (null !== U) {
      var i = U.get(o);
      if (void 0 !== i) {
        U.delete(o);
        var c = H.memoizedState;
        var l = i;
        do {
          c = e(c, l.action);
          l = l.next;
        } while (null !== l);
        H.memoizedState = c;
      }
    }
    return [ H.memoizedState, a ];
  }

  function useMemo(e, r) {
    getCurrentIdentity();
    var t = void 0 === r ? null : r;
    var n = (H = createWorkInProgressHook()).memoizedState;
    if (null !== n && null !== t) {
      if (function areHookInputsEqual(e, r) {
        if (null === r) {
          return !1;
        }
        for (var t = 0; t < r.length && t < e.length; t++) {
          if (!O(e[t], r[t])) {
            return !1;
          }
        }
        return !0;
      }(t, n[1])) {
        return n[0];
      }
    }
    var u = e();
    H.memoizedState = [ u, t ];
    return u;
  }

  function useOpaqueIdentifier() {
    getCurrentIdentity();
    if (!(H = createWorkInProgressHook()).memoizedState) {
      H.memoizedState = "R:" + (z.current.uniqueID++).toString(36);
    }
    return H.memoizedState;
  }

  function dispatchAction(e, r, t) {
    if (e === W) {
      T = !0;
      var n = {
        action: t,
        next: null
      };
      if (null === U) {
        U = new Map;
      }
      var u = U.get(r);
      if (void 0 === u) {
        U.set(r, n);
      } else {
        var o = u;
        while (null !== o.next) {
          o = o.next;
        }
        o.next = n;
      }
    }
  }

  function noop() {}

  function _ref$2(e) {
    e();
  }

  var A = {
    readContext: function readContext(e, r) {
      return readContextValue(e);
    },
    useSyncExternalStore: function useSyncExternalStore(e, r, t) {
      return r();
    },
    useContext: function useContext(e, r) {
      getCurrentIdentity();
      return readContextValue(e);
    },
    useMemo: useMemo,
    useReducer: useReducer,
    useRef: function useRef(e) {
      getCurrentIdentity();
      var r = (H = createWorkInProgressHook()).memoizedState;
      if (null === r) {
        var t = {
          current: e
        };
        H.memoizedState = t;
        return t;
      } else {
        return r;
      }
    },
    useState: function useState(e) {
      return useReducer(basicStateReducer, e);
    },
    useCallback: function useCallback(e, r) {
      return useMemo((function() {
        return e;
      }), r);
    },
    useMutableSource: function useMutableSource(e, r, t) {
      getCurrentIdentity();
      return r(e._source);
    },
    useTransition: function useTransition() {
      return [ _ref$2, !1 ];
    },
    useDeferredValue: function useDeferredValue(e) {
      return e;
    },
    useOpaqueIdentifier: useOpaqueIdentifier,
    useId: useOpaqueIdentifier,
    unstable_useId: useOpaqueIdentifier,
    unstable_useOpaqueIdentifier: useOpaqueIdentifier,
    useLayoutEffect: noop,
    useImperativeHandle: noop,
    useEffect: noop,
    useDebugValue: noop
  };

  var resolve = function(e) {
    var r = e._payload || e;
    if (0 === r._status) {
      return r._result;
    } else if (1 === r._status) {
      return Promise.resolve(r._result);
    } else if (2 === r._status) {
      return Promise.reject(r._result);
    }
    r._status = 0;
    return r._result = (r._ctor || r._result)().then((function(e) {
      r._result = e;
      if ("function" == typeof e) {
        r._status = 1;
      } else if (null !== e && "object" == typeof e && "function" == typeof e.default) {
        r._result = e.default;
        r._status = 1;
      } else {
        r._status = 2;
      }
    })).catch((function(e) {
      r._status = 2;
      r._result = e;
      return Promise.reject(e);
    }));
  };

  var render$3 = function(r, t, n) {
    var u = r._payload || r;
    if (1 === u._status) {
      return e.createElement(u._result, t);
    }
    return null;
  };

  var makeFrame$1 = function(e, r, t) {
    return {
      contextMap: getCurrentContextMap(),
      contextStore: getCurrentContextStore(),
      id: getCurrentIdentity(),
      hook: j,
      kind: "frame.hooks",
      errorFrame: getCurrentErrorFrame(),
      thenable: t,
      props: r,
      type: e
    };
  };

  var render$2 = function(e, r, t) {
    try {
      return function renderWithHooks(e, r, t) {
        H = null;
        var n = e(r, t);
        while ($ < 25 && T) {
          T = !1;
          $ += 1;
          H = null;
          n = e(r, t);
        }
        $ = 0;
        U = null;
        H = null;
        return n;
      }(e, computeProps(r, e.defaultProps), maskContext(e));
    } catch (n) {
      if ("function" != typeof n.then) {
        throw n;
      }
      t.push(makeFrame$1(e, r, n));
      return null;
    }
  };

  function _ref$1() {
    return !1;
  }

  function _ref2() {
    return null;
  }

  var createInstance = function(e, r) {
    var t = {
      _thrown: 0,
      queue: n = [],
      isMounted: _ref$1,
      enqueueForceUpdate: _ref2,
      enqueueReplaceState: function(e, r) {
        if (e._isMounted) {
          n.length = 0;
          n.push(r);
        }
      },
      enqueueSetState: function(e, r) {
        if (e._isMounted) {
          n.push(r);
        }
      }
    };
    var n;
    var u = computeProps(r, e.defaultProps);
    var o = maskContext(e);
    var a = new e(u, o, t);
    a.props = u;
    a.context = o;
    a.updater = t;
    a._isMounted = !0;
    if (void 0 === a.state) {
      a.state = null;
    }
    if ("function" == typeof a.componentDidCatch || "function" == typeof e.getDerivedStateFromError) {
      var i = makeFrame(e, a, null);
      i.errorFrame = i;
      setCurrentErrorFrame(i);
    }
    if ("function" == typeof e.getDerivedStateFromProps) {
      var c = (0, e.getDerivedStateFromProps)(a.props, a.state);
      if (null != c) {
        a.state = _extends({}, a.state, c);
      }
    } else if ("function" == typeof a.componentWillMount) {
      a.componentWillMount();
    } else if ("function" == typeof a.UNSAFE_componentWillMount) {
      a.UNSAFE_componentWillMount();
    }
    return a;
  };

  var makeFrame = function(e, r, t) {
    return {
      contextMap: getCurrentContextMap(),
      contextStore: getCurrentContextStore(),
      errorFrame: getCurrentErrorFrame(),
      thenable: t,
      kind: "frame.class",
      error: null,
      instance: r,
      type: e
    };
  };

  var render$1 = function(e, r, t) {
    !function(e) {
      var r = e.updater.queue;
      if (r.length > 0) {
        var t = _extends({}, e.state);
        for (var n = 0, u = r.length; n < u; n++) {
          var o = r[n];
          var a = "function" == typeof o ? o.call(e, t, e.props, e.context) : o;
          if (null !== a) {
            _extends(t, a);
          }
        }
        e.state = t;
        r.length = 0;
      }
    }(r);
    var n = null;
    try {
      n = r.render();
    } catch (n) {
      if ("function" != typeof n.then) {
        throw n;
      }
      t.push(makeFrame(e, r, n));
      return null;
    }
    if (void 0 !== e.childContextTypes && "function" == typeof r.getChildContext) {
      var u = r.getChildContext();
      if (null !== u && "object" == typeof u) {
        !function(e) {
          D = {};
          for (var r in e) {
            D[r] = q[r];
            q[r] = e[r];
          }
        }(u);
      }
    }
    if ("function" != typeof r.getDerivedStateFromProps && ("function" == typeof r.componentWillMount || "function" == typeof r.UNSAFE_componentWillMount) && "function" == typeof r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (e) {}
    }
    r._isMounted = !1;
    return n;
  };

  var L = r.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;

  var N = "function" == typeof setImmediate;

  var render = function(e, r, t, n, u) {
    return (o = e).prototype && o.prototype.isReactComponent ? function(e, r, t, n, u) {
      setCurrentIdentity(null);
      var o = createInstance(e, r);
      var a = n(u, o);
      if (a) {
        t.push(makeFrame(e, o, a));
        return null;
      }
      return render$1(e, o, t);
    }(e, r, t, n, u) : function(e, r, t, n, u) {
      setFirstHook(null);
      setCurrentIdentity({});
      var o = n(u);
      if (o) {
        t.push(makeFrame$1(e, r, o));
        return null;
      }
      return render$2(e, r, t);
    }(e, r, t, n, u);
    var o;
  };

  var visitElement = function(r, t, n) {
    switch (function(e) {
      switch (e.$$typeof) {
       case h:
        return h;

       case m:
        switch (e.type) {
         case g:
          return g;

         case y:
          return y;

         case S:
          return S;

         case _:
          return _;

         case k:
          return k;

         default:
          switch (e.type && e.type.$$typeof) {
           case F:
            return F;

           case w:
            return w;

           case b:
            return b;

           case x:
            return x;

           case M:
            return M;

           default:
            return m;
          }
        }

       default:
        return;
      }
    }(r)) {
     case k:
     case _:
     case g:
     case S:
     case y:
      return getChildrenArray(r.props.children);

     case x:
      var u = r.props;
      var o = u.children;
      !function(e, r) {
        C = [ e, I.get(e) ];
        I.set(e, r);
      }(r.type._context, u.value);
      return getChildrenArray(o);

     case b:
      var a = r.props.children;
      if ("function" == typeof a) {
        var i = r.type;
        var c = readContextValue("object" == typeof i._context ? i._context : i);
        return getChildrenArray(a(c));
      } else {
        return [];
      }

     case F:
      var l = function(e, r, t) {
        if ((e._payload || e)._status <= 0) {
          t.push({
            kind: "frame.lazy",
            contextMap: getCurrentContextMap(),
            contextStore: getCurrentContextStore(),
            errorFrame: getCurrentErrorFrame(),
            thenable: resolve(e),
            props: r,
            type: e
          });
          return null;
        }
        return render$3(e, r);
      }(r.type, r.props, t);
      return getChildrenArray(l);

     case w:
      var f = e.createElement(r.type.type, r.props);
      return getChildrenArray(f);

     case M:
      var s = r.type;
      var v = s.render;
      var p = computeProps(r.props, s.defaultProps);
      var d = e.createElement(v, p);
      return getChildrenArray(d);

     case m:
      if ("string" == typeof r.type) {
        return getChildrenArray(r.props.children);
      } else {
        var E = render(r.type, r.props, t, n, r);
        return getChildrenArray(E);
      }

     default:
      return [];
    }
  };

  var visitLoop = function(e, r, t, n, u, o) {
    var a = L.current;
    var i = Date.now();
    try {
      L.current = A;
      while (e.length > 0) {
        var c = e[e.length - 1].shift();
        if (void 0 !== c) {
          var l = visitElement(c, u, o);
          e.push(l);
          r.push(flushPrevContextMap());
          t.push(flushPrevContextStore());
          n.push(getCurrentErrorFrame());
        } else {
          e.pop();
          restoreContextMap(r.pop());
          restoreContextStore(t.pop());
          setCurrentErrorFrame(n.pop());
        }
        if (N && Date.now() - i > 5) {
          return !0;
        }
      }
      return !1;
    } catch (e) {
      var f = getCurrentErrorFrame();
      if (!f) {
        throw e;
      }
      f.error = e;
      u.unshift(f);
      return !1;
    } finally {
      L.current = a;
    }
  };

  var makeYieldFrame = function(e, r, t, n) {
    return {
      contextMap: getCurrentContextMap(),
      contextStore: getCurrentContextStore(),
      errorFrame: getCurrentErrorFrame(),
      thenable: null,
      kind: "frame.yield",
      traversalChildren: e,
      traversalMap: r,
      traversalStore: t,
      traversalErrorFrame: n
    };
  };

  var visit = function(e, r, t) {
    var n = [ e ];
    var u = [ flushPrevContextMap() ];
    var o = [ flushPrevContextStore() ];
    var a = [ getCurrentErrorFrame() ];
    if (visitLoop(n, u, o, a, r, t)) {
      r.unshift(makeYieldFrame(n, u, o, a));
    }
  };

  var update = function(e, r, t) {
    if ("frame.yield" === e.kind) {
      setCurrentIdentity(null);
      setCurrentContextMap(e.contextMap);
      setCurrentContextStore(e.contextStore);
      setCurrentErrorFrame(e.errorFrame);
      if (visitLoop(e.traversalChildren, e.traversalMap, e.traversalStore, e.traversalErrorFrame, r, t)) {
        r.unshift(makeYieldFrame(e.traversalChildren, e.traversalMap, e.traversalStore, e.traversalErrorFrame));
      }
    } else {
      var n = L.current;
      var u = null;
      L.current = A;
      try {
        if ("frame.class" === e.kind) {
          u = function(e, r) {
            setCurrentIdentity(null);
            setCurrentContextMap(r.contextMap);
            setCurrentContextStore(r.contextStore);
            setCurrentErrorFrame(r.errorFrame);
            if (r.error) {
              if (++r.instance.updater._thrown >= 25) {
                return null;
              }
              r.instance._isMounted = !0;
              if ("function" == typeof r.instance.componentDidCatch) {
                r.instance.componentDidCatch(r.error);
              }
              if ("function" == typeof r.type.getDerivedStateFromError) {
                r.instance.updater.enqueueSetState(r.instance, r.type.getDerivedStateFromError(r.error));
              }
            }
            return render$1(r.type, r.instance, e);
          }(r, e);
        } else if ("frame.hooks" === e.kind) {
          u = function(e, r) {
            setFirstHook(r.hook);
            setCurrentIdentity(r.id);
            setCurrentContextMap(r.contextMap);
            setCurrentContextStore(r.contextStore);
            setCurrentErrorFrame(r.errorFrame);
            return render$2(r.type, r.props, e);
          }(r, e);
        } else if ("frame.lazy" === e.kind) {
          u = function(e, r) {
            setCurrentIdentity(null);
            setCurrentContextMap(r.contextMap);
            setCurrentContextStore(r.contextStore);
            setCurrentErrorFrame(r.errorFrame);
            return render$3(r.type, r.props);
          }(0, e);
        }
      } catch (e) {
        var o = getCurrentErrorFrame();
        if (!o) {
          throw e;
        }
        o.error = e;
        r.unshift(o);
        u = null;
      } finally {
        L.current = n;
      }
      visit(getChildrenArray(u), r, t);
    }
  };

  function _ref(e, r) {
    setImmediate(e);
  }

  var flushFrames = function(e, r, t) {
    var n = e.shift();
    if (!n) {
      return Promise.resolve();
    }
    if (N && "frame.yield" === n.kind) {
      n.thenable = new Promise(_ref);
    }
    return Promise.resolve(n.thenable).then((function() {
      !function(e) {
        z.current = e;
      }(t);
      update(n, e, r);
      return flushFrames(e, r, t);
    }), (function(t) {
      if (!n.errorFrame) {
        throw t;
      }
      n.errorFrame.error = t;
      update(n.errorFrame, e, r);
    }));
  };

  var defaultVisitor = function() {
    return;
  };

  var reactSsrPrepass = function(e, r) {
    if (!r) {
      r = defaultVisitor;
    }
    var t = [];
    var n = z.current = {
      uniqueID: 0
    };
    setCurrentContextMap({});
    setCurrentContextStore(new Map);
    setCurrentErrorFrame(null);
    try {
      visit(getChildrenArray(e), t, r);
    } catch (e) {
      return Promise.reject(e);
    }
    return flushFrames(t, r, n);
  };

  function transformQueryOrMutationCacheErrors(result) {
    var error = result.state.error;
    if (error instanceof Error && error.name === 'TRPCClientError') {
      var newError = {
        message: error.message,
        data: error.data,
        shape: error.shape
      };
      return _objectSpread2(_objectSpread2({}, result), {}, {
        state: _objectSpread2(_objectSpread2({}, result.state), {}, {
          error: newError
        })
      });
    }
    return result;
  }
  function withTRPC(opts) {
    var getClientConfig = opts.config;
    return function (AppOrPage) {
      var trpc = createReactQueryHooks({
        unstable_overrides: opts.unstable_overrides
      });
      var WithTRPC = function WithTRPC(props) {
        var _prepassProps$abortOn;
        var _useState = React.useState(function () {
            if (props.trpc) {
              return props.trpc;
            }
            var config = getClientConfig({});
            var queryClient = getQueryClient(config);
            var trpcClient = trpc.createClient(config);
            return {
              abortOnUnmount: config.abortOnUnmount,
              queryClient: queryClient,
              trpcClient: trpcClient,
              ssrState: opts.ssr ? 'mounting' : false,
              ssrContext: null
            };
          }),
          _useState2 = _slicedToArray(_useState, 1),
          prepassProps = _useState2[0];
        var queryClient = prepassProps.queryClient,
          trpcClient = prepassProps.trpcClient,
          ssrState = prepassProps.ssrState,
          ssrContext = prepassProps.ssrContext;
        var hydratedState = trpc.useDehydratedState(trpcClient,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props.pageProps.trpcState);
        return /*#__PURE__*/React__default["default"].createElement(trpc.Provider, {
          abortOnUnmount: (_prepassProps$abortOn = prepassProps.abortOnUnmount) !== null && _prepassProps$abortOn !== void 0 ? _prepassProps$abortOn : false,
          client: trpcClient,
          queryClient: queryClient,
          ssrState: ssrState,
          ssrContext: ssrContext
        }, /*#__PURE__*/React__default["default"].createElement(QueryClientProvider, {
          client: queryClient
        }, /*#__PURE__*/React__default["default"].createElement(Hydrate, {
          state: hydratedState
        }, /*#__PURE__*/React__default["default"].createElement(AppOrPage, Object.assign({}, props)))));
      };
      if (AppOrPage.getInitialProps || opts.ssr) {
        WithTRPC.getInitialProps = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(appOrPageCtx) {
            var _opts$responseMeta;
            var AppTree, isApp, ctx, pageProps, _originalProps$pagePr, originalProps, originalPageProps, getAppTreeProps, config, trpcClient, queryClient, trpcProp, prepassProps, dehydratedCache, dehydratedCacheWithErrors, appTreeProps, meta, _i, _Object$entries, _Object$entries$_i, key, value, _ctx$res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  AppTree = appOrPageCtx.AppTree; // Determine if we are wrapping an App component or a Page component.
                  isApp = !!appOrPageCtx.Component;
                  ctx = isApp ? appOrPageCtx.ctx : appOrPageCtx; // Run the wrapped component's getInitialProps function.
                  pageProps = {};
                  if (!AppOrPage.getInitialProps) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 7;
                  return AppOrPage.getInitialProps(appOrPageCtx);
                case 7:
                  originalProps = _context.sent;
                  originalPageProps = isApp ? (_originalProps$pagePr = originalProps.pageProps) !== null && _originalProps$pagePr !== void 0 ? _originalProps$pagePr : {} : originalProps;
                  pageProps = _objectSpread2(_objectSpread2({}, originalPageProps), pageProps);
                case 10:
                  getAppTreeProps = function getAppTreeProps(props) {
                    return isApp ? {
                      pageProps: props
                    } : props;
                  };
                  if (!(typeof window !== 'undefined' || !opts.ssr)) {
                    _context.next = 13;
                    break;
                  }
                  return _context.abrupt("return", getAppTreeProps(pageProps));
                case 13:
                  config = getClientConfig({
                    ctx: ctx
                  });
                  trpcClient = createTRPCClient(config);
                  queryClient = getQueryClient(config);
                  trpcProp = {
                    config: config,
                    trpcClient: trpcClient,
                    queryClient: queryClient,
                    ssrState: 'prepass',
                    ssrContext: ctx
                  };
                  prepassProps = {
                    pageProps: pageProps,
                    trpc: trpcProp
                  }; // Run the prepass step on AppTree. This will run all trpc queries on the server.
                  // multiple prepass ensures that we can do batching on the server
                case 18:
                  _context.next = 21;
                  return reactSsrPrepass( /*#__PURE__*/React.createElement(AppTree, prepassProps));
                case 21:
                  if (queryClient.isFetching()) {
                    _context.next = 23;
                    break;
                  }
                  return _context.abrupt("break", 27);
                case 23:
                  _context.next = 25;
                  return new Promise(function (resolve) {
                    var unsub = queryClient.getQueryCache().subscribe(function (event) {
                      if ((event === null || event === void 0 ? void 0 : event.query.getObserversCount()) === 0) {
                        resolve();
                        unsub();
                      }
                    });
                  });
                case 25:
                  _context.next = 18;
                  break;
                case 27:
                  dehydratedCache = dehydrate(queryClient, {
                    shouldDehydrateQuery: function shouldDehydrateQuery() {
                      // makes sure errors are also dehydrated
                      return true;
                    }
                  }); // since error instances can't be serialized, let's make them into `TRPCClientErrorLike`-objects
                  dehydratedCacheWithErrors = _objectSpread2(_objectSpread2({}, dehydratedCache), {}, {
                    queries: dehydratedCache.queries.map(transformQueryOrMutationCacheErrors),
                    mutations: dehydratedCache.mutations.map(transformQueryOrMutationCacheErrors)
                  }); // dehydrate query client's state and add it to the props
                  pageProps.trpcState = trpcClient.runtime.transformer.serialize(dehydratedCacheWithErrors);
                  appTreeProps = getAppTreeProps(pageProps);
                  meta = ((_opts$responseMeta = opts.responseMeta) === null || _opts$responseMeta === void 0 ? void 0 : _opts$responseMeta.call(opts, {
                    ctx: ctx,
                    clientErrors: [].concat(_toConsumableArray(dehydratedCache.queries), _toConsumableArray(dehydratedCache.mutations)).map(function (v) {
                      return v.state.error;
                    }).flatMap(function (err) {
                      return err instanceof Error && err.name === 'TRPCClientError' ? [err] : [];
                    })
                  })) || {};
                  for (_i = 0, _Object$entries = Object.entries(meta.headers || {}); _i < _Object$entries.length; _i++) {
                    _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                    if (typeof value === 'string') {
                      (_ctx$res = ctx.res) === null || _ctx$res === void 0 ? void 0 : _ctx$res.setHeader(key, value);
                    }
                  }
                  if (meta.status && ctx.res) {
                    ctx.res.statusCode = meta.status;
                  }
                  return _context.abrupt("return", appTreeProps);
                case 35:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }
      var displayName = AppOrPage.displayName || AppOrPage.name || 'Component';
      WithTRPC.displayName = "withTRPC(".concat(displayName, ")");
      return WithTRPC;
    };
  }

  /* istanbul ignore file */ // We're testing this through E2E-testing
  function createTRPCNext(opts) {
    var hooks = createHooksInternal({
      unstable_overrides: opts.unstable_overrides
    });
    // TODO: maybe set TSSRContext to `never` when using `WithTRPCNoSSROptions`
    var _withTRPC = withTRPC(opts);
    return createFlatProxy(function (key) {
      if (key === 'useContext') {
        return function () {
          var context = hooks.useContext();
          // create a stable reference of the utils context
          return React.useMemo(function () {
            return createReactQueryUtilsProxy(context);
          }, [context]);
        };
      }
      if (key === 'useQueries') {
        return hooks.useQueries;
      }
      if (key === 'withTRPC') {
        return _withTRPC;
      }
      return createReactProxyDecoration(key, hooks);
    });
  }

  var dist$2 = {};

  var classRegistry = {};

  var registry = {};

  var doubleIndexedKv = {};

  doubleIndexedKv.__esModule = true;
  doubleIndexedKv.DoubleIndexedKV = void 0;
  var DoubleIndexedKV = /** @class */ (function () {
      function DoubleIndexedKV() {
          this.keyToValue = new Map();
          this.valueToKey = new Map();
      }
      DoubleIndexedKV.prototype.set = function (key, value) {
          this.keyToValue.set(key, value);
          this.valueToKey.set(value, key);
      };
      DoubleIndexedKV.prototype.getByKey = function (key) {
          return this.keyToValue.get(key);
      };
      DoubleIndexedKV.prototype.getByValue = function (value) {
          return this.valueToKey.get(value);
      };
      DoubleIndexedKV.prototype.clear = function () {
          this.keyToValue.clear();
          this.valueToKey.clear();
      };
      return DoubleIndexedKV;
  }());
  doubleIndexedKv.DoubleIndexedKV = DoubleIndexedKV;

  registry.__esModule = true;
  registry.Registry = void 0;
  var double_indexed_kv_1 = doubleIndexedKv;
  var Registry = /** @class */ (function () {
      function Registry(generateIdentifier) {
          this.generateIdentifier = generateIdentifier;
          this.kv = new double_indexed_kv_1.DoubleIndexedKV();
      }
      Registry.prototype.register = function (value, identifier) {
          if (this.kv.getByValue(value)) {
              return;
          }
          if (!identifier) {
              identifier = this.generateIdentifier(value);
          }
          {
              var alreadyRegistered = this.kv.getByKey(identifier);
              if (alreadyRegistered && alreadyRegistered !== value) {
                  console.debug("Ambiguous class \"" + identifier + "\", provide a unique identifier.");
              }
          }
          this.kv.set(identifier, value);
      };
      Registry.prototype.clear = function () {
          this.kv.clear();
      };
      Registry.prototype.getIdentifier = function (value) {
          return this.kv.getByValue(value);
      };
      Registry.prototype.getValue = function (identifier) {
          return this.kv.getByKey(identifier);
      };
      return Registry;
  }());
  registry.Registry = Registry;

  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  classRegistry.__esModule = true;
  classRegistry.ClassRegistry = void 0;
  var registry_1$1 = registry;
  var _ClassRegistry = /** @class */ (function (_super) {
      __extends(_ClassRegistry, _super);
      function _ClassRegistry() {
          var _this = _super.call(this, function (c) { return c.name; }) || this;
          _this.classToAllowedProps = new Map();
          return _this;
      }
      _ClassRegistry.prototype.register = function (value, options) {
          if (typeof options === 'object') {
              if (options.allowProps) {
                  this.classToAllowedProps.set(value, options.allowProps);
              }
              _super.prototype.register.call(this, value, options.identifier);
          }
          else {
              _super.prototype.register.call(this, value, options);
          }
      };
      _ClassRegistry.prototype.getAllowedProps = function (value) {
          return this.classToAllowedProps.get(value);
      };
      return _ClassRegistry;
  }(registry_1$1.Registry));
  classRegistry.ClassRegistry = new _ClassRegistry();

  var symbolRegistry = {};

  symbolRegistry.__esModule = true;
  symbolRegistry.SymbolRegistry = void 0;
  var registry_1 = registry;
  symbolRegistry.SymbolRegistry = new registry_1.Registry(function (s) { var _a; return (_a = s.description) !== null && _a !== void 0 ? _a : ''; });

  var customTransformerRegistry = {};

  var util = {};

  var __read$1 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  util.__esModule = true;
  util.findArr = util.includes = util.forEach = util.find = void 0;
  function valuesOfObj(record) {
      if ('values' in Object) {
          // eslint-disable-next-line es5/no-es6-methods
          return Object.values(record);
      }
      var values = [];
      // eslint-disable-next-line no-restricted-syntax
      for (var key in record) {
          if (record.hasOwnProperty(key)) {
              values.push(record[key]);
          }
      }
      return values;
  }
  function find(record, predicate) {
      var values = valuesOfObj(record);
      if ('find' in values) {
          // eslint-disable-next-line es5/no-es6-methods
          return values.find(predicate);
      }
      var valuesNotNever = values;
      for (var i = 0; i < valuesNotNever.length; i++) {
          var value = valuesNotNever[i];
          if (predicate(value)) {
              return value;
          }
      }
      return undefined;
  }
  util.find = find;
  function forEach(record, run) {
      Object.entries(record).forEach(function (_a) {
          var _b = __read$1(_a, 2), key = _b[0], value = _b[1];
          return run(value, key);
      });
  }
  util.forEach = forEach;
  function includes(arr, value) {
      return arr.indexOf(value) !== -1;
  }
  util.includes = includes;
  function findArr(record, predicate) {
      for (var i = 0; i < record.length; i++) {
          var value = record[i];
          if (predicate(value)) {
              return value;
          }
      }
      return undefined;
  }
  util.findArr = findArr;

  customTransformerRegistry.__esModule = true;
  customTransformerRegistry.CustomTransformerRegistry = void 0;
  var util_1$2 = util;
  var transfomers = {};
  customTransformerRegistry.CustomTransformerRegistry = {
      register: function (transformer) {
          transfomers[transformer.name] = transformer;
      },
      findApplicable: function (v) {
          return util_1$2.find(transfomers, function (transformer) { return transformer.isApplicable(v); });
      },
      findByName: function (name) {
          return transfomers[name];
      }
  };

  var errorProps = {};

  (function (exports) {
  	var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
  	    var m = typeof Symbol === "function" && o[Symbol.iterator];
  	    if (!m) return o;
  	    var i = m.call(o), r, ar = [], e;
  	    try {
  	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  	    }
  	    catch (error) { e = { error: error }; }
  	    finally {
  	        try {
  	            if (r && !r.done && (m = i["return"])) m.call(i);
  	        }
  	        finally { if (e) throw e.error; }
  	    }
  	    return ar;
  	};
  	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
  	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
  	        to[j] = from[i];
  	    return to;
  	};
  	exports.__esModule = true;
  	exports.allowErrorProps = exports.allowedErrorProps = void 0;
  	exports.allowedErrorProps = [];
  	var allowErrorProps = function () {
  	    var props = [];
  	    for (var _i = 0; _i < arguments.length; _i++) {
  	        props[_i] = arguments[_i];
  	    }
  	    exports.allowedErrorProps.push.apply(exports.allowedErrorProps, __spreadArray([], __read(props)));
  	};
  	exports.allowErrorProps = allowErrorProps;
  	
  } (errorProps));

  var plainer = {};

  var is = {};

  (function (exports) {
  	exports.__esModule = true;
  	exports.isTypedArray = exports.isInfinite = exports.isBigint = exports.isPrimitive = exports.isNaNValue = exports.isError = exports.isDate = exports.isSymbol = exports.isSet = exports.isMap = exports.isRegExp = exports.isBoolean = exports.isNumber = exports.isString = exports.isArray = exports.isEmptyObject = exports.isPlainObject = exports.isNull = exports.isUndefined = void 0;
  	var getType = function (payload) {
  	    return Object.prototype.toString.call(payload).slice(8, -1);
  	};
  	var isUndefined = function (payload) {
  	    return typeof payload === 'undefined';
  	};
  	exports.isUndefined = isUndefined;
  	var isNull = function (payload) { return payload === null; };
  	exports.isNull = isNull;
  	var isPlainObject = function (payload) {
  	    if (getType(payload) !== 'Object')
  	        return false;
  	    if (Object.getPrototypeOf(payload) === null)
  	        return true;
  	    if (payload === Object.prototype)
  	        return false;
  	    return (payload.constructor === Object &&
  	        Object.getPrototypeOf(payload) === Object.prototype);
  	};
  	exports.isPlainObject = isPlainObject;
  	var isEmptyObject = function (payload) {
  	    return exports.isPlainObject(payload) && Object.keys(payload).length === 0;
  	};
  	exports.isEmptyObject = isEmptyObject;
  	var isArray = function (payload) {
  	    return Array.isArray(payload);
  	};
  	exports.isArray = isArray;
  	var isString = function (payload) {
  	    return typeof payload === 'string';
  	};
  	exports.isString = isString;
  	var isNumber = function (payload) {
  	    return typeof payload === 'number' && !isNaN(payload);
  	};
  	exports.isNumber = isNumber;
  	var isBoolean = function (payload) {
  	    return typeof payload === 'boolean';
  	};
  	exports.isBoolean = isBoolean;
  	var isRegExp = function (payload) {
  	    return payload instanceof RegExp;
  	};
  	exports.isRegExp = isRegExp;
  	var isMap = function (payload) {
  	    return payload instanceof Map;
  	};
  	exports.isMap = isMap;
  	var isSet = function (payload) {
  	    return payload instanceof Set;
  	};
  	exports.isSet = isSet;
  	var isSymbol = function (payload) {
  	    return getType(payload) === 'Symbol';
  	};
  	exports.isSymbol = isSymbol;
  	var isDate = function (payload) {
  	    return payload instanceof Date && !isNaN(payload.valueOf());
  	};
  	exports.isDate = isDate;
  	var isError = function (payload) {
  	    return payload instanceof Error;
  	};
  	exports.isError = isError;
  	var isNaNValue = function (payload) {
  	    return typeof payload === 'number' && isNaN(payload);
  	};
  	exports.isNaNValue = isNaNValue;
  	var isPrimitive = function (payload) {
  	    return exports.isBoolean(payload) ||
  	        exports.isNull(payload) ||
  	        exports.isUndefined(payload) ||
  	        exports.isNumber(payload) ||
  	        exports.isString(payload) ||
  	        exports.isSymbol(payload);
  	};
  	exports.isPrimitive = isPrimitive;
  	var isBigint = function (payload) {
  	    return typeof payload === 'bigint';
  	};
  	exports.isBigint = isBigint;
  	var isInfinite = function (payload) {
  	    return payload === Infinity || payload === -Infinity;
  	};
  	exports.isInfinite = isInfinite;
  	var isTypedArray = function (payload) {
  	    return ArrayBuffer.isView(payload) && !(payload instanceof DataView);
  	};
  	exports.isTypedArray = isTypedArray;
  	
  } (is));

  var pathstringifier = {};

  (function (exports) {
  	exports.__esModule = true;
  	exports.parsePath = exports.stringifyPath = exports.escapeKey = void 0;
  	var escapeKey = function (key) { return key.replace(/\./g, '\\.'); };
  	exports.escapeKey = escapeKey;
  	var stringifyPath = function (path) {
  	    return path
  	        .map(String)
  	        .map(exports.escapeKey)
  	        .join('.');
  	};
  	exports.stringifyPath = stringifyPath;
  	var parsePath = function (string) {
  	    var result = [];
  	    var segment = '';
  	    for (var i = 0; i < string.length; i++) {
  	        var char = string.charAt(i);
  	        var isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
  	        if (isEscapedDot) {
  	            segment += '.';
  	            i++;
  	            continue;
  	        }
  	        var isEndOfSegment = char === '.';
  	        if (isEndOfSegment) {
  	            result.push(segment);
  	            segment = '';
  	            continue;
  	        }
  	        segment += char;
  	    }
  	    var lastSegment = segment;
  	    result.push(lastSegment);
  	    return result;
  	};
  	exports.parsePath = parsePath;
  	
  } (pathstringifier));

  var transformer = {};

  var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
      return to;
  };
  transformer.__esModule = true;
  transformer.untransformValue = transformer.transformValue = transformer.isInstanceOfRegisteredClass = void 0;
  var is_1$1 = is;
  var class_registry_1 = classRegistry;
  var symbol_registry_1 = symbolRegistry;
  var custom_transformer_registry_1 = customTransformerRegistry;
  var error_props_1 = errorProps;
  var util_1$1 = util;
  function simpleTransformation(isApplicable, annotation, transform, untransform) {
      return {
          isApplicable: isApplicable,
          annotation: annotation,
          transform: transform,
          untransform: untransform
      };
  }
  var simpleRules = [
      simpleTransformation(is_1$1.isUndefined, 'undefined', function () { return null; }, function () { return undefined; }),
      simpleTransformation(is_1$1.isBigint, 'bigint', function (v) { return v.toString(); }, function (v) {
          if (typeof BigInt !== 'undefined') {
              return BigInt(v);
          }
          console.error('Please add a BigInt polyfill.');
          return v;
      }),
      simpleTransformation(is_1$1.isDate, 'Date', function (v) { return v.toISOString(); }, function (v) { return new Date(v); }),
      simpleTransformation(is_1$1.isError, 'Error', function (v) {
          var baseError = {
              name: v.name,
              message: v.message
          };
          error_props_1.allowedErrorProps.forEach(function (prop) {
              baseError[prop] = v[prop];
          });
          return baseError;
      }, function (v) {
          var e = new Error(v.message);
          e.name = v.name;
          e.stack = v.stack;
          error_props_1.allowedErrorProps.forEach(function (prop) {
              e[prop] = v[prop];
          });
          return e;
      }),
      simpleTransformation(is_1$1.isRegExp, 'regexp', function (v) { return '' + v; }, function (regex) {
          var body = regex.slice(1, regex.lastIndexOf('/'));
          var flags = regex.slice(regex.lastIndexOf('/') + 1);
          return new RegExp(body, flags);
      }),
      simpleTransformation(is_1$1.isSet, 'set', 
      // (sets only exist in es6+)
      // eslint-disable-next-line es5/no-es6-methods
      function (v) { return __spreadArray([], __read(v.values())); }, function (v) { return new Set(v); }),
      simpleTransformation(is_1$1.isMap, 'map', function (v) { return __spreadArray([], __read(v.entries())); }, function (v) { return new Map(v); }),
      simpleTransformation(function (v) { return is_1$1.isNaNValue(v) || is_1$1.isInfinite(v); }, 'number', function (v) {
          if (is_1$1.isNaNValue(v)) {
              return 'NaN';
          }
          if (v > 0) {
              return 'Infinity';
          }
          else {
              return '-Infinity';
          }
      }, Number),
      simpleTransformation(function (v) { return v === 0 && 1 / v === -Infinity; }, 'number', function () {
          return '-0';
      }, Number),
  ];
  function compositeTransformation(isApplicable, annotation, transform, untransform) {
      return {
          isApplicable: isApplicable,
          annotation: annotation,
          transform: transform,
          untransform: untransform
      };
  }
  var symbolRule = compositeTransformation(function (s) {
      if (is_1$1.isSymbol(s)) {
          var isRegistered = !!symbol_registry_1.SymbolRegistry.getIdentifier(s);
          return isRegistered;
      }
      return false;
  }, function (s) {
      var identifier = symbol_registry_1.SymbolRegistry.getIdentifier(s);
      return ['symbol', identifier];
  }, function (v) { return v.description; }, function (_, a) {
      var value = symbol_registry_1.SymbolRegistry.getValue(a[1]);
      if (!value) {
          throw new Error('Trying to deserialize unknown symbol');
      }
      return value;
  });
  var constructorToName = [
      Int8Array,
      Uint8Array,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array,
      Uint8ClampedArray,
  ].reduce(function (obj, ctor) {
      obj[ctor.name] = ctor;
      return obj;
  }, {});
  var typedArrayRule = compositeTransformation(is_1$1.isTypedArray, function (v) { return ['typed-array', v.constructor.name]; }, function (v) { return __spreadArray([], __read(v)); }, function (v, a) {
      var ctor = constructorToName[a[1]];
      if (!ctor) {
          throw new Error('Trying to deserialize unknown typed array');
      }
      return new ctor(v);
  });
  function isInstanceOfRegisteredClass(potentialClass) {
      if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
          var isRegistered = !!class_registry_1.ClassRegistry.getIdentifier(potentialClass.constructor);
          return isRegistered;
      }
      return false;
  }
  transformer.isInstanceOfRegisteredClass = isInstanceOfRegisteredClass;
  var classRule = compositeTransformation(isInstanceOfRegisteredClass, function (clazz) {
      var identifier = class_registry_1.ClassRegistry.getIdentifier(clazz.constructor);
      return ['class', identifier];
  }, function (clazz) {
      var allowedProps = class_registry_1.ClassRegistry.getAllowedProps(clazz.constructor);
      if (!allowedProps) {
          return __assign({}, clazz);
      }
      var result = {};
      allowedProps.forEach(function (prop) {
          result[prop] = clazz[prop];
      });
      return result;
  }, function (v, a) {
      var clazz = class_registry_1.ClassRegistry.getValue(a[1]);
      if (!clazz) {
          throw new Error('Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564');
      }
      return Object.assign(Object.create(clazz.prototype), v);
  });
  var customRule = compositeTransformation(function (value) {
      return !!custom_transformer_registry_1.CustomTransformerRegistry.findApplicable(value);
  }, function (value) {
      var transformer = custom_transformer_registry_1.CustomTransformerRegistry.findApplicable(value);
      return ['custom', transformer.name];
  }, function (value) {
      var transformer = custom_transformer_registry_1.CustomTransformerRegistry.findApplicable(value);
      return transformer.serialize(value);
  }, function (v, a) {
      var transformer = custom_transformer_registry_1.CustomTransformerRegistry.findByName(a[1]);
      if (!transformer) {
          throw new Error('Trying to deserialize unknown custom value');
      }
      return transformer.deserialize(v);
  });
  var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
  var transformValue = function (value) {
      var applicableCompositeRule = util_1$1.findArr(compositeRules, function (rule) {
          return rule.isApplicable(value);
      });
      if (applicableCompositeRule) {
          return {
              value: applicableCompositeRule.transform(value),
              type: applicableCompositeRule.annotation(value)
          };
      }
      var applicableSimpleRule = util_1$1.findArr(simpleRules, function (rule) {
          return rule.isApplicable(value);
      });
      if (applicableSimpleRule) {
          return {
              value: applicableSimpleRule.transform(value),
              type: applicableSimpleRule.annotation
          };
      }
      return undefined;
  };
  transformer.transformValue = transformValue;
  var simpleRulesByAnnotation = {};
  simpleRules.forEach(function (rule) {
      simpleRulesByAnnotation[rule.annotation] = rule;
  });
  var untransformValue = function (json, type) {
      if (is_1$1.isArray(type)) {
          switch (type[0]) {
              case 'symbol':
                  return symbolRule.untransform(json, type);
              case 'class':
                  return classRule.untransform(json, type);
              case 'custom':
                  return customRule.untransform(json, type);
              case 'typed-array':
                  return typedArrayRule.untransform(json, type);
              default:
                  throw new Error('Unknown transformation: ' + type);
          }
      }
      else {
          var transformation = simpleRulesByAnnotation[type];
          if (!transformation) {
              throw new Error('Unknown transformation: ' + type);
          }
          return transformation.untransform(json);
      }
  };
  transformer.untransformValue = untransformValue;

  var accessDeep = {};

  accessDeep.__esModule = true;
  accessDeep.setDeep = accessDeep.getDeep = void 0;
  var is_1 = is;
  var util_1 = util;
  var getNthKey = function (value, n) {
      var keys = value.keys();
      while (n > 0) {
          keys.next();
          n--;
      }
      return keys.next().value;
  };
  function validatePath(path) {
      if (util_1.includes(path, '__proto__')) {
          throw new Error('__proto__ is not allowed as a property');
      }
      if (util_1.includes(path, 'prototype')) {
          throw new Error('prototype is not allowed as a property');
      }
      if (util_1.includes(path, 'constructor')) {
          throw new Error('constructor is not allowed as a property');
      }
  }
  var getDeep = function (object, path) {
      validatePath(path);
      path.forEach(function (key) {
          object = object[key];
      });
      return object;
  };
  accessDeep.getDeep = getDeep;
  var setDeep = function (object, path, mapper) {
      validatePath(path);
      if (path.length === 0) {
          return mapper(object);
      }
      var parent = object;
      for (var i = 0; i < path.length - 1; i++) {
          var key = path[i];
          if (is_1.isArray(parent)) {
              var index = +key;
              parent = parent[index];
          }
          else if (is_1.isPlainObject(parent)) {
              parent = parent[key];
          }
          else if (is_1.isSet(parent)) {
              var row = +key;
              parent = getNthKey(parent, row);
          }
          else if (is_1.isMap(parent)) {
              var isEnd = i === path.length - 2;
              if (isEnd) {
                  break;
              }
              var row = +key;
              var type = +path[++i] === 0 ? 'key' : 'value';
              var keyOfRow = getNthKey(parent, row);
              switch (type) {
                  case 'key':
                      parent = keyOfRow;
                      break;
                  case 'value':
                      parent = parent.get(keyOfRow);
                      break;
              }
          }
      }
      var lastKey = path[path.length - 1];
      if (is_1.isArray(parent) || is_1.isPlainObject(parent)) {
          parent[lastKey] = mapper(parent[lastKey]);
      }
      if (is_1.isSet(parent)) {
          var oldValue = getNthKey(parent, +lastKey);
          var newValue = mapper(oldValue);
          if (oldValue !== newValue) {
              parent["delete"](oldValue);
              parent.add(newValue);
          }
      }
      if (is_1.isMap(parent)) {
          var row = +path[path.length - 2];
          var keyToRow = getNthKey(parent, row);
          var type = +lastKey === 0 ? 'key' : 'value';
          switch (type) {
              case 'key': {
                  var newKey = mapper(keyToRow);
                  parent.set(newKey, parent.get(keyToRow));
                  if (newKey !== keyToRow) {
                      parent["delete"](keyToRow);
                  }
                  break;
              }
              case 'value': {
                  parent.set(keyToRow, mapper(parent.get(keyToRow)));
                  break;
              }
          }
      }
      return object;
  };
  accessDeep.setDeep = setDeep;

  (function (exports) {
  	var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
  	    var m = typeof Symbol === "function" && o[Symbol.iterator];
  	    if (!m) return o;
  	    var i = m.call(o), r, ar = [], e;
  	    try {
  	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  	    }
  	    catch (error) { e = { error: error }; }
  	    finally {
  	        try {
  	            if (r && !r.done && (m = i["return"])) m.call(i);
  	        }
  	        finally { if (e) throw e.error; }
  	    }
  	    return ar;
  	};
  	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
  	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
  	        to[j] = from[i];
  	    return to;
  	};
  	exports.__esModule = true;
  	exports.walker = exports.generateReferentialEqualityAnnotations = exports.applyReferentialEqualityAnnotations = exports.applyValueAnnotations = void 0;
  	var is_1 = is;
  	var pathstringifier_1 = pathstringifier;
  	var transformer_1 = transformer;
  	var util_1 = util;
  	var pathstringifier_2 = pathstringifier;
  	var accessDeep_1 = accessDeep;
  	function traverse(tree, walker, origin) {
  	    if (origin === void 0) { origin = []; }
  	    if (!tree) {
  	        return;
  	    }
  	    if (!is_1.isArray(tree)) {
  	        util_1.forEach(tree, function (subtree, key) {
  	            return traverse(subtree, walker, __spreadArray(__spreadArray([], __read(origin)), __read(pathstringifier_2.parsePath(key))));
  	        });
  	        return;
  	    }
  	    var _a = __read(tree, 2), nodeValue = _a[0], children = _a[1];
  	    if (children) {
  	        util_1.forEach(children, function (child, key) {
  	            traverse(child, walker, __spreadArray(__spreadArray([], __read(origin)), __read(pathstringifier_2.parsePath(key))));
  	        });
  	    }
  	    walker(nodeValue, origin);
  	}
  	function applyValueAnnotations(plain, annotations) {
  	    traverse(annotations, function (type, path) {
  	        plain = accessDeep_1.setDeep(plain, path, function (v) { return transformer_1.untransformValue(v, type); });
  	    });
  	    return plain;
  	}
  	exports.applyValueAnnotations = applyValueAnnotations;
  	function applyReferentialEqualityAnnotations(plain, annotations) {
  	    function apply(identicalPaths, path) {
  	        var object = accessDeep_1.getDeep(plain, pathstringifier_2.parsePath(path));
  	        identicalPaths.map(pathstringifier_2.parsePath).forEach(function (identicalObjectPath) {
  	            plain = accessDeep_1.setDeep(plain, identicalObjectPath, function () { return object; });
  	        });
  	    }
  	    if (is_1.isArray(annotations)) {
  	        var _a = __read(annotations, 2), root = _a[0], other = _a[1];
  	        root.forEach(function (identicalPath) {
  	            plain = accessDeep_1.setDeep(plain, pathstringifier_2.parsePath(identicalPath), function () { return plain; });
  	        });
  	        if (other) {
  	            util_1.forEach(other, apply);
  	        }
  	    }
  	    else {
  	        util_1.forEach(annotations, apply);
  	    }
  	    return plain;
  	}
  	exports.applyReferentialEqualityAnnotations = applyReferentialEqualityAnnotations;
  	var isDeep = function (object) {
  	    return is_1.isPlainObject(object) ||
  	        is_1.isArray(object) ||
  	        is_1.isMap(object) ||
  	        is_1.isSet(object) ||
  	        transformer_1.isInstanceOfRegisteredClass(object);
  	};
  	function addIdentity(object, path, identities) {
  	    var existingSet = identities.get(object);
  	    if (existingSet) {
  	        existingSet.push(path);
  	    }
  	    else {
  	        identities.set(object, [path]);
  	    }
  	}
  	function generateReferentialEqualityAnnotations(identitites) {
  	    var result = {};
  	    var rootEqualityPaths = undefined;
  	    identitites.forEach(function (paths) {
  	        if (paths.length <= 1) {
  	            return;
  	        }
  	        var _a = __read(paths
  	            .map(function (path) { return path.map(String); })
  	            .sort(function (a, b) { return a.length - b.length; })), shortestPath = _a[0], identicalPaths = _a.slice(1);
  	        if (shortestPath.length === 0) {
  	            rootEqualityPaths = identicalPaths.map(pathstringifier_1.stringifyPath);
  	        }
  	        else {
  	            result[pathstringifier_1.stringifyPath(shortestPath)] = identicalPaths.map(pathstringifier_1.stringifyPath);
  	        }
  	    });
  	    if (rootEqualityPaths) {
  	        if (is_1.isEmptyObject(result)) {
  	            return [rootEqualityPaths];
  	        }
  	        else {
  	            return [rootEqualityPaths, result];
  	        }
  	    }
  	    else {
  	        return is_1.isEmptyObject(result) ? undefined : result;
  	    }
  	}
  	exports.generateReferentialEqualityAnnotations = generateReferentialEqualityAnnotations;
  	var walker = function (object, identities, path, objectsInThisPath) {
  	    var _a;
  	    if (path === void 0) { path = []; }
  	    if (objectsInThisPath === void 0) { objectsInThisPath = []; }
  	    if (!is_1.isPrimitive(object)) {
  	        addIdentity(object, path, identities);
  	    }
  	    if (!isDeep(object)) {
  	        var transformed_1 = transformer_1.transformValue(object);
  	        if (transformed_1) {
  	            return {
  	                transformedValue: transformed_1.value,
  	                annotations: [transformed_1.type]
  	            };
  	        }
  	        else {
  	            return {
  	                transformedValue: object
  	            };
  	        }
  	    }
  	    if (util_1.includes(objectsInThisPath, object)) {
  	        return {
  	            transformedValue: null
  	        };
  	    }
  	    var transformationResult = transformer_1.transformValue(object);
  	    var transformed = (_a = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _a !== void 0 ? _a : object;
  	    if (!is_1.isPrimitive(object)) {
  	        objectsInThisPath = __spreadArray(__spreadArray([], __read(objectsInThisPath)), [object]);
  	    }
  	    var transformedValue = is_1.isArray(transformed) ? [] : {};
  	    var innerAnnotations = {};
  	    util_1.forEach(transformed, function (value, index) {
  	        var recursiveResult = exports.walker(value, identities, __spreadArray(__spreadArray([], __read(path)), [index]), objectsInThisPath);
  	        transformedValue[index] = recursiveResult.transformedValue;
  	        if (is_1.isArray(recursiveResult.annotations)) {
  	            innerAnnotations[index] = recursiveResult.annotations;
  	        }
  	        else if (is_1.isPlainObject(recursiveResult.annotations)) {
  	            util_1.forEach(recursiveResult.annotations, function (tree, key) {
  	                innerAnnotations[pathstringifier_1.escapeKey(index) + '.' + key] = tree;
  	            });
  	        }
  	    });
  	    if (is_1.isEmptyObject(innerAnnotations)) {
  	        return {
  	            transformedValue: transformedValue,
  	            annotations: !!transformationResult
  	                ? [transformationResult.type]
  	                : undefined
  	        };
  	    }
  	    else {
  	        return {
  	            transformedValue: transformedValue,
  	            annotations: !!transformationResult
  	                ? [transformationResult.type, innerAnnotations]
  	                : innerAnnotations
  	        };
  	    }
  	};
  	exports.walker = walker;
  	
  } (plainer));

  var dist$1 = {};

  var dist = {};

  /**
   * Returns the object type of the given payload
   *
   * @param {*} payload
   * @returns {string}
   */
  function getType(payload) {
      return Object.prototype.toString.call(payload).slice(8, -1);
  }
  /**
   * Returns whether the payload is undefined
   *
   * @param {*} payload
   * @returns {payload is undefined}
   */
  function isUndefined(payload) {
      return getType(payload) === 'Undefined';
  }
  /**
   * Returns whether the payload is null
   *
   * @param {*} payload
   * @returns {payload is null}
   */
  function isNull(payload) {
      return getType(payload) === 'Null';
  }
  /**
   * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
   *
   * @param {*} payload
   * @returns {payload is PlainObject}
   */
  function isPlainObject(payload) {
      if (getType(payload) !== 'Object')
          return false;
      const prototype = Object.getPrototypeOf(payload);
      return prototype.constructor === Object && prototype === Object.prototype;
  }
  /**
   * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
   *
   * @param {*} payload
   * @returns {payload is PlainObject}
   */
  function isObject(payload) {
      return isPlainObject(payload);
  }
  /**
   * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
   *
   * @param {*} payload
   * @returns {payload is { [K in any]: never }}
   */
  function isEmptyObject(payload) {
      return isPlainObject(payload) && Object.keys(payload).length === 0;
  }
  /**
   * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
   *
   * @param {*} payload
   * @returns {payload is PlainObject}
   */
  function isFullObject(payload) {
      return isPlainObject(payload) && Object.keys(payload).length > 0;
  }
  /**
   * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
   *
   * @param {*} payload
   * @returns {payload is PlainObject}
   */
  function isAnyObject(payload) {
      return getType(payload) === 'Object';
  }
  /**
   * Returns whether the payload is an object like a type passed in < >
   *
   * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
   *
   * @template T this must be passed in < >
   * @param {*} payload
   * @returns {payload is T}
   */
  function isObjectLike(payload) {
      return isAnyObject(payload);
  }
  /**
   * Returns whether the payload is a function (regular or async)
   *
   * @param {*} payload
   * @returns {payload is AnyFunction}
   */
  function isFunction(payload) {
      return typeof payload === 'function';
  }
  /**
   * Returns whether the payload is an array
   *
   * @param {any} payload
   * @returns {payload is any[]}
   */
  function isArray(payload) {
      return getType(payload) === 'Array';
  }
  /**
   * Returns whether the payload is a an array with at least 1 item
   *
   * @param {*} payload
   * @returns {payload is any[]}
   */
  function isFullArray(payload) {
      return isArray(payload) && payload.length > 0;
  }
  /**
   * Returns whether the payload is a an empty array
   *
   * @param {*} payload
   * @returns {payload is []}
   */
  function isEmptyArray(payload) {
      return isArray(payload) && payload.length === 0;
  }
  /**
   * Returns whether the payload is a string
   *
   * @param {*} payload
   * @returns {payload is string}
   */
  function isString(payload) {
      return getType(payload) === 'String';
  }
  /**
   * Returns whether the payload is a string, BUT returns false for ''
   *
   * @param {*} payload
   * @returns {payload is string}
   */
  function isFullString(payload) {
      return isString(payload) && payload !== '';
  }
  /**
   * Returns whether the payload is ''
   *
   * @param {*} payload
   * @returns {payload is string}
   */
  function isEmptyString(payload) {
      return payload === '';
  }
  /**
   * Returns whether the payload is a number (but not NaN)
   *
   * This will return `false` for `NaN`!!
   *
   * @param {*} payload
   * @returns {payload is number}
   */
  function isNumber(payload) {
      return getType(payload) === 'Number' && !isNaN(payload);
  }
  /**
   * Returns whether the payload is a positive number (but not 0)
   *
   * @param {*} payload
   * @returns {payload is number}
   */
  function isPositiveNumber(payload) {
      return isNumber(payload) && payload > 0;
  }
  /**
   * Returns whether the payload is a negative number (but not 0)
   *
   * @param {*} payload
   * @returns {payload is number}
   */
  function isNegativeNumber(payload) {
      return isNumber(payload) && payload < 0;
  }
  /**
   * Returns whether the payload is a boolean
   *
   * @param {*} payload
   * @returns {payload is boolean}
   */
  function isBoolean(payload) {
      return getType(payload) === 'Boolean';
  }
  /**
   * Returns whether the payload is a regular expression (RegExp)
   *
   * @param {*} payload
   * @returns {payload is RegExp}
   */
  function isRegExp(payload) {
      return getType(payload) === 'RegExp';
  }
  /**
   * Returns whether the payload is a Map
   *
   * @param {*} payload
   * @returns {payload is Map<any, any>}
   */
  function isMap(payload) {
      return getType(payload) === 'Map';
  }
  /**
   * Returns whether the payload is a WeakMap
   *
   * @param {*} payload
   * @returns {payload is WeakMap<any, any>}
   */
  function isWeakMap(payload) {
      return getType(payload) === 'WeakMap';
  }
  /**
   * Returns whether the payload is a Set
   *
   * @param {*} payload
   * @returns {payload is Set<any>}
   */
  function isSet(payload) {
      return getType(payload) === 'Set';
  }
  /**
   * Returns whether the payload is a WeakSet
   *
   * @param {*} payload
   * @returns {payload is WeakSet<any>}
   */
  function isWeakSet(payload) {
      return getType(payload) === 'WeakSet';
  }
  /**
   * Returns whether the payload is a Symbol
   *
   * @param {*} payload
   * @returns {payload is symbol}
   */
  function isSymbol(payload) {
      return getType(payload) === 'Symbol';
  }
  /**
   * Returns whether the payload is a Date, and that the date is valid
   *
   * @param {*} payload
   * @returns {payload is Date}
   */
  function isDate(payload) {
      return getType(payload) === 'Date' && !isNaN(payload);
  }
  /**
   * Returns whether the payload is a Blob
   *
   * @param {*} payload
   * @returns {payload is Blob}
   */
  function isBlob(payload) {
      return getType(payload) === 'Blob';
  }
  /**
   * Returns whether the payload is a File
   *
   * @param {*} payload
   * @returns {payload is File}
   */
  function isFile(payload) {
      return getType(payload) === 'File';
  }
  /**
   * Returns whether the payload is a Promise
   *
   * @param {*} payload
   * @returns {payload is Promise<any>}
   */
  function isPromise(payload) {
      return getType(payload) === 'Promise';
  }
  /**
   * Returns whether the payload is an Error
   *
   * @param {*} payload
   * @returns {payload is Error}
   */
  function isError(payload) {
      return getType(payload) === 'Error';
  }
  /**
   * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
   *
   * @param {*} payload
   * @returns {payload is typeof NaN}
   */
  function isNaNValue(payload) {
      return getType(payload) === 'Number' && isNaN(payload);
  }
  /**
   * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
   *
   * @param {*} payload
   * @returns {(payload is boolean | null | undefined | number | string | symbol)}
   */
  function isPrimitive(payload) {
      return (isBoolean(payload) ||
          isNull(payload) ||
          isUndefined(payload) ||
          isNumber(payload) ||
          isString(payload) ||
          isSymbol(payload));
  }
  /**
   * Returns true whether the payload is null or undefined
   *
   * @param {*} payload
   * @returns {(payload is null | undefined)}
   */
  const isNullOrUndefined = isOneOf(isNull, isUndefined);
  function isOneOf(a, b, c, d, e) {
      return (value) => a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
  }
  /**
   * Does a generic check to check that the given payload is of a given type.
   * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
   * It will, however, differentiate between object and null
   *
   * @template T
   * @param {*} payload
   * @param {T} type
   * @throws {TypeError} Will throw type error if type is an invalid type
   * @returns {payload is T}
   */
  function isType(payload, type) {
      if (!(type instanceof Function)) {
          throw new TypeError('Type must be a function');
      }
      if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
          throw new TypeError('Type is not a class');
      }
      // Classes usually have names (as functions usually have names)
      const name = type.name;
      return getType(payload) === name || Boolean(payload && payload.constructor === type);
  }

  dist.getType = getType;
  dist.isAnyObject = isAnyObject;
  dist.isArray = isArray;
  dist.isBlob = isBlob;
  dist.isBoolean = isBoolean;
  dist.isDate = isDate;
  dist.isEmptyArray = isEmptyArray;
  dist.isEmptyObject = isEmptyObject;
  dist.isEmptyString = isEmptyString;
  dist.isError = isError;
  dist.isFile = isFile;
  dist.isFullArray = isFullArray;
  dist.isFullObject = isFullObject;
  dist.isFullString = isFullString;
  dist.isFunction = isFunction;
  dist.isMap = isMap;
  dist.isNaNValue = isNaNValue;
  dist.isNegativeNumber = isNegativeNumber;
  dist.isNull = isNull;
  dist.isNullOrUndefined = isNullOrUndefined;
  dist.isNumber = isNumber;
  dist.isObject = isObject;
  dist.isObjectLike = isObjectLike;
  dist.isOneOf = isOneOf;
  dist.isPlainObject = isPlainObject;
  dist.isPositiveNumber = isPositiveNumber;
  dist.isPrimitive = isPrimitive;
  dist.isPromise = isPromise;
  dist.isRegExp = isRegExp;
  dist.isSet = isSet;
  dist.isString = isString;
  dist.isSymbol = isSymbol;
  dist.isType = isType;
  dist.isUndefined = isUndefined;
  dist.isWeakMap = isWeakMap;
  dist.isWeakSet = isWeakSet;

  var isWhat = dist;

  function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
      const propType = {}.propertyIsEnumerable.call(originalObject, key)
          ? 'enumerable'
          : 'nonenumerable';
      if (propType === 'enumerable')
          carry[key] = newVal;
      if (includeNonenumerable && propType === 'nonenumerable') {
          Object.defineProperty(carry, key, {
              value: newVal,
              enumerable: false,
              writable: true,
              configurable: true,
          });
      }
  }
  /**
   * Copy (clone) an object and all its props recursively to get rid of any prop referenced of the original object. Arrays are also cloned, however objects inside arrays are still linked.
   *
   * @param target Target can be anything
   * @param [options = {}] Options can be `props` or `nonenumerable`
   * @returns the target with replaced values
   */
  function copy(target, options = {}) {
      if (isWhat.isArray(target)) {
          return target.map((item) => copy(item, options));
      }
      if (!isWhat.isPlainObject(target)) {
          return target;
      }
      const props = Object.getOwnPropertyNames(target);
      const symbols = Object.getOwnPropertySymbols(target);
      return [...props, ...symbols].reduce((carry, key) => {
          if (isWhat.isArray(options.props) && !options.props.includes(key)) {
              return carry;
          }
          const val = target[key];
          const newVal = copy(val, options);
          assignProp(carry, key, newVal, target, options.nonenumerable);
          return carry;
      }, {});
  }

  dist$1.copy = copy;

  (function (exports) {
  	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
  	    __assign = Object.assign || function(t) {
  	        for (var s, i = 1, n = arguments.length; i < n; i++) {
  	            s = arguments[i];
  	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
  	                t[p] = s[p];
  	        }
  	        return t;
  	    };
  	    return __assign.apply(this, arguments);
  	};
  	exports.__esModule = true;
  	exports.registerCustom = exports.registerSymbol = exports.registerClass = exports.parse = exports.stringify = exports.deserialize = exports.serialize = void 0;
  	var class_registry_1 = classRegistry;
  	var symbol_registry_1 = symbolRegistry;
  	var custom_transformer_registry_1 = customTransformerRegistry;
  	var error_props_1 = errorProps;
  	var plainer_1 = plainer;
  	var copy_anything_1 = dist$1;
  	var serialize = function (object) {
  	    var identities = new Map();
  	    var output = plainer_1.walker(object, identities);
  	    var res = {
  	        json: output.transformedValue
  	    };
  	    if (output.annotations) {
  	        res.meta = __assign(__assign({}, res.meta), { values: output.annotations });
  	    }
  	    var equalityAnnotations = plainer_1.generateReferentialEqualityAnnotations(identities);
  	    if (equalityAnnotations) {
  	        res.meta = __assign(__assign({}, res.meta), { referentialEqualities: equalityAnnotations });
  	    }
  	    return res;
  	};
  	exports.serialize = serialize;
  	var deserialize = function (payload) {
  	    var json = payload.json, meta = payload.meta;
  	    var result = copy_anything_1.copy(json);
  	    if (meta === null || meta === void 0 ? void 0 : meta.values) {
  	        result = plainer_1.applyValueAnnotations(result, meta.values);
  	    }
  	    if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
  	        result = plainer_1.applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
  	    }
  	    return result;
  	};
  	exports.deserialize = deserialize;
  	var stringify = function (object) {
  	    return JSON.stringify(exports.serialize(object));
  	};
  	exports.stringify = stringify;
  	var parse = function (string) {
  	    return exports.deserialize(JSON.parse(string));
  	};
  	exports.parse = parse;
  	var registerClass = function (v, options) {
  	    return class_registry_1.ClassRegistry.register(v, options);
  	};
  	exports.registerClass = registerClass;
  	var registerSymbol = function (v, identifier) {
  	    return symbol_registry_1.SymbolRegistry.register(v, identifier);
  	};
  	exports.registerSymbol = registerSymbol;
  	var registerCustom = function (transformer, name) {
  	    return custom_transformer_registry_1.CustomTransformerRegistry.register(__assign({ name: name }, transformer));
  	};
  	exports.registerCustom = registerCustom;
  	exports["default"] = {
  	    stringify: exports.stringify,
  	    parse: exports.parse,
  	    serialize: exports.serialize,
  	    deserialize: exports.deserialize,
  	    registerClass: exports.registerClass,
  	    registerSymbol: exports.registerSymbol,
  	    registerCustom: exports.registerCustom,
  	    allowErrorProps: error_props_1.allowErrorProps
  	};
  	
  } (dist$2));

  var superjson = /*@__PURE__*/getDefaultExportFromCjs(dist$2);

  var getBaseUrl = function getBaseUrl() {
    var _AdminJS$env$PORT;
    if (typeof window !== 'undefined') return ''; // browser should use relative url
    if (AdminJS.env.VERCEL_URL) return "https://".concat(AdminJS.env.VERCEL_URL); // SSR should use vercel url
    return "http://localhost:".concat((_AdminJS$env$PORT = AdminJS.env.PORT) !== null && _AdminJS$env$PORT !== void 0 ? _AdminJS$env$PORT : 3000); // dev SSR should use localhost
  };

  var baseTrpcUrl = "".concat(getBaseUrl(), "/api/trpc");
  function getEndingLink(ctx) {
    var ws = function ws() {
      var _AdminJS$env$NEXT_PUB;
      if (typeof window === 'undefined') {
        return httpBatchLink({
          url: baseTrpcUrl,
          headers: function headers() {
            if (ctx !== null && ctx !== void 0 && ctx.req) {
              // on ssr, forward client's headers to the server
              return _objectSpread2(_objectSpread2({}, ctx.req.headers), {}, {
                'x-ssr': '1'
              });
            }
            return {};
          }
        });
      }
      var client = createWSClient({
        url: (_AdminJS$env$NEXT_PUB = AdminJS.env.NEXT_PUBLIC_WS_URL) !== null && _AdminJS$env$NEXT_PUB !== void 0 ? _AdminJS$env$NEXT_PUB : ''
      });
      return wsLink({
        client: client
      });
    };
    return splitLink({
      condition: function condition(op) {
        return op.path.includes('chat');
      },
      "true": ws(),
      "false": httpBatchLink({
        url: baseTrpcUrl
      })
    });
  }
  var trpc = createTRPCNext({
    config: function config(_ref) {
      var ctx = _ref.ctx;
      return {
        transformer: superjson,
        links: [loggerLink({
          enabled: function enabled(opts) {
            return "development" === 'development' ;
          }
        }), getEndingLink(ctx)]
      };
    },
    ssr: true
  });

  /**
   * Inference helper for inputs
   * @example type HelloInput = RouterInputs['example']['hello']
   **/

  var _templateObject$1, _templateObject2, _templateObject3, _templateObject4;
  var useChatScroll = function useChatScroll(dep) {
    var ref = React__namespace.useRef(null);
    React__namespace.useEffect(function () {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
  };
  var Chat = function Chat(_ref) {
    var activeConsultation = _ref.activeConsultation,
      onClose = _ref.onClose;
    var utils = trpc.useContext();
    var _trpc$chat$getMessage = trpc.chat.getMessages.useQuery({
        consultationId: activeConsultation.id
      }),
      messages = _trpc$chat$getMessage.data;
    var _trpc$chat$joinConsul = trpc.chat.joinConsultation.useMutation(),
      joinConsultation = _trpc$chat$joinConsul.mutate;
    var _trpc$chat$leaveConsu = trpc.chat.leaveConsultation.useMutation(),
      leaveConsultation = _trpc$chat$leaveConsu.mutate;
    var _trpc$chat$sendMessag = trpc.chat.sendMessage.useMutation(),
      sendMessage = _trpc$chat$sendMessag.mutateAsync;
    var scrollRef = useChatScroll(messages);
    var user = adminjs.useCurrentAdmin()[0];
    trpc.chat.onMessage.useSubscription(undefined, {
      onData: function onData() {
        return utils.chat.getMessages.invalidate();
      },
      onError: function onError(err) {
        console.error('Subscription error:', err);
        // we might have missed a message - invalidate cache
      }
    });

    var onSendMessage = function onSendMessage(text) {
      if (user) {
        sendMessage({
          consultationId: activeConsultation.id,
          text: text
        });
      }
    };
    var closeConsultation = function closeConsultation() {
      var _activeConsultation$i;
      leaveConsultation({
        consultationId: (_activeConsultation$i = activeConsultation === null || activeConsultation === void 0 ? void 0 : activeConsultation.id) !== null && _activeConsultation$i !== void 0 ? _activeConsultation$i : ''
      });
      onClose();
    };
    React.useEffect(function () {
      joinConsultation({
        consultationId: activeConsultation.id
      });
      return function () {
        var _activeConsultation$i2;
        leaveConsultation({
          consultationId: (_activeConsultation$i2 = activeConsultation === null || activeConsultation === void 0 ? void 0 : activeConsultation.id) !== null && _activeConsultation$i2 !== void 0 ? _activeConsultation$i2 : ''
        });
      };
    });
    return /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      height: "100%",
      variant: "white"
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: true,
      justifyContent: "space-between",
      alignItems: "center",
      variant: "grey",
      marginBottom: 15
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Text, {
      fontSize: 16
    }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F c id: ", activeConsultation.id), activeConsultation.status === 'OPEN' && /*#__PURE__*/React__namespace.createElement(designSystem.Button, {
      onClick: closeConsultation
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")), /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      variant: "light"
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: true,
      flexDirection: "column",
      height: "75vh"
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: 1,
      marginBottom: "10px",
      padding: "20px 10px 0 10px",
      overflowY: "scroll",
      position: "relative",
      ref: scrollRef
    }, messages === null || messages === void 0 ? void 0 : messages.map(function (message) {
      return /*#__PURE__*/React__namespace.createElement(MessageItem, {
        key: message.id,
        isAuthor: (user === null || user === void 0 ? void 0 : user.id) === message.userId,
        message: message
      });
    })), activeConsultation.status === 'OPEN' && /*#__PURE__*/React__namespace.createElement(Input, {
      submit: onSendMessage
    }))));
  };
  var MessageItem = function MessageItem(_ref2) {
    var message = _ref2.message,
      isAuthor = _ref2.isAuthor;
    var MessageContent = function MessageContent(_ref3) {
      var children = _ref3.children;
      return !isAuthor ? /*#__PURE__*/React__namespace.createElement(MessageRightContent, null, children) : /*#__PURE__*/React__namespace.createElement(MessageLeftContent, null, children);
    };
    return /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: true,
      position: "relative",
      marginBottom: "25px",
      justifyContent: !isAuthor && 'flex-end'
    }, /*#__PURE__*/React__namespace.createElement(MessageContent, null, /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: true,
      alignItems: "center"
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Text, {
      color: !isAuthor ? '#fff' : 'black'
    }, message.message))));
  };
  var MessageRightContent = styled__default["default"](designSystem.Box)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  max-width: 250px;\n  display: inline-flex;\n  padding: 10px 15px;\n  background-color: #0667eb;\n  border-radius: 16px 16px 0 16px;\n  justify-content: flex-end;\n"])));
  var MessageLeftContent = styled__default["default"](designSystem.Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  max-width: 250px;\n  display: inline-flex;\n  padding: 10px 15px;\n  background-color: #d0cccc;\n  border-radius: 16px 16px 16px 0;\n"])));
  var MIN_TEXTAREA_HEIGHT = 10;
  var MAX_TEXTAREA_HEIGHT = 150;
  var Input = function Input(_ref4) {
    var submit = _ref4.submit;
    var _React$useState = React__namespace.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];
    var textareaRef = React__namespace.useRef(null);
    var formRef = React__namespace.useRef(null);
    React__namespace.useLayoutEffect(function () {
      if (textareaRef.current) {
        if (textareaRef.current.scrollHeight < MAX_TEXTAREA_HEIGHT) {
          textareaRef.current.style.height = 'inherit';
          textareaRef.current.style.height = "".concat(Math.max(textareaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT), "px");
        }
      }
    }, [value]);
    var onChangeText = function onChangeText(value) {
      setValue(value);
    };
    var onSubmit = function onSubmit(e) {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      if (value.trim()) {
        submit(value);
        setValue('');
      }
    };
    var onEnterPress = function onEnterPress(e) {
      if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    };
    return /*#__PURE__*/React__namespace.createElement(designSystem.FormGroup, {
      ref: formRef,
      onSubmit: onSubmit
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: true,
      flexDirection: "row",
      alignItems: "flex-end",
      width: "100%",
      border: "2px solid #a19999",
      borderRadius: "20px",
      background: "src/admin/components/chat/components/Chat#FAFAFA"
    }, /*#__PURE__*/React__namespace.createElement(NormalTextarea, {
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
      rows: 1,
      onKeyDown: onEnterPress,
      ref: textareaRef,
      value: value,
      onChange: function onChange(e) {
        return onChangeText(e.target.value);
      }
    }), /*#__PURE__*/React__namespace.createElement(SendButton, {
      type: "submit"
    }, /*#__PURE__*/React__namespace.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React__namespace.createElement("path", {
      d: "M1.68533 7.1962L6.50805 8.39034C6.56709 8.4055 6.62105 8.43631 6.66424 8.47949C6.70742 8.52268 6.73823 8.57664 6.75339 8.63568L7.99308 13.5265C8.06376 13.8024 8.22051 14.0492 8.44051 14.2309C8.6605 14.4126 8.93224 14.5197 9.21612 14.5367C9.50001 14.5537 9.78121 14.4796 10.0188 14.3253C10.2563 14.171 10.4378 13.9444 10.5367 13.6787L14.882 1.98669C14.9715 1.74693 14.9898 1.48591 14.9348 1.2349C14.8797 0.983882 14.7535 0.753517 14.5714 0.571394C14.3893 0.389272 14.1589 0.263114 13.9079 0.208033C13.6569 0.152951 13.3959 0.171281 13.1561 0.260826L1.51898 4.64966C1.25235 4.74922 1.02531 4.93186 0.871158 5.17078C0.717009 5.4097 0.643872 5.69233 0.662479 5.97718C0.681087 6.26203 0.790458 6.53412 0.974546 6.75351C1.15863 6.97291 1.40774 7.12806 1.68533 7.1962Z",
      fill: "#0667eb"
    })))));
  };
  var NormalTextarea = styled__default["default"](designSystem.TextArea)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  resize: none;\n  background-color: transparent;\n  width: 100%;\n  flex: 1;\n  position: relative;\n  padding: 10px;\n  border-radius: 20px;\n  &:focus {\n    border-color: transparent;\n    box-shadow: none;\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n"])));
  var SendButton = styled__default["default"](designSystem.Button)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n  margin-right: 5px;\n  background: #e4e4e4;\n  border: 1px solid #e4e4e4;\n  border-radius: 100px;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

  var Category;
  (function (Category) {
    Category[Category["Consultation"] = 0] = "Consultation";
    Category[Category["Support"] = 1] = "Support";
  })(Category || (Category = {}));
  var ChatList = function ChatList(_ref) {
    var onJoin = _ref.onJoin;
    var _trpc$chat$getOpenCon = trpc.chat.getOpenConsultations.useQuery(),
      consultations = _trpc$chat$getOpenCon.data;
    var closedConsultations = consultations === null || consultations === void 0 ? void 0 : consultations.filter(function (consultation) {
      return consultation.status === 'CLOSED';
    });
    var _React$useState = React__namespace.useState(Category.Consultation),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedCategory = _React$useState2[0],
      setSelectedCategory = _React$useState2[1];
    var _React$useState3 = React__namespace.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isHistory = _React$useState4[0],
      setIsHistory = _React$useState4[1];
    var currentList = isHistory ? closedConsultations : consultations;
    var _trpc$chat$joinConsul = trpc.chat.joinConsultation.useMutation(),
      joinConsultation = _trpc$chat$joinConsul.mutate;

    //
    // React.useEffect(() => {
    //   if (!isConsultationsPagesEndReached) {
    //     getHistory()
    //   }
    // }, [isConsultationsFetching])

    var onConsultationClick = function onConsultationClick(consultation) {
      joinConsultation({
        consultationId: consultation.id
      });
      onJoin(consultation);
    };
    var getHistory = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, closedConsultations;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              dispatch(setIsConsultationsFetching(false));
              _context.next = 3;
              return fetch("".concat(apiUrl, "/chat/closedConsultations?pageSize=10&page=").concat(currentConsultationsPage), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              closedConsultations = _context.sent;
              if (closedConsultations.length) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", dispatch(setIsConsultationsPagesEndReached(true)));
            case 9:
              dispatch(setCurrentConsultationsPage(currentConsultationsPage + 1));
              dispatch(setClosedConsultations(closedConsultations));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getHistory() {
        return _ref2.apply(this, arguments);
      };
    }();
    var onScroll = function onScroll(e) {
      if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
        dispatch(setIsConsultationsFetching(true));
      }
    };
    return /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      height: "100%",
      flex: true,
      flexDirection: "column",
      variant: "white"
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      flex: true,
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 10
    }, /*#__PURE__*/React__namespace.createElement(designSystem.Button, {
      onClick: function onClick() {
        return setSelectedCategory(Category.Consultation);
      },
      variant: selectedCategory === Category.Consultation ? 'success' : 'regular'
    }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"), /*#__PURE__*/React__namespace.createElement(designSystem.Button, {
      onClick: function onClick() {
        return setSelectedCategory(Category.Support);
      },
      variant: selectedCategory === Category.Support ? 'success' : 'regular'
    }, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430")), /*#__PURE__*/React__namespace.createElement(designSystem.Button, {
      marginBottom: 10,
      onClick: function onClick() {
        setIsHistory(!isHistory);
        getHistory();
      },
      variant: isHistory ? 'success' : 'regular'
    }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), /*#__PURE__*/React__namespace.createElement(designSystem.Input, {
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
      width: "100%",
      marginBottom: 20
    }), /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
      overflowY: "scroll",
      maxHeight: "70vh",
      onScroll: onScroll
    }, currentList === null || currentList === void 0 ? void 0 : currentList.map(function (consultation) {
      return /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
        flex: true,
        key: consultation.id,
        variant: "grey",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
        height: 70
      }, /*#__PURE__*/React__namespace.createElement(designSystem.Text, {
        fontSize: 15
      }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0441 ", consultation.creatorId), /*#__PURE__*/React__namespace.createElement(designSystem.Box, {
        onClick: function onClick() {
          return onConsultationClick(consultation);
        }
      }, /*#__PURE__*/React__namespace.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__namespace.createElement("path", {
        d: "M6.5912 10.5847C6.99117 10.5846 7.37504 10.7435 7.65791 11.0262C7.94093 11.309 8.10009 11.6927 8.10026 12.0929C8.10044 12.4928 7.9418 12.8767 7.65895 13.1597C7.37627 13.4427 6.99273 13.602 6.59259 13.6022C6.19245 13.6026 5.80857 13.4439 5.52553 13.1614C5.24233 12.8788 5.083 12.4952 5.08248 12.0951C5.08248 11.6948 5.24129 11.311 5.52414 11.0276C5.80717 10.7444 6.19089 10.5851 6.59121 10.5848L6.5912 10.5847ZM6.5912 14.3521C7.19027 14.3521 7.76499 14.1141 8.18865 13.6902C8.61232 13.2666 8.85035 12.6917 8.85022 12.0925C8.85004 11.4935 8.61182 10.9188 8.18781 10.4953C7.76396 10.0717 7.18908 9.83396 6.58982 9.83432C5.99075 9.83466 5.41603 10.073 4.99273 10.497C4.56923 10.921 4.33169 11.4959 4.33222 12.0951C4.33274 12.6939 4.57113 13.2678 4.99463 13.691C5.41813 14.1143 5.99247 14.352 6.59124 14.3521L6.5912 14.3521ZM11.9048 10.5847C12.3048 10.5847 12.6885 10.7435 12.9715 11.0264C13.2544 11.3092 13.4135 11.6929 13.4137 12.093C13.4137 12.493 13.2551 12.8767 12.9722 13.1599C12.6895 13.4429 12.3058 13.602 11.9059 13.6022C11.5057 13.6026 11.122 13.4439 10.8388 13.1613C10.5556 12.8786 10.3963 12.4951 10.3959 12.0951C10.3957 11.6948 10.5547 11.3108 10.8376 11.0276C11.1206 10.7444 11.5045 10.5851 11.9048 10.5848L11.9048 10.5847ZM11.9048 14.3521C12.5041 14.3523 13.0788 14.1142 13.5026 13.6906C13.9263 13.2669 14.1643 12.6922 14.1643 12.093C14.1641 11.4938 13.9261 10.9191 13.5021 10.4955C13.0782 10.0718 12.5035 9.83392 11.9043 9.83427C11.305 9.83462 10.7303 10.073 10.3068 10.497C9.88333 10.921 9.6458 11.4959 9.64633 12.0951C9.64685 12.6936 9.88507 13.2676 10.3086 13.6907C10.7321 14.114 11.306 14.3519 11.9048 14.3521V14.3521ZM17.2184 10.5847C17.6186 10.5846 18.0023 10.7432 18.2855 11.026C18.5685 11.3087 18.7279 11.6924 18.728 12.0923C18.7284 12.4925 18.5697 12.8763 18.2871 13.1595C18.0042 13.4427 17.6207 13.6019 17.2205 13.6022C16.8204 13.6025 16.4365 13.4441 16.1533 13.1614C15.8701 12.8788 15.7108 12.4952 15.7104 12.0951C15.7104 11.695 15.869 11.3111 16.1519 11.0279C16.4346 10.7447 16.8181 10.5853 17.2184 10.5847V10.5847ZM17.2184 14.3521C17.8177 14.3523 18.3924 14.1142 18.8162 13.6906C19.2399 13.2669 19.4779 12.6922 19.4779 12.093C19.4778 11.4938 19.2397 10.9191 18.8159 10.4955C18.3919 10.0718 17.8172 9.83392 17.2179 9.83427C16.6186 9.83462 16.0439 10.073 15.6205 10.497C15.197 10.921 14.9594 11.4959 14.9599 12.0951C14.9605 12.6936 15.1987 13.2676 15.6222 13.6907C16.0457 14.114 16.6197 14.3519 17.2184 14.3521ZM0.0344267 22.9244C-0.0178193 23.117 -0.000172808 23.3218 0.0839049 23.5026C0.168153 23.6835 0.313474 23.8288 0.494428 23.9129C0.67521 23.9971 0.88004 24.0146 1.0726 23.9625L6.29942 22.5629H6.29924C8.52677 23.7612 11.0752 24.2276 13.5823 23.8961C16.465 23.5114 19.1103 22.0936 21.0262 19.9058C22.9423 17.718 23.999 14.9091 24 12.0008C24.0002 9.62723 23.2964 7.30703 21.9778 5.33367C20.6593 3.36004 18.7848 1.82179 16.592 0.913454C14.3989 0.00507195 11.9861 -0.232431 9.65792 0.230662C7.3299 0.693931 5.19152 1.83703 3.51303 3.51558C1.64188 5.37401 0.441951 7.80191 0.102177 10.417C-0.225825 12.9233 0.240403 15.4695 1.43545 17.6971L0.0348606 22.9237L0.0344267 22.9244Z",
        fill: "black"
      }))));
    })));
  };

  var _templateObject;
  var trpcReact = createTRPCReact();
  function Dashboard() {
    var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeConsultation = _useState2[0],
      setActiveConsultation = _useState2[1];
    var resetActiveConsultation = function resetActiveConsultation() {
      return setActiveConsultation(null);
    };
    var _useState3 = React.useState(function () {
        return new QueryClient();
      }),
      _useState4 = _slicedToArray(_useState3, 1),
      queryClient = _useState4[0];
    var _useState5 = React.useState(function () {
        var _AdminJS$env$NEXT_PUB;
        return trpcReact.createClient({
          transformer: superjson,
          links: [wsLink({
            client: createWSClient({
              url: (_AdminJS$env$NEXT_PUB = AdminJS.env.NEXT_PUBLIC_WS_URL) !== null && _AdminJS$env$NEXT_PUB !== void 0 ? _AdminJS$env$NEXT_PUB : ''
            })
          })]
        });
      }),
      _useState6 = _slicedToArray(_useState5, 1),
      trpcClient = _useState6[0];
    var onJoinConsultation = function onJoinConsultation(consultation) {
      setActiveConsultation(consultation);
    };
    return /*#__PURE__*/React__namespace.createElement(trpcReact.Provider, {
      client: trpcClient,
      queryClient: queryClient
    }, /*#__PURE__*/React__namespace.createElement(QueryClientProvider, {
      client: queryClient
    }, /*#__PURE__*/React__namespace.createElement(Container, {
      variant: "grey"
    }, /*#__PURE__*/React__namespace.createElement(ChatList, {
      onJoin: onJoinConsultation
    }), activeConsultation ? /*#__PURE__*/React__namespace.createElement(Chat, {
      onClose: resetActiveConsultation,
      activeConsultation: activeConsultation
    }) : null)));
  }
  var Container = styled__default["default"](designSystem.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  max-height: 90vh;\n  gap: 10px;\n  display: grid;\n  grid-template-columns: 2fr 4fr;\n  padding-bottom: 24px;\n"])));

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Component0 = UploadPhoto;
  AdminJS.UserComponents.Component1 = Dashboard;
  AdminJS.UserComponents.Dashboard = Dashboard;

})(React, AdminJSDesignSystem, styled, AdminJS);