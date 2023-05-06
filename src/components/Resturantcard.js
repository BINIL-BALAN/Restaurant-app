import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Resturantcard({data}) {
  return (
    <Link to={ '/resturant-view/'+data.id} style={{textDecoration:'none',color:'white'}}>  
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" className='p-2' src={data.photograph} style={{height:'350px',borderRadius:'15px'}} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        ({data.cuisine_type})
        </Card.Text>
        <Card.Text>
          {data.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Resturantcard