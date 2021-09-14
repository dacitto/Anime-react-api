import React from 'react'

const Sidebar = ({topAnime}) => {
    return (
      <aside>
          <nav>
              <h3>Top Anime</h3>
              <ul>

              {topAnime.map(anime =>(
                  <li 
                   key={anime.mal_id}>
                  <a href={anime.url}
                  target='_blank' 
                  rel='noreferrer'>
                  {anime.title}
                    </a>
                  
                  </li>
                  ))}
            </ul>
          </nav>
      </aside>
    )
}

export default Sidebar
