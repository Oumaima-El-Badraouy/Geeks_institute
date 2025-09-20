import axios from 'axios';
axios.get('https://api.open-meteo.com/v1/forecast?latitude=34.02&longitude=-6.83&current_weather=true')
  .then(response => response.data)
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));