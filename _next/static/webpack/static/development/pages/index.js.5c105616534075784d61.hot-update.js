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

  function Movie() {
    _classCallCheck(this, Movie);

    return _possibleConstructorReturn(this, _getPrototypeOf(Movie).apply(this, arguments));
  }

  _createClass(Movie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var movie = this.props.movie;
      var req = fetch("https://api.themoviedb.org/3/movie/".concat(movie.id, "?api_key=aeb209169cc4a9768d6b47be200b3374&year=2018&language=es"));
      console.log(req); // let { genres } = req.json()
      // this.genres=genres
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          movie = _this$props.movie,
          onClose = _this$props.onClose;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2707507361" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2707507361" + " " + 'movie',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "< Volver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundImage: "url(https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path, ")")
        },
        className: "jsx-2707507361" + " " + "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, movie.overview), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Generos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2707507361",
        css: "nav.jsx-2707507361{background:none;}nav.jsx-2707507361 a.jsx-2707507361{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-2707507361{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.movie.jsx-2707507361{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-2707507361{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-2707507361 div.jsx-2707507361{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-2707507361{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-2707507361{margin:0;}h6.jsx-2707507361{margin:0;margin-top:1em;}audio.jsx-2707507361{margin-top:2em;width:100%;}.modal.jsx-2707507361{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFHeUIsQUFHSyxBQVFWLEFBT0UsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQXRDSSxBQXVCUCxFQU9lLEVBWWhCLEFBS0wsQ0ExRFIsS0FHZSxBQXdETixFQXhCcUIsQ0FlOUIsRUFJQSxFQU1VLEVBaERvQixJQVJoQixFQXlESCxJQW5CUyxLQW9CSixDQXpEQyxLQStCUyxPQXZCRixBQThCeEIsQ0FvQkEsRUF6RHVCLGFBWVQsQUFPTyxDQVlTLEtBdkJOLE1BS0EsZ0JBSnhCLENBdUJBLFFBL0JBLHFEQWFxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGNvbnN0IHsgbW92aWUgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IHJlcSA9IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7bW92aWUuaWR9P2FwaV9rZXk9YWViMjA5MTY5Y2M0YTk3NjhkNmI0N2JlMjAwYjMzNzQmeWVhcj0yMDE4Jmxhbmd1YWdlPWVzYClcbiAgICAgICAgY29uc29sZS5sb2cocmVxKVxuICAgICAgICAvLyBsZXQgeyBnZW5yZXMgfSA9IHJlcS5qc29uKClcbiAgICAgICAgLy8gdGhpcy5nZW5yZXM9Z2VucmVzXG4gICAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb3ZpZSwgb25DbG9zZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUnPlxuICAgICAgPG5hdj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsb3NlfT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHttb3ZpZS5iYWNrZHJvcF9wYXRofSlgIH19IC8+XG4gICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgIDxoMj5HZW5lcm9zPC9oMj5cbiAgICAgIHsvKiA8cD57dGhpcy5nZW5yZXN9PC9wPiAqL31cbiAgICB7LyogeyBtb3ZpZS5nZW5yZXMubWFwKChnZW5yZSkgPT4gKFxuICAgICAgLy8gICA8TGluayBocmVmPXtgL21vdmllP2lkPSR7IG1vdmllLmlkIH1gfSBwcmVmZXRjaD5cbiAgICAgIC8vICAgPGEga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwibW92aWVcIj5cbiAgICAgIC8vICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7IG1vdmllLnBvc3Rlcl9wYXRoIH1gfSAvPlxuICAgICAgICA8c3BhbiBrZXk9eyBnZW5yZS5pZCB9PntnZW5yZS5uYW1lfSA8L3NwYW4+XG4gICAgICAvLyAgIDwvYT5cbiAgICAgIC8vICAgPC9MaW5rPlxuICAgICAgKSkgfSAqL31cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgfVxuICAgICAgLm1vdmllIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgLnBsYXllciB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgfVxuICAgICAgYXVkaW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgICBcbiAgICBcblxuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.5c105616534075784d61.hot-update.js.map