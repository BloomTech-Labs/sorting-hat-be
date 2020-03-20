
exports.seed = function(knex) {
  return knex('answers').del()
    .then(function () {
      
      const answers = [
        { a_choice_id: 6, a_choice: 'Nulla et pellentesque, facilisis pede', b_choice_id: 7, b_choice: 'This is an answer to the question', c_choice_id: 8, c_choice: 'Nonummy ante pulvinar', d_choice_id: 9, d_choice: 'Lectus leo', question_id: 1 },

        { a_choice_id: 10, a_choice: 'This is an answer to the question', b_choice_id: 11, b_choice: 'Amet hendrerit amet, diam arcu et', c_choice_id: 12, c_choice: 'Cras eleifend litora, pellentesque donec mus, volutpat libero', d_choice_id: 13, d_choice: 'Elit wisi, et senectus etiam', question_id: 2 },

        { a_choice_id: 14, a_choice: 'Dolorem possimus, quis ante', b_choice_id: 15, b_choice: 'Orci dapibus', c_choice_id: 16, c_choice: 'This is an answer to the question', d_choice_id: 17, d_choice: 'Nisl convallis ut, primis nisl, sed mollis purus', question_id: 3 },

        { a_choice_id: 18, a_choice: 'Ultricies adipiscing, nec pede nulla', b_choice_id: 19, b_choice: 'Vitae aliquam', c_choice_id: 20, c_choice: 'Tristique magnis pretium, hymenaeos mi', d_choice_id: 21, d_choice: 'This is an answer to the question', question_id: 4 },

        { a_choice_id: 22, a_choice: 'G_d is the answer', b_choice_id: 23, b_choice: 'Life has no inherent meaning; we bring the meaning we want to life', c_choice_id: 24, c_choice: '42', d_choice_id: 25, d_choice: 'idk the computers are down', e_choice_id: 26, e_choice: 'have you tried googling it?', question_id: 5 }
      ];

      return knex('answers').insert(answers);
    });
};
