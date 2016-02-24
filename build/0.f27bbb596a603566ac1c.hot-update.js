webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(5), RootInstanceProvider = __webpack_require__(13), ReactMount = __webpack_require__(15), React = __webpack_require__(69); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(69);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(171);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _helloJs = __webpack_require__(213);

	var _helloJs2 = _interopRequireDefault(_helloJs);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2['default'].createElement('div', { className: 'nav' }, _react2['default'].createElement(_reactRouter.Link, { to: 'app', className: 'homelink' }, 'webpack  '), _react2['default'].createElement(_reactRouter.Link, { to: 'hello', className: 'hellolink' }, '  Say Hello react'), _react2['default'].createElement(_reactRouter.RouteHandler, null));
	  }
	});
	var routes = _react2['default'].createElement(_reactRouter.Route, { name: 'app', path: '/', handler: App }, _react2['default'].createElement(_reactRouter.Route, { name: 'hello', path: '/hello', handler: _helloJs2['default'] }));
	_reactRouter2['default'].run(routes, function (Handler) {
	  _react2['default'].render(_react2['default'].createElement(Handler, null), document.body);
	});
	/* this is the importTant part */

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(214); if (makeExportsHot(module, __webpack_require__(69))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})