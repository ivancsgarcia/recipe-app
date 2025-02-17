import { FaRegHeart, FaHeart } from "react-icons/fa6";

export const RecipeCard = ({
    imageUrl,
    RecipeName,
}: {
    imageUrl: string;
    RecipeName: string;
}) => {
    return (
        <>
            <div className="relative flex flex-col my-6 bg-[#FCFCFC] border border-[#D4B99F] shadow-sm rounded-lg w-96">
                <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
                    <img
                        src={imageUrl}
                        alt="recipe-image"
                        className="h-full w-full bg-center object-cover rounded-md"
                    />
                    <div className="absolute right-0 top-0 m-4 flex items-center justify-self-center text-white border rounded-full p-2">
                        <FaRegHeart size={28} className="" />
                    </div>
                </div>
                <div className="p-2">
                    <p className="text-slate-800 text-xl font-semibold">
                        {RecipeName}
                    </p>
                </div>
            </div>
        </>
    );
};
