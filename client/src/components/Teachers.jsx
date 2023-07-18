import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import UpdateTeacher from "../components/editteacher";

function Teachers() {
  const [teacherList, setTeacherList] = useState([]);
  let navigate = useNavigate();

  const getTeacherList = async () => {
    const response = await axios.get(`/teachers/`);
    const data = await response.data;
    setTeacherList([...teacherList, ...data]);
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  return (
    <div className="container" style={{ position: "absolute", top: "12%" }}>
      <h2>Teachers list</h2>
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Subjects</th>
              <th scope="col">Phone number</th>
            </tr>
          </thead>
          <tbody>
            {teacherList.map((teacher) => (
              <tr key={teacher._id}>
                <th scope="row">
                  {teacher._id}
                  <button
                    onClick={() => {
                      navigate("/teachers/update?id=" + teacher._id);
                    }}
                    style={{ fontSize: "0.7rem" }}
                    className="btn btn-success btn-xs mx-2 py-0 px-1"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      axios
                        .delete(`/teachers/${teacher._id}`)
                        .then((res) => console.log(res.data));
                      let filteredList = teacherList.filter(
                        (el) => el._id !== teacher._id
                      );
                      setTeacherList([...filteredList]);
                    }}
                    type="button"
                    style={{ fontSize: "0.7rem" }}
                    className="btn btn-danger btn-xs mx-2 py-0 px-1"
                  >
                    delete
                  </button>
                </th>
                <td>{teacher.name}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;
