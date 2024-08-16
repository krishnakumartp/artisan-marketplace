"use client";
import { sliderSettings } from "@/configs/slider-config";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const HeroSection = () => {
    return (
        <div className="pt-[25px] mt-20 shop-base">
            {/* App Advertisement Banner */}
            <div className="px-[50px] max-w-full mx-auto my-0 box-border w-full relative overflow-hidden bg-no-repeat">
                <div className="my-0 mx-auto">
                    <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:content-[''] after:clear-both after:table">
                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border w-full relative overflow-hidden bg-no-repeat">
                                <div className="pb-[7.81%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:content-[''] after:clear-both after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="/online-fashion-store">
                                                    <div>
                                                        <picture draggable="false" className="img-responsive">
                                                            <source srcSet="/images/hero-section-label-banner.jpeg" type="image/webp" />
                                                            <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" width={1370} height={107} src="/images/hero-section-label-banner.jpeg" srcSet="" alt="Banner" /></picture>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Banner */}
            <Slider {...sliderSettings}>
                {Array.from({ length: 10 }, (_, index) => index + 1).map(elm =>
                    <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat" key={elm}>
                        <div className="my-0 mx-auto">
                            <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                    <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                        <div className="pb-[59.37%]">
                                            <div className="my-0 mx-auto absolute inset-0">
                                                <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                                    <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                        <Link href="https://www.myntra.com/online-fashion-store?f=Gender%3Amen%2Cmen%20women">
                                                            <div>
                                                                <picture draggable="false" className="img-responsive">
                                                                    <source srcSet="/images/hero-banner-1.jpeg" type="image/webp" />
                                                                    <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/hero-banner-1.jpeg" srcSet="" alt="Banner" height={570} width={960} />
                                                                </picture>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                    <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                        <div className="pb-[59.37%]">
                                            <div className="my-0 mx-auto absolute inset-0">
                                                <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                                    <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                        <Link href="https://www.myntra.com/online-fashion-store?f=Gender%3Amen%20women%2Cwomen">
                                                            <div>
                                                                <picture draggable="false" className="img-responsive">
                                                                    <source srcSet="/images/hero-banner-2.jpeg" type="image/webp" /><Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/hero-banner-2.jpeg" srcSet="" alt="Banner" height={570} width={960} />
                                                                </picture>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
            {/* Shop By Category Title */}
            <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat" >
                <div className="pb-[6.25%]">
                    <div className="my-0 mx-auto absolute inset-0">
                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                <Link href="">
                                    <picture draggable="false" className="img-responsive">
                                        <source srcSet="/images/shop-by-category.jpeg" type="image/webp" />
                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/shop-by-category.jpeg" srcSet="" alt="Shop By Category" height={130} width={1470} />
                                    </picture>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Row-1 */}
            <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat">
                <div className="my-0 mx-auto">
                    <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/ethnic-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/ethnic-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/casual-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/casual-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/men-active-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/men-active-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/women-active-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/women-active-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/western-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/western-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&amp;sort=popularity">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/sports-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/sports-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Row-2 */}
            <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat">
                <div className="my-0 mx-auto">
                    <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/lounge-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/lounge-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/inner-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/inner-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/lingerie.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/lingerie.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/watches.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/watches.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/grooming.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/grooming.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&amp;sort=popularity">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/beauty-and-makeup.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/beauty-and-makeup.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Row-3 */}
            <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat">
                <div className="my-0 mx-auto">
                    <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/kids-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/kids-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/men-footwear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/men-footwear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/women-footwear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/women-footwear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/bags-belts.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/bags-belts.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/office-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/office-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&amp;sort=popularity">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/men-ethnic-wear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/men-ethnic-wear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Row-4 */}
            <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat">
                <div className="my-0 mx-auto">
                    <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/home-decor.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/home-decor.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/handbags.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/handbags.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/headphones.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/headphones.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/jewellery.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/jewellery.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/size-inclusive-styles.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/size-inclusive-styles.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&amp;sort=popularity">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/inclusive-styles.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/inclusive-styles.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Row-5 */}
            <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat">
                <div className="my-0 mx-auto">
                    <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/watches-and-wearables.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/watches-and-wearables.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/sleepwear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/sleepwear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/workwear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/workwear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/eyewear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/eyewear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/women-workwear.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/women-workwear.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                            <div className="box-border relative overflow-hidden bg-no-repeat w-full">
                                <div className="pb-[130.62%]">
                                    <div className="my-0 mx-auto absolute inset-0">
                                        <div className="flex flex-row flex-wrap justify-start items-stretch content-stretch after:clear-both after:content-[''] after:table">
                                            <div className="flex-grow flex-shrink basis-0 self-start flex-wrap flex-col">
                                                <Link href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&amp;sort=popularity">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet="/images/casual-styles.jpeg" type="image/webp" />
                                                        <Image draggable="false" className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out" src="/images/casual-styles.jpeg" srcSet="" alt="Category Products" width={320} height={418} />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;
