import { useCallback, useRef } from 'react'
import { useGifs } from '../context/context'
import getGifs from '../helpers/getGifs';
import Spinner from './Spinner';
import Card from './Card';

type Image = {
    images: {
        downsized: {
            url: string
        }
    }
    title: string
}

const ListGifs = () : JSX.Element => {

    const { state, dispatch } = useGifs();
    const { gifs, loading, offset, query } = state;
    // const elementRef = useRef<HTMLDivElement>(null);

    const observer = useRef<null | IntersectionObserver>()
    // La función se memoriza y está activa hasta que cambia el ref es decir, el ultimo elemento. Cuando este cambia la función se actualiza y vuelve a hacer un observer de ese último elemento y así sucesivamente
    const lastElementRef = useCallback( node => {
        console.log(node)
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver( async entries => {
        if (entries[0].isIntersecting && !loading) {
                dispatch({
                        type: 'CHANGE-OFFSET'
                })
                dispatch({
                    type: 'LOAD'
                });
                const res = await getGifs(offset, query);
                dispatch({
                    type: 'ADD',
                    payload: {
                        data: res && res.data.data,
                        query
                    }
                });
        }
        }, { rootMargin: '-200px' })
        if (node) observer.current.observe(node)

        return () => observer.current.disconnect();

    }, [loading, offset, query, dispatch])

    // useEffect(() => {
    //     let observer: any;
    //     if(gifs.length > 0 ) {

    //         const onChange = async (entries: Array<IntersectionObserverEntry>, observer: any) => {
    //             const element = entries[0];
    //             if(element.isIntersecting) {
    //                 //Do anything
    //                 // console.log(element.isIntersecting, 'visible')
    //                 dispatch({
    //                     type: 'CHANGE-OFFSET'
    //                 })
    //                 dispatch({
    //                     type: 'LOAD'
    //                 });
    //                 const res = await getGifs(offset, query);
    //                 dispatch({
    //                     type: 'ADD',
    //                     payload: {
    //                         data: res && res.data.data,
    //                         query
    //                     }
    //                 });
    //                 observer.disconnect()
    //             }
    //         }
    //         const observer = new IntersectionObserver(onChange, {
    //             rootMargin: '0px'
    //         })
    
    //         observer.observe(elementRef.current)
    //     }

    //     return () => observer && observer.disconnect()

    // }, [gifs, offset, query, dispatch]);
    

    return (
        <div className="list-gifs">
            {gifs && gifs.map( ({images, title} : Image, index: number) => {
                if( gifs.length === index + 1 ) {
                    return  <Card key={index} lastElementRef={lastElementRef} title={title} url={images.downsized.url} />
                } else {
                    return  <Card key={index} lastElementRef={null} title={title} url={images.downsized.url} />
                }
            })}
            { loading && <Spinner />}
            {(!loading && gifs.length === 0) && <p id="text">Busca gifs, scroll infinito :D</p>}
        </div>
    )
}

export default ListGifs
