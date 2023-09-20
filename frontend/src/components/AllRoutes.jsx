
import {Routes,Route} from "react-router-dom"
import { ProjectListing } from "../pages/ProjectListing"
import { ProjectFiles } from "../pages/ProjectFiles"
import { ProjectEdit } from "../pages/ProjectEdit"
import { Widget } from "../pages/Widget"
export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<ProjectListing/>}></Route>
            <Route path="/projectFiles" element={<ProjectFiles/>}></Route>
            <Route path="/projectEdit" element={<ProjectEdit/>}></Route>
            <Route path="/widget" element={<Widget/>}></Route>
        </Routes>
        </>
    )
}