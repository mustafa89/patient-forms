import { ContactableSection } from "@/components/sections/contactable-section";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for any inquiries or support",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactableSection />
    </main>
  );
} 