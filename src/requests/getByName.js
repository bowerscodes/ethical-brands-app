import axios from "axios";

const getByName = async (searchText, setResults, setErrorMessage) => {
  let endpoint = "http://localhost:3000/brands";

  if (searchText) {
    endpoint += `/name/${searchText}`;
  }
  setErrorMessage("");

  await axios
    .get(endpoint)
    .then((res) => {
      if (res.data === null) {
        setErrorMessage("Invalid brand"); // If a search does not match return this
      } else {
        setErrorMessage("");
        const returnedData = {
          logo: res.data.logo,
          name: res.data.name,
          category: res.data.category,
          revenue: res.data.revenue,
          ownership: res.data.ownership.owner,
          anTesting: res.data.animals.testing,
          anInfo: res.data.animals.info,
          envScore: res.data.environment.score,
          envInfo: res.data.environment.info,
          labScore: res.data.labour.score,
          labInfo: res.data.labour.info,
          philDonate: res.data.philanthropy.donations,
          philInfo: res.data.philanthropy.info,
          newsSource: res.data.news[0].source,
          newsHeadline: res.data.news[0].headline,
          totalScore: res.data.totalScore,
        };
        setResults(returnedData);
        console.log(returnedData);
      }
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage("Server Error!");
    });
};

export default getByName;
