export const Newsletter = () => {
    return (
        <>
            <div className="grid grid-cols-12 space-x-4 space-y-8 bg-gray-300 p-4">
                <div className="grid col-span-12 lg:col-span-6">
                    <h3 className="text-2xl mb-4">Get the Best Recipes Delivered to Your Inbox!</h3>
                    <p className="mb-4">
                        Join our Spoonfed community and receive weekly delicious
                        recipes, cooking tips, and special offers.
                    </p>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="border p-2 rounded-sm focus:outline-none"
                        />

                        <button className="border rounded-sm text-center px-2">Subscribe</button>
                    </div>
                </div>
                <div className="grid grid-cols-12 col-span-12 lg:col-span-6 space-y-4 space-x-4 space-y-auto">
                    <div className="grid col-span-12 md:col-span-6">
                        <p className="text-lg mb-4">New Recipes Weekly</p>
                        <p>
                            Fresh, trending dishes straight to your inbox. From
                            quick meals to exotic flavors, we've got you
                            covered!
                        </p>
                    </div>
                    <div className="grid col-span-12 md:col-span-6">
                        <p className="text-lg mb-4">Exclusive Cooking Tips</p>
                        <p>
                            Hone your skills with expert advice, step-by-step
                            guides, and pro chef hacks. Cook like a pro, one
                            recipe at a time!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
