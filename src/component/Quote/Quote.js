import React from 'react'
import './Quote.css';
import Shape3 from './Shape3.png';
import Shape3Copy from './Shape3copy.png';
import Triangle from './Triangle.png';

const Quote = () => {
    return (
        <div className="Quote-container">
            <i class="quote right icon" style={{color:'#2FB1E7', fontSize:'93px', marginTop:'25%'}}></i>
            <p style={{fontSize:'18px', color:'white', marginTop:'50px'}}>Lorem ipsum dolor sit amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales,<br/> porttitor bibendum facilisi suspendiss  aliquam ipsum ante.</p>
            <p style={{fontSize:'18px', color:'white', marginTop:'50px'}}>Rudhi Sasmito - CEO Company</p>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img alt='quote-images' src={Shape3} alt="dot" style={{padding:'10px'}} />
                <img alt='quote-images' src={Shape3Copy} alt="dot" style={{padding:'10px'}} />
                <img alt='quote-images' src={Shape3} alt="dot" style={{padding:'10px'}} />
            </div>
            <img alt='quote-images' src={Triangle} alt="Trangle" style={{float:'right', marginTop:'193px'}}/>
       </div>
    )
}

export default Quote
