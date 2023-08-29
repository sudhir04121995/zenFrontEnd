import { useSelector } from "react-redux"


function TopBar(){
 const {userName} = useSelector(state =>state.loginInfo.data)
 console.log(useSelector((state)=>state))
    return(
        <div className="navbar bg-neutral text-neutral-content tool-bar rounded-lg">
        <div className="flex-1">
          <a className ="btn btn-ghost normal-case text-xl">{userName}</a>
        </div>
        <div className="flex-none mx-10"> 
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
         
          </div>
        </div>
    )
}
export default TopBar