const getCurrent = require('./currentService');

// describe, test, expect
jest.mock('./currentService.js')
describe('Current Weather Service Tests', () => {
  test('should show current weather conditions for Radford, Va', async () => {
     const result = await getCurrent(`${process.env.CITY_ZIPCODE}`)
     expect(result.data.contents) 
    })
})