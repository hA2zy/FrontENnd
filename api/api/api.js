function getWeather() {
  let city = document.getElementById("city").ariaValueMax;
  fetch("http://goweather.herokuapp.com/weather/" + city)
  .then((Response) => response.json())
  .then((data) => {
    document.getElementById('hot').innerHTML = data['t']
  })
}
