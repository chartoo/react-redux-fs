"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../reducer/index"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var thunkMiddleware = require('redux-thunk')["default"];

var store = (0, _redux.createStore)(_index["default"], (0, _redux.compose)((0, _redux.applyMiddleware)(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
var _default = store;
exports["default"] = _default;