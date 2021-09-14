import React from 'react'
import AnimeCard from './AnimeCard'
const MainContent = (props) => {
    return (
        <main >
            <div className="main-head">
                <form className="search-box" onSubmit={props.HandleSearch}>
                    <input type="search" placeholder="Search for an anime ..."
                    value={props.search}
                    required
                    onChange={e=>props.SetSearch(e.target.value)}/>
                </form>
            </div>
            <div className="anime-list">
                {props.animeList.map(anime => (
                    <AnimeCard 
                    anime={anime}
                    key={anime.mal_id}
                    />
                ))}
            </div>
        </main>
    )
}

export default MainContent
