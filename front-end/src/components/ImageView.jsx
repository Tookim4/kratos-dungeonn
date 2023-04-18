import React from 'react'
import {Card} from 'react-bootstrap'

const ImageView = ({image}) => {
  return (
    <div>
    <Card>
      <Card.Img src={image.url} alt={image.title} />
      <Card.Body className="image-info">
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>{image.description}</Card.Text>
        <p>{image.date}</p>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImageView