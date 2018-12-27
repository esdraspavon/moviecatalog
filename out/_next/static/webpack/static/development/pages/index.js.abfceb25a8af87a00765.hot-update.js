webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/esdras/Documentos/moviecatalog/components/Layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import NProgress from'nprogress';
// import Router from'next/router';
// Router.onRouteChangeStart = (url) => {
//   NProgress.start()
// }
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2266532552",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-2266532552",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2266532552",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-2266532552",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2266532552",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "MovieCatalog")), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3510556033",
        css: "header.jsx-2266532552{color:#fff;background:#8756ca;padding:15px;text-align:center;}header.jsx-2266532552 a.jsx-2266532552{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR21CLEFBTUMsV0FMYSxBQU1ILG1CQUxILGFBQ0ssa0JBQ3JCLEFBSUoiLCJmaWxlIjoiL2hvbWUvZXNkcmFzL0RvY3VtZW50b3MvbW92aWVjYXRhbG9nL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG4vLyBpbXBvcnQgTlByb2dyZXNzIGZyb20nbnByb2dyZXNzJztcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSduZXh0L3JvdXRlcic7XG5cbi8vIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XG4vLyAgIE5Qcm9ncmVzcy5zdGFydCgpXG4vLyB9XG4vLyBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuLy8gUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXI+PGE+TW92aWVDYXRhbG9nPC9hPjwvaGVhZGVyPlxuICAgICAgey8qIDxoZWFkZXI+PExpbmsgaHJlZj1cIi9cIj48YT5Qb2RjYXN0czwvYT48L0xpbms+PC9oZWFkZXI+ICovfVxuXG4gICAgICB7IGNoaWxkcmVuIH1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojODc1NmNhO1xuICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgIGhlYWRlciBhe1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xuI25wcm9ncmVzcyB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jbnByb2dyZXNzIC5iYXIge1xuICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cbiNucHJvZ3Jlc3MgLnBlZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gIG9wYWNpdHk6IDEuMDtcblxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xufVxuXG4vKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xuI25wcm9ncmVzcyAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMzE7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbiNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbkBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59Il19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Layout.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "275022944",
        css: "body{margin:0;font-family:system-ui;background:white;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3lCLEFBR21CLEFBTUksQUFJSixBQWFGLEFBZUEsQUFRSCxBQWNLLEFBTUUsQUFJbUIsQUFDRSxBQUdWLEFBQ0UsU0ExRUYsRUE4Q2pCLEdBdkJNLEFBZUgsRUEzQkEsQUFpREcsRUFNcEIsRUE1REEsR0F5Q3dCLE1BUlQsRUF0Q1csQUFXWCxBQXlEeUIsQ0E3QzVCLENBOEM4QixDQVQxQyxRQXBDYyxBQWVILEVBM0JILENBb0N1QixHQS9DekIsRUFZRyxDQTJCSSxHQWZDLEdBVkQsS0EwQmIsSUFmeUMsRUFWNUIsTUFpQ1csS0FoQ3hCLEVBdURnQyxNQUNFLFNBdkJULFFBdkJYLFlBRXdDLEdBc0JsQyxrQkFFd0MsOEJBdkJOLDRCQXdCTSxtQkF2Qk4seUZBd0J0RCxvREF2QkEiLCJmaWxlIjoiL2hvbWUvZXNkcmFzL0RvY3VtZW50b3MvbW92aWVjYXRhbG9nL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG4vLyBpbXBvcnQgTlByb2dyZXNzIGZyb20nbnByb2dyZXNzJztcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSduZXh0L3JvdXRlcic7XG5cbi8vIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XG4vLyAgIE5Qcm9ncmVzcy5zdGFydCgpXG4vLyB9XG4vLyBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuLy8gUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXI+PGE+TW92aWVDYXRhbG9nPC9hPjwvaGVhZGVyPlxuICAgICAgey8qIDxoZWFkZXI+PExpbmsgaHJlZj1cIi9cIj48YT5Qb2RjYXN0czwvYT48L0xpbms+PC9oZWFkZXI+ICovfVxuXG4gICAgICB7IGNoaWxkcmVuIH1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojODc1NmNhO1xuICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgIGhlYWRlciBhe1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xuI25wcm9ncmVzcyB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jbnByb2dyZXNzIC5iYXIge1xuICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cbiNucHJvZ3Jlc3MgLnBlZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gIG9wYWNpdHk6IDEuMDtcblxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xufVxuXG4vKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xuI25wcm9ncmVzcyAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMzE7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbiNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbkBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59Il19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.abfceb25a8af87a00765.hot-update.js.map