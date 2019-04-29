const Base = require('../config/base.js');


//定义用户模型并继承基础模型
class UserModel extends Base {
    // 定义参数默认值为 user 表
    constructor(props = 'user') {
        super(props);
    }
}

module.exports = UserModel;


