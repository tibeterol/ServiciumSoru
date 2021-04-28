//Tibet Erol
import React, { Component } from 'react'
//import './App.css';
import './Stiller.css';
import Oyun from './components/Oyun'
 class App extends Component {
   state={
     kilit:true
   }
   kilitAc=(e)=>{
     this.setState({
       kilit: ! this.state.kilit
     })
   }
  render() {
    //Destructing
    const {kilit}=this.state;
    return (
      <div className="container">
         
       { 
        kilit?
           <div >
           
           <h1 className="oyunBaslik">OYA's GAME by TE</h1>
           <hr/>
           
           <p>Hello to the code solver game !</p>
           <hr/>
           <h2>GAME RULES</h2>
           <hr/>
           
           <p>You will need to guess a 4 digits number.</p>
           <p>Numbers are not repeating and cannot start with 0.</p>
           <p>"+" sign means a digit at its place while "-" </p>
           <p>means a digit exists in the number but it is not at its exact place.</p>
           <p>If there is no sign , it means that digit is not correct.</p>
           <button type="button" className="btn btn-primary" id="btnStart" onClick={this.kilitAc}
             >Start Game</button>
      
        </div>
         :
          <Oyun /> 
        }

      </div>
     
    )
  }
}
export default App