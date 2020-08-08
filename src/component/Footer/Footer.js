import React from 'react'

const Footer = () => {
    return (
        <div>
        <div style={{width:'100%', backgroundColor:'#2F2E2E  ', display:'flex', justifyContent:'center', height:'120px'}}>
            <i class="facebook f icon" style={{fontSize:'33px',paddingTop:'50px',marginLeft:'20px', marginRight:'20px', color:'white'}} ></i>
            <i class="twitter icon" style={{fontSize:'33px',paddingTop:'50px',marginLeft:'20px', marginRight:'20px', color:'white'}} ></i>
            <i class="linkedin icon" style={{fontSize:'33px',paddingTop:'50px',marginLeft:'20px', marginRight:'20px', color:'white'}} ></i>
            <i class="pinterest icon" style={{fontSize:'33px',paddingTop:'50px',marginLeft:'20px', marginRight:'20px', color:'white'}} ></i>
            <i class="google plus g icon" style={{fontSize:'33px',paddingTop:'50px',marginLeft:'20px', marginRight:'20px', color:'white'}} ></i>
            <i class="dribbble icon" style={{fontSize:'33px',paddingTop:'50px',marginLeft:'20px', marginRight:'20px', color:'white'}} ></i>
        </div>
        <div style={{width:'100%', height:'81px', backgroundColor:'#00CCFF'}}>
            <div style={{display:'flex', justifyContent:'center', paddingTop:'25px'}}>
                <p  style={{color:'white', marginRight:'10px', fontSize:'16px'}}>© 2015 </p>
                <p style={{fontSize:'16px', color:'blue'}} >Fe</p>
                <p  style={{color:'white', marginRight:'10px', marginLeft:'10px', fontSize:'16px'}}>rights reserved. Theme by</p>
                <p  style={{fontSize:'16px', color:'blue'}}>All Rudhi Sasmito.</p>
            </div>
            
        </div>
        </div>
    )
};

export default Footer;