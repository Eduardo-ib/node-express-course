const express = require('express'); //La primera línea le da acceso a la biblioteca express buscando en sus node_modules "express".
const app = express(); // crea una instancia del constructor express, al que llamaremos "app".

app.listen(8000, function(){
    console.log("server is running")
})