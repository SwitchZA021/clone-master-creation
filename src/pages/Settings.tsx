import { MainSidebar } from "@/components/MainSidebar";

export default function Settings() {
  return (
    <div className="flex">
      <MainSidebar />
      <main className="flex-1 bg-gray-50 p-6">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-500">Settings features coming soon.</p>
        </div>
      </main>
    </div>
  );
}