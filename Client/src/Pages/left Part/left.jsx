import Logout from "./logout"
import Search from "./search"
import User from "./user"



const Left=()=>{
return(
    <>
    <div className="w-[30%]  bg-black text-gray-300">
        <Search/>
        <User/>
   <Logout/>
    </div>
 
    </>
)
}
export default Left
