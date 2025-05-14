import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front } from "../pages/front";
import HomeLayout from "../pages/layout/home.layout.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../components/common/ThemeContext.jsx";

const RoutingComponent = () => {
    return (
        <>
            <BrowserRouter>
            <ThemeProvider>
                <ToastContainer autoClose={2000} />
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<Front.HomePage />} />
                        {/* <Route path="login" element={<Front.LoginPage />} />
                        <Route path="register" element={<Front.RegisterPage />} /> */}
                    </Route>
                </Routes>  
                </ThemeProvider>              
            </BrowserRouter>
        </>
    );
};

export default RoutingComponent;
