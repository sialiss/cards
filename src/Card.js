import './Card.css'

function Card({ data, deleteCard, editCard }) {
    require('./Card.css')
    function editData() {

    }

    function camelCase(text) {
        // преобразование текста в CamelCase
    }

    camelCase(data.list)

    return (
        <div className={["Card", data.list].join(' ')}>
            {/* Выводит айди, название и описание карточки, а также кнопки редактирования и удаления */}
            <p className='text'>{ data.list }</p>
            <p className='text'>id: { data.id }</p>
            <p className='text'>{ data.title }</p>
            <p className='text'>{ data.description }</p>
            <div className='buttons'>
                <button className="change" onClick={() => {
                    editData()
                    editCard(data)
                }}>
            ✎
          </button>
                <button className="delete" onClick={() => {
                    deleteCard(data.id)
                } }>
            ☓
          </button>
        </div>
      </div>
    );
}

export default Card;