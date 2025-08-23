'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './mapStyles.css';

// Leaflet marker icons fix for Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom marker icon with NGO theme
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const position = [29.093417, 75.959434]; // Hansi location

export default function MapSection() {
  const [mapHeight, setMapHeight] = useState(400);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Responsive map height based on screen size
    const updateMapHeight = () => {
      if (window.innerWidth < 640) {
        setMapHeight(280); // Mobile
      } else if (window.innerWidth < 1024) {
        setMapHeight(350); // Tablet
      } else {
        setMapHeight(450); // Desktop
      }
    };

    updateMapHeight();
    window.addEventListener('resize', updateMapHeight);
    setIsLoaded(true);

    return () => window.removeEventListener('resize', updateMapHeight);
  }, []);

  if (!isLoaded) {
    return (
      <div 
        className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center animate-pulse"
        style={{ height: mapHeight }}
      >
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto animate-spin flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-blue-600 font-medium text-sm sm:text-base">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Map Container with Enhanced Styling */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] group-hover:border-blue-200">
        {/* Gradient Overlay for Modern Look */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none z-10 rounded-3xl" />
        
        {/* Map Component */}
        <MapContainer 
          center={position} 
          zoom={15} 
          scrollWheelZoom={true}
          zoomControl={true}
          doubleClickZoom={true}
          dragging={true}
          className="w-full rounded-3xl relative z-20"
          style={{ height: mapHeight }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="brightness-105 contrast-105"
          />
          <Marker position={position} icon={customIcon}>
            <Popup 
              className="custom-popup"
              closeButton={true}
              autoClose={false}
              closeOnEscapeKey={true}
            >
              <div className="p-2 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">Get Well Soon NGO</h3>
                </div>
                <p className="text-gray-600 font-medium mb-1">Krishna Power Tool, Near SBI Bank</p>
                <p className="text-gray-500 text-sm mb-3">Uttam nagar, Hansi, Haryana 125033</p>
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1 text-green-600">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 9416346327</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
        
        {/* Interactive Elements Overlay */}
        {/* <div className="absolute top-4 left-4 z-30">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg border border-white/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-xs font-semibold text-gray-700">Live Location</span> 
            </div>
          </div>
        </div> */}
        
        {/* Zoom Controls Enhancement */}
        <div className="absolute bottom-4 right-4 z-30 hidden sm:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg border border-white/50">
            <p className="text-xs text-gray-600 font-medium">📍 Hansi, Haryana</p>
          </div>
        </div>
      </div>
      
      {/* Map Info Cards - Responsive */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div> 
             <div>
              <h4 className="font-semibold text-gray-800 text-sm">Address</h4>
              <p className="text-gray-600 text-xs">Hansi, Haryana</p>
            </div> 
          </div>
        </div> */}
        
        {/* <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm">Open Hours</h4>
              <p className="text-gray-600 text-xs">9 AM - 6 PM</p>
            </div>
          </div>
        </div> */}
        
        {/* <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm">Get Directions</h4>
              <p className="text-gray-600 text-xs">Navigate to us</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
