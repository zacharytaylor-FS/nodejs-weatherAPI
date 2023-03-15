const getDogImage = require('./dogService');

describe('Test Dog Service', () => {
  test('should show a new dog image on request', async () => {
    const result = await getDogImage();
    expect(result.data.message).not.toBe('https://images.dog.ceo/breeds/mountain-bernese/n02107683_3694.jpg')
  })
})