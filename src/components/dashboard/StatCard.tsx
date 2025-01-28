import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  change?: {
    value: number;
    positive?: boolean;
  };
}

export function StatCard({ title, value, subtitle, change }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-3xl font-semibold">{value}</h3>
        {change && (
          <span className={cn(
            "text-sm font-medium",
            change.positive ? "text-green-600" : "text-red-600"
          )}>
            {change.positive ? "+" : ""}{change.value}%
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}