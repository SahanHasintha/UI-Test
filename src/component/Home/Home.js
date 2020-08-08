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
                    <li><a href="http://localhost:3000" >Contact</a></li>
                    <li><a href="http://localhost:3000">Testi</a></li>
                    <li><a href="http://localhost:3000">Products</a></li>
                    <li><a href="http://localhost:3000">About us</a></li>
                    <li><a href="http://localhost:3000">Home</a></li>
                    <li className="logo1"><img alt='home-images' src={Logo} style={{width:'70px', height:'70px'}}/></li>
                </ul>
            </div>
            <div style={{display:'block', width:'100%', textAlign:'center', marginTop:'100px', paddingBottom:'100px'}}>
                    <p style={{fontSize:22, color:'white'}}>GET READY</p>
                    <img alt='home-images' src={Logo} className="logo2"/>
                    <p style={{fontSize:22, color:'white'}}>Lorem ipsum dolor sit amet, libero turpis non cras ligula,<br/>
                    id commodo, aenean est in volutpat amet sodales, porttitor bibendum facilisi suspend<br/>
                    isse, aliquam ipsum ante</p>
                    <img alt='home-images' src={Scroll}/>
            </div>
            <img alt='home-images' src={Layer3} style={{marginTop:'-650px'}}/>
        </div>
    )
}

export default Home;
