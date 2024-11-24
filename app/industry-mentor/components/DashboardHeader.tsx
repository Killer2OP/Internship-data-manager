'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserMenu } from './UserMenu'
import { EvaluationDialog } from './EvalutionDialog'

interface DashboardHeaderProps {
  isEvaluationOpen: boolean
  setIsEvaluationOpen: (open: boolean) => void
}

export function DashboardHeader({ isEvaluationOpen, setIsEvaluationOpen }: DashboardHeaderProps) {
  return (
    <header className="bg-gray-200 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Industry Mentor Dashboard</h1>
        <div className="space-x-4">
          <Link href="/StudentDetailVerification" onClick={() => console.log('Link clicked!')}>
            <Button variant="outline">Student Detail Verification</Button>
          </Link>
          <EvaluationDialog 
            open={isEvaluationOpen} 
            onOpenChange={setIsEvaluationOpen} 
          />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}