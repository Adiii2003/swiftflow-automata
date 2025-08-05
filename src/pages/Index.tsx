import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { TransactionTable } from "@/components/dashboard/transaction-table"
import { WorkflowStatus } from "@/components/dashboard/workflow-status"
import { CompliancePanel } from "@/components/dashboard/compliance-panel"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-card" />
        <main className="flex-1 ml-64 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">SWIFT Payment Processing Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor cross-border payments, compliance, and workflow automation in real-time
            </p>
          </div>
          
          <MetricsCards />
          
          <WorkflowStatus />
          
          <CompliancePanel />
          
          <TransactionTable />
        </main>
      </div>
    </div>
  )
}

export default Index