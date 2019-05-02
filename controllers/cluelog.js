const ClueLogModel = require('../models/cluelogModel.js');
const cluelogInstance = new ClueLogModel();

module.exports = {
    allClueLog: async ()=>{
        return cluelogInstance.all();
    },
    getClueLog: async (params)=>{
        return await cluelogInstance.select(params);
    },
    createClueLog: async (params)=>{
        return await cluelogInstance.insert(params);
    },
    editClueLog: async (id,params)=>{
        return await cluelogInstance.update(id,params)
    },
    delClueLog: async (id)=>{
        return await cluelogInstance.delete(id);
    },
};