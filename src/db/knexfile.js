module.exports = {
  development: {
    client: 'mysql',
    useNullAsDefault: true,
    connection: {
      host: process.env.DB_HOSTNAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      insecureAuth: true,
    },
    pool: { min: 0, max: 7 },
  },
};
