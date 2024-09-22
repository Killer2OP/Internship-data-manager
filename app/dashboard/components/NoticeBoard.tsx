import { Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NoticeBoard() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Notice Board</CardTitle>
        <CardDescription>Recent announcements and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            <span>New assignment posted.</span>
          </li>
          <li className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            <span>New FNR submission deadline extended to June 1st.</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}