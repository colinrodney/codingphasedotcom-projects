import React, { Component } from "react"
import thick from "./thick.png"
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
    this.setState({health: this.state.health -10}, console.log(`img clicked: healh now ${this.state.health}!`))
  }
  
  render(){
      return (
        <div id="parent">
          <div className={`camryn-bg`}>
            <div className={`userInfo ${this.state.health < 55 ? this.state.lowLevelClass: ""}`}>
              <h3>Name: {this.state.name}</h3>
              <h3>Health: {this.state.health}</h3>
              <h3>Level: {this.state.level}</h3>
            </div>
            <div className="img-container">
              <img className="testImg" src={thick}  alt="beach-pic" onClick={this.imgClicked}/>
            </div>
          </div>
        </div>
      )
  }

}

// class Franklin extends Component{
//   constructor(){
//     super()
//     this.state = {
//       name: "Franklin",
//       health: 100,
//       level: 1,
//       lowLevelClass: 'danger-bg'
//     }
//   }

//   imgClicked = () =>{
//     console.log(`image clicked`);
//     this.setState({health: this.state.health -10}, console.log(`img clicked: healh now ${this.state.health}!`))
//   }
  
//   render(){
//       return (
//         <div id="parent">
//           <div className={`franklin-bg ${this.state.health < 55 ? this.state.lowLevelClass: ""}`}>
//             <h3>Name: {this.state.name}</h3>
//             <h3>Health: {this.state.health}</h3>
//             <h3>Level: {this.state.level}</h3>
//             <img className="testImg" src={franklin}  alt="franklin-GTA-5" onClick={this.imgClicked}/>
//           </div>
//         </div>
//       )
//   }

// }

export{
  Camryn,
  // Franklin,
  // Top,
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


