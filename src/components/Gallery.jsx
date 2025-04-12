import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours }) => {
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setTours([]); // Set tours to an empty array on error
      }
    };

    fetchTours();
  }, [setTours]);

  const handleRemove = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <div className="gallery">
      {tours.length === 0 ? (
        <p>Loading tours...</p>
      ) : (
        tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} onRemove={handleRemove} />
        ))
      )}
    </div>
  );
};

Gallery.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      info: PropTypes.string,
      price: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  setTours: PropTypes.func.isRequired,
};

export default Gallery;