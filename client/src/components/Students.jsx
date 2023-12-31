import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Students() {
  // const url = "http://localhost:4000";
  let navigate = useNavigate();
  const [studentList, setStudentList] = useState([]);

  const getStudentList = async () => {
    const response = await axios.get("/students");
    const data = await response.data;
    setStudentList([...studentList, ...data]);
  };
  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div className="container" style={{ position: "absolute", top: "12%" }}>
      <h2>Students list</h2>
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Class</th>
              <th scope="col">Gender</th>
              <th scope="col">Home Address</th>
              <th scope="col">Parent/Guardian Phone</th>
              <th scope="col">Payment status</th>
              <th scope="col">Medical Condition/Disabilities</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student) => (
              <tr key={student._id}>
                <th scope="row">
                  {student._id}
                  <button
                    onClick={() => {
                      navigate("/students/update?id=" + student._id);
                    }}
                    style={{ fontSize: "0.7rem" }}
                    className="btn btn-success btn-xs mx-2 py-0 px-1"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      axios
                        .delete(`/students/${student._id}`)
                        .then((res) => console.log(res.data));
                      let filteredList = studentList.filter(
                        (el) => el._id !== student._id
                      );
                      setStudentList([...filteredList]);
                    }}
                    type="button"
                    style={{ fontSize: "0.7rem" }}
                    className="btn btn-danger btn-xs mx-2 py-0 px-1"
                  >
                    delete
                  </button>
                </th>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>
                <td>{student.parent_contact}</td>
                <td>{student.payStatus}</td>
                <td>{student.medical_condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
