exports.notFoundResponse = function (res) {
	var data = {
		message: 'Not Found!',
	};
	return res.status(404).json(data);
};

exports.unauthorizedResponse = function (res) {
	var data = {
		message: "Un Authorized!",
	};
	return res.status(401).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
	return res.status(200).json(resData);
};