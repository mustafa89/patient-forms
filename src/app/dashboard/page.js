"use client"

import { Card3D } from "@/components/ui/card-3d";
import { FloatingElement } from "@/components/ui/floating-element";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <FloatingElement amplitude={4} period={3}>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Dashboard</h1>
        </FloatingElement>
        <p className="text-muted-foreground max-w-2xl">
          Welcome to your Patient Forms dashboard. Here you can manage forms, view patient data, and track analytics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Link href="/forms" className="block h-full">
          <Card3D 
            className="bg-card p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-lg"
            glareOpacity={0.35}
            tiltFactor={8}
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                <path d="m9 9 1 1 3-3" />
                <path d="m9 13 1 1 3-3" />
                <path d="M9 17h6" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors duration-300">Forms</h2>
            <div className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
              <p className="mb-2">Total Forms: <span className="font-medium text-foreground">12</span></p>
              <p>Submissions: <span className="font-medium text-foreground">48</span></p>
            </div>
            <div className="mt-auto">
              <span className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium transition-colors">
                Manage Forms
              </span>
            </div>
          </Card3D>
        </Link>
        
        <Link href="/patients" className="block h-full">
          <Card3D 
            className="bg-card p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-lg"
            glareOpacity={0.35}
            tiltFactor={8}
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2 group-hover:text-purple-500 transition-colors duration-300">Patients</h2>
            <div className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
              <p className="mb-2">Total Patients: <span className="font-medium text-foreground">86</span></p>
              <p>New This Month: <span className="font-medium text-foreground">14</span></p>
            </div>
            <div className="mt-auto">
              <span className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium transition-colors">
                View Patients
              </span>
            </div>
          </Card3D>
        </Link>
        
        <Link href="/analytics" className="block h-full">
          <Card3D 
            className="bg-card p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-lg"
            glareOpacity={0.35}
            tiltFactor={8}
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2 group-hover:text-green-500 transition-colors duration-300">Analytics</h2>
            <div className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
              <p className="mb-2">Form Completion Rate: <span className="font-medium text-foreground">82%</span></p>
              <p>Avg. Completion Time: <span className="font-medium text-foreground">4m 32s</span></p>
            </div>
            <div className="mt-auto">
              <span className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium transition-colors">
                View Analytics
              </span>
            </div>
          </Card3D>
        </Link>
      </div>
      
      <div className="bg-card rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Recent Form Submissions</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">Patient Intake Form</p>
                <p className="text-sm text-muted-foreground">Sarah Johnson • {i} day{i !== 1 ? 's' : ''} ago</p>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card3D
          className="bg-card p-6"
          glareOpacity={0.2}
          tiltFactor={5}
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button className="w-full">New Form</Button>
            <Button variant="outline" className="w-full">Add Patient</Button>
            <Button variant="outline" className="w-full">Export Data</Button>
            <Button variant="outline" className="w-full">Settings</Button>
          </div>
        </Card3D>
        
        <Card3D
          className="bg-card p-6"
          glareOpacity={0.2}
          tiltFactor={5}
        >
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Storage</span>
              <span className="font-medium">42% Used</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '42%' }}></div>
            </div>
            
            <div className="flex justify-between mt-4">
              <span>Form Templates</span>
              <span className="font-medium">12 Active</span>
            </div>
            
            <div className="flex justify-between">
              <span>Last Backup</span>
              <span className="font-medium">Today, 3:45 PM</span>
            </div>
          </div>
        </Card3D>
      </div>
    </div>
  );
} 