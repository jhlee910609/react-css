import React, { Component } from 'react'
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='left-container' />
                <div className='center-container'>
                    123
                </div>
                
                <div className='menu-container'>
                    <div className='menu-item' onClick={this.props.goHome}>Home</div>
                    <div className='menu-item' onClick={this.props.goAboutUs}>About us</div>
                    <div className='menu-item'>Teamwork</div>
                    <div className='menu-item'>gogo</div>
                </div>                
            </div>
        )
    }
}

