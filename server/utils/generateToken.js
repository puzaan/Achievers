const jwt = require('jsonwebtoken')


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECERET, {
        expiresIn:'1m',
    });
}

module.exports = generateToken;