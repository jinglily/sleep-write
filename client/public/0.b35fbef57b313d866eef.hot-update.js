webpackHotUpdate(0,{72:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));\n\n    _this.state = {\n      title: ''\n    };\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      axios.get('http://localhost:4000/').then(function (res) {\n        return console.log(res);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        'hello Home'\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nexports.default = Home;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Home.js\n// module id = 72\n// module chunks = 0\n//# sourceURL=webpack:///./src/Home.js?")},114:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(109);\n\nvar _Home = __webpack_require__(72);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Work = __webpack_require__(73);\n\nvar _Work2 = _interopRequireDefault(_Work);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/home' },\n          'home'\n        ),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/work' },\n          'work'\n        ),\n        this.props.children\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/App.js\n// module id = 114\n// module chunks = 0\n//# sourceURL=webpack:///./src/App.js?")},116:function(module,exports,__webpack_require__){eval('\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(80);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouter = __webpack_require__(109);\n\nvar _axios = __webpack_require__(247);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _App = __webpack_require__(114);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(72);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Work = __webpack_require__(73);\n\nvar _Work2 = _interopRequireDefault(_Work);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Routers = function (_Component) {\n  _inherits(Routers, _Component);\n\n  function Routers() {\n    _classCallCheck(this, Routers);\n\n    return _possibleConstructorReturn(this, (Routers.__proto__ || Object.getPrototypeOf(Routers)).apply(this, arguments));\n  }\n\n  _createClass(Routers, [{\n    key: \'render\',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouter.Router,\n        { history: _reactRouter.browserHistory },\n        _react2.default.createElement(\n          _reactRouter.Route,\n          { path: \'/\', component: _App2.default },\n          _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),\n          _react2.default.createElement(_reactRouter.Route, { path: \'/Work\', component: _Work2.default })\n        )\n      );\n    }\n  }]);\n\n  return Routers;\n}(_react.Component);\n\nexports.default = Routers;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/routes.js\n// module id = 116\n// module chunks = 0\n//# sourceURL=webpack:///./src/routes.js?')}});