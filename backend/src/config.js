const dotenv = require('dotenv');

dotenv.config();

const config = {
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_HOST: process.env.MONGO_HOST,
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET
}

module.exports = config;