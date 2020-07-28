import React, { Component } from 'react'
import { ThemeContext } from '../context/Theme'

export class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() {
        const {toggleTheme} = this.context ;
        return (
            
            <button onClick = {toggleTheme}>Dark/Light</button>
                
            
        )
    }
}

export default ThemeToggle
