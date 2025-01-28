import { MainSidebar } from "@/components/MainSidebar";

export default function Help() {
  return (
    <div className="flex">
      <MainSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Help</h1>
        <p>Help content coming soon...</p>
      </main>
    </div>
  );
}