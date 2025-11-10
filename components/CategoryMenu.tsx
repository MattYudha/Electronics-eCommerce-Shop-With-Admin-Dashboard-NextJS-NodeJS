// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************

import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <div
      className="relative py-10 bg-cover bg-center border-t-2 border-b-2 border-grilli-gold bg-white dark:bg-gray-800"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative">
        <Heading title="BROWSE CATEGORIES" className="text-black dark:text-white" />
        <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
          {categoryMenuList.map((item) => (
            <CategoryItem title={item.title} key={item.id} href={item.href}>
              <Image src={item.src} width={48} height={48} alt={item.title} />
            </CategoryItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
