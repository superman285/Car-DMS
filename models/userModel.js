const Base = require('../config/base.js');


//定义用户模型并继承基础模型
class UserModel extends Base {
    // 定义参数默认值为 user 表
    constructor(props = 'user') {
        super(props);
    }
}

module.exports = UserModel;


/*
module.exports = {
    createUser:async (data)=>{
        let createRes = await knex('user').insert({
            name: data.name,
            phone: data.phone,
            password: data.password,
            role: data.role,
            created_time: data.created_time,
            is_deleted: data.is_deleted
        });
        return createRes;
    },
    getUser:async ()=>{
        let getRes = await knex('user').select();
        return getRes;
    },
    editUser: ()=>{

    },
    delUser: ()=>{

    }
}*/
