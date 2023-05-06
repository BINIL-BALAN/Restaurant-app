import React from 'react'
import {useState,useEffect} from 'react'
import { Row , Col } from 'react-bootstrap'
import Resturantcard from './Resturantcard'
import restaurantList from '../actions/HomeAction'
import { useDispatch,useSelector } from 'react-redux'

function Home() {
//  const [restaurents,setRestaurent] = useState([])
// const getDetails=async ()=>{
//  const  result = await fetch('restaurants.json')
//  console.log(result);
//   result.json().then((data)=>{
//     setRestaurent(data.restaurants)
//   })
// }

const dispatch = useDispatch()
useEffect(() => {
    // getDetails()
   dispatch(restaurantList())
},[])
const result = useSelector(state => {
  return state.resturantReducer
})

let allResturants=result.resturants
console.log('inside home component',result.resturants)
  return (
  <>
      <Row className='ms-3'>        
        {
        (result.resturants).map(restaurant => (
          <Col className='mt-3' md={4} sm={6} lg={3}>
            <Resturantcard data={restaurant}/>
          </Col>
        ))
        }
      </Row>
  </>
  )
}

export default Home