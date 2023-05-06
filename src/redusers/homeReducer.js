import {SUCCESS,FAIL} from '../constants/resturentConstants'
export const homeReducer = (state={resturants:[]},action)=>{
 switch(action.type){
    case SUCCESS : 
                  return {resturants:action.payload}
    case FAIL : 
                  return {resturants:action.payload}
    default : 
                  return state
 }

}