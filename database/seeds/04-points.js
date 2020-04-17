exports.seed = function(knex) {
	return knex('points').del().then(function() {
		const points = [
			// Question 1
			{ points: 7, answer_id: 1, track_id: 1 },
			{ points: 0, answer_id: 1, track_id: 2 },
			{ points: 0, answer_id: 1, track_id: 3 },
			{ points: 0, answer_id: 1, track_id: 4 },
			{ points: 0, answer_id: 1, track_id: 5 },

			{ points: 0, answer_id: 2, track_id: 1 },
			{ points: 7, answer_id: 2, track_id: 2 },
			{ points: 0, answer_id: 2, track_id: 3 },
			{ points: 0, answer_id: 2, track_id: 4 },
			{ points: 0, answer_id: 2, track_id: 5 },

			{ points: 0, answer_id: 3, track_id: 1 },
			{ points: 0, answer_id: 3, track_id: 2 },
			{ points: 0, answer_id: 3, track_id: 3 },
			{ points: 6.13, answer_id: 3, track_id: 4 },
			{ points: 6.13, answer_id: 3, track_id: 5 },

			{ points: 0, answer_id: 4, track_id: 1 },
			{ points: 0, answer_id: 4, track_id: 2 },
			{ points: 7, answer_id: 4, track_id: 3 },
			{ points: 0, answer_id: 4, track_id: 4 },
			{ points: 0, answer_id: 4, track_id: 5 },
			// Question 2
			{ points: 7, answer_id: 5, track_id: 1 },
			{ points: 0, answer_id: 5, track_id: 2 },
			{ points: 0, answer_id: 5, track_id: 3 },
			{ points: 0, answer_id: 5, track_id: 4 },
			{ points: 0, answer_id: 5, track_id: 5 },

			{ points: 0, answer_id: 6, track_id: 1 },
			{ points: 7, answer_id: 6, track_id: 2 },
			{ points: 0, answer_id: 6, track_id: 3 },
			{ points: 0, answer_id: 6, track_id: 4 },
			{ points: 0, answer_id: 6, track_id: 5 },

			{ points: 0, answer_id: 7, track_id: 1 },
			{ points: 0, answer_id: 7, track_id: 2 },
			{ points: 0, answer_id: 7, track_id: 3 },
			{ points: 6.13, answer_id: 7, track_id: 4 },
			{ points: 6.13, answer_id: 7, track_id: 5 },

			{ points: 0, answer_id: 8, track_id: 1 },
			{ points: 0, answer_id: 8, track_id: 2 },
			{ points: 7, answer_id: 8, track_id: 3 },
			{ points: 0, answer_id: 8, track_id: 4 },
			{ points: 0, answer_id: 8, track_id: 5 },
			// Question 3
			{ points: 7, answer_id: 9, track_id: 1 },
			{ points: 0, answer_id: 9, track_id: 2 },
			{ points: 0, answer_id: 9, track_id: 3 },
			{ points: 0, answer_id: 9, track_id: 4 },
			{ points: 0, answer_id: 9, track_id: 5 },

			{ points: 0, answer_id: 10, track_id: 1 },
			{ points: 7, answer_id: 10, track_id: 2 },
			{ points: 0, answer_id: 10, track_id: 3 },
			{ points: 0, answer_id: 10, track_id: 4 },
			{ points: 0, answer_id: 10, track_id: 5 },

			{ points: 0, answer_id: 11, track_id: 1 },
			{ points: 0, answer_id: 11, track_id: 2 },
			{ points: 0, answer_id: 11, track_id: 3 },
			{ points: 6.13, answer_id: 11, track_id: 4 },
			{ points: 6.13, answer_id: 11, track_id: 5 },

			{ points: 0, answer_id: 12, track_id: 1 },
			{ points: 0, answer_id: 12, track_id: 2 },
			{ points: 7, answer_id: 12, track_id: 3 },
			{ points: 0, answer_id: 12, track_id: 4 },
			{ points: 0, answer_id: 12, track_id: 5 },
			// Question 4
			{ points: 7, answer_id: 13, track_id: 1 },
			{ points: 0, answer_id: 13, track_id: 2 },
			{ points: 0, answer_id: 13, track_id: 3 },
			{ points: 0, answer_id: 13, track_id: 4 },
			{ points: 0, answer_id: 13, track_id: 5 },

			{ points: 0, answer_id: 14, track_id: 1 },
			{ points: 7, answer_id: 14, track_id: 2 },
			{ points: 0, answer_id: 14, track_id: 3 },
			{ points: 0, answer_id: 14, track_id: 4 },
			{ points: 0, answer_id: 14, track_id: 5 },

			{ points: 0, answer_id: 15, track_id: 1 },
			{ points: 0, answer_id: 15, track_id: 2 },
			{ points: 0, answer_id: 15, track_id: 3 },
			{ points: 6.13, answer_id: 15, track_id: 4 },
			{ points: 6.13, answer_id: 15, track_id: 5 },

			{ points: 0, answer_id: 16, track_id: 1 },
			{ points: 0, answer_id: 16, track_id: 2 },
			{ points: 0, answer_id: 16, track_id: 3 },
			{ points: 7, answer_id: 16, track_id: 4 },
			{ points: 0, answer_id: 16, track_id: 5 },
			// Question 5
			{ points: 7, answer_id: 17, track_id: 1 },
			{ points: 0, answer_id: 17, track_id: 2 },
			{ points: 0, answer_id: 17, track_id: 3 },
			{ points: 0, answer_id: 17, track_id: 4 },
			{ points: 0, answer_id: 17, track_id: 5 },

			{ points: 0, answer_id: 18, track_id: 1 },
			{ points: 7, answer_id: 18, track_id: 2 },
			{ points: 0, answer_id: 18, track_id: 3 },
			{ points: 0, answer_id: 18, track_id: 4 },
			{ points: 0, answer_id: 18, track_id: 5 },

			{ points: 0, answer_id: 19, track_id: 1 },
			{ points: 0, answer_id: 19, track_id: 2 },
			{ points: 0, answer_id: 19, track_id: 3 },
			{ points: 6.13, answer_id: 19, track_id: 4 },
			{ points: 6.13, answer_id: 19, track_id: 5 },

			{ points: 0, answer_id: 20, track_id: 1 },
			{ points: 0, answer_id: 20, track_id: 2 },
			{ points: 7, answer_id: 20, track_id: 3 },
			{ points: 0, answer_id: 20, track_id: 4 },
			{ points: 0, answer_id: 20, track_id: 5 },
			// Question 6
			{ points: 7, answer_id: 21, track_id: 1 },
			{ points: 0, answer_id: 21, track_id: 2 },
			{ points: 0, answer_id: 21, track_id: 3 },
			{ points: 0, answer_id: 21, track_id: 4 },
			{ points: 0, answer_id: 21, track_id: 5 },

			{ points: 0, answer_id: 22, track_id: 1 },
			{ points: 7, answer_id: 22, track_id: 2 },
			{ points: 0, answer_id: 22, track_id: 3 },
			{ points: 0, answer_id: 22, track_id: 4 },
			{ points: 0, answer_id: 22, track_id: 5 },

			{ points: 0, answer_id: 23, track_id: 1 },
			{ points: 0, answer_id: 23, track_id: 2 },
			{ points: 0, answer_id: 23, track_id: 3 },
			{ points: 6.13, answer_id: 23, track_id: 4 },
			{ points: 6.13, answer_id: 23, track_id: 5 },

			{ points: 0, answer_id: 24, track_id: 1 },
			{ points: 0, answer_id: 24, track_id: 2 },
			{ points: 7, answer_id: 24, track_id: 3 },
			{ points: 0, answer_id: 24, track_id: 4 },
			{ points: 0, answer_id: 24, track_id: 5 },
			// Question 7
			{ points: 7, answer_id: 25, track_id: 1 },
			{ points: 0, answer_id: 25, track_id: 2 },
			{ points: 0, answer_id: 25, track_id: 3 },
			{ points: 0, answer_id: 25, track_id: 4 },
			{ points: 0, answer_id: 25, track_id: 5 },

			{ points: 0, answer_id: 26, track_id: 1 },
			{ points: 7, answer_id: 26, track_id: 2 },
			{ points: 0, answer_id: 26, track_id: 3 },
			{ points: 0, answer_id: 26, track_id: 4 },
			{ points: 0, answer_id: 26, track_id: 5 },

			{ points: 0, answer_id: 27, track_id: 1 },
			{ points: 0, answer_id: 27, track_id: 2 },
			{ points: 0, answer_id: 27, track_id: 3 },
			{ points: 6.13, answer_id: 27, track_id: 4 },
			{ points: 6.13, answer_id: 27, track_id: 5 },

			{ points: 0, answer_id: 28, track_id: 1 },
			{ points: 0, answer_id: 28, track_id: 2 },
			{ points: 7, answer_id: 28, track_id: 3 },
			{ points: 0, answer_id: 28, track_id: 4 },
			{ points: 0, answer_id: 28, track_id: 5 },
			// Question 8
			{ points: 0, answer_id: 29, track_id: 1 },
			{ points: 0, answer_id: 29, track_id: 2 },
			{ points: 0, answer_id: 29, track_id: 3 },
			{ points: 0, answer_id: 29, track_id: 4 },
			{ points: 6.13, answer_id: 29, track_id: 5 },

			{ points: 0, answer_id: 30, track_id: 1 },
			{ points: 0, answer_id: 30, track_id: 2 },
			{ points: 0, answer_id: 30, track_id: 3 },
			{ points: 6.13, answer_id: 30, track_id: 4 },
			{ points: 0, answer_id: 30, track_id: 5 },

			{ points: 0, answer_id: 31, track_id: 1 },
			{ points: 0, answer_id: 31, track_id: 2 },
			{ points: 0, answer_id: 31, track_id: 3 },
			{ points: 0, answer_id: 31, track_id: 4 },
			{ points: 6.13, answer_id: 31, track_id: 5 },

			{ points: 0, answer_id: 32, track_id: 1 },
			{ points: 0, answer_id: 32, track_id: 2 },
			{ points: 0, answer_id: 32, track_id: 3 },
			{ points: 6.13, answer_id: 32, track_id: 4 },
			{ points: 0, answer_id: 32, track_id: 5 }
		];

		return knex('points').insert(points);
	});
};
