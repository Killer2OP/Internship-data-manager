import { useState } from "react";

export default function SubmitAssignment() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, dueDate, facultyId: "facultyIdHere" }), // Replace with actual faculty ID
    });

    if (response.ok) {
      // Handle success (e.g., reset form or show a success message)
      setTitle("");
      setDescription("");
      setDueDate("");
    } else {
      // Handle error
      console.error('Failed to submit assignment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Submit Assignment</button>
    </form>
  );
} 