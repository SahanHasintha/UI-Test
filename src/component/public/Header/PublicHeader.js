import React from 'react';
import CompositeLayer from './CompositeLayer.png';
import './PublicHeader.css'

const PublicHeader = ({headerPart01,headerPart02,headerPart01Color,headerPart02Color, color}) => {
    return (
        <div style={{margin:'50px'}}>
            <table className="title">
                <tr>
                    <td>
                        <div>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <p style={{fontSize:30, fontWeight:'bold', color:headerPart01Color}}>{headerPart01}</p>
                                <p style={{fontSize:30, fontWeight:'bold', color:headerPart02Color, marginLeft:'10px'}}>{headerPart02}</p>
                            </div>
                            <p style={{color:'grey', fontFamily:'AdobeInvisFont', fontSize:18}}>What we do with love</p>
                        </div>
                    </td>
                    <td>
                        <img alt='public' src={CompositeLayer}/>
                    </td>
                    <td>
                        <p style={{color:color, fontSize:16}}>Lorem ipsum dolor sit amet, libero turpis non cras ligula, id commodo, aenean<br/>
                         est in volutpat amet sodales, porttitor bibendum facilisi suspendisse</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PublicHeader
