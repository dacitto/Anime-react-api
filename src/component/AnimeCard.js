import React from 'react'

function AnimeCard({anime}) {
    return (
        <div className="anime-card">
            <a href={anime.url}>
                <div className='img-container'>
                <img src={anime.image_url} alt={`${anime.title} cover`} />
                </div>
            </a>
                <p className='anime-title'>{anime.title}</p>
        </div>
    )
}

export default AnimeCard
