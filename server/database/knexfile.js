var databaseURL = process.env.DATABASE_URL;

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            database: databaseURL
        },
        pool: {
            min: 2,
            max: 10
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'example'
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};
