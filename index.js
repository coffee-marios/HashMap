import { Linked_list } from "./linked_list.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.load_factor = 0.75;
    this.number_entries = 0;
    this.bucket = [];
  }

  #get_bucket(key) {
    let hashed_key = this.hash(key);
    let index_bucket = hashed_key % this.capacity;
    return index_bucket;
  }
  #expand_buckets() {
    let my_entries = this.entries();
    this.capacity = 2 * this.capacity;

    this.clear();
    for (let i = 0; i < my_entries.length; i++) {
      this.set(my_entries[i][0], my_entries[i][1]);
    }
  }

  describe() {
    let empty_buckets = 0;
    let active_buckets = 0;
    let each_bucket = 0;
    let critical_size = this.capacity * this.load_factor;
    for (let i = 0; i < this.capacity; i++) {
      if (this.bucket[i] === undefined) {
        empty_buckets++;
        continue;
      }
      each_bucket = this.bucket[i].size();
      console.log(`Bucket ${i}: ${each_bucket}`);
      //number_keys += more_keys;
      active_buckets++;
    }

    return `\nEmpty buckets: ${empty_buckets}\nActive buckets ${active_buckets}\nEntries: ${this.number_entries}\nCritical size: ${critical_size}\n`;
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
    let critical_size = this.capacity * this.load_factor;

    let index_bucket = this.#get_bucket(key);

    if (this.bucket[index_bucket] === undefined) {
      this.bucket[index_bucket] = new Linked_list();
    }

    let keyExists = this.bucket[index_bucket].find(key);
    if (keyExists !== null) {
      this.bucket[index_bucket].removeAt(keyExists);
    } else {
      this.number_entries++;
    }

    const pair = {};
    const _key = key;
    pair[_key] = value;
    this.bucket[index_bucket].append(pair);
    if (critical_size < this.number_entries) {
      this.#expand_buckets();
    }
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

    return number_keys;
  }
  clear() {
    this.bucket = [];
    this.number_entries = 0;
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
