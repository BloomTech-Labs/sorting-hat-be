
exports.up = function(knex) {
    return knex.schema.createTable('tracks', tbl => {
        tbl.increments();
          
        tbl.decimal('fullstack', 3, 2)
            .defaultTo(0);
  
        tbl.decimal('iOS', 3, 2)
            .defaultTo(0);
  
        tbl.decimal('andriod', 3, 2)
            .defaultTo(0);
  
        tbl.decimal('UX', 3, 2)
            .defaultTo(0);
  
        tbl.decimal('DS', 3, 2)
            .defaultTo(0);

      // Foreign Keys
        tbl.integer('answer_id')
          .unsigned()
          .references('id')
          .inTable('answers')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tracks');
};
