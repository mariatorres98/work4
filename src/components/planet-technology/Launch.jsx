import React from 'react'
import { useParams } from 'react-router-dom';

const Planet = ({space}) => {
  const {launchName}=useParams();
  return (
    <div>Planet {launchName}</div>
  )
}
export default Planet;