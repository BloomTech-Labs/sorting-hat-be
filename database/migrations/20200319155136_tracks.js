
exports.up = function(knex) {
    return knex.schema.createTable('tracks', tbl => {
        tbl.increments();
        
        tbl.string('name', 500)
            .notNullable();

        tbl.string('description', 1000)
            .notNullable();

        tbl.string('link', 100);

        tbl.decimal('points', 3, 2)
            .defaultTo(0);

        tbl.boolean('toggle')
            .defaultTo(true);

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
