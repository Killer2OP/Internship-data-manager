'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EvaluationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EvaluationDialog({ open, onOpenChange }: EvaluationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Industry Mentor Evaluation (Form II)</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Industry Mentor Evaluation (Form II)</DialogTitle>
          <DialogDescription>Complete the evaluation form for the student.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="performance">Overall Performance</Label>
            <Input id="performance" placeholder="Rate from 1-10" type="number" min="1" max="10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <textarea
              id="comments"
              placeholder="Enter your comments here"
              className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background"
            />
          </div>
          <Button onClick={() => onOpenChange(false)}>Submit Evaluation</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
