
const lat = 58.7984;
const lng = 17.8081;
const params = 'windSpeed';


const getWeatherData = async () => {
  try {
    const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': '45d7fc1e-4a50-11ef-9acf-0242ac130004-45d7fc78-4a50-11ef-9acf-0242ac130004'
      }
    }).then((resp) => resp.json()).then((jsonData) => jsonData );

    console.log(response);

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export default getWeatherData;