import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


// Student Details Page
function StudentDetails() {

  const { id } = useParams();

  return (
    <div>
      <h2>Student Details</h2>
      <p>Student ID: {id}</p>
    </div>
  );
}


// Student List Page
function Students() {
  return (
    <div>
      <h2>Students List</h2>

      <p>
        <Link to="/students/1">Student 1</Link>
      </p>

      <p>
        <Link to="/students/2">Student 2</Link>
      </p>

      <p>
        <Link to="/students/3">Student 3</Link>
      </p>
    </div>
  );
}


function Student() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Students />} />

        {/* Student List */}
        <Route path="/students" element={<Students />} />

        {/* Dynamic Route */}
        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default Student;