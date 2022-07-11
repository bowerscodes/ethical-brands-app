import axios from "axios";

const getByName = async (
  searchText,
  setName,
  setCategory,
  setOwnership,
  setRevenue,
  setAnTesting,
  setAnInfo,
  setEnvScore,
  setEnvInfo,
  setLabScore,
  setLabInfo,
  setPhilDonate,
  setPhilInfo,
  setNewsSource,
  setNewsHeadline,
  setTotalScore
) => {
  let endpoint = "http://localhost:3000/brands";

  if (searchText) {
    endpoint += `/name/${searchText}`;
  }

  try {
    await axios.get(endpoint).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setCategory(res.data.category);
      setRevenue(res.data.revenue);
      setOwnership(res.data.ownership.owner);
      setAnTesting(res.data.animals.testing);
      setAnInfo(res.data.animals.info);
      setEnvScore(res.data.environment.score);
      setEnvInfo(res.data.environment.info);
      setLabScore(res.data.labour.score);
      setLabInfo(res.data.labour.info);
      setPhilDonate(res.data.philanthropy.donations);
      setPhilInfo(res.data.philanthropy.info);
      setNewsSource(res.data.news[0].source);
      setNewsHeadline(res.data.news[0].headline);
      setTotalScore(res.data.totalScore);
    });
  } catch (error) {
    console.log(error);
  }
};

export default getByName;
