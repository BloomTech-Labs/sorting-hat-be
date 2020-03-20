
exports.seed = function(knex) {
  return knex('tracks').del()
    .then(function () {
      const tracks = [
        { fullstack: 1, iOS: 2, andriod: 3, UX: 4, DS: 0, a_id: 6, answer_id: 1 },
        { fullstack: 4, iOS: 4, andriod: 1, UX: 0, DS: 0, b_id: 7, answer_id: 1 },
        { fullstack: 1, iOS: 1, andriod: 4, UX: 0, DS: 0, c_id: 8, answer_id: 1 },
        { fullstack: 1.5, iOS: 0.5, andriod: 0, UX: 3, DS: 4, d_id: 9, answer_id: 1 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, a_id: 10, answer_id: 2 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, b_id: 11, answer_id: 2 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, c_id: 12, answer_id: 2 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, d_id: 13, answer_id: 2 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, a_id: 14, answer_id: 3 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, b_id: 15, answer_id: 3 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, c_id: 16, answer_id: 3 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, d_id: 17, answer_id: 3 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, a_id: 18, answer_id: 4 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, b_id: 19, answer_id: 4 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, c_id: 20, answer_id: 4 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, d_id: 21, answer_id: 4 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, a_id: 22, answer_id: 5 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, b_id: 23, answer_id: 5 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, c_id: 24, answer_id: 5 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, d_id: 25, answer_id: 5 },
        { fullstack: 0, iOS: 0, andriod: 0, UX: 0, DS: 0, e_id: 26, answer_id: 5 }
      ];
      
      return knex('tracks').insert(tracks);
    });
};
