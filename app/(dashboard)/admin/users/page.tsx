"use client";
import { CustomButton, DashboardSidebar } from "@/components";
import apiClient from "@/lib/api";
import { nanoid } from "nanoid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // sending API request for all users
    apiClient.get("/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4 relative z-10">
      <DashboardSidebar />
      <div className="w-full p-4 rounded-lg
                bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                dark:bg-black/20 dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-center mb-5 text-white">All users</h1>
        <div className="flex justify-end mb-5">
          <Link href="/admin/users/new">
            <CustomButton
              buttonType="button"
              customWidth="110px"
              paddingX={10}
              paddingY={5}
              textSize="base"
              className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
            >
              Add new user
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
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users &&
                users.map((user) => (
                  <tr key={nanoid()} className="hover:bg-white/10 dark:hover:bg-black/20">
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                      </label>
                    </th>

                    <td>
                      <div className="flex items-center gap-3">
                        <p>{user?.email}</p>
                      </div>
                    </td>
                    <td>
                      <p>{user?.role}</p>
                    </td>
                    <th>
                      <Link
                        href={`/admin/users/${user?.id}`}
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
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
