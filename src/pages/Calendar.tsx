import { MainSidebar } from "@/components/MainSidebar";

export default function Calendar() {
  return (
    <div className="flex">
      <MainSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Calendar</h1>
        <p>Calendar content coming soon...</p>
      </main>
    </div>
  );
}