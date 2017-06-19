# Introdução

Este teste foi feito usando as tecnologias:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [NodeJS](https://nodejs.org/en/)
* [LESS](http://lesscss.org/)
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Babel](https://babeljs.io/) 
* [Webpack](https://webpack.js.org/)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](https://github.com/airbnb/enzyme)

A estrutura do projeto está dividido em duas partes:
* [Backend](https://github.com/andreluisce/front-end-recruitment/blob/master/ANDRE.md#backend)
* [Frontend](https://github.com/andreluisce/front-end-recruitment/blob/master/ANDRE.md#frontend)

## Backend
Foi usando o servidor **NodeJS + Express** para criar uma API que fornece os dados em JSON para a aplicação frontend.
A API foi feita com a arquitetura REST onde há um endpoint `/products` que pode ser consumido através do método `GET`. A resposta deste endpoint é a lista de produtos que foi fornecida como exemplo de dados (`/public/data`).
O servidor está rodando em  `http://localhost:3004/api/products`

## Frontend
Usando o React foi possível componetizar a aplicação, sendo assim mais fácil para fazer testes unitários.
Redux foi usado para gerenciar o estado da aplicação de uma maneira mais simples.
Para persistir o estado da aplicação no carregamento da página foi usado a biblioteca [redux-persist](https://github.com/rt2zz/redux-persist) :smiley:

# Como Executar a Aplicação

## Configuração Básica

> Ter o NodeJS instalado.

Acessar os diretórios `/backend` e `/frontend` e executar o comando:
```
npm install
```
## Executando o Servidor
Entrar no diretório do servidor (`/backend`) e executar:
```
npm start
```
O servidor está executando em `http://localhost:3004`

## Executando a Aplicação Frontend
Entrar no diretório do servidor (`/frontend`) e executar:
```
npm start
```
A aplicação estará disponível em `http://localhost:8080`

O `npm start` executa a aplicação em modo de desenvolvimento. 
Para fazer o build da aplicação (`modo produção`), faça:
```
npm run production
```

# Extras
## Testes
Foi usado as bibliotecas Jest + Enzyme para os testes unitários.
Para executar os testes, faça:
```
npm run test
```

## Linting
A ferramenta de lint que usei foi Standard. 
Dentro do diretório `frontend/src` execute: 
```
npm run lint
```
ou
```
standard --parser babel-eslint --verbose
```
__para este ultimo caso é necessário ter `standard` e `babel-eslint` instalados globalmente (`npm install -g`)__
