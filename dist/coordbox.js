"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoordBox = exports.Coord = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coord = exports.Coord = function (_React$Component) {
  _inherits(Coord, _React$Component);

  function Coord() {
    _classCallCheck(this, Coord);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Coord).apply(this, arguments));
  }

  _createClass(Coord, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "th",
          null,
          this.props.label
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.value
        )
      );
    }
  }]);

  return Coord;
}(_react2.default.Component);

var CoordBox = exports.CoordBox = function (_React$Component2) {
  _inherits(CoordBox, _React$Component2);

  function CoordBox() {
    _classCallCheck(this, CoordBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CoordBox).apply(this, arguments));
  }

  _createClass(CoordBox, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "table",
        { className: "tool numerical gauge" },
        _react2.default.createElement(
          "caption",
          null,
          this.props.caption
        ),
        _react2.default.createElement(
          "tbody",
          null,
          this.props.children
        )
      );
    }
  }]);

  return CoordBox;
}(_react2.default.Component);