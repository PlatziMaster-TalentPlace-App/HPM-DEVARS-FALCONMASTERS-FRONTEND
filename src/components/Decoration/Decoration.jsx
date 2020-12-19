import React from 'react';
import Buildings from './assets/buildings.png'

const Decoration = () => {
    const BuildingsBackg = {
        width: '100%',
        height: '180px',
        backgroundImage: 'url('+ Buildings +')',
    }

    return (
        <div style={{background:'#F7FAFB'}}>
            <div style={BuildingsBackg}>
                
            </div>
        </div>
    )
}
export default Decoration
