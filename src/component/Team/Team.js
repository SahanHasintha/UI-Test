import React from 'react'
import PublicHeader from '../public/Header/PublicHeader';
import './Team.css';
import Person1 from './78@1X.png';
import Person2 from './87@1X.png'
import Person3 from './52@1X.png';
import Person4 from './63@1X.png';
import Triangle from './Triangle.png';

const Team = () => {
    return (
        <div className="Team-container">
            <div className="header">
                <PublicHeader headerPart01='OUR' headerPart02='TEAM' headerPart01Color='#00CCFF' headerPart02Color='white' color='white'/>
               
                <div className="ui four column grid" style={{width:'60%', marginLeft:'auto', marginRight:'auto', marginTop:'150px'}}>
                    <div className="column">
                        <img alt="team-images" className="ui small circular image" src={Person1} />
                        <h4 style={{color:'white', fontSize:20}}>PATRICIA MEDINA</h4>
                        <p style={{color:'#00CCFF', marginTop:'-15px', textAlign:'left', fontFamily:'FontAwesome',marginLeft:'20px'}} >Senior Designer</p>
                        <p style={{color:'#CCD8DD', fontFamily:'FontAwesome'}}>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucib</p>
                    </div>
                    <div className="column">
                        <img alt="team-images" className="ui small circular image" src={Person2} />
                        <h4 style={{color:'white', fontSize:20}}>PATRICIA MEDINA</h4>
                        <p style={{color:'#00CCFF', marginTop:'-15px', textAlign:'left', fontFamily:'FontAwesome',marginLeft:'20px'}} >Senior Designer</p>
                        <p style={{color:'#CCD8DD', fontFamily:'FontAwesome'}}>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucib</p>
                    </div>
                    <div className="column">
                        <img alt="team-images" className="ui small circular image" src={Person3} />
                        <h4 style={{color:'white', fontSize:20}}>PATRICIA MEDINA</h4>
                        <p style={{color:'#00CCFF', marginTop:'-15px', textAlign:'left', fontFamily:'FontAwesome',marginLeft:'20px'}} >Senior Designer</p>
                        <p style={{color:'#CCD8DD', fontFamily:'MyriadPro-Regular'}}>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucib</p>
                    </div>
                    <div className="column">
                        <img alt="team-images" className="ui small circular image" src={Person4} />
                        <h4 style={{color:'white', fontSize:20}}>PATRICIA MEDINA</h4>
                        <p style={{color:'#00CCFF', marginTop:'-15px', textAlign:'left', fontFamily:'FontAwesome',marginLeft:'20px'}} >Senior Designer</p>
                        <p style={{color:'#CCD8DD', fontFamily:'Lato-Regular'}}>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucib</p>
                    </div>
                    
                </div>
                <div>
                    <img alt="team-images" src={Triangle} style={{float:"right",marginTop:'165px'}}/>
                </div>
            </div>
            
        </div>
    )
}

export default Team;
