import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Explore the Canadian culture from East coast to West coast</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src='images/image1.jpeg'
                        text='Explore the hidden waterfall deep inside the amazon'
                        label='Toronto'
                        path='/explore'/>
                        <Carditem 
                        src='images/image2.jpg'
                        text='Travel through the islands of Bali'
                        label='Montreal'
                        path='/explore'/>
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                        src='images/image3.jpg'
                        text='Explore the hidden waterfall deep inside the amazon'
                        label='Vancouver'
                        path='/explore'/>
                        <Carditem 
                        src='images/image4.jpg'
                        text='Travel through the islands of Bali'
                        label='Ottawa'
                        path='/explore'/>
                        <Carditem 
                        src='images/image5.jpeg'
                        text='Travel through the islands of Bali'
                        label='Banff'
                        path='/explore'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
