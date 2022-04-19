import {createStore} from "vuex";

const store = createStore({
    state: {
        characters:[],
    },
    getters:{
        getChar:(state)=>state.characters   
    },
    mutations:{
        addChar(state, item){
            state.characters = item;
        }
    },

});

export default store;