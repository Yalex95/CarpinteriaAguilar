import React from 'react'

const DataItems = ({nombre,url,precio}) => {
    return (
        <div className='card'>
        <p className='item-text'>{nombre}</p>
        <img src={url} alt={nombre} />
        <p>{precio}</p>
      </div>
    )
}

export default DataItems
