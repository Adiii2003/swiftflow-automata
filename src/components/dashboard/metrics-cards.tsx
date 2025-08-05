import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Shield
} from "lucide-react"

const metrics = [
  {
    title: "Total Transactions Today",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "Processed payments",
  },
  {
    title: "Pending Approvals",
    value: "23",
    change: "-8.2%",
    trend: "down",
    icon: Clock,
    description: "Awaiting authorization",
  },
  {
    title: "Success Rate",
    value: "99.8%",
    change: "+0.1%",
    trend: "up",
    icon: CheckCircle,
    description: "Transaction success",
  },
  {
    title: "Compliance Alerts",
    value: "4",
    change: "-2",
    trend: "down",
    icon: AlertTriangle,
    description: "Active screening alerts",
  },
  {
    title: "Daily Volume",
    value: "$2.4M",
    change: "+15.3%",
    trend: "up",
    icon: TrendingUp,
    description: "Total processed amount",
  },
  {
    title: "SWIFT Messages",
    value: "892",
    change: "+7.1%",
    trend: "up",
    icon: Shield,
    description: "MT/MX messages processed",
  },
]

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title} className="shadow-banking hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              {metric.trend === "up" ? (
                <ArrowUpRight className="h-3 w-3 text-success" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-destructive" />
              )}
              <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                {metric.change}
              </span>
              <span className="text-muted-foreground">from yesterday</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}