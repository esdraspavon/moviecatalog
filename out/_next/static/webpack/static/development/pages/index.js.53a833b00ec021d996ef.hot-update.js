webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastPlayer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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



var PodcastPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PodcastPlayer, _React$Component);

  function PodcastPlayer() {
    _classCallCheck(this, PodcastPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PodcastPlayer).apply(this, arguments));
  }

  _createClass(PodcastPlayer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          movie = _this$props.movie,
          onClose = _this$props.onClose;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2707507361" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2707507361" + " " + 'movie',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "< Volver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundImage: "url(https://image.tmdb.org/t/p/w500/".concat(movie.backdrop_path, ")")
        },
        className: "jsx-2707507361" + " " + "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.overview), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2707507361",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Generos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2707507361",
        css: "nav.jsx-2707507361{background:none;}nav.jsx-2707507361 a.jsx-2707507361{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-2707507361{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.movie.jsx-2707507361{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-2707507361{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-2707507361 div.jsx-2707507361{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-2707507361{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-2707507361{margin:0;}h6.jsx-2707507361{margin:0;margin-top:1em;}audio.jsx-2707507361{margin-top:2em;width:100%;}.modal.jsx-2707507361{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCZ0IsQUFHeUIsQUFHSyxBQVFWLEFBT0UsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQXRDSSxBQXVCUCxFQU9lLEVBWWhCLEFBS0wsQ0ExRFIsS0FHZSxBQXdETixFQXhCcUIsQ0FlOUIsRUFJQSxFQU1VLEVBaERvQixJQVJoQixFQXlESCxJQW5CUyxLQW9CSixDQXpEQyxLQStCUyxPQXZCRixBQThCeEIsQ0FvQkEsRUF6RHVCLGFBWVQsQUFPTyxDQVlTLEtBdkJOLE1BS0EsZ0JBSnhCLENBdUJBLFFBL0JBLHFEQWFxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9ob21lL2VzZHJhcy9Eb2N1bWVudG9zL21vdmllY2F0YWxvZy9jb21wb25lbnRzL01vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9kY2FzdFBsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZSc+XG4gICAgICA8bmF2PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxuICAgIFxuICAgICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLmJhY2tkcm9wX3BhdGh9KWAgfX0gLz5cbiAgICA8cD57dGhpcy5vdmVydmlld308L3A+XG4gICAgICA8aDI+R2VuZXJvczwvaDI+XG4gICAgey8qIHsgbW92aWUuZ2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgIC8vICAgPExpbmsgaHJlZj17YC9tb3ZpZT9pZD0keyBtb3ZpZS5pZCB9YH0gcHJlZmV0Y2g+XG4gICAgICAvLyAgIDxhIGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cIm1vdmllXCI+XG4gICAgICAvLyAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8keyBtb3ZpZS5wb3N0ZXJfcGF0aCB9YH0gLz5cbiAgICAgICAgPHNwYW4ga2V5PXsgZ2VucmUuaWQgfT57Z2VucmUubmFtZX0gPC9zcGFuPlxuICAgICAgLy8gICA8L2E+XG4gICAgICAvLyAgIDwvTGluaz5cbiAgICAgICkpIH0gKi99XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgICAgbmF2IGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5iYW5uZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICAgIH1cbiAgICAgIC5tb3ZpZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgcGljdHVyZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICB9XG4gICAgICBwaWN0dXJlIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIC5wbGF5ZXIge1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIH1cbiAgICAgIGF1ZGlvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLm1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgXG4gICAgXG5cbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/home/esdras/Documentos/moviecatalog/components/Movie.js */",
        __self: this
      }));
    }
  }]);

  return PodcastPlayer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.53a833b00ec021d996ef.hot-update.js.map