import { Circle } from "lucide-react";

const activities = [
  {
    title: "Interview scheduled with John Doe for Senior Developer position",
    time: "1 hour ago",
  },
  {
    title: "New candidate application received for Product Manager role",
    time: "2 hours ago",
  },
  {
    title: "Sarah Smith accepted offer for UX Designer position",
    time: "3 hours ago",
  },
  {
    title: "New job requisition from TechCorp for Full Stack Developer",
    time: "3 hours ago",
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex gap-3">
            <Circle className="w-2 h-2 mt-2 text-blue-600 fill-current" />
            <div>
              <p className="text-sm text-gray-800">{activity.title}</p>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}