// 引用配置文件
const {host,port,user,password,database} = require('./config');
// 把配置文件中的信息，设置在初始化配置中
module.exports = require('knex')({
    client: 'mysql2',
    connection: {
        host,
        port,
        user,
        password,
        database,
    }
});