/* eslint-disable @typescript-eslint/no-misused-promises */
import { IoMdReorder } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { signIn, signOut } from "next-auth/react";

import clsx from "clsx";
import { HiLogout } from "react-icons/hi";

type Props = {
  status: "loading" | "unauthenticated" | "authenticated";
};

export default function Header({ status }: Props) {
  console.log(status);

  const login = async (): Promise<void> => {
    await signIn();
  };

  const logout = async (): Promise<void> => {
    await signOut();
  };

  return (
    <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-200 bg-white">
      <div>
        <IoMdReorder className="text-2xl text-gray-600" />
      </div>
      <h1 className="text-xl font-thin">Ultimate blog app</h1>
      {status === "authenticated" ? (
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <BsBell className="text2xl text-gray-600" />
          </div>
          <div className="cursor-pointer">
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button 
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
              
            >
              <div>Write</div>
              <FiEdit />
            </button>
          </div>
          <div>
            <button
              onClick={logout}
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            >
              <div>Logout</div>
              <HiLogout />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={login}
            className={clsx(
              "flex items-center space-x-3 rounded border border-gray-200",
              "px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            )}
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
