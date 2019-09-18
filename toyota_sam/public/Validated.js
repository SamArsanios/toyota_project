class Validated {
  constructor() {
    this.valid = false;
  }

  setValid(valid) {
    this.valid = valid;
  }

  getValid() {
    return this.valid;
  }
}

module.exports = { Validated };
