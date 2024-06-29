import { Linked_list } from "./linked_list.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.load_factor = 0.8;
    this.number_entries = 0;
    this.bucket = [];
  }

  #get_bucket(key) {
    let hashed_key = this.hash(key);
    let index_bucket = hashed_key % this.capacity;
    return index_bucket;
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
    let index_bucket = this.#get_bucket(key);

    // console.log("KEY", key);

    // console.log("INDEX BUCKET", index_bucket);

    if (this.bucket[index_bucket] === undefined) {
      this.bucket[index_bucket] = new Linked_list();
      this.number_entries++;
      let critical_size = this.capacity * this.load_factor;
      //console.log(["test", this.entries, critical_size]);
      if (critical_size < this.number_entries) {
        return ["We need to grow the capacity", this.number_entries];
      }
    }

    let keyExists = this.bucket[index_bucket].find(key);
    if (keyExists !== null) {
      this.bucket[index_bucket].removeAt(keyExists);
    }
    const pair = {};
    const _key = key;
    pair[_key] = value;
    this.bucket[index_bucket].append(pair);
    // console.log("W: ", this.bucket[index_bucket]);
    return; // this.bucket;
  }

  get(key) {
    // let hashed_key = this.hash(key);
    // let index_bucket = hashed_key % 16;
    let index_bucket = this.#get_bucket(key);

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
    let index_bucket = this.#get_bucket(key);

    if (this.bucket[index_bucket] === undefined) {
      return false;
    }

    let keyExists = this.bucket[index_bucket].find(key);

    return keyExists === null ? false : true;
  }

  remove(key) {
    let index_bucket = this.#get_bucket(key);
    if (this.bucket[index_bucket] === undefined) {
      return false;
    }
    let keyExists = this.bucket[index_bucket].find(key);

    if (keyExists === null) return false;
    this.bucket[index_bucket].removeAt(keyExists);
    return true;
  }
  length() {
    let number_keys = 0;
    let more_keys;
    // console.log("Length: ", size_bucket);
    for (let i = 0; i < this.capacity; i++) {
      if (this.bucket[i] === undefined) continue;
      more_keys = this.bucket[i].size();
      number_keys += more_keys;
    }
    //console.log(this.bucket);
    return number_keys;
  }
  clear() {
    this.bucket = [];
  }
  keys() {
    let all_keys = [];
    let bucket_keys;
    let size = this.bucket.length;
    for (let i = 0; i < size; i++) {
      if (this.bucket[i] !== undefined) {
        bucket_keys = this.bucket[i].linked_keys();
        //console.log("buckey keys ", bucket_keys);
        all_keys = all_keys.concat(bucket_keys);
      }
    }
    return all_keys;
  }

  values() {
    let all_values = [];
    let bucket_values;
    let size = this.bucket.length;
    for (let i = 0; i < size; i++) {
      if (this.bucket[i] !== undefined) {
        bucket_values = this.bucket[i].linked_values();
        //console.log("buckey keys ", bucket_keys);
        all_values = all_values.concat(bucket_values);
      }
    }
    return all_values;
  }

  entries() {
    let all_entries = [];
    let bucket_entries;

    let size = this.bucket.length;
    for (let i = 0; i < size; i++) {
      if (this.bucket[i] !== undefined) {
        bucket_entries = this.bucket[i].linked_entries();
        all_entries = all_entries.concat(bucket_entries);
      }
    }
    return all_entries;
  }
}

export { HashMap };
