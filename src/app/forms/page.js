"use client"

import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/card-3d";
import { FloatingElement } from "@/components/ui/floating-element";
import Link from "next/link";

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <FloatingElement amplitude={4} period={3}>
            <h1 className="text-4xl font-bold mb-4 gradient-text">Patient Forms</h1>
          </FloatingElement>
          <p className="text-muted-foreground max-w-2xl">
            Create, manage, and share digital forms with your patients. Streamline your intake process and reduce paperwork.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link href="/forms/patient-registration" className="block h-full">
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
              <h2 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors duration-300">Patient Registration</h2>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6">
                Complete patient information, medical history, and emergency contacts.
              </p>
              <div className="mt-auto">
                <span className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 text-sm font-medium transition-colors">
                  Open Form
                </span>
              </div>
            </Card3D>
          </Link>
          
          <Card3D 
            className="bg-card p-6 h-full"
            glareOpacity={0.35}
            tiltFactor={8}
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="m8 14 2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2 group-hover:text-purple-500 transition-colors duration-300">Appointment Request</h2>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6">
              Request a new appointment with preferred dates and times.
            </p>
            <div className="mt-auto">
              <span className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                Coming Soon
              </span>
            </div>
          </Card3D>
          
          <Card3D 
            className="bg-card p-6 h-full"
            glareOpacity={0.35}
            tiltFactor={8}
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2 group-hover:text-green-500 transition-colors duration-300">Medical History</h2>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6">
              Detailed medical history and health questionnaire.
            </p>
            <div className="mt-auto">
              <span className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                Coming Soon
              </span>
            </div>
          </Card3D>
          
          <Link href="/forms/procedures" className="block h-full">
            <Card3D 
              className="bg-card p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-lg"
              glareOpacity={0.35}
              tiltFactor={8}
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
              <h2 className="text-xl font-medium mb-2 group-hover:text-amber-500 transition-colors duration-300">Gastroenterology Procedure</h2>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6">
                Document endoscopy and colonoscopy findings and interventions.
              </p>
              <div className="mt-auto">
                <span className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 text-sm font-medium transition-colors">
                  Open Form
                </span>
              </div>
            </Card3D>
          </Link>
        </div>
        
        <Card3D
          className="bg-card rounded-xl p-8 mb-10"
          glareOpacity={0.2}
          tiltFactor={3}
        >
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Create Custom Form</h2>
              <p className="text-muted-foreground">
                Need a specific form for your practice? Build a custom form with our easy-to-use form builder.
              </p>
            </div>
            <Button size="lg" className="shrink-0">
              Create Form
            </Button>
          </div>
        </Card3D>
        
        <div className="bg-card rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Form Submissions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">Patient Registration Form</p>
                  <p className="text-sm text-muted-foreground">Sarah Johnson • {i} day{i !== 1 ? 's' : ''} ago</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 