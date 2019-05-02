const UserModel = require('../models/userModel.js');
const userInstance = new UserModel();
const {encrypt} = require('../utils/crypto_token');


module.exports = {
    allUser: async ()=>{
        return await userInstance.all();
    },
    login: async (params)=>{
        let result = await userInstance.select(params);
        console.log('loginGetRes',result);
        if (result.length) {
            console.log('success,there is a user',result[0]);
            let [encryPhone,encryPwd,encryID,name,role] = [encrypt(String(result[0].phone)),encrypt(String(result[0].password)),encrypt(String(result[0].id)),result[0].name,result[0].role];
            console.log(encryPhone,encryPwd,encryID,result[0].name);
            return [encryPhone,encryPwd,encryID,name,role];
        }else {
            return false;
        }
    },
    getUser: async (params)=>{
        /* param syntax
        .where({
           id: 2,
           last_name:  'User'
         })
         .where('id',1)
         */
        return await userInstance.select(params);
    },
    createUser: async (params)=>{
        /**
         * @param {object} params
         * @return {number} id
         */
        return await userInstance.insert(params);
    },
    editUser: async (id,params)=>{
        return await userInstance.update(id,params)
    },

    delUser: async (id)=>{
        return await userInstance.delete(id);
    }
};