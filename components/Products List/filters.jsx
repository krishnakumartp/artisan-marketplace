/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import allCategory from "/data/filters/category-list.json";
import allBrand from "/data/filters/brand-list.json";
import priceList from "/data/filters/price-list.json";
import allColor from "/data/filters/color-list.json";
import discountList from "/data/filters/discount-list.json";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filters = ({ isOpen }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const [categoryList, setCategoryList] = useState(allCategory.slice(0, 8));
    const [brandList, setBrandList] = useState(allBrand.slice(0, 8));
    const [colorList, setColorList] = useState(allColor.slice(0, 8));

    const [filters, setFilters] = useState({
        category: [],
        brand: [],
        price: [],
        color: [],
        discount: [],
    });

    const [isFiltered, setIsFiltered] = useState(false);

    const createQueryString = useCallback(
        (name, value, isChecked) => {
            const params = new URLSearchParams(searchParams.toString());
            const existingParams = name !== 'discount' ? (params.get(name)?.split(",") || []) : [];

            if (isChecked) {
                existingParams.push(value);
            } else {
                const index = existingParams.indexOf(value);
                if (index > -1) existingParams.splice(index, 1);
            }

            if (existingParams.length) {
                params.set(name, existingParams.join(","));
            } else {
                params.delete(name);
            }

            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        const filterTypes = ["category", "brand", "price", "color", "discount"];
        const newFilters = {};

        filterTypes.forEach(type => {
            const filterValues = searchParams.get(type)?.split(",") || [];
            newFilters[type] = filterValues;
        });

        setIsFiltered(Object.values(newFilters).some(values => values.length > 0));
        setFilters(newFilters);
    }, [pathName, searchParams]);

    const toggleSearchInput = (e, id) => {
        e?.stopPropagation();
        const inputContainer = document.getElementById(id);
        const inputEl = document.querySelector(`#${id} input`);
        const iconEl = document.querySelector(`#${id} span`);
        const shouldShow = inputEl.classList.contains("hidden");

        if (shouldShow) {
            inputContainer.style.cssText = "width:221px;border-radius:15px;";
            iconEl.style.cssText = "right:8px;top:8px;width:14px;height:14px;background-position:-1083px 0;";
            inputEl.classList.remove('hidden');
            inputEl.focus();
        } else {
            if(document.activeElement === inputEl) return
            inputContainer.style.cssText = "";
            iconEl.style.cssText = "";
            inputEl.classList.add('hidden');
            resetLists();
        }
    };

    const resetLists = () => {
        setCategoryList(allCategory.slice(0, 8));
        setBrandList(allBrand.slice(0, 8));
        setColorList(allColor.slice(0, 8));
    };

    const filterSearch = (id, value) => {
        const searchFunctions = {
            "category-container": setCategoryList,
            "brand-container": setBrandList,
            "color-container": setColorList,
        };

        const dataMapping = {
            "category-container": allCategory,
            "brand-container": allBrand,
            "color-container": allColor,
        };

        const filteredList = dataMapping[id].filter(elm =>
            elm.value.toLowerCase().startsWith(value.toLowerCase())
        ).slice(0, 8);

        searchFunctions[id](filteredList);
    };

    const onFilterChange = (e, value, type) => {
        const queryString = createQueryString(type, value, e.target.checked);
        router.push(`${pathName}?${queryString}`);
    };

    const clearFilters = () => router.push(pathName);


    return (
        <div className={`flex-[1_1_0%] min-w-[252px] ${!isOpen ? 'max-w-[252px]' : ''} !flex-grow-0 self-start flex-wrap flex-col filter-section`}>
            <section>
                <div className="box-border transition-margin duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] mt-0 pt-[23px]">
                    <div className="relative border-r-0 pt-0px pb-[15px] pl-[25px] border-b-[1px] border-b-[#e9e9ed]">
                        <span className="font-bold uppercase">FILTERS</span>
                        {isFiltered && (
                            <span className="absolute top-0.5 right-2.5 font-bold uppercase text-[#ff3f6c] text-[13px] cursor-pointer" onClick={() => clearFilters()}>clear all</span>
                        )}
                    </div>

                    <div className="relative pt-[20px] pb-[15px] pl-[25px] border-b-[1px] border-b-[#e9e9ed] border-r-[1px] border-r-[#edebef]">
                        <span className="font-bold uppercase text-[14px] mb-[18px] clear-both text-[#282c3f] block">Categories</span>

                        <div className="absolute top-[12px] right-[14px] w-[30px] h-[30px] bg-[#f5f5f6] rounded-full" id="category-container" onClick={(e) => toggleSearchInput(e, 'category-container')}>
                            <input className="hidden bg-transparent outline-none border-none text-[14px] h-full w-full absolute right-0 px-[33px] py-[2px] pl-[14px]" placeholder="Search for Categories" onChange={(e) => filterSearch("category-container", e.target?.value || '')}></input>
                            <span className="inline-block absolute cursor-pointer right-1 top-1 scale-75 w-[21px] h-[21px] bg-[url('/images/icons.png')] bg-[-754px_0] bg-[length:1404px_105px]" onClick={(e) => toggleSearchInput(e, "category-container")}></span>
                        </div>

                        <ul className="m-0 pl-0">
                            {categoryList?.map(category => (
                                <li className="text-sm mb-[7px]" key={category.label}>
                                    <label className="block w-[95%] whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis min-h-[17px] text-[#282c3f] relative">
                                        <input className="peer my-0 ms-0 me-4 invisible box-border p-0" type="checkbox" checked={filters.category.includes(category.value)} onChange={(e) => onFilterChange(e, category.value, "category")} />
                                        {category.label}
                                        <span className="text-[#94969f] text-[11px] ml-1"> ({category.count})</span>
                                        <div className="absolute top-0 left-0 w-[16px] h-[16px] border border-[#c3c2c9] bg-[#fff] rounded-[2px] box-border after:absolute after:top-[4px] after:left-[4px] after:z-[1] after:w-[8px] after:h-[5px] after:border-t-2 after:border-r-2 after:border-transparent after:border-t-[#fff] after:border-r-[#fff] after:rotate-[-230deg] after:transition-all after:duration-300 after:ease-in-out peer-checked:after:block peer-checked:border-0 peer-checked:bg-[#ff3f6c]"></div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <div className="relative pt-[20px] pb-[15px] pl-[25px] border-b-[1px] border-b-[#e9e9ed] border-r-[1px] border-r-[#edebef]">
                        <span className="font-bold uppercase text-[14px] mb-[18px] clear-both text-[#282c3f] block">Brand</span>

                        <div className="absolute top-[12px] right-[14px] w-[30px] h-[30px] bg-[#f5f5f6] rounded-full" id="brand-container" onClick={(e) => toggleSearchInput(e, "brand-container", true)}>
                            <input className="hidden bg-transparent outline-none border-none text-[14px] h-full w-full absolute right-0 px-[33px] py-[2px] pl-[14px]" placeholder="Search for Brand" onChange={(e) => filterSearch("brand-container", e.target?.value || '')}></input>
                            <span className="inline-block absolute cursor-pointer right-1 top-1 scale-75 w-[21px] h-[21px] bg-[url('/images/icons.png')] bg-[-754px_0] bg-[length:1404px_105px]" onClick={(e) => toggleSearchInput(e, "brand-container", false)}></span>
                        </div>

                        <ul className="m-0 pl-0">
                            {brandList?.map(brand => (
                                <li className="text-sm mb-[7px]" key={brand.label}>
                                    <label className="block w-[95%] whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis min-h-[17px] text-[#282c3f] relative">
                                        <input className="peer my-0 ms-0 me-4 invisible box-border p-0" type="checkbox" checked={filters.brand.includes(brand.value)} onChange={(e) => onFilterChange(e, brand.value, "brand")} />
                                        {brand.label}
                                        <span className="text-[#94969f] text-[11px] ml-1"> ({brand.count})</span>
                                        <div className="absolute top-0 left-0 w-[16px] h-[16px] border border-[#c3c2c9] bg-[#fff] rounded-[2px] box-border after:absolute after:top-[4px] after:left-[4px] after:z-[1] after:w-[8px] after:h-[5px] after:border-t-2 after:border-r-2 after:border-transparent after:border-t-[#fff] after:border-r-[#fff] after:rotate-[-230deg] after:transition-all after:duration-300 after:ease-in-out peer-checked:after:block peer-checked:border-0 peer-checked:bg-[#ff3f6c]"></div>
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <div className=" cursor-pointer mt-2.5 text-[15px] ml-[27px] text-[#ff3f6c]">+ 728 more</div>
                    </div> */}

                    <div className="relative pt-[20px] pb-[15px] pl-[25px] border-b-[1px] border-b-[#e9e9ed] border-r-[1px] border-r-[#edebef]">
                        <span className="font-bold uppercase text-[14px] mb-[18px] clear-both text-[#282c3f] block">Price</span>

                        <ul className="m-0 pl-0">
                            {priceList?.map(price => (
                                <li className="text-sm mb-[7px]" key={price.label}>
                                    <label className="block w-[95%] whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis min-h-[17px] text-[#282c3f] relative">
                                        <input className="peer my-0 ms-0 me-4 invisible box-border p-0" type="checkbox" checked={filters.price.includes(price.value)} onChange={(e) => onFilterChange(e, price.value, "price")} />
                                        {price.label}
                                        <span className="text-[#94969f] text-[11px] ml-1"> ({price.count})</span>
                                        <div className="absolute top-0 left-0 w-[16px] h-[16px] border border-[#c3c2c9] bg-[#fff] rounded-[2px] box-border after:absolute after:top-[4px] after:left-[4px] after:z-[1] after:w-[8px] after:h-[5px] after:border-t-2 after:border-r-2 after:border-transparent after:border-t-[#fff] after:border-r-[#fff] after:rotate-[-230deg] after:transition-all after:duration-300 after:ease-in-out peer-checked:after:block peer-checked:border-0 peer-checked:bg-[#ff3f6c]"></div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative pt-[20px] pb-[15px] pl-[25px] border-b-[1px] border-b-[#e9e9ed] border-r-[1px] border-r-[#edebef]">
                        <span className="font-bold uppercase text-[14px] mb-[18px] clear-both text-[#282c3f] block">Color</span>

                        <div className="absolute top-[12px] right-[14px] w-[30px] h-[30px] bg-[#f5f5f6] rounded-full" id="color-container" onClick={(e) => toggleSearchInput(e, "color-container", true)}>
                            <input className="hidden bg-transparent outline-none border-none text-[14px] h-full w-full absolute right-0 px-[33px] py-[2px] pl-[14px]" placeholder="Search for Color" onChange={(e) => filterSearch("color-container", e.target?.value || '')}></input>
                            <span className="inline-block absolute cursor-pointer right-1 top-1 scale-75 w-[21px] h-[21px] bg-[url('/images/icons.png')] bg-[-754px_0] bg-[length:1404px_105px]" onClick={(e) => toggleSearchInput(e, "color-container", false)}></span>
                        </div>

                        <ul className="m-0 pl-0">
                            {colorList?.map(color => (
                                <li className="text-sm mb-[7px]" key={color.label}>
                                    <label className="block w-[95%] whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis min-h-[17px] text-[#282c3f] relative">
                                        <input className="peer my-0 ms-0 me-4 invisible box-border p-0" type="checkbox" checked={filters.color.includes(color.value)} onChange={(e) => onFilterChange(e, color.value, "color")} />
                                        <div className={`w-[15px] h-[15px] rounded-full inline-block mr-2 ml-0 cursor-pointer relative leading-[16px] align-top ${color.label === "Multi" ? "bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-2494px_-60px]" : color.bgColor === "#ffffff" ? 'border border-[#d6d6d6]' : ''}`} style={{ backgroundColor: color.bgColor }}></div>

                                        {color.label}
                                        <span className="text-[#94969f] text-[11px] ml-1"> ({color.count})</span>
                                        <div className="absolute top-0 left-0 w-[16px] h-[16px] border border-[#c3c2c9] bg-[#fff] rounded-[2px] box-border after:absolute after:top-[4px] after:left-[4px] after:z-[1] after:w-[8px] after:h-[5px] after:border-t-2 after:border-r-2 after:border-transparent after:border-t-[#fff] after:border-r-[#fff] after:rotate-[-230deg] after:transition-all after:duration-300 after:ease-in-out peer-checked:after:block peer-checked:border-0 peer-checked:bg-[#ff3f6c]"></div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                        {allColor?.length !== colorList?.length && (
                            <div className=" cursor-pointer mt-2.5 text-[15px] ml-[27px] text-[#ff3f6c]" onClick={() => setColorList(allColor)}>+ 38 more</div>
                        )}
                    </div>

                    <div className="relative pt-[20px] pb-[15px] pl-[25px] border-b-[1px] border-b-[#e9e9ed] border-r-[1px] border-r-[#edebef]">
                        <span className="font-bold uppercase text-[14px] mb-[18px] clear-both text-[#282c3f] block">Discount Range</span>

                        <ul className="m-0 pl-0">
                            {discountList?.map(discount => (
                                <li className="text-sm mb-[7px]" key={discount.label}>
                                    <label className="block w-[95%] whitespace-nowrap cursor-pointer overflow-hidden text-ellipsis min-h-[17px] text-[#282c3f] relative">
                                        <input className="peer my-0 ms-0 me-4 invisible box-border p-0" name="discount_product" type="radio" value={discount.value} checked={filters.discount.includes(discount.value)} onChange={(e) => onFilterChange(e, discount.value, "discount")} />
                                        {discount.label}

                                        <div className="absolute box-border top-0 left-0 before:absolute before:z-[1] before:w-4 before:h-4 before:border before:border-[#c3c2c9] before:rounded-full before:visible before:inline-block before:align-middle before:p-0.5 before:text-center peer-checked:before:-rotate-90 peer-checked:before:bg-[#ff3f6c] peer-checked:before:border-[#ff3f6c] peer-checked:before:shadow-[inset_0_0_0_3px_#fff]"></div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Filters;
