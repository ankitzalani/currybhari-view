var databaseURL = process.env.DATABASE_URL;

module.exports = {

    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};
