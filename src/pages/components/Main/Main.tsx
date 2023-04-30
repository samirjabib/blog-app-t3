import { Article, ArticlesFilter } from "../Articles";
import { SearchBar } from "../SearchBar";
import { Tags } from "../Tags";

export default function Main(){
    return(
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
    )
}