'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStyle = require('./../Style/ButtonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecondaryButton = function SecondaryButton(_ref) {
  var children = _ref.children,
      defaultButtonProps = (0, _objectWithoutProperties3.default)(_ref, ['children']);


  return _react2.default.createElement(
    _ButtonStyle.SecondaryContainer,
    defaultButtonProps,
    _react2.default.createElement(
      _ButtonStyle.SecondaryBtn,
      null,
      children
    )
  );
};

exports.default = SecondaryButton;