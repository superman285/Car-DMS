const ClueModel = require('../models/clueModel.js');
const clueInstance = new ClueModel();

module.exports = {
    allClue: async ()=>{
        return await clueInstance.all();
    },
    getClue: async (params)=>{
        return await clueInstance.select(params);
    },
    createClue: async (params)=>{
        return await clueInstance.insert(params);
    },
    editClue: async (id,params)=>{
        return await clueInstance.update(id,params)
    },
    delClue: async (id)=>{
        return await clueInstance.delete(id);
    }
};