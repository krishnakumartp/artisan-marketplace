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

const ProductCard = () => {
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
            <div className="z-[1] absolute ml-[10px] mt-[250px] text-[12px] font-bold flex items-center justify-center rounded-[2px] pl-[4px] bg-[hsla(0,0%,100%,0.8)]">
                <span>4</span>
                <span className="ml-[-2px] scale-[0.55] bg-[url(/images/icons.png)] bg-[position:-171px_-28px] bg-[size:1404px_105px] w-[24px] h-[24px] inline-block"></span>
                <div className="flex pr-1">
                    <div className="text-[10px] m-[-.5px_6px_0_-2px}">|</div>
                    23
                </div>
            </div>
            <Link href="" className="block" target="_blank">
                <div className="relative w-[210px] h-[280px]">
                    {showSlider ?
                        <Slider {...customSliderSettings}>
                            {Array.from({ length: 8 }, (_, index) => index + 1).map(elm =>
                                <div className="block absolute top-0 h-[280px] !w-fit" key={elm}>
                                    <div className="bg-[#fff2df]">
                                        <div className="h-[280px] w-full">
                                            <picture draggable="false" className="img-responsive w-full h-full block">
                                                <source srcSet="
    https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg ,
    https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 1.5x,
    https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 1.8x,
    https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.0x,
    https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.2x,
    https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.4x,
    https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.6x,
    https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.8x" type="image/webp" />
                                                <Image draggable="false" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg" className="img-responsive w-full block" alt="ANAND SAREES Women Pack of 2 Printed Sarees" title="ANAND SAREES Women Pack of 2 Printed Sarees" height={280} width={210} />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                        : null
                    }
                    <div className={`absolute top-0 h-full w-full ${showSlider ? 'hidden' : 'block'}`}>
                        <div className="bg-[#fff2df]">
                            <div className="h-[280px] w-full">
                                <picture draggable="false" className="img-responsive w-full h-full block">
                                    <source srcSet="
    https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg ,
    https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 1.5x,
    https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 1.8x,
    https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.0x,
    https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.2x,
    https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.4x,
    https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.6x,
    https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg 2.8x" type="image/webp" />
                                    <Image draggable="false" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14429338/2021/6/21/9e2a9a16-2f41-4b34-b0e6-c0ce7fc50c171624267211436KALINIPackof2PrintedSareesSareesKALINIWomenSareesKALINIWomen1.jpg" className="img-responsive w-full block" alt="ANAND SAREES Women Pack of 2 Printed Sarees" title="ANAND SAREES Women Pack of 2 Printed Sarees" style="width: 100%; display: block;" height={280} width={210} /></picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-[3] bg-[#fff] px-[10px] h-full mt-[12px] box-border">
                    <h3 className="mt-inherit mb-[6px] text-[16px] font-bold leading-[1] text-[#282c3f] overflow-hidden text-ellipsis whitespace-nowrap">Anand Sarees</h3>
                    <h4 className="group-hover:hidden pl-0 text-[#535766] text-[14px] leading-[1] font-normal mb-0 mt-0 overflow-hidden text-ellipsis whitespace-nowrap block">Pack of 2 Printed Sarees</h4>
                    <h4 className="group-hover:block pl-0 text-[#535766] text-[14px] leading-none font-normal mb-0 mt-0 overflow-hidden text-ellipsis whitespace-nowrap hidden">
                        Sizes
                        <span className="text-[#535665]">Pack</span>
                    </h4>
                    <div className="text-[14px] leading-[15px] text-[#282c3f] whitespace-nowrap mt-[10px] mb-[6px] font-bold">
                        <span>
                            <span className="text-sm font-bold text-[282c3f]">RS. 1259</span>
                            <span className="line-through text-[#7e818c] font-normal ml-[5px] text-[12px]">RS. 4198</span>
                        </span>
                        <span className="text-[#ff905a] font-normal text-[12px] ml-[5px]">(70% OFF)</span>
                    </div>
                    <div className="text-[12px] text-[#ff5722] text-left font-bold">Only Few Left!</div>
                </div>
            </Link>
            <div className="group/similar group-hover:block w-[30px] h-[30px] leading-[26px] text-[12px] right-[12px] top-[207px] hidden z-[1] rounded-full absolute text-[#000] bottom-[20px] border border-[#dadade] text-center overflow-hidden cursor-pointer transition-all duration-200 ease-in-out will-change-[contents] bg-[#fff] hover:rounded-[42px] hover:w-[140px] hover:text-left hover:pl-[13px]">
                <span className=" first:bg-[length:6000%_486.36%] first:bg-[position:10.4%_71%] first:w-[15px] first:h-[13px] align-middle bg-[position:-142px_-58px] w-6 h-5 bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block"></span>
                <span className="[&:nth-child(2)]:text-[12px] [&:nth-child(2)]:mt-0 [&:nth-child(2)]:ml-1.5 font-bold text-[#ff517b] align-middle invisible ml-[10px] text-[14px] group-hover/similar:visible group-hover/similar:inline-block">VIEW SIMILAR</span>
            </div>
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
