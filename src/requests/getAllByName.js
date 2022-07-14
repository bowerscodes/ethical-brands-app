import axios from "axios";

const getAllByName = async (setAllBrandNames) => {
  const endpoint = "http://localhost:3000/brands";

  await axios
    .get(endpoint)
    .then((response) => {
      const names = response.data.map((value) => value.name);
      // console.log(brandNames);
      setAllBrandNames(names);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getAllByName;
