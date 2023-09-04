import axios from "axios";

const FetchDataAPI = async (endpoint : string, token : string) => {
  try {
    const response = await axios.get(
      `https://spanint.kemenkeu.go.id/apitkd/api/${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default FetchDataAPI;
