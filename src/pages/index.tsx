
import { ArticlesFilter } from "./components/Articles";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Tags } from "./components/Tags";

export default function HomePage(){
  return(
    <div className="flex flex-col w-full h-screen">
      <Header/>
      <section className="grid grid-cols-12 place-items-center h-full">
        <main className="col-span-8 border-r border-gray-300 w-full h-full">
          <div className="flex flex-col w-full space-y-4 p-10">
            <div className="flex w-full items-center space-x-4">
              <SearchBar/>
              <Tags/>
            </div>
            <ArticlesFilter/>
          </div>
        </main>
        <Sidebar/>
      </section>
    </div>
  )
}

