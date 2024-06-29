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

    if (current === null) return null;

    let myKey = Object.keys(current.value);

    if (myKey[0] === key) return current.value[key];

    while (current.nextNode !== null) {
      current = current.nextNode;
      // console.log("KEYS", current.value);
      myKey = Object.keys(current.value);
      if (myKey[0] === key) return current.value[key];
    }
    return null;
  }
  size() {
    let current = this.head;
    // console.log("Current: ", current);
    if (current === null || current === undefined) return 0;
    let listLength = 1;
    while (current.nextNode !== null) {
      current = current.nextNode;
      listLength += 1;
    }
    return listLength;
  }
  linked_keys() {
    let one_bucket_keys = [];
    let current = this.head;
    let myKey;
    if (current !== null) {
      myKey = Object.keys(current.value);
      one_bucket_keys.push(myKey[0]);
    }
    while (current.nextNode !== null) {
      current = current.nextNode;
      myKey = Object.keys(current.value);
      one_bucket_keys.push(myKey[0]);
    }
    return one_bucket_keys;
  }

  linked_entries() {
    let one_bucket_entries = [];
    let current = this.head;
    let arr_entries;
    let myKey;
    if (current !== null) {
      arr_entries = Object.entries(current.value)[0];
      one_bucket_entries.push(arr_entries);
    }
    while (current.nextNode !== null) {
      current = current.nextNode;
      arr_entries = Object.entries(current.value)[0];
      one_bucket_entries.push(arr_entries);
    }
    return one_bucket_entries;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export { Linked_list };
