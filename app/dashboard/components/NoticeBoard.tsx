"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from 'date-fns'; // Install with: npm install date-fns

interface Assignment {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
}

export default function NoticeBoard() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch('/api/assignments');
        if (!response.ok) {
          throw new Error('Failed to fetch assignments');
        }
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
        ) : assignments.length === 0 ? (
          <p>No assignments posted yet.</p>
        ) : (
          <ul className="space-y-4">
            {assignments.map((assignment) => (
              <li key={assignment._id} className="border-b pb-4">
                <div className="flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  <div>
                    <h3 className="font-semibold">{assignment.title}</h3>
                    <p className="text-sm text-gray-600">{assignment.description}</p>
                    <p className="text-xs text-gray-500">
                      Due: {format(new Date(assignment.dueDate), 'PPP')}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
