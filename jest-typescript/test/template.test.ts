import { it } from "@jest/globals";

function sum(a: number, b: number) {
  return a + b;
}

it("sum numbers", () => {
  expect(sum(3, 3)).toBe(6);
});
