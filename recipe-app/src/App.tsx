import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { StartPage } from "./pages/StartPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { Slide, ToastContainer } from "react-toastify";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { CreateRecipePage } from "./pages/CreateRecipePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                    <Route
                        path="/reset-password"
                        element={<ResetPasswordPage />}
                    />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/recipe/create" element={<CreateRecipePage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </>
    );
}

export default App;
