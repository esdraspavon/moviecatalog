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
      genres: []
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
          genres: data.genres
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
        className: "jsx-817251174" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-817251174" + " " + 'movie',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-817251174",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-817251174",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "< Volver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundImage: "url(https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path, ")")
        },
        className: "jsx-817251174" + " " + "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-817251174",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, movie.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-817251174",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, movie.overview), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-817251174",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Generos"), genres.map(function (genre) {
        return (//   <Link href={`/movie?id=${ movie.id }`} prefetch>
          //   <a key={movie.id} className="movie">
          //   <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} />
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            key: genre.id,
            className: "jsx-817251174",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, genre.name, " ") //   </a>
          //   </Link>

        );
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3499159085",
        css: "nav.jsx-817251174{background:none;}nav.jsx-817251174 a.jsx-817251174{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-817251174{width:100%;height:100%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.movie.jsx-817251174{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-817251174{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-817251174 div.jsx-817251174{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-817251174{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-817251174{margin:0;}h6.jsx-817251174{margin:0;margin-top:1em;}audio.jsx-817251174{margin-top:2em;width:100%;}.modal.jsx-817251174{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDZ0IsQUFHeUIsQUFHSyxBQVFWLEFBT0UsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQXRDSCxBQXVCQSxFQU9lLEVBWWhCLEFBS0wsQ0ExRFIsS0FHZSxBQXdETixFQS9DcUIsQUF1QkEsQ0FlOUIsRUFJQSxFQU1VLE1BeERJLEVBeURILElBbkJTLEtBb0JKLENBekRDLEtBUU8sQUF1QkUsT0FPMUIsQ0FvQkEsRUF6RHVCLFlBUUMsQ0FJTixBQU9HLENBWVMsZUFsQk4sS0FKeEIsUUF1QkEsUUEvQkEsd0RBbUJ5QixDQU5KLG1CQUNQLFlBQ2QsbUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnZW5yZXM6W11cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgeyBtb3ZpZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAvLyBsZXQgcmVxID0gZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZS5pZH0/YXBpX2tleT1hZWIyMDkxNjljYzRhOTc2OGQ2YjQ3YmUyMDBiMzM3NCZ5ZWFyPTIwMTgmbGFuZ3VhZ2U9ZXNgKVxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllLmlkfT9hcGlfa2V5PWFlYjIwOTE2OWNjNGE5NzY4ZDZiNDdiZTIwMGIzMzc0JnllYXI9MjAxOCZsYW5ndWFnZT1lc2ApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoeyBnZW5yZXM6IGRhdGEuZ2VucmVzIH0pKTtcbiAgICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBnZW5yZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9J21vdmllJz5cbiAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUuYmFja2Ryb3BfcGF0aH0pYCB9fSAvPlxuICAgICAgPGgxPnsgbW92aWUudGl0bGUgfTwvaDE+XG4gICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgIDxoMj5HZW5lcm9zPC9oMj5cbiAgICAgICAgeyBnZW5yZXMubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAvLyAgIDxMaW5rIGhyZWY9e2AvbW92aWU/aWQ9JHsgbW92aWUuaWQgfWB9IHByZWZldGNoPlxuICAgICAgICAvLyAgIDxhIGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cIm1vdmllXCI+XG4gICAgICAgIC8vICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7IG1vdmllLnBvc3Rlcl9wYXRoIH1gfSAvPlxuICAgICAgICAgICAgPHNwYW4ga2V5PXsgZ2VucmUuaWQgfT57Z2VucmUubmFtZX0gPC9zcGFuPlxuICAgICAgICAvLyAgIDwvYT5cbiAgICAgICAgLy8gICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAubW92aWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgLnBsYXllciB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgfVxuICAgICAgYXVkaW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHl7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIFxuICAgIFxuXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1735584610",
        css: "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHeUIsQUFHd0IsZ0JBQ2pCIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnZW5yZXM6W11cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgeyBtb3ZpZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAvLyBsZXQgcmVxID0gZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZS5pZH0/YXBpX2tleT1hZWIyMDkxNjljYzRhOTc2OGQ2YjQ3YmUyMDBiMzM3NCZ5ZWFyPTIwMTgmbGFuZ3VhZ2U9ZXNgKVxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllLmlkfT9hcGlfa2V5PWFlYjIwOTE2OWNjNGE5NzY4ZDZiNDdiZTIwMGIzMzc0JnllYXI9MjAxOCZsYW5ndWFnZT1lc2ApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoeyBnZW5yZXM6IGRhdGEuZ2VucmVzIH0pKTtcbiAgICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBnZW5yZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9J21vdmllJz5cbiAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUuYmFja2Ryb3BfcGF0aH0pYCB9fSAvPlxuICAgICAgPGgxPnsgbW92aWUudGl0bGUgfTwvaDE+XG4gICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgIDxoMj5HZW5lcm9zPC9oMj5cbiAgICAgICAgeyBnZW5yZXMubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAvLyAgIDxMaW5rIGhyZWY9e2AvbW92aWU/aWQ9JHsgbW92aWUuaWQgfWB9IHByZWZldGNoPlxuICAgICAgICAvLyAgIDxhIGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cIm1vdmllXCI+XG4gICAgICAgIC8vICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7IG1vdmllLnBvc3Rlcl9wYXRoIH1gfSAvPlxuICAgICAgICAgICAgPHNwYW4ga2V5PXsgZ2VucmUuaWQgfT57Z2VucmUubmFtZX0gPC9zcGFuPlxuICAgICAgICAvLyAgIDwvYT5cbiAgICAgICAgLy8gICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAubW92aWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgLnBsYXllciB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgfVxuICAgICAgYXVkaW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHl7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIFxuICAgIFxuXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7d605f64a547206e21c5.hot-update.js.map