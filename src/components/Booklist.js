import React, { Component } from 'react'
import { ThemeContext } from '../context/Theme'

export class Booklist extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme , light , dark} = this.context ;
        const theme = isLightTheme ? light : dark ;
        return (
            <div className = 'book-list' style  = {{color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style = {{background : theme.ui}}>the way of kings</li>
                <li style = {{background : theme.ui}}>this is a book</li>
                <li style = {{background : theme.ui}}>this is a book</li>
            </ul>
                
            </div>
        )
    }
}

export default Booklist
