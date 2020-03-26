
exports.seed = function(knex) {
  return knex('points').del()
    .then(function () {

      const points = [
        { points: (Math.random()*5).toFixed(1), answer_id: 1, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 1, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 1, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 1, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 1, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 2, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 2, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 2, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 2, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 2, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 3, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 3, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 3, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 3, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 3, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 4, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 4, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 4, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 4, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 4, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 5, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 5, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 5, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 5, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 5, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 6, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 6, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 6, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 6, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 6, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 7, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 7, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 7, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 7, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 7, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 8, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 8, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 8, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 8, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 8, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 9, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 9, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 9, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 9, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 9, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 10, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 10, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 10, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 10, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 10, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 11, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 11, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 11, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 11, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 11, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 12, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 12, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 12, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 12, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 12, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 13, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 13, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 13, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 13, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 13, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 14, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 14, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 14, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 14, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 14, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 15, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 15, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 15, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 15, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 15, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 16, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 16, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 16, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 16, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 16, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 17, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 17, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 17, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 17, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 17, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 18, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 18, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 18, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 18, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 18, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 19, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 19, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 19, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 19, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 19, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 20, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 20, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 20, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 20, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 20, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 21, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 21, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 21, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 21, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 21, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 22, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 22, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 22, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 22, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 22, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 23, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 23, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 23, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 23, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 23, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 24, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 24, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 24, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 24, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 24, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 25, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 25, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 25, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 25, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 25, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 26, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 26, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 26, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 26, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 26, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 27, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 27, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 27, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 27, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 27, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 28, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 28, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 28, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 28, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 28, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 29, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 29, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 29, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 29, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 29, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 30, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 30, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 30, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 30, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 30, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 31, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 31, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 31, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 31, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 31, track_id: 5 },

        { points: (Math.random()*5).toFixed(1), answer_id: 32, track_id: 1 },
        { points: (Math.random()*5).toFixed(1), answer_id: 32, track_id: 2 },
        { points: (Math.random()*5).toFixed(1), answer_id: 32, track_id: 3 },
        { points: (Math.random()*5).toFixed(1), answer_id: 32, track_id: 4 },
        { points: (Math.random()*5).toFixed(1), answer_id: 32, track_id: 5 }
      ];

      return knex('points').insert(points);
    });
};
