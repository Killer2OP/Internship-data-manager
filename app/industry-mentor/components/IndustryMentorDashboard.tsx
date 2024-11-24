'use client'
import { useState } from 'react'
import { DashboardHeader } from './DashboardHeader'
import {StudentCard} from './StudentCard'
import {EvaluationDialog} from './EvalutionDialog'

export function IndustryMentorDashboard({ studentName = "Pratham Mahajan" }) {
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DashboardHeader 
        isEvaluationOpen={isEvaluationOpen}
        setIsEvaluationOpen={setIsEvaluationOpen}
      />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <StudentCard studentName={studentName} />
      </main>
    </div>
  )
}