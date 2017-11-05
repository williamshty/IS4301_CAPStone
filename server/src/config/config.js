module.exports = {
    port: process.env.PORT || 8087,
    db: {
        database: process.env.DB_NAME || 'risk-profile',
        user: process.env.DB_USER || 'risk-profile',
        password: process.env.DB_PASS || 'risk-profile',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './risk-profile.sqlite'
        }
    }

}
