
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost, addCar } from '../store'


function CarForm() {

  // the below dispatch is used to update the state
  const dispatch = useDispatch()

  // accessing the state of name and cost
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  })

  

  // changing the state using dispatch function which is changeName
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  // changing the state using dispatch function which is changeCost
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0
    dispatch(changeCost(carCost))
  }

  // for submiting the form
  const handleSubmit = (event) => {
    event.preventDefault()
     
    dispatch(addCar({ name, cost}))

    // to empty the name and cost when the form submitted
    // dispatch(changeCost(0))
    // dispatch(changeName(''))
  } 

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name:</label>
            <input 
              className='input is-expanded'
              value={name}
              onChange={handleNameChange }
            />
          </div>

          <div className='field'>
            <label className='label'>Cost:</label>
            <input 
              className='input is-expanded'
              value={cost || ''}
              onChange={handleCostChange }
              type='number'
            />
          </div>

        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm