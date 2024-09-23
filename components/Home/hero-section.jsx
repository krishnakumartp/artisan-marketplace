"use client";
import { useEffect, useState } from "react";
import { sliderSettings } from "@/configs/slider-config";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
//import categoryType from "../../data/home-cards/category-type.json";
import ProductService from "@/server/api/productService"; // Adjust the import path as necessary


const HeroSection = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getAllProducts(); // Adjust the method name as necessary
        console.log("API Response:", response);
        if (response && response) {
            console.log("Products fetched successfully", response);
            setProducts(response);
          } else {
            console.error("No data returned from API");
          }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);
    return (
        <div className="">
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
            {/* Main Banner Slider */}
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

            <div className="flex flex-col gap-5 my-3">
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
               
                {/* Category Rows */}
               {/* {categoryType?.map((category, index) =>
                    <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat" key={index}>
                        <div className="my-0 mx-auto">
                            <div className="flex flex-wrap justify-center items-stretch gap-5">
                                {category.rowData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-[calc(100%-40px)] xs:w-[calc(50%-30px)] md:w-[calc(33.3333%-30px)] lg:w-[calc(16.6667%-30px)] box-border relative overflow-hidden bg-no-repeat"
                                    >
                                        <div className="pb-[130.62%]">
                                            <div className="absolute inset-0">
                                                <Link href="/product-list">
                                                    <picture draggable="false" className="img-responsive">
                                                        <source srcSet={item.src} type="image/webp" />
                                                        <Image
                                                            draggable="false"
                                                            className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out"
                                                            src={item.src}
                                                            alt="Category Products"
                                                            width={320}
                                                            height={418}
                                                        />
                                                    </picture>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )} */}
       
       <div className="mx-w-full my-0 mx-auto box-border w-full relative overflow-hidden bg-no-repeat" >
                        <div className="my-0 mx-auto">
                            <div className="flex flex-wrap justify-center items-stretch gap-5">
                          
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="w-[calc(100%-40px)] xs:w-[calc(50%-30px)] md:w-[calc(33.3333%-30px)] lg:w-[calc(16.6667%-30px)] box-border relative overflow-hidden bg-no-repeat"
                  >
                    <div className="pb-[130.62%]">
                      <div className="absolute inset-0">
                        <Link href="/product-list">
                          <picture draggable="false" className="img-responsive">
                            <source srcSet={item?.masterData?.current?.masterVariant?.images[0]?.url} type="image/webp" />
                            <Image
                              draggable="false"
                              className="absolute inset-0 h-auto w-full transition-all duration-200 ease-in-out"
                              src={item?.masterData?.current?.masterVariant?.images[0]?.url}
                              alt="Category Products"
                              width={320}
                              height={418}
                            />
                          </picture>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              
           </div>
           </div>
           </div>
          
    </div>
        </div>
    );
};

export default HeroSection;
