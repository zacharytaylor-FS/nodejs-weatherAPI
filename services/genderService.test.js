const {getGender, getGenderByName} = require("./genderService");
require("dotenv").config();

// jest.mock("./genderService.js");
describe("Gender Service Test", () => {
  test("should show gender of 7 user(s)", async () => {
    const result = await getGender;
    expect(result.data[0].name).toEqual("zachary");
    expect(result.data[0].gender).toEqual("male");
  });

  test("As a user I should return a gender object by Name", async () => {
    const result = await getGenderByName("zachary");
    expect(result.data.name).toEqual("zachary")
  })
});

