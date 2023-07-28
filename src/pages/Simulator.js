// Timeline.js, Science.js, Ethics.js, and Legacy.js
import React from 'react';
import { Typography } from '@material-ui/core';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Simulator = () => {
const position = [51.505, -0.09]

return (
        <div>
        <div id="simulator">
          <Typography variant="h4" component="h2" gutterBottom>
            Atomic bomb effects simulator
          </Typography>
         
        </div>
        <MapContainer invalidateSize="true" center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </MapContainer>
        
        </div>
        
    );
};

export default Simulator;
