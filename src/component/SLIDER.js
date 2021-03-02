import React from "react"

class SLIDER extends React.Component{
    render(){
        return(
            <div>
                <img  src = {this.props.arrPhoto} alt = "img"></img>
            </div>
        );
    }
}
export default SLIDER