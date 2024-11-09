'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AddPersonFormProps {
  title: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  onAdd: () => void
}

export function AddPersonForm({ title, placeholder, value, onChange, onAdd }: AddPersonFormProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex space-x-2">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button onClick={onAdd}>Add</Button>
      </div>
    </div>
  )
}
