"use client";
import { CustomButton, DashboardSidebar } from "@/components";
import { nanoid } from "nanoid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { formatCategoryName } from "../../../../utils/categoryFormating";
import apiClient from "@/lib/api";

const DashboardCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // getting all categories to be displayed on the all categories page
  useEffect(() => {
    apiClient.get("/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4 relative z-10">
      <DashboardSidebar />
      <div className="w-full p-4 rounded-lg
                bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                dark:bg-black/20 dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-center mb-5 text-white">
          All Categories
        </h1>
        <div className="flex justify-end mb-5">
          <Link href="/admin/categories/new">
            <CustomButton
              buttonType="button"
              className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
            >
              Add New
            </CustomButton>
          </Link>
        </div>
        <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto w-full h-[80vh]">
          <table className="table table-md table-pin-cols bg-transparent text-white">
            {/* head */}
            <thead>
              <tr className="bg-white/20 dark:bg-black/30">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                  </label>
                </th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories &&
                categories.map((category: Category) => (
                  <tr key={nanoid()} className="hover:bg-white/10 dark:hover:bg-black/20">
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                      </label>
                    </th>

                    <td>
                      <div>
                        <p>{formatCategoryName(category?.name)}</p>
                      </div>
                    </td>

                    <th>
                      <Link
                        href={`/admin/categories/${category?.id}`}
                        className="btn btn-ghost btn-xs text-white hover:bg-white/20"
                      >
                        details
                      </Link>
                    </th>
                  </tr>
                ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr className="bg-white/20 dark:bg-black/30">
                <th></th>
                <th>Name</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCategory;
