import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GitGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    //const [value, setValue] = useState(0);
    //Renderizado por primera vez
    useEffect(() => {
        getGifs( category )
        .then( setImages );
        //.then( imgs => setImages(imgs));
    },[ category ]);

    return (<>
                <h3>{ category }</h3>  
                <div className="card-grid">
                    {
                        images.map(img => (
                            <GifGridItem 
                            key={img.id}
                            { ...img}
                            /*img={img} */
                            />
                        ))

                        /*images.map(img => (
                            <li key ={img.id}>{img.title}</li>
                        ))*/
                    }
                
                    {/*<h2>{count}</h2> 
                    <button onClick= {() => setCount(count + 1) }></button> */}
                
                </div>
            </>
    )
}

export default GitGrid