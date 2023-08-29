
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import { API } from "../API/api";
import { useFormik } from "formik";
import { studentSchema } from "../schema/schema";
// import { useNavigate } from "react-router-dom";


function AddStudents() {

  //Form validation logic
 
  const {values ,handleChange,handleSubmit,handleBlur,errors,touched}= useFormik({
    initialValues : {
      name:"",
      batch:"",
      email:"",
      phone:"",
      qualification:"",
    },
    validationSchema : studentSchema,
    onSubmit : (newStudent)=>{
      console.log(newStudent)
      addNewStudents(newStudent)
    }
  })

  const {studentData,setData} = AppState()
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [batch, setBatch] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [qualification, setQualification] = useState("");

  async function addNewStudents(newStudent){
    // const newStudentsObject={
    
    //   name,
    //   batch,
    //   email,
    //   phone,
    //   qualification
    // }
    const response = await fetch(API,{
      method:"POST",
      body : JSON.stringify(newStudent),
      headers:{
        "Content-Type":"application/json",
      },
    });
    const data = await response.json();
    console.log(data)

    setData([...studentData,data]);
    values.name = ""
    values.batch =""
    values.email =""
    values.phone =""
    values.qualification=""
  }

  return (
    <Base> 
      <div p-5>Please fill the form to add new student</div>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
        <label className="input-group input-group-md m-2">
          <span>Name</span>
          <input type="text" 
          placeholder="Enter Student Name"
           className="input input-bordered input-md w-96" 
           value={values.name}
           onChange={handleChange}
           onBlur={handleBlur}
           name="name"
           />
        </label>

        {touched.name && errors.name ?
        <div className="text-red-300">
          {errors.name}
          </div> : ""}

        <label className="input-group input-group-md m-2">
          <span>Batch</span>
          <input type="text" 
          placeholder="Enter Student Batch"
           className="input input-bordered input-md w-96" 
           value={values.batch}
           onChange={handleChange}
           onBlur={handleBlur}
           name="batch"
           />
        </label>

        {touched.batch && errors.batch ?
        <div className="text-red-300">
          {errors.batch}
          </div> : ""}

        <label className="input-group input-group-md m-2">
          <span>Email</span>
          <input type="text"
           placeholder="Enter Student Email" 
           className="input input-bordered input-md w-96" 
           value={values.email}
           onChange={handleChange}
           onBlur={handleBlur}
           name="email"
           />
        </label>

        {touched.email && errors.email ?
        <div className="text-red-300">
          {errors.email}
          </div> : ""}

        <label className="input-group input-group-md m-2">
          <span>Phone</span>
          <input type="text"
           placeholder="Enter Student Phone"
            className="input input-bordered input-md w-96"
            value={values.phone} 
            onChange={handleChange}
           onBlur={handleBlur}
           name="phone"
           />
        </label>

        {touched.phone && errors.phone ?
        <div className="text-red-300">
          {errors.phone}
          </div> : ""}

        <label className="input-group input-group-md m-2">
          <span>Education</span>
          <input type="text"
           placeholder="Enter Student Education" 
           className="input input-bordered input-md w-96" 
           value={values.qualification} 
           onChange={handleChange}
           onBlur={handleBlur}
           name="qualification"
           />
        </label>

        {touched.qualification && errors.qualification ?
        <div className="text-red-300">
          {errors.qualification}
          </div> : ""}

        <button className=" rounded-full bg-base-200 p-2 m-5"
        type="submit"
        // onClick={addNewStudents} 
        >
          Add Student
        </button> 
        </form>
       
      </div>
    </Base>
  )
}

export default AddStudents;

//(e)=>setName(e.target.value)
 /* <label className="input-group input-group-md m-2">
          <span>Id</span>
          <input
           type="number"
            placeholder="Enter Student Id" 
            className="input input-bordered input-md w-96 " 
            value={id}
            onChange={(e)=>setId(e.target.value)}/>
        </label>  */