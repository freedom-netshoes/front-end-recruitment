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

# How to install

## Before all

You must install in your PC:

* Git: https://git-scm.com/
* Node: https://nodejs.org/en/

Optional:

* Yarn: https://yarnpkg.com/en/ => This can be used instead npm, more faster than npm :D


## Installation

Go to the directory that you want to deposit the repository

Open the "Git Bash" or any command prompt that can run Git commands

Run this command: 

```cmd
git clone https://github.com/vmatsumura/front-end-recruitment
```

And get inside the project's folder:

```cmd
cd front-end-recruitment/
```

Now you need install all the libs used on the project

First run this command (you'll need wait a few minutes):

```cmd
npm install  
```

After this command return success, run this for install the servers globally:

```
npm install -g webpack-dev-server json-server babel-eslint
```

With that, lets run the application

# How to run the app

## Static Server 
First you'll need start the static server of products JSON, run:
```
npm run server
```
This static REST API Server works in: http://localhost:3000/products

Now this command prompt is occupied serving the JSON, please open a new command prompt in the same directory

## App Server
To serving the app, run this command:
```
npm start
```
The app will works in: http://localhost:8080

And have fun {^_^}

## Test Code
To test the code, run this command:
```
npm test:watch
```
This will open a console to test some components
Click the key 'u' of your keyboard to update the snapshots
And click 'a' to run the test

# Application

toBuild() this app, was used:

* React
* Redux
* Webpack
* ES6
* Babel
* Sass
* Jest

## Thanks for the opportunity :D
