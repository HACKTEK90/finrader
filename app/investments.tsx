import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { FinanceProvider } from "@/contexts/finance-context"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { InvestmentsWrapper } from "@/components/client-wrappers/investments-wrapper"

export const metadata: Metadata = {
  title: "Investments | FinWise - Smart Financial Management Platform",
  description: "Track and manage your investment portfolio, monitor returns, and plan future investments with FinWise.",
}

export default function InvestmentsPage() {
  return (
    <ProtectedRoute>
      <FinanceProvider>
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8">
            <InvestmentsWrapper />
          </main>
        </div>
      </FinanceProvider>
    </ProtectedRoute>
  )
}


