import { MainSidebar } from "@/components/MainSidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { UpcomingInterviews } from "@/components/dashboard/UpcomingInterviews";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <MainSidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">CareerVault: Consultant Assistant</h1>
            <button className="text-sm text-blue-600">Welcome, Consultant</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Candidates"
            value="245"
            subtitle="Active Candidates"
            change={{ value: 12, positive: true }}
          />
          <StatCard
            title="Open Positions"
            value="18"
            subtitle="Open Positions"
            change={{ value: 3, positive: true }}
          />
          <StatCard
            title="Interviews"
            value="28"
            subtitle="Interviews This Week"
            change={{ value: 8, positive: true }}
          />
          <StatCard
            title="Placement Rate"
            value="68%"
            subtitle="Placement Rate"
            change={{ value: 5, positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityFeed />
          <UpcomingInterviews />
        </div>
      </main>
    </div>
  );
}

export default Index;