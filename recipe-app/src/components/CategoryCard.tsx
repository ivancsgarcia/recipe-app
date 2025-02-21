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
                    alt="breakfast-img"
                    className="size-50 mx-auto mb-2 border bg-cover"
                />
                <p className="text-center">{name}</p>
            </div>
        </>
    );
};
