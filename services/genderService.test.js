const getGender = require('./genderService');

jest.mock('./genderService.js')
describe('Gender Service Test', () => {
  test('should show gender, probability, and count of user(s) name', async() => { 
    const result = await getGender();
    expect(result.data.count).toEqual(64) 
  })
})