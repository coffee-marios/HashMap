import { HashMap } from "./index.js";

const test = new HashMap();

console.clear();

console.log("Using set() for 12 entries.\n");

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

console.log("Length", test.length());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());
console.log("\nEntries\n", test.entries());

console.log("\nReplace the values of some keys (apple, banana, carrot).\n");
test.set("apple", "2 red");
test.set("banana", "2 yellow");
test.set("carrot", "2 orange");

console.log("Length", test.length());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());
console.log("\nEntries\n", test.entries());
console.log(test.describe());

console.log("Adding one more entry has to change the number of buckets.\n");

test.set("moon", "silver");
console.log("Length", test.length());

console.log(test.describe());

console.log("\nWe add four more entries.\n");
test.set("life", "death");
test.set("life 2", "death 2");
test.set("life 3", "death 3");
test.set("time", "universe");

console.log("Length", test.length());

console.log(test.describe());

console.log("\nEntries\n", test.entries());

console.log("\nTest get(key), has(value)\n");
console.log("Keys that exist (frog, banana, lion):\n");
console.log(`get("frog") -> value:`, test.get("frog"));
console.log(`get("banana") -> value:`, test.get("banana"));
console.log(`get("lion") -> value:`, test.get("lion"));

console.log(`\nhas("frog") ->`, test.has("frog"));
console.log(`has("banana") ->`, test.has("banana"));
console.log(`has("lion") ->`, test.has("lion"));

console.log("\n\nKeys that don't exist (virus, cup):\n");
console.log(`get("virus") -> value:`, test.get("virus"));
console.log(`get("cup") -> value:`, test.get("cup"));

console.log(`\nhas("virus") ->`, test.has("virus"));
console.log(`has("cup") ->`, test.has("cup"));

console.log("\nTest remove(key)\n");

console.log("Keys that exist (frog, banana, lion):\n");
console.log(`remove("frog") ->`, test.remove("frog"));
console.log(`remove("banana") ->`, test.remove("banana"));
console.log(`remove("lion") ->`, test.remove("lion"));

console.log("\nNow these keys must not exist:\n");
console.log("Length", test.length());

console.log(`\nhas("frog") ->`, test.has("frog"));
console.log(`has("banana") ->`, test.has("banana"));
console.log(`has("lion") ->`, test.has("lion"));

console.log(`\nget("frog") -> value:`, test.get("frog"));
console.log(`get("banana") -> value:`, test.get("banana"));
console.log(`get("lion") -> value:`, test.get("lion"));

console.log("\nWe try to remove keys that don't exist:\n");
console.log(`remove("Zombie 99") ->`, test.remove("Zombie 99"));
console.log(`remove("Hell") ->`, test.remove("Hell"));

console.log("\nEntries\n", test.entries());
console.log("Length", test.length());

console.log("\nReplace the values of some keys (moon, hat, dog).\n");

test.set("moon", "Big");
test.set("hat", "Different");
test.set("dog", "Clever");

console.log("Length", test.length());
console.log("\nEntries\n", test.entries());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());

console.log("\nTest clear()\n");
test.clear();
console.log("Length", test.length());
console.log("\nEntries\n", test.entries());
console.log("\nKeys\n", test.keys());
console.log("\nValues\n", test.values());
