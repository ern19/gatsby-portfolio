import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        const buttonStyle={
            paddingTop: '5px',
            backgroundColor: 'transparent',
            color: 'white'
        }
        const rightButtons = (
            <div>
                <FlatButton label="Home" containerElement={<Link to ={'/'} />} style={buttonStyle}/>
                <FlatButton label="About" containerElement={<Link to ={'/about'}/>} style={buttonStyle}/>
                <FlatButton label="Inventory" containerElement={<Link to ={'/inventory'}/>} style={buttonStyle}/>
                <FlatButton label="Contact Us" containerElement={<Link to ={'/contact'}/>} style={buttonStyle}/>
            </div>
        );
        return (
            <div>
                <AppBar iconElementRight={rightButtons} style={{
                    backgroundColor: '#064383'
                }}/>
            </div>
        );
    }
}

