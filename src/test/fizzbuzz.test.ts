import fizzbuzz from "../main/fizzbuzz";

describe("Fizzbuzz", () => {
  it.each`
  input | expected
  ${1}  |  ${"1"}
  ${2}  |  ${"2"}
  ${3}  |  ${"fizz"}
  ${5}  |  ${"buzz"}
  ${6}  |  ${"fizz"}
  ${10} |  ${"buzz"}
  ${15} |  ${"fizzbuzz"}
  ${30} |  ${"fizzbuzz"}
  `("return $expected when given $input", ({input, expected}) => {
    expect(fizzbuzz(input)).toBe(expected);
  });
});
