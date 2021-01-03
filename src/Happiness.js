import React from 'react'
import ReactPlayer from 'react-player'

class Happiness extends React.Component {

    render(){
        return(
            <div className="text">
             <h1 className="header"> Happiness, the thing I seem quick to abandon</h1>
             <p> You never know who or what will bring you joy.</p>
             <p> When you do find that which makes you happy, take care of it.</p>
            <ReactPlayer url="https://www.youtube.com/watch?v=URqvKYv2tIU" />
            </div>
            
        )
    }
}

export default Happiness;