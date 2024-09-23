"use client";
import { useState } from "react";
import { sliderSettings } from "@/configs/slider-config";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const customSliderSettings = {
    ...sliderSettings,
    autoplaySpeed: 1500,
    useCSS: true,
    pauseOnHover: false,
    dotsClass: "slick-dots slick-dots-custom",
    appendDots: dots => (
        <div
            style={{
                zIndex: 4,
                bottom: "16px"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
};

const ProductCard = ({ data ,ctdata}) => {
    const [showSlider, setShowSlider] = useState(false);

    const initializeSlider = () => {
        if (showSlider) return;
        setShowSlider(true);
    };

    const closeSlider = () => {
        if (!showSlider) return;
        setShowSlider(false);
    };

    return (
        <li className="group w-[210px] text-left relative align-top overflow-hidden inline-block box-border m-[0_10px_30px] hover:shadow-[0_2px_16px_4px_rgba(40,44,63,.07)]" onMouseEnter={() => initializeSlider()} onMouseLeave={() => closeSlider()}>
            <div className="absolute top-0 left-0 w-[101%] h-[210px] bg-[#282c3f] transition-opacity duration-[0.5s] visibility-hidden opacity-0"></div>

            {/* Rating */}
            <div className="z-[1] absolute ml-[10px] mt-[250px] text-[12px] font-bold flex items-center justify-center rounded-[2px] pl-[4px] bg-[hsla(0,0%,100%,0.8)]">
                <span>{data[0].rating}</span>
                <span className="ml-[-2px] scale-[0.55] bg-[url(/images/icons.png)] bg-[position:-171px_-28px] bg-[size:1404px_105px] w-[24px] h-[24px] inline-block"></span>
                <div className="flex pr-1">
                    <div className="text-[10px] m-[-.5px_6px_0_-2px]">|</div>
                    {data[0].ratedBy}
                </div>
            </div>

            <Link href="/product-view/black" className="block" target="_blank">
                {/* Image and Hover Slider */}
                <div className="relative w-[210px] h-[280px]">
                    {showSlider ?
                        <Slider {...customSliderSettings}>
                            {Array.from({ length: 8 }, (_, index) => index + 1).map(elm =>
                                <div className="block absolute top-0 h-[280px] !w-fit" key={elm}>
                                    <div className="bg">
                                        <div className="h-[280px] w-full">
                                            <picture draggable="false" className="img-responsive w-full h-full block">
                                            {ctdata?.masterData?.current?.masterVariant?.images.map((img, idx) => (
                                        <source
                                            key={idx}
                                            srcSet={`
                                                ${img.url} 1x,
                                                ${img.url} 1.5x,
                                                ${img.url} 1.8x,
                                                ${img.url} 2x,
                                                ${img.url} 2.2x,
                                                ${img.url} 2.4x,
                                                ${img.url} 2.6x,
                                                ${img.url} 2.8x
                                            `}
                                            type="image/webp"
                                        />
                                    ))}
                                                
                                                <Image
                                                    draggable="false"
                                                    src={ctdata?.masterData?.current?.masterVariant?.images[0].url}
                                                    className="img-responsive w-full block"
                                                    alt="ANAND SAREES Women Pack of 2 Printed Sarees"
                                                    title="ANAND SAREES Women Pack of 2 Printed Sarees"
                                                    height={280}
                                                    width={210}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                        : null
                    }
                    <div className={`absolute top-0 h-full w-full ${showSlider ? 'hidden' : 'block'}`}>
                        <div className="bg">
                            <div className="h-[280px] w-full">
                                <picture draggable="false" className="img-responsive w-full h-full block">
                                {ctdata?.masterData?.current?.masterVariant?.images.map((img, idx) => (
                                        <source
                                            key={idx}
                                            srcSet={`
                                                ${img.url} 1x,
                                                ${img.url} 1.5x,
                                                ${img.url} 1.8x,
                                                ${img.url} 2x,
                                                ${img.url} 2.2x,
                                                ${img.url} 2.4x,
                                                ${img.url} 2.6x,
                                                ${img.url} 2.8x
                                            `}
                                            type="image/webp"
                                        />
                                    ))}
                                    <Image
                                        draggable="false"
                                        src={ctdata?.masterData?.current?.masterVariant?.images[0].url}
                                        className="img-responsive w-full block"
                                        alt="ANAND SAREES Women Pack of 2 Printed Sarees"
                                        title="ANAND SAREES Women Pack of 2 Printed Sarees"
                                        height={280}
                                        width={210}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title, Price and Discount Details */}
                <div className="relative z-[3] bg-[#fff] px-[10px] h-full mt-[12px] box-border">
                    <h3 className="mt-inherit mb-[6px] text-[16px] font-bold leading-[1] text-[#282c3f] overflow-hidden text-ellipsis whitespace-nowrap">{ctdata?.masterData?.current?.name['en-US']}</h3>
                    <h4 className="group-hover:hidden pl-0 text-[#535766] text-[14px] leading-[1] font-normal mb-0 mt-0 overflow-hidden text-ellipsis whitespace-nowrap block">{ctdata?.masterData?.current?.name['en-US']}</h4>
                    <h4 className="group-hover:block pl-0 text-[#535766] text-[14px] leading-none font-normal mb-0 mt-0 overflow-hidden text-ellipsis whitespace-nowrap hidden">
                        Sizes
                        <span className="text-[#535665]">{data[0].sizes}</span>
                    </h4>
                    <div className="text-[14px] leading-[15px] text-[#282c3f] whitespace-nowrap mt-[10px] mb-[6px] font-bold">
                        <span>
                            <span className="text-sm font-bold text-[282c3f]">RS. {ctdata?.masterData?.current?.masterVariant?.prices[0]?.value.centAmount}</span>
                            <span className="line-through text-[#7e818c] font-normal ml-[5px] text-[12px]">RS. {ctdata?.masterData?.current?.masterVariant?.prices[0]?.value.centAmount}</span>
                        </span>
                        <span className="text-[#ff905a] font-normal text-[12px] ml-[5px]">({data[0].discount}% OFF)</span>
                    </div>
                    <div className="text-[12px] text-[#ff5722] text-left font-bold">{data[0].isFewLeft ? "Only Few Left!" : ''}</div>
                </div>
            </Link>

            {/* View Similar Products Button */}
            <div className="group/similar group-hover:block w-[30px] h-[30px] leading-[26px] text-[12px] right-[12px] top-[207px] hidden z-[1] rounded-full absolute text-[#000] bottom-[20px] border border-[#dadade] text-center overflow-hidden cursor-pointer transition-all duration-200 ease-in-out will-change-[contents] bg-[#fff] hover:rounded-[42px] hover:w-[140px] hover:text-left hover:pl-[13px]">
                <span className=" first:bg-[length:6000%_486.36%] first:bg-[position:10.4%_71%] first:w-[15px] first:h-[13px] align-middle bg-[position:-142px_-58px] w-6 h-5 bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block"></span>
                <span className="[&:nth-child(2)]:text-[12px] [&:nth-child(2)]:mt-0 [&:nth-child(2)]:ml-1.5 font-bold text-[#ff517b] align-middle invisible ml-[10px] text-[14px] group-hover/similar:visible group-hover/similar:inline-block">
                    VIEW SIMILAR
                </span>
            </div>

            {/* Wishlist Button */}
            <div className="group-hover:flex hidden absolute z-[3] left-0 top-[250px] bg-white w-full p-[15px_10px] box-border flex-nowrap justify-between">
                <span className="w-full text-center inline-flex justify-center items-center flex-row rounded-sm border border-[#d4d5d9] text-[#282c3f] tracking-[0.3] font-bold text-[12px] uppercase cursor-pointer px-[12px] py-[8px] box-border">
                    <span className="m-[-4px_8px] w-[17px] h-[22px] bg-[url(/images/icons.png)] bg-[length:1404px_105px] bg-[-315px_-186px] inline-block"></span>
                    wishlist
                </span>
            </div>
        </li>
    );
};

export default ProductCard;
