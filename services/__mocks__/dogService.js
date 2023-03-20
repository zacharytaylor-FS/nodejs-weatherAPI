const getDogImage = async () => {
  console.log(`Fetching Mock Dog Service`);
  return Promise.resolve({
    data: {
      message: "https://images.dog.ceo/breeds/hound-walker/n02089867_1921.jpg",
      status: "success",
    },
  });
};

module.exports = getDogImage;
