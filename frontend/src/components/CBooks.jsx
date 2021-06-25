import React from 'react'


const CBooks = (props) => {
    return (
        <div className='carousel__card' id={props.id} style={{ backgroundImage: 'url('+props.url+')' }} >            
            {console.log(props.url)}
        </div>
    )
}

export default CBooks
