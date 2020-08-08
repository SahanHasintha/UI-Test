import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map(){
    return (
        <GoogleMap 
        defaultZoom = {10}
        defaultCenter = {{lat:12, lng:12}} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMaps = () => {
    return (
        <div style={{width:'100%', height:'15%', marginTop:'50px'}}>
            <WrappedMap googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBQivIf11UAYz6ArfWDeX9tBfn9xiHpRNA'}
            loadingElement={<div style={{height:'200px'}} />}
            containerElement={<div style={{height:'200px'}} />}
            mapElement={<div style={{height:'200px'}} />}
            />
        </div>
    )
}

export default GoogleMaps;
