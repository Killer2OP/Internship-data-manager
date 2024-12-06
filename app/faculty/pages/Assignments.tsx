
import React, { useEffect, useState } from 'react';

interface Assignment {
    _id: string;
    title: string;
    // Add other fields as necessary
}

const Assignments: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            const response = await fetch('/api/assignments');
            const data = await response.json();
            setAssignments(data);
        };

        fetchAssignments();
    }, []);

    return (
        <div>
            <h1>Assignments</h1>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment._id}>{assignment.title}</li> // Use _id for the key
                ))}
            </ul>
        </div>
    );
};

export default Assignments;