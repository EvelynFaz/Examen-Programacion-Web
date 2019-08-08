
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public.tipoUsuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('public.tipoUsuarios').insert([
        {drescripcion: 'Cliente'},
        {drescripcion: 'Proveedor'}
      ]);
    });
};
