const getAge = require("./ageService");

//describe, test, expect
jest.mock("./ageService.js");
describe("Age Service Test: ", () => {
  test("should take in a user(s) name ", async () => {
    const result = await getAge;
    expect(result.data.info[results]).toBe(200);
  });
});
