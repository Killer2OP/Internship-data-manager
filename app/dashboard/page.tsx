import Header from './components/Header'
import NoticeBoard from './components/NoticeBoard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AssignmentsTab from './components/AssignmentsTab'
import FNRTab from './components/FNRTab'

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-1 overflow-hidden">
        <main className="container mx-auto p-4">
          <NoticeBoard />
          <Tabs defaultValue="assignments">
            <TabsList>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="fnr">FNR</TabsTrigger>
            </TabsList>
            <TabsContent value="assignments">
              <AssignmentsTab />
            </TabsContent>
            <TabsContent value="fnr">
              <FNRTab />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}