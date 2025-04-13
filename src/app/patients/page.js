"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card3D } from "@/components/ui/card-3d";
import { FloatingElement } from "@/components/ui/floating-element";

// Mock patient data
const mockPatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    dob: "1985-06-12",
    phone: "(555) 123-4567",
    email: "sarah.j@example.com",
    lastVisit: "2023-09-15",
    upcomingVisit: "2023-10-20"
  },
  {
    id: 2,
    name: "Michael Chen",
    dob: "1976-03-28",
    phone: "(555) 234-5678",
    email: "m.chen@example.com",
    lastVisit: "2023-08-22",
    upcomingVisit: null
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    dob: "1992-11-04",
    phone: "(555) 345-6789",
    email: "emma.r@example.com",
    lastVisit: "2023-09-01",
    upcomingVisit: "2023-10-05"
  },
  {
    id: 4,
    name: "James Wilson",
    dob: "1968-07-30",
    phone: "(555) 456-7890",
    email: "j.wilson@example.com",
    lastVisit: "2023-07-10",
    upcomingVisit: "2023-10-12"
  },
  {
    id: 5,
    name: "Olivia Brown",
    dob: "1990-02-15",
    phone: "(555) 567-8901",
    email: "o.brown@example.com",
    lastVisit: "2023-09-18",
    upcomingVisit: null
  },
  {
    id: 6,
    name: "David Kim",
    dob: "1983-12-09",
    phone: "(555) 678-9012",
    email: "d.kim@example.com",
    lastVisit: "2023-08-05",
    upcomingVisit: "2023-11-01"
  }
];

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  
  // Filter patients based on search query
  const filteredPatients = mockPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <FloatingElement amplitude={4} period={3}>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Patients</h1>
        </FloatingElement>
        <p className="text-muted-foreground max-w-2xl">
          Manage your patient records and view their form submissions.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        <div className="w-full md:w-1/3">
          <Input
            placeholder="Search patients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
            size="sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            onClick={() => setViewMode("list")}
            size="sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <line x1="8" x2="21" y1="6" y2="6" />
              <line x1="8" x2="21" y1="12" y2="12" />
              <line x1="8" x2="21" y1="18" y2="18" />
              <line x1="3" x2="3.01" y1="6" y2="6" />
              <line x1="3" x2="3.01" y1="12" y2="12" />
              <line x1="3" x2="3.01" y1="18" y2="18" />
            </svg>
            List
          </Button>
          <Button variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <line x1="12" x2="12" y1="5" y2="19" />
              <line x1="5" x2="19" y1="12" y2="12" />
            </svg>
            Add Patient
          </Button>
        </div>
      </div>
      
      {filteredPatients.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No patients found matching your search.</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map(patient => (
            <Card3D
              key={patient.id}
              className="bg-card p-6"
              glareOpacity={0.25}
              tiltFactor={8}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                  {patient.name}
                </h2>
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                  ID: {patient.id}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 mb-4">
                <div className="flex justify-between">
                  <span>Date of Birth:</span>
                  <span>{formatDate(patient.dob)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>{patient.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="truncate max-w-[150px]">{patient.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Visit:</span>
                  <span>{formatDate(patient.lastVisit)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Appointment:</span>
                  <span>{formatDate(patient.upcomingVisit)}</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Forms
                </Button>
              </div>
            </Card3D>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 p-4 font-medium text-sm">
            <div className="col-span-3">Name</div>
            <div className="col-span-2">DOB</div>
            <div className="col-span-2">Phone</div>
            <div className="col-span-2">Last Visit</div>
            <div className="col-span-1">Forms</div>
            <div className="col-span-2">Actions</div>
          </div>
          
          {filteredPatients.map((patient, index) => (
            <div 
              key={patient.id} 
              className={`grid grid-cols-12 p-4 items-center ${
                index < filteredPatients.length - 1 ? "border-b" : ""
              } hover:bg-muted/40 transition-colors`}
            >
              <div className="col-span-3">
                <div>{patient.name}</div>
                <div className="text-xs text-muted-foreground">{patient.email}</div>
              </div>
              <div className="col-span-2">{formatDate(patient.dob)}</div>
              <div className="col-span-2">{patient.phone}</div>
              <div className="col-span-2">{formatDate(patient.lastVisit)}</div>
              <div className="col-span-1">4</div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 