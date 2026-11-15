# Student Gradebook API

A RESTful API built with Node.js and Express for managing student records, subject grades, automatic grade averages, pass/fail statuses, and class statistics using local JSON file storage.

## Features

- **Full CRUD Operations:** Create, read, update, and delete student records.
- **Automatic Average & Status Calculation:** Automatically calculates each student's average score and assigns a "Pass" or "Fail" status based on the pass mark ("50").
- **Highest & Lowest Student:** Dedicated endpoints to retrieve the highest and lowest scoring students based on their average scores.
- **Unique ID Generation:** Generates unique "STU-<UUID>" identifiers for every new student.
- **Data Validation & Error Handling:** Validates incoming student data and handles errors through a centralized Express error handler.
- **Persistent JSON Storage:** Reads and writes student records to `data/students.json`.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Storage:** Local JSON file (`fs/promises`)
- **ID Generation:** `node:crypto` (`randomUUID`)

## Project Structure

```text
├── data/
│   └── students.json
├── routes/
│   └── studentRoutes.js
├── services/
│   ├── studentService.js
│   └── fileService.js
├── utils/
│   ├── calculations.js
│   └── validation.js
├── app.js
├── server.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ngueyye/STUDENT-GRADE-BOOK.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd STUDENT-GRADE-BOOK
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the server:**

   ```bash
   npm run start
   ```

The server runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|:---|:---|:---|
| `GET` | `/` | Test the server and check availability |
| `GET` | `/api/students` | Retrieve all students |
| `GET` | `/api/students/highest` | Retrieve the highest scoring student |
| `GET` | `/api/students/lowest` | Retrieve the lowest scoring student |
| `GET` | `/api/students/:id` | Retrieve a student by ID |
| `POST` | `/api/students` | Create a new student record |
| `PUT` | `/api/students/:id` | Update an existing student record |
| `DELETE` | `/api/students/:id` | Delete a student record |

## Error Handling

The API uses appropriate HTTP status codes to communicate errors:

- **400:** Validation error or malformed JSON body.
- **404:** Student ID or API route not found.
- **500:** Internal server error.

## Team Members and Contributions

The Student Gradebook API was developed collaboratively by the following team members:

### 1. Adeniyi Olamide Adeife
**Branch:** `feature/routes`, `feature/services`

- Created the project structure.
- Developed `studentService.js` and `studentRoutes.js`.
- Worked on testing and error handling.
- Tested all CRUD operations.

### 2. Muhammed Bahir Abdullahi, Marvel708 and imadeniyi
**Branch:** `feature/calculations.js`

- Developed the code in `calculations.js`.
- Carried out quality assurance.
- Participated in testing and error handling.
- Tested all CRUD operations.
- Created the `README.md` documentation.

### 3. Adole Ngueyye
**Branch:** `feature/app.js`

- Created `server.js`.
- Worked on testing and error handling.
- Created the GitHub repository.
- Added all team members as repository collaborators.
- Tested all CRUD operations.

### 4. Leesa22 and agudatemiloluwa-commits
**Branch:** `feature/file-service`

- Worked on the file service implementation.
- Provided student information for the project.
- Participated in testing and error handling.
- Tested all CRUD operations.

### 5. Hifzy and Jatu-Abel
**Branch:** `feature/validation.js`

- Developed the validation functionality.
- Checked that submitted data types were correct.
- Validated student information.
- Checked data submitted through API requests.
- Participated in testing and error handling.
- Tested all CRUD operations.

---

**Project:** Student Gradebook API

**Repository:** https://github.com/Ngueyye/STUDENT-GRADE-BOOK.git
