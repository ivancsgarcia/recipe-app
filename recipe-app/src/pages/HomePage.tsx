import { Header } from "../components/Header";
import { HeroTwo } from "../components/HeroTwo";

export const HomePage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <HeroTwo />
                <h1>Home Page</h1>
            </div>
        </>
    );
};
