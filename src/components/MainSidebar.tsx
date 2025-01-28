import { LayoutDashboard, Users, Briefcase, MessageSquare, FileText, BarChart2, Settings, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  { section: "MAIN", items: [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Users, label: "Candidates", href: "/candidates" },
    { icon: Briefcase, label: "Job Listings", href: "/jobs" },
  ]},
  { section: "TOOLS", items: [
    { icon: MessageSquare, label: "Interviews", href: "/interviews" },
    { icon: FileText, label: "Templates", href: "/templates" },
    { icon: BarChart2, label: "Analytics", href: "/analytics" },
  ]},
  { section: "AI", items: [
    { icon: MessageCircle, label: "Chat", href: "/chat" },
  ]},
  { section: "OTHER", items: [
    { icon: Settings, label: "Settings", href: "/settings" },
  ]},
];

export function MainSidebar() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-blue-600">CareerVault</h1>
        <p className="text-sm text-gray-500">Consultant Assistant</p>
      </div>
      
      <nav className="flex-1 px-4">
        {sidebarItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xs font-semibold text-gray-400 mb-2 px-4">{section.section}</h2>
            {section.items.map((item, itemIdx) => (
              <Link
                key={itemIdx}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",
                  location.pathname === item.href && "bg-blue-50 text-blue-600"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}