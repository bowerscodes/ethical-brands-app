import axios from "axios";

const getBrand = (
  searchText,
  setLogo,
  setName,
  setCategory,
  setRevenue,
  setErrorMessage
) => {
  let endpoint = "http://localhost:3000/brands";

  if (searchText) {
    endpoint += `?=${searchText}`; // Adds whatever user searches to end of URL
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setLogo(response.data.logo); // useState for each of these in Search component?
      setName(response.data.name);
      setCategory(response.data.category);
      setRevenue(response.data.revenue);
      setErrorMessage("");
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Entered brand name is not in the database");
        console.error("Name is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        console.error("Server error", error);
      }
    });
};

export default getBrand;
