/*non-primitive types store references to the values. 

key characteristics: 

Objects:
The foundation of non-primitive types, objects are collections of key-value pairs. Keys are typically strings (or Symbols), and values can be any data type, including other objects.

Arrays:
A special type of object used to store ordered collections of values. Arrays are accessed using numerical indexes.

Functions:
Blocks of code designed to perform specific tasks. Functions are treated as objects in JavaScript, allowing them to be passed as arguments to other functions or assigned to variables.

Mutability:
Non-primitive types are mutable

Key Differences from Primitive Types

Storage:
Primitive types are stored directly in memory, while non-primitive types are stored in the heap, with variables holding a reference to that location.
Copying:
Primitive types are copied by value (changes to a copy don't affect the original), while non-primitive types are copied by reference (changes to a copy affect the original). */

//3 nonpremetive datatypes

//1) Object: key value pairs
const person= {name: "bob", age: 25};

//2) Array: ordered collection of values/orderd lists(technically objects)
const primes= [2, 3, 5, 7, 11];

//3) Function: block of code/callable objects
const square= function(x) { return x*x;}