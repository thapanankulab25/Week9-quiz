import { useContext } from "react";
import { DataContext } from "../App";


const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    
    return(
        
        <div className="menu">
               <img src={"https://kmutnb.ac.th/KMUTNB/media/kmutnb/images/kmutnb_index_Logo.png"} alt="Logo" />
            <h1>Menu Component</h1>
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu;