import React, { Component } from "react"
import food from "./food.jpg"
import franklin from "./franklin.png"

// class Top extends Component{
//   render(){
//     return(
//       <Header />
//     )
//   }
// }

class Camryn extends Component{
  constructor(){
    super()
    this.state = {
      name: "Camryn",
      health: 100,
      level: 1,
      lowLevelClass: 'danger-bg',
      noLife: `dead-bg`,
    }
  }

  imgClicked = () =>{
    console.log(`image clicked`);
    this.setState({health: this.state.health -10}, console.log(`img clicked: healh now ${this.state.health - 10}!`))
  }
  
  render(){
      return (
        <div id="parent">
          <div>
            <div className={`userInfo ${this.state.health < 55 ? this.state.lowLevelClass: ""}`}>
              <h3>Name: {this.state.name}</h3>
              <h3>Level: {this.state.level}</h3>
            </div>
          </div>

          <GirlImage trigger={this.imgClicked} health ={this.state.health}/>
        </div>
      )
  }
}

class GirlImage extends Component{
  constructor(){
    super()
    this.state = {
      gameOver: `Sorry YOU'RE DONE!`
    }
  }

  checkHealth = ()=>{
    if(this.props.health === 0){

    }
  }

  render(){
    return(
      <div className="GirImage">
        <img className="testImg" src={food}  alt="foods" onClick={this.props.trigger}/>
        {/* <h3>Health: {this.props.health}</h3> */}
        <h3>{this.props.health <= 0 ? this.state.gameOver : `Health ${this.props.health}`}</h3>
      </div>
    )
  }
}



export{
  Camryn
}

let Header = function() {
  return(
    <header>
      <ul>alpha</ul>
      <ul>bravo</ul>
      <ul>charlie</ul>
    </header>
  )
}

// function Thick(){
//   return(
//     <div>
//       <img className="testImg" src={thick}  alt="beach-pic"></img>
//     </div>
//   )
// }


