import { Linked_list } from "./linked_list.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.load_factor = 0.8;
    this.entries = 0;
    this.bucket = [];
  }

  hash(key) {
    let hashCode = 0;
    const PRIMENUMBER = 31;
    const modValue = 1e9 + 9; // A large prime number

    for (let index = 0; index < key.length; index++) {
      hashCode = (PRIMENUMBER * hashCode + key.charCodeAt(index)) % modValue;
    }

    return hashCode;
  }
  set(key, value) {
    let hashed_key = this.hash(key);
    let index_bucket = hashed_key % 16;
    console.log(index_bucket);

    if (this.bucket[index_bucket] === undefined) {
      this.bucket[index_bucket] = new Linked_list();
      this.entries++;
      let critical_size = this.capacity * this.load_factor;
      console.log(["test", this.entries, critical_size]);
      if (critical_size < this.entries) {
        return ["We need to grow the capacity", this.entries];
      }
    }

    let keyExists = this.bucket[index_bucket].find(key);
    if (keyExists !== null) {
      this.bucket[index_bucket].removeAt(keyExists);
      // return this.bucket[index_bucket];
    }
    const pair = {};
    const _key = key;
    pair[_key] = value;
    this.bucket[index_bucket].append(pair);
    //console.log("W: ", this.bucket[index_bucket]);
    return true; // this.bucket;
  }

  get(key) {
    let hashed_key = this.hash(key);
    let index_bucket = hashed_key % 16;
    if (
      (this.bucket[index_bucket] === undefined) |
      (index_bucket > this.capacity)
    ) {
      return null;
    }
    let myValue = this.bucket[index_bucket].return_value(key);
    return myValue;
  }

  has(key) {
    let hashed_key = this.hash(key);
    let index_bucket = hashed_key % 16;
    if (this.bucket[index_bucket] === undefined) {
      return false;
    }

    let keyExists = this.bucket[index_bucket].find(key);

    return keyExists === null ? false : true;
  }

  remove(key) {
    let hashed_key = this.hash(key);
    let index_bucket = hashed_key % 16;
    if (this.bucket[index_bucket] === undefined) {
      return false;
    }
    let keyExists = this.bucket[index_bucket].find(key);

    if (keyExists === null) return false;
    this.bucket[index_bucket].removeAt(keyExists);
    return true;
  }
}

let test = new HashMap();
console.clear();
//console.log(test.hash("marios"));
console.log(test.set("marios", "boss"));

console.log(test.set("carlos", "rics"));
console.log(test.set("carla", "09"));
// console.log(test.set("maria", "abosgs"));
// console.log("Bucket: ", test.bucket);
// console.log(test.entries);
console.log(test.get("marios"));
console.log(test.get("carlos"));
console.log(test.get("carla"));
console.log(test.has("carla"));
console.log(test.has("carlos"));
console.log(test.has("maria"));
console.log(test.has("bruno"));
console.log(test.remove("carla"));
console.log(test.get("carla"));
