import React from 'react'
import ReactPlayer from 'react-player'
import Comment from "./Comment"
class Kindness extends React.Component {

    render(){
       const lightCandles = () =>{

        }
        return(
            <div className="text">
                <h1 className="header"> Kindness goes a long way.</h1>
                <p> We don't always remember to be kind to each other.</p>
                <p> For some it comes very naturally.</p>
                <ReactPlayer url="https://www.youtube.com/watch?v=tKb4vUPpQzo"/>
                <ReactPlayer url="https://www.youtube.com/watch?v=vS5vvuToj74"/>
                <Comment  name={"kindness"}/>
            </div>
            

        )
    }
}

export default Kindness;