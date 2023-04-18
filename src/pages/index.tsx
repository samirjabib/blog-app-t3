import { Article, ArticlesFilter } from "./components/Articles";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Tags } from "./components/Tags";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <section className="grid h-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300">
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
  );
}

