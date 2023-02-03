// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    name: '',
    date: '',
    appointmentList: [],
  }

  inputValue = e => {
    this.setState({name: e.target.value})
  }

  addAppointment = e => {
    e.preventDefault()
    const {name, date} = this.state
    const object = {
      id: uuidv4(),
      names: name,
      dates: date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, object],
      name: '',
      date: '',
    }))
  }

  toggleFavorite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachData => {
        if (eachData.id === id) {
          return {...eachData, isFavorite: !eachData.isFavorite}
        }
        return eachData
      }),
    }))
  }

  render() {
    const {name, appointmentList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="inner-holder">
            <div className="element-holder">
              <form className="element-holder" onSubmit={this.addAppointment}>
                <label className="title">TITLE</label>
                <input
                  type="text"
                  className="name-field"
                  placeholder="Title"
                  onChange={this.inputValue}
                  value={name}
                  label="Title"
                />
                <label className="date">DATE</label>
                <input
                  type="date"
                  className="date-field"
                  placeholder="dd/mm/yyyy"
                  label="date"
                />

                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="image1"
              alt="appointments"
            />
          </div>
          <hr />
          <p className="appointment-heading">
            Appointments
            <ul className="appointment-holder">
              {appointmentList.map(eachObject => (
                <AppointmentItem
                  key={eachObject.id}
                  appointmentList={eachObject}
                  toggleFavorite={this.toggleFavorite}
                />
              ))}
            </ul>
          </p>
          <button className="starred" type="button">
            Starred
          </button>
        </div>
      </div>
    )
  }
}
export default Appointments
