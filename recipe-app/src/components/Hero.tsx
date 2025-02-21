// import HeroImage from "../assets/images/hero-img.jpg";

export const Hero = () => {
    return (
        <>
            <section className="relative bg-[url(assets/images/hero-img.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/95 to-[#2E2E2E]/75"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left">
                        <h1 className="text-6xl font-extrabold sm:text-5xl text-[#F5F5F5]">
                            Spoonfed
                            <strong className="block font-extrabold text-[#D4AF37]">
                                – A Community of Food Lovers & Home Chefs!
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#CCCCCC]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <button className="block w-full rounded-sm bg-[#D4AF37] px-12 py-3 text-sm font-medium text-black shadow-sm hover:bg-[#b9972f] hover:cursor-pointer sm:w-auto transition">
                                Sign Up Now
                            </button>

                            <button className="block w-full rounded-sm border border-[#D4AF37] px-12 py-3 text-sm font-medium text-[#D4AF37] shadow-sm hover:bg-[#D4AF37] hover:text-black hover:cursor-pointer sm:w-auto transition">
                                Browse Recipes
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
