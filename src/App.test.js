/* eslint-disable no-undef */
import { sum, greetings } from "./utils";

test("check if 5 > 1", () => {
  // arrange
  const myVar = 5;
  const mySecondVar = 1;
  // act
  const isBigger = myVar > mySecondVar;
  // assert
  expect(isBigger).toBeTruthy();
});

test("sum 2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

describe("sum", () => {
  test("test if sum func 5,5 equals 10", () => {
    const result = sum(5, 5);
    expect(result).toBe(10);
  });

  test("test if sum func 15,10 equals 25", () => {
    const result = sum(15, 10);
    expect(result).toBe(25);
  });
});

describe("greetings", () => {
  it('greetings returns "Hello World"', () => {
    expect(greetings("Hello world")).toBe("Hello World");
  });

  it('greetings with spaces returns "Hello World"', () => {
    expect(greetings("   Hello    world    ")).toBe("Hello World");
  });

  it('greetings lowercase with spaces returns "Hello World"', () => {
    expect(greetings("   heLLo    world    ")).toBe("Hello World");
  });

  it('greetings incorrect word ""', () => {
    expect(greetings(" fgd ")).toBe("");
  });
});
