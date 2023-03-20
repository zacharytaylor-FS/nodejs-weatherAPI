const getGender = require("./genderService");
require("dotenv").config();

jest.mock("./genderService.js");
describe("Gender Service Test", () => {
  test("should show gender of user(s) name", async () => {
    const result = await getGender;
    expect(result).toEqual(result.data.gender);
  });
});
