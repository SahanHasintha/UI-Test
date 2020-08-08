import React from 'react'
import './about.css';
import Shape2copy from './Shape2copy.png';
import Shape2 from './Shape2.png';
import Shape2C from './Shape2copy6@1X.png';
import PublicHeader from '../public/Header/PublicHeader';

const About = () => {
    return (
        <div>
            <PublicHeader headerPart01='ABOUT' headerPart02='US' headerPart01Color='#00CCFF' headerPart02Color='#F5B041'/>
            <div style={{marginLeft:'294px', marginTop:'100px'}} >
                <div className="about-content">
                    <img  src={Shape2copy} alt='about-img'></img>
                    <p className="about-paragraph">Welcome</p>
                </div>
                <div className="about-content">
                    <img src={Shape2} alt='about-img'></img>
                    <p className="about-paragraph">Vision</p>
                </div>
                <div className="about-content">
                    <img src={Shape2} alt='about-img'></img>
                    <p className="about-paragraph">Mission</p>
                </div>
                <div className="about-content">
                    <img src={Shape2} alt='about-img'></img>
                    <p className="about-paragraph">Mission</p>
                </div>
            </div>
            
            <table style={{marginLeft:'294px', marginTop:'100px'}}>
                <tr>
                    <td>
                        <div className="ui items">
                            <div className="item" style={{width:'450px', borderBottom:'1px solid #CCD8DD', paddingBottom:'10px'}}>
                                <div className="ui tiny image">
                                    <img alt="about-img" src={Shape2C}/>
                                </div>
                                <div className="content">
                                    <div className="header">Arrowhead Valley Camp</div>
                                    <div className="meta">
                                        <span className="price">aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</span>
                                        <span className="stay">1 Month</span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{width:'450px', borderRight:'1px solid #CCD8DD'}}>
                                <div className="ui tiny image">
                                    <img alt="about-img" src={Shape2C}/>
                                </div>
                                <div className="content">
                                    <div className="header">Arrowhead Valley Camp</div>
                                    <div className="meta">
                                        <span className="price">aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</span>
                                        <span className="stay">1 Month</span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="ui items">
                            <div className="item" style={{width:'450px', borderLeft:'1px solid #CCD8DD', paddingLeft:'10px'}}>
                                <div className="ui tiny image">
                                    <img alt="about-img" src={Shape2C}/>
                                </div>
                                <div className="content">
                                    <div className="header">Arrowhead Valley Camp</div>
                                    <div className="meta">
                                        <span className="price">aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</span>
                                        <span className="stay">1 Month</span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="item" style={{width:'450px', borderTop:'1px solid #CCD8DD', paddingTop:'15px', paddingLeft:'5px'}}>
                                <div className="ui tiny image">
                                    <img alt="about-img" src={Shape2C}/>
                                </div>
                                <div className="content">
                                    <div className="header">Arrowhead Valley Camp</div>
                                    <div className="meta">
                                        <span className="price">aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</span>
                                        <span className="stay">1 Month</span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            
            
        </div>
    )
}

export default About
