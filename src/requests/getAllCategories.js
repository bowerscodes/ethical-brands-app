import axios from "axios";

const getAllCategories = async (setAllCategories) => {
  const endpoint = "http://localhost:3000/brands";

  await axios
    .get(endpoint)
    .then((res) => {
      const all = res.data.map((value) => value.category);
      const unique = [...new Set(all)]; // Filters unique categories from all
      console.log(unique);
      setAllCategories(unique);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getAllCategories;
