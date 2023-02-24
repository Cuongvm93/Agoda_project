import {legacy_createStore as createStore} from 'redux'
let initialState={
    search:{
        searchValue:"",
        type:""
    },
    date:{
        checkin:"",
        checkout:"",
    }

}
let searchReducer=(state=initialState,action)=>{
    if(action.type=='choice_value'){
        return {
            ...state,
            
                search:{
                    searchValue:action.payload,
                    type:action.typeSearch,
                    id:action.id
                }
            
        }
    }
    if(action.type=="change_date"){
        
        return{
            ...state,
            date: {
                checkin:action.checkIn,
                checkout:action.checkOut
            }
        }
    }   
    return state
}
let store=createStore(searchReducer);
export default store;