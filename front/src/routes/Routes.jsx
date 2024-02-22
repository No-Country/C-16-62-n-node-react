import { Routes as ReactDomRoutes, Route } from "react-router-dom" 
import Login from "../pages/login/login";         



const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path="/" element={<></>} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<></>} />



        </ReactDomRoutes>
    )
}

export default Routes;