import { CategoryCard } from "../components/CategoryCard";
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
                <div>Search bar</div>
                <div>
                    <div className="border flex">
                        <input type="text" className="w-full px-4 py-2"/>
                        <div className="w-[1px] bg-black"></div>
                        <div className="flex items-center justify-center px-4 py-2 hover:bg-gray-200 hover:cursor-pointer"><FaMagnifyingGlass /></div>
                    </div>
                </div>
                <div>Categories</div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                                        <CategoryCard imageUrl={'images/category-images/main-course-img.jpg'} name="Main Course" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Side dish" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Dessert" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Appetizer" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Salad" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Bread" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Breakfast" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Soup" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Beverage" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Sauce" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Marinade" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Fingerfood" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Snack" />
                                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Drink" />
                                    </div>
                <div>Featured Recipes</div>
                <Footer />
            </div>
        </>
    );
};
