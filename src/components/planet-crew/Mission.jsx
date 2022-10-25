import React from 'react'
import { useParams } from 'react-router-dom';

const Mission = ({integrantes}) => {
  const {missionName}=useParams();
  return (
    <div>Planet {missionName}</div>
  )
}
export default Mission;
