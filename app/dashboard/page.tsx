import Header from './components/Header'
import NoticeBoard from './components/NoticeBoard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AssignmentsTab from './components/AssignmentsTab'
import FNRTab from './components/FNRTab'
// import { SubmitAssignmentDialog } from './components/SubmitAssignmentDialog';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 76px)' }}>
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
      {/* <SubmitAssignmentDialog open={false} setOpen={function (open: boolean): void {
        throw new Error('Function not implemented.')
      } } /> */}
    </div>
  )
}