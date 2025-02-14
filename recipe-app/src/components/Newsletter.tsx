export const Newsletter = () => {
    return (
        <>
            <div className="bg-[#2E2E2E] py-16 sm:py-24 lg:py-32">
                <div className="flex items-center px-6 lg:px-8">
                    <div className="pr-24 w-[40%]">
                        <h1 className="text-3xl mb-4">
                            Get the Best Recipes Delivered to Your Inbox!
                        </h1>
                        <p className="mb-4">
                            Join our Spoonfed community and receive weekly
                            delicious recipes, cooking tips, and special offers.
                        </p>
                        <div className="flex border rounded-sm">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full py-3 px-2 focus:outline-none"
                            />
                            <div className="w-[1px] bg-black"></div>
                            <button className="py-3 px-2 hover:cursor-pointer hover:bg-gray-100">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 w-[60%]">
                        <div>
                            <h3 className="mb-4">New Recipes Weekly</h3>
                            <p>
                                Fresh, trending dishes straight to your inbox.
                                From quick meals to exotic flavors, we’ve got
                                you covered!
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4">Exclusive Cooking Tips</h3>
                            <p>
                                Hone your skills with expert advice,
                                step-by-step guides, and pro chef hacks. Cook
                                like a pro, one recipe at a time!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
