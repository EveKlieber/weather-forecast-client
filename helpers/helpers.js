import axios from 'axios'

export const getWeather = async (cityString) => {

  let axiosResp;
  try {
    axiosResp = await axios.post('http://localhost:8080/getweather', {city: cityString}, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      // credentials: "include",
      // withCredentials: true,
    });

    console.log(axiosResp.data)
    return axiosResp.data
    // console.debug("axiosResp.data:suc", axiosResp);
  } catch (error) {
    console.error(error);
    alert("Could not log in. Console for more Information");
  }


}

//{city: cityString}