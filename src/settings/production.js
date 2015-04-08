module.exports = {
  mongodb: {
    uri: process.env.MONGOLAB_URI
  },
  session: {
    secret: '993W4!43!@fv_0;MBd'
  },
  server: {
    host: '',
    port: process.env.PORT
  }
};