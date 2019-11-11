let response = function(response, code, message, result) {
    if (result == null) {
      return response.status(code).json({ statusCode: code, message: message });
    } else {
      if (result.result)
        return response.status(code).json({ success: true, data: result });
      return response
        .status(code)
        .json({ statusCode: code, message: message, data: result });
    }
  };
  let errorResponse = function(response, statusCode, error) {
    return response.status(statusCode).json({
      statusCode,
      message: error || statusCode
    });
  };
  module.exports = {
    response,
    errorResponse
  };