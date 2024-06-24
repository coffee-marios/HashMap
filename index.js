class Linked_list {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextValue = null;
  }
}

class HashMap {
  constructor() {}

  function hash(key){
    let hashCode = 0;
    const PRIMENUMBER = 31;
    const modValue = 1e9 + 9; // A large prime number

    for (let index = 0; index < key.length; index++) {
        hashCode = (PRIMENUMBER * hashCode + key.charCodeAt(index)) % modValue;
        
    }

  }
}
