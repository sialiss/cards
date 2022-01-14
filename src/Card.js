import { useState } from 'react';
import './Card.css'

function Card({ data }) {

    return (
        <div className="Card">
            <p className='text'>id: { data.id }</p>
            <p className='text'>{ data.title }</p>
            <p className='text'>{ data.description }</p>
      </div>
    );
}

export default Card;