

const getGender = async () => {
  console.log('Fetching Mock Gender Service');
  return Promise.resolve({
    data: {
    "name": "undefined",
    "gender": "female",
    "count": 64
    }
  })
}