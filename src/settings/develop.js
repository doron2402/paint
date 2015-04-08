module.exports = {
  mongodb: {
    host: 'localhost',
    db: 'app',
    uri: 'mongodb://localhost/app'
  },
  session: {
    secret: '993W4!43!@fv_0;MBd'
  },
  server: {
    host: 'localhost',
    port: process.env.PORT || 3000
  }
}