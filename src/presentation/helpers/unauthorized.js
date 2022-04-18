module.exports = class Unauthorized extends Error {
  constructor (paramName) {
    super('unauthorized')
    this.name = 'Unauthorized'
  }
}
