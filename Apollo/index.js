const express = require('express')
const {engine} = require('express-handlebars')
const mysql = require ('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/loja', (req, res) =>{
    res.render('loja')
})

app.get('/ofertas', (req, res) =>{
    res.render('ofertas')
})

app.get('/produtos', (req, res) =>{
    res.render('produtos')
})

app.get('/suporte', (req, res) =>{
    res.render('suporte')
})

app.get('/noticia1', (req, res) =>{
    res.render('noticia1')
})

app.get('/noticia2', (req, res) =>{
    res.render('noticia2')
})

app.get('/noticia3', (req, res) =>{
    res.render('noticia3')
})

app.get('/produtos/apollop11lite', (req, res) =>{
    res.render('./produtos/apollop11lite')
})

app.get('/produtos/apollop11pro', (req, res) =>{
    res.render('./produtos/apollop11pro')
})

app.get('/produtos/apollop12lite', (req, res) =>{
    res.render('./produtos/apollop12lite')
})

app.get('/produtos/apollop12pro', (req, res) =>{
    res.render('./produtos/apollop12pro')
})

app.get('/produtos/apollop13deluxe', (req, res) =>{
    res.render('./produtos/apollop13deluxe')
})

app.get('/atualizacao', (req, res) =>{
    const sql = ' SELECT * FROM smartphone'

    conn.query(sql, function(err,data){
        if(err){
            console.log(err)
            return
        }
        const smartphone = data
        console.log(smartphone)
        res.render('atualizacao',{smartphone})

    })
})


app.get('/adm', (req, res) =>{
    
    res.render('adm')
})

app.get('/adm/inserir', (req, res) =>{

    const sql = ' SELECT * FROM smartphone'

    conn.query(sql, function(err,data){
        if(err){
            console.log(err)
            return
        }
        
        const smartphone = data
        
        console.log(smartphone)
        res.render('./crud/inserir',{smartphone})

    })
})


app.post('/apollo/insert', (req, res) =>{
    
    const smartphone = req.body.smartphone
    const lançamento = req.body.lançamento
    const versaoAtual = req.body.versaoAtual
    const ProxVersao = req.body.ProxVersao
    const Preço = req.body.Preço


    const sql = `INSERT INTO smartphone(smartphone , lançamento, versaoAtual, ProxVersao, Preço) values ('${smartphone}', '${lançamento}', '${versaoAtual}' , '${ProxVersao}', '${Preço}');`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/adm/inserir')
    })
})

app.get('/adm/editar/:ID', (req, res) =>{
    const ID = req.params.ID
    const sql = (`SELECT * FROM smartphone where id = ${ID}`)

    
    conn.query(sql, function (err, data){
        if (err) {
            console.log(err)
            return
        }

        const smartphone = data[0]

        res.render('./crud/editar', {smartphone})
    })
})

app.post('/editar/atualizar',(req, res) =>{
    const ID = req.body.ID
    const smartphone = req.body.smartphone
    const lançamento = req.body.lançamento
    const versaoAtual = req.body.versaoAtual
    const ProxVersao = req.body.ProxVersao
    const Preço = req.body.Preço

    const sql = `UPDATE smartphone set smartphone = '${smartphone}', lançamento =  '${lançamento}', versaoAtual = '${versaoAtual}', ProxVersao = '${ProxVersao}', Preço = '${Preço}' where ID = ${ID};`

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/adm/inserir')
    })
})

app.post('/adm/remove/:ID', (req, res) =>{
    const ID = req.params.ID
    const sql = `DELETE FROM smartphone WHERE ID = ${ID}`

    conn.query(sql, function(err, data){
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/adm/inserir')
    })
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/cadastro', (req, res) =>{
    res.render('cadastro')
})

app.post('/usuarios/insertusuarios', (req, res) =>{
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const login = req.body.login
    const senha = req.body.senha                         

    const sql = `INSERT INTO usuarios (nome, sobrenome,login,senha) values ('${nome}' ,'${sobrenome}', '${login}' , '${senha}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })

    
})

app.get('/consulta', (req, res) =>{
    const sql = ' SELECT * FROM usuarios'

    
    conn.query(sql, function(err,data){
        if(err){
            console.log(err)
            return
        }
        const usuarios = data
        console.log(usuarios)
        res.render('consulta',{usuarios})

    })
})

app.get('/usuarios/:ID', (req, res) =>{
    const ID = req.params.ID

    const sql = (`SELECT * FROM usuarios where id = ${ID}`)

    conn.query(sql, function (err, data){
        if (err) {
            console.log(err)
            return
        }

        const usuario = data[0]

        res.render('usuario', {usuario})
    })
})


app.get('/usuario/edit/:ID', (req, res) =>{
    const ID = req.params.ID
    const sql = (`SELECT * FROM usuarios where id = ${ID}`)

    
    conn.query(sql, function (err, data){
        if (err) {
            console.log(err)
            return
        }

        const usuario = data[0]

        res.render('editusuario', {usuario})
    })
})

app.post('/usuarios/updateusuario',(req, res) =>{
    const ID = req.body.ID
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome

    const sql = `UPDATE usuarios set nome = '${nome}', sobrenome = '${sobrenome}' where ID = ${ID};`

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/')
    })
})

app.post('/usuario/remove/:ID', (req, res) =>{
    const ID = req.params.ID
    const sql = `DELETE FROM usuarios WHERE ID = ${ID}`

    conn.query(sql, function(err, data){
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/consulta')
    })
})



app.get('/sobre', (req, res) =>{
    res.render('sobre')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'apollo'
})

conn.connect(function(err){
    if (err) {
        console.log(err)
    }
    console.log('Conectou com DB')

    app.listen(3000)
})
