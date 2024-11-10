"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
}

export default function NoticeBoard() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch('/api/assignments');
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Notice Board</CardTitle>
        <CardDescription>Recent announcements and updates</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading assignments...</p>
        ) : (
          <ul className="space-y-2">
            {assignments.map((assignment) => (
              <li key={assignment.id} className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span>{assignment.title}: {assignment.description}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
