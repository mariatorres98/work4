import React from 'react'
import { useParams } from 'react-router-dom';

const Planet = ({destination}) => {
  const {planetName}=useParams();
  return (
    <div>Planet {planetName}</div>
  )
}
export default Planet;