# Movie Search App

A simple movie search application made with Vue 3 and TailwindCSS using the OMDb API.

## Installation

### Clone the repository to your local machine:
  ```sh
  git clone https://github.com/joligoms/movie-search-vue.git
  ```

### Navigate to the project directory:
  ```sh
  git movie-search-vue
  ```

### Install the dependencies:
  ```sh
  # Using yarn (recommended):
  yarn

  # Using npm:
  npm install
  ```

## Usage

### Copy the env file
  ```sh
  cp .env.example .env
  ```

### Add your own API key from OMDb to the env file

You can request the API key [here](http://www.omdbapi.com/apikey.aspx).

Paste your key into ```VITE_OMDB_API_KEY``` at the .env file like shown above:
```
VITE_OMDB_API_KEY="YourApiKeyHere"
```

### Run the app!

To run the application in development mode, use the following command:

  ```sh
  # Using yarn (recommended):
  yarn dev

  # Using npm:
  npm run dev
  ```
This will start a development server and open the application in your default web browser. Usually, the application will be available at ```http://localhost:5173``` if there are no other service occupying it.

## Deployment

To build the production-ready version of the application, use the following command:

  ```sh
  # Using yarn (recommended):
  yarn build

  # Using npm:
  npm run build
  ```
