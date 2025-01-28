import { MainSidebar } from "@/components/MainSidebar";

export default function Documentation() {
  return (
    <div className="flex">
      <MainSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Documentation</h1>
        <p>Documentation content coming soon...</p>
      </main>
    </div>
  );
}