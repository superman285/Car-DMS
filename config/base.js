const knex = require('./knex');

class Base {
    constructor(props) {
        this.table = props;
    }
    all(){
        return knex(this.table).select();
    }
    select(params){
        return knex(this.table).select().where(params);
    }
    insert(params){
        return knex(this.table).insert(params);
    }
    update(id,params){
        return knex(this.table).where('id','=',id).update(params);
    }
    delete(id){
        return knex(this.table).where('id','=',id).del();
    }
    getSaler(){
        return knex('user').join('clue','user.id','=','clue.user_id').select('clue.id','user.name');
    }
}

module.exports = Base;
