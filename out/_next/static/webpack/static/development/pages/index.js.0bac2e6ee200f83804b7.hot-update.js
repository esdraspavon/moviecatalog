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
        className: "jsx-2029253063" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2029253063" + " " + 'movie',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2029253063",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-2029253063",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "< Volver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path),
        className: "jsx-2029253063",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2029253063" + " " + "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2029253063",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, movie.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2029253063" + " " + "modal-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2029253063",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, movie.overview)), genres.map(function (genre) {
        return (//   <Link href={`/movie?id=${ movie.id }`} prefetch>
          //   <a key={movie.id} className="movie">
          //   <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} />
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            key: genre.id,
            className: "jsx-2029253063" + " " + "movie-genre",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, genre.name, " ") //   </a>
          //   </Link>

        );
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "782752844",
        css: "nav.jsx-2029253063{background:none;}nav.jsx-2029253063 a.jsx-2029253063{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-2029253063{width:100%;height:100%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.movie.jsx-2029253063{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#141414;color:white;}picture.jsx-2029253063{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-2029253063 div.jsx-2029253063{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-2029253063{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h1.jsx-2029253063{font-size:23px;}h2.jsx-2029253063{font-size:17px;margin:0;}h6.jsx-2029253063{margin:0;margin-top:1em;}audio.jsx-2029253063{margin-top:2em;width:100%;}.modal.jsx-2029253063{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;overflow-y:auto;}.modal-title.jsx-2029253063{text-align:center;}.modal-description.jsx-2029253063{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDZ0IsQUFHeUIsQUFHSyxBQVFWLEFBT0UsQUFPQSxBQVNGLEFBT0UsQUFLQyxBQUdBLEFBSUwsQUFJTSxBQUtBLEFBU0csQUFHUCxTQXBCSSxFQTFDSCxBQXVCQSxDQXdDZCxDQWpDNkIsRUFLN0IsQUFHVyxBQVFFLEFBS0wsQ0E5RFIsRUF1RUEsR0FwRWUsQUE0RE4sRUFuRHFCLEFBdUJBLENBZTlCLEFBSUEsRUFJQSxFQU1VLE1BNURJLEVBNkRILElBdkJTLEtBd0JKLENBN0RDLEtBUU8sQUF1QkUsT0FPMUIsQ0F3QmlCLEVBN0RNLFlBUUMsQ0FJTixBQU9HLENBWVMsQUErQjlCLGVBakR3QixLQUp4QixRQXVCQSxRQS9CQSx3REFtQnlCLENBTkosbUJBQ1AsWUFDZCxtRUFLVyx1Q0FDYSw4RUFDWCxXQUNDLFlBQ2QiLCJmaWxlIjoiL2hvbWUvZXNkcmFzL0RvY3VtZW50b3MvbW92aWVjYXRhbG9nL2NvbXBvbmVudHMvTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGdlbnJlczpbXVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zdCB7IG1vdmllIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIC8vIGxldCByZXEgPSBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllLmlkfT9hcGlfa2V5PWFlYjIwOTE2OWNjNGE5NzY4ZDZiNDdiZTIwMGIzMzc0JnllYXI9MjAxOCZsYW5ndWFnZT1lc2ApXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7bW92aWUuaWR9P2FwaV9rZXk9YWViMjA5MTY5Y2M0YTk3NjhkNmI0N2JlMjAwYjMzNzQmeWVhcj0yMDE4Jmxhbmd1YWdlPWVzYClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+dGhpcy5zZXRTdGF0ZSh7IGdlbnJlczogZGF0YS5nZW5yZXMgfSkpO1xuICAgIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbW92aWUsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGdlbnJlcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUnPlxuICAgICAgPG5hdj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsb3NlfT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgIDwvbmF2PlxuICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUuYmFja2Ryb3BfcGF0aH1gfS8+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICA8aDE+eyBtb3ZpZS50aXRsZSB9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kZXNjcmlwdGlvblwiPlxuICAgICAgICA8cD57bW92aWUub3ZlcnZpZXd9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICAgIHsgZ2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgLy8gICA8TGluayBocmVmPXtgL21vdmllP2lkPSR7IG1vdmllLmlkIH1gfSBwcmVmZXRjaD5cbiAgICAgICAgLy8gICA8YSBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgICAvLyAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8keyBtb3ZpZS5wb3N0ZXJfcGF0aCB9YH0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vdmllLWdlbnJlXCIga2V5PXsgZ2VucmUuaWQgfT57Z2VucmUubmFtZX0gPC9zcGFuPlxuICAgICAgICAvLyAgIDwvYT5cbiAgICAgICAgLy8gICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAubW92aWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgIH1cbiAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgLnBsYXllciB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZToyM3B4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6MTdweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIH1cbiAgICAgIGF1ZGlvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLm1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgICB9XG4gICAgICAubW9kYWwtdGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1kZXNjcmlwdGlvbntcbiAgICAgICAgbWFyZ2luOjE1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHl7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIFxuICAgIFxuXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1735584610",
        css: "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIeUIsQUFHd0IsZ0JBQ2pCIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBnZW5yZXM6W11cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgeyBtb3ZpZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAvLyBsZXQgcmVxID0gZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZS5pZH0/YXBpX2tleT1hZWIyMDkxNjljYzRhOTc2OGQ2YjQ3YmUyMDBiMzM3NCZ5ZWFyPTIwMTgmbGFuZ3VhZ2U9ZXNgKVxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllLmlkfT9hcGlfa2V5PWFlYjIwOTE2OWNjNGE5NzY4ZDZiNDdiZTIwMGIzMzc0JnllYXI9MjAxOCZsYW5ndWFnZT1lc2ApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoeyBnZW5yZXM6IGRhdGEuZ2VucmVzIH0pKTtcbiAgICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBnZW5yZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9J21vdmllJz5cbiAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICA8L25hdj5cbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLmJhY2tkcm9wX3BhdGh9YH0vPiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgPGgxPnsgbW92aWUudGl0bGUgfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICB7IGdlbnJlcy5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAgIC8vICAgPExpbmsgaHJlZj17YC9tb3ZpZT9pZD0keyBtb3ZpZS5pZCB9YH0gcHJlZmV0Y2g+XG4gICAgICAgIC8vICAgPGEga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwibW92aWVcIj5cbiAgICAgICAgLy8gICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHsgbW92aWUucG9zdGVyX3BhdGggfWB9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3ZpZS1nZW5yZVwiIGtleT17IGdlbnJlLmlkIH0+e2dlbnJlLm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgLy8gICA8L2E+XG4gICAgICAgIC8vICAgPC9MaW5rPlxuICAgICAgICApKSB9XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgICAgbmF2IGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5iYW5uZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgfVxuICAgICAgLm1vdmllIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgcGljdHVyZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIC5wbGF5ZXIge1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxe1xuICAgICAgICBmb250LXNpemU6MjNweDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOjE3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICB9XG4gICAgICBhdWRpbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgb3ZlcmZsb3cteTphdXRvO1xuICAgICAgfVxuICAgICAgLm1vZGFsLXRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubW9kYWwtZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbjoxNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5e1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbiAgICBcbiAgICBcblxuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.0bac2e6ee200f83804b7.hot-update.js.map