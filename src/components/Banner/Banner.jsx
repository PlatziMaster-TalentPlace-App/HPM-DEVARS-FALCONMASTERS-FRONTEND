import React from 'react';
import './Banner.scss';
import imgBanner from './assets/vectors.jpg'

 

const Banner = (props) => {

    const { ancho } = props
    const bannerStyle = {
    height: ancho,
    background: 'url('+ imgBanner +')',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
}  
    return (
        <main style={bannerStyle}>
        </main>
    ) 
}
   


export default Banner
