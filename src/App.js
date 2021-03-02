import React from "react";
import INFO_FORM from "./component/INFO_FORM";
import SLIDER from "./component/SLIDER"

class App extends React.Component{
state = {
  arrayFoto:undefined
}
gettingNASAinfo = async(e) => {
  e.preventDefault();
  const API_NASA_URL = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fE70hk4DG5lODFovnAVZkzGZZxGAfkqbmDmvq5m2");
  const DATA_NASA = await API_NASA_URL.json();
  console.log(DATA_NASA);
   let img_src_my = [];
  // console.log(typeof(DATA_NASA));
  let getSrcImg = () =>{
    for(let i = 0; i < DATA_NASA.photos.length; i++){
      img_src_my.push(DATA_NASA.photos[i].img_src);
      this.setState({
        arrayFoto:img_src_my
      })
    }

  }
  getSrcImg();
  console.log(img_src_my);
}

  render(){
    return(
      <div>
        <INFO_FORM gettingNASAinfo = {this.gettingNASAinfo}/>
        <SLIDER arrPhoto={this.state.arrayFoto}/>
      </div>
    );
  }
}
export default App
