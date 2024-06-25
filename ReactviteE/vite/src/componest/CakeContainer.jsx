import { buy_cake } from '../redux/cake/CakeAction'
import { buy_choco } from '../redux/cake/CakeAction'

import { connect } from 'react-redux'

const CakeContainer = (props) => {




  return (
    <div className='flex'>
      <div>
        <h1 className='btn '>NumOfCakes = {props.numOfCake}</h1>
        <button className='btn' onClick={props.buy_cake}>CakeIncrement</button>
      </div>
      <div>
        <h1 className='btn'>NumOfChoco = {props.numOfChoco}</h1>
        <button className='btn' onClick={props.buy_choco}>ChocoIncrement</button>
      </div>
      
    </div>
  )
}

const mapStateToProps = state => {

  return {
    numOfCake: state.cake.numOfCake,
    numOfChoco:state.choco.numOfChoco
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buy_cake: () => dispatch(buy_cake()),
    buy_choco:() => dispatch(buy_choco())
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CakeContainer)