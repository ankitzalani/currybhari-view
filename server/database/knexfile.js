var databaseURL = process.env.DATABASE_URL || 'postgres://gszdjrbvwmazqj:SVnFU-4h5ligf-mdZ7ngurrPf8@ec2-54-163-245-3.compute-1.amazonaws.com:5432/d3cjnek3hla7ba';

module.exports = {
    development: {
        client: 'pg',
        connection: databaseURL
    },
    production: {
        client: 'pg',
        connection: databaseURL
    }
};
