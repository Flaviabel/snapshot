import './App.css';
import { useState, useEffect } from 'react';
import { apiKey } from './api/config';

function App() {
  const [imagen, setImagen] = useState([]);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    const seePhotos = async () => {
      if (inputValue !== "") {
        const api = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputValue}&format=json&nojsoncallback=1`)
        const apiObjeto = await api.json()
        const apiPhotos = await apiObjeto.photos.photo
        setImagen(apiPhotos)
      }
    }
    seePhotos()
  }, [inputValue])

  // cuando se actualiza y cuando cambia el parametro.

  const imagenes = imagen.map(photos =>
    <img key={photos.id} src={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`}
    />)

  const handleKeyDown = e => {
    if (e.key == 'Enter') {
      setInputValue(e.target.value)
    }
  }

  const handleKey = e => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>SnapShot</h1>
      <input className='input' placeholder='  Search...' onKeyDown={handleKeyDown}></input>
      <div className='buttons'>
        <button className='button' value={'Mountain'} onClick={handleKey}>Mountain</button>
        <button className='button' value={'Beaches'} onClick={handleKey}>Beaches</button>
        <button className='button' value={'Bird'} onClick={handleKey}>Bird</button>
        <button className='button' value={'Food'} onClick={handleKey}>Food</button>
      </div>
      <h2>{inputValue} Pictures</h2>
      <div className='imagenes'>{imagenes}</div>
    </div>
  );
}
export default App;