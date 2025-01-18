function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // compiles and runs fine
result = subtract(result, 2); // compiles and runs fine

// however, if we use a literal number instead of a variable, we get a type error!
result = add(5, "3"); // Type 'string' is not assignable to type 'number'.