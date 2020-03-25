
exports.seed = function(knex) {
  return knex('tracks').del()
    .then(function () {
      const tracks = [
        
        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 1 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 1 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 1 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 1 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 1 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 2 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 2 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 2 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 2 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 2 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 3 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 3 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 3 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 3 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 3 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 4 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 4}, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 4 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 4 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 4 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 5 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 5 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 5 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 5 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 5 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 6 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 6 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 6 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 6 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 6 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 7 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 7 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 7 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 7 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 7 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 8 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 8 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 8 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 8 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 8 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 9 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 9 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 9 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 9 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 9 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 10 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 10 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 10 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 10 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 10 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 11 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 11 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 11 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 11 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 11 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 12 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 12 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 12 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 12 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 12 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 13 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 13 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 13 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 13 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 13 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 14 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 14 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 14 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 14 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 14 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 15 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 15 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 15 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 15 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 15 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 16 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 16 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 16 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 16 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 16 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 17 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 17 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 17 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 17 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 17 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 18 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 18 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 18 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 18 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 18 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 19 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 19 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 19 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 19 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 19 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 20 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 20 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 20 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 20 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 20 },  

        { name: 'fullstack', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/full-stack-web-development', points: (Math.random()*5).toFixed(1), answer_id: 21 }, 
        { name: 'iOS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/ios-development', points: (Math.random()*5).toFixed(1), answer_id: 21 }, 
        { name: 'android', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 21 }, 
        { name: 'UX', description: 'This is fullstack track description', points: (Math.random()*5).toFixed(1), answer_id: 21 }, 
        { name: 'DS', description: 'This is fullstack track description', link: 'https://lambdaschool.com/courses/data-science', points: (Math.random()*5).toFixed(1), answer_id: 21 }

      ];
      
      return knex('tracks').insert(tracks);
    });
};
