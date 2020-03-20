
exports.seed = function(knex) {
  return knex('answers').del()
    .then(function () {
      
      const answers = [
        { choice: 'Nulla et pellentesque, facilisis pede', question_id: 1 },
        { choice: 'This is an answer to the question', question_id: 1 },
        { choice: 'Nonummy ante pulvinar', question_id: 1 },
        { choice: 'Lectus leo', question_id: 1 },

        { choice: 'This is an answer to the question', question_id: 2 },
        { choice: 'Amet hendrerit amet, diam arcu et', question_id: 2 },
        { choice: 'Cras eleifend litora, pellentesque donec mus, volutpat libero', question_id: 2 },
        { choice: 'Elit wisi, et senectus etiam', question_id: 2 },

        { choice: 'Dolorem possimus, quis ante', question_id: 3 },
        { choice: 'Orci dapibus', question_id: 3 },
        { choice: 'This is an answer to the question', question_id: 3 },
        { choice: 'Nisl convallis ut, primis nisl, sed mollis purus', question_id: 3 },

        { choice: 'Ultricies adipiscing, nec pede nulla', question_id: 4 },
        { choice: 'Vitae aliquam', question_id: 4 },
        { choice: 'Tristique magnis pretium, hymenaeos mi', question_id: 4 },
        { choice: 'This is an answer to the question', question_id: 4 },

        { choice: 'G_d is the answer', question_id: 5 },
        { choice: 'Life has no inherent meaning; we bring the meaning we want to life', question_id: 5 },
        { choice: '42', question_id: 5 },
        { choice: 'idk the computers are down', question_id: 5 },
        { choice: 'have you tried googling it?', question_id: 5 }
      ];

      return knex('answers').insert(answers);
    });
};
