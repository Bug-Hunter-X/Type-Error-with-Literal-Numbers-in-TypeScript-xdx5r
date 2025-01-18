# Type Error with Literal Numbers in TypeScript

This repository demonstrates a subtle type error in TypeScript that occurs when using literal numbers instead of variables in function calls.  The error arises from type inference and how TypeScript handles type checking in different contexts.

The `bug.ts` file shows the problematic code.  The `bugSolution.ts` file provides a solution to avoid this type of error.

This unexpected behavior highlights the importance of understanding TypeScript's type inference mechanisms and how to write code that avoids this common pitfall.