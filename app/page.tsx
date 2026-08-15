import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import PlanGrid from "@/components/PlanGrid";
import DecisionPath from "@/components/DecisionPath";
import CompareTable from "@/components/CompareTable";
import Faq from "@/components/Faq";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <Hero />
      <PlanGrid />
      <DecisionPath />
      <CompareTable />
      <Faq />
      <SiteFooter />
    </main>
  );
}
