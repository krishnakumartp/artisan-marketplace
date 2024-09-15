import Image from "next/image";
import Link from "next/link";

const images = {
    1: "bg-[url('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25483216/2024/1/23/1185bca4-a2e2-4406-80fe-f0359cdf01271706010727136HIGHLANDERMenMid-RiseCottonCargos1.jpg')]",
    2: "bg-[url('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25483216/2024/1/23/753c2d39-bba9-4304-97da-6566e26c78201706010727164HIGHLANDERMenMid-RiseCottonCargos3.jpg')]",
    3: "bg-[url('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25483216/2024/1/23/bbcef42f-ea89-444d-92bc-5e5572776bf81706010727149HIGHLANDERMenMid-RiseCottonCargos2.jpg')]",
    4: "bg-[url('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25483216/2024/1/23/878f6f30-89c9-4e46-b70e-86cdb773a81c1706010727179HIGHLANDERMenMid-RiseCottonCargos4.jpg')]",
    5: "bg-[url('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25483216/2024/1/23/b6c51cdf-4672-4e78-bab6-0d9cbda2ce3a1706010727193HIGHLANDERMenMid-RiseCottonCargos5.jpg')]",
    6: "bg-[url('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25483216/2024/1/23/a764a5d6-70fe-4008-828d-f9679bd79f221706010727205HIGHLANDERMenMid-RiseCottonCargos6.jpg')]",
};

const miniColorChangerImages = {
    1: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483026/2024/1/23/05b5f112-c05c-4ab9-a260-c81f4dbaee2c1706010722999HIGHLANDERMenMid-RiseCottonCargoTrousers1.jpg",
        color: "navy-blue"
    },
    2: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483034/2024/1/23/bdaba419-2fa4-4fc4-bb49-8e69f26f263f1706010741492HIGHLANDERMenMid-RiseCottonCargosTrousers1.jpg",
        color: "beige"
    },
    3: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483058/2024/1/23/83ba13b6-3f86-4178-bd12-190ecde97ab81706010712721HIGHLANDERMenBrownRegularFitMid-RisePlainCottonCargos1.jpg",
        color: "brown"
    },
    4: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483098/2023/10/14/c2e40c5b-c860-45b3-83da-919888350c351697272347353HIGHLANDERMenKhakiCargosTrousers1.jpg",
        color: "khaki"
    },
    5: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483108/2024/1/23/9bca49f8-f210-4db2-8780-dd4ab4f4a5221706010729473HIGHLANDERMenOliveGreenRegularFitMid-RisePlainCottonCargos1.jpg",
        color: "olive"
    },
    6: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483110/2024/1/23/59a4b11d-e446-48d3-a245-65cee8eabe9e1706010716203HIGHLANDERMenGreyRegularFitMid-RisePlainCottonChinos1.jpg",
        color: "gray"
    },
    7: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483126/2024/7/17/259d4af9-35bc-4fb4-9c2e-70441bc8881d1721202765618-HIGHLANDER-Men-Tapered-Fit-Mid-Rise-Cotton-Cargo-Trousers-55-7.jpg",
        color: "black"
    },
    8: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483178/2024/1/23/f9cf1c78-326d-431c-a55e-894302fb9e0a1706010741972HIGHLANDERMenMid-RiseCottonCargosTrousers1.jpg",
        color: "white"
    },
    9: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25483262/2023/10/14/60816ed4-f3d2-432c-9233-c097562cc4771697264149306Trousers1.jpg",
        color: "light-brown"
    },
    10: {
        url: "https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25940300/2023/11/20/8e667631-a094-471d-bd3d-952f4438bc681700464216177HIGHLANDERMenOliveGreenCargosTrousers1.jpg",
        color: "dark-olive"
    }
};

const ratingCount = {
    1: { count: 1387, color: "progress-orange" },
    2: { count: 508, color: "progress-yellow" },
    3: { count: 1158, color: "progress-light-green" },
    4: { count: 2696, color: "progress-green" },
    5: { count: 5822, color: "progress-green" }
};

