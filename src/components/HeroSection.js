import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1> EXPERIENCE THE NORTH</h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
                    GET STARTED     
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> 
                    LEARN MORE   <i className='far fa-play-circle' />   
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
