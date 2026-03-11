"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const MOCK_LOCATIONS = [
  { id: 1, type: 'Branch & ATM', name: 'Bairagarhi Head Office', address: 'Bairagarhi Road, Near Main Square, Bhopal 462030', timing: '10:00 AM - 04:00 PM', phone: '0755-2345678', distance: '1.2 km' },
  { id: 2, type: 'Branch', name: 'T.T. Nagar Branch', address: 'Plot 45, New Market, T.T. Nagar, Bhopal 462003', timing: '10:00 AM - 04:00 PM', phone: '0755-9876543', distance: '3.5 km' },
  { id: 3, type: 'ATM Center', name: 'Karond Square ATM', address: 'Karond Chouraha, Front of Mall, Bhopal 462038', timing: '24/7 Hours', phone: 'N/A', distance: '5.1 km' },
  { id: 4, type: 'Branch & ATM', name: 'MP Nagar Zone 1', address: 'Zone 1, Maharana Pratap Nagar, Bhopal 462011', timing: '10:00 AM - 04:00 PM', phone: '0755-4567890', distance: '6.8 km' },
];

export function InteractiveMap() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLocs = MOCK_LOCATIONS.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    loc.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px] bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl">
      
      {/* Sidebar List */}
      <div className="lg:col-span-1 h-full border-r border-border/50 bg-background/50 flex flex-col">
        <div className="p-6 border-b border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-4">Find Us</h3>
          <div className="flex gap-2">
            <Input 
              placeholder="Search area, pincode..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-background"
            />
            <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground"><Navigation className="w-4 h-4" /></Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredLocs.length > 0 ? filteredLocs.map(loc => (
            <div key={loc.id} className="p-4 rounded-xl bg-card border border-white/5 shadow-sm hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">{loc.type}</span>
                <span className="text-xs font-semibold text-muted-foreground">{loc.distance}</span>
              </div>
              <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{loc.name}</h4>
              <p className="text-sm text-foreground/70 mt-2 mb-3 leading-relaxed">{loc.address}</p>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {loc.timing}
                </div>
                {loc.phone !== 'N/A' && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Phone className="w-3.5 h-3.5" /> {loc.phone}
                  </div>
                )}
              </div>
            </div>
          )) : (
            <div className="text-center py-10 text-muted-foreground">
              No branches or ATMs found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Map Area Mock */}
      <div className="lg:col-span-2 relative bg-muted/20 hidden lg:block overflow-hidden">
        {/* Abstract Map Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23000000\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/%3E%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '40px' }} />
        
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center">
             <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
             <p className="text-xl font-bold text-foreground/50">Interactive Map Interface</p>
             <p className="text-sm text-muted-foreground mt-2">Requires Google Maps/Mapbox API integration</p>
           </div>
        </div>

        {/* Mock Pins */}
        <div className="absolute top-1/3 left-1/4 animate-bounce">
          <MapPin className="w-10 h-10 text-destructive drop-shadow-xl" />
        </div>
        <div className="absolute top-1/2 left-2/3 animate-bounce" style={{ animationDelay: '0.2s' }}>
          <MapPin className="w-10 h-10 text-primary drop-shadow-xl" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <MapPin className="w-10 h-10 text-accent drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
}
