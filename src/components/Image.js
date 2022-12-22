// import { useState, useEffect } from 'react';
// import { apiKey } from './api/config';

// function Image({ setImagen }, { inputValue }) {

//     useEffect(() => {
//         const seePhotos = async () => {
//             if (inputValue !== "") {
//                 const api = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputValue}&format=json&nojsoncallback=1`)
//                 const apiObjeto = await api.json()
//                 const apiPhotos = await apiObjeto.photos.photo
//                 setImagen(apiPhotos)
//             }
//         }
//         seePhotos()
//     }, [inputValue])   
//         cuando se actualiza y cuando cambia el parametro.
//     }
    
//     export default Image;