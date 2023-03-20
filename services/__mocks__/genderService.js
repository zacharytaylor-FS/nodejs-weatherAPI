const getGender = async () => {
  console.log("Fetching Mock Gender Service");
  return Promise.resolve({
    data: [
      { count: 100085, gender: "male", name: "zachary", probability: 1 },
      { count: 74, gender: "male", name: "demitri", probability: 0.96 },
      { count: 0, gender: null, name: "zaylynn", probability: 0 },
      { count: 13, gender: "male", name: "janari", probability: 1 },
    ],
  });
};
