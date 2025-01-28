const interviews = [
  {
    name: "Michael Brown",
    position: "Senior Backend Engineer at TechCorp",
    time: "2:00 PM Today",
  },
  {
    name: "Emily Wilson",
    position: "Product Manager at InnovaCo",
    time: "4:30 PM Today",
  },
  {
    name: "David Lee",
    position: "DevOps Engineer at CloudTech",
    time: "10:00 AM Tomorrow",
  },
];

export function UpcomingInterviews() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
      <div className="space-y-4">
        {interviews.map((interview, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{interview.name}</h3>
                <p className="text-sm text-gray-500">{interview.position}</p>
              </div>
              <span className="text-sm text-blue-600">{interview.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}