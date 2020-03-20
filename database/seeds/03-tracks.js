
exports.seed = function(knex) {
  return knex('tracks').del()
    .then(function () {
      const tracks = [
        { fullstack: 1, iOS: 2, andriod: 3, UX: 4, DS: 0, answer_id: 1 },
        { fullstack: 4, iOS: 4, andriod: 1, UX: 0, DS: 0, answer_id: 2 },
        { fullstack: 1, iOS: 1, andriod: 4, UX: 0, DS: 0, answer_id: 3 },
        { fullstack: 1.5, iOS: 0.5, andriod: 0, UX: 3, DS: 4, answer_id: 4 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 5 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 6 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 7 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 8 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 9 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 10 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 11 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 12 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 13 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 14 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 15 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 16 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 17 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 18 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 19 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 20 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, answer_id: 21 }
      ];
      
      return knex('tracks').insert(tracks);
    });
};
