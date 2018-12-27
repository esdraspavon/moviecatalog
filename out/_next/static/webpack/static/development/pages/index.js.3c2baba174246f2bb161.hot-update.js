webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/esdras/Documentos/moviecatalog/components/ChannelGrid.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelGrid, _React$Component);

  function ChannelGrid() {
    _classCallCheck(this, ChannelGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChannelGrid).apply(this, arguments));
  }

  _createClass(ChannelGrid, [{
    key: "render",
    value: function render() {
      var movies = this.props.movies;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-664129314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-664129314" + " " + "movies",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, movies.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/movie?id=".concat(movie.id),
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          key: movie.id,
          className: "jsx-664129314" + " " + "movie",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "https://image.tmdb.org/t/p/w500/".concat(movie.poster_path),
          className: "jsx-664129314",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-664129314",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, movie.title)));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "664129314",
        css: ".movies.jsx-664129314{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.movie.jsx-664129314{display:block;border-radius:3px;box-shadow:0 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.movie.jsx-664129314 img.jsx-664129314{width:100%;}h2.jsx-664129314{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHNEIsQUFNRyxBQU1KLEFBR0UsV0FGaEIsQ0FHb0IsQ0FmSixDQU1NLGFBTFAsQ0FlSyxJQVRzQixRQUxvQixJQWVqRCxTQUNRLGlCQVZHLENBV3hCLG1CQVZBLFFBTkEiLCJmaWxlIjoiL2hvbWUvZXNkcmFzL0RvY3VtZW50b3MvbW92aWVjYXRhbG9nL2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtb3ZpZXMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZXNcIj5cbiAgICAgICAgeyBtb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWU/aWQ9JHsgbW92aWUuaWQgfWB9IHByZWZldGNoPlxuICAgICAgICAgIDxhIGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cIm1vdmllXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7IG1vdmllLnBvc3Rlcl9wYXRoIH1gfSAvPlxuICAgICAgICAgIDxoMj57bW92aWUudGl0bGV9PC9oMj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKSB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb3ZpZXMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vdmllIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW92aWUgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PiBcbiAgICB9XG59Il19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/ChannelGrid.js */",
        __self: this
      }));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3c2baba174246f2bb161.hot-update.js.map