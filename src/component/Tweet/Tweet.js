import React from 'react'
import './Tweet.css';
import Shape3 from './Shape3@1X.png';
import Shape3Copy from './Shape3copy@1X.png';
import Triangle from './Triangle.png';

const Tweet = () => {
    return (
        <div>
        <div className="Tweet-container">
            <div style={{display:'table-cell', verticalAlign:'middle', textAlign:'center'}} >
                <i className="twitter icon" style={{color:'#2FB1E7', fontSize:'100px', }}></i>
                <p style={{marginTop:'50px', color:'white', fontSize:18}}>Premium Template - orci in adipiscing felis velit nibh. Consectetuer porttitor feugiat vestibulum sit feugiat,<br/> voluptates dui eros libero...</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <img alt="tweet-images" className='four-dots' src={Shape3}/>
                    <img alt="tweet-images" className='four-dots' src={Shape3Copy}/>
                    <img alt="tweet-images" className='four-dots' src={Shape3}/>
                    <img alt="tweet-images" className='four-dots' src={Shape3}/>
                </div>
                <div style={{marginTop:'100px',display:'flex', justifyContent:'center', fontSize:22}}>
                    <p style={{color:'white'}}>Follow us on Twitter :</p>
                    <p style={{color:'#2FB1E7'}}> @rudhisasmito</p>
                </div>
            </div>
        </div>
        <div>
            <img alt="tweet-images" src={Triangle} style={{float:"right",marginTop:'-152px'}}/>
        </div>
        </div>
    )
}

export default Tweet
