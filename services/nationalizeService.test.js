const getGender = require('./genderService');

jest.mock('./genderService.js')
describe('Nationality Service Test', () => {
  test('should guess nationality of user(s) name', async() =>{ 
    const result = await getGender;
    expect(result.data.count).not.toEqual(64) 
  })
})