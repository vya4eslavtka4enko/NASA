import React from "react";

class INFO_FORM extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.gettingNASAinfo}>
                <button>GET DATA</button>
            </form>
        );
    }
}

export default INFO_FORM