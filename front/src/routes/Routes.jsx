import { Routes as ReactDomRoutes, Route } from "react-router-dom" 
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/login"; 
import Register from "../pages/register/Register";        



const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path="/" element={< HomePage />} />
            <Route path="/login" element={ <Login />}></Route>
            <Route path="/register" element={< Register />} />



        </ReactDomRoutes>
    )
}

export default Routes;