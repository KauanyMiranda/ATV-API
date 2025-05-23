const express = require('express');
const app = express();
const PORT =3000;

const jwt =  require('jsonwebtoken');
require('dotenv').config();
const segredo = process.env.JWT_SECRET;

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Hearders', 
        'Origin, X-Request-With, Content-Typt, Accept'
    );
    next();
});

app.get('/api/dados', (req, res) => {
    res.json({status: "Sucesso"})
});

app.listen(PORT, () => {
    console.log("A API está rodando no endereço http://localhost:",PORT);
});

function CriarToken(usuario){
    return jwt.sign(
        {sub: usuario.id, role: usuario.role},
        segredo,
        {expired: '1h'}
    );
}

