function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative input
  }
  return foo(a - 1, b + a);
}