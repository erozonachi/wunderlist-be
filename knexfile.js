// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:root@127.0.0.1:5432/wunderlist',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/data/migrations',
      tableName: 'db_migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    }
  },
  testing: {
    client: 'postgresql',
    connection: 'postgres://postgres:root@127.0.0.1:5432/wunderlist_test',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/data/migrations',
      tableName: 'db_migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './dist/data/migrations',
      tableName: 'db_migrations'
    },
    seeds: {
      directory: './dist/data/seeds'
    }
  },

};
