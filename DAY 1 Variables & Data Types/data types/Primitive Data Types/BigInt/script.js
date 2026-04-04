// Maximum safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// Problems with large numbers
console.log(9007199254740991 + 1);  // 9007199254740992 ✅
console.log(9007199254740991 + 2);  // 9007199254740992 ❌ (should be 9007199254740993)

// Floating point issues
console.log(0.1 + 0.2);  // 0.30000000000000004 (not exact)
console.log(9999999999999999);  // 10000000000000000 (rounded)

// Real-world problems
const largeId = 9999999999999999;
console.log(largeId === largeId + 1);  // true! (BIG PROBLEM!)