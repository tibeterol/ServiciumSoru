//Tibet Erol
import React, { Component } from 'react'

class Oyun extends Component {
    componentDidMount(){
    
          this.sayiSec()
    }
    state={             
        value:'', //inputtan girilen degerleri tutmak icin
        sayi:[], 
        goster:false,  
        butonaBasildimi:false,  
        oyunBittimi:false,
        iteration:0,
        sonuc:''
    }


   myRandomInts=(quantity,min, max)=>{   //tekrarsiz basta 0 olmayan random sayilar fonk
    const arr = []
    while(arr.length < quantity){
      var candidateInt = Math.floor(Math.random() * max) + min
      if(candidateInt==0 &&arr.length==0) //basa 0 gelmemesi icin
      arr.push(1)
      if(arr.indexOf(candidateInt) === -1) //elemanın aynısı yoksa ekle
      arr.push(candidateInt)
    }
  return(arr)
  }
              
 bilgiYazdir(sayi,dizi){  //  ! 49 51 53    tahmin butonuna basildiginda cikacak olan sonucu donduruyor
  // var bilgi=""  
   var artisayac=""
   var eksisayac=""
   const boyut=4
 if(dizi[0]!=0 && dizi.length===4 &&this.tekrarKontrol(dizi)){ 
   for(var i=0;i<boyut;i++){
       if(sayi[i]==dizi[i])
       artisayac+="+"
       else if(sayi[i]!=dizi[i]&&dizi.indexOf(sayi[i])!=-1)
       eksisayac+="-"
   }  
   if((artisayac+eksisayac)=="++++")
   this.setState({oyunBittimi:true})
  return ((artisayac+eksisayac))
}
else
return ("Please only enter 4 digit without typing the same digit and not typing 0 at first.")
 }

  getValue=(e)=>{
      //console.log(e.target.value)
      this.setState(
        {
            value :e.target.value
        }
    )
  }
  handleSubmit=(e)=>{ //bakılıyor
    var value=this.state.value
   //console.log("deneme",this.bilgiYazdir(this.state.sayi,value))
   const sonuc=this.bilgiYazdir(this.state.sayi,value)
   var iterasyon=this.state.iteration
   if(sonuc.length<5){
       iterasyon+=1
       this.setState({
           iteration:iterasyon
       })
   }
 this.setState({
     sonuc: sonuc,
     butonaBasildimi:true
 })
}
sonucGetir=(e)=>{
   if(this.state.butonaBasildimi)
   return <h4> {this.state.sonuc}</h4>
    else
    return <h4></h4>
}
sayiSec=(e)=>{
     this.setState({
         sayi : this.myRandomInts(4,0,10)
     })
}
sayiGoster=(e)=>{
    this.setState({
        goster:!this.state.goster
    })
}

 tekrarKontrol=(giris,e)=>{   
     var sayac=0
       for(var i=0;i<giris.length;i++){  
        if(giris.indexOf(giris[i])!=giris.lastIndexOf(giris[i]))
         sayac+=1
      }
      if(sayac!=0)
      return false
      else
      return true
 }
    render() {
        //Destructing
          const {goster,oyunBittimi,iteration}=this.state;
      //  const {handleSubmit,register}=useForm()
    
        return (
            <div>
            <div> 
                     <h1 className="oyunBaslik">OYA's GAME by TE</h1>
                         <hr/>
                         {
                             oyunBittimi==false ?
                             <p>Game Started</p>
                             : null
                         }

                   {
                    oyunBittimi!=true?
                   this.sonucGetir() :
                   <div >
                     <h3> Result :</h3> 
                     <h2 id="artilar"> {this.state.sonuc}</h2>
                   </div>
                      
                   } 
                 
                          
                <div>
                    { 
                    oyunBittimi!=true ?
                    <div>
                   
                    <form >
                    <span> 
                         
                    <input type="number"   id="sayikismi" onChange={this.getValue}  />
                    </span>
                    <br/><br/>
                    <button type="button" id="btnTahmin" className="btn btn-primary" onClick={this.handleSubmit}>Guess </button>
                      </form>
                    <br/><br/>
                    </div>
                    : null
                   } 

                   {
                    oyunBittimi!=true ? (
                        goster!=true ?
                    <button type="button" className="btn btn-primary"  onClick={this.sayiGoster} >Show Number</button> 
                    :
                    <button type="button" className="btn btn-primary"  onClick={this.sayiGoster} >Hide Number</button> 
                    )
                        : null
                    }
                    <br/> 
                    
                    {
                    oyunBittimi!=true ? ( 
                    goster ? 
                     <p id="sayiBilgi">{this.state.sayi}</p> 
                     : null
                     ) : null
                    }
                    
                    <br/>  
                    {
                         oyunBittimi ?(
                         iteration<6 ?
                         <h4 id="bitisYazi">Congratulations ! You finished the game  by making {iteration} guess.  </h4>
                         :
                         <h4>You finished the game  by making {iteration} guess.  </h4>
                          )
                          : null
                     }
                    <br/>
                    {
                         oyunBittimi ?
                         <h2 id="finishGame">GAME IS FINISHED !</h2> 
                          : null
                     }

                     <br/>   
   
                </div>
                <div>
                <form> 
                    <button type="submit" id="btnEnd" className="btn btn-primary" >End Game</button>
                </form>
                </div>
            </div>

         </div>
        )
    }

}
 
export default Oyun
