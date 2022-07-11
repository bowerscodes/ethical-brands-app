import axios from "axios";

const getByName = async (searchText) => {
  let endpoint = "http://localhost:3000/brands";

  if (searchText) {
    endpoint += `/name/${searchText}`;
  }

  try {
    await axios.get(endpoint).then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};

export default getByName;
