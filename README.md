<h1 align="center">Weather site</h1>
<p align="center">Página web utilizando API da OpenWeatherMap para mostrar condições climáticas.</p>

### ✅ Pré-requisitos e como rodar a aplicação ✅

Antes de tudo você deve verificar se possui **Node.js** e **PostgreSQL** instalados

- Na pasta raiz digite o comando **npm i** para instalar todas as dependências do projeto.
- Crie uma nova database com o nome "meteorology", ou com o nome de sua preferência.
- Abra o arquivo **./src/database/db.js**.
- O nome da database estará "meteorology", altere o nome da database caso tenha criado uma com um nome diferente.
- O usuário está "postgres" e a senha "12345678", altere se necessário.
- Acesse a pasta services **./src/services** e rode o comando **node app.js** para startar a API para consumo de dados meteorológicos.
- Abra outro terminal, e na pasta raiz do projeto rode o comando **npm start** para que o Webapp abra.
- Até aqui já deve estar tudo funcionando.

> **Note:** O site OpenWeatherMap fornece chaves para usuários cadastrados.Caso haja algum na chave gerada, cadastre-se no site, adquira uma chave e coloque-a em "./src/config/auth.json" altere o valor de key para sua chave.