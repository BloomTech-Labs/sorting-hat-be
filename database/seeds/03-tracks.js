
exports.seed = function(knex) {
  return knex('tracks').del()
    .then(function () {
      const tracks = [
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 1 }
      ];
      
      return knex('tracks').insert(tracks);
    });
};
