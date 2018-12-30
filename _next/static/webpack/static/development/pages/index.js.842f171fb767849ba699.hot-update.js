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
        className: "jsx-717675755" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-717675755" + " " + 'movie',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-717675755",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-717675755",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "< Volver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path),
        className: "jsx-717675755",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-717675755",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, movie.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-717675755",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, movie.overview), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-717675755",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Generos"), genres.map(function (genre) {
        return (//   <Link href={`/movie?id=${ movie.id }`} prefetch>
          //   <a key={movie.id} className="movie">
          //   <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} />
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            key: genre.id,
            className: "jsx-717675755",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, genre.name, " ") //   </a>
          //   </Link>

        );
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1899729824",
        css: "nav.jsx-717675755{background:none;}nav.jsx-717675755 a.jsx-717675755{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-717675755{width:100%;height:100%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.movie.jsx-717675755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#141414;color:white;}picture.jsx-717675755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-717675755 div.jsx-717675755{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-717675755{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h1.jsx-717675755{font-size:20px;}h3.jsx-717675755{margin:0;}h6.jsx-717675755{margin:0;margin-top:1em;}audio.jsx-717675755{margin-top:2em;width:100%;}.modal.jsx-717675755{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;overflow-y:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDZ0IsQUFHeUIsQUFHSyxBQVFWLEFBT0UsQUFPQSxBQVNGLEFBT0UsQUFLQyxBQUdMLEFBR0EsQUFJTSxBQUtBLFNBWGpCLEFBR2lCLEVBekNILEFBdUJBLEVBT2UsRUFLN0IsQUFVYSxBQUtMLENBN0RSLEtBR2UsQUEyRE4sRUFsRHFCLEFBdUJBLENBa0I5QixFQUlBLEVBTVUsTUEzREksRUE0REgsSUF0QlMsS0F1QkosQ0E1REMsS0FRTyxBQXVCRSxPQU8xQixDQXVCaUIsRUE1RE0sWUFRQyxDQUlOLEFBT0csQ0FZUyxBQThCOUIsZUFoRHdCLEtBSnhCLFFBdUJBLFFBL0JBLHdEQW1CeUIsQ0FOSixtQkFDUCxZQUNkLG1FQUtXLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS9lc2RyYXMvRG9jdW1lbnRvcy9tb3ZpZWNhdGFsb2cvY29tcG9uZW50cy9Nb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZ2VucmVzOltdXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGNvbnN0IHsgbW92aWUgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgLy8gbGV0IHJlcSA9IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7bW92aWUuaWR9P2FwaV9rZXk9YWViMjA5MTY5Y2M0YTk3NjhkNmI0N2JlMjAwYjMzNzQmeWVhcj0yMDE4Jmxhbmd1YWdlPWVzYClcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZS5pZH0/YXBpX2tleT1hZWIyMDkxNjljYzRhOTc2OGQ2YjQ3YmUyMDBiMzM3NCZ5ZWFyPTIwMTgmbGFuZ3VhZ2U9ZXNgKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT50aGlzLnNldFN0YXRlKHsgZ2VucmVzOiBkYXRhLmdlbnJlcyB9KSk7XG4gICAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb3ZpZSwgb25DbG9zZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZ2VucmVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZSc+XG4gICAgICA8bmF2PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxuICAgICAgPC9uYXY+XG4gICAgICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHttb3ZpZS5iYWNrZHJvcF9wYXRofWB9Lz4gXG4gICAgey8qIC8vIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHttb3ZpZS5iYWNrZHJvcF9wYXRofSlgIH19IC8+ICovfVxuICAgICAgPGgxPnsgbW92aWUudGl0bGUgfTwvaDE+XG4gICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgIDxoMj5HZW5lcm9zPC9oMj5cbiAgICAgICAgeyBnZW5yZXMubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAvLyAgIDxMaW5rIGhyZWY9e2AvbW92aWU/aWQ9JHsgbW92aWUuaWQgfWB9IHByZWZldGNoPlxuICAgICAgICAvLyAgIDxhIGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cIm1vdmllXCI+XG4gICAgICAgIC8vICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7IG1vdmllLnBvc3Rlcl9wYXRoIH1gfSAvPlxuICAgICAgICAgICAgPHNwYW4ga2V5PXsgZ2VucmUuaWQgfT57Z2VucmUubmFtZX0gPC9zcGFuPlxuICAgICAgICAvLyAgIDwvYT5cbiAgICAgICAgLy8gICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAubW92aWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgLnBsYXllciB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgfVxuICAgICAgYXVkaW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keXtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgXG4gICAgXG5cbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1735584610",
        css: "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIeUIsQUFHd0IsZ0JBQ2pCIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnZW5yZXM6W11cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgeyBtb3ZpZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAvLyBsZXQgcmVxID0gZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZS5pZH0/YXBpX2tleT1hZWIyMDkxNjljYzRhOTc2OGQ2YjQ3YmUyMDBiMzM3NCZ5ZWFyPTIwMTgmbGFuZ3VhZ2U9ZXNgKVxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllLmlkfT9hcGlfa2V5PWFlYjIwOTE2OWNjNGE5NzY4ZDZiNDdiZTIwMGIzMzc0JnllYXI9MjAxOCZsYW5ndWFnZT1lc2ApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoeyBnZW5yZXM6IGRhdGEuZ2VucmVzIH0pKTtcbiAgICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBnZW5yZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9J21vdmllJz5cbiAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICA8L25hdj5cbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLmJhY2tkcm9wX3BhdGh9YH0vPiBcbiAgICB7LyogLy8gPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLmJhY2tkcm9wX3BhdGh9KWAgfX0gLz4gKi99XG4gICAgICA8aDE+eyBtb3ZpZS50aXRsZSB9PC9oMT5cbiAgICA8cD57bW92aWUub3ZlcnZpZXd9PC9wPlxuICAgICAgPGgyPkdlbmVyb3M8L2gyPlxuICAgICAgICB7IGdlbnJlcy5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAgIC8vICAgPExpbmsgaHJlZj17YC9tb3ZpZT9pZD0keyBtb3ZpZS5pZCB9YH0gcHJlZmV0Y2g+XG4gICAgICAgIC8vICAgPGEga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwibW92aWVcIj5cbiAgICAgICAgLy8gICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHsgbW92aWUucG9zdGVyX3BhdGggfWB9IC8+XG4gICAgICAgICAgICA8c3BhbiBrZXk9eyBnZW5yZS5pZCB9PntnZW5yZS5uYW1lfSA8L3NwYW4+XG4gICAgICAgIC8vICAgPC9hPlxuICAgICAgICAvLyAgIDwvTGluaz5cbiAgICAgICAgKSkgfVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICAgIG5hdiBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICAgIH1cbiAgICAgIC5tb3ZpZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMSAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgfVxuICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAucGxheWVyIHtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICB9XG4gICAgICBhdWRpbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgb3ZlcmZsb3cteTphdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5e1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbiAgICBcbiAgICBcblxuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.842f171fb767849ba699.hot-update.js.map