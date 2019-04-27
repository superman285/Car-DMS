const Base = require('../config/base.js');


//定义用户模型并继承基础模型
class ClueModel extends Base {
    // 定义参数默认值为 clue 表
    constructor(props = 'clue') {
        super(props);
    }
}

module.exports = ClueModel;