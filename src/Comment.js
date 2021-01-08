
import React from 'react'

class Comment extends React.Component {
    state = {
        name: this.props.name,
        comments: []
    }
    
    
    render(){
        



        return(
            <div>
                <h3> A place to mention an act of {this.state.name}</h3>
            </div>
        )
    }
}

export default Comment;