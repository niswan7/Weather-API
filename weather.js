const search = document.getElementsByClassName("inputcity")[0];
const content1 = document.querySelector(".searchbt");
const card = document.querySelector(".card");
const apiKey = "a1fc8a98fc2cd3ed4a3a8f8b1a36d542";

content1.addEventListener("click", async (event) => {
  const city = search.value;
  console.log(city);
  if (city) {
    try {
      const Weather = await getSearch(city);
      console.log(Weather);
      displaydata(Weather);
      displayEmoji(Weather);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError();
  }
});

async function getSearch(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const responce = await fetch(apiUrl);
  console.log(responce);
  if (!responce.ok) {
    throw new Error("Cloud not Fetch Weather Data");
  }
  return await responce.json();
}

function displaydata(Weather) {
  const displaycity = document.getElementsByClassName("city")[0];
  const displaytemp = document.getElementsByClassName("temp")[0];
  const displayhumidity = document.getElementsByClassName("humidity_per")[0];
  const displaywind = document.getElementsByClassName("windspeed")[0];

  displaycity.innerHTML = Weather.name;
  displaytemp.innerHTML = (Weather.main.temp - 273.15).toFixed(1) + "°C";
  displayhumidity.innerHTML = Weather.main.humidity + "%";
  displaywind.innerHTML = Weather.wind.speed + "km/h";
}

function displayEmoji(Weather) {
  console.log(Weather);
  const images = document.querySelector(".image img");

  switch (true) {
    case Weather.weather[0].id >= 200 && Weather.weather[0].id < 300:
      images.src = "images/rain.png";
      break;
    case Weather.weather[0].id >= 500 && Weather.weather[0].id < 600:
      images.src = "images/rain.png";
      break;
    case Weather.weather[0].id >= 300 && Weather.weather[0].id < 500:
      images.src = "images/drizzle.png";
      break;
    case Weather.weather[0].id >= 600 && Weather.weather[0].id < 700:
      images.src = "images/snow.png";
      break;
    case Weather.weather[0].id === 701:
      images.src = "images/mist.png";
      break;
    case Weather.weather[0].id === 800:
      images.src = "images/clear.png";
      break;
    case Weather.weather[0].id >= 801 && Weather.weather[0].id <= 804:
      images.src = "images/clouds.png";
      break;
  }
}

function displayError() {
  document.getElementById("none").style.display = "block";
  setTimeout(() => {
    document.getElementById("none").style.display = "none";
  }, 3000);
}
