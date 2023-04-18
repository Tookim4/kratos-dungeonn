import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ImageInput from '../components/ImageInput'
import ImageView from '../components/ImageView'
import {getImages} from '../features/imageSlice'


const imagePage = () => {
  const dispatch = useDispatch()
  const {images} = useSelector((state) => state.images);

  // useEffect(() => {
  //   dispatch(getImages());
  // }, [dispatch]);

  return (
    <div>
        <ImageInput/>
        {images.map(image => (
        <ImageView key={image.id} image={image} />
      ))}
    </div>
  )
}

export default imagePage