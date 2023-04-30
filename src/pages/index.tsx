import { Article, ArticlesFilter } from "./components/Articles";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Tags } from "./components/Tags";
import { MainLayout } from "./layout";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col">
        <section className="grid h-full grid-cols-12 place-items-center">
          <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
            <div className="flex w-full flex-col space-y-4 p-10">
              <div className="flex w-full items-center space-x-4">
                <SearchBar />
                <Tags />
              </div>
              <ArticlesFilter />
              <Article/>
            </div>
          </main>
          <Sidebar />
        </section>
      </div>
    </MainLayout>
  );
}

