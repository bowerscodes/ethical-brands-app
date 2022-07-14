import axios from "axios";

const getAllByName = async (setBrandNames) => {
  const endpoint = "http://localhost:3000/brands";

  await axios
    .get(endpoint)
    .then((response) => {
      const brandNames = response.data.map((value) => value.name);
      console.log(brandNames);
      setBrandNames(brandNames);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getAllByName;
