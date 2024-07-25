


const getWeatherData = async (lat, lng, params) => {
  try {
    const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'example-api-key'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};