(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rEditable = __webpack_require__(4);
	
	var _rEditable2 = _interopRequireDefault(_rEditable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import REditable from '../src'
	
	
	var alertMsg = function alertMsg(msg) {
	  return alert(msg);
	};
	
	var Container = function (_React$Component) {
	  _inherits(Container, _React$Component);
	
	  function Container(props) {
	    _classCallCheck(this, Container);
	
	    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));
	
	    _this.state = {
	      label: 'Initial value',
	      dropValue: ''
	    };
	    return _this;
	  }
	
	  _createClass(Container, [{
	    key: 'changing',
	    value: function changing() {
	      this.setState({
	        label: Math.random().toString(),
	        dropValue: myOpt[Math.ceil(5 * Math.random()) - 1].value
	      });
	    }
	  }, {
	    key: 'changeDropValue',
	    value: function changeDropValue(e) {
	      this.setState({ dropValue: e.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Within a container, click changes value via props'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.changing.bind(this) },
	          'Randomize Both!'
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_rEditable2.default, { value: this.state.label }),
	        '\u2003 \u2003',
	        _react2.default.createElement(_rEditable2.default, { type: 'dropdown', value: this.state.dropValue, options: myOpt, onChange: this.changeDropValue.bind(this) })
	      );
	    }
	  }]);
	
	  return Container;
	}(_react2.default.Component);
	
	var REInput = _react2.default.createElement(
	  'div',
	  { id: 're-input' },
	  _react2.default.createElement(
	    'h3',
	    null,
	    'Input type'
	  ),
	  _react2.default.createElement(
	    'div',
	    { className: 'examples' },
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Simple input:'
	    ),
	    _react2.default.createElement(_rEditable2.default, { value: 'Basic' }),
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Triggering function onChange:'
	    ),
	    _react2.default.createElement(_rEditable2.default, { value: 'Change me', onChange: alertMsg.bind(null, 'You changed me!') })
	  )
	);
	var myOpt = [{ name: 'Apple', value: 'apple' }, { name: 'Pear', value: 'pear' }, { name: 'Grape', value: 'grape' }, { name: 'Banana', value: 'banana' }, { name: 'Orange', value: 'orange' }];
	var REDropdown = _react2.default.createElement(
	  'div',
	  { id: 're-dropdown' },
	  _react2.default.createElement(
	    'h3',
	    null,
	    'Dropdown type'
	  ),
	  _react2.default.createElement(
	    'div',
	    { className: 'examples' },
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Simple dropdown:'
	    ),
	    _react2.default.createElement(_rEditable2.default, { type: 'dropdown', options: myOpt }),
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Triggering function onChange:'
	    ),
	    _react2.default.createElement(_rEditable2.default, { type: 'dropdown', onChange: alertMsg.bind(null, 'You changed dropdown'), options: myOpt })
	  )
	);
	
	//{(REInput)}
	//{(REDropdown)}
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  REInput,
	  REDropdown,
	  _react2.default.createElement(Container, null)
	), document.querySelector('div#app-container'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (t, n) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = n(__webpack_require__(2)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["r-editable"] = n(require("react")) : t["r-editable"] = n(t.React);
	}(undefined, function (t) {
	  return function (t) {
	    function n(r) {
	      if (e[r]) return e[r].exports;var o = e[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports;
	    }var e = {};return n.m = t, n.c = e, n.p = "", n(0);
	  }([function (t, n, e) {
	    t.exports = e(1);
	  }, function (t, n, e) {
	    "use strict";
	    function r(t) {
	      return t && t.__esModule ? t : { default: t };
	    }function o(t, n) {
	      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
	    }function u(t, n) {
	      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !n || "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && "function" != typeof n ? t : n;
	    }function i(t, n) {
	      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : _typeof(n)));t.prototype = Object.create(n && n.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
	    }Object.defineProperty(n, "__esModule", { value: !0 });var a = Object.assign || function (t) {
	      for (var n = 1; n < arguments.length; n++) {
	        var e = arguments[n];for (var r in e) {
	          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
	        }
	      }return t;
	    },
	        c = function () {
	      function t(t, n) {
	        for (var e = 0; e < n.length; e++) {
	          var r = n[e];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	        }
	      }return function (n, e, r) {
	        return e && t(n.prototype, e), r && t(n, r), n;
	      };
	    }(),
	        s = e(2),
	        f = r(s),
	        p = e(3),
	        l = r(p),
	        v = function (t) {
	      function n(t) {
	        o(this, n);var e = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));return e.state = { isEditing: !1, value: t.value || void 0, type: t.type || "input", placeholder: t.placeholder || "Select one" }, Array("_onClick", "_onChange", "_onBlur", "_onKeyInput").forEach(function (t) {
	          return e[t] = e[t].bind(e);
	        }), e;
	      }return i(n, t), c(n, [{ key: "render", value: function value() {
	          return this.state.isEditing ? this.renderEditable() : f.default.createElement("span", { className: "r-editable", onClick: this._onClick }, this.renderValue());
	        } }, { key: "_onChange", value: function value(t) {
	          this.setState({ value: t.target.value }), this.props.onChange && this.props.onChange.call(null, t.target);
	        } }, { key: "_onClick", value: function value(t) {
	          this.setState({ isEditing: !0 });
	        } }, { key: "_onBlur", value: function value(t) {
	          this.setState({ isEditing: !1 });
	        } }, { key: "renderValue", value: function value() {
	          var t = this;switch (this.state.type) {case "dropdown":
	              return this.state.value ? this.props.options.filter(function (n) {
	                return n.value === t.state.value;
	              })[0].name : f.default.createElement("span", { className: "empty-placeholder" }, "Empty");default:
	              return this.state.value;}
	        } }, { key: "renderEditable", value: function value() {
	          switch (this.state.type) {case "dropdown":
	              return this.createDropdown.call(this);case "input":
	              return this.createInput.call(this);}
	        } }, { key: "createDropdown", value: function value() {
	          var t = (0, l.default)(this.props, ["onChange", "value", "onBlur", "onKeyInput", "options"]);return f.default.createElement("select", a({}, t, { className: "r-editable", value: this.state.value, onChange: this._onChange, onBlur: this._onBlur }), this.props.options.map(function (t) {
	            return f.default.createElement("option", { key: t.value, value: t.value }, t.name);
	          }));
	        } }, { key: "_onKeyInput", value: function value(t) {
	          "Enter" === t.key && this.setState({ isEditing: !1 });
	        } }, { key: "createInput", value: function value() {
	          var t = (0, l.default)(this.props, ["onChange", "value", "onBlur", "onKeyInput"]);return f.default.createElement("input", a({ autoFocus: !0 }, t, { className: "r-editable", type: "text", onBlur: this._onBlur, onChange: this._onChange, value: this.state.value, onKeyPress: this._onKeyInput }));
	        } }, { key: "componentWillReceiveProps", value: function value(t) {
	          this.setState({ value: t.value });
	        } }]), n;
	    }(f.default.Component);n.default = v;
	  }, function (n, e) {
	    n.exports = t;
	  }, function (t, n, e) {
	    var r = e(4),
	        o = e(5),
	        u = e(55),
	        i = e(59),
	        a = e(75),
	        c = e(97),
	        s = i(function (t, n) {
	      return null == t ? {} : (n = r(n, c), u(t, o(a(t), n)));
	    });t.exports = s;
	  }, function (t, n) {
	    function e(t, n) {
	      for (var e = -1, r = null == t ? 0 : t.length, o = Array(r); ++e < r;) {
	        o[e] = n(t[e], e, t);
	      }return o;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t, n, e, r) {
	      var p = -1,
	          l = u,
	          v = !0,
	          h = t.length,
	          y = [],
	          d = n.length;if (!h) return y;e && (n = a(n, c(e))), r ? (l = i, v = !1) : n.length >= f && (l = s, v = !1, n = new o(n));t: for (; ++p < h;) {
	        var b = t[p],
	            _ = null == e ? b : e(b);if (b = r || 0 !== b ? b : 0, v && _ === _) {
	          for (var x = d; x--;) {
	            if (n[x] === _) continue t;
	          }y.push(b);
	        } else l(n, _, r) || y.push(b);
	      }return y;
	    }var o = e(6),
	        u = e(47),
	        i = e(52),
	        a = e(4),
	        c = e(53),
	        s = e(54),
	        f = 200;t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = -1,
	          e = null == t ? 0 : t.length;for (this.__data__ = new o(); ++n < e;) {
	        this.add(t[n]);
	      }
	    }var o = e(7),
	        u = e(45),
	        i = e(46);r.prototype.add = r.prototype.push = u, r.prototype.has = i, t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = -1,
	          e = null == t ? 0 : t.length;for (this.clear(); ++n < e;) {
	        var r = t[n];this.set(r[0], r[1]);
	      }
	    }var o = e(8),
	        u = e(39),
	        i = e(42),
	        a = e(43),
	        c = e(44);r.prototype.clear = o, r.prototype.delete = u, r.prototype.get = i, r.prototype.has = a, r.prototype.set = c, t.exports = r;
	  }, function (t, n, e) {
	    function r() {
	      this.size = 0, this.__data__ = { hash: new o(), map: new (i || u)(), string: new o() };
	    }var o = e(9),
	        u = e(30),
	        i = e(38);t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = -1,
	          e = null == t ? 0 : t.length;for (this.clear(); ++n < e;) {
	        var r = t[n];this.set(r[0], r[1]);
	      }
	    }var o = e(10),
	        u = e(26),
	        i = e(27),
	        a = e(28),
	        c = e(29);r.prototype.clear = o, r.prototype.delete = u, r.prototype.get = i, r.prototype.has = a, r.prototype.set = c, t.exports = r;
	  }, function (t, n, e) {
	    function r() {
	      this.__data__ = o ? o(null) : {}, this.size = 0;
	    }var o = e(11);t.exports = r;
	  }, function (t, n, e) {
	    var r = e(12),
	        o = r(Object, "create");t.exports = o;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = u(t, n);return o(e) ? e : void 0;
	    }var o = e(13),
	        u = e(25);t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      if (!i(t) || u(t)) return !1;var n = o(t) ? h : s;return n.test(a(t));
	    }var o = e(14),
	        u = e(22),
	        i = e(21),
	        a = e(24),
	        c = /[\\^$.*+?()[\]{}|]/g,
	        s = /^\[object .+?Constructor\]$/,
	        f = Function.prototype,
	        p = Object.prototype,
	        l = f.toString,
	        v = p.hasOwnProperty,
	        h = RegExp("^" + l.call(v).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      if (!u(t)) return !1;var n = o(t);return n == a || n == c || n == i || n == s;
	    }var o = e(15),
	        u = e(21),
	        i = "[object AsyncFunction]",
	        a = "[object Function]",
	        c = "[object GeneratorFunction]",
	        s = "[object Proxy]";t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      return null == t ? void 0 === t ? c : a : (t = Object(t), s && s in t ? u(t) : i(t));
	    }var o = e(16),
	        u = e(19),
	        i = e(20),
	        a = "[object Null]",
	        c = "[object Undefined]",
	        s = o ? o.toStringTag : void 0;t.exports = r;
	  }, function (t, n, e) {
	    var r = e(17),
	        o = r.Symbol;t.exports = o;
	  }, function (t, n, e) {
	    var r = e(18),
	        o = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
	        u = r || o || Function("return this")();t.exports = u;
	  }, function (t, n) {
	    (function (n) {
	      var e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n && n.Object === Object && n;t.exports = e;
	    }).call(n, function () {
	      return this;
	    }());
	  }, function (t, n, e) {
	    function r(t) {
	      var n = i.call(t, c),
	          e = t[c];try {
	        t[c] = void 0;var r = !0;
	      } catch (t) {}var o = a.call(t);return r && (n ? t[c] = e : delete t[c]), o;
	    }var o = e(16),
	        u = Object.prototype,
	        i = u.hasOwnProperty,
	        a = u.toString,
	        c = o ? o.toStringTag : void 0;t.exports = r;
	  }, function (t, n) {
	    function e(t) {
	      return o.call(t);
	    }var r = Object.prototype,
	        o = r.toString;t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      var n = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == n || "function" == n);
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      return !!u && u in t;
	    }var o = e(23),
	        u = function () {
	      var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
	    }();t.exports = r;
	  }, function (t, n, e) {
	    var r = e(17),
	        o = r["__core-js_shared__"];t.exports = o;
	  }, function (t, n) {
	    function e(t) {
	      if (null != t) {
	        try {
	          return o.call(t);
	        } catch (t) {}try {
	          return t + "";
	        } catch (t) {}
	      }return "";
	    }var r = Function.prototype,
	        o = r.toString;t.exports = e;
	  }, function (t, n) {
	    function e(t, n) {
	      return null == t ? void 0 : t[n];
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      var n = this.has(t) && delete this.__data__[t];return this.size -= n ? 1 : 0, n;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = this.__data__;if (o) {
	        var e = n[t];return e === u ? void 0 : e;
	      }return a.call(n, t) ? n[t] : void 0;
	    }var o = e(11),
	        u = "__lodash_hash_undefined__",
	        i = Object.prototype,
	        a = i.hasOwnProperty;t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = this.__data__;return o ? void 0 !== n[t] : i.call(n, t);
	    }var o = e(11),
	        u = Object.prototype,
	        i = u.hasOwnProperty;t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = this.__data__;return this.size += this.has(t) ? 0 : 1, e[t] = o && void 0 === n ? u : n, this;
	    }var o = e(11),
	        u = "__lodash_hash_undefined__";t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = -1,
	          e = null == t ? 0 : t.length;for (this.clear(); ++n < e;) {
	        var r = t[n];this.set(r[0], r[1]);
	      }
	    }var o = e(31),
	        u = e(32),
	        i = e(35),
	        a = e(36),
	        c = e(37);r.prototype.clear = o, r.prototype.delete = u, r.prototype.get = i, r.prototype.has = a, r.prototype.set = c, t.exports = r;
	  }, function (t, n) {
	    function e() {
	      this.__data__ = [], this.size = 0;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = this.__data__,
	          e = o(n, t);if (e < 0) return !1;var r = n.length - 1;return e == r ? n.pop() : i.call(n, e, 1), --this.size, !0;
	    }var o = e(33),
	        u = Array.prototype,
	        i = u.splice;t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n) {
	      for (var e = t.length; e--;) {
	        if (o(t[e][0], n)) return e;
	      }return -1;
	    }var o = e(34);t.exports = r;
	  }, function (t, n) {
	    function e(t, n) {
	      return t === n || t !== t && n !== n;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = this.__data__,
	          e = o(n, t);return e < 0 ? void 0 : n[e][1];
	    }var o = e(33);t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      return o(this.__data__, t) > -1;
	    }var o = e(33);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = this.__data__,
	          r = o(e, t);return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
	    }var o = e(33);t.exports = r;
	  }, function (t, n, e) {
	    var r = e(12),
	        o = e(17),
	        u = r(o, "Map");t.exports = u;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = o(this, t).delete(t);return this.size -= n ? 1 : 0, n;
	    }var o = e(40);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = t.__data__;return o(n) ? e["string" == typeof n ? "string" : "hash"] : e.map;
	    }var o = e(41);t.exports = r;
	  }, function (t, n) {
	    function e(t) {
	      var n = typeof t === "undefined" ? "undefined" : _typeof(t);return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      return o(this, t).get(t);
	    }var o = e(40);t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      return o(this, t).has(t);
	    }var o = e(40);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = o(this, t),
	          r = e.size;return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
	    }var o = e(40);t.exports = r;
	  }, function (t, n) {
	    function e(t) {
	      return this.__data__.set(t, r), this;
	    }var r = "__lodash_hash_undefined__";t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      return this.__data__.has(t);
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = null == t ? 0 : t.length;return !!e && o(t, n, 0) > -1;
	    }var o = e(48);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n, e) {
	      return n === n ? i(t, n, e) : o(t, u, e);
	    }var o = e(49),
	        u = e(50),
	        i = e(51);t.exports = r;
	  }, function (t, n) {
	    function e(t, n, e, r) {
	      for (var o = t.length, u = e + (r ? 1 : -1); r ? u-- : ++u < o;) {
	        if (n(t[u], u, t)) return u;
	      }return -1;
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      return t !== t;
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t, n, e) {
	      for (var r = e - 1, o = t.length; ++r < o;) {
	        if (t[r] === n) return r;
	      }return -1;
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t, n, e) {
	      for (var r = -1, o = null == t ? 0 : t.length; ++r < o;) {
	        if (e(n, t[r])) return !0;
	      }return !1;
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      return function (n) {
	        return t(n);
	      };
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t, n) {
	      return t.has(n);
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t, n) {
	      return t = Object(t), o(t, n, function (n, e) {
	        return e in t;
	      });
	    }var o = e(56);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n, e) {
	      for (var r = -1, u = n.length, i = {}; ++r < u;) {
	        var a = n[r],
	            c = t[a];e(c, a) && o(i, a, c);
	      }return i;
	    }var o = e(57);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n, e) {
	      "__proto__" == n && o ? o(t, n, { configurable: !0, enumerable: !0, value: e, writable: !0 }) : t[n] = e;
	    }var o = e(58);t.exports = r;
	  }, function (t, n, e) {
	    var r = e(12),
	        o = function () {
	      try {
	        var t = r(Object, "defineProperty");return t({}, "", {}), t;
	      } catch (t) {}
	    }();t.exports = o;
	  }, function (t, n, e) {
	    function r(t) {
	      return i(u(t, void 0, o), t + "");
	    }var o = e(60),
	        u = e(68),
	        i = e(70);t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      var n = null == t ? 0 : t.length;return n ? o(t, 1) : [];
	    }var o = e(61);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n, e, i, a) {
	      var c = -1,
	          s = t.length;for (e || (e = u), a || (a = []); ++c < s;) {
	        var f = t[c];n > 0 && e(f) ? n > 1 ? r(f, n - 1, e, i, a) : o(a, f) : i || (a[a.length] = f);
	      }return a;
	    }var o = e(62),
	        u = e(63);t.exports = r;
	  }, function (t, n) {
	    function e(t, n) {
	      for (var e = -1, r = n.length, o = t.length; ++e < r;) {
	        t[o + e] = n[e];
	      }return t;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      return i(t) || u(t) || !!(a && t && t[a]);
	    }var o = e(16),
	        u = e(64),
	        i = e(67),
	        a = o ? o.isConcatSpreadable : void 0;t.exports = r;
	  }, function (t, n, e) {
	    var r = e(65),
	        o = e(66),
	        u = Object.prototype,
	        i = u.hasOwnProperty,
	        a = u.propertyIsEnumerable,
	        c = r(function () {
	      return arguments;
	    }()) ? r : function (t) {
	      return o(t) && i.call(t, "callee") && !a.call(t, "callee");
	    };t.exports = c;
	  }, function (t, n, e) {
	    function r(t) {
	      return u(t) && o(t) == i;
	    }var o = e(15),
	        u = e(66),
	        i = "[object Arguments]";t.exports = r;
	  }, function (t, n) {
	    function e(t) {
	      return null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	    }t.exports = e;
	  }, function (t, n) {
	    var e = Array.isArray;t.exports = e;
	  }, function (t, n, e) {
	    function r(t, n, e) {
	      return n = u(void 0 === n ? t.length - 1 : n, 0), function () {
	        for (var r = arguments, i = -1, a = u(r.length - n, 0), c = Array(a); ++i < a;) {
	          c[i] = r[n + i];
	        }i = -1;for (var s = Array(n + 1); ++i < n;) {
	          s[i] = r[i];
	        }return s[n] = e(c), o(t, this, s);
	      };
	    }var o = e(69),
	        u = Math.max;t.exports = r;
	  }, function (t, n) {
	    function e(t, n, e) {
	      switch (e.length) {case 0:
	          return t.call(n);case 1:
	          return t.call(n, e[0]);case 2:
	          return t.call(n, e[0], e[1]);case 3:
	          return t.call(n, e[0], e[1], e[2]);}return t.apply(n, e);
	    }t.exports = e;
	  }, function (t, n, e) {
	    var r = e(71),
	        o = e(74),
	        u = o(r);t.exports = u;
	  }, function (t, n, e) {
	    var r = e(72),
	        o = e(58),
	        u = e(73),
	        i = o ? function (t, n) {
	      return o(t, "toString", { configurable: !0, enumerable: !1, value: r(n), writable: !0 });
	    } : u;t.exports = i;
	  }, function (t, n) {
	    function e(t) {
	      return function () {
	        return t;
	      };
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      return t;
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      var n = 0,
	          e = 0;return function () {
	        var i = u(),
	            a = o - (i - e);if (e = i, a > 0) {
	          if (++n >= r) return arguments[0];
	        } else n = 0;return t.apply(void 0, arguments);
	      };
	    }var r = 800,
	        o = 16,
	        u = Date.now;t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      return o(t, i, u);
	    }var o = e(76),
	        u = e(77),
	        i = e(82);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n, e) {
	      var r = n(t);return u(t) ? r : o(r, e(t));
	    }var o = e(62),
	        u = e(67);t.exports = r;
	  }, function (t, n, e) {
	    var r = e(62),
	        o = e(78),
	        u = e(80),
	        i = e(81),
	        a = Object.getOwnPropertySymbols,
	        c = a ? function (t) {
	      for (var n = []; t;) {
	        r(n, u(t)), t = o(t);
	      }return n;
	    } : i;t.exports = c;
	  }, function (t, n, e) {
	    var r = e(79),
	        o = r(Object.getPrototypeOf, Object);t.exports = o;
	  }, function (t, n) {
	    function e(t, n) {
	      return function (e) {
	        return t(n(e));
	      };
	    }t.exports = e;
	  }, function (t, n, e) {
	    var r = e(79),
	        o = e(81),
	        u = Object.getOwnPropertySymbols,
	        i = u ? r(u, Object) : o;t.exports = i;
	  }, function (t, n) {
	    function e() {
	      return [];
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      return i(t) ? o(t, !0) : u(t);
	    }var o = e(83),
	        u = e(93),
	        i = e(96);t.exports = r;
	  }, function (t, n, e) {
	    function r(t, n) {
	      var e = i(t),
	          r = !e && u(t),
	          f = !e && !r && a(t),
	          l = !e && !r && !f && s(t),
	          v = e || r || f || l,
	          h = v ? o(t.length, String) : [],
	          y = h.length;for (var d in t) {
	        !n && !p.call(t, d) || v && ("length" == d || f && ("offset" == d || "parent" == d) || l && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || c(d, y)) || h.push(d);
	      }return h;
	    }var o = e(84),
	        u = e(64),
	        i = e(67),
	        a = e(85),
	        c = e(88),
	        s = e(89),
	        f = Object.prototype,
	        p = f.hasOwnProperty;t.exports = r;
	  }, function (t, n) {
	    function e(t, n) {
	      for (var e = -1, r = Array(t); ++e < t;) {
	        r[e] = n(e);
	      }return r;
	    }t.exports = e;
	  }, function (t, n, e) {
	    (function (t) {
	      var r = e(17),
	          o = e(87),
	          u = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n && !n.nodeType && n,
	          i = u && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && !t.nodeType && t,
	          a = i && i.exports === u,
	          c = a ? r.Buffer : void 0,
	          s = c ? c.isBuffer : void 0,
	          f = s || o;t.exports = f;
	    }).call(n, e(86)(t));
	  }, function (t, n) {
	    t.exports = function (t) {
	      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
	    };
	  }, function (t, n) {
	    function e() {
	      return !1;
	    }t.exports = e;
	  }, function (t, n) {
	    function e(t, n) {
	      return n = null == n ? r : n, !!n && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < n;
	    }var r = 9007199254740991,
	        o = /^(?:0|[1-9]\d*)$/;t.exports = e;
	  }, function (t, n, e) {
	    var r = e(90),
	        o = e(53),
	        u = e(92),
	        i = u && u.isTypedArray,
	        a = i ? o(i) : r;t.exports = a;
	  }, function (t, n, e) {
	    function r(t) {
	      return i(t) && u(t.length) && !!B[o(t)];
	    }var o = e(15),
	        u = e(91),
	        i = e(66),
	        a = "[object Arguments]",
	        c = "[object Array]",
	        s = "[object Boolean]",
	        f = "[object Date]",
	        p = "[object Error]",
	        l = "[object Function]",
	        v = "[object Map]",
	        h = "[object Number]",
	        y = "[object Object]",
	        d = "[object RegExp]",
	        b = "[object Set]",
	        _ = "[object String]",
	        x = "[object WeakMap]",
	        g = "[object ArrayBuffer]",
	        j = "[object DataView]",
	        O = "[object Float32Array]",
	        m = "[object Float64Array]",
	        w = "[object Int8Array]",
	        P = "[object Int16Array]",
	        A = "[object Int32Array]",
	        E = "[object Uint8Array]",
	        S = "[object Uint8ClampedArray]",
	        k = "[object Uint16Array]",
	        C = "[object Uint32Array]",
	        B = {};B[O] = B[m] = B[w] = B[P] = B[A] = B[E] = B[S] = B[k] = B[C] = !0, B[a] = B[c] = B[g] = B[s] = B[j] = B[f] = B[p] = B[l] = B[v] = B[h] = B[y] = B[d] = B[b] = B[_] = B[x] = !1, t.exports = r;
	  }, function (t, n) {
	    function e(t) {
	      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r;
	    }var r = 9007199254740991;t.exports = e;
	  }, function (t, n, e) {
	    (function (t) {
	      var r = e(18),
	          o = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n && !n.nodeType && n,
	          u = o && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && !t.nodeType && t,
	          i = u && u.exports === o,
	          a = i && r.process,
	          c = function () {
	        try {
	          return a && a.binding("util");
	        } catch (t) {}
	      }();t.exports = c;
	    }).call(n, e(86)(t));
	  }, function (t, n, e) {
	    function r(t) {
	      if (!o(t)) return i(t);var n = u(t),
	          e = [];for (var r in t) {
	        ("constructor" != r || !n && c.call(t, r)) && e.push(r);
	      }return e;
	    }var o = e(21),
	        u = e(94),
	        i = e(95),
	        a = Object.prototype,
	        c = a.hasOwnProperty;t.exports = r;
	  }, function (t, n) {
	    function e(t) {
	      var n = t && t.constructor,
	          e = "function" == typeof n && n.prototype || r;return t === e;
	    }var r = Object.prototype;t.exports = e;
	  }, function (t, n) {
	    function e(t) {
	      var n = [];if (null != t) for (var e in Object(t)) {
	        n.push(e);
	      }return n;
	    }t.exports = e;
	  }, function (t, n, e) {
	    function r(t) {
	      return null != t && u(t.length) && !o(t);
	    }var o = e(14),
	        u = e(91);t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      if ("string" == typeof t || o(t)) return t;var n = t + "";return "0" == n && 1 / t == -u ? "-0" : n;
	    }var o = e(98),
	        u = 1 / 0;t.exports = r;
	  }, function (t, n, e) {
	    function r(t) {
	      return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || u(t) && o(t) == i;
	    }var o = e(15),
	        u = e(66),
	        i = "[object Symbol]";t.exports = r;
	  }]);
	});
	//# sourceMappingURL=r-editable.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=re-example.js.map