const prod_code = (number) => {
  if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  }
};

describe("Fizz Buzz", () => {
  it("if fizz is returned if the number is divisible by 3", () => {
    // Arrange
    // Act
    // Assert
    expect(prod_code(9)).toBe("Fizz");
  });
  it("if buzz is returned if the number is divisable by 5", () => {
    // Arrange
    // Act
    // Assert
    expect(prod_code(10)).toBe("Buzz");
  });
  it("if FizzBuzz is returned if the number is divisable by 3 and 5", () => {
    // Arrange
    // Act
    // Assert
    expect(prod_code(15)).toBe("FizzBuzz");
  });
});
