/* eslint-disable no-underscore-dangle */
class HolbertonCalss {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

export default HolbertonCalss;
