class Linked_list {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  find(key) {
    // returns the index of the key or null if it doesn't exist
    let current = this.head;
    let index = 0;
    if (current === null) return null;

    let myKey = Object.keys(current.value);

    if (myKey[0] === key) return 0;

    while (current.nextNode !== null) {
      index += 1;
      myKey = Object.keys(current.nextNode.value);
      if (myKey[0] === key) return index;
      //  if (current.nextNode.value === value) return index;
      current = current.nextNode;
    }
    return null;
  }
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let ind = 0;
    let current = this.head;

    while (ind < index) {
      if (ind === index - 1) {
        if (current.nextNode.nextNode) {
          current.nextNode = current.nextNode.nextNode;
        } else {
          current.nextNode = null;
        }
        break;
      } else {
        current = current.nextNode;
      }

      ind++;
    }
  }
  return_value(key) {
    let current = this.head;
    let index = 0;
    if (current === null) return null;

    let myKey = Object.keys(current.value);

    if (myKey[0] === key) return current.value[key];
    while (current.nextNode !== null) {
      myKey = Object.keys(current.nextNode.value);
      if (myKey[0] === key) return current.value[key];
      //  if (current.nextNode.value === value) return index;
      current = current.nextNode;
    }
    return null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextValue = null;
  }
}

export { Linked_list };
