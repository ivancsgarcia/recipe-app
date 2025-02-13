import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export const HomePage = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleLogout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userId");
        navigate("/login");
    };

    useEffect(() => {
        console.log(cookies);
    });

    return (
        <>
            <Header />
            <div className="w-9/12 mx-auto p-4 bg-gray-200">
            <Hero />
                <h1>Home Page</h1>
                {cookies.access_token && (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white py-2 px-4 hover:cursor-pointer hover:bg-red-600"
                    >
                        Logout
                    </button>
                )}
            </div>
        </>
    );
};
