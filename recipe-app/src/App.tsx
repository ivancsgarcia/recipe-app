import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { Slide, ToastContainer } from "react-toastify";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { MyRecipesPage } from "./pages/MyRecipesPage";
import { PageNotFound } from "./pages/PageNotFound";
import { RecipeDetailsPage } from "./pages/RecipeDetailsPage";
import { SavedRecipePage } from "./pages/SavedRecipePage";
import { AboutPage } from "./pages/AboutPage";
import { CreateRecipePage } from "./pages/CreateRecipePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
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
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                        path="/saved-recipes"
                        element={<SavedRecipePage />}
                    />
                    <Route path="/my-recipes" element={<MyRecipesPage />} />
                    <Route
                        path="/recipes/:id"
                        element={<RecipeDetailsPage />}
                    />
                    <Route
                        path="/create-recipe"
                        element={<CreateRecipePage />}
                    />

                    <Route path="*" element={<PageNotFound />} />
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
