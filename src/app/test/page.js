export default function TestPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Tailwind CSS Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary text-primary-foreground p-6 rounded-lg">
          Primary Background
        </div>
        <div className="bg-secondary text-secondary-foreground p-6 rounded-lg">
          Secondary Background
        </div>
        <div className="bg-accent text-accent-foreground p-6 rounded-lg">
          Accent Background
        </div>
        <div className="bg-muted text-muted-foreground p-6 rounded-lg">
          Muted Background
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg border">
          Card with Border
        </div>
        <div className="bg-background text-foreground p-6 rounded-lg border">
          Default Background with Border
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-destructive text-destructive-foreground rounded-lg">
        Destructive Background
      </div>
    </div>
  );
} 