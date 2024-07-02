# Hash Map

A hash table or hash map, is a data structure that allows you to map keys to values. Every entry is a pair (key/value) that is stored in a 'bucket'. We begin with 16 buckets (each one of them is a linked list), stored in an array. Every key is hashed and after some math we find the number of the bucket where we can store the pair. As we increase the number of entries, we increase the risk of collision (two different keys generate the same hash code). We use the `load factor = 0.78` to determine when it is time to increase the number of buckets (capacity). We don't want the number of entries to be higher than the capacity times the load factor. When we reach this critical point, we double the number of buckets.

#

#

## Methods

get(key) -> returns the value or null if the key doesn't exist.

has(key) -> returns true or false based on whether or not the key is in the hash map.

remove(key) -> returns true if it removes the key or false if it doesn't find the key.

length() -> returns the number of entries.

clear() -> removes all the entries in the hash map.

keys() -> returns all the keys inside the hash map.

values() -> returns all the values.

entries() -> returns all the entries.

describe() -> prints information about the number of buckets we use.
