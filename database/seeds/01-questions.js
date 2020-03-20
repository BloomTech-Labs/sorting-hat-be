
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      const questions = [
        { question: 'Ultrices neque ullamcorper, arcu luctus, sapien congue amet elit nibh?' },
        { question: 'Lorem ipsum dolor sit amet, wisi eget dolor montes nulla odio, nonummy est parturient quis parturient amet?' },
        { question: 'Consectetuer penatibus sit sit risus pharetra et?' },
        { question: 'At porta eros turpis mauris varius iaculis, eros eu nibh lorem et?' },
        { question: 'What\'s the meaning to life?' }
      ];

      return knex('questions').insert(questions);
    });
};
