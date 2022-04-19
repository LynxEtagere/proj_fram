import {createStore} from "vuex";

const store = createStore({
    state: {
        characters:[],
    },
    getters:{
        getChar:(state)=>state.characters   
    },
    actions:{
    },
    mutations:{
        addChar(state,characters){

        }
    },

});

export default store;