export interface Teacher {
    id: number;
    name: string;
  }
  
  export interface Student {
    id: number;
    name: string;
  }
  
  export interface Performance {
    studentId: number;
    completedAssignments: number;
    totalAssignments: number;
    overallScore: number;
  }