// const Account = require("../models/accounts");
// const { body,validationResult } = require("express-validator");
// const { sanitizeBody } = require("express-validator");
// const auth = require("../authentication.js");
const defaultResponse = require("../helper/default_response.js")
const db = require("../../setup/server/database.js");

// // Book Schema
// function BookData(data) {
// 	this.id = data._id;
// 	this.title= data.title;
// 	this.description = data.description;
// 	this.isbn = data.isbn;
// 	this.createdAt = data.createdAt;
// }

exports.login = [
	function (req, res) {
		return defaultResponse.notFoundResponse(res);
	}
];
