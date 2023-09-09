import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AlbumList = () => {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setAlbums(data))
            .catch((error) => console.error('Помилка завантаження альбомів:', error));
    }, [userId]);

    return (
        <div>
            <h2>Альбоми</h2>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos/${album.id}`}>
                            <button>Photos</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
