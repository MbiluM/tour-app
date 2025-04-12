import React, { useEffect, useState } from 'react'
import TourCard from './TourCard'

const Gallery = ({ tours, setTours }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('https://course-api.com/react-tours-project')
        if (!response.ok) throw new Error('Failed to fetch tours.')
        const data = await response.json()
        setTours(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTours()
  }, [setTours])

  if (loading) {
    return <div className="gallery"><p>Loading tours...</p></div>
  }

  if (error) {
    return <div className="gallery error"><p>{error}</p></div>
  }

  return (
    <div className="gallery">
      {tours.length === 0 ? (
        <p>No tours left.</p>
      ) : (
        tours.map(tour => (
          <TourCard
            key={tour.id}
            id={tour.id}
            name={tour.name}
            info={tour.info}
            price={tour.price}
            image={tour.image}
            onRemove={(id) => setTours(prev => prev.filter(t => t.id !== id))}
          />
        ))
      )}
    </div>
  )
}

export default Gallery