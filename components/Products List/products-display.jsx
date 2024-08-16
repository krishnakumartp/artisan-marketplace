/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "./product-card";
import productData from "/data/product-list/demo-products.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
        value: "customer_rating"
    },
];

const ProductsDisplay = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const [sortBy, setSortBy] = useState("Recommanded");
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});

    const createQueryString = useCallback(
        (name, value, isChecked) => {
            const params = new URLSearchParams(searchParams.toString());
            const existingParams = !['sort', 'discount'].includes(name) ? (params.get(name)?.split(",") || []) : [];

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
        sortProductsByType();
        const category = (searchParams.get('category') || '');
        const brand = (searchParams.get('brand') || '');
        const price = (searchParams.get('price') || '');
        const color = (searchParams.get('color') || '');
        const discount = (searchParams.get('discount') || '');

        setFilters({ category: category?.length ? category.split(',') : [], brand: brand?.length ? brand.split(',') : [], price: price?.length ? price.split(',') : [], color: color?.length ? color.split(',') : [], discount: discount?.length ? discount.split(',') : [] });
    }, [pathName, searchParams]);


    const onChangeSortType = (value) => {
        setSortBy(value);
        router.push(`${pathName}?${createQueryString('sort', value, true)}`);
    };

    const sortProductsByType = () => {
        const sortType = searchParams.get('sort') || '';

        if (sortType === 'price_desc') {
            setProducts(productData.sort((a, b) => b.price - a.price));
            setSortBy(sortByOptions.find(elm => elm.value === sortType)?.label || "Recommanded");
        }
        else if (sortType === 'price_asc') {
            setProducts(productData.sort((a, b) => a.price - b.price));
            setSortBy(sortByOptions.find(elm => elm.value === sortType)?.label || "Recommanded");
        }
        else if (sortType === 'discount') {
            setProducts(productData.sort((a, b) => b.discount - a.discount));
            setSortBy(sortByOptions.find(elm => elm.value === sortType)?.label || "Recommanded");
        }
        else if (sortType === 'popularity') {
            setProducts(productData.sort((a, b) => b.ratedBy - a.ratedBy));
            setSortBy(sortByOptions.find(elm => elm.value === sortType)?.label || "Recommanded");
        }
        else if (sortType === 'customer_rating') {
            setProducts(productData.sort((a, b) => b.rating - a.rating));
            setSortBy(sortByOptions.find(elm => elm.value === sortType)?.label || "Recommanded");
        }
        else {
            setProducts(productData);
            setSortBy(sortByOptions.find(elm => elm.value === sortType)?.label || "Recommanded");
        }
    };

    const cancelFilter = (type, value) => {
        router.push(`${pathName}?${createQueryString(type, value, false)}`);
    };

    return (
        <div className="flex-[1_1_0%] self-start flex-wrap flex-col product-list">
            <div className="flex flex-row flex-wrap items-stretch content-stretch justify-start after:clear-both after:content-[''] after:table">
                <section className="shadow-[0_8px_8px_-4px_rgba(40,44,63,.04)] border-b-0 w-full select-none pt-[23px] pb-[15px]">
                    <div>
                        <div className="inline-block float-right mr-[30px] mb-0 mt-[-7px] relative top-[5px]">
                            <div className="group px-[14px] py-[9px] text-[14px] text-[#282c3f] cursor-pointer relative w-[255px] box-border rounded-[2px] bg-white border border-[#d4d5d9] hover:shadow-[0_8px_10px_0_rgba(0,0,0,.08)]">
                                Sort By : {" "}
                                <span className="capitalize font-bold text-[#282c3f]">{sortBy}</span>
                                <span className="capitalize font-bold text-[#282c3f] ml-[5px] mt-[5px] float-right bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[-367px_-1px] w-[15px] h-[10px] inline-block">
                                </span>

                                <ul className="group-hover:block hidden pl-0 w-[255px] bg-white absolute top-[33px] left-[-1px] m-0 py-4 px-0 z-[2] border border-[#d4d5d9] border-t-0 shadow-[0_8px_10px_0_rgba(0,0,0,.08)]">
                                    {sortByOptions.map(item => (
                                        <li key={item.value} className={`hover:bg-[#f4f4f5] ${item.label === sortBy ? "bg-[#f4f4f5] font-bold" : ""}`}>
                                            <label className="block text-sm text-[#282c3f] cursor-pointer py-2.5 px-5">
                                                <input type="radio" value={item.value} className="invisible hidden" onClick={() => onChangeSortType(item.value)} />
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
                            {Object.keys(filters).map(type =>
                                filters[type].map(elm =>
                                    <li className="mt-0 me-2 mb-1.5 ms-0" key={elm}>
                                        <div className="relative bg-white capitalize text-[#3e4152] cursor-default text-[12px] px-[26px] py-[5px] pl-[10px] transition-all ease-out duration-200 rounded-[20px] border border-[#d4d5d9] hover:border-[#94969f]">
                                            {elm}
                                            <label className="absolute top-[4px] right-[4px] w-[18px] h-[20px] z-[1] text-center cursor-pointer" onClick={() => cancelFilter(type, elm)}>
                                                <span className="align-middle opacity-70 transform scale-[0.7] w-[14px] h-[14px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[position:-1083px_0] inline-block"></span>
                                            </label>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </section>

                <div className="pl-[15px] pt-6 pr-5 flex flex-row flex-wrap justify-start items-stretch content-stretch">
                    <section className="w-full">
                        <div className="opacity-100 visible z-10 right-[30px] mt-[-25px] top-[95%] fixed cursor-pointer w-[40px] h-[40px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] bg-[position:-286px_0] inline-block" onClick={() => window.scrollTo(0, 0)}></div>
                        <ul className="pl-0 flex flex-row flex-wrap items-stretch content-stretch m-[0_-10px_0_3px] w-full justify-between">
                            {products.map(elm =>
                                <ProductCard key={elm.id} data={elm} />
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductsDisplay;
