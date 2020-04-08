
exports.up = function(knex) {
    return knex.schema.createTable('points', tbl => {
        // tbl.primary(['answer_id', 'track_id']);
        tbl.increments();

        tbl.decimal('points', 3, 2)
            .defaultTo(0);

        // Foreign Keys
        tbl.integer('answer_id')
        .unsigned()
        .references('id')
        .inTable('answers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        tbl.integer('track_id')
        .unsigned()
        .references('id')
        .inTable('tracks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('points');
};
