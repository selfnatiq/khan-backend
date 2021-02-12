// Old database configuration
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "sqlite",
//         filename: env("DATABASE_FILENAME", ".tmp/data.db"),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

// mongodb atlas connection
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        database: "nati-strapi-db",
        uri: env("DATABASE_URI"),
      },
      options: {
        ssl: true,
      },
    },
  },
});
