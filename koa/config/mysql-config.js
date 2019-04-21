const config = {
  host:'192.144.180.8',
  port: '3306',
  user:'root',
  password:'123456',
  database:'blog',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
module.exports = config;
