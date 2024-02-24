import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login"; 
import Register from "../pages/register/Register";        
import NotFound from "../pages/notfound/NotFound";



function Public() {
    return (
    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />       
        <Route path="*" element={<NotFound />} />

      </Routes>
    )
}

export default Public;