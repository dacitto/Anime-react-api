import { useState,useEffect } from 'react';
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import MainContent from './component/MainContent'
function App() {
  const [animeList,SetAnimeList] = useState([]);
  const [topAnime,SetTopAnime] = useState([]);
  const [search,SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.json())
    SetTopAnime(temp.top.slice(0,10));
  }

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)
  }
  const FetchAnime = async (query="") => {
    if (query.trim()===''){
      const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json())
      SetAnimeList(temp.top)
      console.log(temp.top);

    }else{
      const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&limit=20&sort=asc`)
      .then(res => res.json())
      SetAnimeList(temp.results)
    }
  }
  
  useEffect(()=>{
    //GetTopAnime();
    FetchAnime()
  }, [])
  
/*https://api.jikan.moe/v3/top/anime/1/ */


  return (
    <div className="App">
    <Header/>
    <div className="container">
      <MainContent 
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}/>

    
    </div>

    </div>
  );
}

export default App;
