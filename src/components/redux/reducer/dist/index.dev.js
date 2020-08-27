"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("../cakes/reducer"));

var _reducer2 = _interopRequireDefault(require("../users/reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  cakeReducer: _reducer["default"],
  userReducer: _reducer2["default"]
});
var _default = rootReducer;
exports["default"] = _default;