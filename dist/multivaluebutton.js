'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiValueButton = exports.ButtonValue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonValue = exports.ButtonValue = function (_React$Component) {
  _inherits(ButtonValue, _React$Component);

  function ButtonValue() {
    _classCallCheck(this, ButtonValue);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonValue).apply(this, arguments));
  }

  _createClass(ButtonValue, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'fa fa-fw ' + this.props.icon }),
        this.props.label
      );
    }
  }]);

  return ButtonValue;
}(_react2.default.Component);

;

var MultiValueButton = exports.MultiValueButton = function (_React$Component2) {
  _inherits(MultiValueButton, _React$Component2);

  function MultiValueButton(props) {
    _classCallCheck(this, MultiValueButton);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MultiValueButton).call(this, props));

    _this2.state = { selectedValue: 0 };
    return _this2;
  }

  _createClass(MultiValueButton, [{
    key: 'handleButtonClick',
    value: function handleButtonClick(e) {
      var newSelectedValue = parseInt(e.target.value);
      this.setState({ selectedValue: newSelectedValue });
      if (this.props.onChange) {
        this.props.onChange({ value: newSelectedValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'centered tool-box' },
        _react2.default.createElement(
          'div',
          { className: 'btn-group', onChange: this.handleButtonClick.bind(this) },
          _react2.default.Children.map(this.props.children, function (child, i) {
            return _react2.default.createElement(
              'label',
              { className: 'btn' },
              _react2.default.createElement('input', { name: 'tile-type', type: 'radio', value: i, defaultChecked: child.props.def ? 'checked' : '' }),
              child
            );
          })
        )
      );
    }
  }]);

  return MultiValueButton;
}(_react2.default.Component);