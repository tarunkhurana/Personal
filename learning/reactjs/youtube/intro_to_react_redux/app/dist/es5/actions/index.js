"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var TurboClient = require("../utils").TurboClient;
module.exports = {

	fetchUsers: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("user", params, constants.USERS_RECEIVED));
		};
	},

	addUser: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("user", params, constants.USER_CREATED));
		};
	},

	loginUser: function (credentials) {
		return function (dispatch) {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED));
		};
	},

	currentUser: function () {
		return function (dispatch) {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED));
		};
	}

};