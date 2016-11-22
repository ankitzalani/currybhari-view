module.exports = {
    // App Settings
    MONGO_URI: process.env.MONGO_URI || 'localhost',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'abc123',

    // OAuth 2.0
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'b57a5c834cb8dc31bec6cf3ace6069fd',

    GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',
};
