;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])



let select =  (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo

    db.select(campo).from(tabla).then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
    //let id = req.query.id
}

let traerClienteTipo = (req, res) => {
    //let tabla = req.query.tabla
    //let campo = req.query.campo
    //let id = req.query.id
    
    db.select(campo).from(persona).innerJoin('tipoUsuarios', 'persona.id', 'idTipoUsuario.id')
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}
//factura-detalle-cliente
let traerFactDetCliente = (req, res) => {
    //let tabla = req.query.tabla
    //let campo = req.query.campo
    //let id = req.query.id
    
    db.select(campo).from(facturas)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}


//

let insertar = (req, res) => {
console.log(req);
    let data= req.body[1]
    let tabla= req.body[0].tabla
    

    
    
    db(tabla).insert(data)

    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}




let borrar = (req, res) => {

    let tabla = req.body.tabla
    let id= req.body.id
console.log(tabla)
console.log(id)

    
    db(tabla)
    .where('id', id)
    .del() 
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}




let actualizar = (req, res) => {

    var data= req.body[1]
    var tabla= req.body[0].tabla
    var cond = req.body[2].cond
    
    console.log(data);
    console.log(tabla);
    console.log(cond);



// where: 'published_date', '<', 2000
    db(tabla)
    .where('id', '=', cond)
    .update(data)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}







let traerwhere = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    let cliente_id = req.query.cliente_id
    
    db(tabla).where({
        cliente_id: cliente_id,
      }).select(campo)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}




let getwhere = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    let id = req.query.id
    
    db(tabla).where({
        id: id,
      }).select(campo)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}


module.exports = {
    traerClienteTipo,
    traerFactDetCliente,
    insertar,
    borrar,
    actualizar,
    traerwhere,
    getwhere,
    select
}