const ProductView = () => {
    return (
        <div className="min-h-[750px]">
            <div>
                <main className="pt-[58px] lg:pt-20 mb-0 mx-auto max-w-[1600px] xl:min-w-[1128px] relative min-h-[700px] pb-[15px] px-2 xs:px-[28px] bg-white">
                    <div className="block px-0 py-2.5 xs:pt-[29px] xs:pb-[22px] text-sm">
                        <Link href="/home" className="capitalize inline-block pb-[1px] border-b border-transparent hover:border-[#d5d6d9]">Home</Link>
                        <span className="text-[#282c3f] my-0 mx-[5px] pt-[5px]">/</span>
                        <Link href="/clothing" className="capitalize inline-block pb-[1px] border-b border-transparent hover:border-[#d5d6d9]">Clothing</Link>
                        <span className="text-[#282c3f] my-0 mx-[5px] pt-[5px]">/</span>
                        <Link href="/men-clothing" className="capitalize inline-block pb-[1px] border-b border-transparent hover:border-[#d5d6d9]">Men Clothing</Link>
                        <span className="text-[#282c3f] my-0 mx-[5px] pt-[5px]">/</span>
                        <Link href="/trousers" className="capitalize inline-block pb-[1px] border-b border-transparent hover:border-[#d5d6d9]">Trousers</Link>
                        <span className="text-[#282c3f] my-0 mx-[5px] pt-[5px]">/</span>
                        <Link href="/highlander-trousers" className="capitalize inline-block pb-[1px] border-b border-transparent hover:border-[#d5d6d9] font-bold">HIGHLANDER Trousers</Link>
                        <span className="text-[#282c3f] my-0 mx-[5px] pt-[5px] font-bold">{">"}</span>
                        <Link href="/highlander" className="capitalize inline-block pb-[1px] border-b border-transparent hover:border-[#d5d6d9] font-bold">More by HIGHLANDER</Link>
                    </div>
                    <div className="relative before:content-[''] before:table">
                        <div className="flex overflow-x-scroll space-x-1 xs:space-x-0 xs:block xs:overflow-auto xs:float-left w-full xs:w-[45%] md:w-[51%] lg:w-[58%] before:content-[''] before:table">
                            {Array.from({ length: 6 }, (_, index) => index + 1).map(elm =>
                                <div className="[&:nth-child(2)]:order-1 first:order-2 [&:nth-child(3)]:order-3 [&:nth-child(4)]:order-4 [&:nth-child(5)]:order-5 last:order-6 flex-shrink-0 w-full xs:w-[49.5%] float-left mb-[1%] xs:[&:nth-child(2n)]:!ml-[1%] relative" key={elm}>
                                    <div className="h-0 pt-[133.33333333333331%] overflow-hidden relative border border-[#f5f5f6] hover:cursor-[url('https://constant.myntassets.com/web/assets/img/6d2dbca4-700f-4822-9759-5c92b8280de21536988731120-Zoom-icon-1x.png'),_crosshair]">
                                        <div className={`absolute top-0 left-0 z-[2] w-full h-full bg-no-repeat bg-[0_0] bg-origin-border bg-cover transition-transform duration-500 will-change-transform ${images[elm]} hover:scale-[1.04]`}>
                                        </div>
                                        {
                                            elm === 2 && (
                                                <div className="group box-content z-[2] w-10 h-10 rounded-full absolute z-4 text-black right-5 bottom-5 border border-[#dadade] leading-[33px] text-center overflow-hidden cursor-pointer transition-all duration-200 ease-in-out bg-white hover:rounded-[42px] hover:w-[140px] hover:text-left hover:pl-[13px]">
                                                    <div className="bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-142px_-58px] w-6 h-5 inline-block align-middle"></div>
                                                    <span className="font-bold text-[#ff517b] align-middle invisible ml-2 text-sm group-hover:visible group-hover:inline-block group-hover:mt-1">VIEW SIMILER</span>
                                                </div>
                                            )
                                        }
                                        <div className="absolute z-[1] top-0 left-0 w-[99.99%] h-[99.99%] bg-[#eaeaec] bg-gradient-to-r from-[#eaeaec] via-[#dad9d9] to-[#eaeaec] bg-no-repeat bg-[length:800px_100%] animate-[image-grid-loading-skeleton_1.7s_cubic-bezier(.25,.46,.45,.94)_infinite_forwards]">
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="min-h-[820px] w-full xs:w-[55%] md:w-[49%] lg:w-[42%] float-left px-2 xs:pr-0 xs:pl-[30px] box-border mt-5 xs:mt-0">
                            <div className="mr-0 pt-0 px-0 pb-2.5">
                                <h1 className="my-0 text-[#282c3f] py-0 pr-5 pl-0 text-[24px] font-bold leading-none">HIGHLANDER</h1>
                                <h1 className="text-[#535665] pt-[5px] pr-5 pb-[14px] pl-0 text-[16px] xs:text-[20px] opacity-80 font-normal my-0">Men Tapered Fit Cargo Trousers</h1>
                                <div>
                                    <div className="w-auto border-b border-[#d4d5d9]">
                                        <div className="mb-[12px] flex justify-center items-center w-fit h-[29px] p-[8px] border border-[#eaeaec] rounded-[2px] cursor-pointer text-[16px] font-[700] text-[#282c3f] hover:border hover:border-[#535766]">
                                            <div>4</div>
                                            <span className="m-[0_-8px_0_-2px] transform scale-[0.6] bg-[url(/images/icons.png)] bg-[length:1404px_105px] bg-[-194px_-28px] w-[24px] h-[24px] inline-block"></span>
                                            <div className="ml-[8px] mt-[-2px] text-[#d4d5d9] w-[1px]">|</div>
                                            <div className="ml-[8px] font-normal text-[#535766] w-fit">11.5k Ratings</div>
                                        </div>
                                    </div>
                                    <div className="text-[#696e79] text-[14px] mt-[14px] mb-[5px] inline-block">
                                        <span className="peer text-[#282c3f] mr-[12px] text-[24px] font-bold leading-[1] cursor-pointer">
                                            <strong className="text-[#282c3f] font-semibold">₹734</strong>
                                        </span>
                                        <div className="min-w-[270px] absolute border border-[#e3e3e3] z-[1] bg-[#fff] p-[8px] shadow-[0_0_12px_#d3d3d3] transition-all duration-200 opacity-0 scale-0 text-[#282c3f] text-[14px] before:absolute before:top-[1%] before:left-[20%] before:-m-[.25em] before:w-[.5em] before:h-[.5em] before:shadow-[10px_10px_12px_#d3d3d3] before:rotate-[-135deg] before:bg-[linear-gradient(-45deg,_#fff_50%,_transparent_0)] before:content-[''] peer-hover:scale-100 peer-hover:opacity-100 " tabIndex="0">
                                            <div className="first:my-2 first:mx-0">
                                                <b>Price Details</b>
                                            </div>
                                            <div>
                                                Maximum Retail Price
                                                <span className="float-right font-bold ml-5">Rs. 2099</span>
                                            </div>
                                            <div>(Incl. of all taxes)</div>
                                            <hr />
                                            <div className="[&:nth-child(5)]:my-2 [&:nth-child(5)]:mx-0">
                                                Discount
                                                <span className="float-right font-bold ml-5">
                                                    65% OFF
                                                </span>
                                            </div>
                                            <div>
                                                <b>Selling Price</b>
                                                <span className="float-right font-bold ml-5">
                                                    Rs. 734
                                                </span>
                                            </div>
                                            <div className="m-0">(Incl. of all taxes)</div>
                                        </div>
                                        <span className="opacity-[.8] text-[20px] leading-[1.2] text-[#282c3f] mr-[12px]">
                                            MRP {" "}
                                            <s>₹2099</s>
                                        </span>
                                        <span className="text-[20px] font-bold tracking-[.5px] text-[#ff905a]">(65% OFF)</span>
                                    </div>
                                    <p className="text-[16px] mb-[10px] relative">
                                        <span className="text-[#03a685] font-bold text-[14px] block mr-[10px] mt-[5px]">inclusive of all taxes</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2.5">
                                    <div>
                                        <p className="text-[#282c3f] text-[16px] uppercase mt-0 mb-[15px] mx-0 leading-[0.4px]">
                                            <strong>More Color</strong>
                                        </p>
                                        {Array.from({ length: 10 }, (_, index) => index + 1).map(elm =>
                                            <Link title={miniColorChangerImages[elm]?.color} href={`/product-view/${miniColorChangerImages[elm]?.color}`} key={elm} className="inline-block">
                                                <Image className="bg-[rgb(159,168,171)] w-[55px] h-auto mr-[10px] mb-[12px]" src={miniColorChangerImages[elm]?.url} height={74} width={55} alt={miniColorChangerImages[elm]?.color} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2.5 mb-6">
                                    <div className="mt-0 mb-2.5 mx-0 relative leading-none">
                                        <h4 className="inline-block text-[16px] m-0 font-bold">SELECT SIZE </h4>
                                        <span className="ml-[30px]">
                                            <button className="outline-0 bg-transparent border-0 tracking-[.5px] text-right pb-[5px] text-[#ff3e6c] text-[14px] font-bold uppercase mt-0">Size Chart</button>
                                            <span className="inline-block w-[6px] h-[6px] ml-[4px] border-solid border-[#ff3e6c] border-t-2 border-r-2 border-b-0 border-l-0 rotate-45 mb-[2px]"></span>
                                        </span>
                                    </div>
                                    <div className="mb-[10px] box-border flex flex-wrap items-center m-0 text-[13px] overflow-auto relative">
                                        {Array.from({ length: 4 }, (_, index) => index + 1).map(elm =>
                                            <div className="group/ptag my-2.5 mr-2.5 ml-0" key={elm}>
                                                <div className="relative">
                                                    <button className="group/btn min-h-[48px] min-w-[60px] rounded-[50px] h-auto w-auto px-[10px] font-bold bg-white text-center relative border border-[#bfc0c6] text-[#282c3f] disabled:text-[#d5d6d9] disabled:border disabled:border-[#d5d6d9] disabled:cursor-default disabled:outline-none disabled:overflow-hidden" disabled={elm === 1}>
                                                        <span className="hidden group-disabled/btn:inline-block absolute top-1/2 left-0 w-full h-px bg-[#d5d6d9] -rotate-45"></span>
                                                        <p className="m-0 text-[14px] px-2 font-bold">
                                                            {elm === 1 ? "30" : elm === 2 ? "32" : elm === 3 ? "34" : "36"}
                                                            <span className="group-disabled/btn:hidden hidden xs:block text-[12px] capitalize font-normal mt-1">Rs. {749 * elm}</span>
                                                        </p>
                                                    </button>
                                                </div>
                                                <div className="absolute top-0 left-0 h-[1px] xs:min-w-[400px] w-full xs:w-auto invisible transition-visibility ease-out delay-[0.1s] group-hover/ptag:visible">
                                                    <div className="absolute xs:min-w-[400px] w-full xs:w-auto left-0 bottom-[10px] text-left border border-[#e9e9eb] bg-white p-[18px] z-[29] rounded-[4px] font-normal shadow-[0_2px_16px_0_rgba(40,44,63,0.1)]">
                                                        <div className="text-[#535665]">
                                                            <span className="text-sm text-[#282c3f]">Garment Measurement : {" "}</span>
                                                            <span className="text-sm ml-1.5 font-bold text-[#535665]">Thigh - 23.0 in</span>
                                                        </div>
                                                        <div className="text-[#535665] mt-[5px] text-[12px]">
                                                            <div>Fit: Regular Fit<br />The model (height 6&apos;) is wearing a size 32</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="relative p-0 z-0 w-full xs:w-[84%] bottom-0 flex flex-col gap-2 xs:gap-0 xs:flex-row mt-[15px]">
                                        <div className="inline-flex justify-center items-center text-center py-[15px] px-0 mt-0 rounded font-bold cursor-pointer bg-[#ff3e6c] border border-[#ff3e6c] text-white flex-[3_1_0%] w-full xs:mr-[3%] outline-none text-[16px] min-h-[22px]">
                                            <span className="inline-flex justify-center items-center mr-3 scale-90 bg-[position:-2283px_-40px] w-[23px] h-[22px] bg-[url('/images/icons.png')] bg-[length:1404px_105px]"></span>
                                            ADD TO BAG
                                        </div>
                                        <div className="inline-flex justify-center items-center text-center w-full xs:w-[34%] py-2.5 px-0 mt-0 rounded font-bold cursor-pointer flex-[2_1_0%] border border-[#d4d5d9] bg-white tracking-[0.4px] text-[#282c3f] outline-none text-[16px] min-h-[22px]">
                                            <span className="inline-flex justify-center items-center -my-0.5 mx-2 scale-90 bg-[position:-315px_-186px] w-[17px] h-[22px] bg-[url('/images/icons.png')] bg-[length:1404px_105px]"></span>
                                            <span>WISHLIST</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[23px] py-[17px] px-[10px] border-t-[1.5px] border-b-[1.5px] border-[#eaeaec]">
                                    <div>
                                        <div className="text-[16px]">
                                            <span className="font-bold leading-none text-[#282c3f] mr-[5px] cursor-pointer">
                                                <strong className="text-[#282c3f] font-bold">₹ 734</strong>
                                            </span>
                                            <span className="opacity-80 leading-[1.2] text-[#94969f] mr-[5px]">
                                                <s>₹ 2099</s>
                                            </span>
                                            <span className="font-bold leading[0.5] text-[#ff905a] inline-block">(65% OFF)</span>
                                        </div>
                                        <div className="mt-1">
                                            Seller: {" "}
                                            <span className="cursor-pointer text-[#ff3e6c] font-bold">Flashstar Commerce</span>
                                        </div>
                                        <div className="mt-[6px]">
                                            <span className="cursor-pointer text-[#ff3e6c] font-bold text-sm">1 more seller availble</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="static bg-white h-auto w-full">
                                    <div className="mt-[30px]">
                                        <h4 className="text-[#282c3f] text-[16px] m-0 font-bold uppercase">
                                            Delivery Options
                                            <span className="align-middle ml-[5px] bg-[url(/images/icons.png)] bg-[position:-252px_-58px] bg-[size:1404px_105px] w-[23px] h-[22px] inline-block"></span>
                                        </h4>
                                        <form autoComplete="off" className="mt-[16px] p-0 relative">
                                            <input type="text" placeholder="Enter Pincode" name="pincode" className="rounded-[5px] border border-[#d4d5d9] shadow-none p-[10px] text-[16px] min-w-[160px] outline-none w-[calc(100%-40px)]" />
                                            <input type="submit" className="cursor-pointer relative -left-[60px] bg-transparent outline-none mt-[10px] text-[14px] font-bold bg-[#fff] border-0 text-[#ff3e6c] capitalize" value="Check" />
                                        </form>
                                        <p className="text-[13px] text-[#282c3f] mt-2">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-5">
                                        <div className="text-[#282c3f] text-[16px] m-0 p-0 relative">
                                            <div className="my-[5px] mx-0 inline-block w-[90%] align-top">100% Original Products</div>
                                        </div>
                                        <div className="text-[#282c3f] text-[16px] m-0 p-0 relative">
                                            <div className="my-[5px] mx-0 inline-block w-[90%] align-top">Pay on delivery might be available</div>
                                        </div>
                                        <div className="text-[#282c3f] text-[16px] m-0 p-0 relative">
                                            <div className="my-[5px] mx-0 inline-block w-[90%] align-top">Easy 14 days returns and exchanges</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[40px] pb-[20px] border-b border-[#d4d5d9]">
                                    <h4 className="text-[16px] font-bold leading-[1] text-[#282c3f] mb-[16px] uppercase mt-0">
                                        BEST OFFERS
                                        <span className="align-middle ml-[5px] bg-[url(/images/icons.png)] bg-[length:1404px_105px] bg-[position:-211px_-58px] w-[18px] h-[22px] inline-block"></span>
                                    </h4>
                                    <div>
                                        <div className="mb-4 flex flex-wrap justify-between items-center">
                                            <div>
                                                <div className="text-[16px] text-[#282c3f] mb-[1px]">
                                                    <b>
                                                        Best Price {" "}
                                                        <span className="text-[#ff905a] font-bold">Rs. 475</span>
                                                    </b>
                                                </div>
                                                <ul className="text-[16px] text-[#282c3f] p-0 m-[8px_0_0] list-none w-full">
                                                    <li className="mb-2">
                                                        <div className="w-[4px] h-[4px] rounded-[4px] bg-[#282c3f] mr-[10px] mb-[2px] inline-block align-middle"></div>
                                                        <div className="inline-block align-top w-[90%]">
                                                            Applicable on: {" "}
                                                            <span>Orders above Rs. 850 (only on first purchase)</span>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="w-[4px] h-[4px] rounded-[4px] bg-[#282c3f] mr-[10px] mb-[2px] inline-block align-middle"></div>
                                                        <div className="inline-block align-top w-[90%]">
                                                            Coupon code:  {" "}
                                                            <span className="font-bold">MENSTYLE</span>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="w-[4px] h-[4px] rounded-[4px] bg-[#282c3f] mr-[10px] mb-[2px] inline-block align-middle"></div>
                                                        <div className="inline-block align-top w-[90%]">
                                                            Coupon discount: {" "}
                                                            <span>Rs. 259 off (check cart for final savings)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link href="https://www.myntra.com/myntra?f=Coupons:MENSTYLE_118748" className="inline-block text-[14px] font-[700] text-[#ff3f6c] mt-[4px] cursor-pointer">View Eligible Products</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-4">
                                                <div className="text-[16px] text-[#282c3f] mb-[1px]">
                                                    <b>
                                                        10% Instant Discount on RuPay Credit Card.
                                                    </b>
                                                </div>
                                                <ul className="text-[16px] text-[#282c3f] p-0 m-[8px_0_0] list-none w-full">
                                                    <li className="mb-2">
                                                        <div className="w-[4px] h-[4px] rounded-[4px] bg-[#282c3f] mr-[10px] mb-[2px] inline-block align-middle"></div>
                                                        <div className="inline-block align-top w-[90%]">
                                                            Min Spend ₹3,500; Max Discount ₹1,000.
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link href="https://www.myntra.com/shop/Rupay-offer20" className="inline-block text-[14px] font-[700] text-[#ff3f6c] mt-[4px] cursor-pointer">Terms & Conditions</Link>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-[16px] text-[#282c3f] mb-[1px]">
                                                    <b>
                                                        10% Instant Discount on select Kotak Credit and Debit Cards.
                                                    </b>
                                                </div>
                                                <ul className="text-[16px] text-[#282c3f] p-0 m-[8px_0_0] list-none w-full">
                                                    <li className="mb-2">
                                                        <div className="w-[4px] h-[4px] rounded-[4px] bg-[#282c3f] mr-[10px] mb-[2px] inline-block align-middle"></div>
                                                        <div className="inline-block align-top w-[90%]">
                                                            Min Spend ₹3,000; Max Discount ₹1,000.
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link href="https://www.myntra.com/shop/Rupay-offer20" className="inline-block text-[14px] font-[700] text-[#ff3f6c] mt-[4px] cursor-pointer">Terms & Conditions</Link>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-[16px] text-[#282c3f] mb-[1px]">
                                                    <b>
                                                        EMI option available
                                                    </b>
                                                </div>
                                                <ul className="text-[16px] text-[#282c3f] p-0 m-[8px_0_0] list-none w-full">
                                                    <li className="mb-2">
                                                        <div className="w-[4px] h-[4px] rounded-[4px] bg-[#282c3f] mr-[10px] mb-[2px] inline-block align-middle"></div>
                                                        <div className="inline-block align-top w-[90%]">
                                                            EMI starting from Rs.35/month
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link href="https://www.myntra.com/shop/Rupay-offer20" className="inline-block text-[14px] font-[700] text-[#ff3f6c] mt-[4px] cursor-pointer">View Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5 border-b border-[#d4d5d9] mb-2.5">
                                <div className="mt-[30px] font-light">
                                    <div>
                                        <h4 className="text-[#282c3f] text-[16px] m-0 font-[700] uppercase">
                                            Product Details
                                            <span className="align-middle ml-[5px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[position:-231px_-58px] w-[21px] h-[22px] inline-block"></span>
                                        </h4>
                                        <div className="text-[#282c3f] leading-[1.4] text-[16px] mt-[12px] w-[84%]">
                                            <ul className="p-0 mb-2.5">
                                                <li> Olive green woven cargos </li>
                                                <li> Regular fit </li>
                                                <li> Mid-rise </li>
                                                <li> Length:  regular </li>
                                                <li> Pattern: solid </li>
                                                <li> Flat-front, with no pleats design </li>
                                                <li> Feature:  plain </li>
                                                <li> 6 pockets </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[#282c3f] text-[16px] m-0 font-[700]">
                                            Size & Fit
                                        </h4>
                                        <div className="text-[#282c3f] leading-[1.4] text-[16px] mt-[12px] w-[84%]">
                                            <ul className="p-0 mb-2.5">
                                                <li> Fit: Regular Fit </li>
                                                <li> The model (height 6&apos;) is wearing a size 32 </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[#282c3f] text-[16px] m-0 font-[700]">
                                            Material & Care
                                        </h4>
                                        <div className="text-[#282c3f] leading-[1.4] text-[16px] mt-[12px] w-[84%]">
                                            <ul className="p-0 mb-2.5">
                                                <li> Cotton </li>
                                                <li> Machine Wash </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="font-normal border-none mt-3">
                                        <h4 className="pb-3 capitalize font-bold text-[16px] border-none text-[#282c3f] m-0">Specifications</h4>
                                        <div className="flex justify-start flex-wrap flex-row">
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Waist Rise</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Mid Raise</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Length</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Regular</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Fit</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Regular Fit</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Print or Pattern Type</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Solid</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Closure</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Drawstring</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Type of Pleat</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Flat Front</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Weave Type</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Woven</div>
                                            </div>
                                            <div className="relative odd:mr-[10%] border-b border-[#eaeaec] mb-3 pb-2.5 basis-[40%]">
                                                <div className="text-[#7e818c] relative text-[12px] leading-none mb-[5px]">Fly Type</div>
                                                <div className="relative text-[#282c3f] text-[16px] leading-[1.2]">Zip</div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-bold text-[#ff3f6c] mt-1 cursor-pointer">See More</div>
                                    </div>
                                </div>
                            </div>
                            <main className="w-full relative z-[8]  bg-white">
                                <div className="flex">
                                    <div className="flex-1">
                                        <div className="pb-5 border-b border-[#d4d5d9]">
                                            <div className="mt-2.5">
                                                <div className="text-[16px] font-[700] uppercase w-full pb-[7px] text-[#282c3f]">
                                                    Ratings
                                                    <span className="align-middle ml-[5px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-276px_-60px] w-[21px] h-[22px] inline-block"></span>
                                                </div>
                                                <div className="mt-[22px] flex flex-col xs:flex-row">
                                                    <div className="flex flex-col">
                                                        <div className="h-[58px] text-[48px] text-[#282c3f] flex flex-row">
                                                            <span>4</span>
                                                            <span className="mt-[25px] ml-[10px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-194px_-28px] w-[24px] h-[24px] inline-block"></span>
                                                        </div>
                                                        <div className="mt-[12px] text-sm font-normal text-[#282c3f]">
                                                            11.6k Verified Buyers
                                                        </div>
                                                    </div>
                                                    <div className="xs:ml-[34px] xs:h-[96px] border-b-[1.2px] xs:border-l-[1.2px] my-2 xs:my-0 border-[#eaeaec]"></div>
                                                    <div>
                                                        {Array.from({ length: 5 }, (_, index) => 5 - index).map(elm =>
                                                            <div className="flex flex-row xs:ml-[46px] h-[18px]" key={elm}>
                                                                <div className="flex text-sm text-[#a9abb3]">
                                                                    <span className="w-[7px]">{elm}</span>
                                                                    <span className="m-[2px_3px] transform scale-[.8] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-265px_-28px] w-[12px] h-[12px] inline-block"></span>
                                                                </div>
                                                                <progress min={0} max={11571} value={ratingCount[elm].count} className={`${ratingCount[elm].color} border-none mt-[6px] w-[120px] h-1 bg-[#f5f5f6] align-baseline inline-block [&:not(value)]:text-[#f5f5f6]`}></progress>
                                                                <div className="text-[12px] text-[#282c3f] ml-[9px]">{ratingCount[elm].count}</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <div>
                                                    <div className="text-[16px] font-bold uppercase w-full text-[#282c3f]">
                                                        What Customers Said
                                                        <span className="inline-block pl-[5px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px]" width="20" height="16" viewBox="0 0 20 16">
                                                                <g fill="none" fillRule="evenodd"><g><g><g><g><path fill="#FFF" d="M.827 3.937L2.416.847c.149-.298.576-.294.72.006L4.816 4.32l3.81.587c.329.051.457.456.217.687L6.062 8.26l.623 3.802c.054.328-.293.576-.587.418L3.08 10.752" transform="translate(-1015 -1319) translate(824 1315) translate(191 4) translate(10 .874)"></path><path stroke="#282C3F" strokeLinecap="round" strokeLinejoin="round" d="M.827 3.937L2.416.847c.149-.298.576-.294.72.006L4.816 4.32l3.81.587c.329.051.457.456.217.687L6.062 8.26l.623 3.802c.054.328-.293.576-.587.418L3.08 10.752" transform="translate(-1015 -1319) translate(824 1315) translate(191 4) translate(10 .874)"></path></g><path fill="#FFF" d="M7.517 2.933L9.32 6.655l4.09.629c.326.05.454.454.214.683l-2.982 2.862.667 4.08c.054.327-.29.573-.582.417L7.08 13.373 3.405 15.27c-.294.15-.635-.1-.576-.426l.73-4.07L.62 7.87c-.236-.233-.102-.634.226-.68l4.098-.567 1.858-3.694c.15-.296.572-.293.716.005" transform="translate(-1015 -1319) translate(824 1315) translate(191 4)"></path><path stroke="#282C3F" strokeLinecap="round" strokeLinejoin="round" d="M7.517 2.933L9.32 6.655l4.09.629c.326.05.454.454.214.683l-2.982 2.862.667 4.08c.054.327-.29.573-.582.417L7.08 13.373 3.405 15.27c-.294.15-.635-.1-.576-.426l.73-4.07L.62 7.87c-.236-.233-.102-.634.226-.68l4.098-.567 1.858-3.694c.15-.296.572-.293.716.005z" transform="translate(-1015 -1319) translate(824 1315) translate(191 4)"></path></g></g></g></g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <div className="my-2.5 text-sm text-[#3e4152]">
                                                                <div>Fit</div>
                                                                <div className="mb-1">
                                                                    <div className="mr-[12px] w-[140px] h-1 bg-[#eaeaec] relative rounded-sm inline-block align-middle">
                                                                        <div className="bg-[#03a685] absolute top-0 left-0 h-full rounded-sm"></div>
                                                                    </div>
                                                                    <div className="font-bold text-[13.5px] inline-block align-middle">Just Right (58%)</div>
                                                                </div>
                                                            </div>
                                                            <div className="my-2.5 text-sm text-[#3e4152]">
                                                                <div>Stretch</div>
                                                                <div className="mb-1">
                                                                    <div className="mr-[12px] w-[140px] h-1 bg-[#eaeaec] relative rounded-sm inline-block align-middle">
                                                                        <div className="bg-[#03a685] absolute top-0 left-0 h-full rounded-sm"></div>
                                                                    </div>
                                                                    <div className="font-bold text-[13.5px] inline-block align-middle">Medium (63%)</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-sm font-bold text-[#ff3f6c] mt-2.5 cursor-pointer">View Details</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[#282c3f] leading-[1.4] text-[16px] mt-5 font-semibold mb-[5px]">
                                                Customer Photos (247)
                                            </div>
                                            <div className="xs:flex xs:-mx-[5px]">
                                                <div className="inline-flex xs:inline">
                                                    <div className="cursor-pointer w-[75px] h-[75px] m-[5px] relative overflow-hidden">
                                                        <Image className="absolute z-[2] w-full h-full object-cover bg-[cover]" src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2024/1/25/460b9fe6-8855-4af3-984f-0399e0edad891706197087047-image353.jpg" height={75} width={75} alt="Customer Photos" />
                                                        <div className="absolute z-[1] left-0 top-0 w-[99.99%] h-[99.99%] bg-[#eaeaec] bg-[linear-gradient(to_right,_#eaeaec_0%,_#dad9d9_35%,_#eaeaec_70%,_#eaeaec)] bg-[size:800px_100%] animate-[image-grid-loading-skeleton_1.7s_cubic-bezier(.25,.46,.45,.94)_infinite_forwards]"></div>
                                                    </div>
                                                </div>
                                                <div className="inline-flex xs:inline">
                                                    <div className="cursor-pointer w-[75px] h-[75px] m-[5px] relative overflow-hidden">
                                                        <Image className="absolute z-[2] w-full h-full object-cover bg-[cover]" src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2024/3/1/81d99771-a451-4634-9ba1-aecf3fdbe2a81709270217168-image912.jpg" height={75} width={75} alt="Customer Photos" />
                                                        <div className="absolute z-[1] left-0 top-0 w-[99.99%] h-[99.99%] bg-[#eaeaec] bg-[linear-gradient(to_right,_#eaeaec_0%,_#dad9d9_35%,_#eaeaec_70%,_#eaeaec)] bg-[size:800px_100%] animate-[image-grid-loading-skeleton_1.7s_cubic-bezier(.25,.46,.45,.94)_infinite_forwards]"></div>
                                                    </div>
                                                </div>
                                                <div className="inline-flex xs:inline">
                                                    <div className="cursor-pointer w-[75px] h-[75px] m-[5px] relative overflow-hidden">
                                                        <Image className="absolute z-[2] w-full h-full object-cover bg-[cover]" src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2024/3/9/47e2dfa1-4477-430e-bbd1-1132379797ac1709983562400-image275.jpg" height={75} width={75} alt="Customer Photos" />
                                                        <div className="absolute z-[1] left-0 top-0 w-[99.99%] h-[99.99%] bg-[#eaeaec] bg-[linear-gradient(to_right,_#eaeaec_0%,_#dad9d9_35%,_#eaeaec_70%,_#eaeaec)] bg-[size:800px_100%] animate-[image-grid-loading-skeleton_1.7s_cubic-bezier(.25,.46,.45,.94)_infinite_forwards]"></div>
                                                    </div>
                                                </div>
                                                <div className="inline-flex xs:inline">
                                                    <div className="cursor-pointer w-[75px] h-[75px] m-[5px] relative overflow-hidden after:w-full after:h-full after:absolute after:left-0 after:right-0 after:content-[''] after:opacity-80 after:bg-[#2a2c3f] after:z-[3]">
                                                        <Image className="absolute z-[2] w-full h-full object-cover bg-[cover]" src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2024/6/25/659d277d-db48-4f09-bbe9-6bda798b58161719296185161-image800.jpg" height={75} width={75} alt="Customer Photos" />
                                                        <span className="text-white text-[16px] font-semibold absolute top-4 bottom-0 right-0 left-0 m-auto w-full h-[21px] z-[4] text-center">+ 244</span>
                                                        <div className="absolute z-[1] left-0 top-0 w-[99.99%] h-[99.99%] bg-[#eaeaec] bg-[linear-gradient(to_right,_#eaeaec_0%,_#dad9d9_35%,_#eaeaec_70%,_#eaeaec)] bg-[size:800px_100%] animate-[image-grid-loading-skeleton_1.7s_cubic-bezier(.25,.46,.45,.94)_infinite_forwards]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[#282c3f] leading-[1.4] text-[16px] mt-[20px] font-semibold">
                                            Customer Reviews (1985)
                                        </div>
                                        <div className="mb-[15px]">
                                            <div className="border-b border-[#eaeaec] m-0 py-[18px]">
                                                <div className="relative pl-[35px]">
                                                    <div className="absolute top-[3px] left-0">
                                                        <span className="bg-[#14958f] text-[#fff] text-[10px] font-semibold relative h-[14px] w-[22px] leading-[14px] block pl-[4px] rounded-[1px] box-border">5</span>
                                                        <span className="absolute top-[1px] left-2.5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12"><path fill="#FFF" fillRule="evenodd" d="M6 9.644l2.867 1.821c.464.296.743.093.623-.45L8.724 7.56l2.581-2.657c.384-.395.25-.716-.306-.716H7.686L6.374.93c-.206-.513-.542-.512-.748 0L4.314 4.187H1.001c-.553 0-.687.324-.306.716L3.276 7.56l-.766 3.455c-.12.544.165.742.623.45L6 9.645z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="text-[16px] text-[#282c3f] leading-5 w-full text-balance">
                                                        I recently purchased this cargo pant and I must say, I&apos;m impressed with its quality which has been provided at this price point and fit. The material feels durable and the stitching is well done, ensuring longevity. The cargo pockets add both functionality and style. Overall, I&apos;m quite satisfied with this purchase and would recommend it to anyone in need of a reliable and comfortable cargo pant.
                                                    </div>
                                                    <div className="inline-flex">
                                                        <div className="flex -mx-[5px]">
                                                            <div>
                                                                <div className="cursor-pointer w-[75px] h-[75px] m-[5px] relative overflow-hidden">
                                                                    <Image className="absolute z-[2] w-full h-full object-cover bg-[cover]" src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2024/1/25/460b9fe6-8855-4af3-984f-0399e0edad891706197087047-image353.jpg" height={75} width={75} alt="Customer Photos" />
                                                                    <div className="absolute z-[1] left-0 top-0 w-[99.99%] h-[99.99%] bg-[#eaeaec] bg-[linear-gradient(to_right,_#eaeaec_0%,_#dad9d9_35%,_#eaeaec_70%,_#eaeaec)] bg-[size:800px_100%] animate-[image-grid-loading-skeleton_1.7s_cubic-bezier(.25,.46,.45,.94)_infinite_forwards]"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between text-sm text-[#565a63] mt-3.5 pl-[35px]">
                                                    <div>
                                                        <span className="after:content-['|'] after:w-[15px] after:inline-block after:text-center">
                                                            Saurabh Kumar Singh
                                                        </span>
                                                        <span>20 Mar 2024</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-[12px] flex items-center">
                                                            <div className="flex items-center ml-[30px]">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" className="mx-2 cursor-pointer align-text-bottom relative top-[-3px] rotate-180">
                                                                    <g fill="none" fillRule="evenodd"><path d="M-5-8h24v24H-5z"></path><path fill="#535766" fillRule="nonzero" d="M1.032.383H2.9c.307 0 .593.127.769.34C4.04.276 4.612 0 5.27 0h6.391c1.405 0 2.306.723 2.481 1.955L15 7.184v.127c0 1.106-.922 2.02-2.086 2.02H9.663v2.252c0 .957-.285 1.637-.856 2.04-.9.638-2.13.277-2.174.256l-.264-.085V11.01c0-1.998-2.394-2.678-2.482-2.7l-.197-.042a1.022 1.022 0 01-.813.382H1.01A.992.992 0 010 7.673V1.382a1.029 1.029 0 011.032-1zM7.162 11v2.246c.327.042.873.085 1.265-.212.37-.254.545-.742.545-1.462V8.606h3.948c.741 0 1.33-.593 1.33-1.293v-.042l-.85-5.19v-.022c-.11-.89-.698-1.335-1.723-1.335H5.33C4.59.724 4 1.317 4 2.017v5.55l.174.043c.11.042 2.988.848 2.988 3.39zM.75 7.693c0 .147.135.273.293.273h1.914c.158 0 .293-.126.293-.273V1.48c0-.147-.135-.273-.293-.273H1.043c-.158 0-.293.126-.293.273v6.213z"></path></g>
                                                                </svg>
                                                                <span>3</span>
                                                            </div>
                                                            <div className="flex items-center ml-[30px]">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" className="mx-2 cursor-pointer align-text-bottom">
                                                                    <g fill="none" fillRule="evenodd"><path d="M-5-8h24v24H-5z"></path><path fill="#535766" fillRule="nonzero" d="M1.032.383H2.9c.307 0 .593.127.769.34C4.04.276 4.612 0 5.27 0h6.391c1.405 0 2.306.723 2.481 1.955L15 7.184v.127c0 1.106-.922 2.02-2.086 2.02H9.663v2.252c0 .957-.285 1.637-.856 2.04-.9.638-2.13.277-2.174.256l-.264-.085V11.01c0-1.998-2.394-2.678-2.482-2.7l-.197-.042a1.022 1.022 0 01-.813.382H1.01A.992.992 0 010 7.673V1.382a1.029 1.029 0 011.032-1zM7.162 11v2.246c.327.042.873.085 1.265-.212.37-.254.545-.742.545-1.462V8.606h3.948c.741 0 1.33-.593 1.33-1.293v-.042l-.85-5.19v-.022c-.11-.89-.698-1.335-1.723-1.335H5.33C4.59.724 4 1.317 4 2.017v5.55l.174.043c.11.042 2.988.848 2.988 3.39zM.75 7.693c0 .147.135.273.293.273h1.914c.158 0 .293-.126.293-.273V1.48c0-.147-.135-.273-.293-.273H1.043c-.158 0-.293.126-.293.273v6.213z"></path></g>
                                                                </svg>
                                                                3
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.myntra.com/reviews/25483216" data-refreshpage="true" target="_blank" className="text-sm font-semibold text-[#ff3f6c]">View all 1985 reviews</a>
                                    </div>
                                </div>
                            </main>
                            <div className="mt-[15px]">
                                <div className="text-[#282c3f] text-[16px] py-[4px] mb-[6px]">
                                    <span>Product Code: {" "}
                                        <span className="text-[#282c3f] font-bold relative">25483216</span>
                                    </span>
                                </div>
                                <div className="text-[#282c3f] text-[16px] py-[4px] mb-[6px]">
                                    <span>Seller: {" "}
                                        <span className="text-[#ff3e6c] cursor-pointer font-bold relative">Flashstar Commerce</span>
                                    </span>
                                    <div className="text-[14px] py-[4px] my-[8px] font-bold cursor-pointer">View Supplier Information</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductView;
