import React from "react";

class Header extends React.Component{
    render(){
            return(
            <header>
                <p> Welcome, {PaymentResponse.username}!</p>
            </header>
        )
    }
}

export default Header
