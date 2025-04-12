// src/components/TourCard.jsx
import React, { useState } from 'react'

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-content">
        <div className="tour-header">
          <h2>{name}</h2>
          <span className="tour-price">${price}</span>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? ' Show Less' : ' Read More'}
          </button>
        </p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default TourCard