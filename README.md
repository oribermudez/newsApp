# newsApp
This app allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. <br />
It uses MeaningCloud's Sentiment API to scan the articles.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have Node.js installed.  <br />
In order to use MeaningCloud API you must sign up to get your key.

### Installing

1.- Clone the repo and install the node modules. <br />
Your can do that by typing `npm i` whithin the project folder on your terminal. <br />

2.- Create an .env file and paste the following:<br />

```sh
SENTIMENT_KEY=     :::: Your API key ::::
MEANINGCLOUD_URL=https://api.meaningcloud.com/sentiment-2.1
```

### Running the app

### --> Prod
1.- Open your terminal and go to the project folder. <br />
2.- To build the client, type: <br />

```sh
npm run prod
```
3.- Then go ahead and run the server with:

```sh
npm start
```
4.- Open your browser and go to:

```sh
http://localhost:8081/
```

### --> Dev

1.- Open your terminal and go to the project folder. <br />
2.- You need to build the app in prod in order to be able to make a request to the API, so  type: <br />

```sh
npm run prod
```
3.- Then go ahead and run the server with:

```sh
npm start
```
4.- Now, open a new terminal and run the dev local server with:

```sh
npm run dev
```
5.- A new window should have shown and you are ready to use the dev server.

## Unit tests

To run the tests please type the following:

```sh
npm test
```

## Built With

* JavaScript
* HTML
* SASS
