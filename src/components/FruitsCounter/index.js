import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mango : 0,
    banana : 0
  }
  increaseMango = () => {
    this.setState(eachMango => {
      return {mango : eachMango.mango + 1}
    })
  }
  increaseBanana = () => {
    this.setState(eachBanaba => {
      return {banana : eachBanaba.banana + 1}
    })
  }
  render() {
    const {mango, banana} = this.state
    return(
      <div className="container">
        <div className="fruit-cont">
          <h1 className="head">
            Bob ate
            <span className="count">{mango}</span>
            mangoes
            <span className="count">{banana}</span>
            bananas
          </h1>
          <div className="fruit-count-cont">
            <div className="fruit">
              <img 
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png" 
                alt="mango" 
                className='img'
              />
              <button className="button" onClick={this.increaseMango}>Eat Mango</button>
            </div>
            <div className="fruit">
              <img 
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png" 
                alt="banana" 
                className='img'
              />
              <button className="button" onClick={this.increaseBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
