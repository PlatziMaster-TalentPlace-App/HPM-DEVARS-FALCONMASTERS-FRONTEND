import React from 'react'
import './Image.scss'

const Image = ({ imgSrc, imgAlt, imgHeight } ) => (
  <img src={imgSrc} alt={imgAlt} style={{height: imgHeight}} className="image" />
)

export default Image
