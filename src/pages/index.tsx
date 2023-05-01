import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { MainLayout } from "./layout";
import { WriteFormModal } from "./components/WriteFormModal";

export default function HomePage() {

  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col">
        <section className="grid h-full grid-cols-12 place-items-center">
          <Main />
          <Sidebar />
        </section>
      </div>
      <WriteFormModal/>
    </MainLayout>
  );
}
