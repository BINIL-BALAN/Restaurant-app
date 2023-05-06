import React from 'react'
import Review from './Review'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Modal } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import restaurantList from '../actions/HomeAction'
function ViewOneResturant() {
    const params = useParams()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(restaurantList());
    },[dispatch])

    // const data = useSelector(state => state.resturantReducer )
    // console.log('inside view restaurant',data);
    // const restaurant =  data.restaurants?.find(item => item.id === params.id) 

   let restaurant = useSelector( state => {
        console.log('inside useSelector',state.resturantReducer.resturants)
        let resturants = state.resturantReducer.resturants.find(item => item.id === parseInt(params.id))  
        console.log('params.id',params.id);
        console.log('inside view restaurant',resturants)
       return resturants
    } )
    
   
    return (
        <>
            {restaurant ? (<Row className='p-5'>
                <Col md={3}>
                    <Image src={restaurant.photograph} fluid className='rounded border p-1'></Image>
                </Col>

                <Col md={9}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>{restaurant.name}</h1>
                            <p>{restaurant.neighborhood}</p>
                        </ListGroup.Item>
                        <ListGroup.Item> <p>Cuisine : {restaurant.cuisine_type}</p> </ListGroup.Item>
                        <ListGroup.Item><p>Address : {restaurant.address}</p></ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='ps-0' variant="dark" onClick={handleShow}>
                              Click here to see operating hours
                            </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <ListGroup.Item><p>Monday : {restaurant.operating_hours.Monday}</p></ListGroup.Item>
                                <ListGroup.Item><p>Tuesday : {restaurant.operating_hours.Tuesday}</p></ListGroup.Item>
                                <ListGroup.Item><p>Wednesday : {restaurant.operating_hours.Wednesday}</p></ListGroup.Item>
                                <ListGroup.Item><p>Thursday : {restaurant.operating_hours.Thursday}</p></ListGroup.Item>
                                <ListGroup.Item><p>Friday : {restaurant.operating_hours.Friday}</p></ListGroup.Item>
                                <ListGroup.Item><p>Saturday : {restaurant.operating_hours.Saturday}</p></ListGroup.Item>
                                <ListGroup.Item><p>Sunday : {restaurant.operating_hours.Sunday}</p></ListGroup.Item>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </ListGroup.Item>
                        <ListGroup.Item><Review reviews={restaurant.reviews}/></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>) : 'Nothing to show'
            }
        </>
    )
}

export default ViewOneResturant
