const MissingParamError = require('./missing-param-error')
const Unauthorized = require('./unauthorized')
const InternalServerError = require('./internal-server-error')

module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static internalServerError () {
    return {
      statusCode: 500,
      body: new InternalServerError()
    }
  }

  static unauthorized () {
    return {
      statusCode: 401,
      body: new Unauthorized()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
