const { constants } = require("./error.constants");

const ErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res
        .status(statusCode)
        .json({ title: "Validation Error", message: err.message });
      break;
    case constants.NOT_FOUND:
      res.status(statusCode).json({ title: "Not Found", message: err.message });
      break;
    case constants.SERVER_ERROR:
      res
        .status(statusCode)
        .json({ title: "Server Error", message: err.message });
      break;
    case constants.FORBIDDEN:
      res
        .status(statusCode)
        .json({ title: "Request Forbidden", message: err.message });
      break;
    case constants.UNAUTHORIZED:
      res
        .status(statusCode)
        .json({ title: "Unauthorized", message: err.message });
      break;
    default:
      break;
  }
};

module.exports = { ErrorHandler };
