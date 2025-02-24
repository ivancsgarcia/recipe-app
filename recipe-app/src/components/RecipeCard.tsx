export const RecipeCard = ({
    imageUrl,
    recipeName,
    recipeDescription,
}: {
    imageUrl: string;
    recipeName: string;
    recipeDescription: string;
}) => {
    return (
        <>
            <div className="border rounded-md p-2 flex flex-col h-full">
                <img
                    src={imageUrl}
                    alt="recipe-image"
                    className="object-cover rounded-sm"
                />
                <div className="flex flex-col">
                    <p className="font-bold mt-4">{recipeName}</p>
                    <p className="line-clamp-2">{recipeDescription}</p>
                </div>
            </div>
        </>
    );
};
