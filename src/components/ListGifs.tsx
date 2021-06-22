import React from 'react'
import { useGifs } from '../context/context'

type Image = {
    images: {
        downsized: {
            url: string
        }
    }
    title: string
}

const ListGifs = () : JSX.Element => {

    const { state } = useGifs();
    const { gifs, loading } = state;

    return (
        <div className="list-gifs">
            { loading && <p>Cargando...</p>}
            {gifs && gifs.map( ({images, title} : Image, index: number) => (
               <img key={index} src={images.downsized.url} alt={title} />
            ))}
            {(!loading && gifs.length === 0) && <p>Busca gifs, scroll infinito :D</p>}
        </div>
    )
}

export default ListGifs
