import { useState , useContext } from "react";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Sidebar } from "./components/Sidebar";
import { MainLayout } from "./layout";
import { GlobalContext } from "~/contexts/GlobalContextProvider/context";

export default function HomePage() {

  const {isWriteModalOpen, setIsWriteModalOpen} = useContext(GlobalContext)

  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col">
        <section className="grid h-full grid-cols-12 place-items-center">
          <Main />
          <Sidebar />
        </section>
      </div>
      <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)} />
    </MainLayout>
  );
}
