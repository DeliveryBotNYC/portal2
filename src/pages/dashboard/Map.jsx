import * as React from 'react';
import {useState, useMemo} from 'react';
import {Map, Marker} from 'react-map-gl';
import CityPin from '../../icons/2'
import 'mapbox-gl/dist/mapbox-gl.css';


import CITIES from "../../data/cities.json";
const HOME = 'M172.4,76.5c0,5.39-4.49,9.61-9.58,9.61h-9.58l.21,47.94c0,.84-.06,1.62-.15,2.43v4.85c0,6.62-5.36,11.98-11.98,11.98h-4.79c-.33,0-.66-.27-.99-.03-.42-.24-.84,.03-1.26,.03h-16.92c-6.62,0-11.98-5.36-11.98-11.98v-26.35c0-5.3-4.28-9.58-9.58-9.58h-19.16c-5.3,0-9.58,4.28-9.58,9.58v26.35c0,6.62-5.36,11.98-11.98,11.98h-16.74c-.45,0-.9-.03-1.35-.06-.36,.03-.72,.06-1.08,.06h-4.79c-6.61,0-11.98-5.36-11.98-11.98v-33.53c0-.27,0-.57,.03-.84v-20.84H9.6c-5.4,0-9.6-4.22-9.6-9.61,0-2.69,.9-5.09,3-7.19L79.76,2.4c2.1-2.1,4.49-2.4,6.59-2.4s4.49,.6,6.32,2.1l76.44,67.22c2.4,2.1,3.62,4.49,3.29,7.19h0Z'
const STORE = 'M142.44,66.28c-1.19,.15-2.39,.24-3.59,.24-7.37,0-14.39-3.13-19.33-8.6-4.94,5.48-11.97,8.6-19.35,8.6-7.38,0-14.41-3.12-19.35-8.6-4.94,5.48-11.98,8.61-19.37,8.6-7.37,0-14.38-3.13-19.32-8.6-4.94,5.48-11.98,8.61-19.37,8.6-1.21,0-2.41-.09-3.6-.24C6.59,64.09-1.84,52.11,.35,39.52c.54-3.1,1.7-6.05,3.42-8.68L20.8,3.9C22.33,1.47,25.01,0,27.89,0h105.92C136.69,0,139.36,1.47,140.9,3.9l16.96,26.94c6.99,10.68,4,25-6.67,31.99-2.66,1.74-5.65,2.92-8.79,3.45h.04Zm1.26,9.41c1-.14,2.46-.38,3.64-.68v58c-.03,10.46-8.5,18.93-18.96,18.96H33.4c-10.46-.03-18.93-8.5-18.96-18.96v-58c1.17,.31,2.35,.53,3.55,.68h0c1.6,.22,3.21,.33,4.83,.33,3.59,0,7.15-.54,10.58-1.61v39.6h94.99v-39.57c3.41,1.04,6.95,1.57,10.52,1.58,1.62,0,3.24-.11,4.85-.33h-.05Z'

const Maps = () =>{    
  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        //change color based on status

        
        

        <Marker
          key={city.tracking_id}
          longitude={city.lon}
          latitude={city.lat}
        >
          <CityPin
          color={
            city.type === 'store' ? "#404954"
            :  city.status === 'Processing' ? "#E89940" 
            : city.status === 'Assigned' ? "#3FA9F5"
            : city.status === 'Delivered' ? "#7AC943"
            : "#F03F3F"} 
            type={
              city.type === 'store' ? STORE
              : city.type === 'driver' ? STORE
              : HOME} 
            ></CityPin>
        </Marker>
        )),
        []
      );
  
    return (
        <Map
        initialViewState={{
          latitude: 40.751613,
          longitude: -73.984997,
          zoom: 11
        }}
        style={{width: '100%', height: '100%', borderRadius: '30px'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoianVuaW9ybmljb2xsZSIsImEiOiJjbGt1YWtoN3EwZGN6M3RtdjR5MXB1bmM3In0.myLLeyMTv5gAGkL-W1gGjg"
      >
        {pins}

      </Map>

)
}
export default Maps;

