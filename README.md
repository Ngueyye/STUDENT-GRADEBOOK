# STUDENT-GRADEBOOK
// students.js - ES Modules version

export const students = [
  {
    id: "ST001",
    name: "Tobi Adeyemi",
    subjects: {
      Maths: 78,
      English: 72,
      Science: 72
    }
  },
  {
    id: "ST002",
    name: "Amara Nwosu",
    subjects: {
      Maths: 95,
      English: 88,
      Science: 90
    }
  },
  {
    id: "ST003",
    name: "Chidi Obi",
    subjects: {
      Maths: 65,
      English: 70,
      Science: 68
    }
  },
  {
    id: "ST004",
    name: "Fatima Bello",
    subjects: {
      Maths: 82,
      English: 85,
      Science: 80
    }
  }
];
// To get average from subjects
export function getAverage(subjects) {
  const scores = Object.values(subjects);
  const total = scores.reduce((sum, score) => sum + score, 0);
  return Math.round(total / scores.length);
}

// To get student info by ID number
export function getStudentById(id) {
  const student = students.find(s => s.id === id);
  if (!student) {
    return "Student not found";
  }
  return {
    id: student.id,
    name: student.name,
    subjects: student.subjects,
    average: getAverage(student.subjects)
  };
}

// To show all students
students.forEach(student => {
  console.log(`${student.id} - ${student.name} - Average: ${getAverage(student.subjects)}`);
});
