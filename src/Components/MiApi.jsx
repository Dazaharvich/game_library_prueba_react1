import React,{useState, useEffect} from 'react';
import '../Stylesheets/MiApi.css';


const MiApi = ({busqueda}) => {
// Estado para almacenar datos de la API
const [listaJuegos, setListaJuegos] = useState([]);


// Al cargar el componente se llama a la funcion que consume la API
useEffect(()=>{
    consultarApi();
    },[])


// Función para traer datos desde la API
const consultarApi = async ()=>{
    const url = 'https://www.freetogame.com/api/games';
    const response = await fetch(url);
    const data = await response.json();
    setListaJuegos(data);
} 


  return (
    <>
        <div className='cards-container d-flex flex-row justify-content-evenly flex-wrap'>
          {listaJuegos.filter((game)=> {
            // ---------filtrado de busqueda de juegos---------
            //busqueda es una Prop traida desde el Header.jsx
            if(busqueda === ''){
          console.log("no hay busquedas");
       return game;
      }
      else if ((game.title).toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) || (game.genre).toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
      {
       return game
      }
      else if ((game.release_date).includes(busqueda))
      {
        
        return game
      }
      //----------mapeo y renderizado de datos--------
      }).sort((a,b) => a.title.localeCompare(b.title)).map((game)=>(
        <div className="card col-12 col-sm-6 col-md-3 col-lg-2 m-5" key={game.id}>
          <img src={game.thumbnail} class="card-img-top" alt={game.title}/>
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.short_description}</p>
            </div>
            <ul claclassNamess="list-group list-group-flush">
              <li className="list-group-item">Genero: {game.genre}</li>
              <li className="list-group-item">Plataforma: {game.platform}</li>
              <li className="list-group-item">Fecha de Lanzamiento: {game.release_date}</li>
            </ul>
          <div className="card-body">
            <a href={game.game_url} className="card-link">Página del juego</a>
          </div>
        </div>
      ))}
        </div>
    </>
  )
}

export default MiApi