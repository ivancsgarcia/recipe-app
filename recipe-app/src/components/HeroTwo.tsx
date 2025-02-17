export const HeroTwo = () => {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[520px] bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
                    <div>
                        <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl :text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
                        Ready to Create Culinary Magic, Chef?
                        </h1>
                    </div>
                    <div className="w-full mx-auto">
                        <p>Welcome back to Spoonfed! Dive into your personal dashboard, update your favorite recipes, and explore new dishes crafted just for you. Your next masterpiece awaits!</p>
                        <div>
                            <button>My Cookbook</button>
                            <button>Discover Recipes</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
