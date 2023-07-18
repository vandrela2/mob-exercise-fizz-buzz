const prod_code = (number) => {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else {
    return number;
  }
};

const loopCode = (number) => {
  const arrayResult = [];
  for (i = 1; i <= number; i++) {
    arrayResult.push(prod_code(i));
  }
  return arrayResult;
};

describe("Fizz Buzz", () => {
  it("if fizz is returned if the number is divisible by 3", () => {
    expect(prod_code(9)).toBe("Fizz");
  });
  it("if buzz is returned if the number is divisable by 5", () => {
    expect(prod_code(10)).toBe("Buzz");
  });
  it("if FizzBuzz is returned if the number is divisable by 3 and 5", () => {
    expect(prod_code(15)).toBe("FizzBuzz");
  });
  it("Returns number if it is not divisible by 3 or 5", () => {
    expect(prod_code(7)).toBe(7);
  });
  it("FizzBuzz loop test", () => {
    expect(loopCode(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });
});
