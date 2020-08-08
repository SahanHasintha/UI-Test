import React from 'react'
import PublicHeader from '../public/Header/PublicHeader';
import GoogleMap from './GoogleMap/GoogleMap';

const Contact = () => {
    return (
        <div>

            <PublicHeader headerPart01='GET IN ' headerPart02='TOUCH' headerPart01Color='#00CCFF' headerPart02Color='#F5B041' color='black'/>

            <div className="ui grid">
                <div className="eight wide column">
                    <form className="ui form" style={{width:'50%', marginLeft:'290px', height:'330px'}}>
                        <div className="field">
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="Name" placeholder="Name"/>
                                </div>
                                <div className="field">
                                    <input type="text" name="Email" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" name="Subject" placeholder="Subject"/>
                        </div>
                        <div className="field">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="ui primary button" >Send Message</div>
                    </form>
                </div>
                <div className="eight wide column" style={{width:'200px', color:'gray'}}>
                    <h3>ADDITIONAL INFO</h3>
                    <p style={{color:'gray'}}>If you have any questiong about our products or<br/>
                    something else, please email us or call us. We'll<br/>
                     get in touch with you as soon as possible.</p>
                     <div style={{display:'flex', justifyContent:'left',marginBottom:'15px'}}>
                        <i className="map marker alternate icon"></i>
                        <p style={{color:'gray'}}>Jl. Pahlawan VII No. 247D Sidoarjo</p>
                     </div>
                     <div style={{display:'flex', justifyContent:'left',marginBottom:'15px'}}>
                        <i className="phone icon"></i>
                        <p style={{color:'gray'}}>+62 - 85745965973</p>
                     </div>
                     <div style={{display:'flex', justifyContent:'left', marginBottom:'15px'}}>
                        <i className="envelope icon"></i>
                        <p style={{color:'gray'}}>rudhisasmito@gmail.com</p>
                     </div>
                     <div style={{display:'flex', justifyContent:'left', marginBottom:'15px'}}>
                        <i className="clock outline icon"></i>
                        <p style={{color:'gray'}}>Mo - Fr: 9am to 6pm </p>
                     </div>
                     
                </div>
            </div>
            <GoogleMap />
            
        </div>
    )
}


export default Contact
