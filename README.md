<h1 align="center"> APOLLO </h1>
Projeto final do curso Programadores Cariocas, realizado em dupla, com o objetivo de aplicar o que foi aprendido no módulo 5 em um site. Este projeto, intitulado "APOLLO", foi criado com base em uma ideia da dupla Adriano Rodrigues e João Faustino, enfocada na programação e tecnologia. Assim, decidiram criar um site de vendas de eletrônicos, com ênfase em smartphones.

## Tecnologias utilizadas para elaboração e organização do projeto ⤵️

- Keep (do Google)
- Drive (do Google)
- Canva
- GitHub
- VS Code
- Workbench / MySql
- Node.js
- Xampp
- Whatsapp


## O passo a passo do projeto foi da seguinte forma ⤵️

- Instale o VS Code, siga as configurações recomendadas e abra.
- Instale o Node.js, siga as configurações recomendadas e salve.
- Abra o prompt de comando e digite e aperte enter.:

```
npm install -g npm
```

- Para verificar se está tudo certo, dê os comandos:


```
node -v
```


```
npm -v
```

Parte para idealização do projeto:

- Criamos uma pasta na área de trabalho
- Abrimos o VS Code
- Criamos um arquivo index.js na pasta criada anteriormente
- Abrimos o terminal para dar os seguintes comandos:

```
npm init -y
```
```
npm install express
```
```
npm install nodemon
```
```
npm install express-handlebars
```

Agora configurações para fazer a aplicação rodar sem erros:

- No arquivo package.jason adicionamos o seguinte código abaixo de "test":

```
"start": "nodemon ./index localhost 3000"
```

- Adicionamos uma virgula no fim do TEST

Já no index.js, adicionamos:

```
const express = require('express') const {engine} = require('express-handlebars')

const app = express()

app.engine('handlebars', engine()) app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', (req, res) =>{

res.render('home')
})

app.listen(3000, () =>{ console.log('App rodando...')})
```

Já no main.handlebars adicionamos:

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    {{{body}}}
</body>
</html>
```

- Por fim, adicionamos uma h1 em home.handlebars para testar no servidor.

- Demos o comando: 

```
npm start
```

- E abrimos o http://localhost:3000/

- Toda construção foi baseado na arquitetura MVC

## Banco de dados, sua documentação e implementação do CRUD ⤵️

- Primeiro, baixamos o XAMPP e o WorkBench MYSQL.
- Iniciamos os programas com as configurações recomendadas deles.
- Abrimos o XAMPP primeiro e apertamos em "start" ao lado do nome "MySql".
- Abrimos o Workbench e criamos um terminal no "+".
- Ao entrar ele estava em "Administration", mas mudamos para "Schemas".

Então entramos na parte da criação do banco de dados:

Demos os seguintes comandos:

```
create database apollo;
```

```
use apollo;
```

Configuramos o que seria exibido da seguinte forma:

```
Create table smartphone(
ID INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
smartphone VARCHAR(100) NOT NULL,
lançamento VARCHAR (100) NOT NULL,
versaoAtual VARCHAR (100) NOT NULL,
ProxVersao VARCHAR (100) NOT NULL,
Preço FLOAT(8) NOT NULL );
```

Por fim, demos um:

```
select * from smartphone
```

-Isso foi feito para visualizar a tabela.

Agora a parte mais importante, como adicionar e integrar essas informações do Workbench em nosso código no VS Code?

- JOÃO É COM VOCÊ


## As rotas criadas foram:  ⤵️

- Início/Home
- Loja
- Produtos
- Suporte
- Sobre
- Atualizações
- Administrador/adm
- Login
- Cadastro
- ApolloP11lite
- ApolloP11pro
- ApolloP12lite
- ApolloP12pro
- ApolloP13deluxe
- Noticia1
- Noticia2
- Noticia3

## Passo a passo para baixar e rodar o projeto ⤵️

- Clique em code na parte superior do projeto 

- Dowlond zip

- Extraia os arquivos

- Abra o projeto no vsCode

- Abra o terminal e escreva os comandos:


```
npm i ou npm install
```


```
npm start 
```

## Responsáveis ⤵️

- Adriano Rodrigues - páginas handlebars, css, javascript e readme.
- João Faustino - backend, implementação do CRUD e diagrama.
