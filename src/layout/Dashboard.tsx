import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import Navigation from "@/components/HomePage/Navigation";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col">
      <Navigation />
      <div className="flex-1 bg-gradient-to-br from-background to-muted">
        <DashboardContainer />
      </div>
    </div>
  );
}
