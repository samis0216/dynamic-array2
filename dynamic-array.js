class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let popped = this.data[this.length - 1];

    this.data[this.length - 1] = undefined;
    if (this.length > 0) {
      this.length--;
    }
    return popped;
  }

  shift() {
    let shifted = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    if (this.length > 0) {
      this.length--;
    }

    return shifted;
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;

    return this.length;
  }

  indexOf(val) {
    // Your code here
  }

  resize() {
    // Your code here
  }
}

module.exports = DynamicArray;
