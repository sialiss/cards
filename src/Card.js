import './Card.css'
import { useDrag } from 'react-dnd'
import { useState } from 'react';

function Card({ data, deleteCard, editCard }) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
            // "type" is required. It is used by the "accept" specification of drop targets.
        type: 'card',
        item: { data },
            // The collect function utilizes a "monitor" instance (see the Overview for what this is)
            // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    // включено ли редактирование карты
    const [isEditing, setIsEditing] = useState([])

    function editData(data) {
        document.forms["editable data"].children['editable text'].classList.toggle("hidden")
        document.forms["editable data"].children['editing data'].classList.toggle("hidden")

        // editCard()
    }

    function camelCase(text) {
        // преобразование текста в CamelCase
    }

    camelCase(data.list)

    return (
        /* This is optional. The dragPreview will be attached to the dragSource by default */
        <div className={["Card", data.list].join(' ')} ref={drag} style={{ opacity: isDragging ? 0.5 : 1}}>
            {/* The drag ref marks this node as being the "pick-up" node */}
            {/* <div role="Handle" ref={drag} /> */}
            

            <div className={["Card", data.list].join(' ')}>
                {/* Выводит айди, название и описание карточки, а также кнопки редактирования и удаления */}
                <p className='text'>id: {data.id}</p>
                <form name='editable data'>
                    <div name='editable text'>
                        <p className='text'>{ data.title }</p>
                        <p className='text'>{ data.description }</p>
                    </div>
                    <div name='editing data' className={["wrapper", "hidden"].join(" ")}>
                        <input className='cardTitle' value={data.title} />
                        <input className='cardDescription' value={data.description}/>
                    </div>
                </form>
                <div className='buttons'>
                    <button className="change" onClick={() => editData(data)}>
                    ✎
                    </button>
                    <button className="delete" onClick={() => deleteCard(data)}>
                    ☓
                    </button>
                </div>
            </div>
        </div >
        
    );
}

export default Card;