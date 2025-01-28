import { MainSidebar } from "@/components/MainSidebar";

export default function Chat() {
  return (
    <div className="flex">
      <MainSidebar />
      <main className="flex-1 bg-gray-50 p-6">
        <h1 className="text-2xl font-semibold mb-6">AI Chat Assistant</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-500">AI chat interface coming soon.</p>
        </div>
      </main>
    </div>
  );
}