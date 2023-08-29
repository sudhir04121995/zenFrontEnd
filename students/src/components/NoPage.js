import { useNavigate } from "react-router-dom";

function NoPage(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Sorry you entered into wrong page</h1>
            <button  className="btn btn-primary"
            onClick={()=>navigate("/")}
            >HOME</button>
        </div>
    )
}

export default NoPage;