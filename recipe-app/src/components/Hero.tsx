import HeroImage from "../assets/images/hero-img.jpg";

export const Hero = () => {
    return (
        <>
            {/* <div className="border bg-no-repeat bg-[url(assets/images/hero-img.jpg)] mb-4">
                <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="w-[50%] max-w-xl flex flex-col justify-center p-8">
                        <h1 className="text-3xl mb-4">
                            Spoonfed – A Community of Food Lovers & Home Chefs!
                        </h1>
                        <h3 className="text-xl mb-8">
                            Save your favorite recipes, create your own, and
                            explore endless flavors. Join our cooking community
                            today!
                        </h3>
                        <div className="flex gap-4">
                            <button className="bg-black text-white p-4">
                                Sign Up Now
                            </button>
                            <button className="border p-4">
                                Browse Recipes
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="relative bg-[url(assets/images/hero-img.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Spoonfed
                            <strong className="block font-extrabold">
                                – A Community of Food Lovers & Home Chefs!
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <button
                            
                                className="block w-full rounded-sm bg-black px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:cursor-pointer sm:w-auto"
                            >
                                Sign Up Now
                            </button>

                            <button
                     
                                className="block w-full rounded-sm border px-12 py-3 text-sm font-medium text-black shadow-sm hover:cursor-pointer sm:w-auto"
                            >
                                Browse Recipes
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
