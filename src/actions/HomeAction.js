import axios from "axios";
import {SUCCESS,FAIL} from '../constants/resturentConstants'

const restaurantList = () => async (dispatch) =>{
    try{
        const {data} = await axios.get('/restaurants.json')
        console.log(SUCCESS,FAIL)
        dispatch({
            payload:data.restaurants,
            type:SUCCESS
        })
    }catch(error){
        dispatch({
            payload: error,
            type:FAIL
        })
    }
    
}

export default restaurantList
