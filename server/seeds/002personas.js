
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public.personas').del()
    .then(function () {
      // Inserts seed entries
      return knex('public.personas').insert([
        {
          nombre:"Pablo",
          apellido:"Cortesz",
          cedula:"1723654569",
          codigoPostal:"HF12F",
          idtipoUsuario:2
        },
        {
          nombre:"Evelyn",
          apellido:"Faz",
          cedula:"1722454239",
          codigoPostal:"18H2",
          idtipoUsuario:1
        },
      ]);
    });
};
