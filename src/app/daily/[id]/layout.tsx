import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function DailyIdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}