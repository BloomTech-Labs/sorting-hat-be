
exports.seed = function(knex) {
  return knex('tracks').del()
    .then(function () {
      const tracks = [
        { fullstack: 1, iOS: 2, andriod: 3, UX: 4, DS: 0, answer_id: 1 },
        { fullstack: 4, iOS: 4, andriod: 1, UX: 0, DS: 0, answer_id: 2 },
        { fullstack: 1, iOS: 1, andriod: 4, UX: 0, DS: 0, answer_id: 3 },
        { fullstack: 1.5, iOS: 0.5, andriod: 0, UX: 3, DS: 4, answer_id: 4 },
        { fullstack: 1, iOS: 5, andriod: 4, UX: 3, DS: 2, answer_id: 5 },
        { fullstack: 4, iOS: 1, andriod: 5, UX: 3, DS: 0, answer_id: 6 },
        { fullstack: 2.2, iOS: 4, andriod: 5, UX: 1, DS: 1, answer_id: 7 },
        { fullstack: 5, iOS: 2, andriod: 3, UX: 1, DS: 4, answer_id: 8 },
        { fullstack: 1, iOS: 5, andriod: 4, UX: 0, DS: 2, answer_id: 9 },
        { fullstack: 1.5, iOS: 2, andriod: 1, UX: 5, DS: 4.1, answer_id: 10 },
        { fullstack: 4, iOS: 4, andriod: 3, UX: 0.5, DS: 2, answer_id: 11 },
        { fullstack: 5, iOS: 4.9, andriod: 0, UX: 1, DS: 2, answer_id: 12 },
        { fullstack: 0, iOS: 0.25, andriod: 3.2, UX: 4, DS: 5, answer_id: 13 },
        { fullstack: 3, iOS: 2.75, andriod: 0, UX: 4, DS: 0, answer_id: 14 },
        { fullstack: 3, iOS: 5, andriod: 1, UX: 0, DS: 2, answer_id: 15 },
        { fullstack: 2, iOS: 3, andriod: 1, UX: 0, DS: 5, answer_id: 16 },
        { fullstack: 0, iOS: 1.15, andriod: 2, UX: 5, DS: 4, answer_id: 17 },
        { fullstack: 4.5, iOS: 4.1, andriod: 0, UX: 1, DS: 2, answer_id: 18 },
        { fullstack: 3.5, iOS: 3, andriod: 1, UX: 2, DS: 1, answer_id: 19 },
        { fullstack: 1, iOS: 0.1, andriod: 3, UX: 4.5, DS: 2.5, answer_id: 20 },
        { fullstack: 0.5, iOS: 0.79, andriod: 4, UX: 3.25, DS: 2.25, answer_id: 21 }
      ];
      
      return knex('tracks').insert(tracks);
    });
};
