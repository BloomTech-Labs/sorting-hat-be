
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      const questions = [
        { question: 'Which describes your preferred work environment?' },
        { question: 'How do you learn?' },
        { question: 'What do you find more fascinating?' },
        { question: 'How do you problem solve?' },
        { question: 'When constructing a new chair...' },
        { question: 'How would you explain music to someone who\'s never listened to it before?' },
        { question: 'What describes you better?' },
        { question: 'What is the most appealing to you?' },
      ];

      return knex('questions').insert(questions);
    });
};
