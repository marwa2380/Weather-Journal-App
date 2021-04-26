# Weather Journal App

An asynchronous web app that uses Web API and user data to dynamically update the UI.

## Getting Started

The starter code can be found in [this](https://github.com/udacity/fend/tree/refresh-2019) repo provided by Udacity.

The project will be evaluated by a Udacity code reviewer according to the Weather Journal App project [rubric](https://review.udacity.com/#!/rubrics/2655/view).

### Tools Required

You would require the following tools to develop and run the project:

- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- A text-editor of your choice.

### Installation

Start by setting up the project environment. `cd` into the project's root folder and run the following command to install the packages mentioned in `package.json`:

```
npm install
```

## Development

- Add a `GET` route that returns the projectData object in your server code Then, add a `POST` route that adds incoming data to projectData

- Acquire API credentials from OpenWeatherMap [website](https://openweathermap.org/api)

- After the successful retrieval of the weather data, chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.

- Finally, chain another Promise that updates the UI dynamically

For details now how these functionalities have been implemented, refer the source code.

## Running the App

- The server will start on `http://localhost:3000/` in your browser.

## References

- API [docs](https://openweathermap.org/current)
- [Stack Overflow](https://stackoverflow.com/) for resolveing errors
