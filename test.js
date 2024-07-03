import { HashMap } from "./index.js";

const test = new HashMap();

// We use KEYS only for testing
const KEYS = [
  "apple",
  "banana",
  "carrot",
  "dog",
  "elephant",
  "frog",
  "grape",
  "hat",
  "ice cream",
  "jacket",
  "kite",
  "lion",
];

console.clear();

console.log("We test set() for 12 entries\n");

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("\nEntries\n", test.entries());

console.log("\nKeys\n", test.keys());

console.log("\nValues\n", test.values());

console.log("\nTest get(key), has(value) with the keys we just stored\n");

for (let i = 0; i < KEYS.length; i++) {
  let only_key = KEYS[i];
  let only_value = test.get(only_key);
  let has_key = test.has(only_key);

  console.log(`\nget(${only_key}) -> value: ${only_value}`);
  console.log(`has(${has_key}) -> ${has_key}`);
}
console.log("\nTest get(key), has(value) with keys that don't exist.\n");

console.log(`get("IdonTexist}) -> value:`, test.get("IdonTexist"));
console.log("has('donTexist') ->", test.has("IdonTexist"));

console.log(
  "\n\nRemove some keys (frog, jacket, hat). Their values are: green, blue, black. \n"
);
test.remove("frog");
test.remove("jacket");
test.remove("hat");

console.log("\nLength", test.length());

console.log("\nEntries\n", test.entries());

let mini_keys = test.keys();
console.log("\nKeys\n", mini_keys);

console.log("\nValues\n", test.values());

console.log("\nReplace the values of some keys (banana, carrot, lion)\n");
test.set("banana", "new yellow");
test.set("carrot", "new orange");
test.set("lion", "new golden");

console.log("\nEntries\n", test.entries());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());

console.log("\nWe test clear()");
test.clear();
test.describe();
console.log("\nEntries\n", test.entries());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());

console.log("\n\nWe use again set() for 12 entries\n");

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.describe());

console.log("Length", test.length());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());
console.log("\nEntries\n", test.entries());

console.log(
  "Adding one more entry has to change the number of buckets. We add (moon, silver)\n"
);

test.set("moon", "silver");

console.log(`\nget("moon}) -> value:`, test.get("moon"));
console.log(`has("moon") ->`, test.has("moon"));

console.log("\nLength", test.length());

console.log(test.describe());

console.log("\nTest get(key), has(value)\n");

for (let i = 0; i < KEYS.length; i++) {
  let only_key = KEYS[i];
  let only_value = test.get(only_key);
  let has_key = test.has(only_key);

  console.log(`\nget(${only_key}) -> value: ${only_value}`);
  console.log(`has(${has_key}) -> ${has_key}`);
}

console.log(
  "\n\nRemove the keys: kite, dog, ice cream. Their values are: pink, brown, white."
);
test.remove("kite");
test.remove("dog");
test.remove("ice cream");

console.log("\nLength", test.length());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());
console.log("\nEntries\n", test.entries());
mini_keys = test.keys();

console.log("\nReplace the values of some keys (moon, carrot, lion)\n");

test.set("moon", "super silver");
test.set("carrot", "super orange");
test.set("lion", "super golden");
console.log("\nEntries\n", test.entries());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());
