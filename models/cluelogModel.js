const Base = require('../config/base.js');


//定义线索log模型并继承基础模型
class ClueLogModel extends Base {
    // 定义参数默认值为 clue 表
    constructor(props = 'clue_log') {
        super(props);
    }
}

module.exports = ClueLogModel;