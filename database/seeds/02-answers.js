
exports.seed = function(knex) {
  return knex('answers').del()
    .then(function () {
      
      const answers = [
        { choice: 'Interacting with people, primarily with people that use your product', question_id: 1},
        { choice: 'Interacting with people inside your company and apart of your department', question_id: 1 },
        { choice: 'Interacting with people inside your company between all departments', question_id: 1 },
        { choice: 'Interacting with few people, mostly by yourself', question_id: 1 },

        { choice: 'Visual learner', question_id: 2 },
        { choice: 'Learn by examples', question_id: 2 },
        { choice: 'Hands on learner', question_id: 2 },
        { choice: 'I question the validity of teachings or I understand most things the first time', question_id: 2 },

        { choice: 'Ferrari\'s smooth lines. The aesthetics.', question_id: 3 },
        { choice: 'Ferrari\'s engine, transmission, everything mechanically working together.', question_id: 3 },
        { choice: 'Driving the car, the wheel at your hands and the peddle at your feet.', question_id: 3 },
        { choice: 'Ferrari\'s team of engineers, mechanics, designers all working together to produce a single product', question_id: 3 },

        { choice: 'Lay everything out. Get the big picture, and attack.', question_id: 4 },
        { choice: 'Trial and error. If it doesn\'t work, try again until it does.', question_id: 4 },
        { choice: 'Find the need, solving one problem at a time.', question_id: 4 },
        { choice: 'Scientific approach. Hypothesis and test.', question_id: 4 },

        { choice: 'I prefer pictures with steps and instructions.', question_id: 5 },
        { choice: 'I have a general idea of what a chair looks like. I can afford to make a mistake once or twice to achieve my goal.', question_id: 5 },
        { choice: 'This isn\'t a chair, this is a barstool. Not what I thought, but hey, a barstool may fit better.', question_id: 5 },
        { choice: 'I prefer to make the chair myself. The cushion, angles and dimensions need to be just right.', question_id: 5 },

        { choice: 'Tap your finger, and hum. Feel the music.', question_id: 5 },
        { choice: 'Music consists of harmony, beats, rythms, and melodies.', question_id: 5 },
        { choice: 'Music is beautiful, complex, and utilizes your ears to enjoy the dance.', question_id: 5 },
        { choice: 'Music is like a dance for the ears. Perfectly choreographed in your ears.', question_id: 5 },

        { choice: 'I use both laptop and phone, but more importantly, I want to be able to pick up where I left off when switching.', question_id: 5 },
        { choice: 'I mainly stay on my laptop.', question_id: 5 },
        { choice: 'I use my phone for everything.', question_id: 5 },
        { choice: 'Whichever is more functional.', question_id: 5 },

        { choice: 'I prefer functionality over design', question_id: 6 },
        { choice: 'Quality over quantity.', question_id: 6 },
        { choice: 'Reach all people over the right people.', question_id: 6 },
        { choice: 'Drive on the road, rather than an open field.', question_id: 6 },
      ];

      return knex('answers').insert(answers);
    });
};
