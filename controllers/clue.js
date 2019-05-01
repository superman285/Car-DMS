const ClueModel = require('../models/clueModel.js');
const clueInstance = new ClueModel();

module.exports = {
    allClue: async ()=>{
        let allClueRes = await clueInstance.all();

        let salerRes = await clueInstance.getSaler();
        console.log('controller来的',salerRes);
        console.log('constorller来的',allClueRes[0].name);

        allClueRes.map(clue=>{
            salerRes.map(saler=>{
                if (clue.id===saler.id) {
                    return Object.assign(clue,{
                        saler: saler.name
                    })
                }
            })
        });

        console.log('controller来的new',allClueRes);

        return allClueRes;
    },
    getClue: async (params)=>{
        let clueRes = await clueInstance.select(params);
        let salerRes = await clueInstance.getSaler();

        clueRes.map(clue=>{
            salerRes.map(saler=>{
                if (clue.id===saler.id) {
                    return Object.assign(clue,{
                        saler: saler.name
                    })
                }
            })
        });
        return clueRes;
    },
    createClue: async (params)=>{
        return await clueInstance.insert(params);
    },
    editClue: async (id,params)=>{
        return await clueInstance.update(id,params)
    },
    delClue: async (id)=>{
        return await clueInstance.delete(id);
    },
    getSaler: async ()=>{
        return await clueInstance.getSaler();
    }
};