import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FNRTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faculty and Research</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Second FNR</li>
          <li>First FNR</li>
        </ul>
      </CardContent>
    </Card>
  )
}