function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // compiles and runs fine
result = subtract(result, 2); // compiles and runs fine

// Solution: Explicit type assertion or better input validation.
result = add(5, Number("3")); // compiles and runs fine using explicit type assertion

// Another better solution to handle potential errors is through input validation and type guards
function addSafe(a: number, b: number | string): number {
  const numB = typeof b === 'string' ? Number(b) : b;
  if(isNaN(numB)){
    throw new Error("Invalid input: b must be a number or a parsable string")
  }
  return a + numB;
}
result = addSafe(5, "3"); // runs fine
result = addSafe(5, 3); // runs fine
//result = addSafe(5, "abc") // throws error
