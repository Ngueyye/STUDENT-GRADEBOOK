import { randomUUID } from "node:crypto";
import { readStudents, writeStudents } from "./fileService.js";

import { validateStudentData } from "../utils/validation.js";
import { calculateAverage, calculateStatus, findHighestStudent, findLowestStudent } from "../utils/calculations.js";

//Get all students
export async function getAllStudents() {
  return await readStudents();
}

//Get a student by ID
export async function getStudentById(id) {
  const students = await readStudents();
  return students.find((student) => student.id === id) || null;
}
//Get highest student
export async function getHighestStudent() {
  const students = await readStudents();
  return findHighestStudent(students);
}

//Get lowest student
export async function getLowestStudent() {
  const students = await readStudents();
  return findLowestStudent(students);
}

//Create a new student
export async function createStudent(studentData) {
  //Validate the information before saving it
  const validatedData = validateStudentData(studentData);
  
  const students = await readStudents();
  const now = new Date().toISOString();
  const average = calculateAverage(validatedData.subjects);
  const newStudent = {
    id: `STU-${randomUUID()}`,
    firstName: validatedData.firstName,
    lastName: validatedData.lastName,
    email: validatedData.email,
    subjects: validatedData.subjects,
    average: calculateAverage(validatedData.subjects),
    status:calculateStatus(average),
    createdAt: now,
    updatedAt: now,
  };
  students.push(newStudent);
  await writeStudents(students);
  return newStudent;
}

//Update an existing student
export async function updateStudent(id, updatedData) {
  const students = await readStudents();
  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return null;
  }

  //validate the updated informaton
  const validatedData = validateStudentData(updatedData);
  
  const existingStudent = students[studentIndex];
   const average = calculateAverage(validatedData.subjects);
  const updatedStudent = {
    ...existingStudent,
    firstName: validatedData.firstName,
    lastName: validatedData.lastName,
    email: validatedData.email,
    subjects: validatedData.subjects,
    average: calculateAverage(validatedData.subjects),
    status: calculateStatus(average),
    updatedAt: new Date().toISOString(),
  };
  students[studentIndex] = updatedStudent;
  await writeStudents(students);
  return updatedStudent;
}

//Delete a student
export async function deleteStudent(id) {
  const students = await readStudents();
  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return false;
  }

  students.splice(studentIndex, 1);
  await writeStudents(students);
  return true;
}
