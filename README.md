# Netshoes Test - Tiago Juvenal de Lima

## Desenvolvimento

Neste desenvolvimento eu utilizei vuejs para componentizar a aplicação front-end, vuex para gerenciamento de estado, webpack para o bundle, sass para estilo e animações e axios para os requests no servidor. O server eu usei o Nodejs, NPM, Nodemon, Express com suas melhores práticas de MVC(models, views, controllers and routes) para API RESTful, lib body-parser para parsear o JSON, lib Consign para carregar os modulos dinamicos e libeirei o cors geral.


## Instalação do projeto automatizado

Para instalação do projeto e inicialização, use o comando a baixo.
```
sh run.sh
```
Ou
```
sudo sh run.sh
```

Abra o navegador com o endereço http://localhost:8081


## Instalação do projeto manual

Instale o vue-cli e o nodemon
```
npm install -g vue-cli nodemon
```

Após fazer o git clone do projeto
entre nas pastas e instale as dependencias
```
cd backend and cd frontend
```

```
npm install
```

## Gerar build do projeto

Entre na pasta /frontend
```
cd frontend
```

Rode o comando para fazer o build
```
npm run build
```

## Running server

Na pasta raiz do projeto rode o comando
```
npm start
```

Abra o navegador com o endereço http://localhost:8081
