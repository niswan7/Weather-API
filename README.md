
# Weather API Web App

![Weather App Preview](C:\Users\USER\Pictures\Screenshots\Screenshot 2024-08-28 202542.png)

A simple weather web application that fetches and displays real-time weather data using a public weather API. This project is built with HTML, CSS, and JavaScript.

## Features

- **Real-time Weather Data**: Fetches current weather information for any city using a weather API.
- **Responsive Design**: Fully responsive layout compatible with all screen sizes.
- **Dynamic Backgrounds**: Changes background based on the weather condition (sunny, rainy, snowy, etc.).
- **Error Handling**: Alerts the user if the city is not found or if there is an API error.

## Demo

Check out the live demo [here](link-to-live-demo).

## Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-api-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-api-app
   ```

3. **Open `index.html` in your browser:**

   You can simply open the `index.html` file in any modern web browser to view the app.

## Usage

1. **Enter a city name** in the input field.
2. **Click on the search button** or press `Enter` to fetch the weather data.
3. The application will display the current weather, including temperature, weather condition, humidity, and wind speed.

## API Reference

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

- **Base URL**: `https://api.openweathermap.org/data/2.5/weather`
- **Example Request**:

  ```bash
  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
  ```

- **Parameters**:
  - `q`: City name (e.g., `London`).
  - `appid`: Your API key from OpenWeatherMap.
  - `units`: Units of measurement (optional, e.g., `metric` for Celsius).

## Customization

- **API Key**: Replace the `API_KEY` variable in `script.js` with your own API key from OpenWeatherMap.
- **Styling**: Modify the `styles.css` file to customize the appearance of the app.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out via [email@example.com](mailto:email@example.com).

---

Feel free to customize the content as per your project specifics, and replace placeholders like `yourusername`, `link-to-live-demo`, and `path-to-screenshot.png` with actual data.
