import { Dispatch, SetStateAction } from "react";

interface ProfileModalProps {
    isProfileModalOpen: boolean;
    setIsProfileModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProfileModal = ({
    isProfileModalOpen,
    setIsProfileModalOpen,
}: ProfileModalProps) => {
    return (
        <>
            <div
                className="fixed inset-0 flex items-center
                        justify-center bg-black/50"
            >
                <div
                    className="bg-white rounded-lg
                            shadow-lg p-6 max-w-xl
                            w-full space-y-4 relative"
                >
                    <button
                        className="absolute top-2 right-2
                           text-gray-500 hover:text-gray-700"
                        onClick={() => {
                            setIsProfileModalOpen(!isProfileModalOpen);
                        }}
                    >
                        &#x2715;
                    </button>
                    <div className="flex space-x-4">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="text-center">
                                <img
                                    src="#"
                                    alt="profile-avatar"
                                    className="size-24 border "
                                />
                                <p>Username</p>
                            </div>
                            <div className="text-center">
                                <p>10</p>
                                <p className="font-bold">Recipes Created</p>
                            </div>
                            <div className="text-center">
                                <p>10</p>
                                <p className="font-bold">Saved Recipes</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="font-bold">Name</label>
                                <p>Ivan Christopher Garcia</p>
                            </div>
                            <div>
                                <label className="font-bold">
                                    Email Address
                                </label>
                                <p>icsgarcia.student@ua.edu.ph</p>
                            </div>
                            <div className="">
                                <label className="font-bold">Bio</label>
                                <p className="text-justify">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Minima dolore adipisci
                                    totam quae Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Perferendis
                                    atque, quis eum, commodi maxime ex
                                    distinctio in temporibus dignissimos
                                    pariatur error quod omnis animi? Est,
                                    laboriosam inventore? Voluptatum, optio
                                    dignissimos. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Quas vitae
                                    dignissimos natus, ea quasi commodi placeat
                                    quod officia eos rerum, delectus
                                    exercitationem fuga dolores sint nulla
                                    ratione cum corrupti error!
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="block mx-auto border p-2 cursor-pointer">
                        Edit Profile
                    </button>
                </div>
            </div>
        </>
    );
};
