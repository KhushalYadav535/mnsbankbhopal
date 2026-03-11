"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { format } from 'date-fns';

// Mock data as requested
const MOCK_DEAF_DATA = [
  { id: 'CUST001', name: 'Ramesh Kumar', accountNo: 'XXXX1234', address: 'Bhopal, MP', amount: '₹12,450' },
  { id: 'CUST002', name: 'Sunita Sharma', accountNo: 'XXXX5678', address: 'Indore, MP', amount: '₹5,300' },
  { id: 'CUST003', name: 'Mohammad Ali', accountNo: 'XXXX9012', address: 'Sehore, MP', amount: '₹8,900' },
];

export function DeafSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  
  const filteredData = MOCK_DEAF_DATA.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.accountNo.includes(searchTerm) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search by Name, Customer ID, or Account No..." 
            className="pl-10 h-12 bg-card/60 backdrop-blur-sm border-white/10 dark:border-white/5"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button 
          className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          onClick={() => setHasSearched(true)}
        >
          Search Accounts
        </Button>
      </div>

      {hasSearched ? (
        filteredData.length > 0 ? (
          <div className="rounded-xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-md overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Account Name</TableHead>
                  <TableHead>Account No. (Masked)</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead className="text-right">DEAF Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.accountNo}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell className="text-right font-semibold text-primary">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-foreground mb-2">No matching records found</h3>
            <p className="text-muted-foreground">
              We couldn't find any DEAF accounts matching your search criteria. Please verify the details or contact your nearest branch.
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-12 px-4 rounded-xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-md">
           <p className="text-muted-foreground">
             Enter details above to search the Depositor Education and Awareness Fund (DEAF) registry.
             Last updated: {format(new Date(), 'dd MMM yyyy')}
           </p>
        </div>
      )}
    </div>
  );
}
