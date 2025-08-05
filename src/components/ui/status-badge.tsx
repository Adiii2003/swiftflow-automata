import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        pending: "border-compliance-pending bg-compliance-pending/10 text-compliance-pending",
        approved: "border-compliance-approved bg-compliance-approved/10 text-compliance-approved",
        rejected: "border-compliance-rejected bg-compliance-rejected/10 text-compliance-rejected",
        processing: "border-warning bg-warning/10 text-warning",
        completed: "border-success bg-success/10 text-success",
        failed: "border-destructive bg-destructive/10 text-destructive",
        draft: "border-muted-foreground bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "pending",
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {}

function StatusBadge({ className, variant, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(statusBadgeVariants({ variant }), className)} {...props} />
  )
}

export { StatusBadge, statusBadgeVariants }