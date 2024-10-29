"use client";

import Image from "next/image";
import React, { useState } from "react";
import logoNav from "@/assets/testImages/mariadb.svg";
import Trading from "./TradindsStreams/Trading";
import { useInLiveContext } from "@/context/InLiveGlobalState";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import SigninNavBar from "./modalCredentials/Signin";
import SignupNavBar from "./modalCredentials/signup";

type contentProps = "signin" | "signup";

function NavBar() {
  const { isLive, toggleLiveState } = useInLiveContext();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [content, setContent] = useState<contentProps | null>(null);

  const router = useRouter();

  const handlerReturnHome = () => {
    if (isLive == true) toggleLiveState();

    router.push("/");
  };

  const handleOpenModal = (data: contentProps) => {
    if (data == "signin") {
      setContent(data);
      setModalOpen(true);
    }

    if (data == "signup") {
      setContent(data);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className="flex flex-row p-5 justify-between">
        <div>
          <Image
            onClick={handlerReturnHome}
            src={logoNav}
            alt="logoNav"
            className="w-16"
          />
        </div>

        {isLive == true && (
          <>
            <Trading />

            <div className="flex gap-1">
              {isLive && (
                <button
                  onClick={handlerReturnHome}
                  type="button"
                  className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2 -ms-1 text-[#626890]"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="ethereum"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                    ></path>
                  </svg>
                  Volver al inicio
                </button>
              )}
              <button
                type="button"
                onClick={() => handleOpenModal("signin")}
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                Iniciar Sesion
              </button>

              <button
                type="button"
                onClick={() => handleOpenModal("signup")}
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
              >
                Registrarse
              </button>
            </div>
          </>
        )}

        {isLive == false && (
          <>
            <div className="grid place-content-center">
              <input
                type="text"
                name="q"
                className="w-96 border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                placeholder="search"
              />
            </div>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => handleOpenModal("signin")}
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                Iniciar Sesion
              </button>

              <button
                type="button"
                onClick={() => handleOpenModal("signup")}
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
              >
                Registrarse
              </button>
            </div>
          </>
        )}
      </nav>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {content == "signin" && <SigninNavBar />}
        {content == "signup" && <SignupNavBar />}
      </Modal>
    </>
  );
}

export default NavBar;
