import React from 'react'

const GifGridItem = ({title, url}) => {
/*const GifGridItem = ({img}) => {*/
    return (
        <div className="card animate__animated animate__fadeIn"> 
            <img src={ url } alt = {title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
