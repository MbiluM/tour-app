// src/components/Gallery.jsx
import React, { useEffect } from 'react'
import TourCard from './TourCard'

const Gallery = ({ tours, setTours }) => {
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project')
        const data = await response.json()
        setTours(data)
      } catch (error) {
        console.error('Error fetching tours:', error)
      }
    }

    fetchTours()
  }, [setTours])

  return (
    <div className="gallery">
      {tours.length === 0 ? (
        <p>Loading tours...</p>
      ) : (
        tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))
      )}
    </div>
  )
}

export default Gallery