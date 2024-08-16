"use client";
import { useState } from "react";
import ProductCard from "./product-card";

const sortByOptions = [
    {
        label: "Recommanded",
        value: "recommanded"
    },
    {
        label: "What's New",
        value: "new"
    },
    {
        label: "Popularity",
        value: "popularity"
    },
    {
        label: "Better Discount",
        value: "discount"
    },
    {
        label: "Price: High to Low",
        value: "price_desc"
    },
    {
        label: "Price: Low to High",
        value: "price_asc"
    },
    {
        label: "Customer Rating",
        value: "Customer Rating"
    },
];
const ProductsDisplay = () => {
    const [sortBy, setSortBy] = useState("recommanded");

    return (
        <div className="flex-[1_1_0%] self-start flex-wrap flex-col product-list">
            <div className="flex flex-row flex-wrap items-stretch content-stretch justify-start after:clear-both after:content-[''] after:table">
                <section className="shadow-[0_8px_8px_-4px_rgba(40,44,63,.04)] border-b-0 w-full select-none pt-[23px] pb-[15px]">
                    <div>
                        <div className="inline-block float-right mr-[30px] mb-0 mt-[-7px] relative top-[5px]">
                            <div className="group px-[14px] py-[9px] text-[14px] text-[#282c3f] cursor-pointer relative w-[255px] box-border rounded-[2px] bg-white border border-[#d4d5d9] hover:shadow-[0_8px_10px_0_rgba(0,0,0,.08)]">
                                Sort By : {" "}
                                <span className="capitalize font-bold text-[#282c3f]">Recommanded</span>
                                <span className="capitalize font-bold text-[#282c3f] ml-[5px] mt-[5px] float-right bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-367px_-1px] w-[15px] h-[10px] inline-block">
                                </span>

                                <ul className="group-hover:block hidden pl-0 w-[255px] bg-white absolute top-[33px] left-[-1px] m-0 py-4 px-0 z-[2] border border-[#d4d5d9] border-t-0 shadow-[0_8px_10px_0_rgba(0,0,0,.08)]">
                                    {sortByOptions.map(item => (
                                        <li key={item.value} className={`hover:bg-[#f4f4f5] ${item.value === sortBy ? "bg-[#f4f4f5] font-bold" : ""}`}>
                                            <label className="block text-sm text-[#282c3f] cursor-pointer py-2.5 px-5">
                                                <input type="radio" value={item.value} className="invisible hidden" onClick={() => setSortBy(item.value)} />
                                                {item.label}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <ul className="pl-0 text-sm flex text-[#282c3f] flex-row flex-wrap -m-2.5 me-0 mb-0 ms-4">
                                <li className="mr-1 mb-0 mt-2.5 cursor-pointer">
                                    <label className="cursor-pointer whitespace-nowrap relative pt-[5px] pe-2 pb-[5px] ps-2.5 hover:rounded-[20px] hover:bg-[#f4f4f5]">
                                        <h4 className="pl-0 font-normal m-0 inline-block">Bundles</h4>
                                        <span className="align-middle scale-[0.8] ml-1 bg-[-2678px_-89px] w-[15px] h-[15px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block"></span>
                                    </label>
                                </li>
                                <li className="mr-1 mb-0 mt-2.5 cursor-pointer">
                                    <label className="cursor-pointer whitespace-nowrap relative pt-[5px] pe-2 pb-[5px] ps-2.5 hover:rounded-[20px] hover:bg-[#f4f4f5]">
                                        <h4 className="pl-0 font-normal m-0 inline-block">Country of Origin</h4>
                                        <span className="align-middle scale-[0.8] ml-1 bg-[-2678px_-89px] w-[15px] h-[15px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block"></span>
                                    </label>
                                </li>
                                <li className="mr-1 mb-0 mt-2.5 cursor-pointer">
                                    <label className="cursor-pointer whitespace-nowrap relative pt-[5px] pe-2 pb-[5px] ps-2.5 hover:rounded-[20px] hover:bg-[#f4f4f5]">
                                        <h4 className="pl-0 font-normal m-0 inline-block">Size</h4>
                                        <span className="align-middle scale-[0.8] ml-1 bg-[-2678px_-89px] w-[15px] h-[15px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-[15px]">
                        <ul className="flex flex-row flex-wrap items-baseline m-0 pl-[17px]">
                            <li className="mt-0 me-2 mb-1.5 ms-0">
                                <div className="relative bg-white capitalize text-[#3e4152] cursor-default text-[12px] px-[26px] py-[5px] pl-[10px] transition-all ease-out duration-200 rounded-[20px] border border-[#d4d5d9] hover:border-[#94969f]">
                                    Bundles
                                    <label className="absolute top-[4px] right-[4px] w-[18px] h-[20px] z-[1] text-center cursor-pointer">
                                        <span className="align-middle opacity-70 transform scale-[0.7] w-[14px] h-[14px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[position:-1083px_0] inline-block"></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="pl-[15px] pt-6 pr-5 flex flex-row flex-wrap justify-start items-stretch content-stretch">
                    <section className="w-full">
                        <div className="opacity-100 visible z-10 right-[30px] mt-[-25px] top-[95%] fixed cursor-pointer w-[40px] h-[40px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[position:-286px_0] inline-block" onClick={() => window.scrollTo(0,0)}></div>
                        <ul className="pl-0 flex flex-row flex-wrap items-stretch content-stretch m-[0_-10px_0_3px] w-full justify-between">
                            {Array.from({ length: 50 }, (_, index) => index + 1).map(elm =>
                                <ProductCard key={elm} />
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductsDisplay;
