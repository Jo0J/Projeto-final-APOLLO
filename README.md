<h1 align="center"> APOLLO </h1>
<h2 align="center"> Uma iniciativa tecnológica </h2>


<h3 align="center">Sobre o projeto</h3>
<br>
Projeto final do curso Programadores Cariocas, realizado em dupla, com a finalidade de implementar o aprendizado do módulo 5 em uma aplicação - um site -. O projeto em questão se chama "APOLLO" e foi baseado em uma iniciativa da dupla, visando a questão da programação e tecnologia. Portanto, optamos por criar um site de venda de aparelhos eletrônicos, com foco em smartphones.
<br>

<div align="center">
<h1 align="center">Passo a passo para rodar o projeto</h1>
<br>
<p align="center">
- Instale o VS Code, siga as configurações recomendadas e abra.
- Instale o Node.js, siga as configurações recomendadas e salve.
- Abra o prompt de comando e digite "npm install -g npm" e aperte enter.
- Para verificar se está tudo certo, dê os comandos "node -v" e "npm -v", ainda no prompt.

Parte para idealização do projeto

- Crie uma pasta na área de trabalho <br>
- Abra o VS Code <br>
- Crie um arquivo index.js na pasta criada anteriormente <br>
- Abra o terminal para dar os seguintes códigos: <br>
- npm init -y <br>
- npm install express <br>
- npm install nodemon <br>
- npm install express-handlebars <br>

Agora configurações para fazer a aplicação rodar sem erros:

- No arquivo package.jason adicione o seguinte código abaixo de "test":
    "start": "nodemon ./index localhost 3000" - não esqueça de adicionar uma virgula no fim do TEST
    
- No index.js, adicione:

const express = require('express')
const {engine} = require('express-handlebars')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', (req, res) =>{

    res.render('home')
})

app.listen(3000, () =>{
    console.log('App rodando...')
})

- Já no main.handlebars adicione:

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

- Por fim, adicione uma h1 em home.handlebars para testar no servidor.
- Dê o comando npm start e abra o http://localhost:3000/

- Toda construção foi baseado na arquitetura MVC

</p>
<br>

<h2>Banco de dados, sua documentação e implementação do CRUD</h2>

<p>

Primeiro será precisa baixar o XAMPP e o WorkBench MYSQL.

- Inicie os programas com as configurações recomendadas deles.
- Abra o XAMPP primeiro e aperte em "start" ao lado do nome "MySql".
- Agora abra o Workbench e crie um terminal no "+".
- Ao entrar ele vai estar em "Administration", mas mude para "Schemas".

Então entramos na parte da criação do banco de dados:

- Dê "create database apollo;" e aperte em CTRL e Enter.
- Dê "use apollo;" e aperte em CTRL e Enter.

Agora configure o que vai ser exibido da seguinte forma:

Create table smartphone(
ID INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
smartphone VARCHAR(100) NOT NULL,
lançamento VARCHAR (100) NOT NULL,
versaoAtual VARCHAR (100) NOT NULL,
ProxVersao VARCHAR (100) NOT NULL,
Preço FLOAT(8) NOT NULL
);

- Aperte em CTRL e Enter.
- Por fim, dê "select * from smartphone" e aperte em CTRL e Enter para visualizar a tabela.

Agora a parte mais importante, como adicionar integrar essas informações do Workbench em nosso código no VS Code?

(João por favor descreva aqui)

</p>

<h2 align="center">As rotas foram:</h2>
<br>
<p align="center">
Início/Home<br>
Loja<br>
Produtos<br>
Suporte<br>
Sobre<br>
Atualizações<br>
Administrador/adm<br>
Login<br>
ApolloP11lite<br>
ApolloP11pro<br>
ApolloP12lite<br>
ApolloP12pro<br>
ApolloP13deluxe<br>
Noticia1<br>
Noticia2<br>
Noticia3<br>
 </p>
 <br>

<h2 align="center">Responsáveis:</h2>
<br>
<div align="center">
 <img  height="150" width="200"  src="https://media.licdn.com/dms/image/C4E03AQGt4I1co5cdHQ/profile-displayphoto-shrink_800_800/0/1641506332030?e=1678924800&v=beta&t=iHgbhWeZ-I3SJF231sA791nOSF50yjLm_kyjsRC7ajg"> 
 <img height="150" width="200"src="https://media.licdn.com/dms/image/C4D03AQF-iG7kWXOXIQ/profile-displayphoto-shrink_800_800/0/1660521151699?e=1678924800&v=beta&t=YBWRC5AgbdpDXgth-LmO_5Z-ldvTUpUsEO0PsORfmtE">
 
[--Adriano Rodrigues--](https://github.com/lettertoadriano) [--João Paulo--](https://github.com/jo0j)
<br>
 <br>
<h2 align="center">Função de cada um:</h2>
<h4>
Ambos foram responsáveis pela criação de todo site e das aplicações e banco de dados responsáveis para torná-lo completo, porém uma divisão foi necessária para que pudéssemos colocar em prática o que mais tinhamos facilidade. Portanto:
<br><br>
Adriano Rodrigues - Elaboração do site, páginas .handlebars, .css e .js; revisão e read.me.
<br><br>
João Paulo - Implementação do CRUD, alinhamento das rotas e revisão. 
</h4>
<br>

<h2 align="center">Ferramentas utilizadas:</h2>

<div style="display: inline_block" align = "center"><br>

  <img align="center" alt="workbench" height="50" width="50" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" />
  <img align="center" alt="keep" height="50" width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/768px-Google_Keep_icon_%282020%29.svg.png" />
  <img align="center" alt="GitHub" height="50" width="50" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
 <img align="center" alt="Canva" height="50" width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png" />
</div>
