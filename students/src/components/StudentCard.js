import { useNavigate } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import { API } from "../API/api";


export default function StudentCard({ student }) {
  const { studentData, setData, crumState, setCrumState } = AppState();
  const navigate = useNavigate();

  const removeStudent = async (id) => {
    let res = window.confirm("are you sure");
    if (res) {
      const responce = await fetch(`${API}/${id}`,{
        method:"DELETE"
      });
      const data = await responce.json();
      const newStudentData = studentData.filter((stud) => stud.id !== id);
      setData(newStudentData);
    }
  };

  const handleEdit = (id) => {
    const newCrum = {
      name: "edit",
      path: `/edit/${id}`,
    };
    setCrumState([...crumState, newCrum]);
    navigate(`/edit/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <h2 className="card-title">{student.name}</h2>
      <div className="card-body">
        <p>Batch:{student.batch}</p>
        <p>Email:{student.email}</p>
        <p>Phone:{student.phone}</p>
        <p>EDU :{student.qualification}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-danger"
            onClick={() => removeStudent(student.id)}
          >
            Delete
          </button>

          <button
            className="btn btn-primary"
            onClick={() => handleEdit(student.id)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

//`/edit/${student.id}`)
