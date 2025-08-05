import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StatusBadge } from "@/components/ui/status-badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  {
    id: "TXN001247",
    messageType: "MT103",
    fromBank: "CHASUS33XXX",
    toBank: "DEUTDEFFXXX", 
    amount: "$125,000.00",
    currency: "USD",
    status: "approved",
    timestamp: "2024-01-15 14:30:22",
    reference: "REF202401151430",
  },
  {
    id: "TXN001246",
    messageType: "MT202",
    fromBank: "HSBCGB2LXXX",
    toBank: "BNPAFRPPXXX",
    amount: "€89,500.00",
    currency: "EUR",
    status: "processing",
    timestamp: "2024-01-15 14:28:15",
    reference: "REF202401151428",
  },
  {
    id: "TXN001245",
    messageType: "PACS.008",
    fromBank: "CITIUS33XXX",
    toBank: "BARCGB22XXX",
    amount: "£45,750.00",
    currency: "GBP",
    status: "pending",
    timestamp: "2024-01-15 14:25:10",
    reference: "REF202401151425",
  },
  {
    id: "TXN001244",
    messageType: "MT103",
    fromBank: "JPMSGB2LXXX",
    toBank: "UBSWCHZH80A",
    amount: "$75,200.00",
    currency: "USD",
    status: "completed",
    timestamp: "2024-01-15 14:20:45",
    reference: "REF202401151420",
  },
  {
    id: "TXN001243",
    messageType: "MT940",
    fromBank: "DEUTDEFFXXX",
    toBank: "CHASUS33XXX",
    amount: "$0.00",
    currency: "USD",
    status: "completed",
    timestamp: "2024-01-15 14:15:30",
    reference: "STMT202401151415",
  },
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case "approved":
      return "approved"
    case "processing":
      return "processing"
    case "pending":
      return "pending"
    case "completed":
      return "completed"
    case "failed":
      return "failed"
    default:
      return "pending"
  }
}

export function TransactionTable() {
  return (
    <Card className="shadow-banking">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Transactions</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Message Type</TableHead>
              <TableHead>From Bank</TableHead>
              <TableHead>To Bank</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.id}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {transaction.messageType}
                  </span>
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {transaction.fromBank}
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {transaction.toBank}
                </TableCell>
                <TableCell className="font-medium">
                  {transaction.amount}
                </TableCell>
                <TableCell>
                  <StatusBadge variant={getStatusVariant(transaction.status)}>
                    {transaction.status}
                  </StatusBadge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {transaction.timestamp}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}