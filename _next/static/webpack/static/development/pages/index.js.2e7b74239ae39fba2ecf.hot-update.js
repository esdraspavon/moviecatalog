webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/esdras/Documentos/moviecatalog/components/Movie.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Movie =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Movie, _React$Component);

  function Movie(props) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this, props));
    _this.state = {
      genres: {}
    };
    return _this;
  }

  _createClass(Movie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var movie = this.props.movie; // let req = fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es`)

      fetch("https://api.themoviedb.org/3/movie/".concat(movie.id, "?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es")).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          genres: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          movie = _this$props.movie,
          onClose = _this$props.onClose;
      var genres = this.state.genres;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2707507361" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2707507361" + " " + 'movie',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "< Volver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundImage: "url(https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path, ")")
        },
        className: "jsx-2707507361" + " " + "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, movie.overview), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Generos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, genres)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2707507361",
        css: "nav.jsx-2707507361{background:none;}nav.jsx-2707507361 a.jsx-2707507361{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-2707507361{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.movie.jsx-2707507361{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-2707507361{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-2707507361 div.jsx-2707507361{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-2707507361{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-2707507361{margin:0;}h6.jsx-2707507361{margin:0;margin-top:1em;}audio.jsx-2707507361{margin-top:2em;width:100%;}.modal.jsx-2707507361{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDZ0IsQUFHeUIsQUFHSyxBQVFWLEFBT0UsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQXRDSSxBQXVCUCxFQU9lLEVBWWhCLEFBS0wsQ0ExRFIsS0FHZSxBQXdETixFQXhCcUIsQ0FlOUIsRUFJQSxFQU1VLEVBaERvQixJQVJoQixFQXlESCxJQW5CUyxLQW9CSixDQXpEQyxLQStCUyxPQXZCRixBQThCeEIsQ0FvQkEsRUF6RHVCLGFBWVQsQUFPTyxDQVlTLEtBdkJOLE1BS0EsZ0JBSnhCLENBdUJBLFFBL0JBLHFEQWFxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnZW5yZXM6e31cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgeyBtb3ZpZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAvLyBsZXQgcmVxID0gZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZS5pZH0/YXBpX2tleT1hZWIyMDkxNjljYzRhOTc2OGQ2YjQ3YmUyMDBiMzM3NCZ5ZWFyPTIwMTgmbGFuZ3VhZ2U9ZXNgKVxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllLmlkfT9hcGlfa2V5PWFlYjIwOTE2OWNjNGE5NzY4ZDZiNDdiZTIwMGIzMzc0JnllYXI9MjAxOCZsYW5ndWFnZT1lc2ApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoeyBnZW5yZXM6IGRhdGEgfSkpO1xuICAgIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbW92aWUsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGdlbnJlcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUnPlxuICAgICAgPG5hdj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsb3NlfT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHttb3ZpZS5iYWNrZHJvcF9wYXRofSlgIH19IC8+XG4gICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgIDxoMj5HZW5lcm9zPC9oMj5cbiAgICAgIDxwPntnZW5yZXN9PC9wPlxuICAgIHsvKiB7IG1vdmllLmdlbnJlcy5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAvLyAgIDxMaW5rIGhyZWY9e2AvbW92aWU/aWQ9JHsgbW92aWUuaWQgfWB9IHByZWZldGNoPlxuICAgICAgLy8gICA8YSBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgLy8gICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHsgbW92aWUucG9zdGVyX3BhdGggfWB9IC8+XG4gICAgICAgIDxzcGFuIGtleT17IGdlbnJlLmlkIH0+e2dlbnJlLm5hbWV9IDwvc3Bhbj5cbiAgICAgIC8vICAgPC9hPlxuICAgICAgLy8gICA8L0xpbms+XG4gICAgICApKSB9ICovfVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICAgIG5hdiBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAubW92aWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMSAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgfVxuICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAucGxheWVyIHtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICB9XG4gICAgICBhdWRpbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIFxuICAgIFxuXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.2e7b74239ae39fba2ecf.hot-update.js.map