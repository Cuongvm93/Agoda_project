import {legacy_createStore as createStore} from 'redux'
let initialState={
    searchValue:"",

}
let searchReducer=(state=initialState,action)=>{
    if(action.type=='choice_value'){
        return {
            ...state,searchValue:action.payload
        }
    }
    return state
}
let store=createStore(searchReducer);
export default store;