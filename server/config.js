module.exports = {
    // App Settings
    MONGO_URI: process.env.MONGODB_URI || 'mongodb://ankit:l0ve!slife@ds051334.mlab.com:51334/currybhari',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'abc123',

    // OAuth 2.0
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'b57a5c834cb8dc31bec6cf3ace6069fd',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'zDMwd4b-AH1wkEf4xxyXc5Lr',
    INITIALIZE_DB: process.env.INITIALIZE_DB || true
};
