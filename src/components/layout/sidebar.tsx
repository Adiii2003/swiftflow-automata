import { 
  LayoutDashboard,
  ArrowRightLeft,
  MessageSquare,
  Shield,
  FileText,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const navigation = [
    {
      name: "Dashboard",
      href: "#",
      icon: LayoutDashboard,
      current: true,
    },
    {
      name: "Payment Processing",
      href: "#",
      icon: ArrowRightLeft,
      current: false,
      children: [
        { name: "Incoming Payments", href: "#", icon: Clock },
        { name: "Outgoing Payments", href: "#", icon: ArrowRightLeft },
        { name: "Pending Approvals", href: "#", icon: CheckCircle },
      ]
    },
    {
      name: "SWIFT Messages",
      href: "#",
      icon: MessageSquare,
      current: false,
      children: [
        { name: "MT103 - Customer Credit", href: "#" },
        { name: "MT202 - Bank Transfer", href: "#" },
        { name: "MT940 - Statement", href: "#" },
        { name: "MX PACS Messages", href: "#" },
      ]
    },
    {
      name: "Compliance",
      href: "#",
      icon: Shield,
      current: false,
      children: [
        { name: "AML Screening", href: "#", icon: Shield },
        { name: "Sanctions Check", href: "#", icon: AlertTriangle },
        { name: "Exception Queue", href: "#", icon: AlertTriangle },
      ]
    },
    {
      name: "Workflow Management",
      href: "#",
      icon: Users,
      current: false,
    },
    {
      name: "Reports & Audit",
      href: "#",
      icon: FileText,
      current: false,
      children: [
        { name: "Transaction Reports", href: "#" },
        { name: "Audit Trail", href: "#" },
        { name: "Compliance Reports", href: "#" },
        { name: "Reconciliation", href: "#" },
      ]
    },
    {
      name: "Analytics",
      href: "#",
      icon: BarChart3,
      current: false,
    },
    {
      name: "Settings",
      href: "#",
      icon: Settings,
      current: false,
    },
  ]

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            SWIFT Portal
          </h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Button
                    variant={item.current ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      item.current && "bg-gradient-primary text-primary-foreground"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                  {item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Button
                          key={child.name}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-xs"
                        >
                          {child.icon && <child.icon className="mr-2 h-3 w-3" />}
                          {child.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}