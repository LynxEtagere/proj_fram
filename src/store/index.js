import {createStore} from "vuex";
import axios from "axios";

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
        SET_CHAR(state,characters){
            state.characters = characters;
        }
    },

});

export default store;