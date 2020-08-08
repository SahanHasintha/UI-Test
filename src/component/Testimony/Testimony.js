import React from 'react'
import PublicHeader from '../public/Header/PublicHeader';
import client2 from './client2.png';
import client4 from './client4.png';
import client5 from './client5.png';
import client6 from './client6.png';
import Layer from './Layer.png';
import Shape3 from '../Tweet/Shape3@1X.png';
import Shape3Copy from '../Tweet/Shape3copy@1X.png';

const Testimony = () => {
    return (
        <div style={{width:'100%'}}>
            <PublicHeader headerPart01='OUR' headerPart02='TESTIMONIAL' headerPart01Color='#00CCFF' headerPart02Color='#F5B041'/>
            <div style={{display:'flex',justifyContent:'center'}} >
                <img src={client2} alt='image' style={{margin:'25px'}} />
                <img src={client4} alt='image' style={{margin:'25px'}} />
                <img src={client5} alt='image' style={{margin:'25px'}} />
                <img src={client6} alt='image' style={{margin:'25px'}} />
            </div>
            <div className="ui three column grid" style={{width:'75%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', marginBottom:'50px'}}>
                <div className="column" style={{backgroundColor:'#F2F2F1', width:'301px', height:'203px',paddingLeft:'10px', margin:'10px'}}>
                    <p style={{padding:'15px', color:'#9A9A9A'}}>
                        “ornare pede montes, morbi urna sed temporibus non, nibh inceptos enim turpis natoque”
                    </p>
                    <div class="ui divider"></div>
                    <div class="ui link items">
                        <div class="item">
                            <div class="ui middle aligned Mini image">
                            <img src={Layer}/>
                            </div>
                            <div class="content">
                            <div class="header" style={{color:'#2FB1E7', fontSize:'14px'}}>@Someone famous</div>
                            <div class="description">
                                <p style={{marginTop:'-10px', color:'#9A9A9A'}}>Someone famous</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column" style={{backgroundColor:'#F2F2F1', width:'301px', height:'203px',paddingLeft:'10px', margin:'10px'}}>
                    <p style={{padding:'15px', color:'#9A9A9A'}}>
                        “ornare pede montes, morbi urna sed temporibus non, nibh inceptos enim turpis natoque”
                    </p>
                    <div class="ui divider"></div>
                    <div class="ui link items">
                        <div class="item">
                            <div class="ui middle aligned Mini image">
                            <img src={Layer}/>
                            </div>
                            <div class="content">
                            <div class="header" style={{color:'#2FB1E7', fontSize:'14px'}}>@Someone famous</div>
                            <div class="description">
                                <p style={{marginTop:'-10px', color:'#9A9A9A'}}>Someone famous</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column" style={{backgroundColor:'#F2F2F1', width:'301px', height:'203px',paddingLeft:'10px', margin:'10px'}}>
                    <p style={{padding:'15px', color:'#9A9A9A'}}>
                        “ornare pede montes, morbi urna sed temporibus non, nibh inceptos enim turpis natoque”
                    </p>
                    <div class="ui divider"></div>
                    <div class="ui link items">
                        <div class="item">
                            <div class="ui middle aligned Mini image">
                            <img src={Layer}/>
                            </div>
                            <div class="content">
                            <div class="header" style={{color:'#2FB1E7', fontSize:'14px'}}>@Someone famous</div>
                            <div class="description">
                                <p style={{marginTop:'-10px', color:'#9A9A9A'}}>Someone famous</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div style={{display:'flex', justifyContent:'center'}}>
                    <img alt="image" className='four-dots' src={Shape3}/>
                    <img alt="image" className='four-dots' src={Shape3Copy}/>
                    <img alt="image" className='four-dots' src={Shape3}/>
                    <img alt="image" className='four-dots' src={Shape3}/>
                </div>           
        </div>
    )
}

export default Testimony;
