const UserModel = require('../models/userModel.js');
const User = new UserModel();


module.exports = {


    allUser: async ()=>{
        return await User.all();
    },

    getUser: async (param)=>{
        /*条件写法
        .where({
           id: 2,
           last_name:  'User'
         })*/


    },

    createUser: async ()=>{

    },

    editUser: async ()=>{

    },

    delUser: async ()=>{

    }




}