import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postImage } from '../features/imageSlice';

const ImageInput = () => {
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('imageName', imageName);
    // formData.append('imageDescription', imageDescription);
    // formData.append('image', image);
    // dispatch(postImage(formData));
  };

  // const images = useSelector((state) => state.images);

  return (
    <div>
      <Form onSubmit={handleSubmit} action='images/' encType="multipart/form-data">
      <Form.Group className="mb-3">
      <div>
        {/* <Form.Label htmlFor="title">Title</Form.Label> */}
        <Form.Control
          type="text"
          id="title"
          value={imageName}
          onChange={(event) => setImageName(event.target.value)}
          placeholder='Name'
          name='image_name'
        />
      </div>
      </Form.Group>

      <Form.Group className="mb-3">
      <div>
        {/* <Form.Label htmlFor="content">Content</Form.Label> */}
        <Form.Control
          type='text'
          id="content"
          value={imageDescription}
          onChange={(event) => setImageDescription(event.target.value)}
          placeholder='Description'
          name='image_description'
        />
      </div>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
         type="file"
         value={image}
         onChange={(event) => setImage(event.target.value)}
         name='image_file'
          />
      </Form.Group>
      <Button type="submit">Upload</Button>
    </Form>
    </div>
  )
}

export default ImageInput