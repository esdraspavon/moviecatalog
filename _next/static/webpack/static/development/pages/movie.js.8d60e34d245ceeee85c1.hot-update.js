webpackHotUpdate("static/development/pages/movie.js",{

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.js");

var _jsxFileName = "/home/esdras/Documentos/moviecatalog/pages/movie.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // import PodcastList from '../components/PodcastList';
// import PodcastListWithClick from '../components/PodcastListWithClick';
// import Error from './_error'
// import PodcastPlayer from '../components/PodcastPlayer'

var Movie =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Movie, _React$Component);

  function Movie() {
    _classCallCheck(this, Movie);

    return _possibleConstructorReturn(this, _getPrototypeOf(Movie).apply(this, arguments));
  }

  _createClass(Movie, [{
    key: "render",
    //   openPodcast = (event, podcast) => {
    //     event.preventDefault()
    //     this.setState({
    //       openPodcast: podcast
    //     })
    //   }
    //   closePodcast = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //       openPodcast: null
    //     })
    //   }
    value: function render() {
      var _this$props = this.props,
          movie = _this$props.movie,
          statusCode = _this$props.statusCode; //   const { openPodcast } = this.state

      if (statusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Error, {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: movie.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          backgroundImage: "url(https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path, ")")
        },
        className: "jsx-1571538926" + " " + "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-1571538926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, movie.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1571538926",
        css: ".banner.jsx-1571538926{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}h1.jsx-1571538926{font-weight:600;padding:15px;}h2.jsx-1571538926{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9wYWdlcy9tb3ZpZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtCLEFBSXNCLEFBU0ssQUFJSixXQVpPLENBYUgsSUFKSCxZQUtHLENBSmxCLENBVDhCLGNBY25CLFNBQ1MsS0FkSSxhQWV4QixTQWR3QixzQkFDeEIiLCJmaWxlIjoiL2hvbWUvZXNkcmFzL0RvY3VtZW50b3MvbW92aWVjYXRhbG9nL3BhZ2VzL21vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2hhbm5lbEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFubmVsR3JpZCc7XG4vLyBpbXBvcnQgUG9kY2FzdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0TGlzdCc7XG4vLyBpbXBvcnQgUG9kY2FzdExpc3RXaXRoQ2xpY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0TGlzdFdpdGhDbGljayc7XG4vLyBpbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXG4vLyBpbXBvcnQgUG9kY2FzdFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHsgb3BlblBvZGNhc3Q6IG51bGwgfVxuLy8gICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5LCByZXMgfSl7XG4gICAgdHJ5e1xuXG4gICAgICBsZXQgaWRNb3ZpZSA9IHF1ZXJ5LmlkXG4gICAgICBsZXQgcmVxTW92aWUgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8keyBpZE1vdmllIH1gKVxuICAgICAgXG4gICAgICBpZihyZXFNb3ZpZS5zdGF0dXMgPj0gNDA0KSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlPXJlcU1vdmllLnN0YXR1c1xuICAgICAgICByZXR1cm4geyBtb3ZpZTpudWxsLCBzdGF0dXNDb2RlOjQwNH1cblxuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQgZGF0YU1vdmllID0gYXdhaXQgcmVxTW92aWUuanNvbigpXG4gICAgICBsZXQgbW92aWUgPSBkYXRhTW92aWVcbiAgICAgIFxuICAgICAgcmV0dXJuIHsgbW92aWUsIHN0YXR1c0NvZGU6MjAwIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJlcy5zdGF0dXNDb2RlPTUwM1xuXG4gICAgICByZXR1cm4geyBtb3ZpZTpudWxsLCBzdGF0dXNDb2RlOjUwM31cbiAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4vLyAgIG9wZW5Qb2RjYXN0ID0gKGV2ZW50LCBwb2RjYXN0KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgb3BlblBvZGNhc3Q6IHBvZGNhc3Rcbi8vICAgICB9KVxuLy8gICB9XG5cbi8vICAgY2xvc2VQb2RjYXN0ID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgb3BlblBvZGNhc3Q6IG51bGxcbi8vICAgICB9KVxuLy8gICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBtb3ZpZSwgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIC8vICAgY29uc3QgeyBvcGVuUG9kY2FzdCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgXG4gICAgICBpZiggc3RhdHVzQ29kZSAhPT0gMjAwKXtcbiAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPlxuICAgICAgfVxuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPXttb3ZpZS50aXRsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUuYmFja2Ryb3BfcGF0aH0pYCB9fSAvPlxuXG4gICAgICB7LyogeyBvcGVuUG9kY2FzdCAmJiBcbiAgICAgICAgPFBvZGNhc3RQbGF5ZXIgY2xpcD17IG9wZW5Qb2RjYXN0IH0gb25DbG9zZT0geyB0aGlzLmNsb3NlUG9kY2FzdCB9IC8+XG4gICAgICB9ICovfVxuXG4gICAgICA8aDE+eyBtb3ZpZS50aXRsZSB9PC9oMT5cblxuICAgICAgey8qIHsgc2VyaWVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+U2VyaWVzPC9oMj5cbiAgICAgICAgICA8Q2hhbm5lbEdyaWQgY2hhbm5lbHM9eyBzZXJpZXMgfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfSAqL31cblxuICAgICAgey8qIDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj4gKi99XG4gICAgICAgIHsvKiA8UG9kY2FzdExpc3QgYXVkaW9DbGlwcz17YXVkaW9DbGlwc30gLz4gKi99XG4gICAgICAgIHsvKiA8UG9kY2FzdExpc3RXaXRoQ2xpY2sgcG9kY2FzdHM9e2F1ZGlvQ2xpcHN9ICBvbkNsaWNrUG9kY2FzdD17dGhpcy5vcGVuUG9kY2FzdH0vPiAqL31cbiAgICAgIFxuXG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICAgPC9MYXlvdXQ+XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/pages/movie.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    //   constructor(props) {
    //     super(props)
    //     this.state = { openPodcast: null }
    //   }
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, idMovie, reqMovie, dataMovie, movie;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                _context.prev = 1;
                idMovie = query.id;
                _context.next = 5;
                return fetch("https://api.audioboom.com/channels/".concat(idMovie));

              case 5:
                reqMovie = _context.sent;

                if (!(reqMovie.status >= 404)) {
                  _context.next = 9;
                  break;
                }

                res.statusCode = reqMovie.status;
                return _context.abrupt("return", {
                  movie: null,
                  statusCode: 404
                });

              case 9:
                _context.next = 11;
                return reqMovie.json();

              case 11:
                dataMovie = _context.sent;
                movie = dataMovie;
                return _context.abrupt("return", {
                  movie: movie,
                  statusCode: 200
                });

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  movie: null,
                  statusCode: 503
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 16]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movie")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=movie.js.8d60e34d245ceeee85c1.hot-update.js.map