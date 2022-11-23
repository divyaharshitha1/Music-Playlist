import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicListItem = props => {
  const {musicItemDetails, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails

  const onDeleteBtn = () => {
    deleteItem(id)
  }

  return (
    <li className="music-list-item">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button className="delete-button" type="button" onClick={onDeleteBtn}>
          <AiOutlineDelete size={20} color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default MusicListItem
