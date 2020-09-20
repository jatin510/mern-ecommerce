a = { a: "a", b: "b" };
console.log("obj", a);

f = ({ c = "a", d = "d" }) => {
  a = { ...a, c, d };
  return console.log("f", a, { c }, { d });
};

f(a);

// console.log()
