import { useLocation } from "react-router-dom"
import { Agents } from "./Agents/Agents"
import { Dashboard } from "./Dashboard"
import { Properties } from "./Properties/Properties"



export const AdminDisplayArea = () => {
    const currantPath = useLocation()
    const path = currantPath.pathname.split("/").pop(-1)
    
  return (
    <div className="w-full min-w-0">
        {path === "Dashboard" ? <Dashboard/> : path === "Properties" ? <Properties/> : <Agents/>}
    </div>
  )
}
