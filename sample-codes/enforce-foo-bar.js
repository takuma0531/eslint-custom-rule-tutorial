function correctFooBar() {
  const foo = 'bar';
  console.log(foo);
}

function incorrectFoo() {
  const foo = "bar"; // Problem!
  console.log(foo);
}

correctFooBar();
incorrectFoo();
