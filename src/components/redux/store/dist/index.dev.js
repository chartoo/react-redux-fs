"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../reducer/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var redux = require('redux');

var createStore = redux.createStore;
var store = createStore(_index["default"]);
var _default = store;
exports["default"] = _default;