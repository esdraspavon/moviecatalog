webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Movie */ "./components/Movie.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.js");

var _jsxFileName = "/home/esdras/Documentos/moviecatalog/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openMovieModal", function (event, movie) {
      event.preventDefault();

      _this.setState({
        openMovie: movie
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMovieModal", function (event) {
      event.preventDefault();

      _this.setState({
        openMovie: null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInputRef", function (element) {
      _this.input = element;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (event) {
      _this.setState({
        query: event.target.value
      });
    });

    _this.state = {
      openMovie: null,
      query: "",
      isLoading: false,
      results: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          movies = _this$props.movies,
          statusCode = _this$props.statusCode;
      var _this$state = this.state,
          openMovie = _this$state.openMovie,
          isLoading = _this$state.isLoading;

      if (statusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_6___default.a, {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "MovieCatalog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, openMovie && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Movie__WEBPACK_IMPORTED_MODULE_7__["default"], {
        movie: openMovie,
        onClose: this.closeMovieModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setRef: this.setInputRef,
        handleSubmit: this.handleSubmit,
        handleChange: this.handleInputChange,
        value: this.state.query,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }) : this.state.results.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        movies: this.state.results,
        onClickMovie: this.openMovieModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        movies: movies,
        onClickMovie: this.openMovieModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), "}");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var res, req, _ref2, movies;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return fetch('https://api.themoviedb.org/3/discover/movie?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es');

              case 4:
                req = _context.sent;
                _context.next = 7;
                return req.json();

              case 7:
                _ref2 = _context.sent;
                movies = _ref2.results;
                return _context.abrupt("return", {
                  movies: movies,
                  statusCode: 200
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                res.statusCoda = 503;
                return _context.abrupt("return", {
                  movies: null,
                  statusCode: 503
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "handleSubmit",
    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.setState({
    //       isLoading:true,
    //     })
    //     if (this.state.query) {
    //       fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=aeb209169cc4a9768d6b47be200b3374&language=es`)
    //           .then(response => response.json())
    //           .then(data =>this.setState({ results: data.results }));
    //     }else{
    //       this.setState({
    //         results:[]
    //       })
    //     }
    //     this.setState({
    //       isLoading:false,
    //     })
    // }
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var req, _ref3, results;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                this.setState({
                  isLoading: true
                });

                if (!this.state.query) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 5;
                return fetch('https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=aeb209169cc4a9768d6b47be200b3374&language=es');

              case 5:
                req = _context2.sent;
                _context2.next = 8;
                return req.json();

              case 8:
                _ref3 = _context2.sent;
                results = _ref3.results;
                this.setState({
                  results: results
                });
                console.log(this.state.query);
                _context2.next = 15;
                break;

              case 14:
                this.setState({
                  results: []
                });

              case 15:
                this.setState({
                  isLoading: false
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmit(_x2) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.68baa9d122a0b8a4b406.hot-update.js.map