module.exports = class Unauthorized extends Error {
  constructor (paramName) {
    super('Internal Server Error')
    this.name = 'InternalServerError'
  }
}
