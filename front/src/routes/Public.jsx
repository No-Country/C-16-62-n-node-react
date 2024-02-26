import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login"; 
import Register from "../pages/register/Register";        
import NotFound from "../pages/notfound/NotFound";
import FormService from "../pages/services/FormService";
import Profile from "../pages/profile/Profile";



function Public() {
    return (
    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forms/services" element={<FormService />} />              
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    )
}

export default Public;