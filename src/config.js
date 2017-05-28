// Database Configuration ==============================

module.exports = {
	dbUrl: 'mongodb://localhost/notications',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'db'

};
