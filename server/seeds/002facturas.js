
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public.facturas').del()
    .then(function () {
      // Inserts seed entries
      return knex('public.facturas').insert([
        {
          numFactura:1,
          fecha:"18-03-2019",
          id:2,
          idDetalle:1,
          idPersona:2
        },
        {
          numFactura:1,
          fecha:"18-03-2019",
          id:2,
          idDetalle:1,
          idPersona:2
        },
        {
          numFactura:1,
          fecha:"18-03-2019",
          id:2,
          idDetalle:1,
          idPersona:2
        }
      ]);
    });
};
