
exports.seed = function(knex) {
  return knex('answers').del()
    .then(function () {
      
      const answers = [
        { a_choice: 'Nulla et pellentesque, facilisis pede', b_choice: 'This is an answer to the question', c_choice: 'Nonummy ante pulvinar', d_choice: 'Lectus leo', question_id: 1 },
        { a_choice: 'This is an answer to the question', b_choice: 'Amet hendrerit amet, diam arcu et', c_choice: 'Cras eleifend litora, pellentesque donec mus, volutpat libero', d_choice: 'Elit wisi, et senectus etiam', question_id: 2 },
        { a_choice: 'Dolorem possimus, quis ante', b_choice: 'Orci dapibus', c_choice: 'This is an answer to the question', d_choice: 'Nisl convallis ut, primis nisl, sed mollis purus', question_id: 3 },
        { a_choice: 'Ultricies adipiscing, nec pede nulla', b_choice: 'Vitae aliquam', c_choice: 'Tristique magnis pretium, hymenaeos mi', d_choice: 'This is an answer to the question', question_id: 4 },
        { a_choice: 'G_d is the answer', b_choice: 'Life has no inherent meaning; we bring the meaning we want to life', c_choice: '42', d_choice: 'idk the computers are down', e_choice: 'have you tried googling it?', question_id: 5 }
      ];

      return knex('answers').insert(answers);
    });
};
