import React from 'react'
import PublicHeader from '../public/Header/PublicHeader';
import image01 from './image01.png';
import image02 from './image02.png';
import image03 from './image03.png';
import image04 from './image04.png';
import image05 from './image05.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';

const products = () => {
    return (
        <div style={{display: "block", alignItems: "center"}}>
            <PublicHeader headerPart01='OUR' headerPart02='WORK' headerPart01Color='#00CCFF' headerPart02Color='#F5B041'/>
            <div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <img src={image01} style={{maxWidth:'400px', maxHeight:'400px', margin:'10px'}}/>
                    <img src={image02} style={{maxWidth:'400px', maxHeight:'400px', margin:'10px'}}/>
                    <img src={image03} style={{maxWidth:'400px', maxHeight:'400px', margin:'10px'}}/>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <img src={image04} style={{width:'65%',  maxHeight:'350px', margin:'10px'}}/>
                    <img src={image05} style={{maxWidth:'400px', maxHeight:'350px', margin:'10px'}}/>
                </div>
                
            </div>
            <div>
                <div style={{marginBottom:'50px', marginTop:'100px'}}>
                    <h1 className="ui center aligned header" style={{color:'grey'}}>
                        Additional Recent Work
                    </h1>
                    <h4 className="ui center aligned header">
                        Market-proven software with award winning design
                    </h4>
                </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button className="ui grey basic button">All</button>
                <button className="ui grey basic button">Website</button>
                <button className="ui grey basic button">Graphic</button>
                <button className="ui grey basic button">Identify</button>
                <button className="ui grey basic button">Mobile apps</button>
            </div>
            <div style={{display: "flex", justifyContent: "center", margin:'40px'}}>
                <div className="ui three column grid">
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={image1} style={{width:'290px', height:'200px', justifyContent:'center'}}/>
                            </div>
                            <div className="content">
                                <h4>OutField</h4>
                                Mobile interaction CRM for field reps
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={image2} style={{width:'290px', height:'200px'}}/>
                            </div>
                            <div className="content">
                                <h4>OutField</h4>
                                Mobile interaction CRM for field reps
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={image3} style={{width:'290px', height:'200px'}}/>
                            </div>
                            <div className="content">
                                <h4>OutField</h4>
                                Mobile interaction CRM for field reps
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop:'10px'}}>
                <div className="ui three column grid">
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={image4} style={{width:'290px', height:'200px', justifyContent:'center'}}/>
                            </div>
                            <div className="content">
                                <h4>OutField</h4>
                                Mobile interaction CRM for field reps
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={image5} style={{width:'290px', height:'200px'}}/>
                            </div>
                            <div className="content">
                                <h4>OutField</h4>
                                Mobile interaction CRM for field reps
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={image6} style={{width:'290px', height:'200px'}}/>
                            </div>
                            <div className="content">
                                <h4>OutField</h4>
                                Mobile interaction CRM for field reps
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="ui center aligned header">
                <button className="ui blue button">Load More</button>
            </div>
            </div>
        </div>
    )
}

export default products;
