import React from "react";

class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12){
            timeOfDay = "Morning"
        } else if(hours > 12){
            timeOfDay = "Night"
        }
        return (
            <h1> Good {timeOfDay} to you, sir or mada!</h1>
        )
    }
}

export default Greeting