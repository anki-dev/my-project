module.exports = ({
  env
}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        "client": "postgres",
        "host": "${process.env.DATABASE_HOST || '0.0.0.0'}",
        "port": "${process.env.DATABASE_PORT || 1337}",
        "database": "${process.env.DATABASE_NAME}",
        "username": "${process.env.DATABASE_USERNAME}",
        "password": "${process.env.DATABASE_PASSWORD}",
        "ssl": {
          "rejectUnauthorized": false
        }
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
