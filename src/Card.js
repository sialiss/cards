import './Card.css'

function Card({ data, deleteCard, editCard }) {
    require('./Card.css')
    function editData() {

    }

    return (
        <div className="Card">
            <p className='text'>id: { data.id }</p>
            <p className='text'>{ data.title }</p>
            <p className='text'>{data.description}</p>
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