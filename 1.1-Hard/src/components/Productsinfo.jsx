import React from 'react'
import { useParams } from 'react-router';

function Productsinfo() {
    const { id } = useParams();
  return (
      <div>Productsinfo{id}</div>
      //database link that will send this id to db to get data of this products
  )
}

export default Productsinfo