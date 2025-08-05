import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  Clock,
  TrendingUp,
  FileSearch
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const complianceAlerts = [
  {
    id: "CMP001",
    type: "Sanctions Screening",
    severity: "high",
    transaction: "TXN001245",
    description: "Potential match with OFAC list",
    timestamp: "14:25:10",
    status: "pending"
  },
  {
    id: "CMP002", 
    type: "AML Alert",
    severity: "medium",
    transaction: "TXN001243",
    description: "Unusual transaction pattern detected",
    timestamp: "14:15:30",
    status: "investigating"
  },
  {
    id: "CMP003",
    type: "KYC Review",
    severity: "low",
    transaction: "TXN001241",
    description: "Customer documentation requires update",
    timestamp: "13:45:22",
    status: "resolved"
  }
]

const complianceMetrics = [
  { label: "Screening Success Rate", value: 99.7, status: "excellent" },
  { label: "False Positive Rate", value: 2.3, status: "good" },
  { label: "Average Resolution Time", value: 15, status: "good", unit: "min" },
  { label: "Pending Reviews", value: 4, status: "normal" }
]

export function CompliancePanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="shadow-banking">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Compliance Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {complianceMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{metric.label}</span>
                <span className="text-sm font-bold">
                  {metric.value}{metric.unit && metric.unit}
                  {!metric.unit && metric.label.includes("Rate") && "%"}
                </span>
              </div>
              {metric.label.includes("Rate") && (
                <Progress 
                  value={metric.value} 
                  className="h-2"
                />
              )}
            </div>
          ))}
          
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Today's Summary</span>
              <Button variant="outline" size="sm">
                <FileSearch className="mr-2 h-4 w-4" />
                Detailed Report
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="space-y-1">
                <div className="text-lg font-bold text-success">1,243</div>
                <div className="text-xs text-muted-foreground">Clean Transactions</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-warning">4</div>
                <div className="text-xs text-muted-foreground">Under Review</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-destructive">0</div>
                <div className="text-xs text-muted-foreground">Blocked</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-banking">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Active Alerts</span>
            </span>
            <StatusBadge variant="pending">{complianceAlerts.filter(a => a.status === "pending").length} pending</StatusBadge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {complianceAlerts.map((alert) => (
              <div key={alert.id} className="p-3 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <StatusBadge 
                        variant={
                          alert.severity === "high" ? "rejected" : 
                          alert.severity === "medium" ? "pending" : "processing"
                        }
                      >
                        {alert.severity}
                      </StatusBadge>
                    </div>
                    <p className="text-xs text-muted-foreground">{alert.description}</p>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>TXN: {alert.transaction}</span>
                      <span>Time: {alert.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {alert.status === "pending" && <Clock className="h-4 w-4 text-warning" />}
                    {alert.status === "investigating" && <Eye className="h-4 w-4 text-primary" />}
                    {alert.status === "resolved" && <CheckCircle className="h-4 w-4 text-success" />}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Eye className="mr-1 h-3 w-3" />
                    Review
                  </Button>
                  {alert.status === "pending" && (
                    <>
                      <Button size="sm" variant="outline" className="text-xs">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs text-destructive">
                        Block
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full">
              View All Compliance Alerts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}