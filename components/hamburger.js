import React, {Component} from "react";
import MenuMobile from "./menuMobile";

class Hamburger extends Component{
    constructor(){
        super()
        this.state={
            menuMobile: false
        }
    }

    operation(){
        this.setState({
            menuMobile: !this.state.menuMobile
        })
        // alert('as')
    }

    clickLogo(){
        console.log('a')
    }

    render(){
        return(
            <>
                <button className="hamburger">
                    <img onClick={() => this.operation()} src="img/Frame-4.png" className="w-full mt-1"></img>
                </button>
                
                {
                    this.state.menuMobile ? 

                    
                    <MenuMobile />
                    
                    
                    :
                    null
                }
            </>

        )
    }
}

export default Hamburger;
