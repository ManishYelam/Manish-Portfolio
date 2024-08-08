const crypto = require('crypto');
const fs = require('fs');

const generateSecret = () => {
    return crypto.randomBytes(32).toString('hex');
};

const jwtSecret = generateSecret();

fs.writeFileSync('.env', `JWT_SECRET=${jwtSecret}\n`);

console.log('JWT secret generated and saved to .env file.');

