# Netshoes Cart Test

## Expected result

* See a list of products;
* Be able to add or remove items to the cart and get instant visual feedback;
* See the products added to the cart.

## Data

The data we provide is a static JSON file under `/public/data`.

## Notes

* You can use whatever stack or tooling you want to help you;
* Feel free to ask us questions during the process (but trust your guts, please!);
* You should create a static server in order to access the JSON data provided.

## Bonus

* Persist data on page reload;
* Test your code;
* Instructions on how to build/run the project.

# Instructions

## Required software

* Git: https://git-scm.com/
* Node: https://nodejs.org/en/


## How to install this project

Clone the repo:

```cmd
git clone https://github.com/marinhoarthur/front-end-recruitment
```

Go into the repo folder:

```cmd
cd front-end-recruitment/
```
Install all npm libraries required in order to run the program by typing:

```cmd
npm i  
```

# Testing the code
To run all the tests:
```
npm test
```

# Starting the servers
Now that all dependencies were installed and the tests were perfomed, let's run the application.

## Json Data Server 
In order to start the json server so that we can retrieve data from it, run the following command:
```
npm run service
```
The REST Service should be running now and available on http://localhost:3000/products

## Webapp Server
Now to start the server from our UI, i.e. your webapp built with Vue.js, open a new tab in your shell and type:
```
npm start
```

On your browser access the webapp via : http://localhost:8080

# Stack used

List of main technologies used to build this webapp:

* Vue
* Vuex
* localforage (indexedDB)
* Jest
* ES6 (spread operator, string templates, const, lets, arrows functions, etc.)
* Babel
* Sass
* POSTCSS
* ESLint

# Screens

![image](https://i.imgur.com/8ecyrtn.png)
![image](https://i.imgur.com/kFJJvJ9.png)
![image](https://i.imgur.com/eV6OljW.png)
