import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GitGrid = ({ category }) => {

    //const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    },[]);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=ImrhTAPyXNBsMYiFmxJPhrOI4bJ8Z2WQ';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        })
        //console.log(gifts);
        setImages(gifs);
        console.log(images);
    }

    return ( <div>
                <h3>{ category }</h3> 
                {
                    images.map((img) => {
                        <GifGridItem 
                        key={img.id}
                        img={img} />
                    })
                }
               
                {/*<h2>{count}</h2> 
                <button onClick= {() => setCount(count + 1) }></button> */}
            </div>
    )
}

export default GitGrid