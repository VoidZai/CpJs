//type coercion is conversion of values from one data type to another

/* 
Implicit Coercion

String Concatenation:
When using the + operator with a string and another type, JavaScript converts the other type to a string.
Mathematical Operations:
When using operators like -, *, /, or % with a string and a number, JavaScript converts the string to a number if possible.
Loose Equality (==):
The loose equality operator performs type coercion before comparison, which can lead to unexpected results.

Explicit Coercion
Number(): Converts a value to a number.
String(): Converts a value to a string.
Boolean(): Converts a value to a boolean. */

// gotchas are the unexpected behaviours or quirks that can lead to errors, thse are often situations where the code appears to be working correctly, but subtle details can cause problems
// type coercion gotchas: example, 1 == '1' evaluates to true due to type coercion, while 1 === '1' evaluates to false because it checks for both value and type equality

console.log(1 + "1"); // "11" (string concatenation)
console.log("3" - 1); // 2 (numeric subtraction)
console.log([] == ![]); // true (wat?!)

//Best Practice: Use strict equality (===) to avoid unexpected type coercion.