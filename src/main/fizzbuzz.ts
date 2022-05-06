const fizzbuzz = (input: number) => {
  if (input % 15 === 0) return "fizzbuzz";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "buzz";
  else return `${input}`;
};

export default fizzbuzz;
