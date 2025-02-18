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

            {/* <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[url(assets/images/hero-img.jpg)] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{" "}
                            <a
                                href="#"
                                className="font-semibold text-indigo-600"
                            >
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                ></span>
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
                </div>
            </div> */}
        </>
    );
};
