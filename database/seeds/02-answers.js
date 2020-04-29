exports.seed = function(knex) {
	return knex('answers').del().then(function() {
		const answers = [
			{ choice: 'Working with the user.', question_id: 1 },
			{ choice: 'Working with people who are working on the same thing you are.', question_id: 1 },
			{ choice: 'Working with people who all have their part to work on.', question_id: 1 },
			{ choice: 'Working mostly by yourself so that you can have high level of concentration.', question_id: 1 },

			{ choice: 'I only really learn when I can see it for myself.', question_id: 2 },
			{ choice: 'I need to follow an example and apply the teachings to my situation.', question_id: 2 },
			{ choice: 'I don’t truly learn until I do it myself.', question_id: 2 },
			{
				choice: 'I am an independent thinker; sometimes I correct those who are teaching me.',
				question_id: 2
			},

			{ choice: 'Design Ferrari’s smooth lines. The aesthetics.', question_id: 3 },
			{ choice: 'Design the engine, gears, transmission, etc. ', question_id: 3 },
			{ choice: 'Design the steering wheel for the right ergonomics and functions.', question_id: 3 },
			{
				choice: 'Design the testing of the Ferrari’s performance.',
				question_id: 3
			},

			{ choice: 'Lay everything out. Get the big picture, and attack.', question_id: 4 },
			{ choice: "Trial and error. If it doesn't work, try again until it does.", question_id: 4 },
			{ choice: 'Find the need, solving one problem at a time.', question_id: 4 },
			{ choice: 'Scientific approach. Hypothesis and test.', question_id: 4 },

			{ choice: 'Pictures would help me the most.', question_id: 5 },
			{
				choice: 'Step by step instruction helps the most.',
				question_id: 5
			},
			{
				choice: 'Turns out Amazon shipped a bar stool instead. I can work with that.',
				question_id: 5
			},
			{
				choice:
					'I prefer to make a custom chair. The angles, materials, and dimensions need to be just right for my living room.',
				question_id: 5
			},

			{ choice: 'Tap your finger, and hum. Feel the music.', question_id: 6 },
			{ choice: 'Music consists of harmony, beats, rhythms, and melodies.', question_id: 6 },
			{ choice: 'Music is beautiful, complex, and utilizes your ears to enjoy the dance.', question_id: 6 },
			{ choice: 'Music is like a dance for the ears. Perfectly choreographed in your ears.', question_id: 6 },

			{
				choice: 'I see myself working on cross functionality. Moving from one device to the next flawlessly.',
				question_id: 7
			},
			{
				choice: 'I see myself building for the desktop as it is the capstone of all operations.',
				question_id: 7
			},
			{ choice: 'I see myself building for the smartphone because mobility is the future.', question_id: 7 },
			{ choice: 'I see myself as completely custom. All of my devices are specialized to me.', question_id: 7 },

			{ choice: 'I prefer functionality to good looks.', question_id: 8 },
			{ choice: 'I prefer quality design over high production low design.', question_id: 8 },
			{ choice: 'I prefer custom solutions over basic functionality.', question_id: 8 },
			{ choice: 'I prefer to drive on a nicely paved road over an open field.', question_id: 8 }
		];

		return knex('answers').insert(answers);
	});
};
