
exports.up = function(knex) {
    return knex.schema.createTable('tracks', tbl => {
        tbl.increments();

        tbl.string('name', 500)
        .notNullable();

        tbl.string('description', 1000)
            .notNullable();

        tbl.string('shortDesc', 1000)
            .notNullable();

        tbl.string('link', 100);

        tbl.string('strengths', 1000);

        tbl.boolean('toggle')
            .defaultTo(true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tracks');
};
