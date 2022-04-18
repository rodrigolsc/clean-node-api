const MissingParamError = require('./missing-param-error')
const Unauthorized = require('./unauthorized')

module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static internalServerError () {
    return {
      statusCode: 500
    }
  }

  static unauthorized () {
    return {
      statusCode: 401,
      body: new Unauthorized()
    }
  }
}
