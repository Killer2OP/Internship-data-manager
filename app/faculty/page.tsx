"use client"

import React from "react"
import Header from "./components/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentGrid from "./components/StudentGrid"
import AssignmentManagement from "./components/AssignmentManagement"
import FNRManagement from "./components/FNRManagement"

export default function FacultyDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-1 overflow-auto">
        <main className="container mx-auto p-4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Student Details</CardTitle>
              <CardDescription>Overview of enrolled students</CardDescription>
            </CardHeader>
            <CardContent>
              <StudentGrid />
            </CardContent>
          </Card>

          <Tabs defaultValue="assignment">
            <TabsList>
              <TabsTrigger value="assignment">Assignment Management</TabsTrigger>
              <TabsTrigger value="fnr">FNR Management</TabsTrigger>
            </TabsList>
            <TabsContent value="assignment">
              <AssignmentManagement />
            </TabsContent>
            <TabsContent value="fnr">
              <FNRManagement />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}