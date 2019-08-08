exports.up = function(knex) {
    return knex.schema.createTable('personas', function(table) {
    table.increments('idPersona').notNullable().unique();
    table.string('nombre').notNullable();
    table.string('apellido').notNullable();
    table.string('cedula').notNullable();
    table.string('codigoPostal').notNullable();
    table.integer('idtipoUsuario').notNullable();
    })
    .createTable('productos', function(table){
      table.increments('idProducto').notNullable().unique();
      table.string('detalle').notNullable();
      table.integer('cantidad').notNullable();
      table.float('precioUnitario').notNullable();
      table.integer('idCategoria').notNullable();
    })
    .createTable('detalles', function(table){
      table.increments('idDetalle').notNullable().unique();
      table.integer('idProducto').notNullable();
      //table.integer('idFactura').notNullable();
    })
    .createTable('facturas', function(table){
      table.increments('idFactura').notNullable().unique();
      table.integer('numFactura').notNullable();
      table.string('fecha').notNullable();
      table.integer('id ').notNullable();
      table.integer('idDetalle').notNullable();
      table.integer('idPersona').notNullable();
    })
    .createTable('tipoUsuarios', function(table){
      table.increments('idTipoUsuario').notNullable().unique();
      table.string('drescripcion').notNullable();
    })
    .createTable('categorias', function(table){
      table.increments('idCategoria').notNullable().unique();
      table.string('nombre').notNullable();
    })
   };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('personas')
    .dropTable('productos')
    .dropTable('detalles')
    .dropTable('facturas')
    .dropTable('tipoUsuarios')
    .dropTable('categorias');

  };