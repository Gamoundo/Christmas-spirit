import React from 'react'
import { NavLink } from 'react-router-dom'



const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: 'none',
    color: 'white',
  }

class Navbar extends React.Component {
   render() {
    return(<div>
        <NavLink to ="/kindness" exact
        style={link}
        activeStyle={{background: 'green'}}
        >Kindness</NavLink>
        <NavLink to ="/happiness" exact
        style={link}
        activeStyle={{background: 'green'}}
        >Happiness</NavLink>
        <NavLink to ="/generosity" exact
        style={link}
        activeStyle={{background: 'green'}}
        >Generosity</NavLink>
    </div>

    )
   }
    
}

export default Navbar;