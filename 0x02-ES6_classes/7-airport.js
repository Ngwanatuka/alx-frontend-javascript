/* eslint-disable no-underscore-dangle */
class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for 'name'
  get name() {
    return this._name;
  }

  // Getter for 'code'
  get code() {
    return this._code;
  }

  // Override toString() method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
