import React from 'react'
import './home.css';
import Logo from './logo.png';
import Scroll from './scroll.png';
import Layer3 from './Layer3.png';

const Home = () => {
    return (
        <div className="container">
            <div className="box1">
                <ul style={{fontSize:16}}>
                    <li><a href="#" >Contact</a></li>
                    <li><a href="#">Testi</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Home</a></li>
                    <li className="logo1"><img alt='image' src={Logo} style={{width:'70px', height:'70px'}}/></li>
                </ul>
            </div>
            <div style={{display:'block', width:'100%', textAlign:'center', marginTop:'100px', paddingBottom:'100px'}}>
                    <p style={{fontSize:22, color:'white'}}>GET READY</p>
                    <img alt='image' src={Logo} className="logo2"/>
                    <p style={{fontSize:22, color:'white'}}>Lorem ipsum dolor sit amet, libero turpis non cras ligula,<br/>
                    id commodo, aenean est in volutpat amet sodales, porttitor bibendum facilisi suspend<br/>
                    isse, aliquam ipsum ante</p>
                    <img alt='image' src={Scroll}/>
            </div>
            <img alt='image' src={Layer3} style={{marginTop:'-650px'}}/>
        </div>
    )
}

export default Home;
