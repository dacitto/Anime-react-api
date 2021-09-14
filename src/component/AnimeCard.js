import React from 'react'

function AnimeCard({anime}) {
    return (
        <div className="anime-card">
            <a href={anime.url}>
                <div className='img-container'>
                <img src={anime.image_url} alt={`${anime.title} cover`} />
                </div>
            </a>
                <b>{anime.title}</b>
        </div>
    )
}

export default AnimeCard
