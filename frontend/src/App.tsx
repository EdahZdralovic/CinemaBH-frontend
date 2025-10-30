import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home/home";
import AboutPage from "./pages/AboutUs/about";
import Tickets from "./pages/Tickets/tickets";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutPage />} />
                    <Route path="/tickets" element={<Tickets/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}