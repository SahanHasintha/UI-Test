import React from 'react';
import PublicHeader from '../public/Header/PublicHeader';
import Shape from './Shape.png';

const Service = () => {
    return (
        <div>
            <PublicHeader headerPart01='OUR' headerPart02='SERVICES' headerPart01Color='#00CCFF' headerPart02Color='#F5B041'/>
            
                <table style={{marginLeft:'auto', marginRight:'auto' , paddingTop:'40px'}}>
                    <tr>
                        <td>
                            <div className="ui items" style={{width:'500px'}}>
                                <div class="item">
                                    <div class="image">
                                        <img alt='service-images' src={Shape}/>
                                    </div>
                                    <div class="content">
                                        <a href="http://localhost:3000" class="header" style={{fontSize:20, color:'#F4A936'}}>Brand Identity</a>
                                        <div class="extra" style={{fontSize:20, }}>
                                            aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="ui items" style={{width:'500px'}}>
                                <div class="item">
                                    <div class="image">
                                        <img alt='service-images' src={Shape}/>
                                    </div>
                                    <div class="content">
                                        <a href="http://localhost:3000" class="header" style={{fontSize:20, color:'#F4A936'}}>UI/UX Design</a>
                                        <div class="extra" style={{fontSize:20, }}>
                                            aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="ui items" style={{width:'500px'}}>
                                <div class="item">
                                    <div class="image">
                                        <img alt='service-images' src={Shape}/>
                                    </div>
                                    <div class="content">
                                        <a href="http://localhost:3000" class="header" style={{fontSize:20, color:'#F4A936'}}>Graphic Design</a>
                                        <div class="extra" style={{fontSize:20, }}>
                                            aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="ui items" style={{width:'500px'}}>
                                <div class="item">
                                    <div class="image">
                                        <img alt='service-images' src={Shape}/>
                                    </div>
                                    <div class="content">
                                        <a href="http://localhost:3000" class="header" style={{fontSize:20, color:'#F4A936'}}>Mobile Application</a>
                                        <div class="extra" style={{fontSize:20, }}>
                                            aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="ui items" style={{width:'500px'}}>
                                <div class="item">
                                    <div class="image">
                                        <img alt='service-images' src={Shape}/>
                                    </div>
                                    <div class="content">
                                        <a href="http://localhost:3000" class="header" style={{fontSize:20, color:'#F4A936'}}>Illustration</a>
                                        <div class="extra" style={{fontSize:20, }}>
                                            aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="ui items" style={{width:'500px'}}>
                                <div class="item">
                                    <div class="image">
                                        <img alt='service-images' src={Shape}/>
                                    </div>
                                    <div class="content">
                                        <a href="http://localhost:3000" class="header" style={{fontSize:20, color:'#F4A936'}}>Videography</a>
                                        <div class="extra" style={{fontSize:20, }}>
                                            aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                <div style={{display:'table', width:'100%', marginTop:'50px', backgroundColor:'#F2F2F1', paddingTop:'80px'}}>
                    <div style={{display:'table-cell', textAlign:'center'}}>
                        <p style={{fontSize:24, fontWeight:30, fontWeight:'bold', color:'#797979'}}>FUN FACTS</p>
                        <p style={{fontSize:16, color:'#9A9A9A'}}>
                            Lorem ipsum dolor sit amet, libero turpis non cras ligula, id commodo, aenean<br/> est in volutpat amet sodales, porttitor bibendum facilisi suspendisse
                        </p>
                        <div style={{display:"flex", justifyContent:'center', paddingBottom:'100px',paddingTop:'100px'}}>
                                    <div className="ui card" style={{width:'240px', height:'266px', marginTop:'14px'}}>
                                        <div class="content">
                                            <a href="http://localhost:3000" class="header">
                                                <i class="thumbs up outline icon" style={{fontSize:50, paddingTop:'50px', paddingBottom:'80px'}}></i>
                                                </a>
                                            <div class="meta">
                                                <span class="date" style={{fontSize:22, color:'#2FB1E7'}}>In Business</span>
                                            </div>
                                            <div class="description" style={{fontSize:52, paddingBottom:'15px'}}>
                                                2006
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui card" style={{width:'240px', height:'266px'}}>
                                        <div class="content">
                                            <a href="http://localhost:3000" class="header">
                                                <i class="comments icon" style={{fontSize:50, paddingTop:'50px', paddingBottom:'80px'}}></i>
                                                </a>
                                            <div class="meta">
                                                <span class="date" style={{fontSize:22, color:'#2FB1E7'}}>Clients Served</span>
                                            </div>
                                            <div class="description" style={{fontSize:52, paddingBottom:'15px'}}>
                                                240
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui card" style={{width:'240px', height:'266px'}}>
                                        <div class="content">
                                            <a href="http://localhost:3000" class="header">
                                                <i class="smile outline icon" style={{fontSize:50, paddingTop:'50px', paddingBottom:'80px'}}></i>
                                                </a>
                                            <div class="meta">
                                                <span class="date" style={{fontSize:22, color:'#2FB1E7'}}>Projects Delivered</span>
                                            </div>
                                            <div class="description" style={{fontSize:52, paddingBottom:'15px'}}>
                                                120
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui card" style={{width:'240px', height:'266px'}}>
                                        <div class="content">
                                            <a href="http://localhost:3000" class="header">
                                                <i class="bookmark outline icon" style={{fontSize:50, paddingTop:'50px', paddingBottom:'80px'}}></i>
                                                </a>
                                            <div class="meta">
                                                <span class="date" style={{fontSize:22, color:'#2FB1E7'}}>Awards Won</span>
                                            </div>
                                            <div class="description" style={{fontSize:52, paddingBottom:'15px'}}>
                                                10
                                            </div>
                                        </div>
                                    </div>
                        

                    </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Service
