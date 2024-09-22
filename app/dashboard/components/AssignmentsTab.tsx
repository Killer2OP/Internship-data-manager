import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AssignmentsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Assignment 2 - Due Dec 20th</li>
          <li>Assignment 1 - Due Dec 22nd</li>
        </ul>
      </CardContent>
    </Card>
  )
}
