import { useState } from 'react';
import './CreateCards.css'

function CreateCards(props) {
    const [cardTitle, setCardTitle] = useState("")
    const [cardDescription, setCardDescription] = useState("")
    return (
      <div className="CreateCards">
        <input className='cardTitle' value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
        <input className='cardDescription' value={cardDescription} onChange={e => setCardDescription(e.target.value)}/>
        
        <div className='buttons'>
                <button className="confirm" onClick={() => {
                    const card = { title: cardTitle, description: cardDescription }
                    props.addCard(card)
                }}>
            ✓
          </button>
                <button className="delete" onClick={() => {
                    setCardTitle("")
                    setCardDescription("")
                } }>
            ☓
          </button>
        </div>
      </div>
    );
}

export default CreateCards;