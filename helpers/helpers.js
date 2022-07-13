import axios from 'axios'


export const getWeather = async (cityString) => {

  // e.preventDefault();
  let result;
  let axiosResp;
  try {
    axiosResp = await axios.post('http://localhost:8080/getweather', cityString, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      // credentials: "include",
      // withCredentials: true,
    });

    console.debug("axiosResp.data:suc", axiosResp);
    if (!axiosResp) {
      console.debug("axiosResp.data:suc", axiosResp.data.response);
    } else {
      console.debug("axiosResp.data:else", axiosResp);
    }
  } catch (error) {
    console.error(error);
    alert("Could not log in. Console for more Information");
  }


}