import { FloatingElement } from "@/components/ui/floating-element";
import { Card3D } from "@/components/ui/card-3d";
import { GradientButton } from "@/components/ui/gradient-button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with 3D and floating elements */}
      <section className="flex flex-col items-center justify-center text-center py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement className="absolute top-20 left-[10%]" amplitude={20} period={4} delay={0.5}>
            <div className="w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-xl"></div>
          </FloatingElement>
          <FloatingElement className="absolute top-40 right-[15%]" amplitude={18} period={5} delay={1.5}>
            <div className="w-20 h-20 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-xl"></div>
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-[20%]" amplitude={15} period={6} delay={1}>
            <div className="w-24 h-24 rounded-full bg-pink-500/10 dark:bg-pink-500/20 blur-xl"></div>
          </FloatingElement>
        </div>
        
        <FloatingElement amplitude={6} period={4} delay={0.2}>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Patient Forms
          </h1>
        </FloatingElement>
        
        <p className="text-xl max-w-2xl mb-10 text-muted-foreground relative">
          Streamline your patient intake process with digital forms that save time and reduce errors
          <span className="absolute -left-6 -top-6 w-20 h-20 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-2xl"></span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 z-10 shimmer">
          <GradientButton 
            gradientFrom="from-blue-600" 
            gradientTo="to-indigo-600"
            size="lg"
          >
            Get Started
          </GradientButton>
          <GradientButton 
            variant="outline"
            size="lg"
          >
            View Demo
          </GradientButton>
        </div>
      </section>
      
      {/* Features Section with 3D Cards */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/5 to-background dark:from-background dark:via-blue-950/5 dark:to-background -z-10"></div>
        
        <FloatingElement amplitude={8} period={5} delay={0}>
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Key Features</h2>
        </FloatingElement>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Experience the future of patient form management with our powerful features
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          <Card3D 
            className="bg-card text-card-foreground p-8 h-full transition-colors duration-300"
            glareOpacity={0.35}
            tiltFactor={10}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                <path d="m9 9 1 1 3-3" />
                <path d="m9 13 1 1 3-3" />
                <path d="M9 17h6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">Digital Forms</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Create and manage digital forms for your patients, eliminating paper waste and storage issues</p>
          </Card3D>
          
          <Card3D 
            className="bg-card text-card-foreground p-8 h-full transition-colors duration-300"
            glareOpacity={0.35}
            tiltFactor={10}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">Patient Management</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Track patient information and form submissions with our intuitive dashboard and reporting tools</p>
          </Card3D>
          
          <Card3D 
            className="bg-card text-card-foreground p-8 h-full transition-colors duration-300"
            glareOpacity={0.35}
            tiltFactor={10}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="3" x2="21" y1="15" y2="15" />
                <line x1="9" x2="9" y1="9" y2="21" />
                <line x1="15" x2="15" y1="9" y2="21" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">Easy Integration</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Seamlessly integrate with your existing healthcare systems through our flexible API and export options</p>
          </Card3D>
        </div>
      </section>
      
      {/* CTA Section with Glassmorphism */}
      <section className="py-16 relative">
        <div className="glass rounded-2xl p-12 shadow-3d mx-auto max-w-4xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <FloatingElement amplitude={4} period={3}>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to get started?</h2>
            </FloatingElement>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of healthcare providers who are saving time and improving patient satisfaction with digital forms.
            </p>
            <GradientButton 
              gradientFrom="from-purple-600" 
              gradientTo="to-pink-600"
              size="lg"
            >
              Sign Up Now
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
