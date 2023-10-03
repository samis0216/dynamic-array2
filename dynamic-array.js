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
    if (this.length === this.capacity) {
      this.resize()
    }
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
    if (this.length === this.capacity) {
      this.resize()
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;

    return this.length;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i
    }
    return -1
  }

  resize() {
    // Resize makes a new, larger array then copies all the elements
    // from the original this.data array into the new array. Then
    // reassign the data to the new array.

    let newArr = new DynamicArray(this.capacity * 2)
    for (let i = 0; i<this.length; i++) {
      newArr.data[i] = this.data[i]
      newArr.length++
    }
    this.data = newArr.data
    this.capacity = newArr.capacity
    this.length = newArr.length

  }
}

module.exports = DynamicArray;
