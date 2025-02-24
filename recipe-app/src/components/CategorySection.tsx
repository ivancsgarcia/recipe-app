import { CategoryCard } from "./CategoryCard";

export const CategorySection = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
                <CategoryCard
                    imageUrl={"images/category-images/main-course-img.jpg"}
                    name="Main Course"
                />
                <CategoryCard
                    imageUrl={"images/category-images/side-dish-img.jpg"}
                    name="Side dish"
                />
                <CategoryCard
                    imageUrl={"images/category-images/dessert-img.jpg"}
                    name="Dessert"
                />
                <CategoryCard
                    imageUrl={"images/category-images/appetizer-img.jpg"}
                    name="Appetizer"
                />
                <CategoryCard
                    imageUrl={"images/category-images/salad-img.jpg"}
                    name="Salad"
                />
                <CategoryCard
                    imageUrl={"images/category-images/bread-img.jpg"}
                    name="Bread"
                />
                <CategoryCard
                    imageUrl={"images/category-images/breakfast-img.jpg"}
                    name="Breakfast"
                />
                <CategoryCard
                    imageUrl={"images/category-images/soup-img.png"}
                    name="Soup"
                />
                <CategoryCard
                    imageUrl={"images/category-images/beverage-img.jpg"}
                    name="Beverage"
                />
                <CategoryCard
                    imageUrl={"images/category-images/sauce-img.jpg"}
                    name="Sauce"
                />
                <CategoryCard
                    imageUrl={"images/category-images/marinade-img.jpg"}
                    name="Marinade"
                />
                <CategoryCard
                    imageUrl={"images/category-images/fingerfood-img.jpg"}
                    name="Fingerfood"
                />
                <CategoryCard
                    imageUrl={"images/category-images/snack-img.jpg"}
                    name="Snack"
                />
                <CategoryCard
                    imageUrl={"images/category-images/drink-img.jpg"}
                    name="Drink"
                />
            </div>
        </>
    );
};
