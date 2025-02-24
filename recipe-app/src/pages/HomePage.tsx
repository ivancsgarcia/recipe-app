import { CategorySection } from "../components/CategorySection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroTwo } from "../components/HeroTwo";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const HomePage = () => {
    return (
        <>
            <div className="container mx-auto relative">
                <Header />

                <HeroTwo />
                <h2>Search bar</h2>
                <div>
                    <div className="border flex">
                        <input type="text" className="w-full px-4 py-2" />
                        <div className="w-[1px] bg-black"></div>
                        <div className="flex items-center justify-center px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                            <FaMagnifyingGlass />
                        </div>
                    </div>
                </div>
                <h2>Categories</h2>
                <CategorySection />
                <h2>Featured Recipes</h2>
                <Footer />
            </div>
        </>
    );
};
