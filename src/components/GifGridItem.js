import React from 'react'

const GifGridItem = ({title, url}) => {
/*const GifGridItem = ({img}) => {*/
    return (
        <div className="card"> 
            <img src={ url } alt = {title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
