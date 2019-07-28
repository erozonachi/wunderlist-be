
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.text('email', 128)
        .unique()
        .notNullable();
      tbl.text('password')
        .notNullable();
    })
    .createTable('todos', tbl => {
      tbl.increments();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.text('title')
        .notNullable();
      tbl.text('description');
      tbl.boolean('completed')
        .defaultTo(false);
      tbl.dateTime('scheduled_at')
        .notNullable();
      tbl.text('repeat')
        .defaultTo('no-repeat');
      tbl.timestamp();
      tbl.unique(['user_id', 'title']);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('todo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('todos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.text('name')
        .notNullable();
      tbl.text('notes');
      tbl.boolean('completed')
        .defaultTo(false);
      tbl.timestamp();
      tbl.unique(['todo_id', 'name']);
    })
    .createTable('shares', tbl => {
      tbl.increments();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('todo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('todos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.unique(['user_id', 'todo_id']);
    });
};

exports.down = function(knex) {
  
};
