import axios from "axios";

const getCategory = async (searchText, setOverview, setErrorMessage) => {
  let endpoint = "http://localhost:3000/brands";

  if (searchText) {
    endpoint += `/category/${searchText}`; // Requires user input
  }
  setErrorMessage("");

  // Return 5 data points from all brands that match a category
  await axios
    .get(endpoint)
    .then((res) => {
      if (res.data === null) {
        setErrorMessage("Invalid Category");
      } else {
        setErrorMessage("");
        const categoryOverview = {
          logo: res.data.logo,
          anScore: res.data.animals.score,
          envScore: res.data.environment.score,
          labScore: res.data.labour.score,
          totalScore: res.data.totalScore,
        };
        setOverview(categoryOverview);
        console.log(categoryOverview);
      }
    })
    .catch((error) => {
      console.error(error);
      setErrorMessage("Type a Category to Search!");
    });
};

export default getCategory;
