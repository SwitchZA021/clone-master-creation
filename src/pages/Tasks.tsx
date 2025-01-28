import { MainSidebar } from "@/components/MainSidebar";

export default function Tasks() {
  return (
    <div className="flex">
      <MainSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Tasks</h1>
        <p>Tasks content coming soon...</p>
      </main>
    </div>
  );
}