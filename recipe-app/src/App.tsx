import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { StartPage } from "./pages/StartPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
