import HeroSection from "./hero-section";

const HomeMain = () => {
    return (
        <div className="min-h-[750px] pt-14 lg:pt-20">
            <div className="box-border min-h-[700px] mt-[5px]">
                <div className="w-full">
                    <HeroSection />
                </div>
            </div>
        </div>
    );
};

export default HomeMain;
