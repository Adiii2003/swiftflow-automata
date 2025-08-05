import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StatusBadge } from "@/components/ui/status-badge"
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  ArrowRight,
  Play
} from "lucide-react"
import { Button } from "@/components/ui/button"

const workflowSteps = [
  {
    id: 1,
    name: "Message Validation",
    status: "completed",
    assignee: "System",
    duration: "0.2s",
    description: "SWIFT format validation and parsing"
  },
  {
    id: 2,
    name: "Compliance Screening", 
    status: "completed",
    assignee: "AML Engine",
    duration: "1.5s",
    description: "Sanctions and AML checks"
  },
  {
    id: 3,
    name: "Risk Assessment",
    status: "processing",
    assignee: "Risk Team",
    duration: "2m 30s",
    description: "High-value transaction review"
  },
  {
    id: 4,
    name: "Manager Approval",
    status: "pending",
    assignee: "John Smith",
    duration: "-",
    description: "Senior manager authorization required"
  },
  {
    id: 5,
    name: "SWIFT Transmission",
    status: "pending",
    assignee: "System",
    duration: "-",
    description: "Send to SWIFT network"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-success" />
    case "processing":
      return <Play className="h-4 w-4 text-warning animate-pulse" />
    case "pending":
      return <Clock className="h-4 w-4 text-muted-foreground" />
    default:
      return <AlertTriangle className="h-4 w-4 text-destructive" />
  }
}

export function WorkflowStatus() {
  const completedSteps = workflowSteps.filter(step => step.status === "completed").length
  const progressPercentage = (completedSteps / workflowSteps.length) * 100

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="shadow-banking">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Active Workflows</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Payment Processing Progress</span>
              <span className="text-sm text-muted-foreground">{completedSteps}/{workflowSteps.length} steps</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            
            <div className="space-y-3">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {getStatusIcon(step.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium truncate">
                        {step.name}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                    <p className="text-xs text-primary">
                      Assigned: {step.assignee}
                    </p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-banking">
        <CardHeader>
          <CardTitle>Workflow Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-warning">8</div>
                <div className="text-xs text-muted-foreground">Pending Review</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">156</div>
                <div className="text-xs text-muted-foreground">Completed Today</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-destructive">2</div>
                <div className="text-xs text-muted-foreground">Exception Queue</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm font-medium">Recent Actions</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">TXN001247 approved</span>
                  </div>
                  <span className="text-xs text-muted-foreground">2m ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <span className="text-sm">AML alert flagged</span>
                  </div>
                  <span className="text-xs text-muted-foreground">5m ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-2">
                    <Play className="h-4 w-4 text-primary" />
                    <span className="text-sm">Workflow initiated</span>
                  </div>
                  <span className="text-xs text-muted-foreground">8m ago</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full" variant="outline">
              View All Workflows
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}