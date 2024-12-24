# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow.  The `bug.js` file contains a function that recursively calls itself without properly handling the base case, leading to excessive function calls and ultimately a stack overflow.

The `bugSolution.js` file provides a corrected version of the function, showing how to avoid this issue by properly defining a base case that guarantees the recursion will terminate.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Call the `foo` function with any positive integer as the first argument.
4. Observe the stack overflow error.

## Solution

The solution involves ensuring the base case is reached and modifying the recursive step to approach the base case. This makes the recursion stops appropriately. The solution is in the `bugSolution.js` file.