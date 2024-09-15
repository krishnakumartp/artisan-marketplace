"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Filters from "./filters";
import ProductsDisplay from "./products-display";
import { useMediaQuery } from "react-responsive";
import FilterModal from "./filter-modal";
import { Suspense } from "react";
import Footer from "@/components/Footer/footer";

const ProductsList = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    //     window.addEventListener("scroll", function () {
    //         const filterSection = document.querySelector(".filter-section");
    //         const productList = document.querySelector(".product-list");
    //         const productListHeight = productList.offsetHeight;
    //         const scrollPosition = window.scrollY;

    //         if (scrollPosition >= productListHeight - filterSection.offsetHeight) {
    //             filterSection.classList.add("fixed");
    //         } else {
    //             filterSection.classList.remove("fixed");
    //         }
    //     });
    if (isDesktopOrLaptop && openFilterModal) {
      setOpenFilterModal(false);
    }
    setIsDesktop(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);
  return (
    <Suspense>
      <div className="min-h-[750px]">
        <div>
          <main className="pt-[58px] lg:pt-20 mb-0 mx-auto max-w-[1600px]">
            <div className="flex flex-row flex-wrap items-stretch content-stretch justify-start after:clear-both after:content-[''] after:table">
              <div className="align-top pt-5 pb-0 px-0">
                <ul className="pl-0 text-sm overflow-hidden inline-block my-0 me-0 ms-[25px] align-top">
                  <li className="align-top float-left text-sm inline-block capitalize leading-[1px] mr-[5px] after:text-sm after:content-['/'] after:ml-[5px] after:text-[#282c3f]">
                    <Link href="/" className="capitalize">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="align-top float-left text-sm inline-block capitalize leading-[1px] mr-[5px] after:text-sm after:content-['/'] after:ml-[5px] after:text-[#282c3f]">
                    <Link href="/clothing" className="capitalize">
                      <span>Clothing</span>
                    </Link>
                  </li>
                  <li className="align-top float-left text-sm inline-block capitalize leading-[1px] mr-[5px] last:font-bold">
                    <span className="text-sm m-0 text-[#282c3f] capitalize">
                      Fusion Wear for Women
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-stretch content-stretch justify-start after:clear-both after:content-[''] after:table">
              <div className="mt-2.5 mr-0 mb-[5px] ml-[25px] flex items-center max-w-[1000px] overflow-hidden">
                <h1 className="font-bold text-ellipsis overflow-hidden whitespace-nowrap text-[#282c3f] max-w-[400px] capitalize inline-block text-base m-0">
                  Fusion Wear for Women
                </h1>
                <span className="text-[#878b94] whitespace-pre-wrap inline-block text-base m-0 font-light">
                  {" "}
                  - 414546 items
                </span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-stretch content-stretch justify-start after:clear-both after:content-[''] after:table">
              {isDesktop ? (
                <Filters />
              ) : (
                <FilterModal
                  isOpen={openFilterModal}
                  setIsOpen={setOpenFilterModal}
                />
              )}
              <ProductsDisplay setIsOpen={setOpenFilterModal} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default ProductsList;
