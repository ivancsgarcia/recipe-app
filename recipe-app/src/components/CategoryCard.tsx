interface CategoryCardProps {
    imageUrl: string;
    name: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
    imageUrl,
    name,
}) => {
    return (
        <>
            <div className="">
                <img
                    src={imageUrl}
                    alt={imageUrl}
                    className="size-25 mx-auto mb-2 border bg-cover rounded-full"
                />
                <p className="text-center">{name}</p>
            </div>
        </>
    );
};
