import React, { Component } from 'react'
import { ThemeContext } from '../context/Theme'
import { AuthContext } from '../context/Auth';

export class Navbar extends Component {
    
    render() {
        
        //console.log(this.context);
        
        return (
            <AuthContext>
            {
                (authContext) => (
                    <ThemeContext.Consumer>
                {
                    (themecontext) => {
                        const {isAuthenticated , toggleAuth} =authContext;
                        const {isLightTheme , light , dark} = themecontext ;
                        const theme = isLightTheme ? light : dark ;

                        return(
                            <nav style = {{background : theme.ui , color : theme.syntax}}>
                                <h1>Context App</h1>
                                <div onClick={toggleAuth}>
                                    {isAuthenticated ? 'Logged in' : 'Logged out'}
                                    
                                </div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                            </nav>
                        )
                    }
                }
                
                </ThemeContext.Consumer>
                )

                }
            
                
                </AuthContext>
            
           
                
            
        )
    }
}

export default Navbar
