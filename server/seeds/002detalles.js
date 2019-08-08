
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public.detalles').del()
    .then(function () {
      // Inserts seed entries
      return knex('public.detalles').insert([
        {
          idProducto:2
        },
        {
          idProducto:1
        },
      ]);
    });
};
