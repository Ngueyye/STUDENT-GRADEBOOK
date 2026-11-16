// calculate a student's average score
 export function calculateAverage(subjects) {
  const scores = Object.values(subjects);

  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return Number((total / scores.length).toFixed(2));
}


// calculate student status
const PASS_MARK = 50;
export function calculateStatus(average) {
  return average >= PASS_MARK ? "Pass" : "Fail";
}

// Find the student with the highest average score
export function findHighestStudent(students) {
  if (!students || students.length === 0) return null;

  let highest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].average > highest.average) {
      highest = students[i];
    }
  }
  return highest;
}

// Find the student with the lowest average score
export function findLowestStudent(students) {
  if (!students || students.length === 0) return null;

  let lowest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].average < lowest.average) {
      lowest = students[i];
    }
  }
  return lowest;
}
