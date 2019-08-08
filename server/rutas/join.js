;
const express = require('express')
let api = express.Router(),
    pruebaControl = require('../controles/prueba')


//Todos estos métodos son para personas y se distingue el uno del otro por el verbo o la estructura en el caso del get
api.get('/tratraerClienteTipo', pruebaControl.traerClienteTipo)    
api.get('/traerFactDetCliente', pruebaControl.traerFactDetCliente)
api.get('/traerwhere', pruebaControl.traerwhere)
api.get('/getid', pruebaControl.getwhere)
api.post('/insert', pruebaControl.insertar)
api.put('/update', pruebaControl.actualizar)
api.post('/delete', pruebaControl.borrar)
api.get('/select', pruebaControl.select)

//

module.exports = api