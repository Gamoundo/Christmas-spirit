import React from 'react'
import ReactPlayer from 'react-player'

class Generosity extends React.Component {

    render(){
        return(
            <div className="text">
            <h1 className="header"> Sharing is Caring</h1>
            <p> One act is all it takes to change a life</p>
            <p> One act is enough to change your life.</p>
            <ReactPlayer  url="https://www.youtube.com/watch?v=lc8F01IP-Ro" />
            </div>
            
        )
    }
}

export default Generosity;