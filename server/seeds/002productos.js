
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public.productos').del()
    .then(function () {
      // Inserts seed entries
      return knex('public.productos').insert([
        {
          detalle:"martillo",
          cantidad:2,
          precioUnitario:2.34,
          idCategoria:3
        },
        {
          detalle:"Destornillador",
          cantidad:4,
          precioUnitario:1.50,
          idCategoria:1
        },
        {
          detalle:"Pinza inglesa",
          cantidad:5,
          precioUnitario:3.40,
          idCategoria:3
        }
      ]);
    });
};
