// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentList, toggleFavorite} = props

  const {id, names, dates, isFavorite} = appointmentList
  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const onClickFavoriteIcon = () => {
    toggleFavorite(id)
  }

  return (
    <li className="appointment-item" key={id}>
      <div className="content-holder">
        <div className="sub-holder">
          <h1 className="username">{names}</h1>
          <p className="time-now">{dates}</p>
        </div>
        <div className="star-container">
          <button
            type="button"
            className="favorite-icon-container"
            onClick={onClickFavoriteIcon}
            data-testid="star"
          >
            <img src={starImgUrl} className="favorite-icon" alt="star" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default AppointmentItem
