import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoList = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error('Помилка завантаження фотографій:', error));
  }, [albumId]);

  return (
    <div>
      <h2>Фотографії</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
