"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserFail = exports.getuserSuccess = exports.getUserList = void 0;

var _type = require("../users/type");

var getUserList = function getUserList() {
  return {
    type: _type.GET_USER_LIST
  };
};

exports.getUserList = getUserList;

var getuserSuccess = function getuserSuccess(users) {
  return {
    type: _type.GET_USER_SUCCESS,
    payload: users
  };
};

exports.getuserSuccess = getuserSuccess;

var getUserFail = function getUserFail(error) {
  return {
    type: _type.GET_USER_FAIL,
    payload: error
  };
};

exports.getUserFail = getUserFail;