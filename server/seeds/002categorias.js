
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public.categorias').del()
    .then(function () {
      // Inserts seed entries
      return knex('public.categorias').insert([
        {nombre: 'Herramientas de mano'},
        {nombre: 'Sierras'}
      ]);
    });
};
