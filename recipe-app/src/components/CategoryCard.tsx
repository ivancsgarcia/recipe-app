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
                    className="w-24 h-24 mx-auto mb-2 border rounded-full "
                />
                <p className="text-center">{name}</p>
            </div>
        </>
    );
};
